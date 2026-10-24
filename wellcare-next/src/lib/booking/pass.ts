// Appointment pass helpers: phone validation, reference code, barcode, WhatsApp message and calendar file.
import { CONTACT } from '@/lib/data';

export function normalisePhone(value: string) {
  let digits = value.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  return digits;
}

export const isValidMobile = (digits: string) => /^[6-9]\d{9}$/.test(digits);

export const maskPhone = (digits: string) => `+91 ${digits.slice(0, 2)}••• ••${digits.slice(-3)}`;

export const makeRef = () => `WC-${(Date.now() % 1679616).toString(36).toUpperCase().padStart(4, '0')}`;

/** Bar positions for a decorative barcode derived from the reference */
export function barcode(seed: string) {
  let x = 0;
  for (const ch of seed) x = (x * 31 + ch.charCodeAt(0)) >>> 0;
  const bars: { x: number; w: number }[] = [];
  let pos = 0;
  for (let i = 0; i < 46; i++) {
    x = (x * 1103515245 + 12345) >>> 0;
    const w = 1 + (x % 3);
    if (i % 2 === 0) bars.push({ x: pos, w });
    pos += w + 1;
  }
  return { bars, width: pos };
}

export function whatsappLink(lines: (string | false | undefined)[]) {
  const text = lines.filter(Boolean).join('\n');
  return `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

interface IcsInput {
  ref: string;
  date: string; // yyyy-mm-dd
  time: string; // HH:MM
  title: string;
}

export function downloadIcs({ ref, date, time, title }: IcsInput) {
  const [h, m] = time.split(':').map(Number);
  const day = date.replace(/-/g, '');
  const pad = (n: number) => String(n).padStart(2, '0');
  const endMin = h * 60 + m + 30;
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Wellcare Hospital//Appointment//EN', 'BEGIN:VEVENT',
    `UID:${ref}@wellcarehospital.net`,
    `DTSTART:${day}T${pad(h)}${pad(m)}00`,
    `DTEND:${day}T${pad(Math.floor(endMin / 60))}${pad(endMin % 60)}00`,
    `SUMMARY:${title}`,
    `LOCATION:Wellcare Hospital\\, ${CONTACT.address.join('\\, ')}`,
    `DESCRIPTION:Request ${ref} – pending confirmation. Desk: ${CONTACT.alternate.label}. Emergency: ${CONTACT.emergency.label}.`,
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: `wellcare-${ref}.ics` });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
