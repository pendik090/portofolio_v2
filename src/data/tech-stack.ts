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
} satisfies Record<string, TechStack>