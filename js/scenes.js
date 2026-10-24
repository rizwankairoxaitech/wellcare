// Procedural 3D "renders" — each export builds one scene for the shared view renderer.
// Every scene returns { scene, camera, update(time, dt, pointer), fit?(aspect), setAspect?(aspect) }.
import * as THREE from 'three';

/* ---------- helpers ---------- */
function rng(seed) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function gradientTexture(inner, outer, cx = 0.5, cy = 0.45) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(256 * cx, 256 * cy, 0, 256 * cx, 256 * cy, 250);
  grd.addColorStop(0, inner);
  grd.addColorStop(1, outer);
  g.fillStyle = grd;
  g.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function stage({ env, inner, outer, cx, cy, fov = 30, z = 10 }) {
  const scene = new THREE.Scene();
  scene.background = gradientTexture(inner, outer, cx, cy);
  scene.environment = env;
  const camera = new THREE.PerspectiveCamera(fov, 1, 0.1, 100);
  camera.position.set(0, 0, z);
  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(3, 5, 6);
  const fill = new THREE.DirectionalLight(0xdfe6ff, 0.5);
  fill.position.set(-5, -2, 3);
  scene.add(key, fill);
  return { scene, camera };
}

const glass = (o = {}) => new THREE.MeshPhysicalMaterial({
  color: 0xffffff, metalness: 0, roughness: 0.12, transmission: 1, thickness: 1.2, ior: 1.42,
  clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1, ...o,
});

const follow = (sp, p, k = 0.05) => { sp.x += (p.x - sp.x) * k; sp.y += (p.y - sp.y) * k; };

// Pull the camera back when the box is narrower than the scene was framed for.
const fitter = (camera, baseZ, minAspect = 1) => (aspect) => {
  camera.position.z = baseZ * Math.max(1, minAspect / aspect);
};

const V = (a) => new THREE.Vector3(a[0], a[1], a[2]);

/* ---------- 1. glass DNA strand with blue cells (About card) ---------- */
export function strand({ env }) {
  const { scene, camera } = stage({ env, inner: '#f2f5f8', outer: '#aeb9c4', cx: 0.55, cy: 0.3, z: 10 });
  const r = rng(11);
  const group = new THREE.Group();
  scene.add(group);

  const curves = [
    new THREE.CatmullRomCurve3([[-2.8, -7, 0.2], [-1.7, -4.2, 0.9], [0.3, -2.6, -0.3], [1.5, -1.0, 0.5], [0.7, 0.6, 0.1], [-0.9, 1.7, -0.6], [-0.3, 3.1, 0.4], [1.5, 3.8, -0.1], [3.3, 5.0, 0.4], [4.6, 7.0, 0]].map(V)),
    new THREE.CatmullRomCurve3([[0.3, -2.6, -0.3], [-1.2, -1.8, -0.9], [-2.7, -1.3, -0.4], [-4.6, -0.7, 0], [-7, 0, 0]].map(V)),
    new THREE.CatmullRomCurve3([[-0.3, 3.1, 0.4], [-1.6, 3.9, 0.2], [-2.6, 5.2, -0.3], [-3.6, 7.2, 0]].map(V)),
  ];
  const radii = [0.78, 0.46, 0.32];
  const mat = glass({ color: '#f3f7fb', roughness: 0.28, thickness: 1.8, ior: 1.33, attenuationColor: new THREE.Color('#a7c6ea'), attenuationDistance: 2.4 });

  curves.forEach((c, k) => {
    const geo = new THREE.TubeGeometry(c, 300, radii[k], 40, false);
    const p = geo.attributes.position, n = geo.attributes.normal;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      const d = (0.16 * Math.sin(x * 2.7 + y * 2.1) + 0.1 * Math.sin(y * 5.3 + z * 3.7) + 0.06 * Math.sin(x * 8.1 - z * 6.3 + y * 3.0)) * radii[k];
      p.setXYZ(i, x + n.getX(i) * d, y + n.getY(i) * d, z + n.getZ(i) * d);
    }
    geo.computeVertexNormals();
    group.add(new THREE.Mesh(geo, mat));
  });

  // clustered blue "cells" on and inside the glass
  const N = 700;
  const cells = new THREE.InstancedMesh(
    new THREE.SphereGeometry(1, 18, 14),
    new THREE.MeshPhysicalMaterial({ color: '#2b6be6', roughness: 0.16, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.1, envMapIntensity: 1.4 }),
    N,
  );
  const clusters = Array.from({ length: 30 }, () => ({ k: r() < 0.75 ? 0 : (r() < 0.6 ? 1 : 2), t: r() }));
  const tan = new THREE.Vector3(), side = new THREE.Vector3();
  const data = [];
  for (let i = 0; i < N; i++) {
    const cl = clusters[(r() * clusters.length) | 0];
    const t = THREE.MathUtils.clamp(cl.t + (r() - 0.5) * 0.07, 0, 1);
    const c = curves[cl.k];
    const p = c.getPointAt(t);
    c.getTangentAt(t, tan);
    side.set(r() - 0.5, r() - 0.5, r() - 0.5).cross(tan).normalize();
    p.addScaledVector(side, radii[cl.k] * (r() < 0.72 ? 0.95 + r() * 0.2 : 0.25 + r() * 0.5));
    data.push({ p, s: 0.03 + Math.pow(r(), 2.4) * 0.12, ph: r() * 6.28 });
  }
  group.add(cells);

  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s3 = new THREE.Vector3();
  const sp = { x: 0, y: 0 };
  return {
    scene, camera, fit: fitter(camera, 10, 0.75),
    update(t, dt, p) {
      follow(sp, p);
      group.rotation.y = Math.sin(t * 0.25) * 0.3 + sp.x * 0.25;
      group.rotation.x = -sp.y * 0.12;
      group.position.y = Math.sin(t * 0.5) * 0.12;
      for (let i = 0; i < N; i++) {
        const d = data[i];
        const k = d.s * (1 + 0.12 * Math.sin(t * 2 + d.ph));
        m.compose(d.p, q, s3.set(k, k, k));
        cells.setMatrixAt(i, m);
      }
      cells.instanceMatrix.needsUpdate = true;
    },
  };
}

/* ---------- 2. ceramic + chrome molecule ---------- */
export function molecule({ env }) {
  const { scene, camera } = stage({ env, inner: '#f8f8f9', outer: '#c9cad1', cy: 0.4, z: 11 });
  const g = new THREE.Group();
  scene.add(g);
  const white = new THREE.MeshPhysicalMaterial({ color: '#f2f2f4', roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.12 });
  const chrome = new THREE.MeshPhysicalMaterial({ color: '#e6e9ef', metalness: 1, roughness: 0.07 });
  const glassM = glass({ roughness: 0.06, thickness: 1.4, attenuationColor: new THREE.Color('#b8c3dc'), attenuationDistance: 3 });
  const nodes = [
    [0, 0, 0, 0.95, 'w'], [1.8, 1.0, 0.3, 0.66, 'w'], [-1.7, 0.9, -0.4, 0.72, 'c'], [0.4, 2.1, -0.6, 0.55, 'w'],
    [-0.6, -1.9, 0.5, 0.78, 'w'], [2.0, -1.2, -0.5, 0.62, 'g'], [-2.5, -1.1, 0.6, 0.5, 'w'], [3.1, 0.3, 0.8, 0.45, 'c'],
    [-0.9, 2.6, 0.9, 0.42, 'w'], [1.0, -2.7, -0.8, 0.46, 'c'], [-3.2, 1.7, -0.6, 0.44, 'w'],
  ];
  const sphere = new THREE.SphereGeometry(1, 48, 32);
  const pts = nodes.map(([x, y, z, rad, type]) => {
    const mesh = new THREE.Mesh(sphere, type === 'w' ? white : type === 'c' ? chrome : glassM);
    mesh.position.set(x, y, z);
    mesh.scale.setScalar(rad);
    g.add(mesh);
    return mesh;
  });
  const cyl = new THREE.CylinderGeometry(1, 1, 1, 20);
  const up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const a = pts[i].position, b = pts[j].position;
      const d = a.distanceTo(b);
      if (d > 2.5) continue;
      const bond = new THREE.Mesh(cyl, chrome);
      bond.position.copy(a).add(b).multiplyScalar(0.5);
      bond.quaternion.setFromUnitVectors(up, b.clone().sub(a).normalize());
      bond.scale.set(0.07, d, 0.07);
      g.add(bond);
    }
  }
  const torus = new THREE.TorusGeometry(1, 0.05, 16, 80);
  [0, 1, 4, 5].forEach((i, k) => {
    const ring = new THREE.Mesh(torus, chrome);
    ring.position.copy(pts[i].position);
    ring.scale.setScalar(pts[i].scale.x * 1.28);
    ring.rotation.set(k * 0.9 + 0.4, k * 1.3, 0);
    g.add(ring);
  });
  const sp = { x: 0, y: 0 };
  return {
    scene, camera, fit: fitter(camera, 11, 1),
    update(t, dt, p) {
      follow(sp, p);
      g.rotation.y = t * 0.15 + sp.x * 0.4;
      g.rotation.x = Math.sin(t * 0.2) * 0.2 - sp.y * 0.25;
      g.position.y = Math.sin(t * 0.6) * 0.1;
    },
  };
}

/* ---------- 3. iridescent petri dish with periwinkle spheres ---------- */
export function petri({ env }) {
  const { scene, camera } = stage({ env, inner: '#d6d3e0', outer: '#9c98ac', cy: 0.5, z: 9.5 });
  const g = new THREE.Group();
  g.rotation.x = -0.32;
  scene.add(g);
  const discMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      varying vec2 vUv; uniform float uTime;
      void main(){
        vec2 p = vUv - 0.5; float r = length(p) * 2.0; float a = atan(p.y, p.x);
        vec3 c1 = vec3(0.99, 0.94, 0.91), c2 = vec3(0.97, 0.83, 0.89), c3 = vec3(0.80, 0.86, 1.0), c4 = vec3(0.94, 0.96, 1.0);
        vec3 col = mix(c1, c2, smoothstep(0.0, 0.6, r + 0.08 * sin(a * 3.0 + uTime * 0.6)));
        col = mix(col, c3, smoothstep(0.55, 0.95, r + 0.05 * sin(a * 5.0 - uTime * 0.4)));
        col += 0.06 * sin(vec3(0.0, 2.0, 4.0) + r * 9.0 - uTime * 0.8) * smoothstep(0.3, 1.0, r);
        col = mix(col, c4, smoothstep(0.93, 1.0, r));
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  g.add(new THREE.Mesh(new THREE.CircleGeometry(2, 128), discMat));
  g.add(new THREE.Mesh(new THREE.TorusGeometry(2.02, 0.07, 24, 160), glass({ roughness: 0.06, thickness: 0.4 })));

  const r = rng(5);
  const N = 56;
  const balls = new THREE.InstancedMesh(
    new THREE.SphereGeometry(1, 32, 24),
    new THREE.MeshPhysicalMaterial({ color: '#6b80e6', roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.15, sheen: 0.5, sheenColor: new THREE.Color('#c7d0ff'), envMapIntensity: 1.2 }),
    N,
  );
  const data = Array.from({ length: N }, () => {
    const a = r() * Math.PI * 2, rad = 2.05 + (r() - 0.4) * 0.9;
    return { p: new THREE.Vector3(Math.cos(a) * rad, Math.sin(a) * rad, (r() - 0.25)), s: 0.07 + Math.pow(r(), 2.6) * 0.36, ph: r() * 6.28 };
  });
  g.add(balls);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s3 = new THREE.Vector3(), v = new THREE.Vector3();
  const sp = { x: 0, y: 0 };
  return {
    scene, camera, fit: fitter(camera, 9.5, 1),
    update(t, dt, p) {
      follow(sp, p);
      discMat.uniforms.uTime.value = t;
      g.rotation.z = t * 0.06;
      g.rotation.y = sp.x * 0.25;
      g.rotation.x = -0.32 - sp.y * 0.15;
      for (let i = 0; i < N; i++) {
        const d = data[i];
        v.copy(d.p); v.z += Math.sin(t * 0.9 + d.ph) * 0.07;
        m.compose(v, q, s3.set(d.s, d.s, d.s));
        balls.setMatrixAt(i, m);
      }
      balls.instanceMatrix.needsUpdate = true;
    },
  };
}

/* ---------- 4. frosted test tubes ---------- */
export function tubes({ env }) {
  const { scene, camera } = stage({ env, inner: '#ffffff', outer: '#d9d3ee', cy: 0.42, z: 10 });
  const g = new THREE.Group();
  g.rotation.z = -0.6;
  scene.add(g);
  const tubeGeo = new THREE.CapsuleGeometry(0.42, 3.4, 12, 48);
  const liquidGeo = new THREE.CapsuleGeometry(0.33, 1.5, 12, 40);
  const capGeo = new THREE.CylinderGeometry(0.47, 0.47, 0.5, 48);
  const tubeMat = glass({ roughness: 0.08, thickness: 0.45, ior: 1.5 });
  const liquids = ['#b6a3ff', '#9ec0ff', '#cdb8ff'].map((c) => new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1, sheen: 0.6, sheenColor: new THREE.Color('#ffffff') }));
  const capMat = new THREE.MeshPhysicalMaterial({ color: '#e9e4fb', roughness: 0.45, clearcoat: 0.5 });
  const items = [-2.5, -1.25, 0, 1.25, 2.5].map((x, i) => {
    const t = new THREE.Group();
    t.position.set(x, [-0.5, 0.6, -0.2, 0.8, -0.7][i], [0, -0.6, 0.3, -0.3, 0.2][i]);
    t.add(new THREE.Mesh(tubeGeo, tubeMat));
    const liq = new THREE.Mesh(liquidGeo, liquids[i % 3]);
    liq.position.y = -0.9;
    t.add(liq);
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.y = 2.25;
    t.add(cap);
    g.add(t);
    return { t, ph: i * 1.3, y: t.position.y };
  });
  const sp = { x: 0, y: 0 };
  return {
    scene, camera, fit: fitter(camera, 10, 1),
    update(t, dt, p) {
      follow(sp, p);
      items.forEach((o) => {
        o.t.position.y = o.y + Math.sin(t * 0.7 + o.ph) * 0.12;
        o.t.rotation.y = Math.sin(t * 0.4 + o.ph) * 0.4;
      });
      g.rotation.y = sp.x * 0.3;
      g.rotation.x = -sp.y * 0.2;
    },
  };
}

/* ---------- 5. ring of glass capsules with violet specks ---------- */
export function capsules({ env }) {
  const { scene, camera } = stage({ env, inner: '#ffffff', outer: '#d4cdee', cy: 0.5, z: 10 });
  const g = new THREE.Group();
  g.rotation.set(-0.15, 0.1, 0.12);
  scene.add(g);
  const a = 2.05, rc = 0.9;
  const shape = new THREE.Shape();
  shape.moveTo(-a + rc, -a);
  shape.lineTo(a - rc, -a); shape.quadraticCurveTo(a, -a, a, -a + rc);
  shape.lineTo(a, a - rc); shape.quadraticCurveTo(a, a, a - rc, a);
  shape.lineTo(-a + rc, a); shape.quadraticCurveTo(-a, a, -a, a - rc);
  shape.lineTo(-a, -a + rc); shape.quadraticCurveTo(-a, -a, -a + rc, -a);
  const pts = shape.getSpacedPoints(16);
  pts.pop();

  const r = rng(3);
  const geo = new THREE.CapsuleGeometry(0.4, 0.55, 10, 32);
  const mat = glass({ color: '#f3efff', roughness: 0.16, thickness: 1.2, ior: 1.45, iridescence: 0.6, iridescenceIOR: 1.3, attenuationColor: new THREE.Color('#c6b8ff'), attenuationDistance: 2.2 });
  const caps = pts.map((p2) => {
    const mesh = new THREE.Mesh(geo, mat);
    const base = new THREE.Vector3(p2.x, p2.y, (r() - 0.5) * 0.3);
    mesh.position.copy(base);
    mesh.rotation.z = Math.atan2(p2.y, p2.x) - Math.PI / 2 + (r() - 0.5) * 0.5;
    mesh.rotation.x = (r() - 0.5) * 0.6;
    g.add(mesh);
    return { mesh, base, ph: r() * 6.28 };
  });

  const PER = 9;
  const specks = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 8, 6), new THREE.MeshStandardMaterial({ color: '#5a46c8', roughness: 0.4 }), caps.length * PER);
  const local = caps.map(() => Array.from({ length: PER }, () => ({ p: new THREE.Vector3((r() - 0.5) * 0.4, (r() - 0.5) * 0.8, (r() - 0.5) * 0.4), s: 0.02 + r() * 0.03 })));
  g.add(specks);

  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s3 = new THREE.Vector3(), v = new THREE.Vector3();
  const sp = { x: 0, y: 0 };
  return {
    scene, camera, fit: fitter(camera, 10, 1),
    update(t, dt, p) {
      follow(sp, p);
      g.rotation.z = 0.12 + Math.sin(t * 0.2) * 0.06 + sp.x * 0.1;
      g.rotation.x = -0.15 - sp.y * 0.2;
      g.rotation.y = 0.1 + sp.x * 0.25;
      let k = 0;
      caps.forEach((c, i) => {
        c.mesh.position.y = c.base.y + Math.sin(t * 0.8 + c.ph) * 0.06;
        c.mesh.position.z = c.base.z + Math.cos(t * 0.6 + c.ph) * 0.05;
        c.mesh.updateMatrix();
        for (const sp2 of local[i]) {
          v.copy(sp2.p).applyMatrix4(c.mesh.matrix);
          m.compose(v, q, s3.set(sp2.s, sp2.s, sp2.s));
          specks.setMatrixAt(k++, m);
        }
      });
      specks.instanceMatrix.needsUpdate = true;
    },
  };
}

/* ---------- 6. medical scanner with a robotic arm and lens flare ---------- */
function flareTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.12, 'rgba(225,240,255,.9)');
  grd.addColorStop(0.35, 'rgba(150,200,255,.35)');
  grd.addColorStop(1, 'rgba(120,170,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 256, 256);
  g.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 6; i++) {
    g.save();
    g.translate(128, 128);
    g.rotate((i * Math.PI) / 6 + 0.2);
    const lg = g.createLinearGradient(-128, 0, 128, 0);
    lg.addColorStop(0, 'rgba(255,255,255,0)');
    lg.addColorStop(0.5, 'rgba(255,255,255,.55)');
    lg.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = lg;
    g.fillRect(-128, -1.2, 256, 2.4);
    g.restore();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function scanner({ env }) {
  const { scene, camera } = stage({ env, inner: '#f7fafd', outer: '#b9c6d3', cx: 0.7, cy: 0.45, z: 13 });
  const white = new THREE.MeshPhysicalMaterial({ color: '#f3f5f7', roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08 });
  const steel = new THREE.MeshPhysicalMaterial({ color: '#b5bdc7', metalness: 0.9, roughness: 0.26 });
  const dark = new THREE.MeshPhysicalMaterial({ color: '#202329', roughness: 0.35, clearcoat: 0.6 });

  const ring = new THREE.Group();
  ring.position.set(4.2, 0.2, -1.6);
  ring.rotation.y = -0.62;
  scene.add(ring);
  ring.add(new THREE.Mesh(new THREE.TorusGeometry(2.7, 1.05, 64, 160), white));
  const bore = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.7, 2.4, 96, 1, true), new THREE.MeshPhysicalMaterial({ color: '#c9d2dc', metalness: 0.7, roughness: 0.3, side: THREE.DoubleSide }));
  bore.rotation.x = Math.PI / 2;
  ring.add(bore);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(1.74, 0.1, 24, 128), steel);
  lip.position.z = 1.05;
  ring.add(lip);
  const boltGeo = new THREE.SphereGeometry(0.07, 12, 8);
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const b = new THREE.Mesh(boltGeo, dark);
    b.position.set(Math.cos(a) * 2.2, Math.sin(a) * 2.2, 1.0);
    ring.add(b);
  }
  const core = new THREE.Mesh(new THREE.CircleGeometry(1.7, 64), new THREE.MeshBasicMaterial({ color: '#eaf6ff' }));
  core.position.z = -1.1;
  ring.add(core);

  const tex = flareTexture();
  const flare = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: '#bfe0ff', blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  flare.position.set(-0.2, 0.4, 1.0);
  flare.scale.setScalar(5);
  ring.add(flare);
  const streak = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: '#d6ecff', blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.7 }));
  streak.position.copy(flare.position);
  streak.scale.set(13, 0.35, 1);
  ring.add(streak);

  // robotic arm reaching into the bore
  const arm = new THREE.Group();
  arm.position.set(0.6, -1.9, 0.8);
  scene.add(arm);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.7, 1.2, 48), white);
  arm.add(base);
  const j1 = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 24), steel);
  j1.position.y = 0.7;
  arm.add(j1);
  const seg1 = new THREE.Mesh(new THREE.CapsuleGeometry(0.32, 1.8, 10, 32), white);
  seg1.position.set(0.75, 1.25, 0);
  seg1.rotation.z = -0.9;
  arm.add(seg1);
  const j2 = new THREE.Mesh(new THREE.SphereGeometry(0.34, 32, 24), steel);
  j2.position.set(1.5, 1.8, 0);
  arm.add(j2);
  const seg2 = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 1.6, 10, 32), white);
  seg2.position.set(2.4, 2.0, -0.3);
  seg2.rotation.z = -1.35;
  arm.add(seg2);
  const tool = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.6, 24), steel);
  tool.position.set(3.3, 2.15, -0.5);
  tool.rotation.z = -Math.PI / 2;
  arm.add(tool);

  const cable = new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.CatmullRomCurve3([[-3, -4.2, 0.5], [-0.5, -2.2, 1.3], [1.6, -0.5, 1.3], [3.4, 0.2, 0.6]].map(V)), 80, 0.08, 12),
    dark,
  );
  scene.add(cable);

  const body = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 16, 80, 1, true), white);
  body.position.set(-8.6, 0, -3);
  body.rotation.z = 0.15;
  scene.add(body);

  const sp = { x: 0, y: 0 };
  return {
    scene, camera, fit: fitter(camera, 13, 2.2),
    update(t, dt, p) {
      follow(sp, p);
      flare.material.opacity = 0.85 + 0.15 * Math.sin(t * 2.3);
      flare.scale.setScalar(5 + Math.sin(t * 1.7) * 0.35);
      streak.material.rotation = -0.18 + Math.sin(t * 0.4) * 0.05;
      arm.rotation.z = Math.sin(t * 0.5) * 0.03;
      camera.position.x = sp.x * 0.6;
      camera.position.y = 0.3 + sp.y * 0.3;
      camera.lookAt(1.5, 0, 0);
    },
  };
}

/* ---------- 7. glass orb with a nucleus (webinar icon) ---------- */
export function orb({ env }) {
  const { scene, camera } = stage({ env, inner: '#ffffff', outer: '#dfe3ef', cy: 0.38, z: 6.2 });
  const g = new THREE.Group();
  scene.add(g);
  g.add(new THREE.Mesh(new THREE.SphereGeometry(1.35, 64, 48), glass({ roughness: 0.03, thickness: 2.4, ior: 1.45, iridescence: 0.4, attenuationColor: new THREE.Color('#d6e2ff'), attenuationDistance: 5 })));
  const nucleus = new THREE.Mesh(new THREE.SphereGeometry(0.5, 48, 32), new THREE.MeshPhysicalMaterial({ color: '#3a66ef', roughness: 0.22, clearcoat: 1, sheen: 0.5, sheenColor: new THREE.Color('#a9c1ff') }));
  g.add(nucleus);
  const satGeo = new THREE.SphereGeometry(0.12, 24, 16);
  const satMat = new THREE.MeshPhysicalMaterial({ color: '#a594ff', roughness: 0.2, clearcoat: 1 });
  const sats = Array.from({ length: 6 }, (_, i) => {
    const m = new THREE.Mesh(satGeo, satMat);
    g.add(m);
    return { m, ph: (i / 6) * Math.PI * 2, r: 0.75 + (i % 3) * 0.12, tilt: i * 0.5 };
  });
  const sp = { x: 0, y: 0 };
  return {
    scene, camera, fit: fitter(camera, 6.2, 1),
    update(t, dt, p) {
      follow(sp, p);
      nucleus.position.set(Math.sin(t * 0.7) * 0.12, Math.cos(t * 0.9) * 0.1, 0);
      sats.forEach((s) => {
        const a = t * 0.6 + s.ph;
        s.m.position.set(Math.cos(a) * s.r, Math.sin(a) * s.r * Math.cos(s.tilt), Math.sin(a) * s.r * Math.sin(s.tilt));
      });
      g.rotation.y = sp.x * 0.4;
      g.rotation.x = -sp.y * 0.3;
    },
  };
}

/* ---------- 8. iridescent twisted ribbons ---------- */
export function ribbon({ env }) {
  const { scene, camera } = stage({ env, inner: '#ffffff', outer: '#e2dcf6', cy: 0.4, z: 7 });
  const g = new THREE.Group();
  g.rotation.z = -0.55;
  scene.add(g);
  const make = (w, len, phase, color) => {
    const geo = new THREE.PlaneGeometry(w, len, 6, 320);
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i);
      const a = y * 1.25 + phase;
      const cx = Math.sin(y * 0.9 + phase) * 0.55, cz = Math.cos(y * 0.9 + phase) * 0.55;
      p.setXYZ(i, cx + x * Math.cos(a), y, cz + x * Math.sin(a));
    }
    geo.computeVertexNormals();
    return new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({ color, metalness: 0.2, roughness: 0.16, iridescence: 1, iridescenceIOR: 1.7, iridescenceThicknessRange: [180, 820], clearcoat: 1, side: THREE.DoubleSide }));
  };
  g.add(make(0.75, 8, 0, '#efe8ff'), make(0.4, 8, Math.PI, '#dfe9ff'));
  const sp = { x: 0, y: 0 };
  return {
    scene, camera, fit: fitter(camera, 7, 1),
    update(t, dt, p) {
      follow(sp, p);
      g.rotation.y = t * 0.35 + sp.x * 0.4;
      g.rotation.x = -sp.y * 0.2;
    },
  };
}

/* ---------- 9. dreamy bokeh plate (full-screen shader) ---------- */
export function bokeh() {
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const uniforms = { uTime: { value: 0 }, uAspect: { value: 1.6 } };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    depthTest: false,
    vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
    fragmentShader: /* glsl */ `
      varying vec2 vUv; uniform float uTime; uniform float uAspect;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main(){
        vec2 p = vec2((vUv.x - 0.5) * uAspect, vUv.y - 0.5);
        float t = uTime;
        vec3 col = mix(vec3(0.78, 0.85, 0.97), vec3(0.98, 0.94, 0.89), smoothstep(-0.8, 0.7, p.x + 0.15 * sin(t * 0.15)));
        col = mix(col, vec3(0.92, 0.90, 1.0), 0.35 * smoothstep(0.5, -0.4, p.y));

        // big out-of-focus petri dish on the left
        vec2 dc = vec2(-0.42 * uAspect + 0.1, 0.02);
        float dd = length((p - dc) * vec2(1.0, 1.15));
        col = mix(col, vec3(0.96, 0.97, 1.0), 0.55 * smoothstep(0.46, 0.30, dd));
        col += 0.10 * smoothstep(0.03, 0.0, abs(dd - 0.44));
        vec2 gcell = floor((p - dc) * 34.0);
        vec2 cc = (gcell + 0.5) / 34.0 + dc;
        float speck = step(0.86, hash(gcell)) * smoothstep(0.012, 0.002, length(p - cc)) * smoothstep(0.42, 0.2, dd);
        col = mix(col, vec3(0.25, 0.38, 0.9), speck * 0.8);

        // floating spheres, some sharp, most blurred
        for (int i = 0; i < 14; i++) {
          float fi = float(i);
          vec2 c = vec2((hash(vec2(fi, 1.3)) - 0.5) * uAspect * 1.1, (hash(vec2(fi, 7.1)) - 0.5) * 0.95);
          c += 0.04 * vec2(sin(t * 0.25 + fi * 1.7), cos(t * 0.2 + fi * 2.3));
          float r = 0.02 + 0.085 * hash(vec2(fi, 3.7));
          float soft = 0.05 + 0.85 * hash(vec2(fi, 9.2));
          float b = smoothstep(r, r * soft, length(p - c));
          vec3 bc = mix(vec3(0.16, 0.30, 0.92), vec3(0.60, 0.56, 0.98), hash(vec2(fi, 5.5)));
          col = mix(col, bc, b * 0.78);
          col += 0.25 * b * soft * smoothstep(r * 0.55, 0.0, length(p - c - vec2(-r * 0.3, r * 0.3)));
        }
        col = mix(col, vec3(1.0), 0.12 * smoothstep(0.0, 0.6, p.y + 0.2));
        col += (hash(vUv * 900.0 + fract(t)) - 0.5) * 0.018;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));
  return {
    scene, camera,
    setAspect(a) { uniforms.uAspect.value = a; },
    update(t) { uniforms.uTime.value = t; },
  };
}
