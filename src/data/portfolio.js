// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the
//  portfolio — no need to touch the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  firstName: "Suraj",
  lastName: "Lanke",
  // each role is shown on two lines in the hero
  roles: [
    ["Full Stack", "Developer"],
    ["Java &", "Spring Boot"],
    ["React", "Engineer"],
    ["Cloud", "Practitioner"],
  ],
  location: "Pune, India",
  tagline:
    "I build full-stack web apps with Java, Spring Boot and React, from secure REST APIs to clean, responsive interfaces.",
  about: [
    "I’m a Computer Engineering graduate from SKN Sinhgad Institute of Technology and Science, Pune. I enjoy taking an idea all the way from database schema to the screen a user taps on.",
    "Most of my work pairs a Spring Boot backend with a React frontend: JWT authentication, role-based access, transaction-safe APIs and dashboards people actually use. I’m AWS Certified and looking for an entry-level software engineering role where I can ship, learn and grow with a strong team.",
  ],
  openToWork: true,
  email: "surajlanke35@gmail.com",
  // Contact form: paste your free Web3Forms access key here (get it at https://web3forms.com).
  // Messages from the form are emailed straight to you. Leave empty to fall back to opening the visitor's email app.
  web3formsKey: "fccd6451-0193-4a3d-999b-1d98b2a598cd",
  // phone: '+91 97663 26124', // uncomment to show your phone number in the contact section
  github: "https://github.com/suraj02452",
  linkedin: "https://www.linkedin.com/in/suraj-lanke-58487a288",
  resume: "Suraj_Vilas_Lanke_Resume.pdf",
};

export const stats = [
  { value: "7.75", label: "CGPA · B.E. Computer Engg." },
  { value: "AWS", label: "Certified Cloud Practitioner" },
  { value: "600", label: "Rank of 2,000+ · 24h hackathon" },
  { value: "6+", label: "Full-stack projects shipped" },
];

export const skillRows = [
  [
    "Java",
    "Spring Boot",
    "React.js",
    "JavaScript",
    "TypeScript",
    "MySQL",
    "MongoDB",
    "REST APIs",
    "JWT Auth",
  ],
  ["C++", "HTML5", "CSS3", "Git", "GitHub", "AWS", "Python", "Data Structures"],
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "REST APIs", "JWT"],
  },
  { title: "Frontend", items: ["React.js", "HTML5", "CSS3", "Responsive UI"] },
  {
    title: "Data & Cloud",
    items: ["MySQL", "MongoDB", "AWS fundamentals", "Git / GitHub"],
  },
];

export const projects = [
  {
    id: "reviewline",
    name: "Reviewline",
    kind: "AI SaaS",
    summary:
      "An AI-powered code review SaaS. Developers submit code and get automated review feedback through a Spring Boot API and a TypeScript web client.",
    stack: ["Spring Boot", "Java", "TypeScript", "AI"],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/suraj02452/reviewline-frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/suraj02452/reviewline-backend",
      },
    ],
    featured: true,
  },
  {
    id: "ems",
    name: "Employee Management System",
    kind: "Full stack",
    summary:
      "JWT authentication with role-based access for admins and employees. Manages records, attendance, leave requests and payroll, with dashboard analytics.",
    stack: ["React.js", "Spring Boot", "MySQL", "JWT"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/suraj02452/employee-management-system",
      },
    ],
    featured: true,
  },
  {
    id: "bank",
    name: "Banking Application",
    kind: "Full stack",
    summary:
      "Customer registration, account management, deposits, withdrawals and fund transfers, with secure transaction processing and full history.",
    stack: ["React.js", "Spring Boot", "MySQL"],
    links: [
      { label: "GitHub", href: "https://github.com/suraj02452/banking-app" },
    ],
  },
  {
    id: "pulsetrade",
    name: "PulseTrade",
    kind: "Real-time",
    summary:
      "A real-time crypto price tracker streaming live Binance prices through Kafka and WebSockets, with watchlists, portfolio P&L and price alerts that fire exactly once.",
    stack: ["Spring Boot", "Kafka", "Redis", "MySQL", "React.js"],
    links: [
      { label: "GitHub", href: "https://github.com/suraj02452/pulsetrade" },
    ],
  },
  {
    id: "quickqr",
    name: "QuickQR",
    kind: "Full stack",
    summary:
      "A QR-based web application with a Java backend and a TypeScript frontend, split into two deployable services.",
    stack: ["Java", "TypeScript"],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/suraj02452/quickqr-frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/suraj02452/quickqr-backend",
      },
    ],
  },
  {
    id: "shop",
    name: "Fashion E-Commerce",
    kind: "MERN",
    summary:
      "A full-featured online fashion store built on the MERN stack: product catalogue, cart and checkout flow.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    links: [
      { label: "GitHub", href: "https://github.com/suraj02452/e-commerce" },
    ],
  },
];

export const journey = [
  {
    year: "2026",
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    note: "Credential d3c2f928e03947a89203e7f6d78f02ff",
    type: "cert",
  },
  {
    year: "2026",
    title: "Rank 600 / 2,000+ · HackerRank Orchestrate",
    org: "24-hour hackathon",
    note: "AI-powered message notification router",
    type: "award",
  },
  {
    year: "2026",
    title: "SQL (Basic) Certificate",
    org: "HackerRank",
    note: "Credential AA8C05206FA1",
    type: "cert",
  },
  {
    year: "2022 – 2026",
    title: "B.E. Computer Engineering · CGPA 7.75",
    org: "SKN Sinhgad Institute of Technology and Science, Pune",
    type: "edu",
  },
  {
    year: "2020 – 2021",
    title: "Higher Secondary · 83.33%",
    org: "Shri Mhalsakant Junior College, Pune",
    type: "edu",
  },
];
