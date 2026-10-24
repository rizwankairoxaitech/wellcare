import { cn } from '@/lib/cn';

interface CheckListProps {
  items: string[];
  /** ticks for "come to us for", red flags for "call emergency instead" */
  tone?: 'tick' | 'flag';
  className?: string;
  itemClassName?: string;
}

export function CheckList({ items, tone = 'tick', className, itemClassName }: CheckListProps) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            'relative border-b py-3.5 pl-[34px] text-[17px] tracking-[-.01em] last:border-b-0',
            'before:absolute before:top-4 before:left-0 before:size-5 before:rounded-full',
            tone === 'tick'
              ? 'border-line before:tick-icon'
              : "border-[rgba(229,72,77,.15)] before:grid before:place-items-center before:bg-alert before:font-mono before:text-xs before:font-semibold before:text-white before:content-['!']",
            itemClassName,
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
