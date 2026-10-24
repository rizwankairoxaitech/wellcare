// Small helpers used by app.js: split text, scramble, count-up, tilt, magnetic
import { gsap } from 'gsap';

export const $ = (s, el = document) => el.querySelector(s);
export const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* Split an element's text into masked words: <span.w><span.wi>word</span></span>.
   Inline children (e.g. <span class="muted">) keep their class on each word. */
export function splitWords(el, mask = true) {
  const words = [];
  const frag = document.createDocumentFragment();
  const make = (text, cls) => {
    const w = document.createElement('span');
    w.className = mask ? 'w w--mask' : 'w';
    const i = document.createElement('span');
    i.className = cls ? `wi ${cls}` : 'wi';
    i.textContent = text;
    w.appendChild(i);
    words.push(i);
    return w;
  };
  const walk = (node, cls) => {
    node.childNodes.forEach((n) => {
      if (n.nodeType === 3) {
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          frag.appendChild(/^\s+$/.test(part) ? document.createTextNode(' ') : make(part, cls));
        });
      } else if (n.nodeName === 'BR') {
        frag.appendChild(document.createElement('br'));
      } else {
        walk(n, n.className);
      }
    });
  };
  walk(el, '');
  el.innerHTML = '';
  el.appendChild(frag);
  return words;
}

export function splitLetters(el) {
  const text = el.textContent;
  el.textContent = '';
  return [...text].map((ch) => {
    const s = document.createElement('span');
    s.textContent = ch === ' ' ? ' ' : ch;
    el.appendChild(s);
    return s;
  });
}

/* Decode / scramble text into place */
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&*+=<>/≡';
export function scramble(el, { duration = 1.4, delay = 0 } = {}) {
  const html = el.dataset.final || el.innerHTML;
  el.dataset.final = html;
  const text = html.replace(/<br\s*\/?>/gi, '\n');
  const obj = { p: 0 };
  return gsap.to(obj, {
    p: 1, duration, delay, ease: 'power2.out',
    onUpdate() {
      const n = Math.floor(obj.p * text.length);
      let s = text.slice(0, n);
      for (let i = n; i < text.length; i++) {
        const ch = text[i];
        s += ch === ' ' || ch === '\n' ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      el.innerHTML = s.replace(/\n/g, '<br>');
    },
    onComplete() { el.innerHTML = html; },
  });
}

/* Random digits first, then count the last stretch up to the target (79% → 98%) */
export function countUp(el, { duration = 1.8, delay = 0 } = {}) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const len = String(target).length;
  const ease = gsap.parseEase('power3.out');
  const obj = { p: 0 };
  return gsap.to(obj, {
    p: 1, duration, delay, ease: 'none',
    onUpdate() {
      if (obj.p < 0.25) {
        let s = '';
        for (let i = 0; i < len; i++) s += (Math.random() * 10) | 0;
        el.textContent = s + suffix;
      } else {
        el.textContent = Math.round(target * (0.6 + 0.4 * ease((obj.p - 0.25) / 0.75))) + suffix;
      }
    },
    onComplete() { el.textContent = target + suffix; },
  });
}

/* 3D tilt toward the pointer */
export function tilt(el, max = 8) {
  gsap.set(el, { transformPerspective: 900 });
  const rx = gsap.quickTo(el, 'rotationX', { duration: 0.7, ease: 'power3' });
  const ry = gsap.quickTo(el, 'rotationY', { duration: 0.7, ease: 'power3' });
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    ry(((e.clientX - r.left) / r.width - 0.5) * max * 2);
    rx(-((e.clientY - r.top) / r.height - 0.5) * max * 2);
  });
  el.addEventListener('pointerleave', () => { rx(0); ry(0); });
}

/* Magnetic pull toward the cursor */
export function magnetic(el, strength = 0.35) {
  const xTo = gsap.quickTo(el, 'x', { duration: 0.7, ease: 'elastic.out(1, 0.5)' });
  const yTo = gsap.quickTo(el, 'y', { duration: 0.7, ease: 'elastic.out(1, 0.5)' });
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    xTo((e.clientX - (r.left + r.width / 2)) * strength);
    yTo((e.clientY - (r.top + r.height / 2)) * strength);
  });
  el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
}

/* ---------- Illustrated doctor portraits (placeholders) ----------
   Swap for real photos by giving the <img> a src — data-avatar is only used when src is empty. */
const PEOPLE = [
  { skin: '#f2d5c2', hair: '#d8b27a', style: 'long', shirt: '#c9d6e8', bg: ['#ececf0', '#d9d9df'] },
  { skin: '#e8c0a4', hair: '#3a2a24', style: 'bun', shirt: '#2f3b4e', bg: ['#ebebef', '#d7d7de'] },
  { skin: '#c69676', hair: '#1f1a19', style: 'curly', shirt: '#9db3a8', bg: ['#ececf0', '#dadadf'] },
  { skin: '#f3d8c8', hair: '#7a4a2c', style: 'bob', shirt: '#b9a6ff', bg: ['#eeeef2', '#dbdbe1'] },
  { skin: '#b9866a', hair: '#26262a', style: 'short', shirt: '#8aa0c8', bg: ['#ebebef', '#d8d8de'], beard: true, glasses: true },
];

function shade(hex, k) {
  const n = parseInt(hex.slice(1), 16);
  const f = (c) => Math.max(0, Math.min(255, Math.round(c * k)));
  return `#${((f(n >> 16) << 16) | (f((n >> 8) & 255) << 8) | f(n & 255)).toString(16).padStart(6, '0')}`;
}

export function avatar(i) {
  const p = PEOPLE[i % PEOPLE.length];
  const skinD = shade(p.skin, 0.88);
  const brow = shade(p.hair, 0.8);
  const back = {
    long: `<path d="M92 122 C86 62 120 50 150 50 C182 50 216 62 210 124 L224 300 C200 318 100 318 76 300 Z" fill="${p.hair}"/>`,
    bob: `<path d="M94 120 C90 62 122 52 150 52 C180 52 210 62 206 120 L214 204 C196 216 104 216 86 204 Z" fill="${p.hair}"/>`,
    bun: `<circle cx="150" cy="56" r="27" fill="${p.hair}"/>`,
    curly: `<g fill="${p.hair}">${[[104, 92], [118, 70], [140, 58], [164, 58], [186, 70], [198, 92], [204, 118], [96, 118], [100, 146], [200, 146]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="24"/>`).join('')}</g>`,
    short: '',
  }[p.style];
  const front = {
    long: `<path d="M100 134 C96 76 126 62 152 62 C186 62 206 86 200 136 C196 110 182 92 156 90 C136 100 116 112 100 134 Z" fill="${p.hair}"/>`,
    bob: `<path d="M100 132 C96 76 126 62 152 62 C186 62 206 86 200 134 C190 106 160 92 124 100 C112 108 104 118 100 132 Z" fill="${p.hair}"/>`,
    bun: `<path d="M101 128 C100 80 126 66 150 66 C176 66 200 80 199 128 C190 100 172 88 150 88 C128 88 110 100 101 128 Z" fill="${p.hair}"/>`,
    curly: `<path d="M102 124 C102 84 126 70 150 70 C176 70 198 84 198 124 C188 104 170 94 150 94 C130 94 112 104 102 124 Z" fill="${p.hair}"/>`,
    short: `<path d="M100 124 C98 76 126 60 152 60 C180 60 204 78 200 124 C196 104 186 92 172 90 C150 96 124 92 108 100 C104 108 102 116 100 124 Z" fill="${p.hair}"/>`,
  }[p.style];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
<defs><linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${p.bg[0]}"/><stop offset="1" stop-color="${p.bg[1]}"/></linearGradient>
<linearGradient id="c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e6e6ee"/></linearGradient></defs>
<rect width="300" height="400" fill="url(#b)"/>
${back}
<path d="M128 168 L128 214 C136 226 164 226 172 214 L172 168 Z" fill="${skinD}"/>
<path d="M36 400 C42 292 80 240 128 222 L150 262 L172 222 C220 240 258 292 264 400 Z" fill="url(#c)"/>
<path d="M128 222 L150 262 L172 222 C164 216 136 216 128 222 Z" fill="${p.shirt}"/>
<path d="M128 222 L116 238 L146 304 L150 262 Z" fill="#f4f4f8" stroke="#dcdce4"/>
<path d="M172 222 L184 238 L154 304 L150 262 Z" fill="#f4f4f8" stroke="#dcdce4"/>
<path d="M118 232 C108 282 126 314 150 320 C174 314 192 282 182 232" fill="none" stroke="#3a3d46" stroke-width="4" stroke-linecap="round"/>
<circle cx="150" cy="324" r="9" fill="#a3a9b4" stroke="#3a3d46" stroke-width="3"/>
<ellipse cx="102" cy="138" rx="9" ry="13" fill="${skinD}"/><ellipse cx="198" cy="138" rx="9" ry="13" fill="${skinD}"/>
<ellipse cx="150" cy="128" rx="49" ry="60" fill="${p.skin}"/>
${front}
<path d="M123 114 Q133 109 143 113" stroke="${brow}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M157 113 Q167 109 177 114" stroke="${brow}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<ellipse cx="133" cy="129" rx="4.2" ry="4.8" fill="#2a2630"/><ellipse cx="167" cy="129" rx="4.2" ry="4.8" fill="#2a2630"/>
<path d="M150 134 Q146 150 153 152" stroke="${skinD}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
<path d="M137 164 Q150 174 163 164" stroke="#b1606b" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<ellipse cx="122" cy="152" rx="9" ry="5" fill="#f08f8f" opacity=".16"/><ellipse cx="178" cy="152" rx="9" ry="5" fill="#f08f8f" opacity=".16"/>
${p.beard ? `<path d="M104 140 C106 198 130 194 150 194 C170 194 194 198 196 140 C190 170 176 178 150 178 C124 178 110 170 104 140 Z" fill="${p.hair}" opacity=".92"/>` : ''}
${p.glasses ? `<g fill="none" stroke="#2c2c33" stroke-width="2.6"><circle cx="133" cy="129" r="13"/><circle cx="167" cy="129" r="13"/><path d="M146 129 L154 129"/></g>` : ''}
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
