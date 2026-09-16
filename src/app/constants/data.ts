// =============================================
// EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS
// =============================================
// Almost everything on the site is driven from the constants below.
// Replace the placeholder values with your own details.

const DOMAIN = "yourdomain.com";
export const BASE_URL = `https://${DOMAIN}`;

export const ABOUT_ME = {
  name: "Muhammad Ulwan Hafizh Hibatullah",
  title: "Web Development",
  location: "Karawang, Indonesia",
  email: "ulwanhafizh499@gmail.com",
  description: [
    "Hey, there! I'm a developer who loves building products that people actually use.",
    "I'M an undergraduate student who is serious abaout web development. I love building applications that people actually use, not just class assignments that get abandoned after submission. most of the project I work on are built with Laravel.",
    "Use this space to talk about your experience, the kinds of problems you enjoy solving, and the technologies you reach for most often.",
    "Even though  I'm still college, I'm used to working on real project — from academic assignments, organizations, to personal project. I enjoy solving problem that directly affect the user experience, from cleaning up messy flows to performance optimization. The thecnologies I'm most confident in are Laravel and Tailwind CSS",
    "Wrap up with what you're excited about right now — side projects, open source, or whatever you're learning next.",
    "Lately, I've been working on side projects that are also built with Laravel, and I'm diving deeper into the Laravel ecosystem to prepare myself for the industry.",
  ],
  profileImage: "/profile.png",
  profileGif: "/profile.gif",
};

export const USER_NAMES = {
  githubUsername: "ulwnhfzh",
  linkedinUsername: "muhammad-ulwan-hafizh-hibatullah-65b852437",
  instagramUsername: "caidennnx",
  // cal.com username + event slug used by the "schedule a meeting" button
  calUsername: "Ulwan",
};

export const SOCIAL_LINKS = {
  github: `https://github.com/${USER_NAMES.githubUsername}`,
  linkedin: `https://linkedin.com/in/${USER_NAMES.linkedinUsername}`,
  instagram: `https://instagram.com/${USER_NAMES.instagramUsername}`,
  resume: "/cv_laramaran.pdf",
  email: `mailto:${ABOUT_ME.email}?subject=Message%20from%20Website&body=Hi!%20I%27m...`,
};

// Contact form submission endpoint (used by the "send a message" form).
// Create a free form at https://formspree.io/forms and paste your URL here.
export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export { PROJECTS } from "./projects";

// Skill icons shown in the "technical skills" section.
// Make this YOUR tech stack: add the ones you use, remove the ones you don't.
// Each entry is a https://skillicons.dev slug — browse that site for all
// available icons (e.g. "docker", "aws", "go", "rust", "kubernetes", ...).
export const SKILLS = [
  // Frontend
  "html",
  "css",
  "js",
  "ts",
  "react",
  "vue",
  "nuxtjs",
  "tailwind",
  // Backend
  "nodejs",
  // Databases
  "mysql",
  // Languages
  "c",
  "py",
  // Tools & DevOps
  "git",
  "github",
  "vscode",
  "vite",
  "npm",
  "figma",
  "md",
  // Cloud & Deployment
  "vercel",
  "githubactions",
];

export const EXPERIENCE = [
  {
    company: "Company One",
    companyLink: "https://example.com/",
    logo: "/placeholder-logo.png",
    role: "Software Developer",
    period: "Jan 2024 - Present",
    location: "City, Country",
    description:
      "Describe what you did here — the products you shipped, the impact you had, and the technologies you worked with. Keep it to two or three sentences focused on outcomes.",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    company: "Company Two",
    companyLink: "https://example.com/",
    logo: "/placeholder-logo.png",
    role: "Frontend Developer Intern",
    period: "Jun 2023 - Dec 2023",
    location: "Remote",
    description:
      "Another role summary. Highlight a concrete achievement or two and the stack you used to deliver it.",
    skills: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech of Informatics Engineering",
    institution: "Buana Perjuangan University Karawang",
    institutionLink: "https://ubpkarawang.ac.id/",
    period: "2024 - present",
    score: "GPA: 3.21",
  },
];

export const TESTIMONIALS = [
  {
    name: "Iqbal Rizki Nursyamsi",
    role: "Founder @ Startup",
    content:
      "Add a short testimonial here. A couple of sentences from someone you've worked with about what it's like to collaborate with you works best.",
  },
  {
    name: "Firman Maulana",
    role: "Founder @ Startup",
    content:
      "Another testimonial. Keep these genuine and specific — mention the work you did together and the value you brought.",
  },
  {
    name: "Alex Johnson",
    role: "Engineering Manager @ Agency",
    content:
      "A third testimonial. You can add or remove entries here; the section adapts to however many you provide.",
  },
];
