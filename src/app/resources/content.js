const person = {
  firstName: "Shahjalal Ahmed",
  lastName: "Nishat",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  get initials() {
    return "SN";
  },
  role: "Full-Stack Web Developer",
  shortRole: "Full-Stack Developer",
  school: "Jatiya Kabi Kazi Nazrul Islam University",
  avatar: "/images/profile.jpg",
  email: "shahjalalahmednishat@gmail.com",
  phone: "+880 1997-460508",
  phoneHref: "tel:+8801997460508",
  whatsapp: "https://wa.me/8801997460508",
  location: "Brahmanbaria, Bangladesh",
  timeZone: "Asia/Dhaka",
  languages: ["Bangla (native)", "English", "Hindi", "Urdu (conversational)"],
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/tahxin",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shahjalal-ahmed-nishat",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/shahjalalahmednishat",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: person.whatsapp,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  label: "Home",
  image: "/images/og/banner.jpg",
  title: `${person.name} — ${person.role}`,
  description:
    "Full-stack web developer from Bangladesh. I build fast, accessible products with React, Next.js and Node, and research the intersection of linguistics, AI and education.",
  eyebrow: "hello, world",
  headline: "I build for the web — and study the language behind it.",
  intro:
    "I'm Nishat, a full-stack developer and English Language and Literature undergraduate at Jatiya Kabi Kazi Nazrul Islam University. I ship production web apps with React, Next.js and Node, and I spend the rest of my time on AI, NLP, ML and LLM.",
  stats: [
    { value: "2020", label: "Writing code since" },
    { value: "03", label: "Production projects" },
    { value: "Top 6%", label: "Of university cohort" },
    { value: "07", label: "Leadership roles" },
  ],
};

const about = {
  path: "/",
  label: "About",
  title: `About — ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}.`,
  eyebrow: "01 — about",
  heading: "A developer who reads the fine print.",
  intro: [
    "I started writing code in 2020, mostly out of curiosity about how the websites I used every day were put together. That curiosity turned into a stack: React and Next.js on the front end, Node, Express and MongoDB on the back, and enough Docker and CI to keep deployments boring.",
    "At the same time, I'm in my fourth year of English Language and Literature at Jatiya Kabi Kazi Nazrul Islam University, ranked in the top 6% of my cohort. Studying syntax, semantics and discourse analysis changed how I write software — I care as much about the words on a screen as the components behind them.",
    "Most of my work sits where those two interests meet: full-stack products for student organisations, NLP and corpus linguistics experiments, and tools that make learning a little less friction-filled. I am the CTO of Oxygen AHB and serve as Vice President of the JKKNIU Skill Development Club.",
  ],
  facts: [
    { label: "Based in", value: "Brahmanbaria, Bangladesh" },
    { label: "Studying", value: "B.A. (Hons) English Language & Literature" },
    { label: "Focus", value: "Full-stack engineering · NLP · EdTech" },
    { label: "Languages", value: "Bangla · English · Hindi · Urdu" },
  ],
  focus: [
    "Full-stack product engineering",
    "Applied linguistics & NLP",
    "AI in education",
    "Developer tooling",
  ],
  currently: [
    "Building the JKKNIU Skill Development Club platform",
    "Serving as CTO of Oxygen AHB",
    "Exploring corpus tools for English language teaching",
  ],
  hobbies: ["Coding side projects", "Travelling", "Campus organising"],
};

const skills = {
  label: "Skills",
  eyebrow: "02 — toolkit",
  heading: "Tools I reach for.",
  description:
    "I pick technology for the problem, not the other way around. These are the stacks I've used to ship real work.",
  groups: [
    {
      title: "Frontend",
      icon: "monitor",
      description: "Interface work, from design tokens to accessible components.",
      items: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "DaisyUI", icon: "daisyui" },
        { name: "HeroUI", icon: "heroui" },
        { name: "shadcn/ui", icon: "shadcn" },
      ],
    },
    {
      title: "Backend & Data",
      icon: "server",
      description: "APIs, data models and the services that hold them together.",
      items: [
        { name: "Node.js", icon: "node" },
        { name: "Express", icon: "express" },
        { name: "Django", icon: "django" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Mongoose", icon: "mongoose" },
        { name: "SQLite", icon: "sqlite" },
        { name: "Firebase", icon: "firebase" },
      ],
    },
    {
      title: "Languages",
      icon: "code",
      description: "The syntax I write in, from the browser to the terminal.",
      items: [
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Python", icon: "python" },
        { name: "C++", icon: "cplusplus" },
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
      ],
    },
    {
      title: "Auth & Payments",
      icon: "shield",
      description: "Identity, sessions and checkout flows that don't leak.",
      items: [
        { name: "Better Auth", icon: "betterauth" },
        { name: "OAuth 2.0", icon: "oauth" },
        { name: "Stripe", icon: "stripe" },
        { name: "SSLCommerz", icon: "sslcommerz" },
      ],
    },
    {
      title: "DevOps & Deployment",
      icon: "cloud",
      description: "Shipping, monitoring and keeping environments repeatable.",
      items: [
        { name: "Git", icon: "git" },
        { name: "GitHub Actions", icon: "githubactions" },
        { name: "Docker", icon: "docker" },
        { name: "Kubernetes", icon: "kubernetes" },
        { name: "Vercel", icon: "vercel" },
        { name: "Railway", icon: "railway" },
        { name: "Render", icon: "render" },
        { name: "Netlify", icon: "netlify" },
      ],
    },
    {
      title: "Tooling & Research",
      icon: "wrench",
      description: "Everything around the code, including the reading and writing.",
      items: [
        { name: "Figma", icon: "figma" },
        { name: "Arch Linux", icon: "arch" },
        { name: "Ubuntu", icon: "ubuntu" },
        { name: "Postman", icon: "postman" },
        { name: "Mendeley", icon: "mendeley" },
        { name: "Zotero", icon: "zotero" },
      ],
    },
  ],
};

const education = {
  label: "Education",
  eyebrow: "03 — education",
  heading: "Where I've studied.",
  description: "A literature degree, a science background, and a habit of reading too much.",
  entries: [
    {
      school: "Jatiya Kabi Kazi Nazrul Islam University",
      short: "JKKNIU",
      degree: "B.A. (Hons) in English Language and Literature",
      period: "Feb 2023 — Present",
      location: "Mymensingh, Bangladesh",
      grade: "Fourth year · Top 6% of cohort",
      current: true,
      details: [
        "Coursework in critical theory, ELT, linguistics, phonetics and phonology, syntax, semantics, discourse analysis and continental literature.",
        "Research interests spanning NLP, corpus linguistics, digital humanities and AI ethics in education.",
      ],
    },
  ],
};

const experience = {
  label: "Experience",
  eyebrow: "04 — experience",
  heading: "Work and leadership.",
  description:
    "Building technology for organisations, and organising the people who make them work.",
  professional: [
    {
      role: "Chief Technology Officer",
      org: "Oxygen AHB",
      period: "Present",
      type: "Full-time",
      description:
        "Lead technology and digital operations for a growing organisation, from architecture decisions to day-to-day platform management.",
      highlights: [
        "Own end-to-end development of the organisation's web platforms, including full-stack builds and ongoing maintenance.",
        "Guide engineering initiatives and evaluate new tools and approaches for the product roadmap.",
        "Oversee social channels and pricing frameworks alongside technical delivery.",
      ],
    },
    {
      role: "Head of Talent Management / Head of HR",
      org: "Roots of Rise",
      period: "2025 — Present",
      type: "Volunteer",
      description:
        "Run human resources for a social-impact organisation working on welfare, education and environmental sustainability.",
      highlights: [
        "Design recruitment and onboarding pipelines for volunteers and core team members.",
        "Build skill-development frameworks and team structures that keep distributed contributors aligned.",
        "Coordinate community-driven programmes across education and sustainability initiatives.",
      ],
    },
  ],
  leadership: [
    {
      role: "President",
      org: "Glossary — English Department Language Club",
      period: "2025 — Present",
    },
    {
      role: "Vice President",
      org: "JKKNIU Skill Development Club",
      period: "2026 — Present",
    },
    {
      role: "Organizing Secretary",
      org: "Titas Brahmanbaria Students' Association, JKKNIU",
      period: "2025 — Present",
    },
    {
      role: "Joint Secretary",
      org: "JKKNIU Research Society",
      period: "2026 — Present",
    },
    {
      role: "Joint Secretary",
      org: "INK — English Department Literary Club",
      period: "2026 — Present",
    },
    {
      role: "Officer — Operations",
      org: "TEDx JKKNIU",
      period: "2024 — 2025",
    },
    {
      role: "Executive Body Member",
      org: "Rotaract Club of JKKNIU",
      period: "2023 — 2024",
    },
  ],
  highlight: {
    title: "Champion, Language Fest 2025",
    org: "Bangladesh Agricultural University Language Club",
    description:
      "Won the national language festival — the kind of thing that happens when literature and competitive trivia collide.",
  },
};

const projects = {
  label: "Projects",
  eyebrow: "05 — selected work",
  heading: "Projects I've shipped.",
  description:
    "Three products built for real users: two for student communities, one for a local marketplace.",
  cta: "See all projects",
};

const contact = {
  label: "Contact",
  eyebrow: "06 — contact",
  heading: "Let's build something worth using.",
  description:
    "I'm open to collaborations and research opportunities. The fastest way to reach me is email or WhatsApp — I usually reply within a day.",
  channels: [
    {
      label: "Email",
      value: person.email,
      href: `mailto:${person.email}`,
      icon: "email",
      note: "Best for detailed briefs",
    },
    {
      label: "WhatsApp",
      value: person.phone,
      href: person.whatsapp,
      icon: "whatsapp",
      note: "Quick questions and calls",
    },
    {
      label: "Phone",
      value: person.phone,
      href: person.phoneHref,
      icon: "phone",
      note: "Available 10:00 — 22:00 (UTC+6)",
    },
    {
      label: "Location",
      value: person.location,
      href: "https://maps.google.com/?q=Brahmanbaria,Bangladesh",
      icon: "location",
      note: "Working remotely worldwide",
    },
  ],
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects — ${person.name}`,
  description: `Full-stack products, client websites and experiments by ${person.name}.`,
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery — ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
  ],
};

const footer = {
  tagline: "Full-stack developer · Linguistics undergraduate · Community builder",
  note: "Designed and built in Brahmanbaria, Bangladesh.",
};

export {
  person,
  social,
  home,
  about,
  skills,
  education,
  experience,
  projects,
  contact,
  footer,
  work,
  blog,
  gallery,
};
