import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Socials = () => {
  return (
    <div className="social flex justify-around items-center">
        <a
        href="https://www.linkedin.com/in/sidney-oluoch/"
        target="_blank"
        className="hover:cursor-pointer hover:text-[#d61a39]"
        >
        <BsLinkedin className="text-3xl m-2" />
        </a>
        <a
        href="https://github.com/xidstar"
        target="_blank"
        className="hover:cursor-pointer hover:text-[#d61a39]"
        >
        <FaGithub className="text-4xl m-2" />
        </a>
        <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=sidneyo254@gmail.com"
        target="_blank"
        className="hover:cursor-pointer hover:text-[#d61a39]"
        >
        <IoMdMail className="text-4xl m-2" />
        </a>
    </div>
  )
}

export default Socials
