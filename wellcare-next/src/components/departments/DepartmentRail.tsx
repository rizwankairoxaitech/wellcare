'use client';

import { useEffect, useRef, useState } from 'react';
import { cn, pad2 } from '@/lib/cn';
import { DEPARTMENTS } from '@/lib/data';

/** Sticky row of department links that highlights the section in view */
export function DepartmentRail() {
  const rail = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      const line = window.innerHeight * 0.45;
      const current = DEPARTMENTS.map((d) => document.getElementById(d.id))
        .filter((s): s is HTMLElement => Boolean(s))
        .filter((s) => {
          const r = s.getBoundingClientRect();
          return r.top < line && r.bottom > line;
        })
        .pop();
      setActive(current?.id ?? null);
    };
    const frame = requestAnimationFrame(sync);
    window.addEventListener('scroll', sync, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', sync);
    };
  }, []);

  // keep the highlighted link in view on narrow screens
  useEffect(() => {
    const el = rail.current;
    const link = active ? el?.querySelector<HTMLElement>(`a[href="#${active}"]`) : null;
    if (el && link) el.scrollTo({ left: link.offsetLeft - el.clientWidth / 2 + link.offsetWidth / 2, behavior: 'smooth' });
  }, [active]);

  return (
    <nav
      ref={rail}
      aria-label="Departments on this page"
      className="sticky top-(--hdr) z-30 mt-10 flex gap-1.5 overflow-x-auto border-y border-line bg-white/85 px-(--pad) py-3 backdrop-blur-[16px] scrollbar-none"
    >
      {DEPARTMENTS.map((d, i) => {
        const on = d.id === active;
        return (
          <a
            key={d.id}
            href={`#${d.id}`}
            className={cn(
              'inline-flex h-10 flex-none items-center gap-2 rounded-full px-4 text-sm transition-colors duration-300',
              on ? 'bg-ink text-white' : 'text-ink-2 hover:bg-soft',
            )}
          >
            <span className={cn('font-mono text-[10.5px] font-medium', on ? 'text-violet' : 'text-muted-2')}>{pad2(i + 1)}</span>
            {d.name}
          </a>
        );
      })}
    </nav>
  );
}
