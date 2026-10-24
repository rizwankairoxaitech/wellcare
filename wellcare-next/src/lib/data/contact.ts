import type { Contact } from '@/types';

export const CONTACT: Contact = {
  emergency: { label: '+91 431 274 2111', short: '0431 274 2111', href: 'tel:+914312742111' },
  alternate: { label: '+91 431 274 2112', href: 'tel:+914312742112' },
  whatsapp: { label: '+91 99940 25000', number: '919994025000', href: 'https://wa.me/919994025000' },
  email: 'info@wellcarehospital.net',
  address: ['C-165, 9th A Cross', 'Thillai Nagar, Trichy'],
  maps: 'https://www.google.com/maps/search/?api=1&query=Wellcare+Hospital+C-165+9th+A+Cross+Thillai+Nagar+Trichy',
  insurers: ['ICICI', 'Star Health', 'Reliance', 'HDFC'],
};

/** Specialties without a dedicated page; booked through General Medicine */
export const MORE_SPECIALTIES = ['Dermatology', 'ENT', 'Urology'];
