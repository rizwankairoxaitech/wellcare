// Symptom matcher: scores each department by keyword hits. Mentions of a child win, because pediatrics sees the
// whole child. Advice only — the urgent check never blocks booking, it just surfaces the emergency number.
import { DEPARTMENTS } from '@/lib/data';
import type { Department } from '@/types';

export interface CareMatch {
  dept: Department;
  score: number;
  hits: string[];
}

export function matchCare(text: string): CareMatch | null {
  const q = ` ${text.toLowerCase()} `;
  if (q.trim().length < 3) return null;
  let best: CareMatch | null = null;
  for (const dept of DEPARTMENTS) {
    const hits = dept.keywords.filter((k) => (k.length <= 3 ? new RegExp(`\\b${k}\\b`).test(q) : q.includes(k)));
    if (!hits.length) continue;
    const score = hits.length + (dept.id === 'pediatrics' ? 2 : 0) + (dept.id === 'op' ? -0.5 : 0);
    if (!best || score > best.score) best = { dept, score, hits };
  }
  return best;
}

const URGENT = [
  'chest pain', 'heart attack', "can't breathe", 'cannot breathe', 'not breathing', 'unconscious', 'fainted',
  'collapsed', 'stroke', 'slurred', 'face droop', 'paraly', 'seizure', 'fits', 'heavy bleeding', 'bleeding heavily',
  'accident', 'severe burn', 'poison', 'snake', 'suicid', 'overdose', 'choking',
];

export const isUrgent = (text: string) => {
  const q = text.toLowerCase();
  return URGENT.some((k) => q.includes(k));
};
