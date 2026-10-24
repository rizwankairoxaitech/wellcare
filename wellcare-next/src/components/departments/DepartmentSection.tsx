import { BookButton } from '@/components/booking/BookButton';
import { Reveal } from '@/components/motion/Reveal';
import { SplitText } from '@/components/motion/SplitText';
import { CheckList } from '@/components/shared/CheckList';
import { Dot } from '@/components/ui/Dot';
import { Icon } from '@/components/ui/Icon';
import { cn, pad2 } from '@/lib/cn';
import { CONTACT, DEPARTMENTS, doctorsIn } from '@/lib/data';
import type { Department } from '@/types';
import { MiniDoctor } from './MiniDoctor';

const blockTitle = 'mb-3.5 flex items-center gap-2.5 font-mono text-[11px] font-medium tracking-[.14em] uppercase';
const block = 'rounded-card p-[clamp(22px,2.6vw,34px)]';

/** One department: what it's for, when to call emergency instead, and its doctors */
export function DepartmentSection({ dept, index }: { dept: Department; index: number }) {
  const docs = doctorsIn(dept.id);
  return (
    <section
      id={dept.id}
      aria-labelledby={`${dept.id}-title`}
      className="grid scroll-mt-[130px] grid-cols-1 gap-[clamp(32px,5vw,80px)] border-b border-line px-(--pad) py-[clamp(72px,9vw,130px)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    >
      <div className="self-start md:sticky md:top-[calc(var(--hdr)+100px)]">
        <p className="font-mono text-xs font-medium tracking-[.1em] text-muted">
          {pad2(index + 1)} / {pad2(DEPARTMENTS.length)} · <span className="text-violet-ink">{dept.code}</span>
        </p>
        <SplitText id={`${dept.id}-title`} lines={[dept.full]} className="my-[18px] text-[clamp(46px,5.8vw,92px)]" />
        <p className="text-[clamp(20px,1.8vw,26px)] leading-[1.25] tracking-[-.02em]">{dept.tagline}</p>
        <p className="mt-3 mb-7 max-w-[40ch] text-muted">{dept.line}</p>
        <BookButton magnetic arrow preset={{ dept: dept.id }}>
          Book {dept.name}
        </BookButton>
      </div>

      <div className="grid gap-4">
        <Reveal className={`${block} bg-soft`}>
          <h3 className={`${blockTitle} text-muted`}>Come to us for</h3>
          <CheckList items={dept.forList} />
        </Reveal>
        <Reveal className={`${block} border border-[rgba(229,72,77,.18)] bg-alert-soft`}>
          <h3 className={`${blockTitle} text-alert-ink`}>
            <Dot tone="alert" /> Call emergency instead if
          </h3>
          <CheckList items={dept.emergency} tone="flag" />
          <a href={CONTACT.emergency.href} className="mt-4 inline-flex items-center gap-2 font-medium text-alert-ink">
            <Icon name="phone" /> Call {CONTACT.emergency.label}
          </a>
        </Reveal>
        <Reveal className={`${block} grid gap-3 bg-soft`}>
          <h3 className={cn(blockTitle, 'mb-0 text-muted')}>Your specialists</h3>
          {docs.map((doc) => (
            <MiniDoctor key={doc.id} doctor={doc} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
