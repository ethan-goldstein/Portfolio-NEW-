# Ethan Goldstein — Portfolio

A minimalist black-and-white personal portfolio built with **React + Vite**,
featuring a live, **cursor-interactive Three.js particle field** (a GPU shader
starfield that glows and repels around the mouse), **cursor-reactive heading
text** (letters lift toward the pointer), a futuristic loader, smooth scrolling
(**Lenis**), a custom cursor, and multi-page routing.

## Pages

- **Home** — a single, no-scroll viewport: giant cursor-reactive name, HUD
  corners (location/email + chapter links). This is the index only.
- **Background · Interests · Skills · Projects · Experience (school + work) · Contact**
  — full scrollable pages, each its own route, with scroll animations and
  cursor-reactive headings/images.

## Quick start

```bash
npm install      # first time only
npm run dev      # start the dev server (opens http://localhost:5173)
npm run build    # production build → /dist
npm run preview  # preview the production build
```

## Make it yours — edit ONE file

Open **`src/content/data.js`**. Everything — your name, bio, mission, interests,
skills, projects, experience, and contact info — lives there. Search for the word
`PLACEHOLDER` to find the spots that most need your real details.

## Add images / videos

Drop files into **`public/assets/`** and point to them in `data.js`
(e.g. `media: '/assets/project-one.jpg'` or `'/assets/reel.mp4'`).
See `public/assets/README.md`. Empty media shows a styled gradient placeholder.

## Re-skin the look

The palette is monochrome (pure black + white). All theme colors are CSS
variables at the top of **`src/index.css`** (`--bg`, `--fg`, `--accent`, …).
Particle colors/size/behavior live in **`src/components/three/Scene.jsx`**
(see `uSize`, `uRadius`, `uStrength`, and the fragment-shader colors). The
loader timing is `DURATION` in `src/components/Loader.jsx`.

## Tech

React 18 · Vite · react-router-dom · @react-three/fiber + drei · three ·
framer-motion · lenis

## Deploy

Any static host works (Vercel, Netlify, GitHub Pages). Build with
`npm run build` and serve the `dist/` folder. On hosts without SPA fallback,
add a redirect so all routes serve `index.html`.
