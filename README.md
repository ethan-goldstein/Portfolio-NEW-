# ethangoldstein.dev

Personal portfolio of **Ethan Goldstein**: software engineer focused on AI systems, workflow automation, and LLM integration.

**Live site:** [ethangoldstein.dev](https://ethangoldstein.dev)

## What this site is

A cinematic, fully custom React portfolio. Every page has its own interactive identity, built from scratch rather than from a template:

| Page | Experience |
|---|---|
| **Home** | Fluid WebGL "liquid ether" background that reacts to the cursor |
| **Background** | Scroll-scrubbed video journey: an astronaut (luma-keyed to true transparency) drifting through an interactive galaxy starfield with cursor repulsion, film grain, and letterbox framing |
| **Interests** | A retro CRT laptop whose on-screen icons open live summaries |
| **Skills** | 20 tilted icon cards with desynchronized glow pulses, plus leadership badges |
| **Projects** | Apple-style 3D coverflow with real glass-floor reflections and a detail modal |
| **Experience** | Interactive perlin wave-line field; the timeline descends by year in paired glass cards with white/gold halos |
| **Resume** | Embedded, scrollable PDF with download fallback |
| **Contact** | Full-color brand icons with per-platform glow effects |

## Technical highlights

- **Scroll-driven video scrubbing**: page scroll drives `video.currentTime` with frame-quantized seeking on all-intra encoded video, plus automatic degradation to an ambient loop if seek latency is high
- **Alpha-channel video compositing**: the astronaut ships as luma-keyed HEVC+alpha (Safari) and VP9+alpha (Chromium/Firefox), composited live over a WebGL starfield
- **Three WebGL systems**: an `ogl` fluid simulation, an `ogl` galaxy shader with cursor repulsion, and a React Three Fiber particle field, swapped per route at the app level
- **Custom motion language**: line-mask text reveals, gradual edge blur, magnetic buttons, a custom blend-mode cursor, and Lenis smooth scrolling wired into framer-motion
- **Single content source**: all copy, projects, and experience live in one data file (`src/content/data.js`)

## Stack

React 18 · Vite 5 · framer-motion · Three.js / React Three Fiber · ogl · Lenis · GitHub Actions → GitHub Pages

## Run locally

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # serve the production build
```

Deploys automatically to GitHub Pages on every push to `master` via `.github/workflows/deploy.yml`.

## License

[MIT](LICENSE)
