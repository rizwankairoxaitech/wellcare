import type { Metadata } from 'next';
import { BookButton } from '@/components/booking/BookButton';
import { DepartmentRail } from '@/components/departments/DepartmentRail';
import { DepartmentSection } from '@/components/departments/DepartmentSection';
import { Fineprint } from '@/components/shared/Fineprint';
import { MoreCta } from '@/components/shared/MoreCta';
import { PageHero } from '@/components/shared/PageHero';
import { MorphFigure } from '@/components/three/MorphFigure';
import { DEPARTMENTS, DEPT_IDS, MORE_SPECIALTIES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Departments',
  description:
    'General medicine, orthopaedics, cardiology, gynecology, neurology and pediatrics at Wellcare Hospital, Thillai Nagar, Trichy — what each department treats, when to call emergency, and who you will see.',
};

export default function DepartmentsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Departments · 06 specialties + 03"
        lines={['Six specialties.', { text: 'One connected team.', grad: true }]}
        text="Pick the area closest to your concern. Not sure? General Medicine is always the right first door — the duty physician routes you onward."
        action={
          <BookButton magnetic arrow>
            Help me choose
          </BookButton>
        }
        figure={<MorphFigure mode="cycle" keys={DEPT_IDS} linkCaption lead />}
        ecg
      />
      <DepartmentRail />
      <div>
        {DEPARTMENTS.map((dept, i) => (
          <DepartmentSection key={dept.id} dept={dept} index={i} />
        ))}
      </div>
      <MoreCta
        id="more-title"
        eyebrow="Also at Wellcare"
        title={MORE_SPECIALTIES.join(' · ')}
        text="Book through General Medicine and the desk will route you to the right consultant."
        action={
          <BookButton arrow preset={{ dept: 'op' }}>
            Book via General Medicine
          </BookButton>
        }
      />
      <Fineprint className="px-(--pad)">
        Doctor portraits are AI-generated placeholders, not photographs of the doctors named. Service lists and profiles are draft copy pending
        hospital approval. Emergency signs are general guidance, not medical advice.
      </Fineprint>
    </main>
  );
}
