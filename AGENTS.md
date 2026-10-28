<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio — agent guide

Personal portfolio for Shahjalal Ahmed Nishat. Next.js 16 App Router, React 19, TypeScript, Once UI, SCSS modules, MDX project case studies. Deployed on Vercel from `main`.

## Commands

```bash
npm run dev        # Next dev server (Turbopack)
npm run build      # production build; the real gate
npm run lint       # oxlint (no ESLint in this repo)
npm run typecheck  # tsc --noEmit
npm run check      # lint + typecheck
```

There is no test suite. Verification means `npm run check` and `npm run build` both pass, then a visual pass at 360 / 768 / 1024 / 1440 px.

## Content is data, not markup

Everything a human would edit lives in `src/app/resources/`:

- `content.js` — person, social links, home hero, about, skills, education, experience, projects copy, contact channels, footer, and the hidden blog/gallery metadata.
- `config.js` — `baseURL`, route flags, Once UI theme (`neutral: slate`, `brand: cyan`, `accent: blue`), and background effects.
- `index.ts` — the only import surface; add new exports here.

Sections read from these objects. Change copy there, not inside components.

### Route flags

`routes` in `config.js` gates pages **and** sitemap entries via `RouteGuard` and `sitemap.ts`. `/blog` and `/gallery` are `false` deliberately: their files and content stay in the repo, but they are unreachable and unlisted. Set a flag to `true` to republish, and add the link to `Footer` navigation if it should be discoverable. There is no `/about` route — the about content is a home-page section.

### Projects

Each case study is an MDX file in `src/app/work/projects/`. Frontmatter fields consumed by `src/app/utils/utils.ts`:

| field | required | notes |
| --- | --- | --- |
| `title`, `publishedAt`, `summary` | yes | `publishedAt` drives sitemap/schema dates |
| `image` | yes | cover + OG image, lives under `public/images/projects/<slug>/` |
| `tag`, `status`, `role`, `timeline` | no | rendered in card and detail meta panel |
| `tech` | no | string array, rendered as chips |
| `live`, `repo` | no | external links in card and detail page |
| `order` | no | ascending sort on home and `/work` |

Adding an MDX file is enough: `generateStaticParams` picks it up and the grid lists it. Keep `order` unique.

### Resume

The resume button is conditional. `src/app/utils/resume.ts` checks for `public/resume.pdf` (must exist and be >1 KB). If present, header/hero download it; if absent, they fall back to a `mailto:` request. Drop the PDF in `public/` to switch it on — no code change.

`src/app/utils/resume-href.ts` holds the plain path string. Client components (`Header`) import **only** that file; `resume.ts` uses `fs` and would break the client bundle. Server components may import either.

## Layout and styling

- `src/app/layout.tsx` — fonts, forced dark theme, fixed `Background` effects, sticky header, footer.
- `src/app/global.scss` — shared primitives: `.site-container`, `.section`, `.eyebrow`, `.mono`, `.corners`, focus rings, reduced-motion guard.
- `src/components/<section>/…` — each home section owns a `.module.scss`; shared section headers live in `src/components/home/SectionHeader.tsx`.
- `src/once-ui/` — vendored design system (tokens, primitives). Treat it as a library; avoid editing except for icon registration (`icons.ts`) or a real bug.

Theme is locked to dark via `<ThemeProvider forcedTheme="dark">` plus `data-theme="dark"` on `<html>`. `display.themeSwitcher` is off. Colour tokens come from Once UI's `scheme.scss` through `data-neutral` / `data-brand` / `data-accent`; use semantic tokens (`--neutral-on-background-strong`, `--brand-alpha-weak`, `--hairline`) instead of hard-coded hex.

Custom media breakpoints, available in every SCSS module:

```scss
@media (--s) { … } // ≤ 768px
@media (--m) { … } // ≤ 1024px
```

Adding an icon used by `Icon name="…"` requires registering it in `src/once-ui/icons.ts`. Brand/tech logos used inside `SkillsSection` are imported directly from `react-icons/si` and mapped locally — add to that map instead.

## Gotchas

- `baseURL` already includes `https://`. Never prefix it again (`Meta` and `Schema` normalise paths themselves; `Schema` expects a root-relative `image` like `/images/x.jpg`).
- `Schema` author URLs point at the home page because there is no `/about`.
- Internal navigation uses `next/link` (including `/#section` hashes); oxlint's `next/no-html-link-for-pages` enforces this. External links use plain `<a target="_blank" rel="noreferrer noopener">`.
- `npm run lint` reports warnings for untouched legacy blog/gallery files. Errors block; warnings do not.
- Do not remove the Once UI attribution in `Footer` — the template licence requires it.
- Node is pinned to 24.x in `package.json`; npm may skip `sharp` install scripts, but `sharp` resolves correctly at build time.
