import { Reveal } from '@/components/motion/Reveal';
import { Dot } from '@/components/ui/Dot';
import { Hud } from '@/components/ui/Hud';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';

interface ContactCardProps {
  href: string;
  label: string;
  value: string;
  action: string;
  emergency?: boolean;
  external?: boolean;
  reveal?: boolean;
}

/** A way to reach the hospital: phone, WhatsApp, email */
export function ContactCard({ href, label, value, action, emergency = false, external = false, reveal = false }: ContactCardProps) {
  const card = (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      className={cn(
        'flex min-h-[180px] flex-col gap-3 rounded-card border p-6 transition-[border-color,background-color,transform,box-shadow] duration-500 ease-smooth hover:-translate-y-1 hover:shadow-glow',
        emergency ? 'border-transparent bg-alert text-white hover:bg-alert-ink' : 'border-line bg-white hover:border-violet',
      )}
    >
      <Hud as="span" tone={emergency ? 'light' : 'muted'}>
        {emergency && <Dot tone="alert" />} {label}
      </Hud>
      <strong className="text-[clamp(18px,1.6vw,22px)] font-medium tracking-[-.02em] [overflow-wrap:anywhere]">{value}</strong>
      <i className={cn('mt-auto inline-flex items-center gap-1.5 text-sm not-italic', emergency ? 'text-white' : 'text-violet-ink')}>
        {action} <Icon name="arrow-ur" />
      </i>
    </a>
  );
  return reveal ? <Reveal className="grid">{card}</Reveal> : card;
}
