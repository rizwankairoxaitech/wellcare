import type { Ref } from 'react';
import { cn } from '@/lib/cn';

interface LogoProps {
  className?: string;
  /** lighter first figure + swoosh for dark backgrounds */
  light?: boolean;
  ref?: Ref<SVGSVGElement>;
}

/**
 * Official Wellcare mark — three figures with raised arms over a swoosh — redrawn as line art in the DNA palette.
 * Paths are marked `data-stroke` so the intro can draw them in.
 */
export function Logo({ className, light = false, ref }: LogoProps) {
  const f1 = light ? '#a193f7' : '#5a45d6';
  const f2 = '#d46fd0';
  const f3 = '#5b9dff';
  const body = { fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2.1 } as const;
  const leg = { ...body, strokeWidth: 1.7 };
  return (
    <svg ref={ref} viewBox="0 0 64 46" aria-hidden="true" className={cn('overflow-visible', className)}>
      <g>
        <circle data-dot cx="11.5" cy="6.5" r="2.7" fill={f1} />
        <path data-stroke {...body} stroke={f1} d="M2.5 9.5Q9 19.5 20.5 6.5" />
        <path data-stroke {...leg} stroke={f1} d="M13.2 15.2Q16.4 21.5 17.6 28.5" />
      </g>
      <path data-stroke {...body} strokeWidth={2.3} stroke={light ? 'url(#g-swoosh-light)' : 'url(#g-swoosh)'} d="M10.6 15.4Q6.2 25 9.6 34.5Q15.5 44.5 32 41Q47 37.5 62 27" />
      <g>
        <circle data-dot cx="25" cy="11" r="2.2" fill={f2} />
        <path data-stroke {...body} stroke={f2} d="M18.8 14Q24.6 21.5 31.6 12.6" />
        <path data-stroke {...leg} stroke={f2} d="M24.2 18.6Q22.2 24 21.6 29.5M26.4 18.6Q28.6 23.6 29.2 29" />
      </g>
      <g>
        <circle data-dot cx="38" cy="7" r="2.5" fill={f3} />
        <path data-stroke {...body} stroke={f3} d="M30.5 10.6Q37 19.5 46.5 6.5" />
        <path data-stroke {...leg} stroke={f3} d="M37 16.6Q35 23 34.2 30M39.4 16.6Q42.2 22.8 43.2 30" />
      </g>
    </svg>
  );
}

/** "Well" + gradient "care" */
export function Wordmark({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn('font-semibold tracking-[-.04em]', light ? 'text-white' : 'text-ink', className)}>
      Well<b className="font-semibold bg-dna bg-clip-text pr-[.12em] -mr-[.12em] text-transparent">care</b>
    </span>
  );
}
