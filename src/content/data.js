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
  // Your "mission statement" - keep it personal and confident
  mission:
    'Ethan Goldstein is a Computer Information Systems major with a minor in Business Information Management at the University of South Carolina. The mission: build scalable, efficient applications and apply AI-driven solutions to real-world problems, from federal data operations to autonomous agent systems that run real businesses.',
  // The story - a few short paragraphs about who you are and how you got here
  story: [
    "I'm originally from Washington, DC. At Oxford Government Consulting in Tysons Corner, VA, I supported a federal modernization project with GovCIO: analyzing internal processing software, finding inefficiencies, and helping process 2 million IRS images per day.",
    'Outside of class I design and build AI agent systems: a self-hosted command center that runs a fleet of autonomous agents handling email triage, lead prospecting, cold outreach, e-commerce, and finance analytics, powered by a local LLM and running 24/7.',
    'I stay sharp through fitness, sports, visual effects and editing, and engaging with movies, podcasts, and books that keep me curious and always learning.',
  ],
  // Quick stats / facts shown as a strip
  facts: [
    { value: '7', label: 'AI agents running 24/7' },
    { value: '2M+', label: 'IRS images processed daily' },
    { value: 'Active', label: 'Public Trust clearance' },
  ],
  // Things people should know about how you work
  values: [
    { title: 'Automate everything', text: 'If a workflow runs more than twice, I build an agent for it, and let it learn.' },
    { title: 'Details matter', text: 'Detail-oriented and consistent: the 1% of polish is what makes work feel premium.' },
    { title: 'Always learning', text: 'Pursuing Azure (AZ-104, AZ-900), CompTIA Security+ and Network+ certifications.' },
  ],
}

/* ----------------------------- INTERESTS -------------------------------- */
export const interests = [
  { title: 'Multi-Agent Orchestration', text: 'I designed a 9-agent command center where every agent shares long-term memory, runs on cron, and streams live via SSE into a React dashboard, all on a local LLM with zero API cost.', emoji: '🧠' },
  { title: 'MCP & Tool Protocols', text: 'Deep in the Model Context Protocol ecosystem: wiring agents into dozens of tool integrations so a single conversation can touch email, CRMs, game engines, and deployment pipelines.', emoji: '🔌' },
  { title: 'Autonomous Business Agents', text: "I don't just prototype automation, I ship it. A cold-outreach agent found 125 prospects and sent 97 emails unattended; a Shopify agent writes copy, prices products, and protects margin on its own.", emoji: '⚙️' },
  { title: 'Realtime Multiplayer Systems', text: 'Built two browser games on Cloudflare Durable Objects for authoritative, low-latency multiplayer state. No traditional backend, just edge compute.', emoji: '🎮' },
  { title: 'Full-Stack Breadth', text: 'Comfortable moving between vanilla JS/Three.js game clients, React/Vite sites, Node/Express orchestrators, and Shopify Liquid storefronts in the same week.', emoji: '🧩' },
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
// url:   the project link - put your GitHub repo URL here (shows a "View on GitHub" button).
export const projects = [
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
  },
  {
    title: 'Personal Portfolio',
    year: '2025',
    category: 'UX/UI · Web',
    blurb: 'A fully responsive personal portfolio with a clean, modern interface and interactive components.',
    description:
      'A fully responsive website built with HTML, CSS, and JavaScript, featuring a clean, modern user interface with unique layouts and simple navigation. It includes well-structured content, interactive components, and GitHub integration, all designed to explore my projects, experience, and ongoing growth.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Spline'],
    media: asset('Portfolio.png'),
    url: 'https://github.com/ethan-goldstein/ethan-goldstein.github.io',
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
    url: 'https://github.com/ethan-goldstein/CoachAI',
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
    url: 'https://github.com/ethan-goldstein/golden-spikes',
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
    url: 'https://github.com/ethan-goldstein/AI-Racer',
  },
  {
    title: 'The Fenway Faithful',
    year: '2026',
    category: 'UX/UI · 3D',
    blurb: '125 years of Red Sox history, told from inside a scroll-animated 3D clubhouse.',
    description:
      'A scroll-driven 3D museum experience walking through Red Sox history, from the Green Monster to retired numbers to championship years, built with React, Three.js, and GSAP-driven scroll choreography for a cinematic, walk-through feel.',
    tags: ['React', 'Three.js', 'GSAP', 'Lenis'],
    media: asset('redsox.jpg'),
    url: 'https://github.com/ethan-goldstein/REDSOX',
  },
  {
    title: 'ABROAD: A Semester in Motion',
    year: '2026',
    category: 'UX/UI · 3D',
    blurb: 'A photoreal 3D globe trip tracker mapping 18 weekends across a semester in Florence.',
    description:
      'An interactive photoreal globe tracking a full study-abroad semester: 109 days, 8 countries, 20+ cities, 18 weekend trips, each pinned to the map with its own story. Built with React, Three.js, and GSAP/Lenis for smooth scroll-driven travel between stops.',
    tags: ['React', 'Three.js', 'GSAP', 'Vite'],
    media: asset('abroad.jpg'),
    url: 'https://github.com/ethan-goldstein/abroad',
  },
  {
    title: 'Audi',
    year: '2025',
    category: 'E-commerce · 3D',
    blurb: 'A creatively remade shopping platform inspired by Audi’s design language.',
    description:
      'Audi is a creatively remade shopping platform built with HTML, CSS, and JavaScript, featuring a unique, modern interface inspired by Audi’s design language. It integrates an interactive shopping cart that dynamically updates total prices as cars are added or removed, complemented by a custom 3D-animated commercial fully created and edited in Blender.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Blender', 'Spline'],
    media: asset('Audi.png'),
    url: 'https://github.com/ethan-goldstein/Audi',
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
