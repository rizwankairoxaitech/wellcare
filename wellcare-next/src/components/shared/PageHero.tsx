import Image from 'next/image';
import type { ReactNode } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { Scramble } from '@/components/motion/Scramble';
import { SplitText, type SplitLine } from '@/components/motion/SplitText';
import { Hud } from '@/components/ui/Hud';
import { EcgLine } from './EcgLine';

interface PageHeroProps {
  eyebrow: string;
  lines: SplitLine[];
  text: string;
  action?: ReactNode;
  /** right-hand visual, usually a particle figure */
  figure?: ReactNode;
  ecg?: boolean;
  image?: { src: string; alt: string };
}

/** Inner-page hero: eyebrow, big split heading, intro copy, a visual and an optional ECG line or photo */
export function PageHero({ eyebrow, lines, text, action, figure, ecg = false, image }: PageHeroProps) {
  return (
    <header className="grid grid-cols-1 items-center gap-x-12 gap-y-7 px-(--pad) pt-[calc(var(--hdr)+clamp(56px,8vw,110px))] md:grid-cols-[minmax(0,1.12fr)_minmax(0,.88fr)]">
      <div>
        <Hud>
          <Scramble trigger="hero" text={eyebrow} />
        </Hud>
        <SplitText as="h1" hero lines={lines} className="mt-5 text-[clamp(50px,7.6vw,124px)] leading-[.9] tracking-[-.058em]" />
        <Reveal mode="lead" className="mt-[30px] grid justify-items-start gap-[22px]">
          <p className="max-w-[40ch] text-[17.5px] text-ink-2">{text}</p>
          {action}
        </Reveal>
      </div>
      {figure}
      {ecg && <EcgLine className="col-span-full mt-2" />}
      {image && (
        <Reveal as="figure" className="relative col-span-full m-0 mt-7 aspect-[21/9] overflow-hidden rounded-[32px]">
          <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover object-[60%_40%]" />
        </Reveal>
      )}
    </header>
  );
}
