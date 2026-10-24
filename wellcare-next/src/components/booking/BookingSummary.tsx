import { Avatar } from '@/components/ui/Avatar';
import { Dot } from '@/components/ui/Dot';
import { Hud } from '@/components/ui/Hud';
import { cn } from '@/lib/cn';
import { CONTACT } from '@/lib/data';
import type { Department, Doctor } from '@/types';

interface BookingSummaryProps {
  dept?: Department;
  doctor?: Doctor;
  doctorLabel: string;
  when: string;
  mode: string;
}

/** Side panel that fills in as the visitor makes choices (hidden on phones) */
export function BookingSummary({ dept, doctor, doctorLabel, when, mode }: BookingSummaryProps) {
  const rows: [string, string][] = [
    ['Department', dept?.full ?? ''],
    ['Doctor', doctorLabel],
    ['When', when],
    ['Visit', mode],
  ];
  return (
    <aside aria-label="Your appointment so far" className="hidden flex-col gap-4 border-l border-line bg-soft px-6 py-7 md:flex">
      <div className="relative aspect-[4/4.2] overflow-hidden rounded-[20px] bg-dna-soft">
        {doctor ? (
          <Avatar key={doctor.id} doctor={doctor} sizes="290px" className="animate-rise" monogramClassName="text-[90px]" />
        ) : (
          <span className="grid h-full place-items-center font-mono text-[40px] font-medium text-violet-ink">{dept ? dept.code : '+'}</span>
        )}
      </div>
      <Hud>Your visit</Hud>
      <dl className="m-0">
        {rows.map(([term, value]) => (
          <div key={term} className="border-b border-line py-[11px]">
            <dt className="font-mono text-[10px] font-medium tracking-[.12em] text-muted uppercase">{term}</dt>
            <dd className={cn('mt-[3px] text-[15px] font-medium', value ? 'text-ink' : 'text-muted-2')}>{value || '—'}</dd>
          </div>
        ))}
      </dl>
      <a href={CONTACT.emergency.href} className="mt-auto flex items-start gap-2.5 rounded-2xl border border-[rgba(229,72,77,.22)] bg-white p-3.5 text-[13px] leading-[1.45] text-ink-2">
        <Dot tone="alert" className="mt-[5px]" />
        <span>
          Emergency? Don’t book —
          <br />
          call <strong className="font-semibold text-alert-ink">{CONTACT.emergency.short}</strong>
        </span>
      </a>
    </aside>
  );
}
