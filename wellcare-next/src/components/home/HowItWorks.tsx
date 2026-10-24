'use client';

import { useRef } from 'react';
import { BookButton } from '@/components/booking/BookButton';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHead } from '@/components/shared/SectionHead';
import { gsap, useGSAP } from '@/lib/motion/gsap';

const PATH = 'M0 60 H170 l14 -30 l16 64 l14 -78 l14 58 l10 -14 H330 C380 60 400 18 450 18 S520 102 570 102 S640 18 690 18 S760 102 810 102 S880 18 930 18 S1000 102 1050 102 S1150 60 1200 60';

const STEPS = [
  { title: 'Say what’s wrong', text: 'In your own words. The concierge suggests the department — and tells you when to call emergency instead.' },
  { title: 'Pick doctor & time', text: 'See who you’ll meet and their earliest openings, in person or by teleconsult.' },
  { title: 'Walk in with a pass', text: 'Get an appointment pass, add it to your calendar and the desk confirms by phone.' },
];

/** Three steps, joined by an ECG line that draws itself as you scroll */
export function HowItWorks() {
  const root = useRef<HTMLElement>(null);
  const line = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const path = line.current;
      if (!path || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const len = path.getTotalLength();
      gsap.fromTo(
        path,
        { strokeDasharray: len, strokeDashoffset: len },
        { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top 75%', end: 'bottom 60%', scrub: 0.8 } },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} aria-labelledby="how-title" className="px-(--pad) pt-(--section)">
      <SectionHead
        eyebrow="How a visit works"
        title="Three steps. No guesswork."
        id="how-title"
        aside={
          <BookButton variant="ghost" arrow>
            Try it now
          </BookButton>
        }
      />
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true" className="mb-[18px] block h-[clamp(70px,9vw,120px)] w-full overflow-visible">
        <path d={PATH} className="fill-none stroke-line stroke-2 [vector-effect:non-scaling-stroke]" />
        <path ref={line} d={PATH} className="fill-none stroke-[url(#g-dna)] stroke-[2.5] [vector-effect:non-scaling-stroke]" />
      </svg>
      <ol className="grid grid-cols-1 gap-[clamp(16px,2.4vw,32px)] md:grid-cols-3">
        {STEPS.map((step, i) => (
          <Reveal as="li" key={step.title} className="border-t border-line-2 pt-[26px]">
            <span className="mb-3.5 block text-[clamp(64px,7vw,112px)] leading-[.9] font-light tracking-[-.06em] text-transparent [-webkit-text-stroke:1px_var(--color-ink-2)] md:mb-[26px]">
              0{i + 1}
            </span>
            <h3 className="mb-2.5 text-2xl font-medium tracking-[-.03em]">{step.title}</h3>
            <p className="max-w-[34ch] text-muted">{step.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
