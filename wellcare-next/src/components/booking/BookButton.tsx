'use client';

import { useRef, type ReactNode, type Ref } from 'react';
import { Icon } from '@/components/ui/Icon';
import { buttonIcon, buttonStyles, type ButtonSize, type ButtonVariant } from '@/components/ui/styles';
import { useMagnetic } from '@/hooks/useMagnetic';
import { cn } from '@/lib/cn';
import { useBooking } from '@/providers/UIProvider';
import type { BookingPreset } from '@/types';

interface BookButtonProps {
  preset?: BookingPreset;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  magnetic?: boolean;
  arrow?: boolean;
  /** plain look (slots, callouts…): pass your own classes instead of the button recipe */
  unstyled?: boolean;
  className?: string;
  ref?: Ref<HTMLButtonElement>;
  'aria-label'?: string;
  children: ReactNode;
}

/** Any "Book" call to action: opens the concierge, optionally preset to a department, doctor or slot */
export function BookButton({
  preset,
  variant = 'primary',
  size = 'md',
  block,
  magnetic = false,
  arrow = false,
  unstyled = false,
  className,
  ref,
  children,
  ...aria
}: BookButtonProps) {
  const { openBooking } = useBooking();
  const own = useRef<HTMLButtonElement>(null);
  useMagnetic(own, magnetic);
  const setRef = (node: HTMLButtonElement | null) => {
    own.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };
  return (
    <button
      ref={setRef}
      type="button"
      data-book
      className={unstyled ? className : buttonStyles({ variant, size, block, className })}
      onClick={() => openBooking(preset)}
      {...aria}
    >
      {children}
      {arrow && <Icon name="arrow" className={cn(!unstyled && buttonIcon)} />}
    </button>
  );
}
