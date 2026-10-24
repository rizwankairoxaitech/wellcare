import Image from 'next/image';
import { BookButton } from '@/components/booking/BookButton';
import { NavLink } from '@/components/layout/NavLink';
import { Reveal } from '@/components/motion/Reveal';
import { Scramble } from '@/components/motion/Scramble';
import { SplitText } from '@/components/motion/SplitText';
import { Dot } from '@/components/ui/Dot';
import { Hud } from '@/components/ui/Hud';
import { Icon } from '@/components/ui/Icon';
import { chipStyles } from '@/components/ui/styles';
import { doctorById } from '@/lib/data';
import type { BookingPreset } from '@/types';
import { CareFinder } from './CareFinder';
import { HeroDna } from './HeroDna';
import { Ticker } from './Ticker';

const REASONS: { label: string; preset: BookingPreset }[] = [
  { label: 'Fever & cough', preset: { query: 'fever and cough' } },
  { label: 'Back & knee pain', preset: { dept: 'ortho' } },
  { label: 'Heart check-up', preset: { dept: 'cardio' } },
  { label: 'Pregnancy care', preset: { dept: 'gynecology' } },
  { label: 'Headache & dizziness', preset: { dept: 'neurology' } },
  { label: 'My child is unwell', preset: { dept: 'pediatrics' } },
];

const FACES = ['dr-sameer-rahman', 'dr-priya-elangovan', 'dr-naveen-iqbal', 'dr-sahana-parveen'].map((id) => doctorById(id)!);

/** Home hero: DNA helix, headline, live care finder and quick reasons to visit */
export function Hero() {
  return (
    <section className="relative isolate min-h-[max(100svh,760px)] overflow-hidden pt-[calc(var(--hdr)+40px)] pb-20 before:absolute before:inset-0 before:-z-1 before:bg-hero-glow sm:pb-24">
      <HeroDna />
      <div className="relative z-1 grid min-h-[calc(max(100svh,760px)-var(--hdr)-136px)] grid-cols-1 gap-8 px-(--pad) lg:grid-cols-[minmax(0,7.2fr)_minmax(0,4.8fr)]">
        <div className="max-w-[780px] min-w-0 self-center">
          <Hud>
            <Dot /> <Scramble trigger="hero" text="Wellcare Hospital & Research Institute · Trichy" />
          </Hud>
          <SplitText
            as="h1"
            hero
            lines={['Advanced care.', { text: 'Human at heart.', grad: true }]}
            // the white halo keeps the purple letters readable where the title runs over the DNA strand
            className="my-[18px] text-[clamp(48px,13.5vw,64px)] leading-[.9] tracking-[-.058em] [filter:drop-shadow(0_0_5px_#fff)_drop-shadow(0_0_14px_rgba(255,255,255,.9))] sm:mt-[22px] sm:mb-6 sm:text-[clamp(54px,8.4vw,136px)]"
          />
          <Reveal as="p" mode="lead" className="max-w-[44ch] text-[clamp(17px,1.35vw,20px)] leading-[1.5] text-ink-2">
            Six specialties, one connected team and an emergency desk that never closes — right here in Thillai Nagar.
          </Reveal>
          <CareFinder />
          <Reveal
            mode="lead"
            role="group"
            aria-label="Common reasons to visit"
            className="-mr-(--pad) mt-[18px] flex max-w-[680px] gap-2 overflow-x-auto pr-(--pad) scrollbar-none sm:mr-0 sm:flex-wrap sm:overflow-visible sm:pr-0"
          >
            {REASONS.map(({ label, preset }) => (
              <BookButton key={label} unstyled preset={preset} className={chipStyles}>
                {label}
              </BookButton>
            ))}
          </Reveal>
        </div>

        <Reveal as="aside" mode="lead" aria-label="Quick help" className="hidden w-auto gap-3 self-end justify-self-start sm:grid sm:grid-cols-[minmax(0,320px)] lg:w-[min(340px,100%)] lg:grid-cols-1 lg:justify-self-end">
          <NavLink
            href="/doctors"
            className="grid grid-cols-[auto_1fr_auto] items-center gap-3.5 rounded-[22px] border border-white/90 bg-white/70 px-5 py-[18px] shadow-float backdrop-blur-[20px] backdrop-saturate-150 transition-[transform,box-shadow] duration-500 ease-smooth hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(58,40,160,.45)]"
          >
            <span className="flex">
              {FACES.map((doc, i) => (
                <Image
                  key={doc.id}
                  src={doc.image!}
                  alt=""
                  width={38}
                  height={38}
                  className={`size-[38px] rounded-full border-2 border-white object-cover ${i > 0 ? '-ml-3' : ''}`}
                />
              ))}
            </span>
            <span>
              <strong className="block text-[15px] font-medium">Meet the specialists</strong>
              <small className="text-[13px] text-muted">Cardio · Ortho · Neuro · Gyn · Peds</small>
            </span>
            <Icon name="arrow" />
          </NavLink>
        </Reveal>
      </div>
      <Ticker />
    </section>
  );
}
