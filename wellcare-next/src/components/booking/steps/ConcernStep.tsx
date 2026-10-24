'use client';

import type { Dispatch, Ref } from 'react';
import { buttonIcon, buttonStyles } from '@/components/ui/styles';
import { Dot } from '@/components/ui/Dot';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';
import { CONTACT, DEPARTMENTS, doctorsIn } from '@/lib/data';
import type { Department } from '@/types';
import type { BookingAction, BookingState } from '../bookingState';
import { label, question, selectCard, subline } from '../styles';

export interface Suggestion {
  dept: Department;
  /** false when nothing matched and General Medicine is the fallback */
  matched: boolean;
}

interface ConcernStepProps {
  state: BookingState;
  dispatch: Dispatch<BookingAction>;
  suggestion: Suggestion | null;
  urgent: boolean;
  headingId: string;
  inputRef: Ref<HTMLInputElement>;
}

/** Step 1 — describe the concern in your own words, or pick a department */
export function ConcernStep({ state, dispatch, suggestion, urgent, headingId, inputRef }: ConcernStepProps) {
  const pressedId = state.dept ?? suggestion?.dept.id ?? null;

  return (
    <section aria-labelledby={headingId} className="animate-rise">
      <h3 data-step-heading id={headingId} tabIndex={-1} className={question}>
        What brings you in today?
      </h3>
      <p className={subline}>Describe it in your own words — we’ll point you to the right department.</p>

      <label className="flex h-16 items-center gap-3 rounded-[18px] border border-line-2 bg-white px-5 transition-[border-color,box-shadow] duration-300 focus-within:border-violet focus-within:shadow-[0_0_0_4px_rgba(143,126,243,.16)]">
        <span className="sr-only">Describe your concern</span>
        <Icon name="search" className="size-5 text-muted" />
        <input
          ref={inputRef}
          type="text"
          value={state.query}
          onChange={(e) => dispatch({ type: 'query', value: e.target.value })}
          onKeyDown={(e) => {
            if (e.key !== 'Enter' || !suggestion) return;
            e.preventDefault();
            dispatch({ type: 'chooseDept', dept: suggestion.dept.id });
          }}
          placeholder="e.g. knee pain after a fall"
          autoComplete="off"
          maxLength={120}
          className="h-full min-w-0 flex-1 border-0 bg-transparent text-lg text-ink outline-none placeholder:text-muted-2"
        />
      </label>

      {urgent && (
        <div role="alert" className="mt-3.5 grid grid-cols-[auto_1fr] items-center gap-3.5 rounded-[18px] border border-[rgba(229,72,77,.25)] bg-alert-soft px-[18px] py-4 sm:grid-cols-[auto_1fr_auto]">
          <Dot tone="alert" />
          <div>
            <strong className="block text-[15px] font-semibold text-alert-ink">This could need emergency care.</strong>
            <p className="text-[13.5px] text-ink-2">If it is sudden or severe, don’t wait for an appointment.</p>
          </div>
          <a href={CONTACT.emergency.href} className={buttonStyles({ variant: 'alert', size: 'sm', className: 'col-span-full sm:col-auto' })}>
            <Icon name="phone" /> Call {CONTACT.emergency.short}
          </a>
        </div>
      )}

      <div aria-live="polite">
        {suggestion && (
          <div className="mt-3.5 grid animate-rise grid-cols-[auto_1fr] items-center gap-4 rounded-[20px] bg-ink p-3.5 text-white sm:grid-cols-[auto_1fr_auto]">
            <span className="grid size-[52px] place-items-center rounded-[14px] bg-dna font-mono text-sm font-semibold">{suggestion.dept.code}</span>
            <div>
              <small className="block font-mono text-[10.5px] font-medium tracking-[.12em] text-[#a9a9b8] uppercase">
                {suggestion.matched ? 'Sounds like' : 'Best place to start'}
              </small>
              <strong className="block text-[19px] font-medium tracking-[-.02em]">{suggestion.dept.full}</strong>
              <span className="block text-[13px] text-[#c9c9d6]">{doctorsIn(suggestion.dept.id).map((d) => d.name).join(' · ')}</span>
            </div>
            <button
              type="button"
              onClick={() => dispatch({ type: 'chooseDept', dept: suggestion.dept.id })}
              className={buttonStyles({ size: 'sm', className: 'col-span-full bg-white text-ink hover:bg-tint hover:shadow-none sm:col-auto' })}
            >
              Continue <Icon name="arrow" className={buttonIcon} />
            </button>
          </div>
        )}
      </div>

      <p className={label}>Or choose a department</p>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {DEPARTMENTS.map((d) => (
          <button
            key={d.id}
            type="button"
            aria-pressed={pressedId === d.id}
            onClick={() => dispatch({ type: 'chooseDept', dept: d.id })}
            className={cn(selectCard, 'grid grid-cols-[46px_1fr_20px] items-center gap-3.5 p-3.5 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-24px_rgba(58,40,160,.45)]')}
          >
            <span className="grid size-[46px] place-items-center rounded-[13px] bg-tint font-mono text-xs font-semibold text-violet-ink transition-colors duration-300 group-aria-pressed:bg-violet-ink group-aria-pressed:text-white">
              {d.code}
            </span>
            <span>
              <strong className="block text-[15.5px] font-medium tracking-[-.01em]">{d.full}</strong>
              <small className="block text-[13px] leading-[1.35] text-muted">{d.forList[0]}</small>
            </span>
            <Icon name="arrow" className="text-muted-2" />
          </button>
        ))}
      </div>
      <p className="mt-3.5 text-[13.5px] text-muted">Not sure? Pick General Medicine — the duty physician will route you.</p>
    </section>
  );
}
