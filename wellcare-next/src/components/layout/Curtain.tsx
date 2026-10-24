import { cn } from '@/lib/cn';
import { Logo, Wordmark } from '@/components/brand/Logo';

export type CurtainPhase = 'idle' | 'entering' | 'leaving';

/** Dark panel that sweeps up over the page between routes, with the logo in the middle */
export function Curtain({ phase }: { phase: CurtainPhase }) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[250]">
      <div
        className={cn(
          'absolute inset-0 bg-ink after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-dna',
          phase === 'idle' && 'origin-bottom scale-y-0',
          phase === 'entering' && 'origin-bottom scale-y-100 transition-transform duration-500 ease-curtain',
          phase === 'leaving' && 'origin-top scale-y-0 transition-transform delay-50 duration-750 ease-curtain',
        )}
      />
      <div
        className={cn(
          'absolute inset-0 grid place-content-center justify-items-center gap-3.5 text-white transition-opacity duration-300',
          phase === 'entering' ? 'opacity-100 delay-250' : 'opacity-0',
        )}
      >
        <Logo light className="h-[60px] w-[84px]" />
        <Wordmark light className="text-[30px]" />
      </div>
    </div>
  );
}
