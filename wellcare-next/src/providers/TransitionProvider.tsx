'use client';

import { usePathname, useRouter } from 'next/navigation';
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { Curtain, type CurtainPhase } from '@/components/layout/Curtain';
import { markNavigated } from '@/lib/motion/intro';
import { ScrollTrigger } from '@/lib/motion/gsap';
import { useSmoothScroll } from './SmoothScrollProvider';

interface TransitionApi {
  /** Sweep the curtain in, then navigate; the new page sweeps it out */
  navigate(href: string): void;
}

const TransitionContext = createContext<TransitionApi | null>(null);

const COVER_MS = 520;
const LEAVE_MS = 900;

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollTo } = useSmoothScroll();
  const [phase, setPhase] = useState<CurtainPhase>('idle');
  const pendingHash = useRef<string | null>(null);
  const covering = useRef(false);
  const firstPath = useRef(pathname);

  const navigate = useCallback(
    (href: string) => {
      const url = new URL(href, window.location.href);
      const samePage = url.pathname === window.location.pathname;
      if (samePage || matchMedia('(prefers-reduced-motion: reduce)').matches) {
        router.push(href);
        return;
      }
      pendingHash.current = url.hash || null;
      covering.current = true;
      setPhase('entering');
      window.setTimeout(() => router.push(url.pathname + url.search), COVER_MS);
    },
    [router],
  );

  // a new route has rendered. For our own navigations: reset scroll (or jump to the hash) under the curtain, then
  // sweep it away. Back/forward navigations keep the scroll position the browser restores.
  useEffect(() => {
    if (pathname === firstPath.current) return;
    firstPath.current = pathname;
    markNavigated();
    const hash = pendingHash.current;
    pendingHash.current = null;
    let leave = 0;
    let done = 0;
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      if (!covering.current) return;
      covering.current = false;
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      scrollTo(target ?? 0, { immediate: true });
      leave = requestAnimationFrame(() => setPhase('leaving'));
      done = window.setTimeout(() => setPhase('idle'), LEAVE_MS);
    });
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(leave);
      window.clearTimeout(done);
    };
  }, [pathname, scrollTo]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <Curtain phase={phase} />
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const api = useContext(TransitionContext);
  if (!api) throw new Error('usePageTransition must be used inside <TransitionProvider>');
  return api;
}
