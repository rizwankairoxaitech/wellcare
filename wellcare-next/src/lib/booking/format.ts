import { fromISO } from './schedule';

export function formatTime(t: string) {
  const [h, m] = t.split(':').map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
}

export function formatDay(date: Date, opts: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' }) {
  return new Intl.DateTimeFormat('en-IN', opts).format(date);
}

export function relativeDay(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.round((date.getTime() - today.getTime()) / 86400000);
  return diff === 1 ? 'Tomorrow' : formatDay(date, { weekday: 'long' });
}

/** "Sat, 25 Oct · 9:30 AM" */
export function whenLabel(iso: string | null, time: string | null) {
  if (!iso) return '';
  return `${formatDay(fromISO(iso))}${time ? ` · ${formatTime(time)}` : ''}`;
}
