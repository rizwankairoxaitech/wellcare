import { Reveal } from '@/components/motion/Reveal';
import { SplitText } from '@/components/motion/SplitText';
import { ContactCard } from '@/components/shared/ContactCard';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Hud } from '@/components/ui/Hud';
import { CONTACT } from '@/lib/data';

/** Every way to reach the hospital, plus the map */
export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-[100px] px-(--pad) pt-(--section)">
      <Hud>Reach us</Hud>
      <SplitText id="contact-title" lines={['We’re here, day and night.']} className="mt-[18px] mb-10 text-[clamp(44px,5.6vw,90px)]" />
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        <ContactCard reveal emergency href={CONTACT.emergency.href} label="Emergency & ambulance" value={CONTACT.emergency.label} action="Call now" />
        <ContactCard reveal href={CONTACT.alternate.href} label="Appointments desk" value={CONTACT.alternate.label} action="Call" />
        <ContactCard reveal external href={CONTACT.whatsapp.href} label="WhatsApp" value={CONTACT.whatsapp.label} action="Chat" />
        <ContactCard reveal href={`mailto:${CONTACT.email}`} label="Email" value={CONTACT.email} action="Write" />
      </div>
      <Reveal className="mt-3.5 grid grid-cols-1 gap-3.5 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="flex flex-col items-start gap-4 rounded-card bg-soft p-7">
          <Hud>Location</Hud>
          <address className="text-xl leading-[1.45] tracking-[-.01em] not-italic">
            Wellcare Hospital &amp; Research Institute
            <br />
            {CONTACT.address[0]}
            <br />
            {CONTACT.address[1]}
          </address>
          <ButtonLink href={CONTACT.maps} external icon="arrow-ur" className="mt-auto">
            Get directions
          </ButtonLink>
        </div>
        <iframe
          title="Map showing Wellcare Hospital, Thillai Nagar, Trichy"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=C-165+9th+A+Cross+Thillai+Nagar+Trichy&output=embed"
          className="size-full min-h-[380px] rounded-card border-0 [filter:grayscale(.35)_contrast(1.05)]"
        />
      </Reveal>
    </section>
  );
}
