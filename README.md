# Forgentik — Abayomi Arogunmasa

A portfolio for full-stack web work. The site is a single-page React app with three documented case studies, a short about section, a focused stack list and a direct contact flow.

Live site: [abayome.netlify.app](https://abayome.netlify.app/)

## What is here

- **Hero** — what I build, who I build it for, and clear links to work and email.
- **Selected work** — three case studies: School Result Checking, URL Shortener and Expenses Tracker. Each card covers the problem, the solution, the stack, one key technical challenge, and links to source/demo where they exist.
- **About** — the path from secondary-school teaching and a public-sector degree into full-stack development.
- **Stack** — the tools used end to end, not a logo wall.
- **Contact** — email, copy-to-clipboard, social links and a résumé download.

## Built with

- React 18
- TypeScript
- Vite 5
- CSS Modules
- React hooks only — no router, no animation library

The visual system (colours, spacing, dashed rules, diamonds, type scale) lives in [`src/index.css`](src/index.css) and the component-level `*.module.css` files. There is no Tailwind build in this project.

## Getting started

```sh
npm install
npm run dev
```

The dev server runs on Vite's default port. To check the production build locally:

```sh
npm run build
npm run preview
```

## Scripts

| Command            | Purpose                              |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the Vite dev server            |
| `npm run build`    | Type-check and emit the production build to `dist/` |
| `npm run preview`  | Serve the production build locally   |
| `npm run typecheck`| Run `tsc --noEmit`                   |
| `npm run lint`     | Run ESLint                           |

## Project data

Case-study copy and links are centralised in [`src/utils/data.ts`](src/utils/data.ts). Add or edit a project there and the card renders automatically. Section copy, nav labels and contact details live in [`src/utils/constants.ts`](src/utils/constants.ts).

Each case study is intentionally written from what is actually in the linked repository. The School Result Checking project is a full-stack app — an Express/PostgreSQL API plus an EJS report-card view rendered to PDF — but it has no public demo because it needs a seeded database. The URL Shortener is marked as in progress because the auth and data layers are built but the short-link endpoints are not.

## Accessibility and SEO

- Semantic landmarks, one `h1`, ordered headings and a skip link.
- Visible `:focus-visible` styles and 44 px minimum tap targets for primary actions.
- Mobile menu closes on Escape and locks background scroll.
- Scroll reveals and hover motion respect `prefers-reduced-motion`.
- Title, description, canonical, Open Graph, Twitter card and `Person` JSON-LD in [`index.html`](index.html).
- `public/robots.txt`, `public/sitemap.xml` and a generated 1200×630 social image at `public/og.png`.

If the site moves to a custom domain, update the canonical and Open Graph URLs in `index.html` and `public/og.svg`, then regenerate `public/og.png`.

## Deployment

The project deploys as a static Vite site (Netlify or any static host):

- Build command: `npm run build`
- Publish directory: `dist`

## Contact

- Email: arogunmasaabayomi95@gmail.com
- [GitHub](https://github.com/ifeola)
- [LinkedIn](https://www.linkedin.com/in/abayomi-arogunmasa-75254a134/)
- [X / Twitter](https://x.com/abayomi_codes)
