// Shared hospital data: contact lines, departments, doctors, the symptom matcher and the prototype slot calendar.
// Doctor names follow the current wellcarehospital.net listing. Portraits are AI-generated placeholders and the
// profile copy is draft text — both must be replaced / approved by the hospital before launch.

export const CONTACT = {
  emergency: { label: '+91 431 274 2111', short: '0431 274 2111', href: 'tel:+914312742111' },
  alternate: { label: '+91 431 274 2112', href: 'tel:+914312742112' },
  whatsapp: { label: '+91 99940 25000', number: '919994025000', href: 'https://wa.me/919994025000' },
  email: 'info@wellcarehospital.net',
  address: ['C-165, 9th A Cross', 'Thillai Nagar, Trichy'],
  maps: 'https://www.google.com/maps/search/?api=1&query=Wellcare+Hospital+C-165+9th+A+Cross+Thillai+Nagar+Trichy',
  insurers: ['ICICI', 'Star Health', 'Reliance', 'HDFC'],
};

const IMG = 'wellcare-hospital-images/wellcare-hospital-doctor-';

export const DEPARTMENTS = [
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

export const MORE_SPECIALTIES = ['Dermatology', 'ENT', 'Urology'];

export const DOCTORS = [
  {
    id: 'op-team', dept: 'op', name: 'OP Medical Team', role: 'Duty physicians', status: 'Every day',
    image: IMG + 'op.webp',
    focus: ['First consultation', 'Chronic-condition reviews', 'Specialist routing'],
    approach: 'Start here when you are not sure. The duty physician listens to the whole story, treats what can be treated today and, when you need a specialist, walks your notes across so you never have to start over.',
  },
  {
    id: 'dr-safa-safriya', dept: 'op', name: 'Dr. Safa Safriya', role: 'General Physician', status: 'Consultant',
    image: IMG + 'safa-safriya.webp',
    focus: ['Fever and everyday illness', 'Diabetes and BP reviews', 'Health check-ups'],
    approach: 'Unhurried first consultations for whatever brought you in. A careful history, a plain explanation of what is going on and treatment you can start today — with a specialist referral only when you truly need one.',
  },
  {
    id: 'dr-kumaresapathy', dept: 'ortho', name: 'Dr. Kumaresapathy', role: 'Orthopaedic surgeon', status: 'On call',
    image: IMG + 'orthopaedics.webp',
    focus: ['Joint and back pain', 'Fractures and trauma', 'Recovery planning'],
    approach: 'Consultations begin with how you move, not just the X-ray. You leave with a clear diagnosis, the options side by side and a recovery plan measured in weeks you can actually picture.',
  },
  {
    id: 'dr-bilal-abbas', dept: 'ortho', name: 'Dr. Bilal Abbas', role: 'Orthopaedic surgeon', status: 'On call',
    image: IMG + 'bilal-abbas.webp',
    focus: ['Sports injuries', 'Sprains and ligament care', 'Mobility review'],
    approach: 'A practical, step-by-step style for injuries and stiffness: find the cause, protect the joint and rebuild strength — with each stage explained before it begins.',
  },
  {
    id: 'dr-sameer-rahman', dept: 'cardio', name: 'Dr. Sameer Rahman', role: 'Cardiologist', status: 'Consultant',
    image: IMG + 'cardiology.webp',
    focus: ['Chest pain and palpitations', 'BP and cholesterol', 'Heart check-ups'],
    approach: 'Starts with your story, not just your ECG. Every test is explained before it is ordered and every result after it arrives — so you leave knowing exactly where your heart stands.',
  },
  {
    id: 'dr-priya-elangovan', dept: 'gynecology', name: 'Dr. Priya Elangovan', role: 'Gynecologist', status: 'Consultant',
    image: IMG + 'gynecology.webp',
    focus: ['Pregnancy care', 'PCOS and hormonal health', 'Preventive screening'],
    approach: 'Private, unhurried conversations where no question is too small. Care plans are built around your stage of life, and family members are welcome when you want them there.',
  },
  {
    id: 'dr-naveen-iqbal', dept: 'neurology', name: 'Dr. Naveen Iqbal', role: 'Neurologist', status: 'Consultant',
    image: IMG + 'neurology.webp',
    focus: ['Headache and migraine', 'Numbness and weakness', 'Seizures and sleep'],
    approach: 'Complex symptoms, untangled one step at a time. Expect a careful examination, a plain-language explanation of what the nerves are signalling and a plan you can follow at home.',
  },
  {
    id: 'dr-sahana-parveen', dept: 'pediatrics', name: 'Dr. Sahana Parveen', role: 'Pediatrician', status: 'Consultant',
    image: IMG + 'pediatrics.webp',
    focus: ['Childhood illness', 'Vaccines and growth', 'Newborn check-ups'],
    approach: 'Consultations at a child’s pace: play first, examine gently, then talk parents through what is happening and exactly what to watch for once you are home.',
  },
  {
    id: 'dr-reema-shiek', dept: 'pediatrics', name: 'Dr. Reema Shiek', role: 'Pediatrician', status: 'Consultant',
    image: IMG + 'reema-shiek.webp',
    focus: ['Fever, coughs and infections', 'Allergies and asthma', 'Growth and nutrition'],
    approach: 'Gentle, playful check-ups that put children at ease. Parents get clear answers, a simple plan for home and an easy way to follow up if anything changes.',
  },
];

export const deptById = (id) => DEPARTMENTS.find((d) => d.id === id);
export const doctorById = (id) => DOCTORS.find((d) => d.id === id);
export const doctorsIn = (deptId) => DOCTORS.filter((d) => d.dept === deptId);

/* ---------- symptom matcher ----------
   Scores each department by keyword hits. Mentions of a child win, because pediatrics sees the whole child. */
export function matchCare(text) {
  const q = ` ${String(text || '').toLowerCase()} `;
  if (q.trim().length < 3) return null;
  let best = null;
  for (const dept of DEPARTMENTS) {
    const hits = dept.keywords.filter((k) => (k.length <= 3 ? new RegExp(`\\b${k}\\b`).test(q) : q.includes(k)));
    if (!hits.length) continue;
    const score = hits.length + (dept.id === 'pediatrics' ? 2 : 0) + (dept.id === 'op' ? -0.5 : 0);
    if (!best || score > best.score) best = { dept, score, hits };
  }
  return best;
}

const URGENT = ['chest pain', 'heart attack', "can't breathe", 'cannot breathe', 'not breathing', 'unconscious', 'fainted', 'collapsed', 'stroke', 'slurred', 'face droop', 'paraly', 'seizure', 'fits', 'heavy bleeding', 'bleeding heavily', 'accident', 'severe burn', 'poison', 'snake', 'suicid', 'overdose', 'choking'];
export const isUrgent = (text) => {
  const q = String(text || '').toLowerCase();
  return URGENT.some((k) => q.includes(k));
};

/* ---------- prototype calendar ----------
   Real availability must come from the hospital system. Sundays are emergency-only here. */
export const SLOT_TIMES = {
  Morning: ['09:30', '10:00', '10:30', '11:00', '11:30', '12:00'],
  Evening: ['16:30', '17:00', '17:30', '18:00', '18:30', '19:00'],
};

export function toISO(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export function nextDays(count = 10) {
  const days = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  cursor.setDate(cursor.getDate() + 1);
  while (days.length < count) {
    days.push({ iso: toISO(cursor), date: new Date(cursor), closed: cursor.getDay() === 0 });
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

/* Deterministic "taken" slots so the calendar feels real without a backend. */
export function slotsFor(iso, doctorId = 'any') {
  return Object.entries(SLOT_TIMES).map(([part, times]) => ({
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

export function formatTime(t) {
  const [h, m] = t.split(':').map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
}

export function formatDay(date, opts = { weekday: 'short', day: 'numeric', month: 'short' }) {
  return new Intl.DateTimeFormat('en-IN', opts).format(date);
}

export function relativeDay(date) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const diff = Math.round((date - today) / 86400000);
  if (diff === 1) return 'Tomorrow';
  return formatDay(date, { weekday: 'long' });
}

/* Avatar markup: the AI portrait, or a gradient monogram when no image exists yet. */
export function avatar(doc, cls = '') {
  return doc.image
    ? `<img class="${cls}" src="${doc.image}" alt="" loading="lazy">`
    : `<span class="${cls} monogram" aria-hidden="true">${doc.initials || doc.name.replace('Dr. ', '')[0]}</span>`;
}
