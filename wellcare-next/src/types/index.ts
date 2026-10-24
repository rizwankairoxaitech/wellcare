export type DepartmentId = 'op' | 'ortho' | 'cardio' | 'gynecology' | 'neurology' | 'pediatrics';

export interface Department {
  id: DepartmentId;
  code: string;
  /** Short label for chips and navigation */
  name: string;
  /** Full display name */
  full: string;
  tagline: string;
  line: string;
  forList: string[];
  emergency: string[];
  keywords: string[];
}

export interface Doctor {
  id: string;
  dept: DepartmentId;
  name: string;
  role: string;
  status: string;
  /** Portrait path under /public; a monogram is shown when missing */
  image?: string;
  focus: string[];
  approach: string;
}

export interface Contact {
  emergency: { label: string; short: string; href: string };
  alternate: { label: string; href: string };
  whatsapp: { label: string; number: string; href: string };
  email: string;
  address: string[];
  maps: string;
  insurers: string[];
}

export type VisitMode = 'in-person' | 'tele';

/** Anything that can open the booking concierge part-way through */
export interface BookingPreset {
  dept?: string;
  doctor?: string;
  query?: string;
  date?: string;
  time?: string;
}

export interface Day {
  iso: string;
  date: Date;
  closed: boolean;
}

export interface SlotGroup {
  part: 'Morning' | 'Evening';
  times: { t: string; taken: boolean }[];
}
