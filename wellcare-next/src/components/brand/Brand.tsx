import { NavLink } from '@/components/layout/NavLink';
import { cn } from '@/lib/cn';
import { Logo, Wordmark } from './Logo';

/** Logo + two-line wordmark, linking home */
export function Brand({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <NavLink
      href="/"
      aria-label="Wellcare Hospital & Research Institute — home"
      className={cn('inline-flex items-center gap-2.5 justify-self-start sm:gap-3', className)}
    >
      <Logo light={light} className="h-[30px] w-[42px] flex-none sm:h-9 sm:w-[50px]" />
      <span className="grid leading-[1.05]">
        <Wordmark light={light} className="text-[19px] sm:text-[21px]" />
        <span
          className={cn(
            'mt-0.5 hidden font-mono text-[8.5px]/[1.3] font-medium tracking-[.1em] uppercase sm:block',
            light ? 'text-[#9a9aab]' : 'text-muted',
          )}
        >
          Hospital &amp; Research Institute
        </span>
      </span>
    </NavLink>
  );
}
