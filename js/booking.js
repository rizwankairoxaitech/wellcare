// Appointment concierge: describe the concern → doctor & time → two details → appointment pass.
// The same component renders inline on appointment.html and inside the slide-in sheet that every
// [data-book] trigger opens (data-dept / data-doctor / data-query / data-date / data-time preset it).
// Nothing is sent anywhere: the final step is a prototype until the hospital booking API exists.
import {
  CONTACT, DEPARTMENTS, deptById, doctorById, doctorsIn, matchCare, isUrgent,
  nextDays, slotsFor, firstFree, formatTime, formatDay, relativeDay, avatar,
} from './data.js';

let uid = 0;
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const icon = (name) => `<svg class="i" aria-hidden="true"><use href="#i-${name}"/></svg>`;

export function createBooking(host, { inline = false, onClose } = {}) {
  const id = `bk${++uid}`;
  let state = blank();
  host.innerHTML = template(id, inline);
  const root = host.querySelector('.bk');
  const $ = (sel) => root.querySelector(sel);
  const $$ = (sel) => [...root.querySelectorAll(sel)];
  const queryInput = $('[data-query]');
  const form = $('[data-details]');

  function blank() {
    return { step: 1, query: '', dept: null, doctor: null, mode: 'in-person', date: null, time: null, who: 'self', ref: '' };
  }

  /* ---------- step 1: concern → department ---------- */
  function runMatch() {
    state.query = queryInput.value;
    const urgent = isUrgent(state.query);
    $('[data-urgent]').hidden = !urgent;
    const box = $('[data-match]');
    const text = state.query.trim();
    if (text.length < 3) { box.innerHTML = ''; return; }
    const match = matchCare(text);
    const dept = match ? match.dept : deptById('op');
    const names = doctorsIn(dept.id).map((d) => d.name).join(' · ');
    box.innerHTML = `
      <div class="match">
        <span class="match__code">${dept.code}</span>
        <div class="match__txt"><small>${match ? 'Sounds like' : 'Best place to start'}</small><strong>${dept.full}</strong><span>${esc(names)}</span></div>
        <button type="button" class="btn btn--primary btn--sm" data-go="${dept.id}">Continue ${icon('arrow')}</button>
      </div>`;
    markDept(dept.id, true);
  }

  function markDept(deptId, suggested = false) {
    $$('[data-dept]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.dept === deptId));
      b.classList.toggle('is-suggested', suggested && b.dataset.dept === deptId);
    });
  }

  function chooseDept(deptId, advance = true) {
    if (!deptById(deptId)) return;
    if (state.dept !== deptId) {
      state.dept = deptId;
      const docs = doctorsIn(deptId);
      state.doctor = docs.length === 1 ? docs[0].id : 'any';
      state.date = null;
      state.time = null;
    }
    markDept(deptId);
    sync();
    if (advance) go(2);
  }

  /* ---------- step 2: doctor, visit type, date, time ---------- */
  function renderSchedule() {
    const dept = deptById(state.dept);
    if (!dept) return;
    $('[data-dept-name]').textContent = dept.full;
    const docs = doctorsIn(dept.id);
    const cards = docs.length > 1
      ? [`<button type="button" class="bk-doc" data-doc="any"><span class="bk-doc__any">${icon('bolt')}</span><span class="bk-doc__txt"><strong>First available</strong><small>Any ${dept.name} doctor</small></span><span class="bk-doc__tick">${icon('check')}</span></button>`]
      : [];
    docs.forEach((doc) => cards.push(`
      <button type="button" class="bk-doc" data-doc="${doc.id}">
        ${avatar(doc, 'bk-doc__img')}
        <span class="bk-doc__txt"><strong>${doc.name}</strong><small>${doc.role} · ${doc.status}</small></span>
        <span class="bk-doc__tick">${icon('check')}</span>
      </button>`));
    $('[data-docs]').innerHTML = cards.join('');
    $$('[data-doc]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.doc === state.doctor)));

    const fastest = firstFree(state.doctor);
    if (!state.date && fastest) state.date = fastest.iso;
    $('[data-quick]').innerHTML = fastest ? `
      <span class="dot dot--ok"></span>
      <span>Earliest opening <strong>${relativeDay(fastest.date)}, ${formatTime(fastest.time)}</strong></span>
      <button type="button" class="link" data-fast="${fastest.iso}|${fastest.time}">Take it</button>` : '';

    $('[data-dates]').innerHTML = nextDays(12).map((day) => `
      <button type="button" class="bk-date" data-date="${day.iso}" ${day.closed ? 'disabled title="Sunday — emergency only"' : ''} aria-pressed="${day.iso === state.date}">
        <small>${formatDay(day.date, { weekday: 'short' })}</small>
        <strong>${day.date.getDate()}</strong>
        <em>${day.closed ? 'ER only' : formatDay(day.date, { month: 'short' })}</em>
      </button>`).join('');

    const groups = state.date ? slotsFor(state.date, state.doctor) : [];
    if (state.time && groups.some((g) => g.times.some((s) => s.t === state.time && s.taken))) state.time = null;
    $('[data-times]').innerHTML = groups.map((g) => `
      <div class="bk-times__group">
        <p class="bk__label">${g.part}</p>
        <div class="bk-times__row">
          ${g.times.map((s) => `<button type="button" class="bk-time" data-time="${s.t}" ${s.taken ? 'disabled aria-label="' + formatTime(s.t) + ' — booked"' : ''} aria-pressed="${s.t === state.time}">${formatTime(s.t)}</button>`).join('')}
        </div>
      </div>`).join('');
    $$('[data-mode]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === state.mode)));
  }

  /* ---------- summary + footer ---------- */
  function whenLabel() {
    if (!state.date) return '';
    const [y, m, d] = state.date.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    return `${formatDay(date)}${state.time ? ' · ' + formatTime(state.time) : ''}`;
  }

  function doctorLabel() {
    if (!state.doctor) return '';
    if (state.doctor === 'any') return 'First available';
    return doctorById(state.doctor)?.name || '';
  }

  function sync() {
    const dept = deptById(state.dept);
    const set = (key, value) => {
      const row = $(`[data-sum="${key}"]`);
      row.querySelector('dd').textContent = value || '—';
      row.classList.toggle('is-set', Boolean(value));
    };
    set('dept', dept?.full);
    set('doctor', doctorLabel());
    set('when', whenLabel());
    set('mode', state.mode === 'tele' ? 'Teleconsult' : 'In person');
    const doc = state.doctor && state.doctor !== 'any' ? doctorById(state.doctor) : null;
    $('[data-sumdoc]').innerHTML = doc
      ? avatar(doc, 'bk-sumdoc__img')
      : `<span class="bk-sumdoc__empty">${dept ? dept.code : '+'}</span>`;
    $('[data-mini]').textContent = [dept?.name, doctorLabel(), whenLabel()].filter(Boolean).join(' · ');
    const next = $('[data-next]');
    next.disabled = state.step === 1 && !state.dept;
    document.dispatchEvent(new CustomEvent('wellcare:booking', { detail: { step: state.step, dept: state.dept, inline } }));
  }

  function go(step) {
    state.step = step;
    root.dataset.step = step;
    $$('[data-panel]').forEach((p) => { p.hidden = Number(p.dataset.panel) !== step; });
    $$('.bk__steps li').forEach((li) => {
      const n = Number(li.dataset.s);
      li.classList.toggle('is-done', n < step);
      if (n === step) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
    });
    if (step === 2) renderSchedule();
    $('[data-back]').hidden = step === 1;
    $('[data-next]').innerHTML = step === 3 ? `Request appointment ${icon('arrow')}` : `Continue ${icon('arrow')}`;
    $('[data-err]').textContent = '';
    form.querySelector('[data-err3]').textContent = '';
    sync();
    const scroller = inline ? null : root.closest('[data-bk-scroll]');
    if (scroller) scroller.scrollTop = 0;
    else if (root.getBoundingClientRect().top < 0) root.scrollIntoView({ block: 'start' });
    const heading = $(`[data-panel="${step}"] .bk__q`);
    if (heading) heading.focus({ preventScroll: true });
  }

  /* ---------- step 3 validation + pass ---------- */
  const normalisePhone = (value) => {
    let digits = value.replace(/\D/g, '');
    if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
    if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
    return digits;
  };

  function validateDetails() {
    const name = form.elements.name.value.trim();
    const phone = normalisePhone(form.elements.phone.value);
    const fields = [
      [form.elements.name, name.length >= 2, 'Please enter the patient’s name.'],
      [form.elements.phone, /^[6-9]\d{9}$/.test(phone), 'Please enter a 10-digit mobile number.'],
      [form.elements.consent, form.elements.consent.checked, 'Please allow the desk to contact you to confirm.'],
    ];
    const bad = fields.find(([, ok]) => !ok);
    fields.forEach(([el, ok]) => el.setAttribute('aria-invalid', String(!ok && el === bad?.[0])));
    form.querySelector('[data-err3]').textContent = bad ? bad[2] : '';
    if (bad) { bad[0].focus(); return null; }
    return { name, phone, age: form.elements.age.value.trim(), note: form.elements.note.value.trim() };
  }

  function barcode(seed) {
    let x = 0;
    for (const ch of seed) x = (x * 31 + ch.charCodeAt(0)) >>> 0;
    let bars = '', pos = 0;
    for (let i = 0; i < 46; i++) {
      x = (x * 1103515245 + 12345) >>> 0;
      const w = 1 + (x % 3);
      if (i % 2 === 0) bars += `<rect x="${pos}" y="0" width="${w}" height="40"/>`;
      pos += w + 1;
    }
    return `<svg class="pass__code" viewBox="0 0 ${pos} 40" preserveAspectRatio="none" aria-hidden="true">${bars}</svg>`;
  }

  function renderPass(details) {
    const dept = deptById(state.dept);
    const doc = state.doctor !== 'any' ? doctorById(state.doctor) : null;
    const first = details.name.split(/\s+/)[0];
    const masked = `+91 ${details.phone.slice(0, 2)}••• ••${details.phone.slice(-3)}`;
    const mode = state.mode === 'tele' ? 'Teleconsult' : 'In person';
    state.ref = `WC-${(Date.now() % 1679616).toString(36).toUpperCase().padStart(4, '0')}`;
    const message = [
      'Hello Wellcare, I would like to confirm an appointment request.',
      `Ref: ${state.ref}`,
      `Patient: ${details.name}${details.age ? ` (${details.age})` : ''}`,
      `Department: ${dept.full}`,
      `Doctor: ${doctorLabel()}`,
      `Preferred: ${whenLabel()} (${mode})`,
      details.note ? `Note: ${details.note}` : '',
    ].filter(Boolean).join('\n');
    $('[data-pass]').innerHTML = `
      <div class="pass">
        <div class="pass__head"><span class="hud"><span class="dot dot--ok"></span> Request ready · pending confirmation</span><span class="pass__ref">${state.ref}</span></div>
        <h3 class="bk__q" tabindex="-1">You’re almost in, ${esc(first)}.</h3>
        <p class="bk__sub">Send the request on WhatsApp or call the desk — the team will confirm the exact time on ${masked}.</p>
        <div class="pass__card">
          <div class="pass__doc">
            ${doc ? avatar(doc, 'pass__img') : `<span class="pass__img monogram">${dept.code}</span>`}
            <div><small>${dept.full}</small><strong>${doc ? doc.name : 'First available doctor'}</strong></div>
          </div>
          <dl class="pass__grid">
            <div><dt>Date</dt><dd>${whenLabel().split(' · ')[0]}</dd></div>
            <div><dt>Time</dt><dd>${formatTime(state.time)}</dd></div>
            <div><dt>Visit</dt><dd>${mode}</dd></div>
            <div><dt>Patient</dt><dd>${esc(details.name)}</dd></div>
          </dl>
          <div class="pass__foot">${barcode(state.ref)}<span>${state.ref}</span></div>
        </div>
        <div class="pass__actions">
          <a class="btn btn--primary" href="https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener">${icon('whatsapp')} Send on WhatsApp</a>
          <button type="button" class="btn btn--ghost" data-ics>${icon('calendar')} Add to calendar</button>
          <a class="btn btn--ghost" href="${CONTACT.alternate.href}">${icon('phone')} Call the desk</a>
        </div>
        <p class="bk__note">Prototype: this page has not sent anything to the hospital. The live version will submit straight to the Wellcare booking system.</p>
        <button type="button" class="link" data-again>Book another appointment</button>
      </div>`;
  }

  function downloadICS() {
    const dept = deptById(state.dept);
    const [h, m] = state.time.split(':').map(Number);
    const start = `${state.date.replace(/-/g, '')}T${String(h).padStart(2, '0')}${String(m).padStart(2, '0')}00`;
    const endMin = h * 60 + m + 30;
    const end = `${state.date.replace(/-/g, '')}T${String(Math.floor(endMin / 60)).padStart(2, '0')}${String(endMin % 60).padStart(2, '0')}00`;
    const ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Wellcare Hospital//Appointment//EN', 'BEGIN:VEVENT',
      `UID:${state.ref}@wellcarehospital.net`, `DTSTART:${start}`, `DTEND:${end}`,
      `SUMMARY:Wellcare – ${dept.full} (${doctorLabel()})`,
      `LOCATION:Wellcare Hospital\\, ${CONTACT.address.join('\\, ')}`,
      `DESCRIPTION:Request ${state.ref} – pending confirmation. Desk: ${CONTACT.alternate.label}. Emergency: ${CONTACT.emergency.label}.`,
      'END:VEVENT', 'END:VCALENDAR',
    ].join('\r\n');
    const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: `wellcare-${state.ref}.ics` });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  /* ---------- events ---------- */
  let matchTimer;
  queryInput.addEventListener('input', () => { clearTimeout(matchTimer); matchTimer = setTimeout(runMatch, 120); });
  queryInput.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    runMatch();
    const go2 = $('[data-go]');
    if (go2) chooseDept(go2.dataset.go);
  });

  root.addEventListener('click', (e) => {
    const t = e.target.closest('button, a');
    if (!t || !root.contains(t)) return;
    if (t.dataset.dept) chooseDept(t.dataset.dept, true);
    else if (t.dataset.go) chooseDept(t.dataset.go, true);
    else if (t.dataset.doc) {
      state.doctor = t.dataset.doc;
      const free = firstFree(state.doctor);
      if (state.date && slotsFor(state.date, state.doctor).every((g) => g.times.every((s) => s.taken))) state.date = free?.iso || null;
      renderSchedule(); sync();
    } else if (t.dataset.fast) {
      [state.date, state.time] = t.dataset.fast.split('|');
      $('[data-err]').textContent = '';
      renderSchedule(); sync();
      $('[data-next]').focus();
    } else if (t.dataset.date) { state.date = t.dataset.date; state.time = null; renderSchedule(); sync(); }
    else if (t.dataset.time) { state.time = t.dataset.time; $('[data-err]').textContent = ''; renderSchedule(); sync(); $(`[data-time="${state.time}"]`)?.focus(); }
    else if (t.dataset.mode) { state.mode = t.dataset.mode; renderSchedule(); sync(); }
    else if (t.dataset.who) {
      state.who = t.dataset.who;
      $$('[data-who]').forEach((b) => b.setAttribute('aria-pressed', String(b === t)));
      form.querySelector('[data-name-label]').textContent = state.who === 'self' ? 'Your full name' : 'Patient’s full name';
    } else if (t.hasAttribute('data-back')) go(Math.max(1, state.step - 1));
    else if (t.hasAttribute('data-next')) next();
    else if (t.hasAttribute('data-ics')) downloadICS();
    else if (t.hasAttribute('data-again')) reset();
    else if (t.hasAttribute('data-bk-close')) onClose?.();
  });

  form.addEventListener('submit', (e) => { e.preventDefault(); next(); });

  function next() {
    if (state.step === 1) {
      if (!state.dept) { runMatch(); const g = $('[data-go]'); if (g) chooseDept(g.dataset.go); return; }
      go(2);
    } else if (state.step === 2) {
      if (!state.date || !state.time) {
        $('[data-err]').textContent = state.date ? 'Please pick a time.' : 'Please pick a date and a time.';
        ($('.bk-time:not([disabled])') || $('.bk-date:not([disabled])'))?.focus();
        return;
      }
      go(3);
    } else if (state.step === 3) {
      const details = validateDetails();
      if (!details) return;
      renderPass(details);
      go(4);
    }
  }

  function reset() {
    state = blank();
    queryInput.value = '';
    form.reset();
    $('[data-match]').innerHTML = '';
    $('[data-urgent]').hidden = true;
    markDept(null);
    go(1);
  }

  /* Preset from a trigger: doctor → department → step 2; query → step 1 with the suggestion shown. */
  function preset({ dept, doctor, query, date, time } = {}) {
    state = blank();
    queryInput.value = '';
    form.reset();
    $('[data-match]').innerHTML = '';
    $('[data-urgent]').hidden = true;
    markDept(null);
    const doc = doctorById(doctor);
    const deptId = doc ? doc.dept : dept;
    if (deptById(deptId)) {
      chooseDept(deptId, false);
      if (doc) state.doctor = doc.id;
      if (date) state.date = date;
      if (time) state.time = time;
      go(2);
      return;
    }
    if (query) { queryInput.value = query; runMatch(); }
    go(1);
    if (!query) queryInput.focus({ preventScroll: true });
  }

  go(1);
  return { root, preset, reset, focus: () => queryInput.focus({ preventScroll: true }) };
}

function template(id, inline) {
  return `
  <div class="bk ${inline ? 'bk--inline' : 'bk--sheet'}" data-step="1">
    <header class="bk__head">
      <div class="bk__title">
        <p class="hud"><span class="dot dot--ok"></span> Appointment concierge</p>
        <h2 id="${id}-title">Book a visit</h2>
      </div>
      <ol class="bk__steps" aria-label="Booking steps">
        <li data-s="1"><span>01</span>Concern</li>
        <li data-s="2"><span>02</span>Doctor &amp; time</li>
        <li data-s="3"><span>03</span>Details</li>
      </ol>
      ${inline ? '' : `<button type="button" class="bk__close" data-bk-close aria-label="Close booking">${icon('close')}</button>`}
    </header>

    <div class="bk__body">
      <div class="bk__main">
        <section class="bk__panel" data-panel="1" aria-labelledby="${id}-q1">
          <h3 class="bk__q" id="${id}-q1" tabindex="-1">What brings you in today?</h3>
          <p class="bk__sub">Describe it in your own words — we’ll point you to the right department.</p>
          <label class="bk__search">
            <span class="sr-only">Describe your concern</span>
            ${icon('search')}
            <input type="text" data-query placeholder="e.g. knee pain after a fall" autocomplete="off" maxlength="120">
          </label>
          <div class="bk__urgent" data-urgent role="alert" hidden>
            <span class="dot dot--alert"></span>
            <div><strong>This could need emergency care.</strong><p>If it is sudden or severe, don’t wait for an appointment.</p></div>
            <a class="btn btn--alert btn--sm" href="${CONTACT.emergency.href}">${icon('phone')} Call ${CONTACT.emergency.short}</a>
          </div>
          <div class="bk__match" data-match aria-live="polite"></div>
          <p class="bk__label">Or choose a department</p>
          <div class="bk__depts">
            ${DEPARTMENTS.map((d) => `
              <button type="button" class="bk-dept" data-dept="${d.id}" aria-pressed="false">
                <span class="bk-dept__code">${d.code}</span>
                <span class="bk-dept__txt"><strong>${d.full}</strong><small>${d.forList[0]}</small></span>
                ${icon('arrow')}
              </button>`).join('')}
          </div>
          <p class="bk__hint">Not sure? Pick General Medicine — the duty physician will route you.</p>
        </section>

        <section class="bk__panel" data-panel="2" aria-labelledby="${id}-q2" hidden>
          <h3 class="bk__q" id="${id}-q2" tabindex="-1"><span data-dept-name></span><br><span class="bk__q-sub">Choose a doctor and a time</span></h3>
          <div class="bk__docs" data-docs></div>
          <div class="bk__row">
            <div class="bk__quick" data-quick></div>
            <div class="seg" role="group" aria-label="Visit type">
              <button type="button" data-mode="in-person" aria-pressed="true">${icon('pin')} In person</button>
              <button type="button" data-mode="tele" aria-pressed="false">${icon('video')} Teleconsult</button>
            </div>
          </div>
          <p class="bk__label">Date</p>
          <div class="bk__dates" data-dates></div>
          <div class="bk__times" data-times></div>
          <p class="bk__err" data-err role="alert"></p>
        </section>

        <section class="bk__panel" data-panel="3" aria-labelledby="${id}-q3" hidden>
          <h3 class="bk__q" id="${id}-q3" tabindex="-1">Who is the appointment for?</h3>
          <form class="bk__form" data-details novalidate>
            <div class="seg" role="group" aria-label="Booking for">
              <button type="button" data-who="self" aria-pressed="true">Myself</button>
              <button type="button" data-who="other" aria-pressed="false">Someone else</button>
            </div>
            <div class="bk__fields">
              <label class="field"><span data-name-label>Your full name</span><input name="name" autocomplete="name" maxlength="80"></label>
              <label class="field"><span>Mobile number</span><span class="field__phone"><em>+91</em><input name="phone" type="tel" inputmode="numeric" autocomplete="tel-national" maxlength="14" placeholder="98765 43210"></span></label>
              <label class="field field--sm"><span>Age <small>optional</small></span><input name="age" inputmode="numeric" maxlength="3"></label>
              <label class="field field--wide"><span>Anything the doctor should know? <small>optional</small></span><textarea name="note" rows="3" maxlength="300" placeholder="A line about symptoms, how long, any reports"></textarea></label>
              <label class="check field--wide"><input type="checkbox" name="consent"><span>Wellcare may call or WhatsApp me to confirm this request.</span></label>
            </div>
            <p class="bk__err" data-err3 role="alert"></p>
            <button type="submit" hidden></button>
          </form>
        </section>

        <section class="bk__panel" data-panel="4" data-pass hidden></section>
      </div>

      <aside class="bk__summary" aria-label="Your appointment so far">
        <div class="bk-sumdoc" data-sumdoc></div>
        <p class="hud">Your visit</p>
        <dl>
          <div data-sum="dept"><dt>Department</dt><dd>—</dd></div>
          <div data-sum="doctor"><dt>Doctor</dt><dd>—</dd></div>
          <div data-sum="when"><dt>When</dt><dd>—</dd></div>
          <div data-sum="mode"><dt>Visit</dt><dd>In person</dd></div>
        </dl>
        <a class="bk__sos" href="${CONTACT.emergency.href}"><span class="dot dot--alert"></span><span>Emergency? Don’t book —<br>call <strong>${CONTACT.emergency.short}</strong></span></a>
      </aside>
    </div>

    <footer class="bk__foot">
      <button type="button" class="btn btn--ghost" data-back hidden>Back</button>
      <p class="bk__mini" data-mini aria-hidden="true"></p>
      <button type="button" class="btn btn--primary" data-next>Continue ${icon('arrow')}</button>
    </footer>
  </div>`;
}

/* ---------- triggers + slide-in sheet ---------- */
export function initBookingTriggers({ lenis, lock } = {}) {
  const setLock = lock || ((on) => { document.documentElement.classList.toggle('is-locked', on); if (on) lenis?.stop(); else lenis?.start(); });
  const inlineHost = document.querySelector('[data-booking-inline]');
  const inlineApi = inlineHost ? createBooking(inlineHost, { inline: true }) : null;
  if (inlineApi) {
    const params = new URLSearchParams(location.search);
    const preset = { dept: params.get('department'), doctor: params.get('doctor'), query: params.get('q') };
    if (preset.dept || preset.doctor || preset.query) inlineApi.preset(preset);
  }

  let sheet = null, api = null, lastFocus = null;
  const close = () => {
    if (!sheet || !sheet.classList.contains('is-open')) return;
    sheet.classList.remove('is-open');
    setLock(false);
    setTimeout(() => { if (!sheet.classList.contains('is-open')) sheet.hidden = true; }, 650);
    lastFocus?.focus?.({ preventScroll: true });
  };
  const ensureSheet = () => {
    if (sheet) return;
    sheet = document.createElement('div');
    sheet.className = 'bk-sheet';
    sheet.hidden = true;
    sheet.innerHTML = '<div class="bk-sheet__scrim" data-sheet-close></div><div class="bk-sheet__panel" role="dialog" aria-modal="true" data-bk-scroll data-lenis-prevent></div>';
    document.body.append(sheet);
    const panel = sheet.querySelector('.bk-sheet__panel');
    api = createBooking(panel, { onClose: close });
    panel.setAttribute('aria-labelledby', panel.querySelector('.bk__title h2').id);
    sheet.querySelector('[data-sheet-close]').addEventListener('click', close);
    sheet.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      if (e.key !== 'Tab') return;
      const items = [...panel.querySelectorAll('a[href], button:not([disabled]), input, textarea, [tabindex="0"]')].filter((el) => el.offsetParent !== null);
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  };

  const open = (preset) => {
    ensureSheet();
    lastFocus = document.activeElement;
    sheet.hidden = false;
    setLock(true);
    api.preset(preset);
    requestAnimationFrame(() => requestAnimationFrame(() => sheet.classList.add('is-open')));
  };

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-book]');
    if (!trigger || trigger.closest('.bk')) return;
    e.preventDefault();
    const preset = { ...trigger.dataset };
    delete preset.book;
    document.dispatchEvent(new CustomEvent('wellcare:book'));
    if (inlineApi) {
      inlineApi.preset(preset);
      const top = inlineHost.getBoundingClientRect().top + window.scrollY - 90;
      if (lenis) lenis.scrollTo(top); else window.scrollTo({ top, behavior: 'smooth' });
      return;
    }
    open(preset);
  });

  return { open, close };
}
