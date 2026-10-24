'use client';

import { useDeferredValue, useId, useRef, useState } from 'react';
import { Dot } from '@/components/ui/Dot';
import { Icon } from '@/components/ui/Icon';
import { buttonIcon, buttonStyles } from '@/components/ui/styles';
import { useReveal } from '@/hooks/useReveal';
import { matchCare } from '@/lib/booking/match';
import { deptById, doctorsIn } from '@/lib/data';
import { useBooking } from '@/providers/UIProvider';

/** Hero search: type a symptom, see the matching department live, then hand it to the concierge */
export function CareFinder() {
  const id = useId();
  const [text, setText] = useState('');
  const { openBooking } = useBooking();
  const form = useRef<HTMLFormElement>(null);
  useReveal(form, 'lead');
  const query = useDeferredValue(text.trim());
  const match = query.length >= 3 ? matchCare(query) : null;
  const dept = match ? match.dept : deptById('op')!;

  const submit = () => openBooking({ query: text.trim() });

  return (
    <form
      ref={form}
      role="search"
      aria-label="Find care"
      data-lead
      className="mt-[34px] max-w-[640px]"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <label htmlFor={id} className="mb-2.5 ml-1 block font-mono text-[11px] font-medium tracking-[.14em] text-muted uppercase">
        What brings you in today?
      </label>
      <div className="flex flex-wrap items-center gap-3 rounded-[22px] border border-line-2 bg-white/78 p-2 shadow-glow backdrop-blur-[18px] backdrop-saturate-150 transition-[border-color,box-shadow] duration-300 focus-within:border-violet focus-within:shadow-[0_30px_80px_-40px_rgba(58,40,160,.35),0_0_0_4px_rgba(143,126,243,.18)] sm:flex-nowrap sm:rounded-full sm:py-[7px] sm:pr-[7px] sm:pl-[22px]">
        <Icon name="search" className="ml-3 size-5 text-muted sm:ml-0" />
        <input
          id={id}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Try “knee pain” or “child has fever”"
          autoComplete="off"
          maxLength={120}
          className="h-[46px] min-w-0 flex-[1_1_calc(100%-50px)] border-0 bg-transparent text-[17px] text-ink outline-none placeholder:text-muted-2 sm:h-[50px] sm:flex-1"
        />
        <button type="submit" data-book className={buttonStyles({ className: 'w-full sm:w-auto' })}>
          Find care <Icon name="arrow" className={buttonIcon} />
        </button>
      </div>
      <p aria-live="polite" className="mt-3.5 ml-1.5 flex min-h-[22px] items-center gap-2.5 text-[13.5px] text-muted">
        <Dot />
        {query.length < 3 ? (
          <span>Type a symptom — we’ll match the department.</span>
        ) : (
          <span>
            {match ? 'Sounds like' : 'Start with'} <strong className="font-medium text-ink">{dept.full}</strong> ·{' '}
            {doctorsIn(dept.id).map((d) => d.name).join(', ')}
          </span>
        )}
      </p>
    </form>
  );
}
