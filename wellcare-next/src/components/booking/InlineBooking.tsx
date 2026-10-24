'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useSmoothScroll } from '@/providers/SmoothScrollProvider';
import { useBooking } from '@/providers/UIProvider';
import type { BookingPreset } from '@/types';
import { BookingConcierge } from './BookingConcierge';

interface Session {
  preset: BookingPreset;
  key: number;
  focus: boolean;
}

/**
 * The concierge embedded in the appointment page. Book buttons on this page preset it instead of opening the sheet,
 * and ?department= / ?doctor= / ?q= deep links start it part-way through.
 */
export function InlineBooking() {
  const params = useSearchParams();
  const { registerInline, reportStatus } = useBooking();
  const { scrollTo } = useSmoothScroll();
  const host = useRef<HTMLDivElement>(null);
  const [session, setSession] = useState<Session>(() => ({
    preset: {
      dept: params.get('department') ?? undefined,
      doctor: params.get('doctor') ?? undefined,
      query: params.get('q') ?? undefined,
    },
    key: 0,
    focus: false,
  }));

  useEffect(() => {
    registerInline((preset) => {
      setSession((s) => ({ preset, key: s.key + 1, focus: true }));
      if (host.current) scrollTo(host.current, { offset: -90 });
    });
    return () => {
      registerInline(null);
      reportStatus({ step: 1, dept: null });
    };
  }, [registerInline, reportStatus, scrollTo]);

  return (
    <div ref={host}>
      <BookingConcierge key={session.key} variant="inline" preset={session.preset} autoFocus={session.focus} onStatus={reportStatus} />
    </div>
  );
}
