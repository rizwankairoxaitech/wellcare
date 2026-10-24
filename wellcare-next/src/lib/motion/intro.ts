// The first-visit intro plays once per browser session, only when the visit starts on the home page and the
// visitor allows motion. The decision is made by an inline script in <head> before first paint (see
// MOTION_BOOT_SCRIPT), which marks <html data-intro="1">. Hero animations read it to wait for the intro.
export const INTRO_DURATION = 2.15;

/** Runs before first paint: flags motion (so animated text can start hidden) and decides the intro. */
export const MOTION_BOOT_SCRIPT = `(function(){try{var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion-ok');if(location.pathname==='/'&&sessionStorage.getItem('wc-intro')!=='1'){sessionStorage.setItem('wc-intro','1');d.setAttribute('data-intro','1')}}catch(e){}})()`;

export const shouldPlayIntro = () =>
  typeof document !== 'undefined' && document.documentElement.dataset.intro === '1' && location.pathname === '/';

/** Seconds the hero should wait before animating in */
export const introDelay = () => (shouldPlayIntro() ? INTRO_DURATION : 0);

/** The intro finished (or the visitor navigated): never delay again on this page load */
export function endIntro() {
  delete document.documentElement.dataset.intro;
}

export const markNavigated = endIntro;
