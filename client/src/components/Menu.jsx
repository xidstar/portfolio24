import React, {useEffect} from 'react';
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { useSnapshot } from "valtio";
import state from '../store';


const Menu = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    state.isMenuOpen = false;
  }, [snap.intro, snap.about, snap.projects, snap.contact])

  return (
    <>
      <button
        onClick={() => {
          state.isMenuOpen = !snap.isMenuOpen;
        }}
        className={`text-[2.5rem] z-30 top-7 right-10 absolute`}
      >
        {snap.isMenuOpen ? (
          <VscChromeClose
            className={`${
              snap.intro || snap.about ? "stroke-black" : "stroke-slate-300"
            }`}
          />
        ) : (
          <FiMenu
            className={`${
              snap.intro || snap.about ? "stroke-black" : "stroke-slate-300"
            }`}
          />
        )}
      </button>
      <motion.div
        className={`absolute opacity-[0.7] w-full xl:w-96 h-full top-0 z-20 bg-slate-200 duration-500 flex justify-center items-center shadow-3xl ${
          snap.isMenuOpen ? "right-0" : "-right-[100%]"
        }`}
      >
        <div className="menu-wrapper flex gap-10 flex-col text-3xl">
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
      </motion.div>
    </>
  );
}

const MenuButton = (props) => {
  const {label, onClick} = props

  return (
    <button
      onClick={onClick}
      className="menu-btn text-left font-bold transition transform hover:-translate-y-1 hover:scale-110 duration-300 opacity-100"
    >
      {label}
    </button>
  );
}

export default Menu