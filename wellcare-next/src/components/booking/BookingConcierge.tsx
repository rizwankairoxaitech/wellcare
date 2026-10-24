'use client';

import { useDeferredValue, useEffect, useId, useMemo, useReducer, useRef } from 'react';
import { Hud } from '@/components/ui/Hud';
import { Dot } from '@/components/ui/Dot';
import { Icon } from '@/components/ui/Icon';
import { buttonIcon, buttonStyles } from '@/components/ui/styles';
import { whenLabel } from '@/lib/booking/format';
import { isUrgent, matchCare } from '@/lib/booking/match';
import { isValidMobile, makeRef, normalisePhone } from '@/lib/booking/pass';
import { cn } from '@/lib/cn';
import { deptById, doctorById } from '@/lib/data';
import type { BookingStatus } from '@/providers/UIProvider';
import type { BookingPreset } from '@/types';
import { BookingSummary } from './BookingSummary';
import { bookingReducer, initFromPreset, type Details, type Step } from './bookingState';
import { ConcernStep, type Suggestion } from './steps/ConcernStep';
import { DetailsStep } from './steps/DetailsStep';
import { PassStep } from './steps/PassStep';
import { ScheduleStep } from './steps/ScheduleStep';

const STEPS = ['Concern', 'Doctor & time', 'Details'];

interface BookingConciergeProps {
  variant: 'inline' | 'sheet';
  preset?: BookingPreset;
  /** move focus into the concierge on mount (sheet, or inline after a trigger) */
  autoFocus?: boolean;
  onClose?: () => void;
  onStatus?: (status: BookingStatus) => void;
}

/**
 * Appointment concierge: describe the concern → doctor & time → two details → appointment pass.
 * Nothing is sent anywhere yet — the last step is where the hospital booking API will be called.
 */
export function BookingConcierge({ variant, preset, autoFocus = false, onClose, onStatus }: BookingConciergeProps) {
  const [state, dispatch] = useReducer(bookingReducer, preset, initFromPreset);
  const uid = useId();
  const root = useRef<HTMLDivElement>(null);
  const queryInput = useRef<HTMLInputElement>(null);
  const nextButton = useRef<HTMLButtonElement>(null);
  const mounted = useRef(false);

  const deferredQuery = useDeferredValue(state.query);
  const suggestion = useMemo<Suggestion | null>(() => {
    const text = deferredQuery.trim();
    if (text.length < 3) return null;
    const match = matchCare(text);
    return { dept: match ? match.dept : deptById('op')!, matched: Boolean(match) };
  }, [deferredQuery]);
  const urgent = isUrgent(state.query);

  const dept = deptById(state.dept);
  const doctor = state.doctor && state.doctor !== 'any' ? doctorById(state.doctor) : undefined;
  const doctorLabel = state.doctor === 'any' ? 'First available' : (doctor?.name ?? '');
  const when = whenLabel(state.date, state.time);
  const mode = state.mode === 'tele' ? 'Teleconsult' : 'In person';
  const inline = variant === 'inline';

  // report progress (the appointment page's particle figure follows it)
  useEffect(() => {
    onStatus?.({ step: state.step, dept: state.dept });
  }, [state.step, state.dept, onStatus]);

  // every step change: back to the top of the panel, focus the new question
  useEffect(() => {
    const first = !mounted.current;
    mounted.current = true;
    const el = root.current;
    if ((first && !autoFocus) || !el) return;
    // the sheet scrolls inside its dialog; inline, the page scrolls
    const scroller = inline ? null : el.closest<HTMLElement>('[role="dialog"]');
    if (scroller) scroller.scrollTop = 0;
    else if (el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: 'start' });
    if (first && state.step === 1) queryInput.current?.focus({ preventScroll: true });
    else el.querySelector<HTMLElement>('[data-step-heading]')?.focus({ preventScroll: true });
    // focus follows the step only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.step]);

  function validateDetails() {
    const d = state.details;
    const name = d.name.trim();
    const phone = normalisePhone(d.phone);
    const problem: [keyof Details, string] | null =
      name.length < 2 ? ['name', 'Please enter the patient’s name.']
      : !isValidMobile(phone) ? ['phone', 'Please enter a 10-digit mobile number.']
      : !d.consent ? ['consent', 'Please allow the desk to contact you to confirm.']
      : null;
    if (problem) {
      dispatch({ type: 'error', message: problem[1], invalid: problem[0] });
      root.current?.querySelector<HTMLElement>(`[name="${problem[0]}"]`)?.focus();
      return;
    }
    dispatch({ type: 'confirm', pass: { ref: makeRef(), name, phone, age: d.age.trim(), note: d.note.trim() } });
  }

  function next() {
    if (state.step === 1) {
      if (state.dept) dispatch({ type: 'go', step: 2 });
      else if (suggestion) dispatch({ type: 'chooseDept', dept: suggestion.dept.id });
    } else if (state.step === 2) {
      if (!state.date || !state.time) {
        dispatch({ type: 'error', message: state.date ? 'Please pick a time.' : 'Please pick a date and a time.' });
        root.current?.querySelector<HTMLElement>('[data-time]:not(:disabled), [data-date]:not(:disabled)')?.focus();
        return;
      }
      dispatch({ type: 'go', step: 3 });
    } else if (state.step === 3) {
      validateDetails();
    }
  }

  const back = () => dispatch({ type: 'go', step: Math.max(1, state.step - 1) as Step });

  return (
    <div
      ref={root}
      className={cn(
        'grid min-h-full grid-rows-[auto_1fr_auto] bg-white',
        inline && 'rounded-[32px] border border-line shadow-[0_50px_120px_-70px_rgba(58,40,160,.55)]',
      )}
    >
      <header
        className={cn(
          'flex flex-wrap items-center justify-between gap-5 border-b border-line px-4 py-3.5 sm:px-7 sm:py-5 md:flex-nowrap',
          !inline && 'sticky top-0 z-3 bg-white/92 backdrop-blur-[14px]',
        )}
      >
        <div className="flex-1 md:flex-none">
          <Hud>
            <Dot /> Appointment concierge
          </Hud>
          <h2 id={`${uid}-title`} className="mt-1.5 text-2xl leading-[1.1] tracking-[-.035em]">
            Book a visit
          </h2>
        </div>
        <ol aria-label="Booking steps" className="order-3 flex w-full justify-between gap-1 rounded-full bg-soft p-1 md:order-none md:w-auto md:justify-start">
          {STEPS.map((name, i) => {
            const n = i + 1;
            const current = state.step === n;
            const done = state.step > n;
            return (
              <li
                key={name}
                aria-current={current ? 'step' : undefined}
                className={cn(
                  'inline-flex flex-1 items-center justify-center rounded-full px-1.5 py-2 transition-[background-color,color] duration-400 ease-smooth md:flex-none md:px-3.5',
                  'text-[0px] sm:gap-2 sm:text-[13px]',
                  current ? 'gap-1.5 bg-ink text-[12.5px] text-white' : done ? 'text-ink' : 'text-muted',
                )}
              >
                <span className={cn('font-mono text-[11px] font-medium sm:text-[10.5px]', current ? 'text-violet' : done && 'text-violet-ink')}>0{n}</span>
                {name}
              </li>
            );
          })}
        </ol>
        {!inline && (
          <button
            type="button"
            aria-label="Close booking"
            onClick={onClose}
            className="grid size-11 flex-none place-items-center rounded-full border border-line-2 bg-white transition-colors duration-300 hover:bg-ink hover:text-white"
          >
            <Icon name="close" />
          </button>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_250px] lg:grid-cols-[minmax(0,1fr)_290px]">
        <div className="min-w-0 px-4 pt-6 pb-8 sm:px-8 sm:pt-8 sm:pb-10">
          {state.step === 1 && (
            <ConcernStep
              state={state}
              dispatch={dispatch}
              suggestion={suggestion}
              urgent={urgent}
              headingId={`${uid}-q1`}
              inputRef={queryInput}
            />
          )}
          {state.step === 2 && dept && (
            <ScheduleStep
              state={state}
              dispatch={dispatch}
              headingId={`${uid}-q2`}
              onTookEarliest={() => nextButton.current?.focus()}
            />
          )}
          {state.step === 3 && (
            <DetailsStep state={state} dispatch={dispatch} headingId={`${uid}-q3`} onSubmit={next} />
          )}
          {state.step === 4 && state.pass && (
            <PassStep state={state} pass={state.pass} doctorLabel={doctorLabel} onAgain={() => dispatch({ type: 'reset' })} />
          )}
        </div>
        <BookingSummary dept={dept} doctor={doctor} doctorLabel={doctorLabel} when={when} mode={mode} />
      </div>

      {state.step < 4 && (
        <footer
          className={cn(
            'sticky bottom-0 z-3 flex items-center justify-between gap-4 border-t border-line bg-white/92 px-4 py-3 backdrop-blur-[14px] sm:px-7 sm:py-3.5',
            inline && 'rounded-b-[32px]',
          )}
        >
          {state.step > 1 && (
            <button type="button" onClick={back} className={buttonStyles({ variant: 'ghost', className: 'flex-1 sm:flex-none' })}>
              Back
            </button>
          )}
          <p
            aria-hidden="true"
            className={cn('hidden min-w-0 flex-1 truncate text-[13.5px] text-muted sm:block', state.step > 1 ? 'text-center' : 'text-left md:text-right')}
          >
            {[dept?.name, doctorLabel, when].filter(Boolean).join(' · ')}
          </p>
          <button
            ref={nextButton}
            type="button"
            onClick={next}
            disabled={state.step === 1 && !state.dept && !suggestion}
            className={buttonStyles({ className: 'flex-1 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none' })}
          >
            {state.step === 3 ? 'Request appointment' : 'Continue'} <Icon name="arrow" className={buttonIcon} />
          </button>
        </footer>
      )}
    </div>
  );
}
