'use client';

import { useRef } from 'react';
import { ScrollTrigger, useGSAP } from '@/lib/motion/gsap';
import { introDelay } from '@/lib/motion/intro';
import { scramble } from '@/lib/motion/scramble';

interface ScrambleProps {
  text: string;
  /**
   * hero      — after the intro, on load
   * scroll    — when scrolled into view (default)
   * immediate — right away, and again whenever `text` changes
   */
  trigger?: 'hero' | 'scroll' | 'immediate';
  duration?: number;
  className?: string;
}

/** Text that decodes from random glyphs into place */
export function Scramble({ text, trigger = 'scroll', duration = 1, className }: ScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (trigger === 'hero') scramble(el, text, { duration: 1.1, delay: introDelay() + 0.1 });
      else if (trigger === 'immediate') scramble(el, text, { duration });
      else ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => scramble(el, text, { duration }) });
    },
    { dependencies: [text, trigger, duration], revertOnUpdate: true },
  );

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
