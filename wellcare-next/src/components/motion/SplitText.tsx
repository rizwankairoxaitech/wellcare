'use client';

import { Fragment, useRef } from 'react';
import { cn } from '@/lib/cn';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/motion/gsap';
import { introDelay } from '@/lib/motion/intro';

export type SplitLine = string | { text: string; grad?: boolean };

interface SplitTextProps {
  as?: 'h1' | 'h2' | 'h3';
  /** each entry is one line; `{ grad: true }` paints it with the DNA gradient */
  lines: SplitLine[];
  className?: string;
  id?: string;
  /** hero headings animate on load (after the intro); others when scrolled into view */
  hero?: boolean;
}

/** Heading whose words rise out of masks, one after another */
export function SplitText({ as: Tag = 'h2', lines, className, id, hero = false }: SplitTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.dataset.splitReady = '1';
        return;
      }
      const words = el.querySelectorAll('[data-word]');
      gsap.set(words, { yPercent: 150 });
      el.dataset.splitReady = '1';
      const play = (delay = 0) => gsap.to(words, { yPercent: 0, duration: 1.2, ease: 'expo.out', stagger: 0.05, delay });
      if (hero) play(introDelay() + 0.2);
      else ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => play() });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} id={id} data-split className={className}>
      {lines.map((line, li) => {
        const { text, grad = false } = typeof line === 'string' ? { text: line } : line;
        return (
          <Fragment key={li}>
            {li > 0 && <br />}
            {text.split(' ').map((word, wi) => (
              <Fragment key={wi}>
                {wi > 0 && ' '}
                <span className="word-mask">
                  <span data-word className={cn('inline-block will-change-transform', grad && 'grad-text')}>
                    {word}
                  </span>
                </span>
              </Fragment>
            ))}
          </Fragment>
        );
      })}
    </Tag>
  );
}
