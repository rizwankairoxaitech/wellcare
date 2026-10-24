// Class recipes shared by the booking concierge steps
import { cn } from '@/lib/cn';

export const question = 'mb-2 text-[clamp(28px,3vw,42px)] leading-[1.02] font-normal tracking-[-.045em] outline-none';
export const subline = 'mb-[22px] text-base text-muted';
export const label = 'mt-[26px] mb-2.5 font-mono text-[11px] font-medium tracking-[.14em] text-muted uppercase';
export const errorText = 'mt-3.5 min-h-[22px] text-sm font-medium text-alert-ink';

/** Selectable card (department, doctor) */
export const selectCard = cn(
  'group rounded-[18px] border border-line bg-white text-left transition-[border-color,background-color,transform,box-shadow] duration-300 ease-smooth',
  'hover:border-violet aria-pressed:border-violet-ink aria-pressed:bg-[#faf9ff]',
);

/** Segmented control */
export const segGroup = 'inline-flex gap-0.5 rounded-full border border-line bg-soft p-1';
export const segButton = cn(
  'inline-flex h-9 items-center gap-1.5 rounded-full border-0 bg-transparent px-3.5 text-[13.5px] text-muted transition-[background-color,color,box-shadow] duration-300',
  'aria-pressed:bg-white aria-pressed:text-ink aria-pressed:shadow-[0_2px_10px_-4px_rgba(14,14,18,.25)]',
);

export const fieldLabel = 'mb-2 block text-[13.5px] font-medium text-ink-2';
export const fieldInput = cn(
  'h-[54px] w-full rounded-[14px] border border-line-2 bg-white px-4 text-base text-ink outline-none transition-[border-color,box-shadow] duration-300',
  'focus:border-violet focus:shadow-[0_0_0_4px_rgba(143,126,243,.16)] aria-invalid:border-alert',
);
