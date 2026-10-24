'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { BookButton } from '@/components/booking/BookButton';
import { Avatar } from '@/components/ui/Avatar';
import { Hud } from '@/components/ui/Hud';
import { Icon } from '@/components/ui/Icon';
import { Tags } from '@/components/ui/Tags';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { usePresence } from '@/hooks/usePresence';
import { formatTime, relativeDay } from '@/lib/booking/format';
import { nextOpenings } from '@/lib/booking/schedule';
import { cn } from '@/lib/cn';
import { deptById, doctorById } from '@/lib/data';
import { useScrollLock } from '@/providers/SmoothScrollProvider';
import { useProfile } from '@/providers/UIProvider';

const sectionTitle = 'mt-[26px] mb-3 font-mono text-[11px] font-medium tracking-[.14em] text-muted uppercase';

/** Slide-in doctor profile: approach, focus areas, next openings and a book button */
export function DoctorDrawer() {
  const { doctorId, closeProfile } = useProfile();
  const open = Boolean(doctorId);
  const { mounted, shown } = usePresence(open, 600);
  // keep showing the last doctor while the drawer animates out
  const [shownId, setShownId] = useState(doctorId);
  if (doctorId && doctorId !== shownId) setShownId(doctorId);

  const panel = useRef<HTMLElement>(null);
  useScrollLock(open);
  useFocusTrap(panel, open, closeProfile);
  useEffect(() => {
    if (!open || !mounted || !panel.current) return;
    panel.current.scrollTop = 0;
    panel.current.focus({ preventScroll: true });
  }, [open, mounted, shownId]);

  const doc = doctorById(shownId);
  const openings = useMemo(() => (shownId ? nextOpenings(shownId) : []), [shownId]);
  if (!mounted || !doc) return null;
  const dept = deptById(doc.dept)!;

  return (
    <div className="fixed inset-0 z-90">
      <div
        onClick={closeProfile}
        className={cn('absolute inset-0 bg-[rgba(14,14,18,.45)] backdrop-blur-[4px] transition-opacity duration-500 ease-smooth', shown ? 'opacity-100' : 'opacity-0')}
      />
      <article
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        tabIndex={-1}
        data-lenis-prevent
        className={cn(
          'absolute inset-x-0 bottom-0 max-h-[92svh] overflow-y-auto rounded-t-[28px] bg-white outline-none transition-transform duration-700 ease-smooth',
          'md:inset-x-auto md:top-2.5 md:right-2.5 md:bottom-2.5 md:max-h-none md:w-[min(560px,calc(100%-20px))] md:rounded-[28px]',
          shown ? 'translate-x-0 translate-y-0' : 'translate-y-full md:translate-x-[calc(100%+20px)] md:translate-y-0',
        )}
      >
        <button
          type="button"
          aria-label="Close profile"
          onClick={closeProfile}
          className="absolute top-4 left-4 z-3 grid size-11 place-items-center rounded-full bg-white/88 backdrop-blur-[8px]"
        >
          <Icon name="close" />
        </button>
        <div className="relative aspect-[4/3.3] overflow-hidden bg-tint">
          <Avatar doctor={doc} sizes="(min-width: 901px) 560px, 100vw" className="object-[50%_25%]" />
        </div>
        <div className="px-[clamp(22px,4vw,36px)] pt-7 pb-9">
          <Hud>
            {dept.full} · <span className="text-ok">{doc.status}</span>
          </Hud>
          <h2 id="drawer-title" className="mt-3 mb-1.5 text-[clamp(36px,4vw,48px)]">
            {doc.name}
          </h2>
          <p className="text-muted">{doc.role}</p>
          <p className="mt-6 mb-2 border-l-2 border-violet pl-[18px] text-[19px] leading-[1.5] tracking-[-.01em] text-ink-2">{doc.approach}</p>

          <h3 className={sectionTitle}>Focus areas</h3>
          <Tags items={doc.focus} />

          <h3 className={sectionTitle}>Consultation</h3>
          <p className="flex flex-wrap items-center gap-2 text-[15px] text-ink-2">
            <Icon name="pin" /> In person, Thillai Nagar <span className="text-muted-2">·</span> <Icon name="video" /> Teleconsult on request
          </p>

          <h3 className={sectionTitle}>Next openings</h3>
          <div className="flex flex-wrap gap-2">
            {openings.map(({ day, time }) => (
              <BookButton
                key={`${day.iso}${time}`}
                unstyled
                preset={{ doctor: doc.id, date: day.iso, time }}
                className="grid gap-0.5 rounded-[14px] border border-line-2 bg-white px-4 py-2.5 text-left text-[15px] font-medium transition-colors duration-300 hover:border-violet hover:bg-tint"
              >
                <small className="text-xs font-normal text-muted">{relativeDay(day.date)}</small>
                {formatTime(time)}
              </BookButton>
            ))}
          </div>

          <dl className="mt-[26px] mb-5 grid gap-2 rounded-2xl bg-soft px-[18px] py-4">
            {['Qualifications', 'Experience'].map((term) => (
              <div key={term} className="flex justify-between gap-4 text-[13px]">
                <dt className="text-ink-2">{term}</dt>
                <dd className="text-right text-muted">Published after hospital verification</dd>
              </div>
            ))}
          </dl>
          <BookButton block arrow preset={{ doctor: doc.id }}>
            Book with {doc.name}
          </BookButton>
        </div>
      </article>
    </div>
  );
}
