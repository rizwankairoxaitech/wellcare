'use client';

import { useEffect, useRef } from 'react';
import { BookButton } from '@/components/booking/BookButton';
import { Icon } from '@/components/ui/Icon';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { cn, pad2 } from '@/lib/cn';
import { DEPARTMENTS } from '@/lib/data';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { introDelay } from '@/lib/motion/intro';
import type { DnaAnchor, DnaHandle } from '@/lib/three/dna';

/** Where each department callout sits on the helix (height, strand) */
const TAG_SPOTS = DEPARTMENTS.map((d, i) => ({ dept: d, y: 4.8 - i * 1.2, strand: i % 2 }));

/**
 * The liquid DNA helix behind the home hero, with the six departments pinned to its strands as callouts that turn
 * with it (desktop only). The helix draws itself in, melts into ink, and dissolves as you scroll past.
 */
export function HeroDna() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const tags = useRef<(HTMLButtonElement | null)[]>([]);
  const desktop = useMediaQuery('(min-width: 901px)');

  useEffect(() => {
    const el = canvas.current;
    const section = el?.closest('section');
    if (!el || !section) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    let disposed = false;
    let dna: DnaHandle | null = null;
    let raf = 0;
    const cleanups: (() => void)[] = [];

    import('@/lib/three/dna').then(({ initDNA }) => {
      if (disposed) return;
      try {
        dna = initDNA(el, pointer);
      } catch (error) {
        console.warn('[wellcare] DNA visual unavailable', error);
        return;
      }
      const handle = dna;
      const delay = introDelay();
      const fade = { appear: reduced ? 1 : 0, scroll: 0 };
      if (reduced) {
        handle.uniforms.uDraw.value = 1;
        handle.uniforms.uMelt.value = 1;
      } else {
        const tl = gsap
          .timeline({ delay: delay + 0.1 })
          .to(handle.uniforms.uDraw, { value: 1, duration: 2.2, ease: 'power2.inOut' })
          .to(handle.uniforms.uMelt, { value: 1, duration: 2.8, ease: 'power1.inOut' }, 1.1);
        const appear = gsap.to(fade, { appear: 1, duration: 1.4, delay: delay + 2.8, ease: 'power2.out' });
        cleanups.push(() => {
          tl.kill();
          appear.kill();
        });
      }
      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        onUpdate: (s) => {
          handle.setScroll(s.progress * 0.8);
          fade.scroll = s.progress;
        },
      });
      cleanups.push(() => st.kill());

      const spot: DnaAnchor = { x: 0, y: 0, facing: 0 };
      let prev = performance.now();
      const loop = (now: number) => {
        raf = requestAnimationFrame(loop);
        handle.tick(Math.min((now - prev) / 1000, 0.05));
        prev = now;
        const visible = fade.appear * Math.max(0, 1 - fade.scroll * 2.6);
        TAG_SPOTS.forEach((t, i) => {
          const tag = tags.current[i];
          if (!tag) return;
          const a = visible > 0.01 ? handle.anchor(t.y, t.strand, spot) : null;
          if (!a) {
            tag.style.opacity = '0';
            tag.style.visibility = 'hidden';
            return;
          }
          const front = Math.min(1, Math.max(0, (a.facing + 0.15) / 0.6));
          tag.style.visibility = 'visible';
          tag.style.transform = `translate3d(${a.x.toFixed(1)}px, ${a.y.toFixed(1)}px, 0)`;
          tag.style.opacity = (visible * (0.08 + 0.92 * front)).toFixed(3);
          tag.dataset.back = String(front < 0.5);
        });
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cleanups.forEach((fn) => fn());
      dna?.dispose();
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <>
      <canvas ref={canvas} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 size-full opacity-60 sm:opacity-100" />
      {desktop && (
        <div role="group" aria-label="Departments, pinned to the helix" className="pointer-events-none absolute inset-0 z-2">
          {TAG_SPOTS.map(({ dept }, i) => (
            <BookButton
              key={dept.id}
              ref={(node) => {
                tags.current[i] = node;
              }}
              unstyled
              preset={{ dept: dept.id }}
              aria-label={`Book ${dept.full}`}
              className={cn(
                'group pointer-events-auto absolute top-0 left-0 size-0 border-0 bg-transparent p-0 opacity-0 will-change-[transform,opacity]',
                'focus-visible:outline-none data-[back=true]:pointer-events-none',
              )}
            >
              <i className="absolute -top-1.5 -left-1.5 size-3 rounded-full border-2 border-violet-ink bg-white shadow-[0_0_0_5px_rgba(143,126,243,.22)]" />
              <i className="absolute -top-px left-1.5 h-px w-[54px] bg-[linear-gradient(90deg,#5a45d6,rgba(90,69,214,.15))]" />
              <span
                className={cn(
                  'absolute top-0 left-[62px] grid -translate-y-1/2 rounded-[14px] border border-white/90 bg-white/80 px-3.5 py-2 text-left text-sm font-medium whitespace-nowrap text-ink',
                  'shadow-[0_12px_30px_-18px_rgba(58,40,160,.55)] backdrop-blur-[12px] backdrop-saturate-140 transition-colors duration-300',
                  'group-hover:bg-ink group-hover:text-white group-focus-visible:bg-ink group-focus-visible:text-white',
                  'group-focus-visible:outline-2 group-focus-visible:outline-offset-3 group-focus-visible:outline-violet-ink',
                )}
              >
                <small className="font-mono text-[9.5px] font-medium tracking-[.12em] text-violet-ink group-hover:text-violet group-focus-visible:text-violet">
                  {pad2(i + 1)} · {dept.code}
                </small>
                {dept.name}
                <em className="flex max-h-0 items-center gap-1 overflow-hidden text-xs not-italic transition-[max-height,margin] duration-400 ease-smooth group-hover:mt-[3px] group-hover:max-h-5 group-focus-visible:mt-[3px] group-focus-visible:max-h-5">
                  Book <Icon name="arrow" />
                </em>
              </span>
            </BookButton>
          ))}
        </div>
      )}
    </>
  );
}
