import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { hudStyles } from './styles';

interface HudProps {
  as?: ElementType;
  tone?: 'muted' | 'light' | 'alert';
  className?: string;
  children: ReactNode;
}

/** Mono, uppercase "heads-up" label used above headings and on cards */
export function Hud({ as: Tag = 'p', tone = 'muted', className, children }: HudProps) {
  return (
    <Tag
      className={cn(
        hudStyles,
        tone === 'muted' && 'text-muted',
        tone === 'light' && 'text-white/72',
        tone === 'alert' && 'text-alert-ink',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
