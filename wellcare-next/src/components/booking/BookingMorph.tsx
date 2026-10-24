'use client';

import { MorphFigure } from '@/components/three/MorphFigure';
import { useBookingStatus } from '@/providers/UIProvider';

/** The appointment page's particle figure: the chosen department's shape, then a check mark on the pass */
export function BookingMorph({ className }: { className?: string }) {
  const { step, dept } = useBookingStatus();
  return <MorphFigure mode="controlled" activeKey={step === 4 ? 'check' : (dept ?? 'cross')} lead className={className} />;
}
