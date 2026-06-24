/* ============================================================================
 *  EDIT EVERYTHING ABOUT YOU HERE  —  this is the only file you need to touch
 *  to make the whole site yours. Swap the placeholder text/links below.
 *  Drop images/videos into /public/assets and reference them like
 *  "/assets/your-file.jpg".  Search this file for the word "PLACEHOLDER".
 * ========================================================================== */

export const profile = {
  name: 'Ethan Goldstein',
  initials: 'EG',
  role: 'Design / Creative',
  // Short punchy tagline shown big on the home hero
  tagline: 'UX/UI Designer crafting immersive, story-driven experiences.',
  // One or two sentences under the hero
  intro:
    'I design interfaces and motion that feel alive — blending thoughtful UX, bold visuals, and a love for 3D and interaction.',
  location: 'Your City, Country', // PLACEHOLDER
  availability: 'Open to opportunities', // e.g. "Available for freelance"
  email: 'ethancgoldstein@gmail.com',
  // Resume file: drop a PDF into /public/assets and point here (optional)
  resumeUrl: '', // e.g. '/assets/ethan-goldstein-resume.pdf'
}

// Order + labels of the navigation / pages. Keep paths matching App.jsx routes.
export const nav = [
  { id: '00', label: 'Home', path: '/' },
  { id: '01', label: 'Background', path: '/background' },
  { id: '02', label: 'Interests', path: '/interests' },
  { id: '03', label: 'Skills', path: '/skills' },
  { id: '04', label: 'Projects', path: '/projects' },
  { id: '05', label: 'Experience', path: '/experience' },
  { id: '06', label: 'Contact', path: '/contact' },
]

export const socials = [
  { label: 'Email', handle: 'ethancgoldstein@gmail.com', url: 'mailto:ethancgoldstein@gmail.com' },
  { label: 'LinkedIn', handle: '/in/ethan-goldstein', url: 'https://linkedin.com/' }, // PLACEHOLDER
  { label: 'GitHub', handle: '@ethan-goldstein', url: 'https://github.com/' }, // PLACEHOLDER
  { label: 'Instagram', handle: '@ethan', url: 'https://instagram.com/' }, // PLACEHOLDER
  { label: 'Dribbble', handle: '@ethan', url: 'https://dribbble.com/' }, // PLACEHOLDER
]

/* ----------------------------- BACKGROUND ------------------------------- */
export const background = {
  // Your "mission statement" — keep it personal and confident
  mission:
    'Ethan Goldstein is a designer and creative focused on shaping experiences that are equal parts useful and unforgettable. The mission: turn complex problems into clear, beautiful, and human interfaces — and never stop experimenting with new mediums like 3D and real-time graphics.',
  // The story — a few short paragraphs about who you are and how you got here
  story: [
    'I started out fascinated by how good design quietly makes things feel effortless — and I have been chasing that feeling ever since.',
    'Today I work at the intersection of design and technology: prototyping interfaces, sweating the details of motion and type, and building things that people actually enjoy using.',
    'When I am not designing, I am usually exploring new tools, breaking things to learn how they work, and collecting inspiration from film, music, and art.',
  ],
  // Quick stats / facts shown as a strip
  facts: [
    { value: '5+', label: 'Years creating' }, // PLACEHOLDER
    { value: '20+', label: 'Projects shipped' }, // PLACEHOLDER
    { value: '∞', label: 'Cups of coffee' },
  ],
  // Things people should know about how you work
  values: [
    { title: 'Human first', text: 'Design decisions start with the people who use the thing.' },
    { title: 'Details matter', text: 'The 1% of polish is what makes work feel premium.' },
    { title: 'Always learning', text: 'New tools, new mediums, new constraints — I love them all.' },
  ],
}

/* ----------------------------- INTERESTS -------------------------------- */
export const interests = [
  { title: '3D & Motion', text: 'Real-time graphics, shaders, and animation that gives interfaces life.', emoji: '🌀' },
  { title: 'Film & Cinematography', text: 'Framing, lighting, and pacing — storytelling I steal from constantly.', emoji: '🎬' },
  { title: 'Music', text: 'Always a soundtrack. Rhythm shapes how I think about flow and timing.', emoji: '🎧' },
  { title: 'Photography', text: 'Chasing light and composition out in the world.', emoji: '📷' },
  { title: 'Gaming', text: 'Great games are masterclasses in feedback, UI, and feel.', emoji: '🎮' },
  { title: 'Travel', text: 'New places, new perspectives, new design languages.', emoji: '🌍' },
]

/* ------------------------------- SKILLS --------------------------------- */
export const skills = {
  // Grouped skills with proficiency 0–100 (used for animated meters)
  groups: [
    {
      title: 'Design',
      items: [
        { name: 'UX / UI Design', level: 95 },
        { name: 'Prototyping', level: 90 },
        { name: 'Design Systems', level: 85 },
        { name: 'Motion Design', level: 80 },
      ],
    },
    {
      title: 'Tools',
      items: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe Suite', level: 85 },
        { name: 'Blender / 3D', level: 70 },
        { name: 'After Effects', level: 75 },
      ],
    },
    {
      title: 'Build',
      items: [
        { name: 'HTML / CSS', level: 85 },
        { name: 'JavaScript / React', level: 70 },
        { name: 'Three.js / WebGL', level: 60 },
        { name: 'Webflow / No-code', level: 80 },
      ],
    },
  ],
  // Free-form tags shown as a marquee / cloud
  tags: [
    'User Research', 'Wireframing', 'Interaction Design', 'Branding',
    'Typography', 'Color', 'Accessibility', 'Storyboarding',
    'Creative Direction', 'Rapid Prototyping',
  ],
}

/* ------------------------------ PROJECTS -------------------------------- */
// media: drop files in /public/assets and reference "/assets/name.jpg" (or .mp4/.webm).
// Leave media empty ('') to show a stylised gradient placeholder.
export const projects = [
  {
    title: 'Project One',
    year: '2025',
    category: 'UX/UI · Web',
    blurb: 'A short, punchy one-liner about what this project is and why it mattered.',
    description:
      'Replace this with a real case-study summary: the problem, your role, what you designed/built, and the outcome. Keep it skimmable.',
    tags: ['Figma', 'Prototyping', 'Design System'],
    media: '', // e.g. '/assets/project-one.jpg' or '/assets/project-one.mp4'
    url: '', // live link or case study (optional)
  },
  {
    title: 'Project Two',
    year: '2024',
    category: 'Brand · Motion',
    blurb: 'Another standout piece — the headline of the work.',
    description:
      'Swap in real details. What was the challenge, what did you make, and what changed because of it?',
    tags: ['Branding', 'After Effects', 'Art Direction'],
    media: '',
    url: '',
  },
  {
    title: 'Project Three',
    year: '2024',
    category: '3D · Experiment',
    blurb: 'A passion project / experiment that shows your range.',
    description:
      'Use this slot for the fun, exploratory work — 3D scenes, generative art, interactive toys.',
    tags: ['Blender', 'Three.js', 'WebGL'],
    media: '',
    url: '',
  },
  {
    title: 'Project Four',
    year: '2023',
    category: 'Product · App',
    blurb: 'A product or app you are proud of.',
    description: 'Replace with the real story. Numbers and outcomes are great here.',
    tags: ['Mobile', 'Design System', 'User Research'],
    media: '',
    url: '',
  },
]

/* ----------------------- EXPERIENCE: SCHOOL + WORK ---------------------- */
export const experience = {
  work: [
    {
      role: 'Your Role / Title',
      org: 'Company Name',
      period: '2024 — Present',
      location: 'City',
      points: [
        'What you do / did here — lead with impact.',
        'Another responsibility or achievement.',
        'Tools, teams, or wins worth highlighting.',
      ],
    },
    {
      role: 'Previous Role',
      org: 'Previous Company',
      period: '2022 — 2024',
      location: 'City',
      points: [
        'Replace with real bullet points.',
        'Keep them action-oriented and specific.',
      ],
    },
  ],
  school: [
    {
      degree: 'Your Degree / Program',
      org: 'University / School Name',
      period: '2019 — 2023',
      location: 'City',
      points: [
        'Major / focus area, honors, or relevant coursework.',
        'Clubs, leadership, or notable projects.',
      ],
    },
    {
      degree: 'Certification / Bootcamp (optional)',
      org: 'Institution',
      period: '2023',
      location: 'Remote',
      points: ['What you learned or earned.'],
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
