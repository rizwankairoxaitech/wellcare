'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';
import { usePageTransition } from '@/providers/TransitionProvider';

type NavLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

/** Internal link that plays the page-transition curtain before navigating */
export function NavLink({ href, onNavigate, ...props }: NavLinkProps) {
  const { navigate } = usePageTransition();
  return (
    <Link
      href={href}
      {...props}
      onNavigate={(e) => {
        onNavigate?.(e);
        e.preventDefault();
        navigate(href);
      }}
    />
  );
}
