'use client';

import { useRef } from 'react';
import { Logo } from '@/components/brand/Logo';
import { gsap, useGSAP } from '@/lib/motion/gsap';
import { endIntro, shouldPlayIntro } from '@/lib/motion/intro';
import { useSmoothScroll } from '@/providers/SmoothScrollProvider';

/**
 * First-visit intro on the home page: the logo draws itself, the wordmark rises, a counter runs to 100 % and the
 * white cover wipes up. Server-rendered but only visible while <html data-intro="1"> (set before first paint).
 */
export function Intro() {
  const root = useRef<HTMLDivElement>(null);
  const { lock } = useSmoothScroll();

  useGSAP(
    () => {
      const el = root.current;
      if (!el || !shouldPlayIntro()) return;
      lock(true);
      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        endIntro();
        lock(false);
      };

      const strokes = el.querySelectorAll<SVGPathElement>('[data-stroke]');
      strokes.forEach((path) => {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      });
      const words = el.querySelectorAll('[data-intro-word]');
      const counter = el.querySelector('[data-intro-count]')?.firstChild;
      const count = { v: 0 };

      gsap
        .timeline({ onComplete: finish })
        .to(strokes, { strokeDashoffset: 0, duration: 1.1, stagger: 0.07, ease: 'power2.inOut' }, 0)
        .from(el.querySelectorAll('[data-dot]'), { scale: 0, transformOrigin: '50% 50%', duration: 0.6, stagger: 0.1, ease: 'back.out(3)' }, 0.45)
        .from(words, { yPercent: 140, duration: 1, stagger: 0.08, ease: 'expo.out' }, 0.2)
        .from('[data-intro-sub]', { opacity: 0, y: 12, duration: 0.6 }, 0.45)
        .to(count, { v: 100, duration: 1.5, ease: 'power2.inOut', onUpdate: () => counter && (counter.nodeValue = String(Math.round(count.v))) }, 0)
        .to('[data-intro-bar]', { scaleX: 1, duration: 1.5, ease: 'power2.inOut' }, 0)
        .to(words, { yPercent: -140, duration: 0.6, stagger: 0.05, ease: 'expo.in' }, 1.7)
        .to('[data-intro-fade]', { opacity: 0, duration: 0.3 }, 1.7)
        .to(el, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1, ease: 'expo.inOut' }, 2.05);

      return finish;
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="fixed inset-0 z-[300] hidden place-content-center justify-items-center gap-[18px] bg-white [clip-path:inset(0_0_0_0)] intro:grid"
    >
      <div className="absolute inset-0 bg-intro-glow" />
      <div className="relative flex items-center gap-[clamp(14px,2.2vw,34px)]">
        <span data-intro-fade className="block">
          <Logo className="aspect-[64/46] h-auto w-[clamp(84px,12vw,190px)] flex-none" />
        </span>
        <div className="-mx-[.16em] -mt-[.1em] -mb-[.12em] flex overflow-hidden pt-[.1em] pr-[.16em] pb-[.24em] pl-[.06em] text-[clamp(54px,9.6vw,156px)] leading-[.95] font-semibold tracking-[-.055em]">
          <span data-intro-word className="inline-block">Well</span>
          <span data-intro-word className="inline-block grad-text">care</span>
        </div>
      </div>
      <p data-intro-sub data-intro-fade className="relative font-mono text-[11px] font-medium tracking-[.2em] text-muted uppercase">
        Hospital &amp; Research Institute · Trichy
      </p>
      <div data-intro-fade className="absolute bottom-[42px] left-(--pad) font-mono text-[13px] font-medium">
        <span data-intro-count>0</span>%
      </div>
      <div data-intro-fade className="absolute right-(--pad) bottom-7 left-(--pad) h-0.5 bg-line">
        <i data-intro-bar className="block h-full origin-left scale-x-0 bg-dna" />
      </div>
    </div>
  );
}
