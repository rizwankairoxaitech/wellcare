import { BookButton } from '@/components/booking/BookButton';
import { ProfileButton } from '@/components/doctors/ProfileButton';
import { Avatar } from '@/components/ui/Avatar';
import { Hud } from '@/components/ui/Hud';
import { linkStyles } from '@/components/ui/styles';
import { doctorHook } from '@/lib/data';
import type { Doctor } from '@/types';

/** Compact doctor row inside a department section */
export function MiniDoctor({ doctor }: { doctor: Doctor }) {
  return (
    <article className="group grid grid-cols-[84px_1fr] items-center gap-[18px] rounded-[20px] border border-line bg-white p-3 sm:grid-cols-[104px_1fr]">
      <ProfileButton
        doctorId={doctor.id}
        aria-label={`View profile: ${doctor.name}`}
        className="relative h-[104px] w-[84px] overflow-hidden rounded-[14px] border-0 bg-tint p-0 sm:h-[124px] sm:w-[104px]"
      >
        <Avatar doctor={doctor} sizes="104px" className="transition-transform duration-800 ease-smooth group-hover:scale-[1.06]" monogramClassName="text-[46px]" />
      </ProfileButton>
      <div>
        <Hud>
          {doctor.role} · {doctor.status}
        </Hud>
        <h4 className="my-1 text-[22px] font-normal tracking-[-.03em]">{doctor.name}</h4>
        <p className="text-sm text-muted">{doctorHook(doctor)}</p>
        <div className="mt-2.5 flex items-center gap-4">
          <ProfileButton doctorId={doctor.id} className={linkStyles}>
            View profile
          </ProfileButton>
          <BookButton variant="ghost" size="sm" preset={{ doctor: doctor.id }}>
            Book
          </BookButton>
        </div>
      </div>
    </article>
  );
}
