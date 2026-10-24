import type { ReactNode } from 'react';
import { BookButton } from '@/components/booking/BookButton';
import { Brand } from '@/components/brand/Brand';
import { Hud } from '@/components/ui/Hud';
import { Icon } from '@/components/ui/Icon';
import { CONTACT } from '@/lib/data';
import { NavLink } from './NavLink';

const linkClass = 'mb-2.5 flex items-center gap-1.5 text-[15px] leading-[1.5] text-[#c9c9d6] transition-colors duration-300 hover:text-white';

export function SiteFooter() {
  return (
    <footer className="mt-(--section) overflow-hidden rounded-t-[36px] bg-ink px-(--pad) pt-[clamp(56px,7vw,96px)] pb-7 text-[#f1f1f6]">
      <div className="grid grid-cols-1 gap-[clamp(32px,5vw,80px)] md:grid-cols-[1fr_1.4fr]">
        <div>
          <Brand light className="mb-[30px]" />
          <Hud className="text-white/55">Compassionate · Comprehensive · Caring</Hud>
          <h2 className="mt-[18px] mb-[30px] text-[clamp(36px,4.4vw,66px)]">
            Feeling unwell?
            <br />
            Let’s find the right care.
          </h2>
          <BookButton variant="light" arrow>
            Book an appointment
          </BookButton>
        </div>

        <div className="grid grid-cols-2 gap-7 sm:grid-cols-3">
          <FooterColumn label="Visit" className="col-span-2 sm:col-span-1">
            <address className="mb-2.5 text-[15px] leading-[1.5] text-[#c9c9d6] not-italic">
              {CONTACT.address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
            <a href={CONTACT.maps} target="_blank" rel="noopener" className={linkClass}>
              Get directions <Icon name="arrow-ur" />
            </a>
          </FooterColumn>
          <FooterColumn label="Call" className="col-span-2 sm:col-span-1">
            <FooterPhone href={CONTACT.emergency.href} tag="Emergency" value={CONTACT.emergency.label} />
            <FooterPhone href={CONTACT.alternate.href} tag="Desk" value={CONTACT.alternate.label} />
            <FooterPhone href={CONTACT.whatsapp.href} tag="WhatsApp" value={CONTACT.whatsapp.label} external />
            <a href={`mailto:${CONTACT.email}`} className={linkClass}>
              {CONTACT.email}
            </a>
          </FooterColumn>
          <FooterColumn label="Explore">
            <NavLink href="/departments" className={linkClass}>Departments</NavLink>
            <NavLink href="/doctors" className={linkClass}>Doctors</NavLink>
            <NavLink href="/hospital" className={linkClass}>Hospital</NavLink>
            <NavLink href="/appointment" className={linkClass}>Book appointment</NavLink>
          </FooterColumn>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="mt-[clamp(48px,7vw,96px)] mb-[18px] bg-footer-word text-center text-[21vw] leading-[.8] font-semibold tracking-[-.065em] whitespace-nowrap"
      >
        Well<span className="-mr-[.12em] bg-dna bg-clip-text pr-[.12em] text-transparent">care</span>
      </div>

      <div className="flex flex-wrap justify-between gap-x-6 gap-y-2.5 border-t border-white/12 pt-5 font-mono text-[11px] font-medium tracking-[.06em] text-[#8b8b9b] uppercase">
        <span>© 2026 Wellcare Hospital &amp; Research Institute, Trichy</span>
        <span>Insurance accepted: {CONTACT.insurers.join(' · ')}</span>
      </div>
    </footer>
  );
}

function FooterColumn({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <p className="mb-3.5 font-mono text-[11px] font-medium tracking-[.14em] text-[#8b8b9b] uppercase">{label}</p>
      {children}
    </div>
  );
}

function FooterPhone({ href, tag, value, external }: { href: string; tag: string; value: string; external?: boolean }) {
  return (
    <a href={href} className={linkClass} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
      <span className="min-w-[72px] font-mono text-[10.5px] font-medium tracking-[.1em] text-[#8b8b9b] uppercase">{tag}</span>
      {value}
    </a>
  );
}
