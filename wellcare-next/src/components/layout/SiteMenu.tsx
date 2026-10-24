'use client';

import { useEffect, useRef } from 'react';
import { BookButton } from '@/components/booking/BookButton';
import { Brand } from '@/components/brand/Brand';
import { Avatar } from '@/components/ui/Avatar';
import { Dot } from '@/components/ui/Dot';
import { Hud } from '@/components/ui/Hud';
import { Icon } from '@/components/ui/Icon';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { usePresence } from '@/hooks/usePresence';
import { cn, pad2 } from '@/lib/cn';
import { CONTACT, DEPARTMENTS, MORE_SPECIALTIES, doctorsIn } from '@/lib/data';
import { useScrollLock } from '@/providers/SmoothScrollProvider';
import { useMenu } from '@/providers/UIProvider';
import { NavLink } from './NavLink';

const PAGES = [
  { href: '/', label: 'Home' },
  { href: '/departments', label: 'Departments' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/hospital', label: 'Hospital' },
  { href: '/appointment', label: 'Book a visit' },
];

const columnIn = (shown: boolean, delay: string) =>
  cn('transition-[opacity,transform] duration-[600ms,900ms] ease-smooth', shown ? `translate-y-0 opacity-100 ${delay}` : 'translate-y-10 opacity-0');

/** Full-screen menu: pages, departments with their doctors, and the 24/7 care desk */
export function SiteMenu() {
  const { open, setOpen } = useMenu();
  const { mounted, shown } = usePresence(open, 700);
  const panel = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);

  useScrollLock(open);
  useFocusTrap(panel, open, close);
  useEffect(() => {
    if (open && mounted) closeBtn.current?.focus({ preventScroll: true });
  }, [open, mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={panel}
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      data-lenis-prevent
      className={cn(
        'fixed inset-0 z-85 overflow-y-auto bg-menu transition-[clip-path] duration-800 ease-curtain',
        shown ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_100%_0)]',
      )}
    >
      <div className="flex h-(--hdr) items-center justify-between px-(--pad)">
        <Brand />
        <button
          ref={closeBtn}
          type="button"
          onClick={close}
          className="inline-flex h-[42px] items-center gap-2.5 rounded-full border border-line-2 bg-white px-4 text-sm"
        >
          Close <Icon name="close" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-[clamp(24px,4vw,64px)] px-(--pad) pt-[clamp(20px,4vh,48px)] pb-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_.85fr]">
        <nav aria-label="Pages" className={cn('grid content-start', columnIn(shown, 'delay-250'))}>
          {PAGES.map(({ href, label }, i) => (
            <NavLink
              key={href}
              href={href}
              onNavigate={close}
              className="group flex items-baseline gap-[18px] border-b border-line py-1.5"
            >
              <span className="font-mono text-xs font-medium text-muted">{pad2(i + 1)}</span>
              <span
                className={cn(
                  '-mr-[.14em] -mb-[.24em] pr-[.14em] pb-[.24em] text-[42px] leading-[1.05] tracking-[-.05em] sm:text-[clamp(40px,5.2vw,82px)]',
                  'transition-[transform,color] duration-[600ms,300ms] ease-smooth',
                  'group-hover:translate-x-[14px] group-hover:bg-dna group-hover:bg-clip-text group-hover:text-transparent',
                )}
              >
                {label}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className={cn('grid content-start gap-0.5', columnIn(shown, 'delay-350'))}>
          <Hud className="mb-2.5">Departments &amp; doctors</Hud>
          {DEPARTMENTS.map((d) => {
            const docs = doctorsIn(d.id);
            return (
              <NavLink
                key={d.id}
                href={`/departments#${d.id}`}
                onNavigate={close}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-[13px]"
              >
                <span className="flex">
                  {docs.map((doc, i) => (
                    <span key={doc.id} className={cn('relative size-[42px] overflow-hidden rounded-full border-2 border-white', i > 0 && '-ml-3.5')}>
                      <Avatar doctor={doc} sizes="42px" monogramClassName="text-base" />
                    </span>
                  ))}
                </span>
                <span>
                  <strong className="block text-[17px] font-medium tracking-[-.02em]">{d.full}</strong>
                  <small className="text-[13px] text-muted">{docs.map((x) => x.name).join(' · ')}</small>
                </span>
                <Icon name="arrow" className="text-muted-2 transition-[transform,color] duration-400 ease-smooth group-hover:translate-x-1 group-hover:text-violet-ink" />
              </NavLink>
            );
          })}
          <p className="mt-3.5 text-[13px] text-muted">Also at Wellcare: {MORE_SPECIALTIES.join(' · ')}</p>
        </div>

        <aside
          className={cn(
            'grid gap-3 self-start rounded-[28px] bg-ink p-7 text-white sm:col-span-full sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1',
            columnIn(shown, 'delay-450'),
          )}
        >
          <Hud className="text-white/60 sm:col-span-full lg:col-span-1">
            <Dot tone="alert" /> Care desk · open 24/7
          </Hud>
          <a href={CONTACT.emergency.href} className="grid gap-1 rounded-[18px] bg-alert p-[18px] transition-colors duration-300 hover:bg-alert-ink">
            <small className="font-mono text-[10.5px] font-medium tracking-[.12em] uppercase opacity-85">Emergency &amp; ambulance</small>
            <strong className="text-[26px] font-medium tracking-[-.02em]">{CONTACT.emergency.label}</strong>
          </a>
          <DeskRow href={CONTACT.whatsapp.href} external icon="whatsapp" label="WhatsApp" value={CONTACT.whatsapp.label} />
          <DeskRow href={CONTACT.alternate.href} icon="phone" label="Appointments desk" value={CONTACT.alternate.label} />
          <DeskRow href={CONTACT.maps} external icon="pin" label="Visit" value={CONTACT.address.join(', ')} />
          <BookButton variant="light" block arrow className="mt-2 sm:col-span-full lg:col-span-1">
            Book appointment
          </BookButton>
        </aside>
      </div>
    </div>
  );
}

function DeskRow({ href, icon, label, value, external }: { href: string; icon: 'whatsapp' | 'phone' | 'pin'; label: string; value: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      className="flex items-center gap-3.5 border-b border-white/10 px-1 py-3 text-[15px]"
    >
      <Icon name={icon} className="size-5 text-violet" />
      <span>
        <small className="block font-mono text-[10px] font-medium tracking-[.12em] text-white/50 uppercase">{label}</small>
        {value}
      </span>
    </a>
  );
}
