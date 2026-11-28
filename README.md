# Portfolio

Personal portfolio of Óscar Pérez Fernández: https://oscarpff.github.io/Portfolio/

It has two parts:

- **Cybersecurity** (`/cybersecurity`): GRC and security project management work, experience, certifications and a small technical lab with CTF writeups.
- **Game & Narrative Design** (`/narrative`): quest design, world-building and game projects.

## Stack

React, TypeScript, Vite, Tailwind CSS and shadcn/ui. Deployed to GitHub Pages with GitHub Actions on every push to `main`.

## Running it locally

Requires Node.js 22.

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:8080/Portfolio/.

Other scripts: `npm run build`, `npm run preview`, `npm run lint`, `npm test`.

## Updating content

Most content lives in `src/data/`:

- `cyberCV.ts`: CV text shown on the site. The downloadable PDF is `public/cv/OscarPerezFernandez_CV.pdf`.
- `cyberProjects.ts` and `writeups.ts`: cybersecurity projects and CTF writeups.
- `works.ts`: narrative design projects.
