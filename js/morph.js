// Particle morph: one cloud of points that flows between silhouettes — department symbols, an anatomical heart, a
// brain, a mother with the baby in her womb, a curled-up baby, the hospital, an ambulance, a cross, a check. Shapes are
// sampled from emoji / paths drawn on a 2D canvas (alpha = where a particle may sit, brightness = how far forward it
// comes), so no image files or textures are needed and it also works when the site is opened straight from disk.
//   morphTo(key)        — event-driven: flow from wherever the cloud is now to a new shape
//   scrub(f, keys)      — scroll-driven: f = 0 … keys.length-1 sits between keys[floor(f)] and the next
import * as THREE from 'three';
import { gsap } from 'gsap';

const EMOJI = { op: '🩺', ortho: '🦴', hospital: '🏥', ambulance: '🚑' };
const FONT = '"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Twemoji Mozilla", sans-serif';
const S = 200;          // sampling canvas size (px)
const SIZE = 7.4;       // world size of the longest side of a shape

/* ---------- shape sampling ---------- */
const P = (d) => new Path2D(d);
const GAP = 3;

// a part drawn in front of what's already there: erase a thin ring around it first, so parts read separately
function part(g, d, color) {
  const p = P(d);
  g.save(); g.globalCompositeOperation = 'destination-out'; g.lineWidth = GAP * 2; g.lineJoin = 'round'; g.stroke(p); g.restore();
  g.fillStyle = color; g.fill(p);
}
function tube(g, d, w, color) {
  const p = P(d);
  g.save(); g.globalCompositeOperation = 'destination-out'; g.lineCap = 'round'; g.lineWidth = w + GAP * 2; g.stroke(p); g.restore();
  g.save(); g.lineCap = 'butt'; g.lineWidth = w; g.strokeStyle = color; g.stroke(p); g.restore();
}
function cut(g, d, w = 2.6) {
  g.save(); g.globalCompositeOperation = 'destination-out'; g.lineCap = 'round'; g.lineJoin = 'round'; g.lineWidth = w; g.stroke(P(d)); g.restore();
}
// a wavy groove through points (brain sulci), cut out of what's drawn
function groove(g, pts, w = 2.4, amp = 2, waves = 3) {
  const seg = []; let total = 0;
  for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(l); total += l; }
  const n = Math.max(8, Math.round(total / 2)), path = new Path2D();
  for (let k = 0; k <= n; k++) {
    let d = (total * k) / n, i = 0;
    while (i < seg.length - 1 && d > seg[i]) { d -= seg[i]; i++; }
    const [ax, ay] = pts[i], [bx, by] = pts[i + 1], t = d / seg[i];
    const w2 = Math.sin((k / n) * Math.PI * 2 * waves) * amp * Math.sin((k / n) * Math.PI);
    const x = ax + (bx - ax) * t - ((by - ay) / seg[i]) * w2, y = ay + (by - ay) * t + ((bx - ax) / seg[i]) * w2;
    k ? path.lineTo(x, y) : path.moveTo(x, y);
  }
  g.save(); g.globalCompositeOperation = 'destination-out'; g.lineCap = 'round'; g.lineJoin = 'round'; g.lineWidth = w; g.stroke(path); g.restore();
}

// Gynecology: a mother in profile with the womb as a hollow in her belly and a curled baby inside (200 × 200 grid).
// The thin cut-outs matter: particles gather on edges, so gaps make the arm, womb wall and baby read separately.
function drawMother(g) {
  const ink = g.fillStyle;
  g.beginPath(); g.arc(112, 30, 15, 0, Math.PI * 2); g.fill();
  g.beginPath(); g.arc(95, 24, 9, 0, Math.PI * 2); g.fill();
  g.fill(P('M124 24 L 131 33 L 125 35 C 126 38 124 41 121 42 Z'));
  g.fill(P('M106 42 L 116 42 C 117 50 119 55 123 58 C 134 64 136 78 128 88 C 154 96 170 116 166 140 C 163 158 150 168 136 170 L 142 196 L 82 196 C 85 176 88 160 90 146 C 84 126 84 102 92 78 C 96 66 104 56 106 42 Z'));
  g.globalCompositeOperation = 'destination-out';
  g.lineCap = 'round'; g.lineWidth = 3.2;
  g.stroke(P('M102 64 C 98 86 102 106 114 118 C 120 124 128 124 132 118'));
  g.beginPath(); g.arc(140, 132, 23, 0, Math.PI * 2); g.fill();
  g.globalCompositeOperation = 'source-over';
  g.strokeStyle = ink; g.lineWidth = 3;
  g.beginPath(); g.arc(140, 132, 23, 0, Math.PI * 2); g.stroke();
  g.fillStyle = '#b9a8ff';
  g.beginPath(); g.arc(146, 120, 7.5, 0, Math.PI * 2); g.fill();
  g.fill(P('M140 124 C 130 125 126 136 131 143 C 136 149 147 148 150 140 C 152 133 147 126 140 124 Z'));
  g.fillStyle = ink;
}

// Cardiology: anatomical heart, front view (apex lower right). Back → front: great vessels, atria, ventricles, pulmonary trunk.
function drawHeart(g) {
  const back = '#5a48c8', mid = '#7b68ee', front = '#a493ff';
  tube(g, 'M 124 64 L 64 66', 11, back);                                          // right pulmonary artery (behind aorta)
  tube(g, 'M 160 98 L 194 92', 8, back);                                          // pulmonary veins
  tube(g, 'M 162 112 L 196 114', 8, back);
  tube(g, 'M 108 34 L 100 3', 10, back);                                          // arch branches
  tube(g, 'M 125 28 L 127 2', 8, back);
  tube(g, 'M 141 31 L 152 6', 8, back);
  tube(g, 'M 92 100 C 90 64 92 36 116 28 C 140 21 160 34 160 60 L 160 96', 22, '#6a58e0'); // aorta: ascending, arch, descending
  tube(g, 'M 58 6 L 58 92', 20, back);                                            // superior vena cava
  tube(g, 'M 56 136 L 54 172', 16, back);                                         // inferior vena cava
  part(g, 'M 146 86 C 160 78 176 86 174 98 C 168 106 156 104 148 100 Z', '#6a58e0');   // left auricle
  part(g, 'M 62 98 C 58 128 70 154 96 170 C 114 181 132 190 150 194 C 164 182 176 152 176 126 C 176 106 166 92 150 88 C 124 82 86 84 62 98 Z', mid); // ventricles
  part(g, 'M 66 76 C 42 76 30 100 34 124 C 37 142 50 154 68 152 C 80 130 80 100 66 76 Z', '#8a78f2'); // right atrium
  part(g, 'M 64 82 C 70 70 86 66 94 74 C 92 84 82 90 70 94 Z', '#8a78f2');                    // right auricle
  tube(g, 'M 112 110 C 112 88 118 70 132 60', 22, front);                         // pulmonary trunk
  tube(g, 'M 128 61 C 146 52 164 52 184 58', 13, front);                          // left pulmonary artery
  cut(g, 'M 120 106 C 114 134 126 162 146 190', 3.6);                            // anterior interventricular groove
  cut(g, 'M 120 130 C 134 134 148 142 160 156', 2.6);                            // diagonal branch
  cut(g, 'M 78 140 C 92 150 104 162 112 176', 2.6);                              // marginal branch
  g.save(); g.globalCompositeOperation = 'destination-out'; g.lineWidth = 1.8;  // vessel openings
  g.beginPath(); g.ellipse(58, 7, 8, 2.6, 0, 0, Math.PI * 2); g.stroke();
  g.beginPath(); g.ellipse(183, 58.5, 2.2, 5, 0.2, 0, Math.PI * 2); g.stroke();
  g.restore();
  g.fillStyle = mid;
}

// Neurology: brain, side view (front to the left): cerebrum with its folds, cerebellum, brainstem.
function drawBrain(g) {
  const ink = '#7b68ee';
  part(g, 'M 110 144 C 102 152 104 166 112 172 C 114 182 115 190 116 197 L 132 197 C 131 186 132 172 136 156 L 134 146 Z', '#5a48c8'); // brainstem
  part(g, 'M 118 150 C 120 134 146 128 168 134 C 186 140 186 160 170 168 C 152 176 128 170 118 150 Z', '#6a58e0');                     // cerebellum
  for (let k = 0; k < 4; k++) cut(g, `M ${126 + k * 2} ${145 + k * 6} C 142 ${139 + k * 6.5} 164 ${139 + k * 6} ${183 - k * 3} ${147 + k * 5.5}`, 2.6); // folia
  part(g, 'M 24 104 C 20 70 44 40 80 32 C 110 24 146 28 168 48 C 186 64 190 92 182 112 C 176 126 162 132 146 134 C 136 148 118 160 98 160 C 80 160 64 152 58 138 C 52 128 40 128 30 122 C 26 118 24 112 24 104 Z', ink); // cerebrum
  const W = 4, w = 3.4;
  groove(g, [[50, 132], [60, 134], [82, 126], [104, 118], [122, 108], [140, 104]], 5, 1.2, 2);   // lateral fissure
  groove(g, [[122, 109], [130, 94]], w, 0.6, 1);
  groove(g, [[116, 22], [110, 50], [106, 72], [100, 96], [96, 114]], W, 2.8, 4);     // central sulcus
  groove(g, [[96, 26], [92, 52], [86, 74], [80, 98], [74, 120]], w, 2.2, 4);         // precentral
  groove(g, [[134, 26], [128, 56], [124, 78], [118, 100]], w, 2.2, 4);               // postcentral
  groove(g, [[86, 48], [64, 50], [44, 58], [26, 72]], w, 2.2, 3);                    // superior frontal
  groove(g, [[82, 78], [62, 80], [44, 88], [22, 96]], w, 2.2, 3);                    // inferior frontal
  groove(g, [[66, 104], [50, 108], [34, 118]], w, 1.6, 2);
  groove(g, [[126, 64], [142, 60], [158, 64], [180, 74]], w, 2.2, 3);                // intraparietal
  groove(g, [[150, 82], [166, 90], [184, 100]], w, 1.8, 2);                          // occipital
  groove(g, [[146, 106], [162, 116], [178, 124]], w, 1.6, 2);
  groove(g, [[66, 146], [88, 140], [110, 130], [132, 120], [152, 116]], w, 2.2, 4);  // superior temporal
  groove(g, [[84, 160], [100, 152], [122, 144]], w, 1.6, 2);                         // inferior temporal
  groove(g, [[150, 34], [152, 54]], w, 1, 1);
  groove(g, [[64, 32], [72, 52]], w, 1, 1);
  groove(g, [[44, 52], [56, 70]], w, 1, 1);
  groove(g, [[166, 46], [160, 62]], w, 1, 1);
  g.fillStyle = ink;
}

// Pediatrics: a baby curled in the fetal position, facing left — round head, fist at the mouth, knee drawn up,
// leg reaching forward to the foot, the cord trailing out in front.
function drawBaby(g) {
  const cord = '#5a48c8', body = '#7b68ee', leg = '#b4a6ff', arm = '#d4caff';
  tube(g, 'M 72 112 C 64 114 58 110 55 106 C 52 100 49 95 45 91 C 40 87 34 88 28 94', 5, cord);      // cord
  part(g, 'M 87 43 C 86 30 92 16 104 8 C 112 4 120 4 128 5 C 142 6 156 14 162 25 C 166 32 166 48 162 57 C 160 62 158 66 158 70 C 162 74 166 80 169 90 C 173 104 174 128 170 144 C 166 162 156 176 145 182 C 132 190 118 196 105 196 C 98 196 92 194 90 190 L 100 140 L 112 100 L 106 90 C 103 87 102 85 101.6 84 C 99.5 83 97.6 82.5 97.5 81.6 C 98 80.5 98.4 79.6 98.2 79 C 97.4 77.6 96.8 76.6 96 76.2 C 94.4 76 92.6 75.6 91.6 74.8 C 90.2 73.8 90.2 72.4 90.8 71.6 C 92.4 69.6 94.4 67.4 94.8 65.4 C 94.6 63.4 94.4 62.2 94.2 61.4 C 92.6 59.8 91.6 58.4 91.5 57.3 C 89 53 87 48 87 43 Z', body); // head + body
  part(g, 'M 85 99 C 96 100 106 116 113 132 C 115 142 116 152 115 160 C 113 174 106 188 96 194 C 86 192 80 180 80 166 C 80 158 80 150 80 146 C 77 152 73 158 69 162 C 62 162 54 156 48 153 C 42 151 36 148 32 145 C 29 143 27 140 28 137 C 28 134 29 132 31 131.6 C 40 131 50 131 60 131 C 64 128 66 125 67 123.5 C 69 118 71 114 72.6 111 C 74 107 75 105 77 103 C 79 101 82 99 85 99 Z', leg); // leg
  cut(g, 'M 88 116 C 85 128 82 138 80 146', 3);                                                     // calf against thigh
  cut(g, 'M 33 133 L 36 137', 1.6); cut(g, 'M 31 137 L 35 140', 1.6);                               // toes
  part(g, 'M 75 88 C 78 84 86 79 92 80 C 96 80 98 83 97 86 C 101 94 108 102 116 106 C 122 100 128 94 134 90 C 144 90 152 96 152 104 C 146 118 134 130 120 136 C 112 136 106 132 102 126 C 96 116 90 104 86 95 C 82 96 77 95 75 92 Z', arm); // arm + fist
  cut(g, 'M 81 85 C 81 88 82 91 83 93', 2); cut(g, 'M 87 82 C 87 86 88 89 89 92', 2);                // fingers
  cut(g, 'M 112 90 C 120 88 128 84 134 78', 3);                                                       // jaw / neck
  cut(g, 'M 95.5 63.4 Q 98 62.6 101 59.6', 3);                                                        // closed eye
  g.save(); g.globalCompositeOperation = 'destination-out'; g.lineCap = 'round'; g.lineWidth = 3.4;
  g.beginPath(); g.ellipse(131, 54, 7, 10.5, 0, -Math.PI * 0.6, Math.PI * 0.62); g.stroke();       // ear
  g.lineWidth = 2.6; g.stroke(P('M 128 48 C 132 50 132 56 129 59'));
  g.restore();
  g.fillStyle = body;
}

const DRAW = { gynecology: drawMother, cardio: drawHeart, neurology: drawBrain, pediatrics: drawBaby };
// the organs carry their detail in thin grooves: more particles on edges, and less depth jitter so the grooves
// stay open while the cloud turns (edge = share of particles on edges, jitter = random depth)
const TUNE = { cardio: { edge: 0.4, jitter: 0.14 }, neurology: { edge: 0.5, jitter: 0.1 }, pediatrics: { edge: 0.5, jitter: 0.1 } };

function drawShape(g, key) {
  g.clearRect(0, 0, S, S);
  g.fillStyle = '#7b68ee';
  g.strokeStyle = '#7b68ee';
  if (key === 'cross') {
    const a = S * 0.17, b = S * 0.4, r = S * 0.05;
    g.beginPath();
    g.roundRect(S / 2 - a, S / 2 - b, a * 2, b * 2, r);
    g.roundRect(S / 2 - b, S / 2 - a, b * 2, a * 2, r);
    g.fill();
  } else if (key === 'check') {
    g.lineWidth = S * 0.14; g.lineCap = 'round'; g.lineJoin = 'round';
    g.beginPath(); g.moveTo(S * 0.18, S * 0.52); g.lineTo(S * 0.41, S * 0.74); g.lineTo(S * 0.82, S * 0.28); g.stroke();
  } else if (DRAW[key]) {
    DRAW[key](g);
  } else if (key === 'sphere' || !EMOJI[key]) {
    const grad = g.createRadialGradient(S * 0.42, S * 0.4, S * 0.05, S / 2, S / 2, S * 0.42);
    grad.addColorStop(0, '#fff'); grad.addColorStop(1, '#5a45d6');
    g.fillStyle = grad; g.beginPath(); g.arc(S / 2, S / 2, S * 0.42, 0, Math.PI * 2); g.fill();
  } else {
    g.font = `${Math.round(S * 0.8)}px ${FONT}`;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(EMOJI[key], S / 2, S * 0.54);
  }
}

function sample(key, count, random) {
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d', { willReadFrequently: true });
  drawShape(g, key);
  const { data } = g.getImageData(0, 0, S, S);
  const alpha = (x, y) => (x < 0 || y < 0 || x >= S || y >= S ? 0 : data[(y * S + x) * 4 + 3]);
  const inside = [], edge = [];
  let minX = S, maxX = 0, minY = S, maxY = 0;
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      if (alpha(x, y) < 150) continue;
      const i = (y * S + x) * 4;
      const lum = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
      const onEdge = alpha(x - 2, y) < 150 || alpha(x + 2, y) < 150 || alpha(x, y - 2) < 150 || alpha(x, y + 2) < 150;
      (onEdge ? edge : inside).push(x, y, lum);
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
    }
  }
  if ((inside.length + edge.length) / 3 < 150) return key === 'sphere' ? new Float32Array(count * 3) : sample('sphere', count, random);
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
  const scale = SIZE / Math.max(maxX - minX, maxY - minY, 1);
  const { edge: edgeShare = 0.32, jitter = 0.5 } = TUNE[key] || {};
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const pool = edge.length && (random() < edgeShare || !inside.length) ? edge : inside;
    const j = Math.floor(random() * (pool.length / 3)) * 3;
    const px = pool[j] + random() - 0.5, py = pool[j + 1] + random() - 0.5;
    const dx = (px - cx) * scale, dy = -(py - cy) * scale;
    const pillow = 1 - Math.min(1, Math.hypot(dx, dy) / (SIZE * 0.55));
    out[i * 3] = dx;
    out[i * 3 + 1] = dy;
    out[i * 3 + 2] = (pool[j + 2] - 0.5) * 1.1 + pillow * 0.9 + (random() - 0.5) * jitter;
  }
  return out;
}

/* ---------- shaders ---------- */
const NOISE = /* glsl */ `
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
`;

const vertexShader = /* glsl */ `
  attribute vec3 aFrom;
  attribute vec3 aTo;
  attribute float aRand;
  attribute float aSize;
  uniform float uMix;
  uniform float uTime;
  uniform float uSize;
  uniform float uPR;
  uniform float uSwirl;
  uniform float uMotion;
  uniform vec3 uMouse;
  uniform float uMouseOn;
  varying vec3 vColor;
  varying float vAlpha;
  ${NOISE}
  void main() {
    float m = clamp((uMix - aRand * 0.3) / 0.7, 0.0, 1.0);
    m = m * m * (3.0 - 2.0 * m);
    vec3 p = mix(aFrom, aTo, m);
    float burst = sin(3.14159265 * m);
    vec3 q = p * 0.35 + vec3(0.0, 0.0, uTime * 0.15);
    vec3 flow = vec3(snoise(q), snoise(q + 17.1), snoise(q + 41.7));
    p += flow * burst * uSwirl * (0.6 + aRand);
    p += uMotion * 0.05 * vec3(snoise(p * 0.8 + uTime * 0.4), snoise(p * 0.8 + 9.0 + uTime * 0.4), 0.0);

    vec4 world = modelMatrix * vec4(p, 1.0);
    vec2 d = world.xy - uMouse.xy;
    float dist = length(d);
    world.xy += (d / max(dist, 0.001)) * uMouseOn * smoothstep(1.9, 0.0, dist) * 1.1;

    vec4 mv = viewMatrix * world;
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aSize * uPR * (14.0 / -mv.z) * (1.0 + burst * 0.35);

    float t = clamp(p.x / 7.4 + 0.5 + (aRand - 0.5) * 0.25, 0.0, 1.0);
    vec3 violet = vec3(0.482, 0.408, 0.933);
    vec3 pink = vec3(0.831, 0.435, 0.816);
    vec3 blue = vec3(0.357, 0.616, 1.0);
    vColor = t < 0.5 ? mix(violet, pink, t * 2.0) : mix(pink, blue, t * 2.0 - 1.0);
    vColor = mix(vColor, vec3(0.35, 0.27, 0.84), step(0.93, aRand) * 0.6);
    vAlpha = (0.55 + 0.45 * aRand) * (1.0 - burst * 0.25);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(vColor, smoothstep(0.5, 0.12, d) * vAlpha);
  }
`;

/* ---------- engine ---------- */
export function createMorph(canvas, { initial = 'cross', count } = {}) {
  const noop = { morphTo() { }, scrub() { }, preload() { }, dispose() { }, get key() { return initial; } };
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  } catch (error) {
    console.warn('[morph] WebGL unavailable', error);
    return noop;
  }
  renderer.setClearColor(0x000000, 0);

  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = matchMedia('(max-width: 900px)').matches;
  const N = count || (mobile ? 4200 : 8000);
  let seed = 7;
  const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };

  const cache = new Map();
  const shape = (key) => { if (!cache.has(key)) cache.set(key, sample(key, N, random)); return cache.get(key); };

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 17);
  const group = new THREE.Group();
  group.position.y = 0.35;
  scene.add(group);

  const start = shape(initial);
  const geo = new THREE.BufferGeometry();
  const aFrom = new THREE.BufferAttribute(start.slice(), 3);
  const aTo = new THREE.BufferAttribute(start.slice(), 3);
  const rand = new Float32Array(N), size = new Float32Array(N);
  for (let i = 0; i < N; i++) { rand[i] = random(); size[i] = random() < 0.05 ? 2.2 : 0.7 + random() * 0.8; }
  geo.setAttribute('position', new THREE.BufferAttribute(start.slice(), 3));
  geo.setAttribute('aFrom', aFrom);
  geo.setAttribute('aTo', aTo);
  geo.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));
  geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));

  const uniforms = {
    uMix: { value: 1 }, uTime: { value: 0 }, uSize: { value: mobile ? 2.4 : 2.1 }, uPR: { value: 1 },
    uSwirl: { value: 1.7 }, uMotion: { value: 1 }, uMouse: { value: new THREE.Vector3(99, 99, 0) }, uMouseOn: { value: 0 },
  };
  const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader, transparent: true, depthWrite: false });
  const points = new THREE.Points(geo, material);
  points.frustumCulled = false;
  group.add(points);

  let current = initial, pair = -1, tween = null;

  // CPU copy of where the particles are right now (same easing as the shader, without the swirl)
  function settle() {
    const from = aFrom.array, to = aTo.array, out = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      let m = Math.min(1, Math.max(0, (uniforms.uMix.value - rand[i] * 0.3) / 0.7));
      m = m * m * (3 - 2 * m);
      for (let k = 0; k < 3; k++) out[i * 3 + k] = from[i * 3 + k] + (to[i * 3 + k] - from[i * 3 + k]) * m;
    }
    return out;
  }

  function morphTo(key, duration = 1.8) {
    if (key === current && pair === -1) return;
    tween?.kill();
    aFrom.array.set(settle());
    aTo.array.set(shape(key));
    aFrom.needsUpdate = aTo.needsUpdate = true;
    pair = -1;
    current = key;
    uniforms.uMix.value = 0;
    if (reduce.matches) { uniforms.uMix.value = 1; return; }
    tween = gsap.to(uniforms.uMix, { value: 1, duration, ease: 'power2.inOut' });
  }

  function scrub(f, keys) {
    const last = keys.length - 1;
    const p = Math.min(Math.max(f, 0), last);
    const i = Math.min(Math.floor(p), last - 1);
    if (i !== pair) {
      tween?.kill();
      aFrom.array.set(shape(keys[i]));
      aTo.array.set(shape(keys[i + 1]));
      aFrom.needsUpdate = aTo.needsUpdate = true;
      pair = i;
    }
    uniforms.uMix.value = p - i;
    current = keys[Math.round(p)];
  }

  // sample the remaining shapes when the browser is idle, so the first morph doesn't stutter
  function preload(keys) {
    const queue = keys.filter((k) => !cache.has(k));
    const next = () => { const k = queue.shift(); if (!k) return; shape(k); (window.requestIdleCallback || setTimeout)(next); };
    (window.requestIdleCallback || setTimeout)(next);
  }

  /* pointer: repel particles around the cursor */
  const pointer = { x: 0, y: 0 };
  const ray = new THREE.Vector3();
  const onMove = (e) => {
    const r = canvas.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width) * 2 - 1, ny = -((e.clientY - r.top) / r.height) * 2 + 1;
    const inside = Math.abs(nx) <= 1.1 && Math.abs(ny) <= 1.1;
    pointer.x = Math.max(-1, Math.min(1, nx)); pointer.y = Math.max(-1, Math.min(1, ny));
    ray.set(nx, ny, 0.5).unproject(camera).sub(camera.position).normalize();
    const t = -camera.position.z / ray.z;
    uniforms.uMouse.value.copy(camera.position).addScaledVector(ray, t);
    gsap.to(uniforms.uMouseOn, { value: inside && !reduce.matches ? 1 : 0, duration: 0.6, overwrite: true });
  };
  window.addEventListener('pointermove', onMove, { passive: true });

  function resize() {
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
    const pr = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2);
    renderer.setPixelRatio(pr);
    renderer.setSize(w, h, false);
    uniforms.uPR.value = pr;
    camera.aspect = w / h;
    // keep the whole shape in frame on tall/narrow canvases
    camera.position.z = 17 * Math.max(1, 1 / camera.aspect);
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  let visible = true, raf = 0, time = 0, last = performance.now();
  const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
  io.observe(canvas);
  const loop = (now) => {
    raf = requestAnimationFrame(loop);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!visible || document.hidden) return;
    const still = reduce.matches;
    if (!still) time += dt;
    uniforms.uTime.value = time;
    uniforms.uMotion.value = still ? 0 : 1;
    uniforms.uSwirl.value = still ? 0 : 1.7;
    group.rotation.y += ((still ? 0 : Math.sin(time * 0.35) * 0.4 + pointer.x * 0.35) - group.rotation.y) * 0.05;
    group.rotation.x += ((still ? 0 : -pointer.y * 0.2) - group.rotation.x) * 0.05;
    renderer.render(scene, camera);
  };
  raf = requestAnimationFrame(loop);

  return {
    morphTo, scrub, preload,
    get key() { return current; },
    dispose() {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      window.removeEventListener('pointermove', onMove);
      geo.dispose(); material.dispose(); renderer.dispose();
    },
  };
}
