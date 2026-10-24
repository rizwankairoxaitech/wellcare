'use client';

import type { ReactNode } from 'react';
import { SmoothScrollProvider } from './SmoothScrollProvider';
import { TransitionProvider } from './TransitionProvider';
import { UIProvider } from './UIProvider';

/** Every client-side context the site needs, in dependency order */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <TransitionProvider>
        <UIProvider>{children}</UIProvider>
      </TransitionProvider>
    </SmoothScrollProvider>
  );
}
