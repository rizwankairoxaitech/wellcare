# Wellcare implementation guide

## Design direction

The site keeps the language of the original DNA design — a white canvas, near-black ink type in Inter Tight, and the DNA gradient (violet → pink → blue) — and adds a futuristic layer: monospace HUD labels, glass panels, an ECG line that turns into a helix, and motion driven by scroll. Hospital clarity comes first: real photography, named doctors, the emergency number on every screen, and booking one click away.

**Logo.** The official Wellcare mark — three figures with raised arms over a swoosh, and the two-tone "Well / care" wordmark — is redrawn as line art in the site palette. The figures are violet, pink and blue instead of the original blue, orange and green, and "care" uses the DNA gradient instead of green. The SVG lives in one place, `LOGO()` in `js/app.js`, and is used by the header, menu, footer, page curtain and intro, where it draws itself in. Colours are set with `.logo__f1/2/3` and `.logo__swoosh` in `css/style.css` (`.logo--light` for dark backgrounds). The favicon is the same mark, inlined in each page's `<head>`.

Colour tokens live at the top of `css/style.css`. `--violet-ink` (#5a45d6) is the accessible violet for text and selected states; `--violet` (#8f7ef3) is decorative only. `--alert` is reserved for emergency.

## How the pages are put together

- **Shared chrome.** Each page has `<div data-site-header>` and `<div data-site-footer>`; `js/app.js` replaces them with the header, full-screen menu and footer, and injects the icon sprite (`#i-arrow`, `#i-phone`, …) plus the `#g-dna` gradient used by SVG strokes.
- **Data.** Departments, doctors and contact numbers come from `js/data.js`. The department sections in `departments.html`, the doctor cards in `doctors.html` and the doctor strip in `index.html` were generated from that file as static HTML (good for search engines). If you change a doctor, update `data.js` **and** the matching static markup.
- **Build.** Everything is bundled by esbuild into one classic script (`js/wellcare.bundle.js`) so the site runs from `file://` as well as from a server. Run `npm run build` after editing any `js/*.js`.
- **WebGL.** Two engines share the DNA palette. `dna.js` is the liquid helix in the home hero; `anchor(y, strand)` projects strand points to the screen so the six department callouts ride the strands (they fade when their point turns to the back). `morph.js` is a particle cloud (8,000 points desktop / 4,200 phone) that flows between silhouettes sampled from glyphs drawn on a 2D canvas — 🩺 🦴 🏥 🚑, plus hand-drawn shapes: an anatomical heart with its great vessels (cardiology), a brain with its folds, cerebellum and brainstem (neurology), a mother in profile with the baby curled in her womb (gynecology), a baby curled in the fetal position with its cord (pediatrics), a cross and a check mark. The hand-drawn heart, brain and baby are separated into parts by thin cut-out grooves; `TUNE` in `morph.js` gives them more edge particles and less depth jitter so the grooves stay open as the cloud turns. Particles swirl through simplex-noise flow mid-transition and part around the cursor. `scrub(f, keys)` ties the shape to scroll (care atlas); `morphTo(key)` animates on events (filters, booking, auto-cycle).
- **Motion.** GSAP + ScrollTrigger drive split-word headings (`data-split`), fade-ups (`data-reveal`), scrambled HUD labels (`data-scramble`), the expanding photo stage, the care-path line, the pinned care atlas, the pinned horizontal doctor gallery (cards tilt in with 3D depth) and the ticker, which speeds up with scroll velocity. Lenis smooths scrolling. A first-visit intro plays once per session on the home page, and a cursor ring labels what a click will do (Book / View / Next). With `prefers-reduced-motion`, none of this runs: content is simply visible and the DNA holds its final pose.
- **Page transitions.** Internal links sweep a dark curtain in; the next page sweeps it out (a `sessionStorage` flag, ignored if storage is blocked).

## The booking concierge (`js/booking.js`)

1. **Concern** — free text is matched to a department by keyword (`matchCare`). Mentions of a child route to Pediatrics. Red-flag phrases (`isUrgent`) show an emergency banner with a call button; it advises, it never blocks.
2. **Doctor & time** — doctors for that department (plus "First available" when there are several), in-person/teleconsult, a 12-day date strip and morning/evening slots, with an "earliest opening — take it" shortcut.
3. **Details** — name, mobile (+91, 10 digits), optional age and note, consent.
4. **Pass** — reference code, summary, WhatsApp hand-off with the request pre-written, an .ics calendar file and a call button.

The same component renders inline on `appointment.html` and inside the slide-in sheet elsewhere. The sheet and the doctor drawer trap focus, close on Escape and return focus to the trigger.

## Integration points

- Replace `slotsFor` / `firstFree` in `js/data.js` with calls to the hospital scheduling API.
- In `booking.js`, `next()` at step 3 is where the request should be POSTed; show the pass only after the server accepts it.
- Never store patient details in browser storage.
