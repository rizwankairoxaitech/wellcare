import type { Metadata } from 'next';
import { DoctorsExplorer } from '@/components/doctors/DoctorsExplorer';

export const metadata: Metadata = {
  title: 'Doctors',
  description:
    'Meet the Wellcare Hospital specialists in cardiology, orthopaedics, neurology, gynecology, pediatrics and general medicine — their focus, approach and next openings.',
};

export default function DoctorsPage() {
  return (
    <main id="main">
      <DoctorsExplorer />
    </main>
  );
}
