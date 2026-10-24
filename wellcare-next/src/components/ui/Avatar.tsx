import Image from 'next/image';
import { cn } from '@/lib/cn';
import { doctorInitial } from '@/lib/data';
import type { Doctor } from '@/types';

interface AvatarProps {
  doctor: Doctor;
  className?: string;
  /** `fill` covers a positioned parent; a number renders a fixed square */
  size?: 'fill' | number;
  sizes?: string;
  priority?: boolean;
  monogramClassName?: string;
}

/** The doctor's portrait, or a gradient monogram until a photo exists */
export function Avatar({ doctor, className, size = 'fill', sizes = '360px', priority, monogramClassName }: AvatarProps) {
  if (!doctor.image) {
    return (
      <span
        aria-hidden="true"
        className={cn('grid size-full place-items-center bg-dna text-[clamp(64px,8vw,120px)] font-light tracking-[-.04em] text-white', className, monogramClassName)}
      >
        {doctorInitial(doctor)}
      </span>
    );
  }
  if (size === 'fill') {
    return <Image src={doctor.image} alt="" fill sizes={sizes} priority={priority} className={cn('object-cover', className)} />;
  }
  return <Image src={doctor.image} alt="" width={size} height={size} className={cn('object-cover', className)} />;
}
