export const site = {
  name: "Rosfendik",
  role: "Full Stack Developer",
  location: "Surabaya, Indonesia",
  email: "hello@rosfendik.my.id",
  tagline: "Full Stack Developer based in Surabaya",
  intro:
    "I build end-to-end web applications — from database design to responsive, user-friendly interfaces. I work across the frontend and backend with modern technologies, focused on solutions that are efficient, scalable, and maintainable.",
  about: [
    "I am a Full Stack Developer with around a year of experience building end-to-end web applications, from database design to implementing responsive and user-friendly interfaces. I'm comfortable working across both the frontend and backend with modern technologies.",
    "I have a strong interest in clean code, application performance, and optimal user experience. My goal is to ensure that every project I work on not only functions well, but also delivers meaningful value to the people who use it.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Email", href: "mailto:hello@rosfendik.my.id" },
  ],
  cvHref: "#",
} as const

export const stats = [
  { value: "1+", label: "Years of experience" },
  { value: "10+", label: "Projects completed" },
  { value: "500+", label: "Contributions" },
] as const

export const techStack = [
  "HTML5",
  "CSS",
  "JavaScript",
  "MySQL",
  "Bootstrap",
  "TailwindCSS",
  "PHP",
  "Python",
  "Dart",
  "CodeIgniter",
  "Laravel",
  "Flutter",
  "Figma",
  "Git",
  "GitLab",
] as const

export type Project = {
  title: string
  description: string
  year: string
  tags: string[]
  href: string
}

export const projects: Project[] = [
  {
    title: "C-Mobile (Migration Project)",
    description:
      "Internal web-based management system built for course management and education company use at Creative Media.",
    year: "2025",
    tags: ["Laravel", "Bootstrap", "TailwindCSS", "MySQL"],
    href: "#",
  },
  {
    title: "My Portal App",
    description:
      "Invoice app system for managing and tracking invoices efficiently for internal use at PT Diamond Hire Indonesia.",
    year: "2025",
    tags: ["CodeIgniter", "Bootstrap", "MySQL"],
    href: "#",
  },
  {
    title: "Uki Education",
    description:
      "Internal management system built for UKI Education — an education center that operates across multiple branches.",
    year: "2024",
    tags: ["Laravel", "Bootstrap", "TailwindCSS", "MySQL"],
    href: "#",
  },
  {
    title: "Masjid Baiturrahiim",
    description:
      "A community mosque project focused on providing a serene, informative environment for community activities.",
    year: "2024",
    tags: ["HTML5", "CSS", "Bootstrap"],
    href: "#",
  },
]
