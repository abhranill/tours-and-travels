# Horizon Tours & Travel
A modern, professional, fully responsive single‑page website for a tours and travel agency. Built with **React 19**, **TypeScript**, **Vite 7** and **Tailwind CSS v4**, it showcases destinations, tour packages, customer testimonials and includes an interactive booking flow, search/filtering and enquiry forms.
> Live demo: run `npm run dev` locally (see [Getting Started](#getting-started)).
---
## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Available Scripts](#available-scripts)
7. [Application Architecture](#application-architecture)
8. [Components Reference](#components-reference)
9. [Data Model](#data-model)
10. [Design System](#design-system)
11. [Customisation Guide](#customisation-guide)
12. [Build & Deployment](#build--deployment)
13. [Accessibility & Performance](#accessibility--performance)
14. [Roadmap / Ideas](#roadmap--ideas)
15. [Credits](#credits)
16. [License](#license)
---
## Overview
Horizon Tours & Travel is a marketing + lead‑generation website for a tour operator. It is a **static front‑end** (no backend required) and can be deployed to any static host. All content — destinations, tour packages, testimonials — lives in a single typed data file so it's easy to update without touching UI code.
The page is composed of the following sections in order:
| # | Section | Anchor |
|---|---------|--------|
| 1 | Navbar (sticky, transparent → solid on scroll) | – |
| 2 | Hero with search widget | `#home` |
| 3 | Top Destinations (bento grid) | `#destinations` |
| 4 | Tour Packages (filterable) | `#tours` |
| 5 | Why Horizon (stats + value props) | `#why-us` |
| 6 | Traveller Stories (testimonial carousel) | `#reviews` |
| 7 | Newsletter sign‑up band | – |
| 8 | Contact / Request a Quote | `#contact` |
| 9 | Footer | – |
| — | Booking modal (global overlay) | – |
---
## Features
# Visitor‑facing
- **Immersive hero** with full‑bleed photography, gradient overlays, animated headline, trust badges and CTAs.
- **Trip search widget** (destination, travel month, travellers) that scrolls to and filters the tour list.
- **Destination bento grid** — clicking a destination filters tours for that place.
- **Tour package cards** with image, category badge, promotional badge (Best Seller / New / Limited / Top Rated), star rating + review count, highlights list, duration, group size, price (with optional strike‑through old price) and a *Book Now* button.
- **Category filters** — All · Beach · Adventure · Cultural · Luxury · Wildlife.
- **Smart keyword search** — matches on title, location, category and hidden tags (e.g. `greece` → Santorini tour; `hiking` → Alps & Inca Trail).
- **Empty‑state** when no tours match, with a one‑click reset.
- **Why Us section** with key statistics and six differentiators.
- **Auto‑rotating testimonial carousel** (6 s interval) with dot indicators, prev/next arrows and pause‑on‑hover.
- **Newsletter subscription** with inline success state.
- **Contact section** with office details, hours and a *Request a free quote* form (with confirmation state).
- **Booking modal**
  - Opens from any *Book Now* / *Plan My Trip* button, pre‑selecting the chosen tour.
  - Live price summary: `price × travellers`, plus 20 % deposit.
  - Closes via **Esc**, overlay click or the × button; locks body scroll while open.
  - Confirmation screen on submit.
- **Fully responsive** — mobile‑first layouts, hamburger menu, stacked forms, bottom‑sheet modal on small screens.
- **Smooth‑scroll anchor navigation.**
# Developer‑facing
- Strict **TypeScript** throughout, including typed content models.
- **Tailwind v4** `@theme` tokens for colours, fonts and keyframe animations.
- Single‑file production build (`vite-plugin-singlefile`) — the entire site compiles into one `dist/index.html`.
- No global state library; simple, readable React hooks.
- Zero backend dependencies — forms are client‑side demos ready to be wired to an API.
---
## Tech Stack
| Layer | Technology | Version |
|-------|------------|---------|
| UI library | React | 19.x |
| Language | TypeScript | 5.9 |
| Bundler / dev server | Vite | 7.x |
| Styling | Tailwind CSS (via `@tailwindcss/vite`) | 4.1 |
| Icons | lucide-react | latest |
| Class utilities | clsx + tailwind-merge (`cn()` helper) | – |
| Fonts | Google Fonts — *Playfair Display* (display) & *Inter* (body) | – |
| Build plugin | vite-plugin-singlefile | 2.x |
| Imagery | Pexels stock photography (hot‑linked) | – |
---
## Project Structure
```
.
├── index.html                  # HTML shell, meta tags, Google Fonts
├── package.json
├── vite.config.ts              # Vite + Tailwind + singlefile plugins
├── tsconfig.json
├── README.md
└── src/
    ├── main.tsx                # React entry point
    ├── index.css               # Tailwind import + @theme design tokens
    ├── App.tsx                 # Page composition & shared state
    ├── data/
    │   └── content.ts          # Destinations, tours, testimonials, categories (typed)
    ├── utils/
    │   └── cn.ts               # clsx + tailwind-merge helper
    └── components/
        ├── Navbar.tsx          # Sticky header, mobile menu
        ├── Hero.tsx            # Hero banner + search widget
        ├── SectionHeading.tsx  # Reusable eyebrow/title/description block
        ├── Destinations.tsx    # Bento grid of destinations
        ├── Tours.tsx           # Filter pills, search results, TourCard
        ├── WhyUs.tsx           # Stats + feature grid (dark section)
        ├── Testimonials.tsx    # Carousel
        ├── Newsletter.tsx      # Email capture band
        ├── Contact.tsx         # Contact info + quote form
        ├── Footer.tsx          # Links, socials, trust marks
        └── BookingModal.tsx    # Global booking dialog
```
---
## Getting Started
# Prerequisites
- **Node.js ≥ 18** (20 LTS recommended)
- **npm ≥ 9** (or pnpm / yarn)
### Installation
```bash
# 1. Clone the repository
git clone <your-repo-url> horizon-tours
cd horizon-tours
# 2. Install dependencies
npm install
# 3. Start the dev server
npm run dev
```
Vite will print a local URL (typically `http://localhost:5173`). The page hot‑reloads on save.
---
## Available Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite development server with HMR. |
| `npm run build` | Type‑check and build an optimised production bundle into `dist/`. Output is a **single self‑contained `index.html`** (JS & CSS inlined). |
| `npm run preview` | Serve the production build locally for a final check. |
| `npx tsc --noEmit` | Run a standalone TypeScript type‑check. |
---
## Application Architecture
### State flow
All shared state lives in `App.tsx` and is passed down as props — no context or external store is needed for a page of this size.
```
App
 ├─ category        : Category        (active filter pill)
 ├─ search          : string          (free‑text query from hero / destinations)
 ├─ modalOpen       : boolean
 └─ selectedTour    : Tour | null     (pre‑selected tour in the modal)
```
| Action | Source | Effect |
|--------|--------|--------|
| `handleSearch(q)` | Hero search form, Destination tile | Resets category to **All**, sets `search`, smooth‑scrolls to `#tours`. |
| `onCategoryChange(c)` | Filter pill | Sets category, clears `search`. |
| `onClearSearch()` | "Clear" chip / empty state | Clears `search`. |
| `openBooking(tour?)` | Navbar CTA, TourCard *Book Now* | Sets `selectedTour` and opens the modal. |
| `closeBooking()` | Modal ×, overlay, Esc, Done | Closes modal. |
# Filtering logic (`Tours.tsx`)
```ts
const haystack = [title, location, category, ...tags].join(" ").toLowerCase();
const words    = query.split(/\s+/).filter(w => w.length > 2);
match = !query || haystack.includes(query) || words.some(w => haystack.includes(w));
```
Both the category pill **and** the search query must match for a tour to be shown. The list is memoised with `useMemo`.
# Booking modal (`BookingModal.tsx`)
- Receives `open`, `tour`, `onClose`.
- On open: resets internal state, pre‑selects `tour` (or the first tour), locks `document.body` scroll.
- Registers a global `keydown` listener for **Escape**.
- Computes `total = price × guests` and `deposit = 20 % of total` in real time.
- Mobile (`< md`): the image/summary panel is hidden and a compact total row is shown instead; the dialog becomes a bottom sheet.
---
## Components Reference
| Component | Props | Notes |
|-----------|-------|-------|
| `Navbar` | `onBook: () => void` | Listens to `scroll` to toggle transparent/solid styles. Mobile menu is a simple toggle. |
| `Hero` | `onSearch: (q: string) => void` | Controlled inputs for destination, month, traveller count. |
| `SectionHeading` | `eyebrow`, `title: ReactNode`, `description?`, `align?: "left" \| "center"`, `light?: boolean` | Shared heading pattern; `light` variant for dark backgrounds. |
| `Destinations` | `onSelect: (name: string) => void` | Bento layout: `tall` items span two rows; 3rd item spans two columns on `lg`. |
| `Tours` | `category`, `onCategoryChange`, `search`, `onClearSearch`, `onBook` | Contains the internal `TourCard` component. |
| `WhyUs` | – | Static content (stats + features arrays at top of file). |
| `Testimonials` | – | Carousel; interval cleared on unmount / pause. |
| `Newsletter` | – | Local `done` state only. |
| `Contact` | – | Local `sent` state; internal `Field` wrapper. |
| `Footer` | – | Inline SVG brand icons (Facebook, Instagram, X, YouTube) since lucide no longer ships brand glyphs. |
| `BookingModal` | `open`, `tour: Tour \| null`, `onClose` | See architecture section above. |
---
## Data Model
All content is in **`src/data/content.ts`**.
```ts
export type Category = "All" | "Beach" | "Adventure" | "Cultural" | "Luxury" | "Wildlife";
export interface Destination {
  id: string;
  name: string;
  country: string;
  tours: number;        // displayed count
  image: string;
  tall?: boolean;       // spans 2 rows in the bento grid
}
export interface Tour {
  id: string;
  title: string;
  location: string;
  days: number;
  price: number;        // per person, USD
  oldPrice?: number;    // shows strikethrough when present
  rating: number;       // 0–5
  reviews: number;
  category: Exclude<Category, "All">;
  image: string;
  highlights: string[]; // 3 bullet points
  groupSize: string;    // free text e.g. "Up to 12 guests"
  badge?: string;       // "Best Seller" | "New" | "Limited" | ...
  tags: string[];       // hidden search keywords
}
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  trip: string;
  quote: string;
  rating: number;
  initials: string;     // avatar fallback
}
```
Exports: `destinations`, `tours`, `testimonials`, `categories`.
### Adding a tour
```ts
{
  id: "iceland-aurora",
  tags: ["iceland", "northern lights", "reykjavik", "winter"],
  title: "Iceland Northern Lights Adventure",
  location: "Reykjavík & Golden Circle, Iceland",
  days: 6,
  price: 2290,
  rating: 4.9,
  reviews: 120,
  category: "Adventure",
  badge: "New",
  groupSize: "Up to 12 guests",
  image: "https://…",
  highlights: ["Aurora hunting", "Blue Lagoon", "Glacier hike"],
}
```
Add it to the `tours` array — it will automatically appear in the grid, the filter results, the contact form's tour dropdown and the booking modal's package selector.
---
## Design System
Defined in `src/index.css` using Tailwind v4's `@theme` block.
### Colours
| Token | Use |
|-------|-----|
| `ocean-50 … ocean-950` | Primary brand teal. `ocean-600` for buttons/links, `ocean-950` for dark sections & headings. |
| `sand-50 … sand-600` | Warm accent. `sand-400` for primary CTAs and highlights, `sand-50` for soft section backgrounds. |
| `slate-*` (Tailwind default) | Neutral text, borders and backgrounds. |
### Typography
| Token | Font | Use |
|-------|------|-----|
| `font-display` | Playfair Display | Headlines, prices, pull‑quotes |
| `font-sans` | Inter | Body, UI |
### Motion
| Utility | Description |
|---------|-------------|
| `animate-fade-up` | 0.8 s fade + 24 px rise; used for hero elements and testimonial text |
| `animate-float` | Gentle 6 s vertical bob; used for the newsletter icon |
| `.delay-100 … .delay-400` | Stagger helpers for `fade-up` |
### Shape & elevation
- Cards: `rounded-3xl`, soft `ring-1 ring-slate-200/70`, hover lift (`-translate-y-1`) with teal‑tinted shadow.
- Buttons: pill‑shaped (`rounded-full`).
- Section rhythm: `py-24 sm:py-28`, container `max-w-7xl px-5 sm:px-8`.
---
## Customisation Guide
| Want to… | Edit |
|----------|------|
| Change agency name / logo | `Navbar.tsx`, `Footer.tsx`, `index.html` `<title>` & meta description |
| Change phone, email, address, hours | `Navbar.tsx` (phone), `Contact.tsx` (`items` array), `Footer.tsx` |
| Swap brand colours | `--color-ocean-*` / `--color-sand-*` in `src/index.css` |
| Swap fonts | Google Fonts `<link>` in `index.html` + `--font-display` / `--font-sans` in `index.css` |
| Replace hero / newsletter images | `HERO_IMG` in `Hero.tsx`, `BG` in `Newsletter.tsx` |
| Add/remove destinations, tours, reviews | `src/data/content.ts` |
| Add a tour category | Extend the `Category` union and `categories` array in `content.ts` |
| Edit "Why Us" copy & stats | `features` and `stats` arrays in `WhyUs.tsx` |
| Change deposit percentage | `deposit` calculation in `BookingModal.tsx` |
| Change carousel speed | `6000` ms interval in `Testimonials.tsx` |
### Connecting forms to a backend
The three forms (Contact, Newsletter, Booking) currently call `e.preventDefault()` and flip a local success flag. To make them live, replace the submit handlers with a `fetch` to your API or a service such as Formspree, Netlify Forms, EmailJS or a custom endpoint:
```ts
onSubmit={async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.currentTarget));
  await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(data) });
  setSent(true);
}}
```
> Tip: add `name` attributes to the inputs so `FormData` captures them.
---
## Build & Deployment
```bash
npm run build
```
Because `vite-plugin-singlefile` is enabled, the output is a single **`dist/index.html`** (~320 kB, ~92 kB gzipped) with all JS and CSS inlined. Images and fonts are loaded from Pexels / Google Fonts CDNs at runtime.
Deploy the `dist/` folder to any static host:
- **Netlify / Vercel** – build command `npm run build`, publish directory `dist`.
- **GitHub Pages** – push `dist/index.html` to a `gh-pages` branch.
- **S3 / Cloudflare Pages / Firebase Hosting** – upload `dist/`.
- **Any web server** – it's just one HTML file.
If you prefer separate asset files (better long‑term caching), remove the singlefile plugin from `vite.config.ts`.
---
## Accessibility & Performance
- Semantic landmarks: `<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<nav>`.
- All interactive elements are real `<button>` / `<a>` elements with keyboard focus.
- Icon‑only buttons carry `aria-label`s (menu toggle, carousel controls, modal close).
- Modal supports **Escape** to close and prevents background scroll.
- Form fields use `<label>` wrappers and `required` / `type` validation.
- Images include descriptive `alt` text; decorative backgrounds use `aria-hidden`.
- Off‑screen images use `loading="lazy"`.
- Google Fonts pre‑connected; `display=swap` avoids invisible text.
- Pexels image URLs request pre‑sized, compressed renditions.
---
## Roadmap / Ideas
- [ ] Tour detail pages with full day‑by‑day itineraries (add React Router).
- [ ] Real availability calendar and Stripe deposit checkout.
- [ ] CMS integration (Sanity / Contentful / Strapi) for `content.ts`.
- [ ] i18n and multi‑currency pricing.
- [ ] Blog / travel guides section.
- [ ] Interactive world map for destinations.
- [ ] Wishlist / compare tours.
- [ ] Unit tests (Vitest + Testing Library) for filtering and modal logic.
---
## Credits
- Photography courtesy of photographers on [Pexels](https://www.pexels.com) (free licence).
- Icons by [Lucide](https://lucide.dev).
- Fonts: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) and [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.
*All company details, prices, reviews and statistics are fictional placeholder content for demonstration purposes.*
---
## License
This project is provided as a template. You are free to use, modify and deploy it for personal or commercial projects. Replace the placeholder brand, content and imagery before going live.
