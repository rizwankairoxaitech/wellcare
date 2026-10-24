import type { ReactNode } from 'react';
import { Hud } from '@/components/ui/Hud';

interface MoreCtaProps {
  eyebrow: string;
  title: string;
  text: string;
  id: string;
  action: ReactNode;
}

/** Soft gradient panel that closes a page with one more way forward */
export function MoreCta({ eyebrow, title, text, id, action }: MoreCtaProps) {
  return (
    <section
      aria-labelledby={id}
      className="mx-(--pad) mt-(--section) flex flex-col items-start justify-between gap-8 rounded-[34px] bg-dna-soft p-[clamp(32px,5vw,64px)] md:flex-row md:items-center"
    >
      <div>
        <Hud>{eyebrow}</Hud>
        <h2 id={id} className="mt-3.5 mb-3 text-[clamp(32px,4vw,60px)]">
          {title}
        </h2>
        <p className="max-w-[46ch] text-ink-2">{text}</p>
      </div>
      {action}
    </section>
  );
}
