'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/motion/gsap';
import { useSmoothScroll } from '@/providers/SmoothScrollProvider';

const ITEMS = [
  'Emergency open 24/7',
  'Ambulance across Trichy & nearby districts',
  'Teleconsultation for select departments',
  'Insurance: ICICI · Star Health · Reliance · HDFC',
  'Also: Dermatology · ENT · Urology',
  'C-165, 9th A Cross, Thillai Nagar',
];

/** Endless strip of facts at the foot of the hero; it speeds up with scroll velocity */
export function Ticker() {
  const track = useRef<HTMLDivElement>(null);
  const { onVelocity } = useSmoothScroll();

  useGSAP(
    () => {
      if (!track.current || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const loop = gsap.to(track.current, { xPercent: -50, duration: 48, ease: 'none', repeat: -1 });
      let boost = 0;
      const off = onVelocity((v) => {
        boost = Math.max(boost, Math.min(Math.abs(v) * 0.35, 9));
      });
      const decay = () => {
        boost *= 0.93;
        loop.timeScale(1 + boost);
      };
      gsap.ticker.add(decay);
      return () => {
        off();
        gsap.ticker.remove(decay);
      };
    },
    { scope: track },
  );

  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 z-1 flex h-14 items-center overflow-hidden border-t border-line bg-white/60 mask-fade-x backdrop-blur-[10px]"
    >
      <div ref={track} className="flex flex-none">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-7 pr-7 font-mono text-[11.5px] font-medium tracking-[.12em] whitespace-nowrap text-ink-2 uppercase after:text-violet after:content-['✦']"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
