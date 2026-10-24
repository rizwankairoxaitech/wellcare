import { cn } from '@/lib/cn';

export function Tags({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)}>
      {items.map((item) => (
        <li key={item} className="rounded-full border border-line bg-white px-3 py-1.5 text-[13px] text-ink-2">
          {item}
        </li>
      ))}
    </ul>
  );
}
