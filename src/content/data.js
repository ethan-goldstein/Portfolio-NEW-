/* ============================================================================
 *  EDIT EVERYTHING ABOUT YOU HERE  -  this is the only file you need to touch
 *  to make the whole site yours. Swap the placeholder text/links below.
 *  Drop images/videos into /public/assets and reference them like
 *  "/assets/your-file.jpg".  Search this file for the word "PLACEHOLDER".
 * ========================================================================== */

// Prefixes public files with the site's base URL so they work on GitHub Pages.
const asset = (file) => import.meta.env.BASE_URL + 'assets/' + file

export const profile = {
  name: 'Ethan Goldstein',
  initials: 'EG',
  role: 'Software Engineer',
  // Short punchy tagline shown big on the home hero
  tagline: 'Systems Engineering | Applied ML | AI Agents',
  // One or two sentences under the hero
  intro:
    'Computer Information Systems major at the University of South Carolina building scalable, AI-driven applications, from autonomous agent systems to workflow automation that runs real businesses.',
  location: 'Washington, DC',
  availability: 'GovCIO', // e.g. "Available for freelance"
  email: 'ethan.goldstein.dev@gmail.com',
  // Your photo for the Contact page: drop one in /public/assets and point here.
  // Leave '' to show a styled placeholder.
  photo: asset('ProfilePicture.jpg'),
  // Resume file: drop a PDF into /public/assets and point here (optional)
  resumeUrl: asset('ethan-goldstein-resume.pdf'),
}

// Order + labels of the navigation / pages. Keep paths matching App.jsx routes.
export const nav = [
  { id: '00', label: 'Home', path: '/' },
  { id: '01', label: 'Background', path: '/background' },
  { id: '02', label: 'Interests', path: '/interests' },
  { id: '03', label: 'Skills', path: '/skills' },
  { id: '04', label: 'Projects', path: '/projects' },
  { id: '05', label: 'Experience', path: '/experience' },
  { id: '06', label: 'Resume', path: '/resume' },
  { id: '07', label: 'Contact', path: '/contact' },
]

// `icon` is a key into SOCIAL_ICONS in components/SocialIcons.jsx (local inline
// brand marks). Add a matching entry to BRAND_COLORS in pages/Contact.jsx too.
export const socials = [
  { label: 'GitHub', handle: '@ethan-goldstein', url: 'https://github.com/ethan-goldstein', icon: 'github' },
  { label: 'Twitter / X', handle: '@egolddev', url: 'https://x.com/egolddev', icon: 'x' },
  { label: 'LinkedIn', handle: '/in/ethangoldstein', url: 'https://linkedin.com/in/ethangoldstein', icon: 'linkedin' },
  { label: 'Gmail', handle: 'ethan.goldstein.dev@gmail.com', url: 'mailto:ethan.goldstein.dev@gmail.com', icon: 'gmail' },
  { label: 'TikTok', handle: '@ai.dev.work', url: 'https://tiktok.com/@ai.dev.work', icon: 'tiktok' },
]

/* ----------------------------- BACKGROUND ------------------------------- */
export const background = {
  // "About me" lead: who I am right now, in one confident paragraph
  about:
    "I'm Ethan Goldstein, a software engineer in Washington, DC. My day job is federal: I work in GovCIO's Veteran and Enterprise Technology Sector, supporting the Department of Veterans Affairs modernization program, processing and validating confidential records under an active Public Trust credential. That work is where I learned to treat provenance and access as requirements rather than features, and it shows up in everything I build on my own time. I write systems in three fairly different directions. PARALLAX is a bitemporal analytical engine in C++20 compiled to WebAssembly, where I wrote the query language end to end, lexer through cost-based planner, over a columnar store that answers what you believed at one time about another time. NULLHYP is a quantitative research engine with every model hand-written and zero dependencies, and its headline result is that its own models have no edge: a Sharpe of 2.46 in sample becomes minus 0.18 out of it, and the engine prints that in red before it shows you a single chart. WiFi Sensing Lab detects human motion from signal strength alone, which I measured at p equals 0.017 against a permutation null instead of asserting, after diagnosing that the band the published work uses is unobservable at the rate a consumer router can actually be sampled. Autonomous OS is the fourth: an 11-agent orchestration platform, roughly 12,800 lines of Node, TypeScript, and React, that runs around the clock on hardware I own and keeps a human approval gate between every agent and every outbound action. Across all four the model is the smallest part of the work. The engineering is the machinery built to prove the result wrong. I'm finishing a Computer Information Systems degree at the University of South Carolina, expected May 2027.",
  // The story: how the judgment got built, told through what broke
  story: [
    'The first thing I ever shipped was a static portfolio in hand-written HTML, CSS, and JavaScript. What stuck was not the code, it was the habit of putting work on a public URL where it either runs or it does not. Browser games came next, and they turned out to be a systems problem in a costume: a simulation loop pinned to a fixed 60Hz step and fully decoupled from rendering, and authoritative state that lives on the server because a client you do not control will always lie to you.',
    'Most of the architecture I am proud of started as something breaking, and rarely in the place I was looking. Unbounded process forking took an 8GB machine down more than once, so model inference now runs behind a FIFO semaphore capped at 2 concurrent processes. My own WiFi test reported less in-band energy for a walking person than for an empty room, which turned out to be correct: the 0.5 to 3 Hz gait band the literature uses is unobservable at the rate a consumer router can be polled, so the whole project moved to a slower band I could actually sample. A fractional differencing family in my research engine was silently all NaN because the textbook truncation threshold wants a 3,700 term window on a 2,513 bar series, and the test that should have caught it was passing vacuously on the same bug. In my C++ engine, size_t is 32-bit under wasm32 and 64-bit natively, so code that compiles clean for the browser hard-errors on the desktop build, which is the entire reason I keep both targets. None of that came from a tutorial. Each one came from a system failing in a specific way and forcing a specific decision.',
    "What interests me now is building the thing that tries to disprove the result before I believe it. When I wrote a columnar store I wrote a deliberately naive one first, so the fast version had something to be wrong against, and it caught an antimeridian box that inverted and silently matched nothing. When I wrote a research engine I wrote the validation before any model, then reimplemented the whole pipeline a second time in pandas to see whether the two agreed. When I measured motion from WiFi I built the permutation null before I trusted the number, and the first version of that null was wrong precisely because it looked too good. Scheduling an agent fleet taught me the same lesson from the other end: a laptop sleeps through a run nobody is awake for, so a sweep replays whatever was missed with a slack window wide enough that recovery never races the live slot. That is the direction I am pointed: systems where the hard part is not the happy path, it is everything that has to hold when the answer is wrong.",
  ],
  // Things people should know about how you work
  values: [
    {
      title: 'Security by construction',
      text: 'The auth gate is mounted before any route is declared, so a new endpoint physically cannot ship unauthenticated. There is deliberately no localhost bypass either, because Tailscale terminates TLS on the same machine and a 127.0.0.1 exemption would have quietly turned auth off across the whole network.',
    },
    {
      title: 'Fewer moving parts',
      text: "Storage is Node's built-in SQLite: 13 tables, no ORM, no native builds, nothing to migrate. My research engine has zero dependencies in its numerics, so every model in it is code I can be held responsible for, and it runs with no build step at all. Fewer parts means fewer places for a bug to hide behind someone else's abstraction.",
    },
    {
      title: 'Correct before fast',
      text: 'Before I optimised my columnar store I wrote a deliberately naive one, a linear scan with no indexes, so the fast version had an oracle it had to agree with rather than a benchmark it had to beat. 130 test cases run under AddressSanitizer and UndefinedBehaviorSanitizer on every push, and the query parser is fuzzed in CI.',
    },
    {
      title: 'Measured, not asserted',
      text: 'A result I have not tried to break is not a result. I published a WiFi sensing AUC only after revising it down from 0.960 to 0.671, because the higher number leaned on devices people carry around with them, and I published the two benchmark bugs that had made my own C++ engine look faster than it is.',
    },
    {
      title: "Careful with other people's data",
      text: 'I handle confidential federal records under a Public Trust credential by day, and the habit carries. My presence-sensing work is split across two repositories so the half that reads a real home has no remote at all, and the public half contains no network client to remove. Where I query registration data, identity is discarded in the adapter before it ever reaches storage.',
    },
  ],
  // Rendered as the "04 · What I'm Pursuing" section in pages/Background.jsx.
  // The certifications entry is quoted from Ethan and is not to be reworded.
  pursuing: [
    {
      title: 'The degree',
      text: 'B.S. Computer Information Systems with a minor in Business Information Management at the University of South Carolina, expected May 2027. Coursework in data structures and algorithms, information security principles, web applications, and a capstone computing project.',
    },
    {
      title: 'Certifications',
      text: 'Pursuing Azure (AZ-104, AZ-900), CompTIA Security+ and Network+ certifications.',
    },
    {
      title: 'A semester in Florence',
      text: 'I spent Spring 2026 studying at Florence University of the Arts, 109 days across 8 countries and 18 weekend trips. I built the trip tracker for it too, a photoreal globe that flies between stops, which is on the projects page.',
    },
    {
      title: 'Where I am aiming',
      text: 'Systems work where correctness is checkable: storage and query engines, numerical code with real validation behind it, and the infrastructure that has to keep holding when a model or a measurement turns out to be wrong. I would rather own a hard guarantee than a large surface.',
    },
  ],
}

/* ----------------------------- INTERESTS -------------------------------- */
// EXACTLY 6 items: the CRT screen in pages/Interests.jsx is a hardcoded 3x2 grid.
// Titles must stay under ~15 characters or the label wraps to two lines, and
// `text` must stay under ~195 characters: .crt-window-body is overflow:hidden
// with no scroll, so anything longer gets clipped at both ends.
export const interests = [
  {
    title: 'Local-First AI',
    text: "I like systems that still work with the network unplugged. My dashboard's gesture control ships its own wasm runtime and model, so no camera frame ever leaves the machine.",
    emoji: '🧠',
  },
  {
    title: 'Live Telemetry',
    text: 'Refreshing a page to learn what happened is a design failure. My Server-Sent Events hub pushes agent status and logs the instant they exist, with heartbeats so proxies never kill the stream.',
    emoji: '📡',
  },
  {
    title: 'Falsification',
    text: 'The interesting half of a result is the machinery built to kill it. A naive oracle written before the fast one, validation written before any model, a permutation null before any p value.',
    emoji: '🎯',
  },
  {
    title: 'Two Time Axes',
    text: 'What you believed at one time, about another time. A correction that arrives late should not erase what the record used to say, so system time and valid time are stored separately.',
    emoji: '🕰️',
  },
  {
    title: 'Fallback Paths',
    text: 'Every build needs an answer for when the good path is gone. One site degrades video to a still to a CSS gradient, and every gesture input I ship has a keyboard and touch equivalent.',
    emoji: '🪜',
  },
  {
    title: 'Signal vs Noise',
    text: 'A quiet channel does not read zero. Each link learns its own noise floor and trips at a multiple of it, so one fixed threshold cannot go deaf on weak links and scream on strong ones.',
    emoji: '📶',
  },
]

/* ------------------------------- SKILLS --------------------------------- */
// Skills page is a single-screen grid of tilted icon cards.
// `icon` is the devicon icon path (folder/file, no extension) - browse
// https://devicon.dev and use the colored "-original" (or "-plain") variant.
// Verify a new path resolves against the DEVICON_BASE in pages/Skills.jsx before
// committing: a 404 renders a silently empty tile.
export const skills = {
  // Top line shown above the grid
  intro: 'Different stacks, different problems, the same obsession with craft.',
  // EXACTLY 30 cards = 6 across × 5 down, sized to fit one screen. Both counts are
  // hardcoded in .skills-grid (index.css) and /skills does not scroll, so grow the
  // grid by adding a COLUMN; a sixth row falls off the bottom of the viewport.
  cards: [
    { name: 'C++', icon: 'cplusplus/cplusplus-original' },
    { name: 'Python', icon: 'python/python-original' },
    { name: 'TypeScript', icon: 'typescript/typescript-original' },
    { name: 'JavaScript', icon: 'javascript/javascript-original' },
    { name: 'Java', icon: 'java/java-original' },
    { name: 'WebAssembly', icon: 'wasm/wasm-original' },
    { name: 'CMake', icon: 'cmake/cmake-original' },
    { name: 'NumPy', icon: 'numpy/numpy-original' },
    { name: 'pandas', icon: 'pandas/pandas-original' },
    { name: 'scikit-learn', icon: 'scikitlearn/scikitlearn-original' },
    { name: 'SQL', icon: 'sqlite/sqlite-original' },
    { name: 'Node.js', icon: 'nodejs/nodejs-original' },
    { name: 'Express', icon: 'express/express-original' },
    { name: 'React', icon: 'react/react-original' },
    // -original (gradient N in a circle), not -original-wordmark: the wordmark is
    // solid black and disappears against the dark tile.
    { name: 'Next.js', icon: 'nextjs/nextjs-original' },
    { name: 'Vite', icon: 'vitejs/vitejs-original' },
    { name: 'Three.js', icon: 'threejs/threejs-original' },
    { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original' },
    { name: 'Framer Motion', icon: 'framermotion/framermotion-original' },
    { name: 'HTML5', icon: 'html5/html5-original' },
    { name: 'CSS3', icon: 'css3/css3-original' },
    { name: 'Cloudflare Workers', icon: 'cloudflareworkers/cloudflareworkers-original' },
    { name: 'Bash', icon: 'bash/bash-original' },
    { name: 'Git', icon: 'git/git-original' },
    { name: 'GitHub', icon: 'github/github-original' },
    { name: 'Blender', icon: 'blender/blender-original' },
    { name: 'After Effects', icon: 'aftereffects/aftereffects-original' },
    { name: 'Photoshop', icon: 'photoshop/photoshop-original' },
    { name: 'CAIO', iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Ctext x='64' y='78' text-anchor='middle' font-family='Helvetica, Arial, sans-serif' font-weight='800' font-size='36' letter-spacing='1' fill='white'%3ECAIO%3C/text%3E%3C/svg%3E" },
    { name: 'SaaS', iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Ctext x='64' y='78' text-anchor='middle' font-family='Helvetica, Arial, sans-serif' font-weight='800' font-size='38' letter-spacing='1' fill='white'%3ESaaS%3C/text%3E%3C/svg%3E" },
  ],
}

/* ------------------------------ PROJECTS -------------------------------- */
// media: drop files in /public/assets and reference "/assets/name.jpg" (or .mp4/.webm).
//        Leave media empty ('') to show a stylised gradient placeholder.
// url:     the LIVE project link (shows a "View live project" button in the modal).
// private: true = runs on a private server; the modal shows a PRIVATE badge instead of a link.
export const projects = [
  {
    title: 'WiFi Sensing Lab: Motion Detection from Signal Strength',
    year: '2026',
    category: 'Signals · Python / React',
    blurb: 'Detecting human motion from WiFi signal strength alone, measured against a real gateway rather than asserted. The public demo is structurally incapable of touching a network.',
    description: [
      "I wanted to know whether the WiFi-sensing demos that go viral, the ones claiming to see a human skeleton through drywall, could be reproduced on a router that already exists in a normal home. The answer is no, and the two reasons why are the interesting part. The first is that pose estimation needs Channel State Information, the per-subcarrier amplitude and phase, and commodity WiFi silicon computes CSI and then discards it before anything in userspace can read it; macOS never exposes it and neither does stock router firmware, so it is a driver limitation rather than something better code routes around.",
      "The second I found by writing the bug. Published work uses a 0.5 to 3 Hz gait band because human stride lands near 2 Hz, and I implemented that band faithfully, then watched my own test report less in-band energy for a walking person than for an empty room. Polling a consumer router's association table tops out near 1 to 2 Hz, which puts Nyquist at 0.5 to 1 Hz, and sampling a 2 Hz sine at 4 Hz is not merely aliasing: every sample lands on a zero crossing and the component disappears outright. So the literature's band is unobservable at the only rate you can actually sample, and I retargeted onto the 0.1 to 0.8 Hz body-shadowing envelope, the slower swell as a torso occludes and reveals propagation paths, which is genuinely measurable.",
      "The detector that sits on top learns a per-link threshold rather than using a fixed one, because a quiet link does not read zero: white receiver noise of sigma dB spreads across the spectrum and contributes the square root of the band fraction times sigma inside the motion band, roughly 0.34 dB on a link where nothing whatsoever is happening, and that floor differs per link so a fixed threshold either goes deaf on weak links or screams on strong ones. The floor tracker is deliberately asymmetric, falling fast and rising slowly, so a long stretch of motion cannot drag the floor up behind it and blind the detector. The discriminating result is that a slow thermal drift trace has a larger standard deviation than a walking trace and still reads as stillness, because its energy lands below the band: 2.23 dB of in-band RMS for walking against 0.33 for drift, which is the noise floor exactly.",
      "None of that would mean anything unmeasured, so I built the collector against my own gateway and ran controlled walks. Two things surfaced that no amount of reasoning would have. The station table the admin UI displays is a cached snapshot that refreshes roughly every twenty seconds no matter how fast you poll, which puts Nyquist at 0.025 Hz and makes motion unrecoverable from it; a different field in the same 142 KB response is read live and updates every 1.7 seconds, about ten times the information rate for the identical request, and switching to it was the difference between a dead system and a working one. The real effective rate is 0.6 Hz rather than the 2 Hz the poll loop implies, so the usable band narrows to 0.1 to 0.27 Hz, meaning events lasting four to ten seconds: a person crossing a room, not a footstep.",
      "The validation is a walk with the window read off a wall clock, scored as the probability that a window inside the walk ranks above one outside it, which gave a median AUC of 0.676 across ten links with the best link at 0.960, against a permutation null built by sliding a same-length window over the still-only stretches that sat at 0.503 with a range of 0.480 to 0.525, so p came out at 0.017. The first version of that null was wrong and I caught it because it was too good: it reported a median of 0.381 rather than 0.5, because every fake window's comparison set still contained the real walk, which inflated the baseline and made the observed value look more extreme than it was. What I find most worth keeping is the trial before it, which came back at exactly chance and nearly became a written-up negative result: the only difference was that its walk window had been inferred from a description instead of measured, and imprecise labels had buried a real effect entirely.",
      "Because the collector reads a real home, I split the work in two. The public half, which is what you are looking at, contains no network client, no router code, no credential path and no database, so it cannot read a network even if instructed to, which is a stronger guarantee than a disabled demo flag; a leak scan gates every push on both identifying data and the presence of any fetch, XMLHttpRequest, WebSocket or sendBeacon in the shipped bundle, and Vite's modulepreload polyfill is disabled specifically so that check passes with zero exceptions. The private half has no git remote at all. What ties them together is a parity test: the JavaScript signal processing and the Python it was ported from are run against a shared fixture and must agree to within 1e-9, with the DFT written out explicitly rather than pulled from a library so the two can be compared bin for bin. Even the demo video on this card is generated by running the actual simulation and rendering its frames, rather than screen-recorded, so it cannot drift away from the code it depicts.",
    ],
    tags: ['Signal processing', 'React', 'NumPy', 'FFT', 'Privacy engineering'],
    media: asset('wifi-sensing.mp4'),
    url: 'https://ethan-goldstein.github.io/wifi-sensing-lab/',
    repoUrl: 'https://github.com/ethan-goldstein/wifi-sensing-lab',
  },
  {
    title: 'PARALLAX: Bitemporal Analytical Engine',
    year: '2026',
    category: 'Systems · C++ / WebAssembly',
    blurb: 'A C++20 analytical engine compiled to WebAssembly that answers what you believed at one time about another time. Twelve live intelligence feeds, entirely in the browser.',
    description:
      "An analytical engine written in C++20 and compiled to WebAssembly, answering a question most databases cannot: what did we believe at system-time S about valid-time T. Two independent time axes, so a correction that arrives late does not erase what the record used to say. Drag the vertical axis and the map rewinds what was known rather than what happened, which is the question an analyst actually has after a magnitude is revised from 4.8 to 5.2 six hours late. I wrote the query language end to end: lexer, parser, flat AST, and a cost-based planner with an EXPLAIN viewer that shows the access path it chose and where its own row estimate was wrong. Storage is a columnar bitemporal store with zone maps and a SIMD scan kernel, indexed spatially by a Z-order curve because a range on that curve is a contiguous slice, which is what makes a bounding-box count two binary searches instead of a scan. On top sit entity resolution over real cross-agency duplicates and a policy engine that refuses a query at plan time rather than filtering its output: ask it to identify one aircraft by callsign and it declines before reading a single row, and the refusal is itself written into the store as a fact on the same two axes. That refusal is sound rather than a guess because two of the four cardinality estimators are exact, not approximate: system time is a monotone transaction id, and a Z-order range is contiguous. The correctness story is differential testing against a deliberately naive oracle written before the optimised version so it could not inherit its bugs, which caught an antimeridian box that inverted and silently matched nothing. The parser is continuously fuzzed in CI at 12.3 million executions per minute under ASan and UBSan. Twelve live feeds run through it, seismic and maritime AIS and civil and military aviation and weather warnings and orbital element sets, with no backend, no API keys and no login, which constrains every source to be keyless and CORS-open. Each one is declared with its licence, and the obligations that come with mixing them are computed rather than assumed: the curated port list, for instance, is a selection I authored over coordinates that remain OpenStreetMap's under ODbL, so the engine reports both. Graph analytics are built and tested but deliberately not wired into the interface, which the repository says plainly rather than leaving you to find out.",
    tags: ['C++20', 'WebAssembly', 'Query planner', 'SIMD', 'libFuzzer', 'TypeScript'],
    media: asset('parallax.mp4'),
    url: 'https://ethan-goldstein.github.io/parallax/',
    repoUrl: 'https://github.com/ethan-goldstein/parallax',
  },
  {
    title: 'Autonomous OS: Agent Orchestration Platform',
    year: '2026',
    category: 'AI · Full-Stack',
    blurb: 'Eleven autonomous agents on a framework I built. Running 24/7 on hardware I own, with a human approval gate on every outbound action.',
    description:
      "A self-hosted platform that runs eleven autonomous agents unattended, with a human approval gate standing between every agent and every action that reaches the outside world. The orchestration framework is open source; the fleet I run on it is not. Adding an agent is one file and one registry line: it inherits cron scheduling, SQLite persistence, live log streaming, and error capture from a shared base class. The model layer is a two-tier dispatcher, a headless Claude Code CLI first with a local Ollama fallback behind a 10-minute persisted circuit breaker, and inference capped at 2 concurrent processes on a FIFO semaphore after unbounded forking crashed an 8GB machine. Storage is Node's built-in SQLite with no ORM, moved to WAL journaling and a 5-second busy timeout after concurrent writes started failing boots. A hand-rolled Server-Sent Events hub streams state into a React and TypeScript dashboard, and a sleep-proof sweep re-parses every cron expression to replay whatever a sleeping machine missed. The part I care about most is the trust layer: one egress queue where risky lanes can never be auto-approved, checked before any setting is read, and every model call funnelled through a single chokepoint that treats fetched content as data. Zero-dependency HMAC session auth sits behind a gate mounted ahead of every route, with deliberately no localhost bypass. Ships as an installable PWA.",
    tags: ['Node.js', 'React', 'TypeScript', 'node:sqlite', 'SSE', 'Claude + Ollama'],
    media: asset('mission-control.mp4'),
    url: 'https://ethan-goldstein.github.io/Autonomous-OS/',
    repoUrl: 'https://github.com/ethan-goldstein/Autonomous-OS',
  },
  {
    title: 'NULLHYP: Quantitative Research Engine',
    year: '2026',
    category: 'Quant ML · TypeScript',
    blurb: 'Hand-written machine learning that proves its own results are fiction. A 2.46 in-sample Sharpe becomes minus 0.18 out of sample, and the engine says so.',
    description: [
      "A quantitative research engine built on the premise that predicting price is the easy half and the hard half is knowing whether an apparent edge is real. The numerics are written from scratch with zero dependencies and run in a Web Worker in the visitor's own browser: 83 causal features across eleven families, fractional differentiation at the smallest exponent that passes an augmented Dickey-Fuller test so the series becomes stationary without losing all memory, CUSUM event sampling that cuts the sample by roughly four times because predicting every bar oversamples noise, and triple-barrier labelling where a profit target, a stop, and a time limit race and whichever is touched first decides the label.",
      "Validation was written before any model, deliberately. Plain K-fold is not merely imprecise on financial labels, it is wrong: a label at bar 100 with a ten day horizon is decided by returns the label at bar 105 also depends on, so putting one in train and the other in test writes the test answer on the training sheet, which alone lifts a no-edge strategy above a Sharpe of 1. Purging drops any training label whose lifespan overlaps the test window, and an embargo removes a further band afterward because rolling features reach backward into it. The part I am most pleased with is the lookahead audit: every feature is recomputed on the series truncated at bar t and must reproduce its own value at t, because a feature that peeked ahead cannot, since the bar it peeked at does not exist. That test found rolling helpers emitting on partial windows, and a fractional differencing family that was silently all NaN because the textbook truncation threshold needs a 3,700 term window on a 2,513 bar series. It also caught one of my own tests passing vacuously on exactly that bug.",
      "The data layer survived losing two providers mid-build, one to a proof-of-work bot wall and one to rate limiting, so it fails over across three sources and states on the page which adjustment the prices actually carry. The engine now reports, out of its own mouth, that it has not found an edge: on SPY it scores a Sharpe of 1.49 in sample and minus 0.31 out of sample, a deflated Sharpe of 0.06 against the 0.95 it would need, and it loses to buy and hold. That verdict is printed in red at the top of the results page before any chart, because the honest reading of a backtest should not be something a visitor has to reverse engineer from a wall of statistics. An always-flat control returns exactly zero, which is how I know the cost model is not charging for trades that never happened.",
      "Combinatorial purged cross-validation then makes the honest accounting computable: the sample is split into six groups and every pair is used as a test set, so each group is tested five times against differently purged training data and recombining those gives five distinct backtest paths instead of one. Sweeping a twelve point grid across all fifteen splits puts the probability of backtest overfitting at 84 percent and, more damning, gives a degradation slope of minus 0.66. That slope is negative, which means a better in sample score predicts a worse out of sample one: on this data, selecting the best configuration is not merely useless, it is actively harmful compared with picking one at random. The deflated Sharpe uses twelve real trials rather than the hundred that implementations usually assume.",
      "Because none of this sits on a library, I reimplemented the whole pipeline a second time in pandas, numpy and scikit-learn and compared it stage by stage: the CUSUM event indices, all 582 triple-barrier labels with their decision times and which barrier was touched, and the train, test, purged and embargoed membership of all five folds match exactly, and both stacks reach the same verdict. That cross-check found three real bugs, including one where a single column CSV of missing values produced blank lines that pandas silently skipped, dropping every warmup row and shifting each index after it. The clearest artefact is the learning curve on the models page: training loss falls steadily to 0.376 while held out validation sits flat at 0.659 and never improves, which is memorisation without generalisation drawn in one picture, and it explains the negative out of sample result better than any paragraph could.",
    ],
    tags: ['TypeScript', 'Web Workers', 'Zero-dependency ML', 'node:sqlite', 'Purged CV', 'Canvas'],
    media: asset('nullhyp.mp4'),
    url: 'https://ethan-goldstein.github.io/nullhyp/',
    repoUrl: 'https://github.com/ethan-goldstein/nullhyp',
  },
  {
    title: 'Turbo Rumble GP',
    year: '2026',
    category: 'Game · WebGL',
    blurb: 'An 8-player kart racer with real-time multiplayer rooms and four ways to play.',
    description:
      'A kart racer built as a lesson in graceful degradation: 8 racers, 4 karts, a 4-track Grand Prix, and 7 items to fight for position. Realtime multiplayer runs server-authoritative on a Cloudflare Durable Object, and when a room cannot fill it backfills with AI drivers and falls all the way back to a solo race rather than showing anyone an error. Four input paths are equal citizens, keyboard, gamepad, touch, and hands-free MediaPipe hand tracking where you steer with your palms, and every one of them resolves to the same input abstraction so the physics never knows which is driving.',
    tags: ['Three.js', 'Cloudflare Durable Objects', 'MediaPipe', 'WebGL'],
    media: asset('turbo-rumble-gp.jpg'),
    url: 'https://ethan-goldstein.github.io/turbo-rumble-gp/',
  },
  {
    title: 'Speech Developmental Services',
    year: '2026',
    category: 'Client Work · Web',
    blurb: 'A dimensional, scroll-driven site for a pediatric speech-language pathologist, opened by a 3D pen drawing her logo in ink.',
    description:
      'Real client work: the live site for Speech Developmental Services (Shana Kilcawley, CCC-SLP), a pediatric speech therapy practice serving Arlington, VA and telehealth clients across four states. The 3-second intro is a custom stroke-drawing engine: her logo is auto-traced into vector contours with marching squares over the PNG, and a three.js fountain pen draws the outline in real time before it crossfades into the periwinkle mark. It is code-split so it never weighs down the main bundle, skippable, and fully reduced-motion aware. Inside, a second three.js scene floats soft glass orbs behind the hero with scroll parallax, and the whole page moves on scroll: a gradient progress bar, 3D card entrances, and a step timeline that fills as you read. Every line of copy is driven from a single content file so the owner can edit her own site without ever touching a component. React 18 and Vite, deployed through GitHub Actions to Pages.',
    tags: ['React', 'Three.js', 'Framer Motion', 'Vite'],
    media: asset('speech-developmental-services.jpg'),
    url: 'https://speechdservices.com/',
  },
  {
    title: 'HAYMAKER: Rise Through the Ranks',
    year: '2026',
    category: 'Game · WebGL',
    blurb: 'A first-person boxing sim you can literally punch your way through: webcam, controller, keyboard, or touch.',
    description:
      'A first-person 3D boxing sim in the browser, and a study in simulation design: the fight loop runs on a fixed 60Hz timestep fully decoupled from rendering, so scoring, stamina drain, and knockdown counts stay deterministic no matter what frame rate the machine can hold. On top of that sit real boxing systems: breakable guard, slips, ducks, counters, stamina, knockdowns with a 10-count mash, and three judges scoring to a decision. Career mode has you create a boxer and climb from rank #20 to a Vegas title fight with purses, training camps, and title defenses; freeplay adds an 8-fighter roster, 5 arenas, and selectable 1, 3, 5, 8, or 12-round bouts. All four input methods are first-class and degrade cleanly into each other, including fully in-browser MediaPipe hand tracking so you throw real punches at the camera and never touch a key. Every portrait, arena, and sound was generated with Higgsfield under one locked art direction.',
    tags: ['Three.js', 'MediaPipe', 'WebGL', 'Higgsfield AI'],
    media: asset('haymaker.jpg'),
    url: 'https://ethan-goldstein.github.io/haymaker-boxing/',
  },
  {
    title: 'Golden Spikes',
    year: '2026',
    category: 'Game · WebGL',
    blurb: 'An 8-mode baseball game playable with a keyboard, touch, a PS4 controller, or your bare hands.',
    description:
      'A full browser-based baseball game across eight modes: My Career, Home Run Derby, Dynasty card packs, Batting Practice, Fielding, a strength and drills mode called The Forge, quick mini-games, and real-time multiplayer rooms. The multiplayer runs server-authoritative on a Cloudflare Durable Object, so game state lives at the edge rather than in any client, which is the only honest way to run a competitive room when you do not control the browser on the other end. There is no traditional backend and no server to keep alive. Built in vanilla JavaScript and Three.js on a fixed-timestep simulation, with MediaPipe pose tracking for fully hands-free play: cross your wrist over midline and the bat swings.',
    tags: ['Three.js', 'Cloudflare Durable Objects', 'MediaPipe', 'WebGL'],
    media: asset('golden-spikes.jpg'),
    url: 'https://ethan-goldstein.github.io/golden-spikes/',
  },
  {
    title: 'Casa Cavallino: A Private Ferrari Residence',
    year: '2026',
    category: 'Cinematic Web · AI Film',
    blurb: 'A scroll-scrubbed cinematic flythrough of a fictional Ferrari mansion on the Amalfi Coast. The whole site is one continuous generated camera flight.',
    description:
      "A luxury-brand-film website where scrolling flies you through an entire estate: fourteen AI-generated flythrough clips chained room to room, from the coast approach and infinity pool through a pivot door that swings open as you enter, the family room, kitchen, primary suite, a Ferrari apparel wardrobe, guest suites and a racing-sim lounge, down to a keypad-locked underground collection (the code is Ferrari's founding year), a vintage 'La Storia' wing with a 250 GT and F40, and a cliff tunnel that bursts out into the night. The engineering underneath is a media manifest that degrades every scene from video to a still image to a CSS gradient, so the site stayed navigable and shippable before a single final asset existed. On desktop, scroll position drives video frames directly through all-keyframe encodes; phones get play-through clips with matched hold frames. Twelve-car spotlight configurator with specs and collector notes, synthesized ocean ambience, full keyboard and reduced-motion accessibility. Every still and film clip generated with Higgsfield (Cinema Studio and Seedance) from one locked art direction. Next.js static export on GitHub Pages.",
    tags: ['Next.js', 'GSAP + Lenis', 'Scroll-scrubbed video', 'Higgsfield AI'],
    media: asset('casa-cavallino.jpg'),
    url: 'https://ethan-goldstein.github.io/casa-cavallino/',
    repoUrl: 'https://github.com/ethan-goldstein/casa-cavallino',
  },
  {
    title: 'AM: Apple Music Concept',
    year: '2026',
    category: 'UX/UI · Audio',
    blurb: 'A glassy, Apple-style music home built from my real playlists, with every preview synthesized in-browser.',
    description:
      'An unofficial Apple Music fan concept that opens on an AI-generated cinematic reveal (Higgsfield) and lands in a glassmorphic personal music home: four station mixes built from my real synced playlists (house, classy, country, and a rap library), a Listen Now player whose color tint follows the track across the whole page, a searchable library of 480+ real track listings, tilt-and-gloss album tiles, a Higgsfield-generated 3D studio room, and a floating mini-player dock. The licensing problem became the interesting constraint: rather than ship a single audio file, every preview is procedurally synthesized at runtime with the Web Audio API, so there are no recordings anywhere in the project and nothing is for sale.',
    tags: ['Web Audio API', 'JavaScript', 'Higgsfield AI', 'model-viewer 3D'],
    media: asset('apple-music.webm'),
    url: 'https://ethan-goldstein.github.io/AppleMusic/',
  },
  {
    title: 'ABROAD: A Semester in Motion',
    year: '2026',
    category: 'UX/UI · 3D',
    blurb: 'A photoreal 3D globe trip tracker mapping 18 weekends across a semester in Florence.',
    description:
      'An interactive photoreal globe tracking a full study-abroad semester: 109 days, 8 countries, 20+ cities, 18 weekend trips, each pinned to the map with its own story. Scroll drives a camera that flies low over real terrain from one stop to the next, with GSAP and Lenis smoothing the travel and every leg interpolated on the sphere so the path curves the way a flight actually would. Built with React, Three.js, and Vite.',
    tags: ['React', 'Three.js', 'GSAP', 'Vite'],
    media: asset('abroad-globe.jpg'),
    url: 'https://ethan-goldstein.github.io/abroad/',
  },
  {
    title: 'WALLPR: Wallpaper Storefront',
    year: '2026',
    category: 'E-commerce · Web',
    blurb: 'A minimal one-page hero store selling impasto-painted wallpapers as instant digital downloads.',
    description:
      'A single-viewport storefront for AI-assisted oil-painting wallpapers: a non-scrollable hero of four expanding category panels (Sports, Places, Lifestyle, Animals) that open per-category galleries rendered from one product manifest. Checkout is fully outsourced to a merchant-of-record provider, which means hosted overlay checkout, global sales tax and VAT handling, and secure expiring download delivery, so the static site holds zero secrets and touches zero payment data. Per-page Content Security Policy locks script, frame, and connect sources to a known allowlist. No cookies, no trackers, no PII collected, and full-resolution originals never enter source control. Pure HTML, CSS, and JavaScript, no build step, deployed on GitHub Pages.',
    tags: ['HTML/CSS/JS', 'E-commerce', 'Merchant of Record', 'Higgsfield AI'],
    media: asset('wallpr.jpg'),
    url: 'https://wallpr.us/',
  },

]

/* ----------------------- EXPERIENCE: SCHOOL + WORK ---------------------- */
export const experience = {
  work: [
    {
      role: 'Data Processor',
      org: 'GovCIO',
      period: '2026 - Present',
      location: 'Tysons Corner, VA',
      points: [
        "Work within GovCIO's Veteran and Enterprise Technology Sector, the group delivering technology services to the Department of Veterans Affairs.",
        'Process and validate multiple types of IRS documents in support of the Department of Veterans Affairs modernization program.',
        'Run high-volume digitization workflows: scanning, indexing, and quality checks on confidential federal records.',
        'Hold an active USAccess Public Trust credential for work with U.S. Department of the Treasury / IRS data.',
        'Coordinate daily throughput targets with the wider GovCIO processing team.',
      ],
    },
    {
      role: 'Systems & Research Engineer',
      org: 'Independent Practice',
      period: '2025 - Present',
      location: 'Remote',
      points: [
        'Built PARALLAX, a bitemporal analytical engine in C++20 compiled to WebAssembly: the query language written end to end from lexer through cost-based planner, over a columnar store with zone maps and a Z-order spatial index, verified by differential testing against a deliberately naive oracle written first so it could not inherit the optimised version and its bugs.',
        'Built NULLHYP, a quantitative research engine with every model hand-written and zero dependencies, running in a Web Worker: histogram gradient-boosted trees, elastic net, purged and combinatorial cross-validation, and a lookahead audit that recomputes each feature on data truncated at bar t. It reports that its own models have no edge, and the whole pipeline was reimplemented in pandas as an independent check.',
        'Built WiFi Sensing Lab, detecting human motion from signal strength alone at a median AUC of 0.676 against a permutation null at 0.503, p equals 0.017, after diagnosing that the gait band used in published work is unobservable at consumer polling rates. Split across two repositories so the public half contains no network client at all, gated by a CI leak scan.',
      ],
    },
    {
      role: 'AI & Workflow Automation Engineer',
      org: 'Independent Practice',
      period: '2025 - Present',
      location: 'Remote',
      points: [
        'Built the orchestration core behind Autonomous OS, a self-hosted 11-agent platform on a Node and Express ESM server, where every agent inherits cron scheduling, SQLite persistence, and live log streaming from a shared base class, so adding one is a single file and a single registry line.',
        'Built a two-tier LLM dispatcher: a headless Claude Code CLI as the primary, a local Ollama llama3.2:3b as the always-on fallback, a 10-minute persisted circuit breaker that reroutes on any timeout or rate limit, and inference capped at 2 concurrent processes on a FIFO semaphore after unbounded forking crashed an 8GB machine.',
        'Routed every outbound action through one egress queue where risky lanes always require a human tap that no toggle can override, funnelled every model call through a single chokepoint that treats fetched web content as data and never as instructions, and shipped it as a launchd service reachable only over Tailscale TLS with no public port.',
      ],
    },
    {
      role: 'Data Entry Operator',
      org: 'Oxford Government Consulting',
      period: '2025',
      location: 'Tysons Corner, VA',
      points: [
        'Obtained USAccess Credential for Public Trust, U.S. Department of the Treasury / IRS (Active).',
        'Supported a federal modernization project in partnership with GovCIO, processing 2 million IRS images per day.',
        'Analyzed internal processing software, found inefficiencies, and recommended upgrades to improve service performance.',
        'Contributed to IRS digitization through scanning, processing, and data entry of confidential taxpayer info.',
      ],
    },
    {
      role: 'Manager',
      org: 'The Baseball Zone',
      period: '2021 - 2024',
      location: 'Gaithersburg, MD',
      points: [
        'In-house operator of HitTrax, a fast-tracking system for baseball development.',
        'Enhanced the company website to be user-friendly and reliable.',
        'Oversaw front desk operations: computing assistance, employee and client schedules, and customer relationships.',
        'Managed customer payments, daily purchases, and finances for the owner.',
      ],
    },
  ],
  school: [
    {
      degree: 'B.S. Computer Information Systems, Minor in Business Information Management',
      org: 'University of South Carolina',
      period: '2023 - Present',
      location: 'Columbia, SC',
      points: [
        'Coursework: Web Applications, Information Security Principles, Data Structures and Algorithms, Computer Hardware Foundations, Capstone Computing Project I, Professional Issues in CS & Engineering.',
        'Theta Chi Fraternity Executive Board Historian.',
        'Pursuing Azure (AZ-104, AZ-900), CompTIA Security+ and Network+ certifications.',
      ],
    },
    {
      degree: 'High School Diploma',
      org: 'Thomas S. Wootton High School',
      period: '2019 - 2023',
      location: 'Rockville, MD',
      points: [
        'National Honors Society, Academic Excellence.',
        'Varsity Baseball Captain.',
      ],
    },
  ],
}

/* ------------------------------- CONTACT -------------------------------- */
export const contact = {
  headline: "Let's build something unforgettable.",
  subtext:
    'Have a project, a role, or just want to say hi? My inbox is always open.',
  email: 'ethan.goldstein.dev@gmail.com',
}
