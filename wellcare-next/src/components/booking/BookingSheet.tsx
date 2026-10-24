'use client';

import { useRef } from 'react';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { usePresence } from '@/hooks/usePresence';
import { cn } from '@/lib/cn';
import { useScrollLock } from '@/providers/SmoothScrollProvider';
import { useBooking, useBookingSheet } from '@/providers/UIProvider';
import { BookingConcierge } from './BookingConcierge';

/** The concierge in a slide-in sheet, opened by any Book button outside the appointment page */
export function BookingSheet() {
  const { open, preset, nonce } = useBookingSheet();
  const { closeBooking } = useBooking();
  const { mounted, shown } = usePresence(open, 650);
  const panel = useRef<HTMLDivElement>(null);
  useScrollLock(open);
  useFocusTrap(panel, open, closeBooking);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-95">
      <div
        onClick={closeBooking}
        className={cn('absolute inset-0 bg-[rgba(14,14,18,.5)] backdrop-blur-[6px] transition-opacity duration-500 ease-smooth', shown ? 'opacity-100' : 'opacity-0')}
      />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Book a visit"
        data-lenis-prevent
        className={cn(
          'absolute inset-0 overflow-y-auto bg-white shadow-[0_40px_120px_-40px_rgba(14,14,18,.6)] transition-transform duration-750 ease-smooth',
          'md:inset-auto md:top-2.5 md:right-2.5 md:bottom-2.5 md:w-[min(1000px,calc(100%-20px))] md:rounded-[28px]',
          shown ? 'translate-x-0 translate-y-0' : 'translate-y-full md:translate-x-[calc(100%+24px)] md:translate-y-0',
        )}
      >
        <BookingConcierge key={nonce} variant="sheet" preset={preset} autoFocus onClose={closeBooking} />
      </div>
    </div>
  );
}
