# Wellcare Hospital — Next.js site

The Wellcare Hospital & Research Institute website (Thillai Nagar, Trichy), built with **Next.js 16 (App Router)**,
**React 19**, **TypeScript** and **Tailwind CSS 4**. Motion uses **GSAP + ScrollTrigger** with **Lenis** smooth scrolling;
the 3D visuals are **three.js** (WebGL).

## Run it

```bash
npm install        # once
npm run dev        # http://localhost:3000, reloads as you edit
```

On Windows you can also double-click `start.bat` (installs if needed, builds and opens the site).

For production: `npm run build` then `npm start` — or deploy the folder to Vercel. Every page is prerendered as static
HTML. The site needs to be served (it can't be opened by double-clicking an HTML file like the old static version).

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (type-checks and prerenders every page) |
| `npm start` | Serves the production build |
| `npm run lint` | ESLint, including the React Compiler rules |

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: DNA hero with department callouts, care finder, photo stage, pinned care atlas, how-it-works, doctor strip |
| `/departments` | The six departments: what each treats, when to call emergency instead, and its doctors |
| `/doctors` | Doctor directory with department filter; `/doctors#dr-sameer-rahman` opens a profile |
| `/hospital` | Facts, what happens on a visit, contact and map |
| `/appointment` | The booking concierge inline; `?department=cardio`, `?doctor=dr-naveen-iqbal` or `?q=knee pain` start it part-way |

## Project structure

```
src/
  app/                    routes (one folder per page), root layout, global styles, favicon
    globals.css           Tailwind import, design tokens (@theme), a few custom utilities, motion states
  components/
    layout/               header, full-screen menu, footer, page-transition curtain, cursor, intro, NavLink
    brand/                logo and wordmark
    ui/                   primitives: Icon, Hud, Dot, Tags, Avatar, ButtonLink, shared class recipes (styles.ts)
    motion/               SplitText, Scramble, Reveal
    three/                MorphFigure (React wrapper around the particle engine)
    home/                 home-page sections (Hero, HeroDna, CareFinder, Ticker, Stage, CareAtlas, …)
    departments/          department sections, sticky rail, compact doctor rows
    doctors/              doctor card, directory with filters, profile drawer
    hospital/             facts, visit steps, contact section
    booking/              the concierge: reducer (bookingState.ts), one component per step, sheet + inline hosts
    shared/               page hero, section heading, ECG line, checklists, contact card, closing CTA
  providers/              smooth scroll + scroll lock, page transitions, UI state (menu, profile drawer, booking)
  hooks/                  media queries, presence (enter/exit transitions), focus trap, magnetic, reveal
  lib/
    data/                 contact details, departments, doctors — edit content here
    booking/              symptom matcher, prototype calendar, formatting, pass helpers (WhatsApp, .ics)
    motion/               GSAP setup, intro timing, scramble, reveal batching
    three/                dna.ts (liquid DNA helix), morph.ts (particle shapes) — framework-free WebGL engines
  types/                  shared TypeScript types
public/images/            doctor portraits and the hospital photo
```

## How things fit together

- **Content** lives in `src/lib/data`. Adding a doctor there adds them to the menu, the departments page, the doctor
  directory, the home strip, the atlas and the booking flow.
- **Styling** is Tailwind utility classes in the components. Design tokens (colours, fonts, easing, breakpoints that
  match the original design: 641 / 901 / 1181 / 1381 px) are in `@theme` in `globals.css`. Repeated recipes such as
  buttons and chips are functions in `components/ui/styles.ts`.
- **Booking** is a pure reducer (`components/booking/bookingState.ts`) driven by small step components. Any
  `BookButton` opens it — as a slide-in sheet, or, on `/appointment`, by presetting the inline concierge.
- **Motion** is scoped per component with `useGSAP`, so everything cleans up when a page is hidden or left. Next 16
  keeps recently visited pages alive (React `<Activity>`); effects are torn down and rebuilt as you navigate.
- **First-visit intro** and the "start hidden, then animate in" states are decided by a tiny script in `<head>` before
  first paint (`MOTION_BOOT_SCRIPT` in `lib/motion/intro.ts`), so nothing flashes. With *prefers-reduced-motion* the
  site is fully static.
- **WebGL engines** load on demand (dynamic import) and dispose themselves on unmount.

## Before launch

- Portraits are AI-generated placeholders and profile copy is draft text — replace and get hospital approval.
- Booking sends nothing yet: wire `slotsFor` / `firstFree` (`lib/booking/schedule.ts`) to the hospital scheduling API
  and submit the request where the concierge confirms step 3 (`validateDetails` in `BookingConcierge.tsx`).
- Never store patient details in browser storage.
