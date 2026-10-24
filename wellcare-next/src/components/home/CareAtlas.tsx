'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { BookButton } from '@/components/booking/BookButton';
import { NavLink } from '@/components/layout/NavLink';
import { Scramble } from '@/components/motion/Scramble';
import { Hud } from '@/components/ui/Hud';
import { Icon } from '@/components/ui/Icon';
import { linkStyles } from '@/components/ui/styles';
import { useReducedMotion } from '@/hooks/useMediaQuery';
import { cn, pad2 } from '@/lib/cn';
import { DEPARTMENTS, DEPT_IDS, doctorsIn } from '@/lib/data';
import { ScrollTrigger, useGSAP } from '@/lib/motion/gsap';
import type { MorphHandle } from '@/lib/three/morph';
import { useSmoothScroll } from '@/providers/SmoothScrollProvider';

const LAST = DEPT_IDS.length - 1;

/**
 * Care atlas: a pinned section where the particle cloud becomes each department as you scroll — stethoscope, knee,
 * heart, mother, brain, baby — with that department's details alongside. Without motion it is a simple grid.
 */
export function CareAtlas() {
  const reduced = useReducedMotion();
  const section = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const bar = useRef<HTMLElement>(null);
  const trigger = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  const { scrollTo } = useSmoothScroll();

  useGSAP(
    () => {
      if (reduced || !section.current || !canvas.current) return;
      let morph: MorphHandle | null = null;
      let disposed = false;
      let progress = 0;
      // hold each organ crisp for most of its stretch; melt into the next one through the middle
      const scrub = () => {
        const f = progress * LAST;
        const i = Math.min(Math.floor(f), LAST - 1);
        const local = Math.min(1, Math.max(0, (f - i - 0.3) / 0.4));
        morph?.scrub(i + local * local * (3 - 2 * local), DEPT_IDS);
      };
      const el = canvas.current;
      import('@/lib/three/morph').then(({ createMorph }) => {
        if (disposed) return;
        morph = createMorph(el, { initial: DEPT_IDS[0] });
        morph.preload(DEPT_IDS);
        scrub();
      });
      trigger.current = ScrollTrigger.create({
        trigger: section.current,
        start: 'top top',
        end: () => `+=${window.innerHeight * LAST * 0.85}`,
        pin: true,
        anticipatePin: 1,
        onUpdate: (s) => {
          progress = s.progress;
          scrub();
          setActive(Math.round(s.progress * LAST));
          if (bar.current) bar.current.style.transform = `scaleX(${s.progress})`;
        },
      });
      return () => {
        disposed = true;
        morph?.dispose();
        trigger.current = null;
      };
    },
    { dependencies: [reduced], revertOnUpdate: true },
  );

  const jump = (i: number) => {
    const st = trigger.current;
    if (st) scrollTo(st.start + ((st.end - st.start) * i) / LAST + 2, { duration: 1.4 });
  };

  return (
    // the wrapper keeps React's DOM stable while GSAP wraps the pinned section in a spacer
    <div className="mt-(--section)">
      <section
        ref={section}
        aria-labelledby="atlas-title"
        className={cn('relative isolate overflow-hidden bg-canvas', reduced ? 'h-auto' : 'h-svh min-h-[620px] md:min-h-[660px]')}
      >
        <div aria-hidden="true" className="absolute inset-0 -z-1 bg-atlas" />
        {!reduced && (
          <canvas
            ref={canvas}
            aria-hidden="true"
            className="absolute top-[calc(var(--hdr)+48px)] right-0 h-[35%] w-full md:top-0 md:h-full md:w-[62%]"
          />
        )}
        <div
          className={cn(
            'flex items-center justify-between gap-4',
            reduced ? 'px-(--pad) pt-20' : 'absolute inset-x-(--pad) top-[calc(var(--hdr)+8px)] md:top-[calc(var(--hdr)+18px)]',
          )}
        >
          <Hud className="text-[10px]/[1.4] tracking-[.1em] md:text-[11px]/[1.4] md:tracking-[.14em]">
            <Scramble text="Care atlas · scroll through six specialties" />
          </Hud>
          {!reduced && (
            <p aria-hidden="true" className="flex-none font-mono text-[13px] font-medium whitespace-nowrap text-muted">
              <span className="text-2xl text-ink md:text-[30px]">{pad2(active + 1)}</span> / {pad2(DEPARTMENTS.length)}
            </p>
          )}
        </div>
        <h2 id="atlas-title" className="sr-only">
          Departments at Wellcare
        </h2>

        <div
          className={cn(
            reduced
              ? 'grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-x-8 gap-y-12 px-(--pad) pt-10 pb-20'
              : 'absolute right-(--pad) bottom-20 left-(--pad) h-[46%] md:top-1/2 md:right-auto md:bottom-auto md:h-[480px] md:w-[min(540px,42%)] md:-translate-y-[48%]',
          )}
        >
          {DEPARTMENTS.map((d, i) => {
            const on = reduced || i === active;
            const docs = doctorsIn(d.id);
            return (
              <article
                key={d.id}
                aria-label={d.full}
                inert={!on}
                className={cn(
                  reduced
                    ? ''
                    : 'absolute top-0 left-0 w-full transition-[opacity,transform,filter] duration-[500ms,800ms,600ms] ease-smooth',
                  !reduced && (on ? 'pointer-events-auto translate-y-0 opacity-100 blur-none' : 'pointer-events-none translate-y-[34px] opacity-0 blur-[6px]'),
                )}
              >
                <p className="font-mono text-xs font-medium tracking-[.16em] text-violet-ink">
                  {pad2(i + 1)} · {d.code}
                </p>
                <h3
                  className={cn(
                    'my-2 font-normal tracking-[-.055em] md:mt-3.5 md:mb-3',
                    reduced ? 'text-[clamp(36px,4vw,56px)]' : 'text-[clamp(36px,10vw,54px)] md:text-[clamp(46px,5.6vw,92px)]',
                    // after the font sizes: tailwind-merge drops a line-height that comes before a font-size class
                    'leading-[.94]',
                  )}
                >
                  {d.full}
                </h3>
                <p className="text-[clamp(18px,1.5vw,22px)] tracking-[-.02em] text-ink-2">{d.tagline}</p>
                <ul className={cn('mt-[22px] mb-6 gap-2', reduced ? 'grid' : 'hidden md:grid')}>
                  {d.forList.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 text-[15.5px] text-ink-2 before:h-px before:w-4 before:flex-none before:-translate-y-1 before:bg-violet-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex w-fit items-center gap-3.5 rounded-[18px] border border-line bg-white/78 py-2.5 pr-[18px] pl-2.5 backdrop-blur-[10px] md:mt-0">
                  <span className="flex">
                    {docs.map((doc, j) =>
                      doc.image ? (
                        <Image
                          key={doc.id}
                          src={doc.image}
                          alt=""
                          width={44}
                          height={44}
                          className={cn('size-11 rounded-full border-2 border-white object-cover', j > 0 && '-ml-3')}
                        />
                      ) : null,
                    )}
                  </span>
                  <span>
                    <small className="block font-mono text-[10px] font-medium tracking-[.12em] text-muted uppercase">
                      Your specialist{docs.length > 1 ? 's' : ''}
                    </small>
                    <strong className="text-[15px] font-medium">{docs.map((doc) => doc.name).join(' · ')}</strong>
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-[22px] md:mt-6">
                  <BookButton magnetic arrow preset={{ dept: d.id }}>
                    Book {d.name}
                  </BookButton>
                  <NavLink href={`/departments#${d.id}`} className={linkStyles}>
                    Details <Icon name="arrow" />
                  </NavLink>
                </div>
              </article>
            );
          })}
        </div>

        {!reduced && (
          <nav aria-label="Jump to a department" className="absolute inset-x-(--pad) bottom-[26px] flex gap-1 border-t border-line pt-4">
            {DEPARTMENTS.map((d, i) => (
              <button
                key={d.id}
                type="button"
                onClick={() => jump(i)}
                aria-label={d.name}
                className={cn(
                  'flex flex-1 items-baseline justify-center gap-2 border-0 bg-transparent px-1 py-1.5 text-left text-[0px] transition-colors duration-300 hover:text-ink md:justify-start md:text-sm',
                  i === active ? 'text-ink' : 'text-muted',
                )}
              >
                <span className={cn('font-mono text-[11px] font-medium md:text-[10.5px]', i === active && 'text-violet-ink')}>{pad2(i + 1)}</span>
                {d.name}
              </button>
            ))}
            <span aria-hidden="true" className="absolute inset-x-0 -top-px h-0.5">
              <i ref={bar} className="block h-full origin-left scale-x-0 bg-dna" />
            </span>
          </nav>
        )}
      </section>
    </div>
  );
}
