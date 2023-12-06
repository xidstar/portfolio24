import { MdPersonAddAlt } from "react-icons/md";
import { VscGraphLeft } from "react-icons/vsc";
import { RiMailDownloadLine } from "react-icons/ri";

import { redbtn, graybtn, blackbtn, tshirt, dashboard, portfolio, barbershop } from "../assets";

export const AboutTabs = [
  {
    title: "Bio",
    img: graybtn,
    icon: MdPersonAddAlt
  },
  {
    title: "Skills",
    img: graybtn,
    icon: VscGraphLeft 
  },
  {
    title: "Resume",
    img: graybtn,
    icon: RiMailDownloadLine 
  },
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
    title: 'Cybersecurity Dashboard',
    description: 'React, Tailwind, Leaflet, ChartJs',
    url: 'https://cybersecurity-dashboard.netlify.app/',
    img: dashboard,
  },
  {
    title: `Tshirt Customizer`,
    description: 'React, Tailwind, ThreeJS',
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
