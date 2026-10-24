import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Join class names and let later Tailwind utilities override earlier ones */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const pad2 = (n: number) => String(n).padStart(2, '0');
