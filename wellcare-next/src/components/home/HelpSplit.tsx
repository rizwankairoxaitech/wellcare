import { BookButton } from '@/components/booking/BookButton';
import { Dot } from '@/components/ui/Dot';
import { Hud } from '@/components/ui/Hud';
import { CONTACT } from '@/lib/data';

const card = 'relative isolate flex min-h-[360px] flex-col overflow-hidden rounded-[34px] p-[clamp(28px,4vw,56px)] text-white md:min-h-[440px]';
const title = 'mt-5 text-[clamp(40px,4.6vw,72px)]';
const end = 'mt-auto grid justify-items-start gap-4 pt-10';

/** Emergency vs appointment: two clear doors at the end of the home page */
export function HelpSplit() {
  return (
    <section aria-label="Get help" className="grid grid-cols-1 gap-5 px-(--pad) pt-(--section) md:grid-cols-2">
      <a href={CONTACT.emergency.href} className={`${card} bg-sos-card transition-transform duration-600 ease-smooth hover:scale-[.99]`}>
        <Hud tone="light">
          <Dot tone="alert" /> Emergency · 24 hours
        </Hud>
        <h2 className={title}>
          Emergency?
          <br />
          Don’t book. Call.
        </h2>
        <div className={end}>
          <strong className="text-[clamp(40px,5.2vw,80px)] leading-none font-normal tracking-[-.04em]">{CONTACT.emergency.short}</strong>
          <p className="text-white/78">Ambulance across Trichy and surrounding districts.</p>
        </div>
      </a>
      <div
        className={`${card} bg-book-card after:absolute after:inset-0 after:-z-1 after:bg-[radial-gradient(60%_60%_at_20%_0%,rgba(255,255,255,.25),transparent_60%)]`}
      >
        <Hud tone="light">Everything else</Hud>
        <h2 className={title}>
          Book in under
          <br />a minute.
        </h2>
        <div className={end}>
          <BookButton variant="light" magnetic arrow>
            Start booking
          </BookButton>
          <p className="text-white/78">
            Prefer chat? WhatsApp{' '}
            <a href={CONTACT.whatsapp.href} target="_blank" rel="noopener" className="underline underline-offset-3">
              {CONTACT.whatsapp.label}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
