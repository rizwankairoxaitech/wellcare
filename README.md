# Wellcare Hospital website

A multi-page site for Wellcare Hospital & Research Institute, Thillai Nagar, Trichy. It keeps the liquid DNA hero and the white / violet visual language, and puts the hospital first: departments, doctors, emergency access and an appointment concierge you can open from any page.

## Pages

| Page | What's on it |
|------|--------------|
| `index.html` | Intro, DNA hero with department callouts pinned to the strands + "What brings you in?" finder, scroll-opening hospital photo, **care atlas** (pinned: particles morph into each department), visit steps, pinned horizontal doctor gallery, emergency-vs-booking split |
| `departments.html` | Particle hero cycling through the six department symbols, then six departments: what each treats, **when to call emergency instead**, the assigned doctor(s), one-click booking; Dermatology · ENT · Urology routed via General Medicine |
| `doctors.html` | Particle hero that follows the department filter; filterable doctor directory; each card opens a profile drawer with focus areas, how a visit goes and next openings |
| `appointment.html` | Particle hero that takes the shape of the department you pick (check mark on the pass), the booking concierge inline (deep links: `?department=cardio`, `?doctor=dr-sameer-rahman`, `?q=knee pain`) |
| `hospital.html` | Particle hero (hospital → ambulance → heart → cross), at-a-glance facts, visit steps, what to bring, contact cards and a live map |

## Run it

Just open `index.html` — double-click works. All code (Three.js, GSAP + ScrollTrigger, Lenis and the site) ships as one script, `js/wellcare.bundle.js`, so no server is needed. `start.bat` still serves the folder at http://localhost:5173 if you prefer. The fonts and the hospital map need an internet connection.

## Editing the code

`js/*.js` are the sources; the pages load only the bundle. After changing any `.js` file:

```bash
npm install      # once
npm run build    # rebuilds js/wellcare.bundle.js
```

`npm run watch` rebuilds on every save.

## Files

| File | What it does |
|------|--------------|
| `js/data.js` | **Single source of truth**: contact lines, departments, doctors, the symptom matcher and the prototype slot calendar |
| `js/app.js` | Entry point: header, full-screen menu, footer, intro, smooth scroll, page-transition curtain, scroll choreography, DNA callouts, care atlas, particle hero figures, pinned doctor gallery, profile drawer, cursor ring |
| `js/morph.js` | Particle morph engine (Three.js points + GLSL): samples department shapes from glyphs on a canvas, bubbles swirl between them and part around the cursor |
| `js/booking.js` | Appointment concierge (concern → doctor & time → details → pass) and the slide-in booking sheet opened by any `[data-book]` element |
| `js/dna.js` | The liquid DNA (Three.js); `anchor()` reports where a strand point sits on screen for the callouts |
| `js/wellcare.bundle.js` | **Built file** — what the pages load. Don't edit by hand |
| `package.json` | Build script and pinned versions: three 0.160, gsap 3.12.5, lenis 1.1.13, esbuild 0.23.1 |
| `js/utils.js` | Split-word reveals, text scramble, magnetic buttons |
| `css/style.css` | Design tokens, all page layouts, menu, drawer, booking, responsive rules |
| `wellcare-hospital-images/` | AI-generated hero photo and doctor portraits (placeholders) |

`js/views.js` and `js/scenes.js` are from the original single-page build and are no longer loaded.

## Booking triggers

Any element with `data-book` opens the concierge. Optional presets:

```html
<button data-book data-dept="ortho">…</button>               <!-- starts at doctor & time -->
<button data-book data-doctor="dr-priya-elangovan">…</button> <!-- doctor preselected -->
<button data-book data-query="child has fever">…</button>     <!-- concern typed in -->
```

## Before launch — must do

- **Portraits are AI-generated placeholders**, not photos of the doctors named. Replace them with approved staff photographs (Dr. Geethan currently shows a monogram).
- **Doctor names** follow the current wellcarehospital.net listing. The profile copy, focus areas and statuses are drafts; qualifications and experience are deliberately left as "published after hospital verification".
- **Availability is simulated** (`slotsFor` in `js/data.js`, Sundays emergency-only). Connect it to the real schedule.
- **The concierge does not transmit data.** The pass offers WhatsApp, phone and an .ics download; wire the final step to a secure booking API (server-side validation, consent record, rate limiting, confirmed/pending status).
- Confirm the WhatsApp number (+91 99940 25000), insurer list and teleconsult departments with the hospital.
- Emergency warning signs per department are general guidance; have a clinician review the wording.
