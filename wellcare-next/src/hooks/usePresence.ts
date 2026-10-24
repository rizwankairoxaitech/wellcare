'use client';

import { useEffect, useState } from 'react';

/**
 * Keeps an overlay mounted while it animates out, and flips `shown` a frame after mounting so CSS transitions run.
 *   mounted — render the overlay at all
 *   shown   — apply the "open" styles
 */
export function usePresence(open: boolean, exitMs: number) {
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(false);

  // adjust during render (not in an effect) when `open` changes
  if (open && !mounted) setMounted(true);
  if (!open && shown) setShown(false);

  useEffect(() => {
    if (open && mounted) {
      let inner = 0;
      const outer = requestAnimationFrame(() => {
        inner = requestAnimationFrame(() => setShown(true));
      });
      return () => {
        cancelAnimationFrame(outer);
        cancelAnimationFrame(inner);
      };
    }
    if (!open && mounted) {
      const timer = window.setTimeout(() => setMounted(false), exitMs);
      return () => window.clearTimeout(timer);
    }
  }, [open, mounted, exitMs]);

  return { mounted, shown };
}
