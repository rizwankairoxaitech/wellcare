'use client';

import { useEffect, useRef, useState } from 'react';
import { DoctorCard } from '@/components/doctors/DoctorCard';
import { NavLink } from '@/components/layout/NavLink';
import { Fineprint } from '@/components/shared/Fineprint';
import { SectionHead } from '@/components/shared/SectionHead';
import { Icon } from '@/components/ui/Icon';
import { linkStyles, roundStyles } from '@/components/ui/styles';
import { cn } from '@/lib/cn';
import { DOCTORS } from '@/lib/data';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/motion/gsap';

/**
 * Doctors strip. On desktop the section pins and the cards travel sideways as you scroll, tilting in with depth;
 * elsewhere it is a swipeable row (with drag on mouse and prev/next buttons).
 */
export function DoctorStrip() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [hscroll, setHscroll] = useState(false);
  const [dragging, setDragging] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
        const el = track.current;
        if (!el) return;
        setHscroll(true);
        const distance = () => Math.max(0, el.scrollWidth - document.documentElement.clientWidth);
        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: () => `+=${distance()}`, pin: true, scrub: 0.7, invalidateOnRefresh: true, anticipatePin: 1 },
        });
        el.querySelectorAll('article').forEach((card) =>
          gsap.from(card, {
            rotateY: -18, z: -120, opacity: 0.4, transformPerspective: 1200,
            scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left 95%', end: 'left 55%', scrub: true },
          }),
        );
        return () => {
          setHscroll(false);
          gsap.set(el, { clearProps: 'transform' });
        };
      });
    },
    { scope: root },
  );

  // the pinned layout changes the section's size: measure again once React has applied it
  useEffect(() => {
    if (hscroll) ScrollTrigger.refresh();
  }, [hscroll]);

  // drag to scroll with a mouse when the row is a plain scroller
  useEffect(() => {
    const el = track.current;
    if (!el || hscroll || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let down = false;
    let moved = false;
    let startX = 0;
    let startLeft = 0;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || (e.target as Element).closest('button, a')) return;
      down = true;
      moved = false;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      setDragging(true);
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      down = false;
      setDragging(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!moved) return;
      e.preventDefault();
      e.stopPropagation();
      moved = false;
    };
    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    el.addEventListener('click', onClick, true);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      el.removeEventListener('click', onClick, true);
    };
  }, [hscroll]);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector('article');
    el?.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 20), behavior: 'smooth' });
  };

  return (
    // the wrapper keeps React's DOM stable while GSAP wraps the pinned section in a spacer
    <div>
      <section
        ref={root}
        aria-labelledby="docs-title"
        className={cn('px-(--pad)', hscroll ? 'mt-[clamp(40px,6vw,100px)] min-h-svh overflow-hidden pt-[calc(var(--hdr)+36px)]' : 'pt-(--section)')}
      >
        <SectionHead
          eyebrow="The people behind the care"
          title="Meet your doctors."
          id="docs-title"
          className={cn(hscroll && 'mb-[30px]')}
          titleClassName={cn(hscroll && 'text-[clamp(44px,5vw,82px)]')}
          aside={
            <div className="flex items-center gap-2.5">
              {!hscroll && (
                <>
                  <button type="button" aria-label="Previous doctors" onClick={() => step(-1)} className={cn(roundStyles, 'hidden sm:grid')}>
                    <Icon name="arrow" className="-scale-x-100" />
                  </button>
                  <button type="button" aria-label="More doctors" onClick={() => step(1)} className={cn(roundStyles, 'hidden sm:grid')}>
                    <Icon name="arrow" />
                  </button>
                </>
              )}
              <NavLink href="/doctors" className={cn(linkStyles, 'sm:ml-2.5')}>
                All doctors <Icon name="arrow" />
              </NavLink>
            </div>
          }
        />
        <div
          ref={track}
          tabIndex={0}
          aria-label="Doctors, scroll sideways for more"
          className={cn(
            '-mx-(--pad) flex gap-5 px-(--pad) pt-1.5 pb-[26px]',
            hscroll
              ? 'w-max overflow-visible'
              : 'snap-x snap-mandatory scroll-px-(--pad) overflow-x-auto scrollbar-none',
            !hscroll && (dragging ? 'cursor-grabbing snap-none select-none' : 'cursor-grab'),
          )}
        >
          {DOCTORS.map((doc) => (
            <DoctorCard
              key={doc.id}
              doctor={doc}
              compact={hscroll}
              className={cn('snap-start', hscroll ? 'flex-[0_0_330px] [transform-style:preserve-3d]' : 'flex-[0_0_clamp(272px,25vw,360px)]')}
            />
          ))}
        </div>
        <Fineprint>Portraits are AI-generated placeholders, not photographs of the doctors named. Profiles are draft copy pending hospital approval.</Fineprint>
      </section>
    </div>
  );
}
