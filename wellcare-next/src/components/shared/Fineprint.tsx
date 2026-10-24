import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Small disclaimer under a section */
export function Fineprint({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('max-w-[78ch] pt-[22px] text-[12.5px] leading-[1.6] text-muted', className)}>{children}</p>;
}
