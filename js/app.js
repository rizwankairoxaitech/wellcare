// Wellcare front end: shared chrome (header, menu, footer), intro, smooth scroll, page transitions,
// scroll choreography, the DNA hero with department callouts, the particle "care atlas", morphing hero
// figures, doctor strip + profile drawer, cursor and booking triggers.
// Bundled into js/wellcare.bundle.js by `npm run build` (see package.json).
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { $, $$, splitWords, scramble, magnetic } from './utils.js';
import {
  CONTACT, DEPARTMENTS, MORE_SPECIALTIES, deptById, doctorById, doctorsIn,
  matchCare, nextDays, slotsFor, formatTime, relativeDay, avatar,
} from './data.js';
import { initBookingTriggers } from './booking.js';
import { initDNA } from './dna.js';
import { createMorph } from './morph.js';

gsap.registerPlugin(ScrollTrigger);
const page = document.body.dataset.page || 'home';
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const motion = !reduceMotion;
const DEPT_KEYS = DEPARTMENTS.map((d) => d.id);

const icon = (name) => `<svg class="i" aria-hidden="true"><use href="#i-${name}"/></svg>`;

/* ---------- icon sprite + brand mark ---------- */
const SPRITE = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <linearGradient id="g-swoosh" gradientUnits="userSpaceOnUse" x1="6" y1="0" x2="62" y2="0"><stop offset="0" stop-color="#5a45d6"/><stop offset=".55" stop-color="#d46fd0"/><stop offset="1" stop-color="#5b9dff"/></linearGradient>
    <linearGradient id="g-swoosh-light" gradientUnits="userSpaceOnUse" x1="6" y1="0" x2="62" y2="0"><stop offset="0" stop-color="#a193f7"/><stop offset=".55" stop-color="#e58ee0"/><stop offset="1" stop-color="#7fb6ff"/></linearGradient>
    <linearGradient id="g-dna" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8f7ef3"/><stop offset=".55" stop-color="#e27ad8"/><stop offset="1" stop-color="#6aa6ff"/></linearGradient>
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
    <symbol id="i-arrow-ur" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></symbol>
    <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></symbol>
    <symbol id="i-phone" viewBox="0 0 24 24"><path d="M6.5 3.5h3l1.6 4.4-2 1.3a11 11 0 0 0 5.7 5.7l1.3-2 4.4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z"/></symbol>
    <symbol id="i-whatsapp" viewBox="0 0 24 24"><path d="M20 11.6a8.2 8.2 0 0 1-12.1 7.2L3.5 20l1.2-4.2A8.2 8.2 0 1 1 20 11.6z"/><path d="M9 8.3c.2 3 3.4 6.3 6.6 6.6l1-1.4-1.9-1-.9.7a5 5 0 0 1-2.9-2.9l.7-.9-1-1.9z"/></symbol>
    <symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></symbol>
    <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></symbol>
    <symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/></symbol>
    <symbol id="i-video" viewBox="0 0 24 24"><rect x="3" y="6.5" width="12.5" height="11" rx="2.5"/><path d="m15.5 10.5 5.5-3v9l-5.5-3"/></symbol>
    <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></symbol>
    <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/></symbol>
    <symbol id="i-bolt" viewBox="0 0 24 24"><path d="M13 3 5 13.5h6L10.5 21 19 10h-6z"/></symbol>
    <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
    <symbol id="i-pulse" viewBox="0 0 24 24"><path d="M2 12h4.5l2-5 4 10 2.2-5H22"/></symbol>
  </defs>
</svg>`;

// Official Wellcare mark (three figures with raised arms over a swoosh), redrawn as line art in the DNA palette
const LOGO = (cls = '') => `<svg class="logo ${cls}" viewBox="0 0 64 46" aria-hidden="true">
  <g class="logo__f1"><circle cx="11.5" cy="6.5" r="2.7"/><path d="M2.5 9.5Q9 19.5 20.5 6.5"/><path class="logo__leg" d="M13.2 15.2Q16.4 21.5 17.6 28.5"/></g>
  <path class="logo__swoosh" d="M10.6 15.4Q6.2 25 9.6 34.5Q15.5 44.5 32 41Q47 37.5 62 27"/>
  <g class="logo__f2"><circle cx="25" cy="11" r="2.2"/><path d="M18.8 14Q24.6 21.5 31.6 12.6"/><path class="logo__leg" d="M24.2 18.6Q22.2 24 21.6 29.5M26.4 18.6Q28.6 23.6 29.2 29"/></g>
  <g class="logo__f3"><circle cx="38" cy="7" r="2.5"/><path d="M30.5 10.6Q37 19.5 46.5 6.5"/><path class="logo__leg" d="M37 16.6Q35 23 34.2 30M39.4 16.6Q42.2 22.8 43.2 30"/></g>
</svg>`;
const BRAND = (cls = '') => `<a class="brand ${cls}" href="index.html" aria-label="Wellcare Hospital &amp; Research Institute — home">${LOGO('brand__mark')}<span class="brand__txt"><span class="brand__word">Well<b>care</b></span><span class="brand__sub">Hospital &amp; Research Institute</span></span></a>`;

const CAPTION = {
  cross: 'Emergency & general care', hospital: 'Multispecialty hospital', ambulance: 'Ambulance · 24/7', check: 'Request ready',
  ...Object.fromEntries(DEPARTMENTS.map((d) => [d.id, d.full])),
};

/* ---------- header, menu, footer ---------- */
function mountChrome() {
  document.body.insertAdjacentHTML('afterbegin', SPRITE);

  const links = [['departments', 'departments.html', 'Departments'], ['doctors', 'doctors.html', 'Doctors'], ['hospital', 'hospital.html', 'Hospital']];
  const headerHost = $('[data-site-header]');
  if (headerHost) {
    headerHost.outerHTML = `
      <header class="hdr" data-hdr>
        ${BRAND()}
        <nav class="hdr__nav" aria-label="Primary">
          ${links.map(([id, href, label]) => `<a href="${href}" ${page === id ? 'aria-current="page"' : ''}>${label}</a>`).join('')}
        </nav>
        <div class="hdr__actions">
          <a class="sos" href="${CONTACT.emergency.href}" aria-label="Emergency, open 24/7: call ${CONTACT.emergency.label}">
            <span class="dot dot--alert"></span>${icon('phone').replace('class="i"', 'class="i sos__icon"')}<span class="sos__label">Emergency 24/7</span><span class="sos__num">${CONTACT.emergency.short}</span>
          </a>
          <button class="btn btn--primary btn--sm hdr__book" type="button" data-book>Book<span class="hide-sm">&nbsp;appointment</span></button>
          <button class="burger" type="button" data-menu-open aria-expanded="false" aria-controls="menu">
            <span class="burger__label">Menu</span><span class="burger__lines" aria-hidden="true"><i></i><i></i></span>
          </button>
        </div>
      </header>
      ${menuMarkup()}`;
  }

  const footerHost = $('[data-site-footer]');
  if (footerHost) {
    footerHost.outerHTML = `
      <footer class="ftr">
        <div class="ftr__top">
          <div class="ftr__cta">
            ${BRAND('brand--light')}
            <p class="hud">Compassionate · Comprehensive · Caring</p>
            <h2>Feeling unwell?<br>Let’s find the right care.</h2>
            <button class="btn btn--light" type="button" data-book>Book an appointment ${icon('arrow')}</button>
          </div>
          <div class="ftr__cols">
            <div><p class="ftr__label">Visit</p><address>${CONTACT.address.join('<br>')}</address><a href="${CONTACT.maps}" target="_blank" rel="noopener">Get directions ${icon('arrow-ur')}</a></div>
            <div><p class="ftr__label">Call</p>
              <a href="${CONTACT.emergency.href}"><span>Emergency</span> ${CONTACT.emergency.label}</a>
              <a href="${CONTACT.alternate.href}"><span>Desk</span> ${CONTACT.alternate.label}</a>
              <a href="${CONTACT.whatsapp.href}" target="_blank" rel="noopener"><span>WhatsApp</span> ${CONTACT.whatsapp.label}</a>
              <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>
            </div>
            <div><p class="ftr__label">Explore</p><a href="departments.html">Departments</a><a href="doctors.html">Doctors</a><a href="hospital.html">Hospital</a><a href="appointment.html">Book appointment</a></div>
          </div>
        </div>
        <div class="ftr__word" aria-hidden="true">Well<span>care</span></div>
        <div class="ftr__bottom">
          <span>© 2026 Wellcare Hospital &amp; Research Institute, Trichy</span>
          <span>Insurance accepted: ${CONTACT.insurers.join(' · ')}</span>
        </div>
      </footer>`;
  }
}

function menuMarkup() {
  const pages = [['index.html', 'Home'], ['departments.html', 'Departments'], ['doctors.html', 'Doctors'], ['hospital.html', 'Hospital'], ['appointment.html', 'Book a visit']];
  return `
    <div class="menu" id="menu" role="dialog" aria-modal="true" aria-label="Site menu" hidden data-lenis-prevent>
      <div class="menu__top">${BRAND()}<button class="menu__close" type="button" data-menu-close>Close ${icon('close')}</button></div>
      <div class="menu__grid">
        <nav class="menu__nav" aria-label="Pages">
          ${pages.map(([href, label], i) => `<a class="menu__link" href="${href}"><span class="menu__idx">0${i + 1}</span><span class="menu__txt">${label}</span></a>`).join('')}
        </nav>
        <div class="menu__depts">
          <p class="hud">Departments &amp; doctors</p>
          ${DEPARTMENTS.map((d) => {
            const docs = doctorsIn(d.id);
            return `<a class="mdept" href="departments.html#${d.id}">
              <span class="mdept__faces">${docs.map((doc) => avatar(doc, 'mdept__face')).join('')}</span>
              <span class="mdept__txt"><strong>${d.full}</strong><small>${docs.map((x) => x.name).join(' · ')}</small></span>
              ${icon('arrow')}
            </a>`;
          }).join('')}
          <p class="menu__more">Also at Wellcare: ${MORE_SPECIALTIES.join(' · ')}</p>
        </div>
        <aside class="menu__desk">
          <p class="hud"><span class="dot dot--alert"></span> Care desk · open 24/7</p>
          <a class="desk__sos" href="${CONTACT.emergency.href}"><small>Emergency &amp; ambulance</small><strong>${CONTACT.emergency.label}</strong></a>
          <a class="desk__row" href="${CONTACT.whatsapp.href}" target="_blank" rel="noopener">${icon('whatsapp')}<span><small>WhatsApp</small>${CONTACT.whatsapp.label}</span></a>
          <a class="desk__row" href="${CONTACT.alternate.href}">${icon('phone')}<span><small>Appointments desk</small>${CONTACT.alternate.label}</span></a>
          <a class="desk__row" href="${CONTACT.maps}" target="_blank" rel="noopener">${icon('pin')}<span><small>Visit</small>${CONTACT.address.join(', ')}</span></a>
          <button class="btn btn--light btn--block" type="button" data-book>Book appointment ${icon('arrow')}</button>
        </aside>
      </div>
    </div>`;
}

/* ---------- smooth scroll ---------- */
let lenis = null;
function initLenis() {
  if (!motion) return;
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  window.lenis = lenis;
}

const lock = (on) => {
  document.documentElement.classList.toggle('is-locked', on);
  if (on) lenis?.stop(); else lenis?.start();
};

function initAnchors() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: -96 });
    else target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    history.replaceState(null, '', link.getAttribute('href'));
  });
}

/* ---------- first-visit intro (home only, once per session) ---------- */
let arrivedByCurtain = false;
function initIntro() {
  if (!motion || page !== 'home' || arrivedByCurtain) return 0;
  let seen = false;
  try { seen = sessionStorage.getItem('wc-intro') === '1'; sessionStorage.setItem('wc-intro', '1'); } catch { /* storage blocked */ }
  if (seen) return 0;
  const intro = document.createElement('div');
  intro.className = 'intro';
  intro.setAttribute('aria-hidden', 'true');
  intro.innerHTML = `
    <div class="intro__logo">${LOGO('intro__mark')}<div class="intro__word"><span>Well</span><span class="grad">care</span></div></div>
    <p class="intro__sub">Hospital &amp; Research Institute · Trichy</p>
    <div class="intro__count"><span>0</span>%</div>
    <div class="intro__bar"><i></i></div>`;
  document.body.append(intro);
  lock(true);
  const count = { v: 0 };
  const num = $('.intro__count span', intro);
  const words = $$('.intro__word span', intro);
  const strokes = $$('.intro__mark path', intro);
  strokes.forEach((path) => { const len = path.getTotalLength(); gsap.set(path, { strokeDasharray: len, strokeDashoffset: len }); });
  gsap.timeline({ onComplete: () => { intro.remove(); lock(false); } })
    .to(strokes, { strokeDashoffset: 0, duration: 1.1, stagger: 0.07, ease: 'power2.inOut' }, 0)
    .from($$('.intro__mark circle', intro), { scale: 0, transformOrigin: '50% 50%', duration: 0.6, stagger: 0.1, ease: 'back.out(3)' }, 0.45)
    .from(words, { yPercent: 140, duration: 1, stagger: 0.08, ease: 'expo.out' }, 0.2)
    .from($('.intro__sub', intro), { opacity: 0, y: 12, duration: 0.6 }, 0.45)
    .to(count, { v: 100, duration: 1.5, ease: 'power2.inOut', onUpdate: () => { num.textContent = Math.round(count.v); } }, 0)
    .to($('.intro__bar i', intro), { scaleX: 1, duration: 1.5, ease: 'power2.inOut' }, 0)
    .to(words, { yPercent: -140, duration: 0.6, stagger: 0.05, ease: 'expo.in' }, 1.7)
    .to($$('.intro__sub, .intro__count, .intro__bar, .intro__mark', intro), { opacity: 0, duration: 0.3 }, 1.7)
    .to(intro, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1, ease: 'expo.inOut' }, 2.05);
  return 2.15;
}

/* ---------- page transition curtain ---------- */
function initCurtain() {
  const curtain = document.createElement('div');
  curtain.className = 'curtain';
  curtain.setAttribute('aria-hidden', 'true');
  curtain.innerHTML = `<div class="curtain__panel"></div><div class="curtain__mark">${LOGO('logo--light')}<span class="curtain__word">Well<b>care</b></span></div>`;
  document.body.append(curtain);
  if (!motion) return;

  try { arrivedByCurtain = sessionStorage.getItem('wc-curtain') === '1'; sessionStorage.removeItem('wc-curtain'); } catch { /* storage blocked */ }
  if (arrivedByCurtain) {
    curtain.classList.add('is-covering');
    requestAnimationFrame(() => requestAnimationFrame(() => curtain.classList.replace('is-covering', 'is-leaving')));
    setTimeout(() => curtain.classList.remove('is-leaving'), 900);
  }
  window.addEventListener('pageshow', (e) => { if (e.persisted) curtain.className = 'curtain'; });

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || link.target === '_blank') return;
    const url = new URL(link.href, location.href);
    const samePage = url.pathname === location.pathname;
    if (!/^(https?|file):$/.test(url.protocol) || url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname) || (samePage && url.hash)) return;
    e.preventDefault();
    try { sessionStorage.setItem('wc-curtain', '1'); } catch { /* storage blocked */ }
    curtain.classList.add('is-entering');
    setTimeout(() => { location.href = link.href; }, 520);
  });
}

/* ---------- header + menu ---------- */
function initHeader() {
  const hdr = $('[data-hdr]');
  if (!hdr) return;
  const sync = () => hdr.classList.toggle('is-scrolled', window.scrollY > 24);
  sync();
  window.addEventListener('scroll', sync, { passive: true });
}

function initMenu() {
  const menu = $('#menu');
  const openBtn = $('[data-menu-open]');
  if (!menu || !openBtn) return;
  const closeBtn = $('[data-menu-close]', menu);
  let last = null;
  const setOpen = (open) => {
    if (open) {
      last = document.activeElement;
      menu.hidden = false;
      lock(true);
      requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add('is-open')));
      closeBtn.focus({ preventScroll: true });
    } else {
      menu.classList.remove('is-open');
      lock(false);
      setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 700);
      last?.focus?.({ preventScroll: true });
    }
    openBtn.setAttribute('aria-expanded', String(open));
  };
  openBtn.addEventListener('click', () => setOpen(true));
  closeBtn.addEventListener('click', () => setOpen(false));
  menu.addEventListener('click', (e) => {
    const link = e.target.closest('a[href*="#"]');
    if (link && new URL(link.href).pathname === location.pathname) setOpen(false);
  });
  document.addEventListener('wellcare:book', () => { if (menu.classList.contains('is-open')) setOpen(false); });
  menu.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
    if (e.key !== 'Tab') return;
    const items = $$('a[href], button', menu);
    if (e.shiftKey && document.activeElement === items[0]) { e.preventDefault(); items[items.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === items[items.length - 1]) { e.preventDefault(); items[0].focus(); }
  });
}

/* ---------- reveal choreography ---------- */
function initReveals(delay) {
  if (!motion) return;
  $$('[data-split]').forEach((el) => {
    const words = splitWords(el);
    const intro = el.closest('.hero, .phero, .apt__intro');
    gsap.set(words, { yPercent: 150 });
    const play = () => gsap.to(words, { yPercent: 0, duration: 1.2, ease: 'expo.out', stagger: 0.05, delay: intro ? delay + 0.2 : 0 });
    if (intro) play();
    else ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: play });
  });
  const items = $$('[data-reveal]');
  if (items.length) gsap.set(items, { y: 40, opacity: 0 });
  ScrollTrigger.batch(items, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.08, clearProps: 'transform,opacity' }),
  });
  $$('[data-scramble]').forEach((el) => {
    const intro = el.closest('.hero, .phero, .apt__intro');
    if (intro) gsap.delayedCall(delay + 0.1, () => scramble(el, { duration: 1.1 }));
    else ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => scramble(el, { duration: 1 }) });
  });
  const lead = $$('.hero__lead, .finder, .chips, .hero__cards, .phero__side, .apt__intro > p, .morph');
  if (lead.length) gsap.from(lead, { y: 30, opacity: 0, duration: 1.1, ease: 'power3.out', stagger: 0.08, delay: delay + 0.45, clearProps: 'transform,opacity' });
  if (finePointer) $$('.btn--magnetic, .hdr__book').forEach((el) => magnetic(el, 0.25));
}

/* ---------- home: DNA hero with department callouts pinned to the strands ---------- */
function initHeroDNA(delay) {
  const canvas = $('#dna');
  if (!canvas) return;
  const pointer = { x: 0, y: 0 };
  window.addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
  }, { passive: true });
  const dna = initDNA(canvas, pointer);
  if (motion) {
    gsap.timeline({ delay: delay + 0.1 })
      .to(dna.uniforms.uDraw, { value: 1, duration: 2.2, ease: 'power2.inOut' })
      .to(dna.uniforms.uMelt, { value: 1, duration: 2.8, ease: 'power1.inOut' }, 1.1);
  } else {
    dna.uniforms.uDraw.value = 1;
    dna.uniforms.uMelt.value = 1;
  }

  const host = $('.hero__tags');
  const fade = { appear: motion ? 0 : 1, scroll: 0 };
  const tags = host && window.innerWidth > 900 ? DEPARTMENTS.map((d, i) => {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'dtag';
    el.dataset.book = '';
    el.dataset.dept = d.id;
    el.setAttribute('aria-label', `Book ${d.full}`);
    el.innerHTML = `<i class="dtag__dot"></i><i class="dtag__line"></i><span class="dtag__txt"><small>${String(i + 1).padStart(2, '0')} · ${d.code}</small>${d.name}<em>Book ${icon('arrow')}</em></span>`;
    host.append(el);
    return { el, y: 4.8 - i * 1.2, strand: i % 2 };
  }) : [];
  if (tags.length && motion) gsap.to(fade, { appear: 1, duration: 1.4, delay: delay + 2.8, ease: 'power2.out' });

  ScrollTrigger.create({
    trigger: '.hero', start: 'top top', end: 'bottom top',
    onUpdate: (s) => { dna.setScroll(s.progress * 0.8); fade.scroll = s.progress; },
  });

  const spot = {};
  let prev = performance.now();
  const loop = (now) => {
    dna.tick(now / 1000, Math.min((now - prev) / 1000, 0.05));
    prev = now;
    const visible = fade.appear * Math.max(0, 1 - fade.scroll * 2.6);
    for (const t of tags) {
      const a = visible > 0.01 ? dna.anchor(t.y, t.strand, spot) : null;
      if (!a) { t.el.style.opacity = 0; t.el.style.visibility = 'hidden'; continue; }
      const front = Math.min(1, Math.max(0, (a.facing + 0.15) / 0.6));
      t.el.style.visibility = 'visible';
      t.el.style.transform = `translate3d(${a.x.toFixed(1)}px, ${a.y.toFixed(1)}px, 0)`;
      t.el.style.opacity = (visible * (0.08 + 0.92 * front)).toFixed(3);
      t.el.classList.toggle('is-back', front < 0.5);
    }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

/* ---------- home: hero care finder ---------- */
function initFinder() {
  const finder = $('[data-finder]');
  if (!finder) return;
  const input = $('input', finder);
  const hint = $('[data-finder-hint]', finder);
  const submit = $('[data-finder-submit]', finder);
  const update = () => {
    const text = input.value.trim();
    const match = matchCare(text);
    submit.dataset.query = text;
    if (text.length < 3) { hint.innerHTML = '<span class="dot dot--ok"></span> Type a symptom — we’ll match the department.'; return; }
    const dept = match ? match.dept : deptById('op');
    hint.innerHTML = `<span class="dot dot--ok"></span> ${match ? 'Sounds like' : 'Start with'} <strong>${dept.full}</strong> · ${doctorsIn(dept.id).map((d) => d.name).join(', ')}`;
  };
  input.addEventListener('input', update);
  finder.addEventListener('submit', (e) => { e.preventDefault(); submit.click(); });
  update();
}

/* ---------- home: photo stage expands while scrolling ---------- */
function initStage() {
  const stage = $('.stage');
  if (!stage || !motion) return;
  const st = { trigger: stage, start: 'top 92%', end: 'top 8%', scrub: 0.6 };
  gsap.fromTo($('.stage__frame', stage), { clipPath: 'inset(0% 8% 0% 8% round 36px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', scrollTrigger: st });
  gsap.fromTo($('.stage__img', stage), { scale: 1.22 }, { scale: 1, ease: 'none', scrollTrigger: { ...st, end: 'bottom top' } });
  gsap.from($$('.stage__chip', stage), { y: 30, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: stage, start: 'top 40%', once: true } });
}

/* ---------- home: care atlas — pinned, the particles become each department as you scroll ---------- */
function initAtlas() {
  const atlas = $('[data-atlas]');
  if (!atlas) return;
  const morph = createMorph($('.atlas__gl', atlas), { initial: DEPT_KEYS[0] });
  morph.preload(DEPT_KEYS);
  const slides = $$('.atlas__slide', atlas);
  const navs = $$('[data-atlas-go]', atlas);
  const counter = $('[data-atlas-count]', atlas);
  const bar = $('.atlas__bar i', atlas);
  let active = -1;
  const setActive = (i) => {
    if (i === active) return;
    active = i;
    slides.forEach((s, j) => { s.classList.toggle('is-active', j === i); s.inert = j !== i; });
    navs.forEach((n, j) => n.classList.toggle('is-active', j === i));
    counter.textContent = String(i + 1).padStart(2, '0');
  };
  setActive(0);

  if (!motion) {
    atlas.classList.add('atlas--static');
    slides.forEach((s) => { s.inert = false; });
    navs.forEach((n, i) => n.addEventListener('click', () => { morph.morphTo(DEPT_KEYS[i]); setActive(i); slides.forEach((s) => { s.inert = false; }); }));
    return;
  }
  const last = DEPT_KEYS.length - 1;
  const st = ScrollTrigger.create({
    trigger: atlas,
    start: 'top top',
    end: () => `+=${window.innerHeight * last * 0.85}`,
    pin: true,
    anticipatePin: 1,
    onUpdate: (s) => {
      const f = s.progress * last;
      // hold each organ crisp for most of its stretch; melt into the next one through the middle
      const i = Math.min(Math.floor(f), last - 1);
      const local = Math.min(1, Math.max(0, (f - i - 0.3) / 0.4));
      morph.scrub(i + local * local * (3 - 2 * local), DEPT_KEYS);
      setActive(Math.round(f));
      bar.style.transform = `scaleX(${s.progress})`;
    },
  });
  navs.forEach((n, i) => n.addEventListener('click', () => {
    const y = st.start + ((st.end - st.start) * i) / last + 2;
    if (lenis) lenis.scrollTo(y, { duration: 1.4 }); else window.scrollTo({ top: y, behavior: 'smooth' });
  }));
}

/* ---------- home: wavy care path draws itself ---------- */
function initPath() {
  const path = $('.how__path path.draw');
  if (!path || !motion) return;
  const len = path.getTotalLength();
  gsap.fromTo(path, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '.how', start: 'top 75%', end: 'bottom 60%', scrub: 0.8 } });
}

/* ---------- ticker speeds up with scroll velocity ---------- */
function initTicker() {
  const track = $('.ticker__track');
  if (!track || !motion) return;
  track.style.animation = 'none';
  const loop = gsap.to(track, { xPercent: -50, duration: 48, ease: 'none', repeat: -1 });
  let boost = 0;
  lenis?.on('scroll', ({ velocity }) => { boost = Math.max(boost, Math.min(Math.abs(velocity) * 0.35, 9)); });
  gsap.ticker.add(() => { boost *= 0.93; loop.timeScale(1 + boost); });
}

/* ---------- doctor strip: pinned horizontal scroll on desktop, swipe/drag elsewhere ---------- */
function initStrips() {
  $$('[data-strip]').forEach((wrap) => {
    const track = $('.strip__track', wrap);
    const step = () => ($('.dcard', track)?.offsetWidth || 320) + 20;
    $('[data-strip-prev]', wrap)?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    $('[data-strip-next]', wrap)?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

    const mm = gsap.matchMedia();
    mm.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
      wrap.classList.add('is-hscroll');
      const distance = () => Math.max(0, track.scrollWidth - document.documentElement.clientWidth);
      const tween = gsap.to(track, {
        x: () => -distance(), ease: 'none',
        scrollTrigger: { trigger: wrap, start: 'top top', end: () => `+=${distance()}`, pin: true, scrub: 0.7, invalidateOnRefresh: true, anticipatePin: 1 },
      });
      $$('.dcard', track).forEach((card, i) => gsap.from(card, {
        rotateY: -18, z: -120, opacity: 0.4, transformPerspective: 1200,
        scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left 95%', end: 'left 55%', scrub: true },
      }));
      return () => { wrap.classList.remove('is-hscroll'); gsap.set(track, { clearProps: 'transform' }); };
    });

    if (!finePointer) return;
    let down = false, startX = 0, startLeft = 0, moved = false;
    track.addEventListener('pointerdown', (e) => {
      if (wrap.classList.contains('is-hscroll') || e.pointerType !== 'mouse' || e.target.closest('button, a')) return;
      down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft;
      track.classList.add('is-dragging');
    });
    window.addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      track.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', () => { down = false; track.classList.remove('is-dragging'); });
    track.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  });
}

/* ---------- morphing particle figures in page heroes ----------
   data-morph="cycle"   — walks through data-keys; click for the next one
   data-morph="filter"  — follows the doctor filter chips
   data-morph="booking" — follows the concierge: department shape, then a check mark on the pass */
function initMorphFigures() {
  $$('[data-morph]').forEach((fig) => {
    const mode = fig.dataset.morph;
    const keys = (fig.dataset.keys || '').split(',').filter(Boolean);
    const first = keys[0] || 'cross';
    const morph = createMorph($('canvas', fig), { initial: first });
    morph.preload([...new Set([...keys, ...DEPT_KEYS, 'cross', 'check'])]);
    const label = $('[data-morph-label]', fig);
    const idx = $('[data-morph-idx]', fig);
    const show = (key, i) => {
      if (label) {
        delete label.dataset.final;
        label.textContent = CAPTION[key] || key;
        if (label.tagName === 'A') label.href = `#${key}`;
        gsap.fromTo(label, { opacity: 0.5 }, { opacity: 1, duration: 0.3 });
      }
      if (idx && mode === 'cycle' && i >= 0) idx.textContent = `${String(i + 1).padStart(2, '0')} / ${String(keys.length).padStart(2, '0')}`;
    };
    show(first, 0);

    if (mode === 'cycle' && keys.length > 1) {
      let i = 0, timer = 0;
      const next = () => { i = (i + 1) % keys.length; morph.morphTo(keys[i]); show(keys[i], i); };
      const run = () => { clearInterval(timer); if (motion) timer = setInterval(next, 3400); };
      fig.addEventListener('click', (e) => { if (e.target.closest('a')) return; next(); run(); });
      run();
    } else if (mode === 'filter') {
      document.addEventListener('wellcare:filter', (e) => { const k = e.detail === 'all' ? 'cross' : e.detail; morph.morphTo(k); show(k, -1); });
    } else if (mode === 'booking') {
      document.addEventListener('wellcare:booking', (e) => {
        const { step, dept } = e.detail;
        const k = step === 4 ? 'check' : dept || 'cross';
        if (k !== morph.key) { morph.morphTo(k); show(k, -1); }
      });
    }
  });
}

/* ---------- departments page: sticky rail follows the section in view ---------- */
function initRail() {
  const rail = $('[data-rail]');
  if (!rail) return;
  const links = $$('a', rail);
  const sections = $$('.dept[id]');
  let current = null;
  const sync = () => {
    const line = window.innerHeight * 0.45;
    const active = sections.filter((s) => s.getBoundingClientRect().top < line && s.getBoundingClientRect().bottom > line).pop();
    const id = active ? active.id : null;
    if (id === current) return;
    current = id;
    links.forEach((a) => {
      const on = a.getAttribute('href') === `#${id}`;
      a.classList.toggle('is-active', on);
      if (on) rail.scrollTo({ left: a.offsetLeft - rail.clientWidth / 2 + a.offsetWidth / 2, behavior: 'smooth' });
    });
  };
  sync();
  window.addEventListener('scroll', sync, { passive: true });
}

/* ---------- doctors page: filters ---------- */
function initFilters() {
  const chips = $$('[data-filter]');
  if (!chips.length) return;
  const cards = $$('[data-card-dept]');
  const apply = (filter) => {
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.filter === filter)));
    cards.forEach((card) => {
      const show = filter === 'all' || card.dataset.cardDept === filter;
      card.hidden = !show;
      if (show && motion) gsap.fromTo(card, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
    });
    document.dispatchEvent(new CustomEvent('wellcare:filter', { detail: filter }));
    ScrollTrigger.refresh();
  };
  chips.forEach((chip) => chip.addEventListener('click', () => apply(chip.dataset.filter)));
}

/* ---------- doctor profile drawer ---------- */
function initDrawer() {
  const drawer = document.createElement('div');
  drawer.className = 'drawer';
  drawer.hidden = true;
  drawer.innerHTML = '<div class="drawer__scrim" data-drawer-close></div><article class="drawer__panel" role="dialog" aria-modal="true" aria-labelledby="drawerTitle" data-lenis-prevent tabindex="-1"></article>';
  document.body.append(drawer);
  const panel = $('.drawer__panel', drawer);
  let last = null;

  const openings = (docId) => {
    const found = [];
    for (const day of nextDays(10)) {
      if (day.closed) continue;
      for (const group of slotsFor(day.iso, docId)) {
        const free = group.times.find((s) => !s.taken);
        if (free) found.push({ day, t: free.t });
        if (found.length === 3) return found;
      }
    }
    return found;
  };

  const open = (docId) => {
    const doc = doctorById(docId);
    if (!doc) return;
    const dept = deptById(doc.dept);
    panel.innerHTML = `
      <button class="drawer__close" type="button" data-drawer-close aria-label="Close profile">${icon('close')}</button>
      <div class="drawer__media">${avatar(doc, 'drawer__img')}</div>
      <div class="drawer__body">
        <p class="hud">${dept.full} · <span class="status">${doc.status}</span></p>
        <h2 id="drawerTitle">${doc.name}</h2>
        <p class="drawer__role">${doc.role}</p>
        <p class="drawer__approach">${doc.approach}</p>
        <h3>Focus areas</h3>
        <ul class="tags">${doc.focus.map((f) => `<li>${f}</li>`).join('')}</ul>
        <h3>Consultation</h3>
        <p class="drawer__modes">${icon('pin')} In person, Thillai Nagar <span>·</span> ${icon('video')} Teleconsult on request</p>
        <h3>Next openings</h3>
        <div class="drawer__slots">${openings(doc.id).map(({ day, t }) => `<button type="button" class="slot" data-book data-doctor="${doc.id}" data-date="${day.iso}" data-time="${t}"><small>${relativeDay(day.date)}</small>${formatTime(t)}</button>`).join('')}</div>
        <dl class="drawer__verify"><div><dt>Qualifications</dt><dd>Published after hospital verification</dd></div><div><dt>Experience</dt><dd>Published after hospital verification</dd></div></dl>
        <button class="btn btn--primary btn--block" type="button" data-book data-doctor="${doc.id}">Book with ${doc.name} ${icon('arrow')}</button>
      </div>`;
    last = document.activeElement;
    drawer.hidden = false;
    lock(true);
    requestAnimationFrame(() => requestAnimationFrame(() => drawer.classList.add('is-open')));
    panel.focus({ preventScroll: true });
    panel.scrollTop = 0;
  };
  const close = (restore = true) => {
    if (!drawer.classList.contains('is-open')) return;
    drawer.classList.remove('is-open');
    lock(false);
    setTimeout(() => { if (!drawer.classList.contains('is-open')) drawer.hidden = true; }, 600);
    if (restore) last?.focus?.({ preventScroll: true });
  };

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-profile]');
    if (trigger) { e.preventDefault(); open(trigger.dataset.profile); return; }
    if (e.target.closest('[data-drawer-close]')) close();
  });
  // booking from inside the drawer: hand over to the booking sheet
  drawer.addEventListener('click', (e) => { if (e.target.closest('[data-book]')) close(false); }, true);
  drawer.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
    if (e.key !== 'Tab') return;
    const items = $$('button, a[href]', panel);
    if (e.shiftKey && document.activeElement === items[0]) { e.preventDefault(); items[items.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === items[items.length - 1]) { e.preventDefault(); items[0].focus(); }
  });
  const fromHash = doctorById(location.hash.slice(1));
  if (fromHash && page === 'doctors') setTimeout(() => open(fromHash.id), 400);
}

/* ---------- cursor ring that tells you what a click will do (desktop only, native cursor stays) ---------- */
function initCursor() {
  if (!finePointer || !motion) return;
  const cur = document.createElement('div');
  cur.className = 'cursor';
  cur.setAttribute('aria-hidden', 'true');
  cur.innerHTML = '<span class="cursor__ring"><em></em></span>';
  document.body.append(cur);
  const ring = $('.cursor__ring', cur);
  const label = $('em', cur);
  const xTo = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' });
  const yTo = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });
  window.addEventListener('pointermove', (e) => { xTo(e.clientX); yTo(e.clientY); cur.classList.add('is-on'); }, { passive: true });
  document.documentElement.addEventListener('mouseleave', () => cur.classList.remove('is-on'));
  document.addEventListener('pointerover', (e) => {
    const t = e.target.closest('[data-book], [data-profile], [data-morph="cycle"], a, button, input, textarea, iframe, select');
    let mode = '', text = '';
    if (!t) mode = '';
    else if (t.matches('[data-book]')) { mode = 'label'; text = 'Book'; }
    else if (t.matches('[data-profile]')) { mode = 'label'; text = 'View'; }
    else if (t.matches('[data-morph="cycle"]')) { mode = 'label'; text = 'Next'; }
    else if (t.matches('input, textarea, select, iframe')) mode = 'hide';
    else mode = 'link';
    cur.dataset.mode = mode;
    label.textContent = text;
  });
}

/* ---------- boot ----------
   Building the DNA and particle shapes blocks the main thread for a moment, so every GSAP animation
   waits on a paused global timeline and starts together once that work is done — otherwise the intro
   (and the hero reveals) would jump ahead to catch up and the logo draw-in would be skipped. */
gsap.globalTimeline.pause();
mountChrome();
initLenis();
initCurtain();
const introDelay = initIntro();
initAnchors();
initHeader();
initMenu();
initBookingTriggers({ lenis, lock });
initReveals(introDelay);
initFinder();
initStage();
initAtlas();
initPath();
initTicker();
initStrips();
initMorphFigures();
initRail();
initFilters();
initDrawer();
initCursor();
try { initHeroDNA(introDelay); } catch (error) { console.warn('[wellcare] DNA visual unavailable', error); }
requestAnimationFrame(() => requestAnimationFrame(() => gsap.globalTimeline.resume()));
window.addEventListener('load', () => ScrollTrigger.refresh());
