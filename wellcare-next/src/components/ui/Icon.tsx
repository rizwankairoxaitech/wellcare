import type { SVGProps } from 'react';
import { cn } from '@/lib/cn';

const PATHS = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-ur': <path d="M7 17 17 7M8 7h9v9" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  phone: <path d="M6.5 3.5h3l1.6 4.4-2 1.3a11 11 0 0 0 5.7 5.7l1.3-2 4.4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z" />,
  whatsapp: (
    <>
      <path d="M20 11.6a8.2 8.2 0 0 1-12.1 7.2L3.5 20l1.2-4.2A8.2 8.2 0 1 1 20 11.6z" />
      <path d="M9 8.3c.2 3 3.4 6.3 6.6 6.6l1-1.4-1.9-1-.9.7a5 5 0 0 1-2.9-2.9l.7-.9-1-1.9z" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6.5" width="12.5" height="11" rx="2.5" />
      <path d="m15.5 10.5 5.5-3v9l-5.5-3" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  bolt: <path d="M13 3 5 13.5h6L10.5 21 19 10h-6z" />,
  plus: <path d="M12 5v14M5 12h14" />,
} as const;

export type IconName = keyof typeof PATHS;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

/** Line icon that inherits the text colour and scales with the font size */
export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('size-[1.15em] flex-none fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]', className)}
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}

/** Gradients referenced by url(#…) from SVG strokes across the site (logo swoosh, care path, ECG line) */
export function SvgDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="g-swoosh" gradientUnits="userSpaceOnUse" x1="6" y1="0" x2="62" y2="0">
          <stop offset="0" stopColor="#5a45d6" />
          <stop offset=".55" stopColor="#d46fd0" />
          <stop offset="1" stopColor="#5b9dff" />
        </linearGradient>
        <linearGradient id="g-swoosh-light" gradientUnits="userSpaceOnUse" x1="6" y1="0" x2="62" y2="0">
          <stop offset="0" stopColor="#a193f7" />
          <stop offset=".55" stopColor="#e58ee0" />
          <stop offset="1" stopColor="#7fb6ff" />
        </linearGradient>
        <linearGradient id="g-dna" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8f7ef3" />
          <stop offset=".55" stopColor="#e27ad8" />
          <stop offset="1" stopColor="#6aa6ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}
