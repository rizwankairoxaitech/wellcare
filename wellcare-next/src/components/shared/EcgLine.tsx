import { cn } from '@/lib/cn';

const PULSE = 'M0 60 H170 l14 -30 l16 64 l14 -78 l14 58 l10 -14 H330 C380 60 400 18 450 18 S520 102 570 102 S640 18 690 18 S760 102 810 102 S880 18 930 18 S1000 102 1050 102 S1150 60 1200 60';
const ECHO = 'M330 60 C380 60 400 102 450 102 S520 18 570 18 S640 102 690 102 S760 18 810 18 S880 102 930 102 S1000 18 1050 18 S1150 60 1200 60';

/** A heartbeat that turns into a double helix, drawn in once, with a dot travelling along it */
export function EcgLine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true" className={cn('block h-[clamp(64px,8vw,110px)] w-full overflow-visible', className)}>
      <path d={ECHO} className="fill-none stroke-line-2 stroke-[1.5] [vector-effect:non-scaling-stroke]" />
      <path
        d={PULSE}
        pathLength={1}
        className="animate-draw fill-none stroke-[url(#g-dna)] stroke-[2.5] [stroke-dasharray:1] [stroke-dashoffset:1] [vector-effect:non-scaling-stroke]"
      />
      <circle r="5" className="fill-violet-ink drop-shadow-[0_0_6px_rgba(143,126,243,.9)] motion-reduce:hidden">
        <animateMotion dur="6s" repeatCount="indefinite" path={PULSE} />
      </circle>
    </svg>
  );
}
