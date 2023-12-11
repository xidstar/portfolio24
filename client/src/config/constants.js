import { portfolio, barbershop, dashboard, tshirt } from "../assets";


export const AboutTabs = [
  {
    title: "Bio",
  },
  {
    title: "Skills",
  },
  // {
  //   title: "Resume",
  // },
]

export const framerMotionConfig = {
  type: "spring",
  mass: 5,
  stiffness: 100,
  damping: 50,
  restDelta: 0.0001,
  duration: 1,
}

export const projects = [
  {
    title: "Portfolio 2023",
    description: "React, Sass",
    url: "https://sidneyo.netlify.app/",
    img: portfolio,
  },
  {
    title: 'Cyber Dashboard',
    description: 'React, Tailwind, Leaflet, ChartJs',
    url: 'https://cybersecurity-dashboard.netlify.app/',
    img: dashboard,
  },
  {
    title: `Tshirt Customizer`,
    description: 'React Three Fiber, Tailwind',
    url: 'https://clothing-customizer.netlify.app/',
    img: tshirt
  },
  {
    title: 'The W HairLoft',
    description: 'Gatsby, Contentful CMS, GraphQL',
    url: 'https://thewhairloft.netlify.app/',
    img: barbershop
  },
]

export const skillset = [
  {
    name: "React JS",
    level: 80,
  },
  {
    name: "Javascript",
    level: 90,
  },
  {
    name: "Threejs / React Three Fiber",
    level: 70,
  },
  {
    name: "Nextjs",
    level: 60,
  },
  {
    name: "Nodejs",
    level: 70,
  },
  {
    name: ".Net Framework",
    level: 80,
  },
]