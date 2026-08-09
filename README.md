# Pranjal T S — Portfolio

Personal portfolio. Vite + React + Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Open the printed localhost URL (usually http://localhost:5173).

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Editing content

All copy, projects, experience, education, and links live in one file:

    src/data/profile.js

Everything on the page reads from that file — name, role, links, marquee,
skills, stats, jobs, projects, publication, education, and the closing section.

A few strings are written directly into components rather than the data file
(they are phrased as sentences, so they live with the markup):

| What | Where |
| --- | --- |
| Wordmark "Pranjal." | `src/components/Nav.jsx`, `src/components/Footer.jsx` |
| Hero paragraph + the three fact rows | `src/components/Hero.jsx` |
| "I care about models that…" lead | `src/components/About.jsx` |
| Section headings and intros | the matching component |

## Résumé

The PDF lives at `public/Pranjal_TS_Resume.pdf` and is linked from
`resumeUrl` in `profile.js`. Replace the file with the same name to update it,
or point `resumeUrl` somewhere else.

## Projects

`featured` entries render as large cards with a pipeline diagram, count-up
metrics, and links. `projectsIndex` renders the compact list below them — it is
currently empty, so that block is hidden; add rows and it appears.

## Deploy

Works out of the box on Vercel or Netlify — point it at this folder,
framework preset "Vite", build command `npm run build`, output `dist`.
