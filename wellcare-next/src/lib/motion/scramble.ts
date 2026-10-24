import { gsap } from './gsap';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&*+=<>/≡';

/**
 * Decode text into place: random glyphs resolve left to right into `text`.
 * Writes into the element's existing text node, so React's own reference to that node stays valid.
 */
export function scramble(el: HTMLElement, text: string, { duration = 1.2, delay = 0 } = {}) {
  const write = (s: string) => {
    const node = el.firstChild;
    if (node && node.nodeType === Node.TEXT_NODE) node.nodeValue = s;
    else el.textContent = s;
  };
  const state = { p: 0 };
  return gsap.to(state, {
    p: 1,
    duration,
    delay,
    ease: 'power2.out',
    onUpdate() {
      const n = Math.floor(state.p * text.length);
      let s = text.slice(0, n);
      for (let i = n; i < text.length; i++) {
        const ch = text[i];
        s += ch === ' ' ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      write(s);
    },
    onComplete() {
      write(text);
    },
  });
}
