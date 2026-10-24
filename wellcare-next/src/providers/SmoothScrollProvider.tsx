'use client';

import Lenis from 'lenis';
import { createContext, useContext, useEffect, useMemo, useRef, type ReactNode } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';

type ScrollTarget = number | string | HTMLElement;
interface ScrollOptions {
  offset?: number;
  duration?: number;
  immediate?: boolean;
}

interface SmoothScrollApi {
  /** Stack-safe scroll lock for overlays (menu, drawer, booking sheet) */
  lock(on: boolean): void;
  /** Scroll to a position or element; elements stop at their scroll-margin-top */
  scrollTo(target: ScrollTarget, options?: ScrollOptions): void;
  /** Subscribe to scroll velocity (px per frame); returns an unsubscribe function */
  onVelocity(cb: (velocity: number) => void): () => void;
}

const SmoothScrollContext = createContext<SmoothScrollApi | null>(null);

/** Page offset an element scrolls to, measured from the real scroll position */
function topOf(target: ScrollTarget): number | null {
  if (typeof target === 'number') return target;
  const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;
  if (!el) return null;
  const margin = Number.parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  return el.getBoundingClientRect().top + window.scrollY - margin;
}

/** Lenis smooth scrolling driven by GSAP's ticker so ScrollTrigger stays in sync. Off when motion is reduced. */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const locks = useRef(0);
  const listeners = useRef(new Set<(velocity: number) => void>());

  const api = useMemo<SmoothScrollApi>(
    () => ({
      lock(on) {
        locks.current = Math.max(0, locks.current + (on ? 1 : -1));
        const locked = locks.current > 0;
        document.documentElement.classList.toggle('is-locked', locked);
        if (locked) lenisRef.current?.stop();
        else lenisRef.current?.start();
      },
      scrollTo(target, { offset = 0, duration, immediate = false } = {}) {
        const top = topOf(target);
        if (top === null) return;
        const lenis = lenisRef.current;
        if (lenis) {
          // sync first: Lenis may not have seen a native scroll (keyboard focus, browser find…) yet
          lenis.scrollTo(window.scrollY, { immediate: true, force: true });
          lenis.scrollTo(top + offset, { duration, immediate, force: true });
          return;
        }
        const smooth = !immediate && !matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: top + offset, behavior: smooth ? 'smooth' : 'auto' });
      },
      onVelocity(cb) {
        listeners.current.add(cb);
        return () => {
          listeners.current.delete(cb);
        };
      },
    }),
    [],
  );

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    lenis.on('scroll', (l: Lenis) => listeners.current.forEach((cb) => cb(l.velocity)));
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    if (locks.current > 0) lenis.stop();

    // in-page anchors (#section) glide instead of jumping
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href*="#"]');
      if (!(link instanceof HTMLAnchorElement)) return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      e.preventDefault();
      api.scrollTo(target);
      history.replaceState(history.state, '', url.hash);
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [api]);

  return <SmoothScrollContext.Provider value={api}>{children}</SmoothScrollContext.Provider>;
}

export function useSmoothScroll() {
  const api = useContext(SmoothScrollContext);
  if (!api) throw new Error('useSmoothScroll must be used inside <SmoothScrollProvider>');
  return api;
}

/** Locks page scroll while `active` is true */
export function useScrollLock(active: boolean) {
  const { lock } = useSmoothScroll();
  useEffect(() => {
    if (!active) return;
    lock(true);
    return () => lock(false);
  }, [active, lock]);
}
