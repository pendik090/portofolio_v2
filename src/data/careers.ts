
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