'use client';

import { useEffect, useRef, useState } from 'react';
import { Scramble } from '@/components/motion/Scramble';
import { useReveal } from '@/hooks/useReveal';
import { cn, pad2 } from '@/lib/cn';
import { DEPARTMENTS, DEPT_IDS } from '@/lib/data';
import type { MorphHandle } from '@/lib/three/morph';

const CAPTIONS: Record<string, string> = {
  cross: 'Emergency & general care',
  hospital: 'Multispecialty hospital',
  ambulance: 'Ambulance · 24/7',
  check: 'Request ready',
  ...Object.fromEntries(DEPARTMENTS.map((d) => [d.id, d.full])),
};

const CYCLE_MS = 3400;

type MorphFigureProps = {
  className?: string;
  /** caption links to the matching section on the page (#key) */
  linkCaption?: boolean;
  /** rises in with the page hero's supporting content */
  lead?: boolean;
} & (
  | { mode: 'cycle'; keys: string[]; activeKey?: never }
  | { mode: 'controlled'; activeKey: string; keys?: never }
);

/**
 * A framed particle cloud that flows between shapes.
 *   cycle      — walks through `keys` every few seconds; click for the next one
 *   controlled — follows `activeKey` (doctor filter, booking step)
 */
export function MorphFigure({ className, linkCaption = false, lead = false, ...props }: MorphFigureProps) {
  const figure = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const engine = useRef<MorphHandle | null>(null);
  const [index, setIndex] = useState(0);
  const [restart, setRestart] = useState(0);
  const cycle = props.mode === 'cycle';
  const keys = cycle ? props.keys : [props.activeKey];
  const key = cycle ? props.keys[index] : props.activeKey;
  const firstKey = useRef(key);
  useReveal(figure, lead ? 'lead' : false);

  // create the engine once; three.js is loaded on demand
  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    let disposed = false;
    import('@/lib/three/morph').then(({ createMorph }) => {
      if (disposed) return;
      const morph = createMorph(el, { initial: firstKey.current });
      morph.preload([...new Set([...keys, ...DEPT_IDS, 'cross', 'check'])]);
      engine.current = morph;
    });
    return () => {
      disposed = true;
      engine.current?.dispose();
      engine.current = null;
    };
    // the engine lives for the component's lifetime; shape changes go through morphTo below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    engine.current?.morphTo(key);
  }, [key]);

  // auto-advance (restarted after a click)
  useEffect(() => {
    if (!cycle || keys.length < 2 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % keys.length), CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [cycle, keys.length, restart]);

  const next = () => {
    if (!cycle) return;
    setIndex((i) => (i + 1) % keys.length);
    setRestart((r) => r + 1);
  };

  const caption = CAPTIONS[key] ?? key;
  const corner = 'absolute size-[22px] border-violet-ink';

  return (
    <figure
      ref={figure}
      data-morph-cycle={cycle || undefined}
      data-lead={lead || undefined}
      onClick={(e) => {
        if (!(e.target as Element).closest('a')) next();
      }}
      className={cn(
        'relative m-0 aspect-[4/3] w-full self-stretch overflow-hidden rounded-[32px] border border-line bg-morph md:aspect-square md:max-w-[560px] md:justify-self-end',
        'after:pointer-events-none after:absolute after:inset-x-0 after:-top-[20%] after:h-[20%] after:animate-sweep',
        'after:bg-[linear-gradient(180deg,transparent,rgba(143,126,243,.06)_80%,rgba(143,126,243,.3)_99%,transparent)]',
        cycle && 'cursor-pointer',
        className,
      )}
    >
      <canvas ref={canvas} aria-hidden="true" className="absolute inset-0 size-full" />
      <span aria-hidden="true">
        <i className={cn(corner, 'top-4 left-4 rounded-tl-lg border-t-[1.5px] border-l-[1.5px]')} />
        <i className={cn(corner, 'top-4 right-4 rounded-tr-lg border-t-[1.5px] border-r-[1.5px]')} />
        <i className={cn(corner, 'bottom-4 left-4 rounded-bl-lg border-b-[1.5px] border-l-[1.5px]')} />
        <i className={cn(corner, 'right-4 bottom-4 rounded-br-lg border-r-[1.5px] border-b-[1.5px]')} />
      </span>
      <span
        aria-hidden="true"
        className="absolute top-[22px] left-[50px] flex items-center gap-2 font-mono text-[10px] font-medium tracking-[.14em] text-muted uppercase before:size-1.5 before:rounded-full before:bg-ok before:shadow-[0_0_0_3px_rgba(23,166,115,.18)]"
      >
        Live particle model
      </span>
      <figcaption className="absolute inset-x-11 bottom-[22px] flex items-center justify-between gap-3">
        {linkCaption ? (
          <a
            href={`#${key}`}
            className="rounded-full border border-line bg-white/86 px-3.5 py-2 text-sm font-medium backdrop-blur-[8px] transition-colors duration-300 hover:border-violet hover:text-violet-ink"
          >
            <Scramble text={caption} trigger="immediate" duration={0.8} />
          </a>
        ) : (
          <span className="rounded-full border border-line bg-white/86 px-3.5 py-2 text-sm font-medium backdrop-blur-[8px]">
            <Scramble text={caption} trigger="immediate" duration={0.8} />
          </span>
        )}
        {cycle && (
          <span className="font-mono text-xs font-medium text-muted">
            {pad2(index + 1)} / {pad2(keys.length)}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
