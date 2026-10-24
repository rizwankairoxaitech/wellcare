'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { SplitText } from '@/components/motion/SplitText';
import { Dot } from '@/components/ui/Dot';
import { Hud } from '@/components/ui/Hud';
import { Icon } from '@/components/ui/Icon';
import { gsap, useGSAP } from '@/lib/motion/gsap';

const chip = 'inline-flex items-center gap-2.5 rounded-full border border-white/28 bg-[rgba(14,14,18,.32)] px-[18px] py-[11px] text-[14.5px] text-white backdrop-blur-[14px]';

/** Full-bleed hospital photo that opens up from a rounded card as you scroll */
export function Stage() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const st = { trigger: root.current, start: 'top 92%', end: 'top 8%', scrub: 0.6 };
      gsap.fromTo('[data-stage-frame]', { clipPath: 'inset(0% 8% 0% 8% round 36px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', scrollTrigger: st });
      gsap.fromTo('[data-stage-img]', { scale: 1.22 }, { scale: 1, ease: 'none', scrollTrigger: { ...st, end: 'bottom top' } });
      gsap.from('[data-stage-chip]', { y: 30, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: root.current, start: 'top 40%', once: true } });
    },
    { scope: root },
  );

  return (
    <section ref={root} aria-label="Inside Wellcare" className="pt-6">
      <div
        data-stage-frame
        className="relative h-[86svh] min-h-[560px] overflow-hidden [clip-path:inset(0_var(--pad)_0_var(--pad)_round_32px)] sm:h-[min(92svh,920px)] sm:min-h-[520px]"
      >
        <Image
          data-stage-img
          src="/images/hospital-hero.webp"
          alt="A Wellcare doctor talking with an older patient and his daughter in a bright hospital corridor"
          fill
          sizes="100vw"
          className="object-cover object-[60%_40%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,18,.05)_30%,rgba(14,14,18,.72)_100%),linear-gradient(90deg,rgba(14,14,18,.35),transparent_55%)]" />
        <div className="absolute bottom-[8%] left-[calc(8%+20px)] text-white sm:bottom-[11%] md:left-[calc(8%+clamp(24px,4vw,64px))]">
          <Hud tone="light">Inside Wellcare</Hud>
          <SplitText lines={['A hospital that listens first.']} className="mt-4 max-w-[11ch] text-[clamp(46px,6.8vw,112px)]" />
        </div>
        <ul className="absolute top-7 left-[calc(8%+20px)] grid justify-items-start gap-2.5 md:top-auto md:right-[calc(8%+clamp(24px,4vw,64px))] md:bottom-[11%] md:left-auto md:justify-items-end">
          <li data-stage-chip className={chip}>
            <Dot /> 24/7 emergency desk
          </li>
          <li data-stage-chip className={chip}>
            <Icon name="video" /> Teleconsult for select departments
          </li>
          <li data-stage-chip className={chip}>
            <Icon name="check" /> Major insurers accepted
          </li>
        </ul>
      </div>
    </section>
  );
}
