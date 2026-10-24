import { BookButton } from '@/components/booking/BookButton';
import { Avatar } from '@/components/ui/Avatar';
import { Dot } from '@/components/ui/Dot';
import { Hud } from '@/components/ui/Hud';
import { Tags } from '@/components/ui/Tags';
import { linkStyles } from '@/components/ui/styles';
import { cn } from '@/lib/cn';
import { deptById, doctorHook } from '@/lib/data';
import type { Doctor } from '@/types';
import { ProfileButton } from './ProfileButton';

interface DoctorCardProps {
  doctor: Doctor;
  headingLevel?: 'h2' | 'h3';
  showTags?: boolean;
  /** shorter photo inside the pinned horizontal strip */
  compact?: boolean;
  className?: string;
}

/** Portrait card with the doctor's one-line approach, "View profile" and "Book" */
export function DoctorCard({ doctor, headingLevel: Heading = 'h3', showTags = false, compact = false, className }: DoctorCardProps) {
  const dept = deptById(doctor.dept)!;
  return (
    <article
      data-card-dept={doctor.dept}
      className={cn(
        'group flex flex-col overflow-hidden rounded-[26px] border border-line bg-soft transition-[box-shadow,transform] duration-500 ease-smooth hover:-translate-y-1 hover:shadow-glow',
        className,
      )}
    >
      <ProfileButton
        doctorId={doctor.id}
        aria-label={`View profile: ${doctor.name}`}
        className={cn(
          'relative block w-full cursor-pointer overflow-hidden border-0 bg-tint p-0',
          compact ? 'aspect-[4/3.6]' : 'aspect-[4/4.4]',
          'after:pointer-events-none after:absolute after:inset-x-0 after:-top-[30%] after:h-[30%] after:opacity-0 group-hover:after:animate-scan',
          'after:bg-[linear-gradient(180deg,transparent,rgba(143,126,243,.28)_70%,rgba(255,255,255,.7)_98%,transparent)]',
        )}
      >
        <Avatar
          doctor={doctor}
          sizes="(min-width: 901px) 360px, 80vw"
          className="transition-transform duration-[1100ms] ease-smooth group-hover:scale-105"
        />
        <span className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-2 rounded-full bg-white/86 px-3 py-1.5 font-mono text-[11px] font-medium tracking-[.06em] text-ink-2 uppercase backdrop-blur-[10px]">
          <Dot /> {doctor.status}
        </span>
      </ProfileButton>
      <div className="flex flex-1 flex-col gap-1.5 p-[22px]">
        <Hud>{dept.full}</Hud>
        <Heading className="mt-1 text-[26px] leading-[1.05] font-normal tracking-[-.035em]">{doctor.name}</Heading>
        <p className="text-sm text-muted">{doctor.role}</p>
        <p className="mt-1.5 text-[15px] text-ink-2">{doctorHook(doctor)}</p>
        {showTags && <Tags items={doctor.focus} className="mt-2.5" />}
        <div className="mt-auto flex items-center justify-between gap-3 pt-[18px]">
          <ProfileButton doctorId={doctor.id} className={linkStyles}>
            View profile
          </ProfileButton>
          <BookButton size="sm" preset={{ doctor: doctor.id }}>
            Book
          </BookButton>
        </div>
      </div>
    </article>
  );
}
