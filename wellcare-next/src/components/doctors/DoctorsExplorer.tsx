'use client';

import { useEffect, useRef, useState } from 'react';
import { BookButton } from '@/components/booking/BookButton';
import { Fineprint } from '@/components/shared/Fineprint';
import { MoreCta } from '@/components/shared/MoreCta';
import { PageHero } from '@/components/shared/PageHero';
import { MorphFigure } from '@/components/three/MorphFigure';
import { chipStyles } from '@/components/ui/styles';
import { DEPARTMENTS, DOCTORS, doctorById } from '@/lib/data';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { useProfile } from '@/providers/UIProvider';
import { DoctorCard } from './DoctorCard';

type Filter = 'all' | (typeof DEPARTMENTS)[number]['id'];

/** Doctors page: the particle figure follows the department filter; #doctor-id deep links open a profile */
export function DoctorsExplorer() {
  const [filter, setFilter] = useState<Filter>('all');
  const grid = useRef<HTMLDivElement>(null);
  const { openProfile } = useProfile();

  // deep link: /doctors#dr-sameer-rahman opens that profile
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!doctorById(id)) return;
    const timer = window.setTimeout(() => openProfile(id), 400);
    return () => window.clearTimeout(timer);
  }, [openProfile]);

  // newly shown cards rise in after a filter change; anything measured further down needs refreshing
  const filtered = useRef(false);
  useEffect(() => {
    if (!filtered.current) {
      filtered.current = true;
      return;
    }
    const cards = grid.current?.querySelectorAll<HTMLElement>(':scope > div:not([hidden]) > article');
    if (cards?.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo(cards, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.04 });
    }
    ScrollTrigger.refresh();
  }, [filter]);

  return (
    <>
      <PageHero
        eyebrow={`Doctors · ${DOCTORS.length} profiles · ${DEPARTMENTS.length} departments`}
        lines={['The people', { text: 'behind your care.', grad: true }]}
        text="Each profile shows what the doctor focuses on, what a visit with them feels like and their next openings. Pick a department below and watch the model follow."
        figure={<MorphFigure mode="controlled" activeKey={filter === 'all' ? 'cross' : filter} lead />}
        ecg
      />

      <section aria-label="Doctor directory" className="px-(--pad) pt-[clamp(48px,6vw,80px)]">
        <div role="group" aria-label="Filter doctors by department" className="mb-7 flex flex-wrap gap-2">
          {(['all', ...DEPARTMENTS.map((d) => d.id)] as Filter[]).map((id) => (
            <button key={id} type="button" aria-pressed={filter === id} onClick={() => setFilter(id)} className={chipStyles}>
              {id === 'all' ? 'All' : DEPARTMENTS.find((d) => d.id === id)!.name}
            </button>
          ))}
        </div>
        <div ref={grid} className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-5">
          {DOCTORS.map((doc) => (
            <div key={doc.id} hidden={filter !== 'all' && doc.dept !== filter} className="grid">
              <DoctorCard doctor={doc} headingLevel="h2" showTags />
            </div>
          ))}
        </div>
        <Fineprint>
          Portraits are AI-generated placeholders, not photographs of the doctors named. Names follow the current Wellcare listing;
          qualifications, experience and schedules will be published once the hospital verifies them.
        </Fineprint>
      </section>

      <MoreCta
        id="unsure-title"
        eyebrow="Not sure who to see?"
        title="Describe it. We’ll match you."
        text="Type your symptoms into the concierge — it suggests the department and the earliest opening."
        action={<BookButton arrow>Open the concierge</BookButton>}
      />
    </>
  );
}
