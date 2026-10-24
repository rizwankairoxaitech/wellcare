import { cn } from '@/lib/cn';

/** Status dot with a soft ping ring — green for open/ok, red for emergency */
export function Dot({ tone = 'ok', className }: { tone?: 'ok' | 'alert'; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'relative inline-block size-2 flex-none rounded-full',
        'after:absolute after:-inset-1 after:animate-ping-dot after:rounded-full after:border after:border-current after:opacity-0',
        tone === 'ok' ? 'bg-ok text-ok' : 'bg-alert text-alert',
        className,
      )}
    />
  );
}
