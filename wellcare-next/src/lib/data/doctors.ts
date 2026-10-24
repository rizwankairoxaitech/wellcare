// Doctor names follow the current wellcarehospital.net listing. Portraits are AI-generated placeholders and the
// profile copy is draft text — both must be replaced / approved by the hospital before launch.
import type { Doctor } from '@/types';

const img = (name: string) => `/images/doctors/${name}.webp`;

export const DOCTORS: Doctor[] = [
  {
    id: 'op-team', dept: 'op', name: 'OP Medical Team', role: 'Duty physicians', status: 'Every day',
    image: img('op'),
    focus: ['First consultation', 'Chronic-condition reviews', 'Specialist routing'],
    approach: 'Start here when you are not sure. The duty physician listens to the whole story, treats what can be treated today and, when you need a specialist, walks your notes across so you never have to start over.',
  },
  {
    id: 'dr-safa-safriya', dept: 'op', name: 'Dr. Safa Safriya', role: 'General Physician', status: 'Consultant',
    image: img('safa-safriya'),
    focus: ['Fever and everyday illness', 'Diabetes and BP reviews', 'Health check-ups'],
    approach: 'Unhurried first consultations for whatever brought you in. A careful history, a plain explanation of what is going on and treatment you can start today — with a specialist referral only when you truly need one.',
  },
  {
    id: 'dr-kumaresapathy', dept: 'ortho', name: 'Dr. Kumaresapathy', role: 'Orthopaedic surgeon', status: 'On call',
    image: img('orthopaedics'),
    focus: ['Joint and back pain', 'Fractures and trauma', 'Recovery planning'],
    approach: 'Consultations begin with how you move, not just the X-ray. You leave with a clear diagnosis, the options side by side and a recovery plan measured in weeks you can actually picture.',
  },
  {
    id: 'dr-bilal-abbas', dept: 'ortho', name: 'Dr. Bilal Abbas', role: 'Orthopaedic surgeon', status: 'On call',
    image: img('bilal-abbas'),
    focus: ['Sports injuries', 'Sprains and ligament care', 'Mobility review'],
    approach: 'A practical, step-by-step style for injuries and stiffness: find the cause, protect the joint and rebuild strength — with each stage explained before it begins.',
  },
  {
    id: 'dr-sameer-rahman', dept: 'cardio', name: 'Dr. Sameer Rahman', role: 'Cardiologist', status: 'Consultant',
    image: img('cardiology'),
    focus: ['Chest pain and palpitations', 'BP and cholesterol', 'Heart check-ups'],
    approach: 'Starts with your story, not just your ECG. Every test is explained before it is ordered and every result after it arrives — so you leave knowing exactly where your heart stands.',
  },
  {
    id: 'dr-priya-elangovan', dept: 'gynecology', name: 'Dr. Priya Elangovan', role: 'Gynecologist', status: 'Consultant',
    image: img('gynecology'),
    focus: ['Pregnancy care', 'PCOS and hormonal health', 'Preventive screening'],
    approach: 'Private, unhurried conversations where no question is too small. Care plans are built around your stage of life, and family members are welcome when you want them there.',
  },
  {
    id: 'dr-naveen-iqbal', dept: 'neurology', name: 'Dr. Naveen Iqbal', role: 'Neurologist', status: 'Consultant',
    image: img('neurology'),
    focus: ['Headache and migraine', 'Numbness and weakness', 'Seizures and sleep'],
    approach: 'Complex symptoms, untangled one step at a time. Expect a careful examination, a plain-language explanation of what the nerves are signalling and a plan you can follow at home.',
  },
  {
    id: 'dr-sahana-parveen', dept: 'pediatrics', name: 'Dr. Sahana Parveen', role: 'Pediatrician', status: 'Consultant',
    image: img('pediatrics'),
    focus: ['Childhood illness', 'Vaccines and growth', 'Newborn check-ups'],
    approach: 'Consultations at a child’s pace: play first, examine gently, then talk parents through what is happening and exactly what to watch for once you are home.',
  },
  {
    id: 'dr-reema-shiek', dept: 'pediatrics', name: 'Dr. Reema Shiek', role: 'Pediatrician', status: 'Consultant',
    image: img('reema-shiek'),
    focus: ['Fever, coughs and infections', 'Allergies and asthma', 'Growth and nutrition'],
    approach: 'Gentle, playful check-ups that put children at ease. Parents get clear answers, a simple plan for home and an easy way to follow up if anything changes.',
  },
];

export const doctorById = (id: string | null | undefined): Doctor | undefined =>
  DOCTORS.find((d) => d.id === id);

export const doctorsIn = (deptId: string | null | undefined): Doctor[] =>
  DOCTORS.filter((d) => d.dept === deptId);

/** First sentence of the approach — the one-line hook on cards */
export const doctorHook = (doc: Doctor) => doc.approach.split(/(?<=\.)\s/)[0];

export const doctorInitial = (doc: Doctor) => doc.name.replace('Dr. ', '')[0];
