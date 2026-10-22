# AmpCycle website

Next.js (App Router, TypeScript) build of the AmpCycle redesign: Home, Technology, Research, About and Contact.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

- `src/app/*/page.tsx`: one file per route; static content renders on the server.
- `src/components/site`: header, footer, intro overlay, page-transition wipe, custom cursor, scroll-reveal.
- `src/components/ui`: shared pieces (`ImageSlot`, `Parallax`, `WordReveal`, `Faq`, `ProgressSteps`, `CtaBand`).
- `src/components/{home,technology,research,about,contact}`: the scroll-driven and interactive sections of each page.
- `src/app/globals.css`: design tokens (`--acc` is the brand accent) and shared styles.
- `src/lib/site.ts`: nav and contact details.

## Photos

Every photo position is an `ImageSlot` with an id and a placeholder caption. Drop files in `public/images/` and map
them in `src/lib/images.ts`, e.g. `'hero-facility': '/images/hero.jpg'`.

## Forms

The Home and Contact forms are front-end only: submitting shows the thank-you state but sends nothing. Hook the
`onSubmit` handlers in `src/components/home/QuickContactForm.tsx` and `src/components/contact/ProposalForm.tsx` to an
API route or form service.

## Scroll reveals

Add `data-reveal` to any element to fade it up on entry; `data-reveal-delay="150"` staggers it.
