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
  photo: asset('ProfilePicture.png'),
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

// `icon` is a simpleicons.org slug - rendered as a white icon on the Contact page.
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
    "I'm Ethan Goldstein, a software engineer from Washington, DC. Right now I do data processing at GovCIO, supporting the Department of Veterans Affairs modernization program on a pipeline that moves 2 million IRS document images a day, under an active Public Trust clearance. Outside the federal work I ship for the browser: cinematic 3D experiences in Three.js, multiplayer games running on Cloudflare's edge, computer-vision interfaces you play with your bare hands, and clean React sites like this one. My toolkit spans React, Node, Three.js, Python, SQL, and C++, and I'm finishing my Computer Information Systems degree at the University of South Carolina.",
  // The story - a few short paragraphs about who you are and how you got here
  story: [
    "I'm originally from Washington, DC. Today I work at GovCIO on the Department of Veterans Affairs modernization program: processing and validating IRS documents on a digitization pipeline that moves 2 million images a day, under an active Public Trust credential with the U.S. Department of the Treasury.",
    "Outside the federal work I build across the whole spectrum of the web. I've shipped scroll-driven 3D worlds — a walk-through Red Sox clubhouse museum and a photoreal globe that flies between 18 pinned cities from my semester in Florence — plus two multiplayer browser games with real-time rooms and hands-free computer-vision controls, and demo redesigns for local businesses, from a coastal restaurant to a medical group.",
    'I stay sharp through fitness, sports, visual effects and editing, and engaging with movies, podcasts, and books that keep me curious and always learning.',
  ],
  // Things people should know about how you work
  values: [
    { title: 'Ship it live', text: 'Nothing stays on localhost. Everything I build ends up deployed on a real URL — GitHub Pages, edge compute, live multiplayer rooms.' },
    { title: 'Details matter', text: 'Detail-oriented and consistent: the 1% of polish is what makes work feel premium.' },
    { title: 'Always learning', text: 'Pursuing Azure (AZ-104, AZ-900), CompTIA Security+ and Network+ certifications.' },
  ],
}

/* ----------------------------- INTERESTS -------------------------------- */
export const interests = [
  { title: 'Cinematic 3D on the Web', text: 'Scroll-driven Three.js worlds: a walk-through Red Sox clubhouse museum with 20+ GSAP-choreographed camera stops, and a photoreal globe that flies low over the terrain between 18 pinned weekend trips.', emoji: '🧊' },
  { title: 'Realtime Multiplayer Systems', text: 'Built two browser games on Cloudflare Durable Objects for authoritative, low-latency multiplayer state. No traditional backend, just edge compute.', emoji: '🎮' },
  { title: 'Computer Vision Interfaces', text: 'Both of my games are playable with bare hands through MediaPipe tracking: swing a bat by crossing your wrist over midline, steer a kart with your hands, or have the camera count your workout reps.', emoji: '🖐️' },
  { title: 'Creative Media Pipelines', text: 'ffmpeg audio surgery, Blender-rendered 3D commercials, AI-generated asset packs locked to a single style formula, and video textures playing inside live 3D scenes — code and content in one workflow.', emoji: '🎬' },
  { title: 'Full-Stack Breadth', text: 'Comfortable moving between vanilla JS/Three.js game clients, React/Vite sites, Node/Express backends, and pixel-perfect static sites for local businesses in the same week.', emoji: '🧩' },
  { title: 'Gym & Fitness', text: 'Staying active, planning my days, and daily workouts keep me consistent, motivated, and determined in all aspects.', emoji: '💪' },
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
    title: 'WALLPR — Wallpaper Storefront',
    year: '2026',
    category: 'E-commerce · Web',
    blurb: 'A minimal one-page hero store selling impasto-painted wallpapers as instant digital downloads.',
    description:
      'A single-viewport storefront for AI-assisted oil-painting wallpapers: a non-scrollable hero of four expanding category panels (Sports, Places, Lifestyle, Animals) that open per-category galleries rendered from one product manifest. Checkout is fully outsourced to a merchant-of-record provider — hosted overlay checkout, global sales tax/VAT, and secure expiring download delivery — so the static site holds zero secrets and touches zero payment data. Locked-down CSP, no cookies, no trackers, full-res files never leave the delivery vault. Pure HTML/CSS/JS, no build step, deployed on GitHub Pages.',
    tags: ['HTML/CSS/JS', 'E-commerce', 'Merchant of Record', 'Higgsfield AI'],
    media: asset('wallpr.jpg'),
    url: 'https://ethan-goldstein.github.io/wallpr/',
  },
  {
    title: 'Mission Control: 9-Agent AI Platform',
    year: '2026',
    category: 'AI · Full-Stack',
    blurb: 'Nine autonomous AI agents. One self-hosted command center. Running 24/7 on hardware I own.',
    description:
      'A platform I designed and built end to end: a Node.js/Express orchestrator drives nine persona-driven agents on cron schedules, server-sent events stream every heartbeat into a React + TypeScript dashboard, and SQLite persists every run. The intelligence is a locally hosted LLM (Llama 3.2 via Ollama), zero API cost, zero data leaving the machine, with a shared long-term memory every agent reads and writes, plus hands-free voice control through the Web Speech API. Ships as a macOS background service, survives reboots, and is reachable from my phone over Tailscale. The agents run email triage, lead generation, cold outreach, e-commerce, content production, finance analytics, and a daily mastermind briefing.',
    tags: ['Node.js', 'React', 'TypeScript', 'Ollama · Llama 3.2', 'SQLite', 'SSE'],
    media: asset('mission-control.jpg'),
    url: '',
    private: true,
  },
  {
    title: 'Speech Developmental Services',
    year: '2026',
    category: 'Client Work · Web',
    blurb: 'A dimensional, scroll-driven site for a pediatric speech-language pathologist — opened by a 3D pen drawing her logo in ink.',
    description:
      'A professional single-page site for Speech Developmental Services (Shana Kilcawley, CCC-SLP), a pediatric speech therapy practice in Arlington, VA. The 3-second intro is a custom stroke-drawing engine: her logo is auto-traced into vector contours (marching squares over the PNG) and a three.js fountain pen draws the outline in real time before it crossfades into the periwinkle mark. Inside, a second three.js scene floats soft glass orbs behind the hero with scroll parallax, and the whole page moves on scroll — a gradient progress bar, 3D card entrances, and a step timeline that fills as you read. Glass chips, aurora-lit dark contact panel, scrollspy nav, and a copy-email button round out the UI. Built with React + Vite and deployed on GitHub Pages.',
    tags: ['React', 'Three.js', 'Framer Motion', 'Vite'],
    media: asset('speech-developmental-services.jpg'),
    url: 'https://ethan-goldstein.github.io/speech-developmental-services/',
  },
  {
    title: 'HAYMAKER: Rise Through the Ranks',
    year: '2026',
    category: 'Game · WebGL',
    blurb: 'A first-person boxing game you can literally punch your way through - webcam, controller, keyboard, or touch.',
    description:
      'A first-person 3D boxing sim in the browser: a career mode where you create a boxer and climb from rank #20 to a Vegas title fight (with purses, training camps, and title defenses), plus a freeplay mode with an 8-fighter roster, 5 arenas, and selectable 1/3/5/8/12-round bouts. Real boxing systems - breakable guard, slips, ducks, counters, stamina, knockdowns with a 10-count mash, and three judges scoring to a decision. All four input methods are first-class, including fully in-browser MediaPipe hand tracking so you throw real punches at the camera. Every portrait, arena, and sound was generated with Higgsfield under one locked art direction.',
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
      'A full browser-based baseball game: My Career, Home Run Derby, Dynasty card packs, Batting Practice, Fielding, a strength/drills mode called The Forge, and quick mini-games, plus real-time multiplayer rooms. Built in vanilla JS and Three.js with a Cloudflare Durable Object powering the multiplayer backend, and MediaPipe pose tracking for fully hands-free play.',
    tags: ['Three.js', 'Cloudflare Durable Objects', 'MediaPipe', 'WebGL'],
    media: asset('golden-spikes.jpg'),
    url: 'https://ethan-goldstein.github.io/golden-spikes/',
  },
  {
    title: 'Turbo Rumble GP',
    year: '2026',
    category: 'Game · WebGL',
    blurb: 'An 8-player kart racer with real-time multiplayer rooms and four ways to play.',
    description:
      'A Mario-Kart-style browser racer: 8 racers, 4 karts, a 4-track Grand Prix, and 7 items to fight for position. Realtime multiplayer runs on a Cloudflare Durable Object with AI fill and a solo fallback, and it supports keyboard, gamepad, touch, and hands-free MediaPipe hand tracking.',
    tags: ['Three.js', 'Cloudflare Durable Objects', 'MediaPipe', 'WebGL'],
    media: asset('turbo-rumble-gp.jpg'),
    url: 'https://ethan-goldstein.github.io/turbo-rumble-gp/',
  },
  {
    title: 'AM — Apple Music Concept',
    year: '2026',
    category: 'UX/UI · Audio',
    blurb: 'A glassy, Apple-style music home built from my real playlists — every preview synthesized in-browser.',
    description:
      'An unofficial Apple Music fan concept that opens on an AI-generated cinematic reveal (Higgsfield) and lands in a glassmorphic personal music home: four station mixes built from my real synced playlists (house, classy, country, and a rap library), a Listen Now player whose color tint follows the track across the whole page, a searchable library of 480+ real track listings, tilt-and-gloss album tiles, a Higgsfield-generated 3D studio room, and a floating mini-player dock. Every preview is procedurally synthesized with the Web Audio API — no recordings, nothing for sale.',
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
      'An interactive photoreal globe tracking a full study-abroad semester: 109 days, 8 countries, 20+ cities, 18 weekend trips, each pinned to the map with its own story. Built with React, Three.js, and GSAP/Lenis for smooth scroll-driven travel between stops.',
    tags: ['React', 'Three.js', 'GSAP', 'Vite'],
    media: asset('abroad-globe.jpg'),
    url: 'https://ethan-goldstein.github.io/abroad/',
  },
  {
    title: 'The Fenway Faithful',
    year: '2026',
    category: 'UX/UI · 3D',
    blurb: '125 years of Red Sox history, told from inside a scroll-animated 3D clubhouse.',
    description:
      'A scroll-driven 3D museum experience walking through Red Sox history, from the Green Monster to retired numbers to championship years, built with React, Three.js, and GSAP-driven scroll choreography for a cinematic, walk-through feel.',
    tags: ['React', 'Three.js', 'GSAP', 'Lenis'],
    media: asset('fenway.jpg'),
    url: 'https://ethan-goldstein.github.io/REDSOX/',
  },
  {
    title: 'Audi Concept Showroom',
    year: '2026',
    category: 'E-commerce · 3D',
    blurb: 'A cinematic concept showroom with an interactive 3D R8 and a filterable nine-car lineup.',
    description:
      'A fan-concept design study of the Audi universe: the landing hero renders an interactive, Draco-compressed 3D R8 in real time via model-viewer, backed by animated spec counters and smooth-scroll choreography. The showroom is one filterable space — sedans, SUVs, and the e-tron era — feeding a localStorage-driven “garage” that tallies a virtual collection. A pure front-end study in cinematic e-commerce; nothing is for sale.',
    tags: ['HTML', 'CSS', 'JavaScript', 'model-viewer 3D'],
    media: asset('audi-showroom.png'),
    url: 'https://ethan-goldstein.github.io/Audi/',
  },
  {
    title: 'Oakridge Medical Group',
    year: '2026',
    category: 'Web Design · Client Demo',
    blurb: 'A modern medical-practice site demo — appointments, providers, patient portal, the full small-business treatment.',
    description:
      'A polished healthcare website for a fictional family practice in Alexandria, VA, built as a client-style demo: appointment booking, provider profiles, services, patient portal and prescription-refill entry points, insurance verification, FAQ, and an emergency banner — everything a real practice needs, presented with a calm, trustworthy design.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Client Demo'],
    media: asset('oakridge-medical.png'),
    url: 'https://ethan-goldstein.github.io/Oakridge-Medical/',
  },
  {
    title: 'The Drift House',
    year: '2026',
    category: 'Web Design · Client Demo',
    blurb: 'A coastal-kitchen restaurant site built as a client-style demo — sunset vibes, oyster bar, full booking flow.',
    description:
      'A complete restaurant website for a fictional coastal kitchen in Seabrook, SC, built as a client-style demo for my web-design business: cinematic hero, full menu and cocktail list, private events and catering sections, a reservation flow, and gift cards. Designed to show a small business exactly what their site could feel like — warm, editorial, and conversion-focused.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Client Demo'],
    media: asset('drift-house.png'),
    url: 'https://ethan-goldstein.github.io/Drift-House/',
  },
  {
    title: 'Coach AI',
    year: '2025',
    category: 'AI · Web',
    blurb: 'A virtual personal trainer with a sleek, futuristic interface. The future is here.',
    description:
      'Coach AI is a virtual personal trainer built with HTML, CSS, and JavaScript, featuring a unique, modern interface with interactive 3D elements built in Spline for a polished, immersive experience.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Spline'],
    media: asset('CoachAI.png'),
    url: 'https://ethan-goldstein.github.io/CoachAI/',
  },
  {
    title: 'Personal Portfolio',
    year: '2025',
    category: 'My First Project',
    blurb: 'Where it all started: my first ever project, a fully responsive portfolio with a clean, modern interface.',
    description:
      'The first project I ever built and shipped: a fully responsive website in HTML, CSS, and JavaScript, featuring a clean, modern user interface with unique layouts and simple navigation. It includes well-structured content, interactive components, and GitHub integration — the site that started everything.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Spline'],
    media: asset('Portfolio.png'),
    url: 'https://ethan-goldstein.github.io/Protfolio-Old/',
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
      org: 'Independent, built with Claude Code',
      period: '2025 - Present',
      location: 'Remote',
      points: [
        'Architected Mission Control, a 9-agent AI platform on a locally hosted LLM with shared long-term memory, cron scheduling, and live SSE dashboards.',
        'Integrated the Model Context Protocol (MCP) across dozens of tool ecosystems, from email and e-commerce to game deployment pipelines.',
        'Shipped two multiplayer browser games (Three.js + Cloudflare Durable Objects) and this cinematic portfolio site.',
        'Ran autonomous business agents in production: a cold-outreach pipeline (125 prospects, 97 sends) and a Shopify storefront agent.',
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
