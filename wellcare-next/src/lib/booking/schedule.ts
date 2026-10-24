// Prototype calendar. Real availability must come from the hospital system — replace slotsFor / firstFree with
// calls to the scheduling API. Sundays are emergency-only here.
import type { Day, SlotGroup } from '@/types';

export const SLOT_TIMES: Record<SlotGroup['part'], string[]> = {
  Morning: ['09:30', '10:00', '10:30', '11:00', '11:30', '12:00'],
  Evening: ['16:30', '17:00', '17:30', '18:00', '18:30', '19:00'],
};

export function toISO(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export function fromISO(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/** The next `count` days, starting tomorrow */
export function nextDays(count = 10): Day[] {
  const days: Day[] = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  cursor.setDate(cursor.getDate() + 1);
  while (days.length < count) {
    days.push({ iso: toISO(cursor), date: new Date(cursor), closed: cursor.getDay() === 0 });
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Deterministic "taken" slots so the calendar feels real without a backend */
export function slotsFor(iso: string, doctorId = 'any'): SlotGroup[] {
  return (Object.entries(SLOT_TIMES) as [SlotGroup['part'], string[]][]).map(([part, times]) => ({
    part,
    times: times.map((t) => ({ t, taken: doctorId !== 'any' && hash(`${iso}${doctorId}${t}`) % 10 < 3 })),
  }));
}

export function firstFree(doctorId = 'any') {
  for (const day of nextDays(14)) {
    if (day.closed) continue;
    for (const group of slotsFor(day.iso, doctorId)) {
      const free = group.times.find((s) => !s.taken);
      if (free) return { iso: day.iso, date: day.date, time: free.t };
    }
  }
  return null;
}

/** The next few open slots for a doctor (profile drawer) */
export function nextOpenings(doctorId: string, limit = 3) {
  const found: { day: Day; time: string }[] = [];
  for (const day of nextDays(10)) {
    if (day.closed) continue;
    for (const group of slotsFor(day.iso, doctorId)) {
      const free = group.times.find((s) => !s.taken);
      if (free) found.push({ day, time: free.t });
      if (found.length === limit) return found;
    }
  }
  return found;
}

export const isFullyBooked = (iso: string, doctorId: string) =>
  slotsFor(iso, doctorId).every((g) => g.times.every((s) => s.taken));
