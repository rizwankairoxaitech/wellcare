import type { ReactNode } from 'react';
import { Scramble } from '@/components/motion/Scramble';
import { SplitText } from '@/components/motion/SplitText';
import { Hud } from '@/components/ui/Hud';
import { cn } from '@/lib/cn';

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  id?: string;
  /** right-hand side: a button, links, a lead paragraph */
  aside?: ReactNode;
  className?: string;
  titleClassName?: string;
}

/** Eyebrow label + split-text heading, with an optional aside on the right */
export function SectionHead({ eyebrow, title, id, aside, className, titleClassName }: SectionHeadProps) {
  return (
    <div className={cn('mb-[clamp(36px,5vw,64px)] flex flex-col items-start justify-between gap-8 md:flex-row md:items-end', className)}>
      <div>
        <Hud>
          <Scramble text={eyebrow} />
        </Hud>
        <SplitText id={id} lines={[title]} className={cn('mt-[18px] text-[clamp(44px,6vw,96px)]', titleClassName)} />
      </div>
      {aside}
    </div>
  );
}
