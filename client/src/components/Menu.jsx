import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { useSnapshot } from "valtio";
import state from "../store";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Menu = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    state.isMenuOpen = false;
  }, [snap.intro, snap.about, snap.projects, snap.contact]);

  return (
    <>
      <button
        onClick={() => {
          state.isMenuOpen = !snap.isMenuOpen;
        }}
        className={`text-[2.5rem] z-30 top-7 right-10 absolute`}
      >
        {snap.isMenuOpen ? (
          <VscChromeClose className="stroke-black" />
        ) : (
          <FiMenu className="stroke-black" />
        )}
      </button>
      <motion.div
        className={`absolute border-2  w-full md:w-96 h-full top-0 z-20 bg-slate-200 duration-700 flex justify-center items-center shadow-3xl ${
          snap.isMenuOpen ? "right-0" : "-right-[100%]"
        }`}
      >
        <div className="menu-wrapper flex gap-10 flex-col text-3xl text-slate-800">
          <MenuButton
            label="Intro"
            onClick={() => (
              (state.intro = true),
              (state.about = false),
              (state.projects = false),
              (state.contact = false)
            )}
          />
          <MenuButton
            label="Projects"
            onClick={() => (
              (state.intro = false),
              (state.about = false),
              (state.projects = true),
              (state.contact = false)
            )}
          />
          <MenuButton
            label="Bio"
            onClick={() => (
              (state.intro = false),
              (state.about = true),
              (state.projects = false),
              (state.contact = false)
            )}
          />
          <MenuButton
            label="Contact"
            onClick={() => (
              (state.intro = false),
              (state.about = false),
              (state.projects = false),
              (state.contact = true)
            )}
          />
        </div>

        <div className="social flex justify-around items-center absolute bottom-5">
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
      </motion.div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="menu-btn text-left font-bold transition duration-300"
    >
      {label}
    </button>
  );
};

export default Menu;
