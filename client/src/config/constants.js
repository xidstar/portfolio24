import { portfolio, barbershop, dashboard, tshirt, plane } from "../assets";


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
    title: 'FlyteLine',
    description: 'React Three Fiber, CSS',
    url: 'https://flyteline.netlify.app/',
    image: plane,
  },
  {
    title: "Old Portfolio",
    description: "React, Sass",
    url: "https://sidneyo23.netlify.app/",
    image: portfolio,
  },
  {
    title: `Tshirt Customizer`,
    description: 'React Three Fiber, Tailwind',
    url: 'https://clothing-customizer.netlify.app/',
    image: tshirt
  },
  {
    title: 'Cyber Dashboard',
    description: 'React, Tailwind, Leaflet, ChartJs',
    url: 'https://cybersecurity-dashboard.netlify.app/',
    image: dashboard,
  },
  // {
  //   title: 'The W HairLoft',
  //   description: 'Gatsby, Contentful CMS, GraphQL',
  //   url: 'https://thewhairloft.netlify.app/',
  //   img: barbershop
  // },
]

export const skillset = [
  {
    name: "Reactjs",
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
    level: 70,
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