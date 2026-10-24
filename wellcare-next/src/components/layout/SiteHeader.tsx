'use client';

import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';
import { BookButton } from '@/components/booking/BookButton';
import { Brand } from '@/components/brand/Brand';
import { Dot } from '@/components/ui/Dot';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';
import { CONTACT } from '@/lib/data';
import { useMenu } from '@/providers/UIProvider';
import { NavLink } from './NavLink';

export const PRIMARY_LINKS = [
  { href: '/departments', label: 'Departments' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/hospital', label: 'Hospital' },
];

const subscribeScroll = (notify: () => void) => {
  window.addEventListener('scroll', notify, { passive: true });
  return () => window.removeEventListener('scroll', notify);
};
const useScrolled = () => useSyncExternalStore(subscribeScroll, () => window.scrollY > 24, () => false);

export function SiteHeader() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const menu = useMenu();

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-60 grid h-(--hdr) grid-cols-[auto_1fr] items-center gap-4 px-(--pad) lg:grid-cols-[1fr_auto_1fr]',
        'transition-[background-color,box-shadow] duration-400 ease-smooth',
        scrolled && 'bg-white/80 shadow-[0_1px_0_var(--color-line)] backdrop-blur-[18px] backdrop-saturate-140',
      )}
    >
      <Brand />

      <nav aria-label="Primary" className="hidden gap-1 rounded-full border border-line bg-[rgba(246,245,250,.8)] p-[5px] backdrop-blur-[10px] lg:flex">
        {PRIMARY_LINKS.map(({ href, label }) => {
          const current = pathname === href;
          return (
            <NavLink
              key={href}
              href={href}
              aria-current={current ? 'page' : undefined}
              className={cn(
                'rounded-full px-4 py-2 text-[14.5px] transition-colors duration-300',
                current ? 'bg-ink text-white' : 'text-ink-2 hover:bg-white hover:text-ink',
              )}
            >
              {label}
            </NavLink>
          );
        })}
      </nav>

      <div className="flex items-center gap-2 justify-self-end sm:gap-2.5">
        <a
          href={CONTACT.emergency.href}
          aria-label={`Emergency, open 24/7: call ${CONTACT.emergency.label}`}
          className={cn(
            'inline-flex h-[42px] w-[42px] items-center justify-center gap-[9px] rounded-full border border-[rgba(229,72,77,.28)] bg-[rgba(253,238,238,.75)]',
            'text-[13.5px] font-medium whitespace-nowrap text-alert-ink transition-colors duration-300 hover:bg-alert-soft',
            'sm:w-auto sm:px-4',
          )}
        >
          <Dot tone="alert" className="hidden sm:inline-block" />
          <Icon name="phone" className="size-[19px] sm:hidden" />
          <span className="hidden sm:inline">Emergency 24/7</span>
          <span className="hidden font-mono text-xs text-ink-2 xl:inline">{CONTACT.emergency.short}</span>
        </a>
        <BookButton size="sm" className="gap-0">
          Book<span className="hidden sm:inline">&nbsp;appointment</span>
        </BookButton>
        <button
          type="button"
          aria-expanded={menu.open}
          aria-controls="site-menu"
          onClick={() => menu.setOpen(true)}
          className="group inline-flex h-[42px] items-center gap-3 rounded-full border border-line-2 bg-white/80 px-4 text-sm"
        >
          <span className="hidden sm:inline">Menu</span>
          <span aria-hidden="true" className="grid w-[18px] gap-[5px]">
            <i className="block h-[1.5px] bg-current" />
            <i className="block h-[1.5px] w-3/5 origin-right justify-self-end bg-current transition-transform duration-400 ease-smooth group-hover:scale-x-[1.66]" />
          </span>
          <span className="sr-only sm:hidden">Menu</span>
        </button>
      </div>
    </header>
  );
}
