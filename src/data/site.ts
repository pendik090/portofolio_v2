export const site = {
  name: "Rosfendik",
  role: "Full Stack Developer",
  location: "Surabaya, Indonesia",
  email: "rospendik321@gmail",
  tagline: "Full Stack Developer based in Surabaya",
  avatar: "/img/profile1.jpeg",
  url: "https://rosfendik.dev",
  ogImage: "/img/profile1.jpeg",
  intro:
    "I am working across the frontend and backend with modern technologies, focused on solutions that are efficient, scalable, and maintainable.",
  about: [
    "I am a Full Stack Developer with around a year of experience building end-to-end web applications, from database design to implementing responsive and user-friendly interfaces. I'm comfortable working across both the frontend and backend with modern technologies.",
    "I have a strong interest in clean code, application performance, and optimal user experience. My goal is to ensure that every project I work on not only functions well, but also delivers meaningful value to the people who use it.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/pendik090" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ros-fendik-ba4998208" },
    { label: "Email", href: "mailto:rospendik321@gmail.com" },
  ],
  cvHref: "/docs/CV Rosfendik.pdf",
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

export type CareerEntry = {
  company: string
  role: string
  location: string
  startDate: string
  endDate: string
  type: "Onsite • Employee" | "Onsite • Internship"
  responsibilities: string[]
  logo?: string
}

export const careers: CareerEntry[] = [
  {
    company: "Creative Media",
    role: "Full Stack Developer",
    location: "Surabaya",
    startDate: "May 2025",
    endDate: "Present",
    type: "Onsite • Employee",
    responsibilities: [
      "Developed 4+ web-based client and internal projects using Laravel, Bootstrap, and MySQL",
      "Managed database backups and ensured data integrity for production systems",
      "Designed and implemented responsive user interfaces with TailwindCSS and Bootstrap",
      "Conducted course training sessions for new team members and interns",
    ],
    logo: "/img/logo_cm.jpg"
  },
  {
    company: "PT Javadwipa Duta Mandiri",
    role: "Full Stack Developer Intern",
    location: "Surabaya",
    startDate: "Oct 2024",
    endDate: "May 2025",
    type: "Onsite • Internship",
    responsibilities: [
      "Built a web-based HSE document management system using Laravel",
      "Developed a CCTV monitoring mobile application using Flutter and MQTT protocol",
      "Designed UI wireframes and prototypes for a visitor management system using Figma",
      "Collaborated with the engineering team on code reviews and sprint planning",
    ],
    logo: "/img/javadwipa_logo.jpg"
  },
  {
    company: "PT Digital Solusi Master",
    role: "Full Stack Developer Intern",
    location: "Surabaya",
    startDate: "Dec 2023",
    endDate: "Feb 2024",
    type: "Onsite • Internship",
    responsibilities: [
      "Developed and maintained features for a school information system using Laravel",
      "Optimized complex MySQL database queries to improve application performance",
      "Assisted in client relationship management and requirement gathering sessions",
    ],
    logo: "/img/solusimaster_logo.jpg"
  },
  {
    company: "PT Dwitunggal Jaya Abadi",
    role: "Field Engineer",
    location: "Surabaya",
    startDate: "July 2018",
    endDate: "Aug 2020",
    type: "Onsite • Employee",
    responsibilities: [
      "Installed and maintained IoT-based Automatic Meter Reading (AMR) devices for PLN customers",
      "Ensured real-time data transmission from field devices to the central monitoring website",
      "Provided technical education and support to customers on device usage and maintenance",
    ],
  },
]

export type EducationEntry = {
  institution: string
  degree: string
  location: string
  startYear: string
  endYear: string
  gpa?: string
  logo?: string
}

export const education: EducationEntry[] = [
  {
    institution: "Universitas 17 Agustus 1945 Surabaya",
    degree: "S1 — Informatics Engineering",
    location: "Surabaya",
    startYear: "2020",
    endYear: "2024",
    gpa: "3.66 / 4.00",
    logo: "/img/untag_logo.jpg"
  },
  {
    institution: "SMK Negeri 7 Surabaya",
    degree: "Mechanical Engineering",
    location: "Surabaya",
    startYear: "2015",
    endYear: "2018",
    logo: "/img/smk7.png"
  },
]
