'use client';

import { useRef, type HTMLAttributes } from 'react';
import { useReveal, type RevealMode } from '@/hooks/useReveal';

type Tag = 'div' | 'li' | 'article' | 'aside' | 'figure' | 'p';

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: Tag;
  mode?: RevealMode;
}

/** A block that fades up into place (on scroll, or with the hero) */
export function Reveal({ as = 'div', mode = 'scroll', children, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, mode);
  // every allowed tag is a plain HTMLElement, so typing it as a div is enough for the ref
  const Element = as as 'div';
  return (
    <Element ref={ref} {...(mode === 'lead' ? { 'data-lead': true } : { 'data-reveal': true })} {...props}>
      {children}
    </Element>
  );
}
