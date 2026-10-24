'use client';

import { useCallback, useSyncExternalStore } from 'react';

/** Live result of a CSS media query (false during server rendering) */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (notify: () => void) => {
      const mq = matchMedia(query);
      mq.addEventListener('change', notify);
      return () => mq.removeEventListener('change', notify);
    },
    [query],
  );
  return useSyncExternalStore(subscribe, () => matchMedia(query).matches, () => false);
}

export const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');

export const useFinePointer = () => useMediaQuery('(hover: hover) and (pointer: fine)');
