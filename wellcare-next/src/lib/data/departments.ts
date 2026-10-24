import type { Department, DepartmentId } from '@/types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'op', code: 'OP', name: 'General Medicine', full: 'OP & General Medicine',
    tagline: 'The front door to every kind of care.',
    line: 'New symptoms, fevers, sugar and BP reviews, or simply not sure where to start.',
    forList: ['Fever, infections and everyday illness', 'Diabetes, blood pressure and thyroid follow-up', 'Health check-ups and specialist referrals'],
    emergency: ['High fever with confusion or a stiff neck', 'Swelling of the face or throat after a bite, food or medicine', 'Vomiting blood or black stools'],
    keywords: ['fever', 'cold', 'cough', 'flu', 'tired', 'fatigue', 'weak', 'diabetes', 'sugar', 'thyroid', 'infection', 'vomit', 'stomach', 'loose motion', 'diarrh', 'check up', 'checkup', 'check-up', 'general', 'body pain', 'allergy', 'not sure', 'bp', 'blood pressure'],
  },
  {
    id: 'ortho', code: 'OR', name: 'Orthopaedics', full: 'Orthopaedics',
    tagline: 'Move freely again.',
    line: 'Bones, joints, spine and injuries — with a recovery plan you can follow.',
    forList: ['Knee, back, neck and shoulder pain', 'Fractures, sprains and sports injuries', 'Arthritis, mobility and post-surgery recovery'],
    emergency: ['A limb that looks bent or out of place', 'A wound where bone is visible', 'Numbness or weakness after a fall or accident'],
    keywords: ['knee', 'back', 'spine', 'neck', 'shoulder', 'joint', 'bone', 'fracture', 'sprain', 'ankle', 'hip', 'arthritis', 'sport', 'injur', 'wrist', 'elbow', 'muscle', 'fall', 'slipped disc', 'sciatica'],
  },
  {
    id: 'cardio', code: 'CA', name: 'Cardiology', full: 'Cardiology',
    tagline: 'Know exactly where your heart stands.',
    line: 'Chest discomfort, palpitations, BP and cholesterol — explained clearly.',
    forList: ['Chest discomfort, palpitations or breathlessness', 'Blood pressure and cholesterol management', 'ECG, heart check-ups and follow-up'],
    emergency: ['Chest pain spreading to the arm, jaw or back', 'Sudden breathlessness or fainting', 'Chest pain with sweating or nausea'],
    keywords: ['heart', 'chest', 'palpitation', 'cholesterol', 'breathless', 'ecg', 'beat', 'cardiac', 'blood pressure', 'bp', 'hypertension', 'angina'],
  },
  {
    id: 'gynecology', code: 'GY', name: 'Gynecology', full: 'Gynecology',
    tagline: 'Private, respectful women’s health.',
    line: 'Periods, pregnancy, fertility and every stage of women’s health.',
    forList: ['Period problems, PCOS and hormonal health', 'Pregnancy care and antenatal check-ups', 'Fertility, menopause and preventive screening'],
    emergency: ['Heavy bleeding during pregnancy', 'Severe lower-abdominal pain', 'Reduced baby movements late in pregnancy'],
    keywords: ['pregnan', 'period', 'menstru', 'pcod', 'pcos', 'fertil', 'uterus', 'women', 'woman', 'menopause', 'antenatal', 'prenatal', 'baby planning', 'conceiv', 'gyn', 'ovary', 'white discharge'],
  },
  {
    id: 'neurology', code: 'NE', name: 'Neurology', full: 'Neurology',
    tagline: 'Understand the signals.',
    line: 'Headaches, dizziness, numbness, seizures, memory and sleep.',
    forList: ['Migraine, headache and dizziness', 'Numbness, tingling, weakness or tremor', 'Seizures, memory and sleep concerns'],
    emergency: ['Face drooping, arm weakness or slurred speech', 'The worst headache of your life, suddenly', 'A seizure lasting more than five minutes'],
    keywords: ['headache', 'migraine', 'dizz', 'vertigo', 'numb', 'tingl', 'seizure', 'fits', 'memory', 'tremor', 'nerve', 'stroke', 'paraly', 'sleep', 'balance', 'faint', 'brain'],
  },
  {
    id: 'pediatrics', code: 'PE', name: 'Pediatrics', full: 'Pediatrics',
    tagline: 'Care that grows with them.',
    line: 'Newborns to teens — illness, growth, vaccines and reassurance.',
    forList: ['Fever, cough, colds and tummy upsets', 'Vaccinations, growth and nutrition', 'Newborn and developmental check-ups'],
    emergency: ['Difficulty breathing or bluish lips', 'Unusually drowsy, floppy or hard to wake', 'A fit, or no wet nappy for many hours'],
    keywords: ['child', 'kid', 'baby', 'infant', 'toddler', 'son', 'daughter', 'vaccin', 'newborn', 'school', 'boy', 'girl', 'my little'],
  },
];

export const DEPT_IDS = DEPARTMENTS.map((d) => d.id);

export const deptById = (id: string | null | undefined): Department | undefined =>
  DEPARTMENTS.find((d) => d.id === id);

export const isDepartmentId = (id: string | null | undefined): id is DepartmentId =>
  DEPARTMENTS.some((d) => d.id === id);
