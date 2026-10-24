import { Reveal } from '@/components/motion/Reveal';
import { Scramble } from '@/components/motion/Scramble';
import { SplitText } from '@/components/motion/SplitText';
import { CheckList } from '@/components/shared/CheckList';
import { Hud } from '@/components/ui/Hud';
import { pad2 } from '@/lib/cn';

const STEPS = [
  { title: 'Request', text: 'Use the concierge, WhatsApp or a call. Tell us the concern in a line.' },
  { title: 'Confirm', text: 'The desk confirms your doctor and exact time by phone.' },
  { title: 'Arrive', text: 'Come 15 minutes early to register at the front desk.' },
  { title: 'Follow up', text: 'Leave with a written plan and your next visit booked if you need one.' },
];

const BRING = [
  'Photo ID and your insurance card',
  'Previous reports, scans and prescriptions',
  'A list of medicines you take now',
  'A family member, if you’d like one with you',
];

/** What happens on a visit, and what to bring */
export function VisitSteps() {
  return (
    <section aria-labelledby="visit-title" className="grid grid-cols-1 gap-x-[clamp(32px,6vw,96px)] gap-y-10 px-(--pad) pt-(--section) md:grid-cols-2">
      <div>
        <Hud>
          <Scramble text="Your visit" />
        </Hud>
        <SplitText id="visit-title" lines={['Know what happens next.']} className="mt-[18px] mb-3.5 text-[clamp(44px,5.6vw,90px)]" />
        <p className="text-muted">From the first message to the follow-up, four calm steps.</p>
      </div>
      <ol className="md:row-span-2">
        {STEPS.map((step, i) => (
          <Reveal as="li" key={step.title} className="grid grid-cols-[70px_1fr] gap-4 border-b border-line py-[26px] first:border-t">
            <span className="pt-1.5 font-mono text-[13px] font-medium text-violet-ink">{pad2(i + 1)}</span>
            <div>
              <h3 className="mb-1.5 text-[26px] font-normal tracking-[-.03em]">{step.title}</h3>
              <p className="text-muted">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
      <Reveal as="aside" className="self-start rounded-card bg-dna-soft p-7">
        <Hud>Bring with you</Hud>
        <CheckList items={BRING} className="mt-2.5" itemClassName="border-[rgba(90,69,214,.12)] text-base" />
      </Reveal>
    </section>
  );
}
