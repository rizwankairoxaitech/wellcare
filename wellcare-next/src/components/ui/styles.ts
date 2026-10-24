// Class recipes shared by components that render different elements (button, link, NavLink).
import { cn } from '@/lib/cn';

export type ButtonVariant = 'primary' | 'light' | 'ghost' | 'alert';
export type ButtonSize = 'md' | 'sm';

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-ink text-white hover:bg-violet-ink hover:shadow-[0_14px_40px_-12px_rgba(90,69,214,.6)]',
  light: 'bg-white text-ink hover:shadow-[0_14px_40px_-14px_rgba(0,0,0,.45)]',
  ghost: 'border-line-2 bg-transparent text-ink hover:border-ink',
  alert: 'bg-alert text-white hover:bg-alert-ink',
};

export function buttonStyles({
  variant = 'primary',
  size = 'md',
  block = false,
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; block?: boolean; className?: string } = {}) {
  return cn(
    'group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full border border-transparent font-medium tracking-[-.01em] whitespace-nowrap',
    'transition-[background-color,color,border-color,box-shadow,transform] duration-350 ease-smooth',
    size === 'md' ? 'h-[52px] px-6 text-[15px]' : 'h-[42px] px-[18px] text-sm',
    VARIANTS[variant],
    block && 'w-full',
    className,
  );
}

/** Icon inside a button: nudges right on hover */
export const buttonIcon = 'transition-transform duration-400 ease-smooth group-hover/btn:translate-x-[3px]';

/** Underline-on-hover text link in the accent colour */
export const linkStyles = cn(
  'inline-flex items-center gap-1.5 font-medium text-violet-ink',
  'bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_1px] bg-[position:0_100%] bg-no-repeat',
  'transition-[background-size] duration-400 ease-smooth hover:bg-[length:100%_1px]',
);

export const chipStyles = cn(
  'inline-flex h-[38px] items-center gap-1.5 rounded-full border border-line-2 bg-white/70 px-4 text-sm whitespace-nowrap text-ink-2',
  'transition-[border-color,color,background-color] duration-300',
  'hover:border-violet hover:bg-tint hover:text-violet-ink',
  'aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white',
);

export const roundStyles = cn(
  'grid size-12 place-items-center rounded-full border border-line-2 bg-white transition-colors duration-300',
  'hover:border-ink hover:bg-ink hover:text-white',
);

/** Small mono uppercase label */
export const hudStyles = 'inline-flex items-center gap-2 font-mono text-[11px]/[1.4] font-medium tracking-[.14em] uppercase';
