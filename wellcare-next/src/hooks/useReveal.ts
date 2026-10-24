'use client';

import type { RefObject } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/motion/gsap';
import { queueLead, queueReveal } from '@/lib/motion/reveal';

export type RevealMode = 'scroll' | 'lead';

/**
 * scroll — fade up when scrolled into view
 * lead   — hero supporting content, rises in right after the heading
 * false  — no reveal
 * The element renders data-reveal / data-lead so it starts hidden (see globals.css) until this takes over. Running in
 * the element's own effect matters: by then React has hydrated it, so the inline styles can't cause a mismatch.
 */
export function useReveal(ref: RefObject<HTMLElement | null>, mode: RevealMode | false = 'scroll') {
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !mode) return;
      const ready = () => (el.dataset[mode === 'lead' ? 'leadReady' : 'revealReady'] = '1');
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        ready();
        return;
      }
      gsap.set(el, { y: mode === 'lead' ? 30 : 40, opacity: 0 });
      ready();
      if (mode === 'lead') queueLead(el);
      else ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => queueReveal(el) });
    },
    { dependencies: [mode] },
  );
}
