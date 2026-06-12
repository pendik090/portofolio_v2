import { TECH_STACKS } from "./tech-stack"

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

export const skillGroup = [
  {
    label: "Frontend",
    items: [
      {
        name: "HTML5",
        icon: {
          light: "/icons/html5.svg",
          dark: "/icons/html5.svg",
        }
      },
      {
        name: "CSS",
        icon: {
          light: "/icons/css3.svg",
          dark: "/icons/css3.svg",
        }
      },
      {
        name: "JavaScript",
        icon: {
          light: "/icons/javascript.svg",
          dark: "/icons/javascript.svg",
        }
      },
      {
        name: "Bootstrap",
        icon: {
          light: "/icons/bootstrap.svg",
          dark: "/icons/bootstrap.svg",
        }
      },
      {
        name: "TailwindCSS",
        icon: {
          light: "/icons/tailwindcss.svg",
          dark: "/icons/tailwindcss.svg",
        }
      },
      {
        name: "Flutter",
        icon: {
          light: "/icons/flutter.svg",
          dark: "/icons/flutter.svg",
        }
      },
    ]
  },
  {
    label: "Backend",
    items: [
      {
        name: "PHP",
        icon: {
          light: "/icons/php-light.svg",
          dark: "/icons/php-dark.svg",
        }
      },
      {
        name: "MySQL",
        icon: {
          light: "/icons/mysql-light.svg",
          dark: "/icons/mysql-dark.svg",
        }
      },
      {
        name: "PostgreSQL",
        icon: {
          light: "/icons/postgresql.svg",
          dark: "/icons/postgresql.svg",
        }
      },
      {
        name: "Python",
        icon: {
          light: "/icons/python.svg",
          dark: "/icons/python.svg",
        }
      },
      {
        name: "Codeigniter",
        icon: {
          light: "/icons/codeigniter.svg",
          dark: "/icons/codeigniter.svg",
        }
      },
      {
        name: "Laravel",
        icon: {
          light: "/icons/laravel.svg",
          dark: "/icons/laravel.svg",
        }
      },
    ]
  },
  {
    label: "Tools",
    items: [
      {
        name: "Figma",
        icon: {
          light: "/icons/figma.svg",
          dark: "/icons/figma.svg",
        }
      },
      {
        name: "Gitlab",
        icon: {
          light: "/icons/gitlab.svg",
          dark: "/icons/gitlab.svg",
        }
      },
      {
        name: "Github",
        icon: {
          light: "/icons/github-light.svg",
          dark: "/icons/github-dark.svg",
        }
      },
      {
        name: "Postman",
        icon: {
          light: "/icons/postman.svg",
          dark: "/icons/postman.svg",
        }
      },
    ]
  }
]

export const techStack = [
  {
    name: "HTML5",
    icon: {
      light: "/icons/html5.svg",
      dark: "/icons/html5.svg",
    }
  },
  {
    name: "CSS",
    icon: {
      light: "/icons/css3.svg",
      dark: "/icons/css3.svg",
    }
  },
  {
    name: "JavaScript",
    icon: {
      light: "/icons/javascript.svg",
      dark: "/icons/javascript.svg",
    }
  },
  {
    name: "MySQL",
    icon: {
      light: "/icons/mysql-light.svg",
      dark: "/icons/mysql-dark.svg",
    }
  },
  {
    name: "PostgreSQL",
    icon: {
      light: "/icons/postgresql.svg",
      dark: "/icons/postgresql.svg",
    }
  },
  {
    name: "Bootstrap",
    icon: {
      light: "/icons/bootstrap.svg",
      dark: "/icons/bootstrap.svg",
    }
  },
  {
    name: "TailwindCSS",
    icon: {
      light: "/icons/tailwindcss.svg",
      dark: "/icons/tailwindcss.svg",
    }
  },
  {
    name: "PHP",
    icon: {
      light: "/icons/php-light.svg",
      dark: "/icons/php-dark.svg",
    }
  },
  {
    name: "Python",
    icon: {
      light: "/icons/python.svg",
      dark: "/icons/python.svg",
    }
  },
  {
    name: "Dart",
    icon: {
      light: "/icons/dart.svg",
      dark: "/icons/dart.svg",
    }
  },
  {
    name: "Codeigniter",
    icon: {
      light: "/icons/codeigniter.svg",
      dark: "/icons/codeigniter.svg",
    }
  },
  {
    name: "Laravel",
    icon: {
      light: "/icons/laravel.svg",
      dark: "/icons/laravel.svg",
    }
  },
  {
    name: "Flutter",
    icon: {
      light: "/icons/flutter.svg",
      dark: "/icons/flutter.svg",
    }
  },
  {
    name: "Astro",
    icon: {
      light: "/icons/astro-light.svg",
      dark: "/icons/astro-dark.svg",
    }
  },
  {
    name: "Figma",
    icon: {
      light: "/icons/figma.svg",
      dark: "/icons/figma.svg",
    }
  },
  {
    name: "Gitlab",
    icon: {
      light: "/icons/gitlab.svg",
      dark: "/icons/gitlab.svg",
    }
  },
  {
    name: "Github",
    icon: {
      light: "/icons/github-light.svg",
      dark: "/icons/github-dark.svg",
    }
  },
]

export type Project = {
  title: string
  description: string
  year: string
  tech: (typeof TECH_STACKS)[keyof typeof TECH_STACKS][]
  href: string
  image: string
}

export const projects: Project[] = [
  {
    title: "C-Mobile (Migration Project)",
    description:
      "Internal web-based management system built for course management and education company use at Creative Media.",
    year: "2025",
    tech: [
      TECH_STACKS.laravel,
      TECH_STACKS.bootstrap,
      TECH_STACKS.tailwind,
      TECH_STACKS.mysql,
    ],
    href: "#",
    image: "img/projects/cmobile_after.png",
  },
  {
    title: "My Portal App",
    description:
      "Invoice app system for managing and tracking invoices efficiently for internal use at PT Diamond Hire Indonesia.",
    year: "2025",
    tech: [
      TECH_STACKS.codeigniter,
      TECH_STACKS.bootstrap,
      TECH_STACKS.mysql,
    ],
    href: "#",
    image: "img/projects/myportal.png",
  },
  {
    title: "UW Open",
    description:
      "UW Open is a real time tennis match system designed to streamline tournament organization and player management.",
    year: "2024",
    tech: [
      TECH_STACKS.laravel,
      TECH_STACKS.bootstrap,
      TECH_STACKS.mysql,
    ],
    href: "#",
    image: "img/projects/uwopen4.png",
  },
  {
    title: "Masjid Baiturrahiim",
    description:
      "A community mosque project focused on providing a serene, informative environment for community activities.",
    year: "2024",
    tech: [
      TECH_STACKS.laravel,
      TECH_STACKS.bootstrap,
      TECH_STACKS.tailwind,
      TECH_STACKS.mysql,
    ],
    href: "#",
    image: "img/projects/masjid1.png",
  },
]
