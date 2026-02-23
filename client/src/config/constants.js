import { portfolio, barbershop, dashboard, tshirt, plane, wtrust, lenels2 } from "../assets";


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
    title: 'Wilmington Trust',
    description: 'HTML, CSS, Javascript',
    url: 'https://www.wilmingtontrust.com/',
    image: wtrust,
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
    title: 'Lenels2',
    description: 'Asp.Net, CSS, Javascript',
    url: 'https://buildings.honeywell.com/us/en/brands/our-brands/lenels2',
    image: lenels2,
  },
  {
    title: 'Cyber Dashboard',
    description: 'React, Tailwind, Leaflet, ChartJs',
    url: 'https://cybersecurity-dashboard.netlify.app/',
    image: dashboard,
  },
]

export const skillset = [
  {
    name: "React/Typescript",
    level: 95,
  },
  {
    name: "Javascript",
    level: 95,
  },
  {
    name: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    name: "Nextjs",
    level: 90,
  },
  {
    name: "Nodejs",
    level: 95,
  },
  {
    name: "ASP.NET Framework",
    level: 80,
  },
  {
    name: "CSS3 / TailwindCSS / SASS",
    level: 99,
  },
]