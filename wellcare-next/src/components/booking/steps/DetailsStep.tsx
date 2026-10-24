'use client';

import type { Dispatch, FormEvent } from 'react';
import { cn } from '@/lib/cn';
import type { BookingAction, BookingState, Details } from '../bookingState';
import { errorText, fieldInput, fieldLabel, question, segButton, segGroup } from '../styles';

interface DetailsStepProps {
  state: BookingState;
  dispatch: Dispatch<BookingAction>;
  headingId: string;
  onSubmit: () => void;
}

/** Step 3 — who the visit is for and how to reach them */
export function DetailsStep({ state, dispatch, headingId, onSubmit }: DetailsStepProps) {
  const { details, invalid } = state;
  const set = (field: keyof Details) => (value: string | boolean) => dispatch({ type: 'detail', field, value });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <section aria-labelledby={headingId} className="animate-rise">
      <h3 data-step-heading id={headingId} tabIndex={-1} className={question}>
        Who is the appointment for?
      </h3>
      <form noValidate onSubmit={submit}>
        <div role="group" aria-label="Booking for" className={cn(segGroup, 'mt-2.5')}>
          <button type="button" aria-pressed={state.who === 'self'} onClick={() => dispatch({ type: 'who', who: 'self' })} className={segButton}>
            Myself
          </button>
          <button type="button" aria-pressed={state.who === 'other'} onClick={() => dispatch({ type: 'who', who: 'other' })} className={segButton}>
            Someone else
          </button>
        </div>

        <div className="mt-[22px] grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label>
            <span className={fieldLabel}>{state.who === 'self' ? 'Your full name' : 'Patient’s full name'}</span>
            <input
              name="name"
              autoComplete="name"
              maxLength={80}
              value={details.name}
              aria-invalid={invalid === 'name'}
              onChange={(e) => set('name')(e.target.value)}
              className={fieldInput}
            />
          </label>
          <label>
            <span className={fieldLabel}>Mobile number</span>
            <span className="flex items-stretch">
              <em className="grid place-items-center rounded-l-[14px] border border-r-0 border-line-2 bg-soft px-3.5 font-mono text-sm font-medium text-ink-2 not-italic">+91</em>
              <input
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                maxLength={14}
                placeholder="98765 43210"
                value={details.phone}
                aria-invalid={invalid === 'phone'}
                onChange={(e) => set('phone')(e.target.value)}
                className={cn(fieldInput, 'rounded-l-none rounded-r-[14px]')}
              />
            </span>
          </label>
          <label>
            <span className={fieldLabel}>
              Age <small className="font-normal text-muted">optional</small>
            </span>
            <input name="age" inputMode="numeric" maxLength={3} value={details.age} onChange={(e) => set('age')(e.target.value)} className={fieldInput} />
          </label>
          <label className="col-span-full">
            <span className={fieldLabel}>
              Anything the doctor should know? <small className="font-normal text-muted">optional</small>
            </span>
            <textarea
              name="note"
              rows={3}
              maxLength={300}
              placeholder="A line about symptoms, how long, any reports"
              value={details.note}
              onChange={(e) => set('note')(e.target.value)}
              className={cn(fieldInput, 'h-auto resize-y py-3.5 leading-[1.5]')}
            />
          </label>
          <label className="col-span-full flex cursor-pointer items-start gap-3 text-[14.5px] text-ink-2">
            <input
              type="checkbox"
              name="consent"
              checked={details.consent}
              aria-invalid={invalid === 'consent'}
              onChange={(e) => set('consent')(e.target.checked)}
              className="mt-px size-5 flex-none accent-violet-ink aria-invalid:outline-2 aria-invalid:outline-offset-2 aria-invalid:outline-alert"
            />
            <span>Wellcare may call or WhatsApp me to confirm this request.</span>
          </label>
        </div>
        <p role="alert" className={errorText}>
          {state.error}
        </p>
        <button type="submit" hidden />
      </form>
    </section>
  );
}
