import type { ReactNode } from 'react';
import { NavLink } from '@/components/layout/NavLink';
import { Icon, type IconName } from './Icon';
import { buttonIcon, buttonStyles, type ButtonSize, type ButtonVariant } from './styles';

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  icon?: IconName;
  /** opens in a new tab (WhatsApp, maps) */
  external?: boolean;
  className?: string;
  children: ReactNode;
}

/** A link styled as a button: internal routes use the page transition, tel:/mailto:/https: are plain anchors */
export function ButtonLink({ href, variant, size, block, icon, external, className, children }: ButtonLinkProps) {
  const classes = buttonStyles({ variant, size, block, className });
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} className={buttonIcon} />}
    </>
  );
  if (href.startsWith('/')) {
    return (
      <NavLink href={href} className={classes}>
        {content}
      </NavLink>
    );
  }
  return (
    <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
      {content}
    </a>
  );
}
