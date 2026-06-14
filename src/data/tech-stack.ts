export interface TechStack {
  id: string
  name: string
  iconLight: string
  iconDark: string
}

export const TECH_STACKS = {
  html: {
    id: "html",
    name: "HTML5",
    iconLight: "/icons/html5.svg",
    iconDark: "/icons/html5.svg",
  },
  css: {
    id: "css",
    name: "CSS3",
    iconLight: "/icons/css3.svg",
    iconDark: "/icons/css3.svg",
  },
  javascript: {
    id: "javascript",
    name: "Javascript",
    iconLight: "/icons/javascript.svg",
    iconDark: "/icons/javascript.svg",
  },
  python: {
    id: "python",
    name: "Python",
    iconLight: "/icons/python.svg",
    iconDark: "/icons/python.svg",
  },
  googleColab: {
    id: "googleColab",
    name: "Google Colab",
    iconLight: "/icons/google-colab.svg",
    iconDark: "/icons/google-colab.svg",
  },
  laravel: {
    id: "laravel",
    name: "Laravel",
    iconLight: "/icons/laravel.svg",
    iconDark: "/icons/laravel.svg",
  },
  bootstrap: {
    id: "bootstrap",
    name: "Bootstrap",
    iconLight: "/icons/bootstrap.svg",
    iconDark: "/icons/bootstrap.svg",
  },
  tailwind: {
    id: "tailwind",
    name: "Tailwind CSS",
    iconLight: "/icons/tailwindcss.svg",
    iconDark: "/icons/tailwindcss.svg",
  },
  mysql: {
    id: "mysql",
    name: "MySQL",
    iconLight: "/icons/mysql-light.svg",
    iconDark: "/icons/mysql-dark.svg",
  },
  codeigniter: {
    id: "codeigniter",
    name: "CodeIgniter",
    iconLight: "/icons/codeigniter.svg",
    iconDark: "/icons/codeigniter.svg",
  },
  chartjs: {
    id: "chartjs",
    name: "Chart JS",
    iconLight: "/icons/chartjs.svg",
    iconDark: "/icons/chartjs.svg",
  },
  figma: {
    id: "figma",
    name: "Figma",
    iconLight: "/icons/figma.svg",
    iconDark: "/icons/figma.svg",
  },
} satisfies Record<string, TechStack>