'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { gsap } from '@/lib/motion/gsap';

type Mode = '' | 'link' | 'label' | 'hide';

const TARGETS = '[data-book], [data-profile], [data-morph-cycle], a, button, input, textarea, iframe, select';

/** A ring that trails the pointer and says what a click will do — Book, View, Next. The native cursor stays. */
export function Cursor() {
  const ring = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);
  const [mode, setMode] = useState<Mode>('');
  const [label, setLabel] = useState('');

  useEffect(() => {
    const el = ring.current;
    if (!el) return;
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'power3' });
    const move = (e: PointerEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      setOn(true);
    };
    const leave = () => setOn(false);
    const over = (e: PointerEvent) => {
      const t = (e.target as Element | null)?.closest?.(TARGETS);
      if (!t) return void (setMode(''), setLabel(''));
      if (t.matches('[data-book]')) return void (setMode('label'), setLabel('Book'));
      if (t.matches('[data-profile]')) return void (setMode('label'), setLabel('View'));
      if (t.matches('[data-morph-cycle]')) return void (setMode('label'), setLabel('Next'));
      if (t.matches('input, textarea, select, iframe')) return void (setMode('hide'), setLabel(''));
      setMode('link');
      setLabel('');
    };
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);
    document.addEventListener('pointerover', over);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
      document.removeEventListener('pointerover', over);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed top-0 left-0 z-[350]">
      <span
        ref={ring}
        className={cn(
          'absolute top-0 left-0 grid place-items-center rounded-full border',
          'transition-[width,height,margin,background-color,border-color,opacity] duration-400 ease-smooth',
          mode === 'link' && '-m-[26px] size-[52px] border-transparent bg-[rgba(143,126,243,.14)]',
          mode === 'label' && 'mt-3 ml-3 size-[62px] border-transparent bg-dna shadow-[0_12px_30px_-10px_rgba(90,69,214,.6)]',
          (mode === '' || mode === 'hide') && '-m-[17px] size-[34px] border-[rgba(90,69,214,.5)]',
          on && mode !== 'hide' ? 'opacity-100' : 'opacity-0',
        )}
      >
        <em className={cn('font-mono text-[10.5px] font-semibold tracking-[.1em] text-white uppercase not-italic transition-opacity duration-200', mode === 'label' ? 'opacity-100' : 'opacity-0')}>
          {label}
        </em>
      </span>
    </div>
  );
}
