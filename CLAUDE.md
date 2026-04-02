# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **THINKIA** (AI Builder program). Built with React 19 + Vite 7, vanilla CSS, and designed with a dark brutalista/minimalist aesthetic. The project is in Spanish.

## Commands

All commands run from `thinkia-landing/`:

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build to dist/
npm run build:full # Build + generate static route directories
npm run lint       # ESLint (flat config)
npm run preview    # Preview production build
```

## Architecture

**Single-page app with hash-based routing** — no router library. `App.jsx` reads `window.location.hash` and `window.location.pathname` to decide which page to render. Routes: `pago-confirmado`, `reserva-confirmada`, `privacidad`, `terminos`. Everything else renders the main landing page.

**Static route generation** — `generate-static-routes.cjs` runs post-build to create subdirectories in `dist/` (e.g., `dist/pago-confirmado/index.html`) with a `window.FORCE_ROUTE` injection, enabling clean URLs on static hosts without server-side config.

**Single-file output** — `vite-plugin-singlefile` inlines all assets into one HTML file. `base: './'` ensures relative paths.

**Styling** — All styles in `src/index.css` using CSS custom properties (see `:root` variables). Dark theme with orange accent (`--color-accent: #F57624`). Font: Inter via Google Fonts. No CSS modules or preprocessors.

**Component layout** — Landing page sections are numbered (`Section1`, `Section2`, `Section4`, `Section5`, `Section6`). Note: Section3 does not exist (was removed). `WorkshopBanner` is currently commented out in App.jsx.

## Key Conventions

- JSX components, vanilla CSS (no CSS-in-JS, no Tailwind)
- ESLint flat config with react-hooks and react-refresh plugins; `no-unused-vars` ignores uppercase/underscore-prefixed vars
- Multiple `generate-*.cjs` / `process-*.cjs` scripts in root are one-off favicon/logo processing utilities (not part of the app build)
