/* ============================================================================
 *  EDIT EVERYTHING ABOUT YOU HERE  —  this is the only file you need to touch
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
    'Computer Information Systems major at the University of South Carolina building scalable, AI-driven applications — from autonomous agent systems to workflow automation that runs real businesses.',
  location: 'Washington, DC',
  availability: 'GovCIO', // e.g. "Available for freelance"
  email: 'ethancgoldstein@gmail.com',
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

// `icon` is a simpleicons.org slug — rendered as a white icon on the Contact page.
export const socials = [
  { label: 'GitHub', handle: '@ethan-goldstein', url: 'https://github.com/ethan-goldstein', icon: 'github' },
  { label: 'Instagram', handle: '@ethangoldsteinn', url: 'https://instagram.com/ethangoldsteinn', icon: 'instagram' },
  { label: 'Twitter / X', handle: '@egolddev', url: 'https://x.com/egolddev', icon: 'x' },
  { label: 'LinkedIn', handle: '/in/ethangoldstein', url: 'https://linkedin.com/in/ethangoldstein', icon: 'linkedin' },
  { label: 'Fiverr', handle: '@egold_dev', url: 'https://www.fiverr.com/egold_dev', icon: 'fiverr' },
  { label: 'Email', handle: 'ethancgoldstein@gmail.com', url: 'mailto:ethancgoldstein@gmail.com', icon: 'gmail' },
]

/* ----------------------------- BACKGROUND ------------------------------- */
export const background = {
  // Your "mission statement" — keep it personal and confident
  mission:
    'Ethan Goldstein is a Computer Information Systems major with a minor in Business Information Management at the University of South Carolina. The mission: build scalable, efficient applications and apply AI-driven solutions to real-world problems — from federal data operations to autonomous agent systems that run real businesses.',
  // The story — a few short paragraphs about who you are and how you got here
  story: [
    "I'm originally from Washington, DC. At Oxford Government Consulting in Tysons Corner, VA, I supported a federal modernization project with GovCIO — analyzing internal processing software, finding inefficiencies, and helping process 2 million IRS images per day.",
    'Outside of class I design and build AI agent systems: a self-hosted command center that runs a fleet of autonomous agents handling email triage, lead prospecting, cold outreach, e-commerce, and finance analytics — powered by a local LLM and running 24/7.',
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
    { title: 'Automate everything', text: 'If a workflow runs more than twice, I build an agent for it — and let it learn.' },
    { title: 'Details matter', text: 'Detail-oriented and consistent — the 1% of polish is what makes work feel premium.' },
    { title: 'Always learning', text: 'Pursuing Azure (AZ-104, AZ-900), CompTIA Security+ and Network+ certifications.' },
  ],
}

/* ----------------------------- INTERESTS -------------------------------- */
export const interests = [
  { title: 'Editing & VFX', text: 'Experience with visual arts excels my creativity and technical skills to create stunning visual effects and edits.', emoji: '✨' },
  { title: 'CyberSecurity', text: 'Breaking things to understand them; the cat-and-mouse of staying a step ahead.', emoji: '🛡️' },
  { title: 'Music', text: 'This gold AP got em fascinated. Aint no fabrication, im on medication.', emoji: '🎧' },
  { title: 'Gym & Fitness', text: 'Staying active, planning my days, and daily workouts keep me consistent, motivated, and determined in all aspects.', emoji: '💪' },
  { title: 'Sports', text: 'Playing and watching sports sharpens strategy, fuels competitive spirit, and builds confidence through discipline and hard work.', emoji: '⚾' },
  { title: 'Movies, Podcasts & Books', text: 'Engaging with diverse media enhances observation skills, curiosity, and continuous learning through varied perspectives.', emoji: '🎬' },
]

/* ------------------------------- SKILLS --------------------------------- */
// Skills page is a single-screen 4×3 grid of tilted icon cards.
// `icon` is the devicon icon path (folder/file, no extension) — browse
// https://devicon.dev and use the colored "-original" (or "-plain") variant.
export const skills = {
  // Top line shown above the grid
  intro: 'Different stacks, different problems — the same obsession with craft.',
  // 12 cards = 4 across × 3 down
  cards: [
    { name: 'Java', icon: 'java/java-original' },
    { name: 'Python', icon: 'python/python-original' },
    { name: 'JavaScript', icon: 'javascript/javascript-original' },
    { name: 'HTML5', icon: 'html5/html5-original' },
    { name: 'CSS3', icon: 'css3/css3-original' },
    { name: 'Git', icon: 'git/git-original' },
    { name: 'Node.js', icon: 'nodejs/nodejs-original' },
    { name: 'React', icon: 'react/react-original' },
    { name: 'Blender', icon: 'blender/blender-original' },
    { name: 'After Effects', icon: 'aftereffects/aftereffects-original' },
    { name: 'Photoshop', icon: 'photoshop/photoshop-original' },
    { name: 'VS Code', icon: 'vscode/vscode-original' },
  ],
}

/* ------------------------------ PROJECTS -------------------------------- */
// media: drop files in /public/assets and reference "/assets/name.jpg" (or .mp4/.webm).
//        Leave media empty ('') to show a stylised gradient placeholder.
// url:   the project link — put your GitHub repo URL here (shows a "View on GitHub" button).
export const projects = [
  {
    title: 'AI Agent Command Center',
    year: '2026',
    category: 'AI · Full-Stack',
    blurb: 'A self-hosted mission control running a fleet of 7 autonomous AI agents, 24/7.',
    description:
      'A local-first automation platform built with Node/Express and React/TypeScript that orchestrates seven persona-driven agents — email triage, lead prospecting, outreach, e-commerce, dropship trend scouting, finance analytics, and a daily AI briefing. Features a real-time dashboard with live SSE updates, an on-device LLM (Ollama) that learns facts across conversations, voice control via the Web Speech API, cron scheduling, SQLite persistence, and 24/7 operation as a background service — fully private, no paid APIs.',
    tags: ['Node.js', 'React', 'TypeScript', 'Ollama', 'SQLite'],
    media: '',
    url: '',
  },
  {
    title: 'Automated Outreach Engine',
    year: '2026',
    category: 'AI · Automation',
    blurb: 'An end-to-end cold-email pipeline: prospecting, CRM, sending, and reply tracking — on autopilot.',
    description:
      'A complete outreach system for a web-design business. It discovers local businesses through OpenStreetMap, crawls their websites to scrape contact emails and detect outdated-site signals, deduplicates prospects into a built-in CRM, and sends personalized, template-driven cold emails on a throttled daily schedule with automated IMAP reply tracking. Gathered 120+ qualified prospects and runs hands-free on a daily cron.',
    tags: ['Node.js', 'SMTP/IMAP', 'Web Scraping', 'Cron', 'SQLite'],
    media: '',
    url: '',
  },
  {
    title: 'AI Storefront Automation',
    year: '2026',
    category: 'AI · E-commerce',
    blurb: 'An agent that writes product copy, prices for profit, and manages a live Shopify store.',
    description:
      'A Shopify automation agent integrated through the Admin API with OAuth client-credentials auth. It sweeps store listings, rewrites product copy with a local LLM, and applies a tiered profit-pricing engine that guarantees margin after payment fees. Also automates collections, trust pages, and a custom-built animated Liquid theme section for a live dropshipping storefront.',
    tags: ['Shopify API', 'Node.js', 'LLM', 'Liquid', 'OAuth'],
    media: '',
    url: '',
  },
  {
    title: 'Personal Portfolio',
    year: '2025',
    category: 'UX/UI · Web',
    blurb: 'A fully responsive personal portfolio with a clean, modern interface and interactive components.',
    description:
      'A fully responsive website built with HTML, CSS, and JavaScript, featuring a clean, modern user interface with unique layouts and simple navigation. It includes well-structured content, interactive components, and GitHub integration — all designed to explore my projects, experience, and ongoing growth.',
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
      role: 'Data Entry Operator',
      org: 'Oxford Government Consulting',
      period: '2025',
      location: 'Tysons Corner, VA',
      points: [
        'Obtained USAccess Credential for Public Trust, U.S. Department of the Treasury — IRS (Active).',
        'Supported a federal modernization project in partnership with GovCIO, processing 2 million IRS images per day.',
        'Analyzed internal processing software, found inefficiencies, and recommended upgrades to improve service performance.',
        'Contributed to IRS digitization through scanning, processing, and data entry of confidential taxpayer info.',
      ],
    },
    {
      role: 'Manager',
      org: 'The Baseball Zone',
      period: '2021 — 2024',
      location: 'Gaithersburg, MD',
      points: [
        'In-house operator of HitTrax, a fast-tracking system for baseball development.',
        'Enhanced the company website to be user-friendly and reliable.',
        'Oversaw front desk operations — computing assistance, employee and client schedules, and customer relationships.',
        'Managed customer payments, daily purchases, and finances for the owner.',
      ],
    },
  ],
  school: [
    {
      degree: 'B.S. Computer Information Systems, Minor in Business Information Management',
      org: 'University of South Carolina',
      period: '2023 — Present',
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
      period: '2019 — 2023',
      location: 'Rockville, MD',
      points: [
        'National Honors Society — Academic Excellence.',
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
  email: 'ethancgoldstein@gmail.com',
}
