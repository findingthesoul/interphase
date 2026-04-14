# Interphase

> Cultural architecture for organisations preparing to transform.
> *Change begins before it shows.*

A presentation suite of five perspectives on the Interphase thesis, built as a
small Astro static site.

## Stack

- **[Astro](https://astro.build)** — static site framework, zero JS by default
- **Plain CSS** — single design-system stylesheet at `src/styles/global.css`
- **Google Fonts** — Instrument Serif (display), Inter (body), JetBrains Mono (mono)

## Pages

| Path | Title |
| --- | --- |
| `/` | Index — five perspectives |
| `/01-concept` | Concept Note · Positioning & Market |
| `/02-metaphor` | The Biological Metaphor |
| `/03-product` | Tech Stack & MVP |
| `/04-chaperone` | The Chaperone Perspective |
| `/05-organisation` | The Organisation Perspective |

## Develop

```sh
npm install
npm run dev
```

Then open <http://localhost:4321/interphase/>.

## Build

```sh
npm run build       # outputs to ./dist
npm run preview     # serve dist locally
```

## Deploy — GitHub Pages

The site is configured for `https://findingthesoul.github.io/interphase/` via
`astro.config.mjs` (`site` + `base`). To deploy:

1. Push to `main` on the `findingthesoul/interphase` repo.
2. Add a GitHub Actions workflow (e.g. `withastro/action`) **or** push `dist/`
   to a `gh-pages` branch.
3. In the repo settings, enable Pages from the chosen source.

## Project structure

```
src/
├── components/    Nav, Footer, CellMark
├── layouts/       Base.astro — shared shell
├── pages/         index + 5 perspective pages
└── styles/        global.css — single source of truth for the design system
public/
└── favicon.svg    Cell mark
```

## Editing content

Each perspective page is a single `.astro` file in `src/pages/`. Content is
inline rather than abstracted into a CMS or content collection — the deck is
small enough that direct editing is faster than indirection. To add a section,
copy one of the existing `<section class="section">` blocks; the design tokens
are all in `src/styles/global.css`.

## Design system summary

- Background: `--ink` (#0B0A08)
- Foreground: `--bone` (#F4F0E3)
- Accent: `--amber` (#FFB627)
- Display type: Instrument Serif italic
- Body: Inter 17px / 1.7
- Labels & micro-copy: JetBrains Mono uppercase tracking
