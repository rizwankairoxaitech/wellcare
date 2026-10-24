// Hero DNA: liquid-ink effect on a standard DNA structure.
//   1. uDraw  — a crisp line-art double helix draws itself in (violet → pink → blue strokes)
//   2. uMelt  — the strokes turn into flowing, translucent ink ribbons with glassy rims, spray and droplets
//   3. after  — the ink keeps flowing and the helix keeps turning; scrolling softly dissolves it
// The structure stays a textbook double helix: two regular backbones and evenly spaced, straight
// base-pair rungs. Ribbons carry both shapes: aCenter/aTangent/aLineW describe the thin outline stroke,
// position describes the melted ink sheet; the shader blends between them per vertex.
import * as THREE from 'three';

const HEIGHT = 34, HALF = HEIGHT / 2, R = 2.3, TWIST = 0.4, RUNG_STEP = 0.85;

/* ---------- shared GLSL: simplex noise, flow field, melt timing, palette ---------- */
const COMMON = /* glsl */ `
  uniform float uTime;
  uniform float uDraw;      // 0 → 1: outline draws in from the top
  uniform float uMelt;      // 0 → 1: outline turns into liquid ink
  uniform float uScatter;   // scroll-driven break-up
  uniform float uHalf;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }
  float fbm(vec3 p) {
    float f = 0.0, a = 0.5;
    for (int i = 0; i < 3; i++) { f += a * snoise(p); p *= 2.03; a *= 0.5; }
    return f;
  }

  // How melted a point is: the top goes first, with an organic noisy front.
  float meltAmount(vec3 rest, float h) {
    return clamp(uMelt * 1.9 - (1.0 - h) * 0.5 - 0.2 + snoise(rest * 0.35 + 3.0) * 0.18, 0.0, 1.0);
  }
  // The outline draws in from the top.
  float drawMask(float h) { return smoothstep(0.0, 0.06, uDraw * 1.12 - (1.0 - h)); }

  vec3 flowField(vec3 p, float t) {
    vec3 q = p * 0.42 + vec3(0.0, -t * 0.35, 0.0);
    return vec3(snoise(q), snoise(q + vec3(17.1, 3.2, 9.7)), snoise(q + vec3(-8.3, 21.4, 5.1)));
  }
  // loose: 0 = core of a strand … 1 = spray far from it; m: melt amount.
  // The core moves very little so the helix keeps its standard shape; edges and spray flow freely.
  vec3 liquidPosition(vec3 p, float loose, float m) {
    vec3 f = flowField(p, uTime);
    p += f * (0.08 + loose * 0.45) * m;
    p += flowField(p * 2.3 + 11.0, uTime * 1.6) * loose * 0.22 * m;
    p += f * uScatter * (3.0 + loose * 5.0);
    p.xz *= 1.0 + uScatter * 0.25;
    return p;
  }

  // reference palette: deep violet → purple → magenta → pink, cooling to blue at the bottom
  vec3 inkColor(float tone, float h) {
    vec3 c = mix(vec3(0.30, 0.09, 0.72), vec3(0.50, 0.17, 0.88), smoothstep(0.0, 0.33, tone));
    c = mix(c, vec3(0.76, 0.24, 0.82), smoothstep(0.33, 0.7, tone));
    c = mix(c, vec3(0.95, 0.54, 0.89), smoothstep(0.7, 1.0, tone));
    c = mix(c, vec3(0.45, 0.55, 0.98), smoothstep(0.44, 0.22, h) * 0.85);
    c = mix(c, vec3(0.45, 0.25, 0.95), smoothstep(0.8, 1.0, h) * 0.4);
    return c;
  }
`;

const ribbonVertex = /* glsl */ `
  ${COMMON}
  attribute vec2 aUv;        // x: along the strand, y: across (-1..1)
  attribute float aSeed;
  attribute vec3 aCenter;    // outline centre line
  attribute vec3 aTangent;   // outline direction
  attribute float aLineW;    // outline half-width
  attribute float aLayer;    // 0 = main sheet, 1 = extra sheet (only exists once melted)
  varying vec2 vUv;
  varying float vSeed;
  varying float vH;
  varying float vDepth;
  varying float vMelt;
  varying float vLayer;
  varying vec3 vView;
  void main() {
    vUv = aUv;
    vSeed = aSeed;
    vLayer = aLayer;
    vH = clamp((aCenter.y + uHalf) / (2.0 * uHalf), 0.0, 1.0);
    float m = meltAmount(aCenter, vH);
    vMelt = m;
    // outline: a stroke that always faces the camera, around the centre line
    vec4 cv = modelViewMatrix * vec4(aCenter, 1.0);
    vec3 tv = normalize((modelViewMatrix * vec4(aTangent, 0.0)).xyz);
    vec3 sideV = normalize(cross(tv, normalize(-cv.xyz)));
    vec3 lineView = cv.xyz + sideV * aLineW * aUv.y;
    // melted: the full ink sheet, flowing
    vec3 liquidView = (modelViewMatrix * vec4(liquidPosition(position, abs(aUv.y) * 0.6, m), 1.0)).xyz;
    vec3 mv = mix(lineView, liquidView, smoothstep(0.0, 1.0, m));
    vView = mv;
    vDepth = smoothstep(30.0, 18.0, -mv.z);
    gl_Position = projectionMatrix * vec4(mv, 1.0);
  }
`;

const ribbonFragment = /* glsl */ `
  ${COMMON}
  uniform float uOpacity;
  uniform float uSolid;    // rungs stay intact; backbones tear like ink
  uniform float uFilm;     // films only exist once melted
  varying vec2 vUv;
  varying float vSeed;
  varying float vH;
  varying float vDepth;
  varying float vMelt;
  varying float vLayer;
  varying vec3 vView;
  void main() {
    float m = vMelt;
    float t = uTime * 0.3;
    float edge = abs(vUv.y);
    float along = vUv.x * 46.0;
    float streak = fbm(vec3(along * 0.22 - t * 1.4, vUv.y * 1.6, vSeed * 3.1));
    float tear = fbm(vec3(along * 0.11 + t * 0.4, vUv.y * 0.9 + vSeed, vSeed * 7.3 + t * 0.15));

    // outline: crisp anti-aliased stroke; liquid: torn ink sheet with holes
    float line = 1.0 - smoothstep(0.55, 1.0, edge);
    float body = 1.0 - smoothstep(0.3 + tear * 0.55, 1.0, edge);
    body = mix(body, 1.0 - smoothstep(0.6, 1.0, edge), uSolid);
    float holes = smoothstep(-0.32, -0.05, tear - uScatter * 1.1 + 0.12);
    holes = mix(holes, 1.0, uSolid * (1.0 - min(uScatter, 1.0)));
    float a = mix(line, body * holes, m);
    a *= drawMask(vH) * smoothstep(0.0, 0.05, vH) * smoothstep(1.0, 0.95, vH);
    a *= mix(1.0 - vLayer, 1.0, m);
    a *= mix(1.0, m, uFilm);
    if (a < 0.01) discard;

    // line art: violet at the top, soft pink through the middle (blue at the bottom comes from inkColor)
    float lineTone = 0.28 + 0.62 * smoothstep(0.64, 0.46, vH);
    float inkTone = clamp(0.42 + streak * 1.25 + (vSeed - 0.5) * 0.35, 0.0, 1.0);
    vec3 col = inkColor(mix(lineTone, inkTone, m), vH);

    // glassy liquid: fresnel rim + specular glint from screen-space normals
    vec3 n = normalize(cross(dFdx(vView), dFdy(vView)));
    vec3 V = normalize(-vView);
    if (dot(n, V) < 0.0) n = -n;
    float fres = pow(1.0 - clamp(dot(n, V), 0.0, 1.0), 2.0);
    float spec = pow(max(dot(reflect(-normalize(vec3(-0.4, 0.8, 0.6)), n), V), 0.0), 28.0);
    col = mix(col, vec3(1.0, 0.9, 1.0), (fres * 0.45 + smoothstep(0.5, 0.8, streak) * 0.2) * m);
    col += spec * 0.6 * m;
    col = mix(col, inkColor(0.9, vH), smoothstep(0.55, 1.0, edge) * 0.25 * m);

    float liquidDensity = (0.5 + 0.35 * smoothstep(-0.3, 0.4, streak)) * (0.75 + fres * 0.5);
    liquidDensity = mix(liquidDensity, 0.9, uSolid * 0.6);
    float density = mix(0.95, liquidDensity, m);
    gl_FragColor = vec4(min(col, vec3(1.0)), a * density * (0.55 + 0.45 * vDepth) * uOpacity);
  }
`;

const pointVertex = /* glsl */ `
  ${COMMON}
  uniform float uSize;
  uniform float uPR;
  uniform float uOpacity;
  attribute vec3 aRoot;    // where the particle sits on the outline before melting
  attribute vec3 aRand;
  attribute float aScale;
  attribute float aLoose;
  attribute float aTone;
  attribute float aKind;   // 0 grain, 1 filament, 2 droplet, 3 mist
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float h = clamp((aRoot.y + uHalf) / (2.0 * uHalf), 0.0, 1.0);
    float m = meltAmount(aRoot, h);
    vec3 rest = mix(aRoot, position, smoothstep(0.0, 1.0, m));
    vec3 p = liquidPosition(rest, aLoose, m) + aRand * uScatter * aLoose * 3.0;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aScale * uPR / -mv.z * mix(0.6, 1.0, m);
    vColor = inkColor(mix(0.45, aTone, m), h);
    float kindAlpha = aKind < 0.5 ? 0.5 : aKind < 1.5 ? 0.75 : aKind < 2.5 ? 0.9 : 0.3;
    float presence = aKind < 0.5 ? mix(0.35, 1.0, m) : m;   // grain dots already hug the outline
    float ends = smoothstep(0.0, 0.05, h) * smoothstep(1.0, 0.95, h);
    vAlpha = kindAlpha * presence * drawMask(h) * ends * (0.5 + 0.5 * smoothstep(30.0, 18.0, -mv.z))
      * (1.0 - uScatter * 0.6) * uOpacity;
  }
`;

const pointFragment = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(vColor, smoothstep(0.5, 0.15, d) * vAlpha);
  }
`;

/* ---------- geometry helpers ---------- */
function randomSource(seed) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

// A standard helix: radius only breathes slightly so the two backbones stay regular.
function centerAt(y, L, out = new THREE.Vector3()) {
  const a = y * TWIST + L.strand * Math.PI + L.da;
  const r = R + L.dr + 0.06 * Math.sin(y * 1.9 + L.phase);
  return out.set(Math.cos(a) * r, y + L.dy, Math.sin(a) * r);
}

// Centre, width direction and width of one ribbon layer at height y.
function ribbonFrame(y, L, out) {
  const a = y * TWIST + L.strand * Math.PI + L.da;
  const r = R + L.dr + 0.06 * Math.sin(y * 1.9 + L.phase);
  const radial = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
  const tangent = new THREE.Vector3(-Math.sin(a) * r * TWIST, 1, Math.cos(a) * r * TWIST).normalize();
  const binormal = new THREE.Vector3().crossVectors(tangent, radial).normalize();
  const twist = y * L.twist + L.phase;
  centerAt(y, L, out.center);
  out.side.copy(radial).multiplyScalar(Math.cos(twist)).addScaledVector(binormal, Math.sin(twist)).normalize();
  out.width = L.width * Math.max(0.2, 0.65 + 0.3 * Math.sin(y * 1.3 + L.phase) + 0.15 * Math.sin(y * 3.7 + L.phase * 1.7));
  out.radial = radial;
  return out;
}

class StripBuilder {
  constructor() {
    this.pos = []; this.uv = []; this.seed = []; this.center = []; this.tangent = []; this.lineW = []; this.layer = []; this.index = [];
  }
  // rows: [{ center, side, width, u, line: { center, tangent, width } }]
  add(rows, across, seed, layer) {
    const base = this.pos.length / 3;
    rows.forEach((row, i) => {
      for (let j = 0; j <= across; j++) {
        const v = (j / across) * 2 - 1;
        this.pos.push(row.center.x + row.side.x * row.width * v, row.center.y + row.side.y * row.width * v, row.center.z + row.side.z * row.width * v);
        this.uv.push(row.u, v);
        this.seed.push(seed);
        this.center.push(row.line.center.x, row.line.center.y, row.line.center.z);
        this.tangent.push(row.line.tangent.x, row.line.tangent.y, row.line.tangent.z);
        this.lineW.push(row.line.width);
        this.layer.push(layer);
        if (i < rows.length - 1 && j < across) {
          const k = base + i * (across + 1) + j;
          this.index.push(k, k + across + 1, k + 1, k + 1, k + across + 1, k + across + 2);
        }
      }
    });
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('aUv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('aSeed', new THREE.Float32BufferAttribute(this.seed, 1));
    g.setAttribute('aCenter', new THREE.Float32BufferAttribute(this.center, 3));
    g.setAttribute('aTangent', new THREE.Float32BufferAttribute(this.tangent, 3));
    g.setAttribute('aLineW', new THREE.Float32BufferAttribute(this.lineW, 1));
    g.setAttribute('aLayer', new THREE.Float32BufferAttribute(this.layer, 1));
    g.setIndex(this.index);
    return g;
  }
}

/* ---------- main ---------- */
export function initDNA(canvas, pointer) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  } catch (error) {
    console.warn('[dna] WebGL unavailable', error);
    return { uniforms: { uDraw: { value: 1 }, uMelt: { value: 1 } }, tick() {}, setScroll() {}, anchor: () => null, dispose() {} };
  }
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 22);
  const root = new THREE.Group();   // placement, tilt, mouse
  const spin = new THREE.Group();   // slow spin around the helix axis
  root.add(spin);
  scene.add(root);

  const uniforms = {
    uTime: { value: 0 }, uDraw: { value: 0 }, uMelt: { value: 0 }, uScatter: { value: 0 }, uHalf: { value: HALF },
  };
  const opacity = { value: 1 };
  const random = randomSource(92);
  const gauss = () => {
    let u = 0, v = 0;
    while (!u) u = random();
    while (!v) v = random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  const ribbonMaterial = (layerOpacity, solid, film) => new THREE.ShaderMaterial({
    uniforms: { ...uniforms, uOpacity: { value: layerOpacity }, uSolid: { value: solid }, uFilm: { value: film } },
    vertexShader: ribbonVertex, fragmentShader: ribbonFragment,
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
  });
  const materials = {
    ink: ribbonMaterial(0.95, 0, 0),
    rung: ribbonMaterial(0.9, 1, 0),
    film: ribbonMaterial(0.24, 0, 1),
  };

  // Layers per strand: the first is the main backbone sheet (and the outline); the others are
  // thinner ink sheets that hug it and fold out while melting, giving the liquid volume.
  const layers = [];
  for (let s = 0; s < 2; s++) {
    const ph = s * 2.1;
    layers.push(
      { strand: s, main: true, width: 0.55, da: 0, dr: 0, dy: 0, twist: 0.33, phase: ph, seed: 0.1 + s * 0.4 },
      { strand: s, width: 0.38, da: 0.06, dr: 0.1, dy: 0.08, twist: -0.21, phase: ph + 1.7, seed: 0.3 + s * 0.4 },
      { strand: s, width: 0.26, da: -0.05, dr: -0.08, dy: -0.06, twist: 0.52, phase: ph + 3.3, seed: 0.5 + s * 0.4 },
      { strand: s, width: 0.07, da: 0.1, dr: 0.22, dy: 0, twist: 1.1, phase: ph + 4.6, seed: 0.7 + s * 0.2 },
    );
  }
  const mainOf = (s) => layers[s * 4];
  // Outline stroke: slightly heavier towards the top, like the reference line art.
  const lineWidthAt = (y) => 0.026 + 0.02 * THREE.MathUtils.smoothstep(y, -HALF * 0.4, HALF * 0.6);
  const outline = (y, s) => {
    const L = mainOf(s);
    const c = centerAt(y, L);
    const tangent = centerAt(y + 0.01, L).sub(centerAt(y - 0.01, L)).normalize();
    return { center: c, tangent, width: lineWidthAt(y) };
  };

  // 1) backbones: layered ink sheets per strand once melted
  const ink = new StripBuilder();
  const frame = { center: new THREE.Vector3(), side: new THREE.Vector3(), width: 0, radial: null };
  const SEGS = 700;
  layers.forEach((L) => {
    const rows = [];
    for (let i = 0; i <= SEGS; i++) {
      const y = -HALF + (HEIGHT * i) / SEGS;
      ribbonFrame(y, L, frame);
      rows.push({ center: frame.center.clone(), side: frame.side.clone(), width: frame.width, u: i / SEGS, line: outline(y, L.strand) });
    }
    ink.add(rows, 18, L.seed, L.main ? 0 : 1);
  });

  // 2) base-pair rungs: evenly spaced, straight, the same thickness — the standard ladder;
  // 3) films: translucent ink membranes in some of the gaps once melted
  const rungs = new StripBuilder(), films = new StripBuilder();
  const up = new THREE.Vector3(0, 1, 0);
  const bridge = (target, y, width, seed, lineWidth) => {
    const a = centerAt(y, mainOf(0)), b = centerAt(y, mainOf(1));
    const len = a.distanceTo(b), dir = b.clone().sub(a).normalize(), rows = [];
    for (let i = 0; i <= 22; i++) {
      const t = i / 22;
      const center = a.clone().lerp(b, t);
      rows.push({ center, side: up, width, u: (y + HALF + t * len) / HEIGHT, line: { center: center.clone(), tangent: dir, width: lineWidth } });
    }
    target.add(rows, 2, seed, 0);
  };
  for (let y = -HALF + 0.4; y < HALF; y += RUNG_STEP) {
    bridge(rungs, y, 0.05, random(), 0.016);
    if (random() < 0.3) bridge(films, y + RUNG_STEP / 2, 0.25 + random() * 0.35, random(), 0.0);
  }

  const inkMesh = new THREE.Mesh(ink.build(), materials.ink);
  const rungMesh = new THREE.Mesh(rungs.build(), materials.rung);
  const filmMesh = new THREE.Mesh(films.build(), materials.film);
  filmMesh.renderOrder = 0;
  inkMesh.renderOrder = 1;
  rungMesh.renderOrder = 2;
  [filmMesh, inkMesh, rungMesh].forEach((m) => { m.frustumCulled = false; });

  // 4) particles: grain on the sheets, filaments, droplets and mist — each remembers its outline root
  const P = [], ROOT = [], RND = [], SCL = [], LOOSE = [], TONE = [], KIND = [];
  const push = (p, root, kind, scale, loose, tone) => {
    P.push(p.x, p.y, p.z);
    ROOT.push(root.x, root.y, root.z);
    RND.push(gauss(), gauss(), gauss());
    SCL.push(scale);
    LOOSE.push(loose);
    TONE.push(tone);
    KIND.push(kind);
  };
  const v = new THREE.Vector3(), rootV = new THREE.Vector3();
  const mainLayers = layers.filter((L) => L.width > 0.3);
  // root on the outline: the strand's centre line, nudged to the stroke edge
  const rootOn = (y, s, across) => {
    const o = outline(y, s);
    const sideH = new THREE.Vector3(-o.tangent.z, 0, o.tangent.x).normalize();
    return rootV.copy(o.center).addScaledVector(sideH, o.width * across * 1.6);
  };
  for (let i = 0; i < 26000; i++) {
    const L = mainLayers[(random() * mainLayers.length) | 0];
    const y = -HALF + random() * HEIGHT, across = (random() * 2 - 1) * 0.8;
    ribbonFrame(y, L, frame);
    v.copy(frame.center).addScaledVector(frame.side, frame.width * across);
    push(v, rootOn(y, L.strand, Math.sign(across) || 1), 0, 0.5 + random() * 0.6, Math.abs(across) * 0.6, random());
  }
  const field = (p, k) => new THREE.Vector3(
    Math.sin(p.y * 1.1 + p.z * 0.6 + k) + Math.cos(p.z * 1.7 + k * 0.5),
    Math.sin(p.z * 1.3 + p.x * 0.9 + k) * 0.6,
    Math.sin(p.x * 1.4 + p.y * 0.8 + k) + Math.cos(p.y * 1.6 - k),
  );
  for (let k = 0; k < 520; k++) {
    const L = mainLayers[(random() * mainLayers.length) | 0];
    const y = -HALF + 0.5 + random() * (HEIGHT - 1);
    ribbonFrame(y, L, frame);
    const root = rootOn(y, L.strand, 0).clone();
    const p = frame.center.clone().addScaledVector(frame.side, frame.width * (random() * 2 - 1));
    const dir = frame.radial.clone().multiplyScalar(0.5 + random())
      .add(new THREE.Vector3((random() - 0.5) * 0.9, (random() - 0.5) * 1.2, (random() - 0.5) * 0.9)).normalize();
    const length = 0.4 + Math.pow(random(), 1.8) * 2.6, steps = 26, step = length / steps;
    const tone = 0.5 + random() * 0.5;
    for (let i = 0; i < steps; i++) {
      dir.addScaledVector(field(p, k), 0.25).normalize();
      p.addScaledVector(dir, step);
      const t = i / steps, thick = 0.07 * Math.pow(1 - t, 0.7) + 0.008;
      for (let n = 0; n < 3; n++) {
        v.set(p.x + gauss() * thick, p.y + gauss() * thick, p.z + gauss() * thick);
        push(v, root, 1, 1.1 - 0.6 * t, 0.55 + 0.45 * t, tone);
      }
    }
    if (random() < 0.7) {
      const drops = 1 + ((random() * 3) | 0);
      for (let d = 0; d < drops; d++) {
        v.copy(p).addScaledVector(dir, 0.05 + random() * 0.35);
        push(v, root, 2, 1.6 + random() * 1.6, 1, tone);
      }
    }
  }
  const sprinkle = (count, kind, spread, minScale, maxScale) => {
    for (let i = 0; i < count; i++) {
      const L = mainLayers[(random() * mainLayers.length) | 0];
      const y = -HALF + random() * HEIGHT;
      ribbonFrame(y, L, frame);
      v.set(gauss(), gauss() * 0.6, gauss()).normalize()
        .multiplyScalar(0.2 - Math.log(1 - random()) * spread).add(frame.center);
      push(v, rootOn(y, L.strand, 0), kind, minScale + random() * (maxScale - minScale), 1, random());
    }
  };
  sprinkle(1500, 2, 0.8, 1.2, 2.6);
  sprinkle(14000, 3, 0.55, 0.35, 0.8);

  const pointGeometry = new THREE.BufferGeometry();
  pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  pointGeometry.setAttribute('aRoot', new THREE.Float32BufferAttribute(ROOT, 3));
  pointGeometry.setAttribute('aRand', new THREE.Float32BufferAttribute(RND, 3));
  pointGeometry.setAttribute('aScale', new THREE.Float32BufferAttribute(SCL, 1));
  pointGeometry.setAttribute('aLoose', new THREE.Float32BufferAttribute(LOOSE, 1));
  pointGeometry.setAttribute('aTone', new THREE.Float32BufferAttribute(TONE, 1));
  pointGeometry.setAttribute('aKind', new THREE.Float32BufferAttribute(KIND, 1));
  const pointUniforms = { ...uniforms, uSize: { value: 46 }, uPR: { value: 1 }, uOpacity: opacity };
  const points = new THREE.Points(pointGeometry, new THREE.ShaderMaterial({
    uniforms: pointUniforms, vertexShader: pointVertex, fragmentShader: pointFragment,
    transparent: true, depthWrite: false,
  }));
  points.renderOrder = 3;
  points.frustumCulled = false;

  spin.add(filmMesh, inkMesh, rungMesh, points);

  /* ---------- layout ---------- */
  let baseX = 0, scroll = 0, visible = true, needsRender = true, flowTime = 0;
  const smooth = { x: 0, y: 0 };
  const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
  const onMotionChange = () => { needsRender = true; };
  motionQuery.addEventListener('change', onMotionChange);

  let viewW = 1, viewH = 1;
  function resize() {
    const w = canvas.clientWidth || window.innerWidth, h = canvas.clientHeight || window.innerHeight;
    viewW = w; viewH = h;
    const mobile = w < 900;
    const pr = Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.5);
    renderer.setPixelRatio(pr);
    renderer.setSize(w, h, false);
    pointUniforms.uPR.value = pr;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const viewHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    baseX = viewHeight * camera.aspect * ((mobile ? 0.86 : 0.64) - 0.5);
    root.scale.setScalar(mobile ? 0.6 : 1);
    // softer on phones so the headline stays readable over it
    const o = mobile ? 0.6 : 1;
    opacity.value = o;
    materials.ink.uniforms.uOpacity.value = 0.95 * o;
    materials.rung.uniforms.uOpacity.value = 0.9 * o;
    materials.film.uniforms.uOpacity.value = 0.24 * o;
    needsRender = true;
  }
  resize();
  window.addEventListener('resize', resize);

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    needsRender = true;
  });
  observer.observe(canvas);

  function tick(time, dt) {
    if (!visible || document.hidden) return;
    const reduced = motionQuery.matches;
    if (reduced && !needsRender) return;   // static final pose; redraw only on change
    if (!reduced) flowTime += dt;
    uniforms.uTime.value = reduced ? 0 : flowTime;
    const follow = 1 - Math.exp(-dt * 3);
    smooth.x += ((reduced ? 0 : pointer.x) - smooth.x) * follow;
    smooth.y += ((reduced ? 0 : pointer.y) - smooth.y) * follow;
    // the line art holds still; once it turns to ink the helix keeps turning and floating
    const melt = uniforms.uMelt.value;
    if (!reduced) spin.rotation.y += dt * (0.05 + melt * 0.1 + scroll * 1.2);
    root.rotation.set(-smooth.y * 0.12, smooth.x * 0.22, 0.33 + smooth.x * 0.04);
    root.position.set(baseX + smooth.x * 0.3, Math.sin(flowTime * 0.35) * 0.15 * melt + scroll * 4, 0);
    const draw = uniforms.uDraw.value;
    if (reduced) { uniforms.uDraw.value = 1; uniforms.uMelt.value = 1; }
    renderer.render(scene, camera);
    uniforms.uDraw.value = draw;
    uniforms.uMelt.value = melt;
    needsRender = false;
  }

  function setScroll(progress) {
    scroll = THREE.MathUtils.clamp(progress, 0, 1);
    uniforms.uScatter.value = motionQuery.matches ? 0 : Math.max(0, scroll - 0.2) * 0.75;
    needsRender = true;
  }

  function dispose() {
    window.removeEventListener('resize', resize);
    motionQuery.removeEventListener('change', onMotionChange);
    observer.disconnect();
    spin.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
    renderer.dispose();
  }

  // Screen position (canvas px) of a point on one backbone, and how much it faces the camera (−1 back … 1 front).
  // Used to pin HTML labels to the strands as the helix turns.
  const _p = new THREE.Vector3(), _n = new THREE.Vector3(), _c = new THREE.Vector3();
  function anchor(y, strand, out = {}) {
    centerAt(y, mainOf(strand), _p);
    _n.set(_p.x, 0, _p.z).normalize();
    spin.updateWorldMatrix(true, false);
    _p.applyMatrix4(spin.matrixWorld);
    _n.transformDirection(spin.matrixWorld);
    out.facing = _n.dot(_c.copy(camera.position).sub(_p).normalize());
    _p.project(camera);
    out.x = (_p.x * 0.5 + 0.5) * viewW;
    out.y = (-_p.y * 0.5 + 0.5) * viewH;
    return out;
  }

  return { uniforms, tick, setScroll, anchor, dispose, renderer, scene, camera };
}
