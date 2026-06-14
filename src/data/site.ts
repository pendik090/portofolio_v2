import { TECH_STACKS } from "./tech-stack"

export const site = {
  name: "Rosfendik",
  role: "Full Stack Developer",
  location: "Surabaya, Indonesia",
  email: "rospendik321@gmail",
  tagline: "Full Stack Developer based in Surabaya",
  avatar: "/img/profile1.jpeg",
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
  slug: string
  images: string[]
  overview: string
  features: string[]
  video?: string
}

export const projects: Project[] = [
    {
    title: "Portofolio Project",
    description:
      "A personal developer portofolio project built from scratch with TypeScript, React, Astro JS and TailwindCSS",
    year: "2026",
    tech: [
      TECH_STACKS.typescript,
      TECH_STACKS.react,
      TECH_STACKS.astro,
      TECH_STACKS.tailwind,
    ],
    slug: "portofolio",
    images: [
      "/img/projects/portofolio.png",
    ],
    overview:
      "Personal website portofolio built with Typescript, React, Astro and TailwindCSS. Project data is persisted in Typescript data with light and dark mode support.",
    features: [
      "Home Page - Profile, Summary, Tech Stack, Selected Work and Documents",
      "About Page - Detail about profile, current experience and education background",
      "Project Page - All of project ",
      "Summary of all my projects that have been worked on for more than 1 year as a full stack developer",
    ],
  },
  {
    title: "C-Mobile (Migration Project)",
    description:
      "Internal web-based management system built for course management and education company use at Creative Media.",
    year: "2026",
    tech: [
      TECH_STACKS.laravel,
      TECH_STACKS.bootstrap,
      TECH_STACKS.tailwind,
      TECH_STACKS.mysql,
    ],
    slug: "c-mobile",
    images: ["/img/projects/cmobile_after.png"],
    overview:
      "A complete migration and redesign of an existing internal management system for Creative Media, a course and education company. The system handles student enrollment, class scheduling, instructor management, and payment tracking across multiple programs.",
    features: [
      "Student enrollment and registration management",
      "Class scheduling and instructor assignment",
      "Payment tracking and invoice generation",
      "Role-based access for admin and staff",
      "Responsive dashboard with real-time statistics",
      "Integration with legacy database architecture with zero data loss",
    ],
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
    slug: "my-portal-app",
    images: ["/img/projects/myportal2.png", "/img/projects/myportal.png"],
    overview:
      "An internal invoice management portal built for PT Diamond Hire Indonesia to digitize and automate their invoicing workflow. The system streamlines invoice creation, approval routing, payment tracking, and reporting — replacing a manual spreadsheet-based process.",
    features: [
      "1000+ Client and vendor management",
      "Invoice creation with auto-generated invoice numbers",
      "Multi-level approval workflow",
      "Payment status tracking (unpaid, partial, paid)",
      "Monthly and yearly financial reports",
      "Export to PDF and Excel formats",
    ],
  },
  {
    title: "Uki Education",
    description:
      "Internal management system built for UKI Education — a course institution that operates across multiple branches.",
    year: "2025",
    tech: [
      TECH_STACKS.laravel,
      TECH_STACKS.bootstrap,
      TECH_STACKS.tailwind,
      TECH_STACKS.mysql,
    ],
    slug: "uki-education",
    images: [
      "/img/projects/ukiedu3.png",
      "/img/projects/ukiedu1.png",
      "/img/projects/ukiedu2.png",
    ],
    overview:
      "Internal management system built for UKI Education. It is basically a one-stop platform that handles two main worlds: the academic/student side (enrollments, payments, subjects, tutors, schools) and the HR/employee side (attendance leave, overtime, payroll, performance tracking).",
    features: [
      "Dynamic role-based menus and access are controlled per role, making it easy to fine-tune what each user sees",
      "School & branch management for partner schools and multi-branch operations",
      "Account switchingfor users with multiple roles can switch between accounts without logging out",
      "Bulk data import to supports Excel import for students, schools, employees, and performance data",
      "Student management to register and track students with full personal and family data, class schedules, and enrollment status",
      "ayment tracking to record and monitor student payment history, including school-level billing",
    ],
  },
  {
    title: "Masjid Baiturrahiim",
    description:
      "A community mosque project focused on providing a serene, informative environment for community activities.",
    year: "2024",
    tech: [
      TECH_STACKS.html,
      TECH_STACKS.css,
      TECH_STACKS.javascript,
      TECH_STACKS.bootstrap,
    ],
    slug: "masjid-baiturrahiim",
    images: [
      "/img/projects/masjid1.png",
      "/img/projects/masjid2.png",
      "/img/projects/masjid3.png",
      "/img/projects/masjid4.png",
    ],
    overview:
      "A community website and management system for Masjid Baiturrahiim, designed to serve as a digital hub for mosque activities. The platform provides prayer schedules, event announcements, donation management, and a content management system for administrators to keep the community informed.",
    features: [
      "Prayer time schedule with automatic daily updates",
      "Event calendar and announcement system",
      "Online donation and fundraising management",
      "Sermon and article publishing (CMS)",
      "Photo gallery of mosque activities",
      "Contact and feedback form for the community",
    ],
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
    slug: "uw-open",
    images: [
      "/img/projects/uwopen1.png",
      "/img/projects/uwopen2.png",
      "/img/projects/uwopen3.png",
      "/img/projects/uwopen4.png",
    ],
    overview:
      "A real-time tennis tournament management system built for UW Open events. The platform handles player registration, match scheduling, live score tracking, and bracket progression — allowing organizers to run tournaments efficiently and participants to follow matches in real time.",
    features: [
      "Player registration and seeding management",
      "Automated bracket generation (single elimination)",
      "Real-time score entry and live match tracking",
      "Tournament schedule and court assignment",
      "Player profiles with match history",
      "Public leaderboard and match results page",
    ],
  },
  {
    title: "Diakademik",
    description:
      "Diakademik is a full-featured School Management Information System (SMIS) built for Indonesian educational institutions.",
    year: "2024",
    tech: [
      TECH_STACKS.laravel,
      TECH_STACKS.bootstrap,
      TECH_STACKS.mysql,
      TECH_STACKS.chartjs,
    ],
    slug: "diakademik",
    images: [
      "/img/projects/diakad1.png",
      "/img/projects/diakad2.png",
      "/img/projects/diakad3.png",
      "/img/projects/diakad4.png",
    ],
    overview:
      "Diakademik is a full-featured School Management Information System (SMIS) built for Indonesian educational institutions. It covers pretty much every operational angle of a school — from student admissions (PPDB) all the way through graduation — with a heavily role-based architecture that serves administrators, teachers, students, parents, finance staff, guidance counselors, and more. The system has grown significantly over time (migrations dating back to 2018), and already use for more than 40+ schools.",
    features: [
      "Student Admissions(PPDB) for new student registration.",
      "E-Learning — online classes, teaching materials with file uploads, quizzes, etc.",
      "Financial Management — Monthly tuition payment (SPP) Management",
      "Multi-Role Access Control — 12+ distinct roles (admin, teacher, student, parent, etc.)",
      "Daily attendance with fingerprint device integration and whatsapp notification to parents",
      "Grading & Report Cards — subject grades, extracurricular grades, and report cards",
    ],
  },
  {
    title: "Invoice App System",
    description:
      "Internal business management to handles full lifecycle of client order and tracking payments contract",
    year: "2025",
    tech: [
      TECH_STACKS.laravel,
      TECH_STACKS.bootstrap,
      TECH_STACKS.mysql,
      TECH_STACKS.chartjs,
    ],
    slug: "invoice-app",
    images: [
      "/img/projects/invoice1.png",
      "/img/projects/invoice2.png",
    ],
    overview:
      "Invoice App System is an internal business management system built for Creative Media, a company based in Surabaya. It handles the full lifecycle of client orders from capturing company and service data, building orders, generating professional PDF invoices, to tracking payments and maintenance contracts.",
    features: [
      "Email notifications — sends maintenance reminder emails automatically",
      "Order & cart system — build orders by selecting services and packages, with a cart-style flow before finalizing",
      "Invoice management — automatically calculates for PPN/PPH tax, and stream invoices as PDF",
      "Reports & exports — exportable reports for invoices, orders, customers, and maintenance to Excel",
      "Multi-role access — separate dashboards and permissions for admin and super admin",
    ],
  },
  {
    title: "Basic Programming Course",
    description:
      "Provide learning resources for beginners to understand the fundamentals of programming for 10 meetings",
    year: "2025",
    tech: [
      TECH_STACKS.python,
      TECH_STACKS.googleColab,
    ],
    slug: "programming-course",
    images: [
      "/img/teaching/thumbnail_teaching.jpeg",
      "/img/teaching/teaching1.png",
      "/img/teaching/teaching2.png",
    ],
    video: "/img/teaching/teaching.mp4",
    overview:
      "The course covers fundamental topics such as variables, data types, data structures, functions, and object-oriented programming, using Google Colab to enhance the learning experience. Each meeting lasts for 2 hours.",
    features: [
      "Learning Modules - Structured modules covering fundamental programming concepts with interactive examples and exercises",
      "Final project to apply student knowledge by building a simple application using the concepts learned throughout the course",
      "Lifetime consultations to ensure the students understanding",
    ],
  },
  {
    title: "Smart PJU",
    description:
      "Device managemnet system project focused on providing real time data and analytics for public lighting",
    year: "2025",
    tech: [
      TECH_STACKS.laravel,
      TECH_STACKS.bootstrap,
      TECH_STACKS.mysql,
      TECH_STACKS.javascript,
    ],
    slug: "smart-pju",
    images: [
      "/img/projects/smartpju1.png",
      "/img/projects/smartpju2.png",
      "/img/projects/smartpju3.png",
    ],
    overview:
      "Smart PJU bridges IoT hardware with a web dashboard — devices push real-time sensor readings through an API, and the system takes care of the rest: storing records, visualizing data on a map, and flagging devices that go silent.",
    features: [
      "Device registry with full metadata — brand, voltage, equipment checklist, etc",
      "Interactive map view showing all georeferenced devices with operation and remaining lifetime",
      "REST API with Laravel Sanctum authentication for IoT devices to push sensor data",
      "Real-time electrical monitoring to tracks source/load voltage, current, and power for each device",
      "Detailed monitoring page per device with QR code generation for quick field access",
    ],
  },
  {
    title: "QHSE",
    description:
      "Quality, Health, Safety, and Environment (QHSE) management platform built for construction or project-based companies.",
    year: "2025",
    tech: [
      TECH_STACKS.laravel,
      TECH_STACKS.bootstrap,
      TECH_STACKS.mysql,
      TECH_STACKS.javascript,
    ],
    slug: "qhse",
    images: [
      "/img/projects/qhse1.png",
      "/img/projects/qhse2.png",
    ],
    overview:
      "Quality, Health, Safety, and Environment (QHSE) management platform built for construction or project-based companies. It centralizes everything from project tracking and daily work reports to equipment inspections and safety observations",
    features: [
      "Notification System for inspections, reports, and surveys",
      "Daily Work Reports to structured daily reports with multi-level approval chain (QHSE Officer → Project Manager → Holding)",
      "K3 Safety Observation — log and monitor occupational health and safety field observations",
      "Role & Permission Management — granular access control via role-based permissions",
      "Survey Module — location/site surveys with a full status lifecycle (pending → assessed → VP approval → approved/rejected)",
      "Dashboard with Charts — project status doughnut chart, QHSE activity bar chart, and latest data widgets"
    ],
  },
  {
    title: "Mitra Tani 27",
    description:
      "Web and mobile-based farmer partnership system built to enhance collaboration between farmers and suppliers.",
    year: "2025",
    tech: [
      TECH_STACKS.figma,
    ],
    slug: "mitratani",
    images: [
      "/img/design/mitratani_mockup.png",
    ],
    overview:
      "The system includes a web-based admin panel and mobile app for farmers and cooperative staff to manage farmer profiles, product listings, orders, and payments to browse available products, place orders, and track deliveries.",
    features: [
      "Quality Control - Implement a quality control system to ensure that all products meet the cooperative's standards before being listed on the platform",
      "Approved Supplier List to approved suppliers that farmers can choose from when placing orders, ensuring reliability and quality of products",
      "Planting Management that allows farmers to track their planting schedules, receive reminders for watering and fertilizing, and access best practices for crop care",
    ],
  },
  {
    title: "Wyndham Room Service",
    description:
      "Wyndham Room Service is a room service management system designed to streamline orders built in mobile and web platforms.",
    year: "2025",
    tech: [
      TECH_STACKS.figma,
    ],
    slug: "wyndham",
    images: [
      "/img/design/wyndham_mockup1.png",
      "/img/design/wyndham_mockup2.png",
    ],
    overview:
      "Wyndham Room Service App allows guests to easily browse the menu, place orders, and track their delivery status in real time. It also provides a user-friendly interface for hotel staff to manage incoming orders, update order statuses, and ensure timely delivery to guest rooms.",
    features: [
      "Room Access - Lock and Unlock room doors directly from the app for seamless entry during room service deliveries",
      "Room Service - An interactive menu with detailed descriptions and images of each item to help guests make informed choices",
      "Real-time Order Tracking - Guests can track the status of their room service orders in real time, from preparation to delivery",
      "Cart & Checkout system that allows guests to review their order before checkout, with multiple payment options available"
    ],
  },
  {
    title: "Visitor Management System",
    description:
      "Designed to fulfill requirements from the client to provide visitor management solution on site.",
    year: "2025",
    tech: [
      TECH_STACKS.figma,
    ],
    slug: "visitor-app",
    images: [
      "/img/design/visitor_mockup.png",
    ],
    overview:
      "Visitor Management System designed to streamline the check-in process for visitors at on site project. The system includes a web-based admin panel for reception staff to manage visitor profiles using RFID tags for quick check-ins.",
    features: [
      "RFID Check-in - Scan RFID tags for visitors to quickly check in upon arrival",
      "Monitoring visitor traffic - Generate reports on visitor traffic patterns, peak hours, and frequent visitors.",
      "Real-time Updates - Provide real-time updates on appointment status to both visitors and reception staff",
    ],
  },
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
    degree: "S1 — Teknik Informatika",
    location: "Surabaya",
    startYear: "2020",
    endYear: "2024",
    gpa: "3.66 / 4.00",
    logo: "/img/untag_logo.jpg"
  },
  {
    institution: "SMK Negeri 7 Surabaya",
    degree: "Teknik Mekanik / Mechanical Engineering",
    location: "Surabaya",
    startYear: "2015",
    endYear: "2018",
    logo: "/img/smk7.png"
  },
]
