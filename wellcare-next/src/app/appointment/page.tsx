import type { Metadata } from 'next';
import { Suspense } from 'react';
import { BookingConcierge } from '@/components/booking/BookingConcierge';
import { BookingMorph } from '@/components/booking/BookingMorph';
import { InlineBooking } from '@/components/booking/InlineBooking';
import { Reveal } from '@/components/motion/Reveal';
import { Scramble } from '@/components/motion/Scramble';
import { SplitText } from '@/components/motion/SplitText';
import { ContactCard } from '@/components/shared/ContactCard';
import { Dot } from '@/components/ui/Dot';
import { Hud } from '@/components/ui/Hud';
import { CONTACT } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description:
    'Book a Wellcare Hospital appointment in under a minute: describe your concern, pick a doctor and time, and get your appointment pass.',
};

export default function AppointmentPage() {
  return (
    <main id="main" className="bg-appointment px-(--pad) pt-[calc(var(--hdr)+clamp(48px,7vw,96px))]">
      <header className="mb-[clamp(32px,4vw,56px)] grid grid-cols-1 items-center gap-x-12 gap-y-7 md:grid-cols-[minmax(0,1.35fr)_minmax(0,.65fr)]">
        <div>
          <Hud>
            <Dot /> <Scramble trigger="hero" text="Appointment concierge" />
          </Hud>
          <SplitText
            as="h1"
            hero
            lines={['Book a visit in', { text: 'under a minute.', grad: true }]}
            className="mt-5 text-[clamp(46px,6.6vw,108px)] leading-[.9] tracking-[-.058em]"
          />
          <Reveal as="p" mode="lead" className="mt-6 max-w-[46ch] text-[17.5px] text-ink-2">
            Three quick steps — no long forms. Choose a department and the model takes its shape. For emergencies don’t book: call{' '}
            <a href={CONTACT.emergency.href} className="font-medium text-alert-ink">
              {CONTACT.emergency.short}
            </a>
            .
          </Reveal>
        </div>
        <BookingMorph className="aspect-[16/10] md:aspect-square md:max-w-[400px]" />
      </header>

      {/* the search params (?department=, ?doctor=, ?q=) are only known in the browser */}
      <Suspense fallback={<BookingConcierge variant="inline" />}>
        <InlineBooking />
      </Suspense>

      <section aria-label="Other ways to book" className="mt-5 grid grid-cols-1 gap-3.5 md:grid-cols-3">
        <ContactCard external href={CONTACT.whatsapp.href} label="Prefer chat?" value={`WhatsApp ${CONTACT.whatsapp.label}`} action="Open WhatsApp" />
        <ContactCard href={CONTACT.alternate.href} label="Prefer to talk?" value={`Desk ${CONTACT.alternate.label}`} action="Call the desk" />
        <ContactCard emergency href={CONTACT.emergency.href} label="Emergency" value={CONTACT.emergency.label} action="Call now" />
      </section>
    </main>
  );
}
