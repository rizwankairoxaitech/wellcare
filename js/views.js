// One shared WebGL renderer draws every 3D "image" on the page.
// Each [data-gl] box gets a plain 2D canvas; per frame we render its scene
// into a corner of the hidden GL canvas and blit it across with drawImage.
// This keeps us at a single WebGL context no matter how many visuals exist,
// and lets normal DOM (glass cards, buttons) sit above or below each visual.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import * as scenes from './scenes.js';

const DPR = Math.min(window.devicePixelRatio || 1, window.innerWidth < 900 ? 1 : 1.25);
const glCanvas = document.createElement('canvas');
const views = [];
const registry = {};
let renderer = null;
let env = null;
let glW = 1, glH = 1;

export function initViews() {
  try {
    renderer = new THREE.WebGLRenderer({ canvas: glCanvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  } catch (e) {
    console.warn('[views] WebGL unavailable — falling back to CSS gradients', e);
    return false;
  }
  renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const pmrem = new THREE.PMREMGenerator(renderer);
  env = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
  pmrem.dispose();
  return true;
}

export function getScene(name) {
  if (!registry[name]) registry[name] = scenes[name]({ env });
  return registry[name];
}

export function createView(el, name) {
  if (!renderer || !scenes[name]) return null;
  const canvas = document.createElement('canvas');
  canvas.className = 'gl-view';
  el.prepend(canvas);
  const v = { el, canvas, ctx: canvas.getContext('2d'), scene: getScene(name), name, visible: false, w: 0, h: 0 };
  new IntersectionObserver(([e]) => { v.visible = e.isIntersecting; }, { rootMargin: '150px 0px' }).observe(el);
  const measure = () => {
    const w = Math.max(2, Math.round(el.clientWidth * DPR));
    const h = Math.max(2, Math.round(el.clientHeight * DPR));
    if (w !== v.w || h !== v.h) { v.w = w; v.h = h; canvas.width = w; canvas.height = h; }
  };
  new ResizeObserver(measure).observe(el);
  measure();
  views.push(v);
  return v;
}

export function setViewScene(v, name) {
  if (v) { v.scene = getScene(name); v.name = name; }
}

// Pre-compile shaders while the preloader is on screen to avoid hitches later.
export function compileAll() {
  if (!renderer) return;
  for (const k in registry) renderer.compile(registry[k].scene, registry[k].camera);
}

export function renderViews(time, dt, pointer) {
  if (!renderer) return;
  let mw = glW, mh = glH, any = false;
  for (const v of views) if (v.visible) { any = true; mw = Math.max(mw, v.w); mh = Math.max(mh, v.h); }
  if (!any) return;
  if (mw !== glW || mh !== glH) { glW = mw; glH = mh; renderer.setSize(glW, glH, false); }

  renderer.setScissorTest(true);
  for (const v of views) {
    if (!v.visible || v.w < 4 || v.h < 4) continue;
    const s = v.scene;
    if (s._t !== time) { s._t = time; s.update(time, dt, pointer); }   // one update per frame per scene
    const aspect = v.w / v.h;
    if (s.camera.isPerspectiveCamera && s.camera.aspect !== aspect) {
      s.camera.aspect = aspect;
      if (s.fit) s.fit(aspect);
      s.camera.updateProjectionMatrix();
    }
    if (s.setAspect) s.setAspect(aspect);
    renderer.setViewport(0, 0, v.w, v.h);
    renderer.setScissor(0, 0, v.w, v.h);
    renderer.render(s.scene, s.camera);
    v.ctx.drawImage(glCanvas, 0, glH - v.h, v.w, v.h, 0, 0, v.w, v.h);
  }
}
