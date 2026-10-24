'use client';

import { Avatar } from '@/components/ui/Avatar';
import { Dot } from '@/components/ui/Dot';
import { Hud } from '@/components/ui/Hud';
import { Icon } from '@/components/ui/Icon';
import { buttonStyles, linkStyles } from '@/components/ui/styles';
import { formatDay, formatTime, whenLabel } from '@/lib/booking/format';
import { barcode, downloadIcs, maskPhone, whatsappLink } from '@/lib/booking/pass';
import { fromISO } from '@/lib/booking/schedule';
import { cn } from '@/lib/cn';
import { CONTACT, deptById, doctorById } from '@/lib/data';
import type { BookingState, Pass } from '../bookingState';
import { question, subline } from '../styles';

interface PassStepProps {
  state: BookingState;
  pass: Pass;
  doctorLabel: string;
  onAgain: () => void;
}

/** Step 4 — the appointment pass, with WhatsApp hand-off and a calendar file */
export function PassStep({ state, pass, doctorLabel, onAgain }: PassStepProps) {
  const dept = deptById(state.dept)!;
  const doc = state.doctor && state.doctor !== 'any' ? doctorById(state.doctor) : undefined;
  const mode = state.mode === 'tele' ? 'Teleconsult' : 'In person';
  const when = whenLabel(state.date, state.time);
  const first = pass.name.split(/\s+/)[0];
  const code = barcode(pass.ref);
  const message = whatsappLink([
    'Hello Wellcare, I would like to confirm an appointment request.',
    `Ref: ${pass.ref}`,
    `Patient: ${pass.name}${pass.age ? ` (${pass.age})` : ''}`,
    `Department: ${dept.full}`,
    `Doctor: ${doctorLabel}`,
    `Preferred: ${when} (${mode})`,
    pass.note && `Note: ${pass.note}`,
  ]);

  return (
    <section className="animate-rise">
      <div className="mb-[18px] flex flex-wrap items-center justify-between gap-2.5">
        <Hud>
          <Dot /> Request ready · pending confirmation
        </Hud>
        <span className="rounded-full bg-tint px-3 py-1.5 font-mono text-[13px] font-medium text-violet-ink">{pass.ref}</span>
      </div>
      <h3 data-step-heading tabIndex={-1} className={question}>
        You’re almost in, {first}.
      </h3>
      <p className={subline}>
        Send the request on WhatsApp or call the desk — the team will confirm the exact time on {maskPhone(pass.phone)}.
      </p>

      <div className="relative my-[22px] overflow-hidden rounded-3xl border border-line bg-white shadow-glow before:block before:h-1.5 before:bg-dna">
        <div className="flex items-center gap-4 border-b border-dashed border-line-2 px-[22px] py-5">
          <span className="relative size-[68px] flex-none overflow-hidden rounded-[18px]">
            {doc ? (
              <Avatar doctor={doc} sizes="68px" monogramClassName="text-[22px]" />
            ) : (
              <span className="grid size-full place-items-center bg-dna text-[22px] font-light text-white">{dept.code}</span>
            )}
          </span>
          <div>
            <small className="block font-mono text-[10.5px] font-medium tracking-[.12em] text-muted uppercase">{dept.full}</small>
            <strong className="text-[21px] font-medium tracking-[-.02em]">{doc ? doc.name : 'First available doctor'}</strong>
          </div>
        </div>
        <dl className="m-0 grid grid-cols-2 sm:grid-cols-4">
          {[
            ['Date', state.date ? formatDay(fromISO(state.date)) : ''],
            ['Time', state.time ? formatTime(state.time) : ''],
            ['Visit', mode],
            ['Patient', pass.name],
          ].map(([term, value], i) => (
            <div
              key={term}
              className={cn(
                'border-line px-[22px] py-4',
                i % 2 === 0 && 'border-r',
                i < 2 && 'border-b sm:border-b-0',
                i === 1 && 'sm:border-r',
              )}
            >
              <dt className="font-mono text-[10px] font-medium tracking-[.12em] text-muted uppercase">{term}</dt>
              <dd className="mt-1 text-[17px] font-medium tracking-[-.01em]">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center gap-4 bg-soft px-[22px] py-3.5">
          <svg viewBox={`0 0 ${code.width} 40`} preserveAspectRatio="none" aria-hidden="true" className="h-[34px] w-[min(260px,60%)] fill-ink">
            {code.bars.map((b) => (
              <rect key={b.x} x={b.x} y="0" width={b.w} height="40" />
            ))}
          </svg>
          <span className="font-mono text-xs font-medium tracking-[.2em] text-ink-2">{pass.ref}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        <a href={message} target="_blank" rel="noopener" className={buttonStyles({ className: 'w-full sm:w-auto' })}>
          <Icon name="whatsapp" /> Send on WhatsApp
        </a>
        <button
          type="button"
          onClick={() =>
            state.date &&
            state.time &&
            downloadIcs({ ref: pass.ref, date: state.date, time: state.time, title: `Wellcare – ${dept.full} (${doctorLabel})` })
          }
          className={buttonStyles({ variant: 'ghost', className: 'w-full sm:w-auto' })}
        >
          <Icon name="calendar" /> Add to calendar
        </button>
        <a href={CONTACT.alternate.href} className={buttonStyles({ variant: 'ghost', className: 'w-full sm:w-auto' })}>
          <Icon name="phone" /> Call the desk
        </a>
      </div>
      <p className="mt-[18px] mb-3.5 rounded-xl bg-soft px-3.5 py-3 text-[12.5px] text-muted">
        Prototype: this page has not sent anything to the hospital. The live version will submit straight to the Wellcare booking system.
      </p>
      <button type="button" onClick={onAgain} className={linkStyles}>
        Book another appointment
      </button>
    </section>
  );
}
