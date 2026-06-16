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
