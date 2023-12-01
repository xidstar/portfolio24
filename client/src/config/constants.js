import { BsPersonLinesFill } from "react-icons/bs";
import { FaPersonDigging } from "react-icons/fa6";
import { RiTodoFill } from "react-icons/ri";
import { redbtn, graybtn, blackbtn } from "../assets";

export const AboutTabs = [
  {
    title: "Bio",
    img: graybtn,
    icon: BsPersonLinesFill
  },
  {
    title: "Skills",
    img: graybtn,
    icon: FaPersonDigging
  },
  {
    title: "Resume",
    img: graybtn,
    icon: RiTodoFill
  },
]

export const framerMotionConfig = {
  type: "spring",
  mass: 5,
  stiffness: 200,
  damping: 50,
  restDelta: 0.0001,
  duration: 1,
}