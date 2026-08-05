# Your media goes here

Drop your AI-generated images and videos into this folder, then reference them
from `src/content/data.js`.

**Examples**

- Image: save `project-one.jpg` here → set `media: '/assets/project-one.jpg'`
- Video: save `reel.mp4` here → set `media: '/assets/reel.mp4'` (autoplays, muted, loops)

**The résumé does NOT live here.** It is at `src/assets/ethan-goldstein-resume.pdf`
and is `import`ed by `src/content/data.js`, so Vite gives it a content-hashed
filename and an updated PDF is never served from a stale browser cache. Files in
this folder keep one fixed URL forever, which is why the résumé was moved out.
To publish a new résumé, overwrite `src/assets/ethan-goldstein-resume.pdf`.

Supported video extensions auto-detected by the site: `.mp4`, `.webm`.
Anything left blank (`media: ''`) shows a styled gradient placeholder instead.

> Tip: keep images under ~500 KB and videos short (a few seconds, looping) for fast loads.
