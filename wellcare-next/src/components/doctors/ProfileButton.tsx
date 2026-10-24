'use client';

import type { ReactNode } from 'react';
import { useProfile } from '@/providers/UIProvider';

interface ProfileButtonProps {
  doctorId: string;
  className?: string;
  'aria-label'?: string;
  children: ReactNode;
}

/** Opens a doctor's profile drawer */
export function ProfileButton({ doctorId, className, children, ...aria }: ProfileButtonProps) {
  const { openProfile } = useProfile();
  return (
    <button type="button" data-profile={doctorId} className={className} onClick={() => openProfile(doctorId)} {...aria}>
      {children}
    </button>
  );
}
