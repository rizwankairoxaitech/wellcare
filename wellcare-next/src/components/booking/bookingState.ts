// Booking concierge state: concern → doctor & time → details → pass.
// Pure reducer so the flow is easy to follow and to test; components only dispatch actions.
import { firstFree, isFullyBooked, slotsFor } from '@/lib/booking/schedule';
import { doctorById, doctorsIn, isDepartmentId } from '@/lib/data';
import type { BookingPreset, DepartmentId, VisitMode } from '@/types';

export type Step = 1 | 2 | 3 | 4;

export interface Details {
  name: string;
  phone: string;
  age: string;
  note: string;
  consent: boolean;
}

export interface Pass {
  ref: string;
  name: string;
  phone: string;
  age: string;
  note: string;
}

export interface BookingState {
  step: Step;
  query: string;
  dept: DepartmentId | null;
  /** a doctor id, or 'any' for first available */
  doctor: string | null;
  mode: VisitMode;
  date: string | null;
  time: string | null;
  who: 'self' | 'other';
  details: Details;
  /** validation message for the current step */
  error: string;
  /** which field failed validation (step 3) */
  invalid: keyof Details | null;
  pass: Pass | null;
}

export type BookingAction =
  | { type: 'query'; value: string }
  | { type: 'chooseDept'; dept: DepartmentId; advance?: boolean }
  | { type: 'chooseDoctor'; doctor: string }
  | { type: 'chooseDate'; date: string }
  | { type: 'chooseTime'; time: string }
  | { type: 'takeEarliest'; date: string; time: string }
  | { type: 'mode'; mode: VisitMode }
  | { type: 'who'; who: 'self' | 'other' }
  | { type: 'detail'; field: keyof Details; value: string | boolean }
  | { type: 'go'; step: Step }
  | { type: 'error'; message: string; invalid?: keyof Details | null }
  | { type: 'confirm'; pass: Pass }
  | { type: 'reset' };

const EMPTY_DETAILS: Details = { name: '', phone: '', age: '', note: '', consent: false };

export const blankState = (): BookingState => ({
  step: 1, query: '', dept: null, doctor: null, mode: 'in-person', date: null, time: null, who: 'self',
  details: EMPTY_DETAILS, error: '', invalid: null, pass: null,
});

/** Default doctor for a department: the only one, or "first available" when there are several */
const defaultDoctor = (dept: DepartmentId) => {
  const docs = doctorsIn(dept);
  return docs.length === 1 ? docs[0].id : 'any';
};

/** Start the flow from a trigger: doctor → its department at step 2; department → step 2; query → step 1 */
export function initFromPreset(preset: BookingPreset = {}): BookingState {
  const base = blankState();
  const doc = doctorById(preset.doctor);
  const dept = doc ? doc.dept : preset.dept;
  if (isDepartmentId(dept)) {
    const doctor = doc ? doc.id : defaultDoctor(dept);
    const date = preset.date ?? firstFree(doctor)?.iso ?? null;
    return { ...base, step: 2, dept, doctor, date, time: preset.time ?? null };
  }
  return { ...base, query: preset.query ?? '' };
}

const timeIsFree = (date: string | null, time: string | null, doctor: string | null) =>
  Boolean(date && time && slotsFor(date, doctor ?? 'any').some((g) => g.times.some((s) => s.t === time && !s.taken)));

export function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'query':
      return { ...state, query: action.value };
    case 'chooseDept': {
      const same = state.dept === action.dept;
      const doctor = same ? state.doctor : defaultDoctor(action.dept);
      const next: BookingState = same
        ? state
        : { ...state, dept: action.dept, doctor, date: firstFree(doctor ?? 'any')?.iso ?? null, time: null };
      return action.advance === false ? next : { ...next, step: 2, error: '' };
    }
    case 'chooseDoctor': {
      const date = state.date && !isFullyBooked(state.date, action.doctor) ? state.date : firstFree(action.doctor)?.iso ?? null;
      const time = timeIsFree(date, state.time, action.doctor) ? state.time : null;
      return { ...state, doctor: action.doctor, date, time };
    }
    case 'chooseDate':
      return { ...state, date: action.date, time: null };
    case 'chooseTime':
      return { ...state, time: action.time, error: '' };
    case 'takeEarliest':
      return { ...state, date: action.date, time: action.time, error: '' };
    case 'mode':
      return { ...state, mode: action.mode };
    case 'who':
      return { ...state, who: action.who };
    case 'detail':
      return {
        ...state,
        details: { ...state.details, [action.field]: action.value },
        ...(state.invalid === action.field ? { invalid: null, error: '' } : {}),
      };
    case 'go':
      return { ...state, step: action.step, error: '', invalid: null };
    case 'error':
      return { ...state, error: action.message, invalid: action.invalid ?? null };
    case 'confirm':
      return { ...state, pass: action.pass, step: 4, error: '', invalid: null };
    case 'reset':
      return blankState();
  }
}
