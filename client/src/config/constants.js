import { MdPersonAddAlt } from "react-icons/md";
import { VscGraphLeft } from "react-icons/vsc";
import { RiMailDownloadLine } from "react-icons/ri";

import { redbtn, graybtn, blackbtn } from "../assets";

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

