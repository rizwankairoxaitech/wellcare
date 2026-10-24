import type { Metadata } from 'next';
import { BookButton } from '@/components/booking/BookButton';
import { ContactSection } from '@/components/hospital/ContactSection';
import { Facts } from '@/components/hospital/Facts';
import { VisitSteps } from '@/components/hospital/VisitSteps';
import { PageHero } from '@/components/shared/PageHero';
import { MorphFigure } from '@/components/three/MorphFigure';

export const metadata: Metadata = {
  title: 'The Hospital',
  description:
    'Wellcare Hospital & Research Institute, Thillai Nagar, Trichy: 24/7 emergency and ambulance, teleconsultation, insurance accepted, and everything you need for your visit.',
};

export default function HospitalPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Wellcare Hospital & Research Institute"
        lines={['Compassionate.', 'Comprehensive.', { text: 'Caring.', grad: true }]}
        text="A multispecialty hospital in the heart of Thillai Nagar, Trichy — built around one idea: every patient should know exactly what happens next."
        action={
          <BookButton magnetic arrow>
            Book a visit
          </BookButton>
        }
        figure={<MorphFigure mode="cycle" keys={['hospital', 'ambulance', 'cardio', 'cross']} lead />}
        image={{ src: '/images/hospital-hero.webp', alt: 'A Wellcare doctor in conversation with an older patient and his daughter' }}
      />
      <Facts />
      <VisitSteps />
      <ContactSection />
    </main>
  );
}
