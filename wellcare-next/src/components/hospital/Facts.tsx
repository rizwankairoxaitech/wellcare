import { Reveal } from '@/components/motion/Reveal';
import { Dot } from '@/components/ui/Dot';
import { Hud } from '@/components/ui/Hud';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';
import { CONTACT } from '@/lib/data';

const fact = 'flex min-h-[200px] flex-col gap-3.5 rounded-card p-7 sm:min-h-[260px]';
const big = 'mt-auto text-[clamp(48px,5vw,80px)] leading-none tracking-[-.055em]';

/** Wellcare at a glance */
export function Facts() {
  return (
    <section aria-label="Wellcare at a glance" className="grid grid-cols-1 gap-4 px-(--pad) pt-(--section) sm:grid-cols-2 lg:grid-cols-4">
      <Reveal as="article" className={cn(fact, 'bg-night text-white')}>
        <Hud className="text-white/70">
          <Dot tone="alert" /> Emergency
        </Hud>
        <p className={big}>24/7</p>
        <p className="text-[15px] text-white/70">Emergency care and an ambulance service across Trichy and the surrounding districts.</p>
      </Reveal>
      <Reveal as="article" className={cn(fact, 'bg-soft')}>
        <Hud>Specialties</Hud>
        <p className={big}>
          06<span className="text-[.5em] text-violet-ink">+3</span>
        </p>
        <p className="text-[15px] text-muted">Core departments plus Dermatology, ENT and Urology under one roof.</p>
      </Reveal>
      <Reveal as="article" className={cn(fact, 'bg-soft')}>
        <Hud>Teleconsultation</Hud>
        <p className={big}>
          <Icon name="video" className="size-16 stroke-[1.2] text-violet-ink" />
        </p>
        <p className="text-[15px] text-muted">Video consultations for select departments — ask the help desk to schedule one.</p>
      </Reveal>
      <Reveal as="article" className={cn(fact, 'bg-soft')}>
        <Hud>Insurance</Hud>
        <p className="mt-auto text-[clamp(22px,2vw,28px)] leading-[1.2] tracking-[-.03em]">{CONTACT.insurers.join(' · ')}</p>
        <p className="text-[15px] text-muted">Bring your policy card; the desk will help with the paperwork.</p>
      </Reveal>
    </section>
  );
}
