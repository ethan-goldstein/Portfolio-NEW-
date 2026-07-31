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
  tagline: 'AI Systems | Workflow Automation | LLM Integration',
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
    "I'm Ethan Goldstein, a software engineer in Washington, DC. My day job is federal: I'm at GovCIO on the Department of Veterans Affairs modernization program, processing and validating IRS records under an active Public Trust credential. The rest of my time goes into agent infrastructure. I designed and built Autonomous OS, an 11-agent orchestration platform, roughly 12,700 lines of Node, TypeScript, and React, that runs around the clock on hardware I own, drives live third-party APIs, and keeps a human approval gate between every agent and every outbound action. The model is the smallest part of that work. The engineering is scheduling, persistence, guardrails, and a defined answer for what happens when the model is wrong. I'm finishing a Computer Information Systems degree at the University of South Carolina.",
  // The story: how the judgment got built, told through what broke
  story: [
    'The first thing I ever shipped was a static portfolio in hand-written HTML, CSS, and JavaScript. What stuck was not the code, it was the habit of putting work on a public URL where it either runs or it does not. Browser games came next, and they turned out to be a systems problem in a costume: a simulation loop pinned to a fixed 60Hz step and fully decoupled from rendering, and authoritative state that lives on the server because a client you do not control will always lie to you.',
    'Most of the architecture I am proud of started as something breaking. Unbounded process forking took an 8GB machine down more than once, so model inference now runs behind a FIFO semaphore capped at 2 concurrent processes. Concurrent writes started failing at boot, so the database moved to WAL journaling with a 5-second busy timeout. None of that came from a tutorial. Each one came from a system failing in a specific way and forcing a specific decision.',
    "The failure modes that interest me now are the ones nobody is awake for. A laptop sleeps through a scheduled run, so a sweep re-parses every agent's cron expression every 10 minutes and replays whatever was missed, with a 45-minute slack window so a recovery never races the live slot and an errored run never sets off a retry storm. That is the direction I am pointed: AI systems and workflow automation, where the hard part is not the prompt, it is everything that has to hold when the prompt is wrong.",
  ],
  // Things people should know about how you work
  values: [
    {
      title: 'Security by construction',
      text: 'The auth gate is mounted before any route is declared, so a new endpoint physically cannot ship unauthenticated. There is deliberately no localhost bypass either, because Tailscale terminates TLS on the same machine and a 127.0.0.1 exemption would have quietly turned auth off across the whole network.',
    },
    {
      title: 'Fewer moving parts',
      text: "Storage is Node's built-in SQLite: 14 tables, 10 indexes, no ORM, no native builds, nothing to migrate. The LLM runs with MCP disabled, so its tool surface is exactly the code I wrote and nothing else.",
    },
    {
      title: 'Make the next one cheap',
      text: 'The framework matters more than any single feature. Every agent inherits scheduling, persistence, and live log streaming from a shared base, so adding another one is one file and one line in a registry.',
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
    title: 'Agent Memory',
    text: 'After each run an agent distills what it learned into durable facts in a deduplicated table the whole fleet reads. The hard part is not storage, it is deciding what is worth keeping.',
    emoji: '🗃️',
  },
  {
    title: 'API Plumbing',
    text: 'Mail over IMAP and SMTP, OAuth 2.0 refresh flows, social and marketplace APIs, geospatial queries. Each has its own idea of auth, pagination, and errors, and making them behave like one system is the job.',
    emoji: '🔌',
  },
  {
    title: 'Fallback Paths',
    text: 'Every build gets an answer for what happens when the good path is gone. One site runs off a manifest that degrades video to a still image to a CSS gradient, and stays shippable either way.',
    emoji: '🪜',
  },
  {
    title: 'Accessibility',
    text: 'One build ships a real accessibility panel: text scaling, high contrast, reduced motion, underlined links. Every gesture input I ship also has a keyboard and touch equivalent from day one.',
    emoji: '♿',
  },
]

/* ------------------------------- SKILLS --------------------------------- */
// Skills page is a single-screen 4×3 grid of tilted icon cards.
// `icon` is the devicon icon path (folder/file, no extension) - browse
// https://devicon.dev and use the colored "-original" (or "-plain") variant.
export const skills = {
  // Top line shown above the grid
  intro: 'Different stacks, different problems, the same obsession with craft.',
  // 25 cards = 5 across × 5 down, sized to fit one screen
  cards: [
    { name: 'Java', icon: 'java/java-original' },
    { name: 'Python', icon: 'python/python-original' },
    { name: 'JavaScript', icon: 'javascript/javascript-original' },
    { name: 'TypeScript', icon: 'typescript/typescript-original' },
    { name: 'Next.js', icon: 'nextjs/nextjs-original-wordmark' },
    { name: 'C++', icon: 'cplusplus/cplusplus-original' },
    { name: 'HTML5', icon: 'html5/html5-original' },
    { name: 'CSS3', icon: 'css3/css3-original' },
    { name: 'SQL', icon: 'sqlite/sqlite-original' },
    { name: 'Git', icon: 'git/git-original' },
    { name: 'GitHub', icon: 'github/github-original' },
    { name: 'Node.js', icon: 'nodejs/nodejs-original' },
    { name: 'Express', icon: 'express/express-original' },
    { name: 'React', icon: 'react/react-original' },
    { name: 'Vite', icon: 'vitejs/vitejs-original' },
    { name: 'Three.js', icon: 'threejs/threejs-original' },
    { name: 'Cloudflare Workers', icon: 'cloudflareworkers/cloudflareworkers-original' },
    { name: 'Blender', icon: 'blender/blender-original' },
    { name: 'After Effects', icon: 'aftereffects/aftereffects-original' },
    { name: 'Photoshop', icon: 'photoshop/photoshop-original' },
    { name: 'VS Code', icon: 'vscode/vscode-original' },
    { name: 'Framer Motion', icon: 'framermotion/framermotion-original' },
    { name: 'npm', icon: 'npm/npm-original-wordmark' },
    { name: 'Bash', icon: 'bash/bash-original' },
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
    title: 'PARALLAX: Bitemporal Analytical Engine',
    year: '2026',
    category: 'Systems · C++ / WebAssembly',
    blurb: 'A C++20 analytical engine compiled to WebAssembly that answers what you believed at one time about another time. Runs entirely in the browser.',
    description:
      "An analytical engine written in C++20 and compiled to WebAssembly, answering a question most databases cannot: what did we believe at system-time S about valid-time T. Two independent time axes, so a correction that arrives late does not erase what the record used to say. I wrote the query language end to end: lexer, parser, flat AST, and a cost-based planner with an EXPLAIN viewer. Storage is a columnar bitemporal store with zone maps and a SIMD scan kernel, indexed spatially by a Z-order curve because a range on that curve is a contiguous slice, which is what makes a bounding-box count two binary searches instead of a scan. On top sit entity resolution over real cross-agency duplicates, a CSR graph with k-hop and bidirectional shortest path, and a policy engine that refuses a query at plan time rather than filtering its output. That refusal is sound rather than a guess because two of the four cardinality estimators are exact, not approximate: system time is a monotone transaction id, and a Z-order range is contiguous. The correctness story is differential testing against a deliberately naive oracle written before the optimised version so it could not inherit its bugs, which caught an antimeridian box that inverted and silently matched nothing. The parser is continuously fuzzed in CI at 12.3 million executions per minute under ASan and UBSan. It runs on live seismic and maritime feeds with no backend, no API keys, and no login.",
    tags: ['C++20', 'WebAssembly', 'Query planner', 'SIMD', 'libFuzzer', 'TypeScript'],
    media: asset('parallax.jpg'),
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
    url: 'https://ethan-goldstein.github.io/speech-developmental-services/',
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
      "A luxury-brand-film website where scrolling flies you through an entire estate: fifteen AI-generated flythrough clips chained room to room, from the coast approach and infinity pool through a pivot door that swings open as you enter, the family room, kitchen, primary suite, a Ferrari apparel wardrobe, guest suites and a racing-sim lounge, down to a keypad-locked underground collection (the code is Ferrari's founding year), a vintage 'La Storia' wing with a 250 GT and F40, and a cliff tunnel that bursts out into the night. The engineering underneath is a media manifest that degrades every scene from video to a still image to a CSS gradient, so the site stayed navigable and shippable before a single final asset existed. On desktop, scroll position drives video frames directly through all-keyframe encodes; phones get play-through clips with matched hold frames. Twelve-car spotlight configurator with specs and collector notes, synthesized ocean ambience, full keyboard and reduced-motion accessibility. Every still and film clip generated with Higgsfield (Cinema Studio and Seedance) from one locked art direction. Next.js static export on GitHub Pages.",
    tags: ['Next.js', 'GSAP + Lenis', 'Scroll-scrubbed video', 'Higgsfield AI'],
    media: asset('casa-cavallino.jpg'),
    url: 'https://ethan-goldstein.github.io/casa-cavallino/',
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
      role: 'Data Processing',
      org: 'GovCIO',
      period: '2026 - Present',
      location: 'Washington, DC',
      points: [
        'Process and validate multiple types of IRS documents in support of the Department of Veterans Affairs modernization program.',
        'Run high-volume digitization workflows: scanning, indexing, and quality checks on confidential federal records.',
        'Hold an active USAccess Public Trust credential for work with U.S. Department of the Treasury / IRS data.',
        'Coordinate daily throughput targets with the wider GovCIO processing team.',
      ],
    },
    {
      role: 'AI & Workflow Automation Engineer',
      org: 'Independent Practice',
      period: '2025 - Present',
      location: 'Remote',
      points: [
        'Built the orchestration core behind Autonomous OS, a self-hosted 11-agent platform on a Node and Express ESM server, where agents run on cron schedules and also trigger each other on completion, so a research run hands straight off to the agent that acts on it.',
        'Built a two-tier LLM dispatcher: a headless Claude Code CLI as the primary, a local Ollama llama3.2:3b as the always-on fallback, and a 10-minute persisted circuit breaker that reroutes on any timeout, rate limit, or missing binary.',
        'Routed every outbound action through one egress queue where risky lanes always require a human tap that no toggle can override, checked before any setting is read, and funnelled every model call on both providers through a single chokepoint that treats fetched web content as data and never as instructions.',
        'Made automated outreach defensible by design: per-lane daily caps dripped across staggered windows instead of bursts, randomized send jitter, DNS MX pre-validation that fails open so a flaky lookup never burns a real address, and an IMAP bounce loop that retires dead addresses the same day.',
        'Shipped it as a service rather than a script: a launchd daemon that survives reboots, reachable only over Tailscale Serve TLS with no public port, and an installable PWA whose service worker never caches an authenticated route.',
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
