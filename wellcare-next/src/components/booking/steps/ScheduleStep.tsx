'use client';

import { useMemo, type Dispatch } from 'react';
import { Avatar } from '@/components/ui/Avatar';
import { Dot } from '@/components/ui/Dot';
import { Icon } from '@/components/ui/Icon';
import { linkStyles } from '@/components/ui/styles';
import { formatDay, formatTime, relativeDay } from '@/lib/booking/format';
import { firstFree, nextDays, slotsFor } from '@/lib/booking/schedule';
import { cn } from '@/lib/cn';
import { deptById, doctorsIn } from '@/lib/data';
import type { BookingAction, BookingState } from '../bookingState';
import { errorText, label, question, segButton, segGroup, selectCard } from '../styles';

interface ScheduleStepProps {
  state: BookingState;
  dispatch: Dispatch<BookingAction>;
  headingId: string;
  /** after "Take it", focus moves to the Continue button */
  onTookEarliest: () => void;
}

const tick = 'grid size-6 place-items-center rounded-full border border-line-2 text-transparent transition-colors duration-300 group-aria-pressed:border-violet-ink group-aria-pressed:bg-violet-ink group-aria-pressed:text-white';

/** Step 2 — doctor, visit type, date and time */
export function ScheduleStep({ state, dispatch, headingId, onTookEarliest }: ScheduleStepProps) {
  const dept = deptById(state.dept)!;
  const docs = doctorsIn(dept.id);
  const days = useMemo(() => nextDays(12), []);
  const fastest = useMemo(() => firstFree(state.doctor ?? 'any'), [state.doctor]);
  const groups = useMemo(() => (state.date ? slotsFor(state.date, state.doctor ?? 'any') : []), [state.date, state.doctor]);

  return (
    <section aria-labelledby={headingId} className="animate-rise">
      <h3 data-step-heading id={headingId} tabIndex={-1} className={question}>
        {dept.full}
        <br />
        <span className="text-[.58em] tracking-[-.02em] text-muted">Choose a doctor and a time</span>
      </h3>

      <div className="mt-[18px] grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-2.5">
        {docs.length > 1 && (
          <button
            type="button"
            aria-pressed={state.doctor === 'any'}
            onClick={() => dispatch({ type: 'chooseDoctor', doctor: 'any' })}
            className={cn(selectCard, 'grid grid-cols-[54px_1fr_24px] items-center gap-3 py-2.5 pr-3 pl-2.5')}
          >
            <span className="grid size-[54px] place-items-center rounded-[14px] bg-tint text-violet-ink">
              <Icon name="bolt" className="size-[22px]" />
            </span>
            <span>
              <strong className="block text-[15px] font-medium">First available</strong>
              <small className="block text-[12.5px] text-muted">Any {dept.name} doctor</small>
            </span>
            <span className={tick}>
              <Icon name="check" className="size-3.5 stroke-[2.4]" />
            </span>
          </button>
        )}
        {docs.map((doc) => (
          <button
            key={doc.id}
            type="button"
            aria-pressed={state.doctor === doc.id}
            onClick={() => dispatch({ type: 'chooseDoctor', doctor: doc.id })}
            className={cn(selectCard, 'grid grid-cols-[54px_1fr_24px] items-center gap-3 py-2.5 pr-3 pl-2.5')}
          >
            <span className="relative size-[54px] overflow-hidden rounded-[14px]">
              <Avatar doctor={doc} sizes="54px" monogramClassName="text-2xl" />
            </span>
            <span>
              <strong className="block text-[15px] font-medium">{doc.name}</strong>
              <small className="block text-[12.5px] text-muted">
                {doc.role} · {doc.status}
              </small>
            </span>
            <span className={tick}>
              <Icon name="check" className="size-3.5 stroke-[2.4]" />
            </span>
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-sm text-ink-2">
          {fastest && (
            <>
              <Dot />
              <span>
                Earliest opening{' '}
                <strong className="font-medium text-ink">
                  {relativeDay(fastest.date)}, {formatTime(fastest.time)}
                </strong>
              </span>
              <button
                type="button"
                className={linkStyles}
                onClick={() => {
                  dispatch({ type: 'takeEarliest', date: fastest.iso, time: fastest.time });
                  onTookEarliest();
                }}
              >
                Take it
              </button>
            </>
          )}
        </div>
        <div role="group" aria-label="Visit type" className={segGroup}>
          <button type="button" aria-pressed={state.mode === 'in-person'} onClick={() => dispatch({ type: 'mode', mode: 'in-person' })} className={segButton}>
            <Icon name="pin" /> In person
          </button>
          <button type="button" aria-pressed={state.mode === 'tele'} onClick={() => dispatch({ type: 'mode', mode: 'tele' })} className={segButton}>
            <Icon name="video" /> Teleconsult
          </button>
        </div>
      </div>

      <p className={label}>Date</p>
      <div className="flex gap-2 overflow-x-auto pb-1.5 [scrollbar-width:thin]">
        {days.map((day) => (
          <button
            key={day.iso}
            type="button"
            data-date={day.iso}
            disabled={day.closed}
            title={day.closed ? 'Sunday — emergency only' : undefined}
            aria-pressed={day.iso === state.date}
            onClick={() => dispatch({ type: 'chooseDate', date: day.iso })}
            className={cn(
              'group flex h-[84px] flex-[0_0_70px] flex-col items-center justify-center gap-0.5 rounded-2xl border border-line bg-white transition-colors duration-300',
              'enabled:hover:border-violet aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white',
              'disabled:cursor-not-allowed disabled:bg-soft disabled:opacity-55',
            )}
          >
            <small className="font-mono text-[10.5px] font-medium tracking-[.08em] text-muted uppercase group-aria-pressed:text-[#bdbdca]">
              {formatDay(day.date, { weekday: 'short' })}
            </small>
            <strong className="text-2xl leading-[1.1] font-normal tracking-[-.03em]">{day.date.getDate()}</strong>
            <em className="text-[11.5px] text-muted not-italic group-aria-pressed:text-[#bdbdca]">
              {day.closed ? 'ER only' : formatDay(day.date, { month: 'short' })}
            </em>
          </button>
        ))}
      </div>

      {groups.map((group) => (
        <div key={group.part}>
          <p className={cn(label, 'mt-5')}>{group.part}</p>
          <div className="flex flex-wrap gap-2">
            {group.times.map((slot) => (
              <button
                key={slot.t}
                type="button"
                data-time={slot.t}
                disabled={slot.taken}
                aria-label={slot.taken ? `${formatTime(slot.t)} — booked` : undefined}
                aria-pressed={slot.t === state.time}
                onClick={() => dispatch({ type: 'chooseTime', time: slot.t })}
                className={cn(
                  'h-[42px] rounded-xl border border-line bg-white px-4 text-sm font-medium tabular-nums transition-colors duration-300',
                  'enabled:hover:border-violet aria-pressed:border-violet-ink aria-pressed:bg-violet-ink aria-pressed:text-white',
                  'disabled:cursor-not-allowed disabled:bg-soft disabled:text-muted-2 disabled:line-through',
                )}
              >
                {formatTime(slot.t)}
              </button>
            ))}
          </div>
        </div>
      ))}
      <p role="alert" className={errorText}>
        {state.error}
      </p>
    </section>
  );
}
