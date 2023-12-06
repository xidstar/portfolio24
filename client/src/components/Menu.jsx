import React, {useEffect} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { useSnapshot } from "valtio";
import state from '../store';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

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
        {snap.isMenuOpen ? <VscChromeClose /> : <FiMenu />}
      </button>
      <motion.div
        className={`absolute w-96 h-full top-0 z-20 bg-white transition-all ease-in-out duration-500 flex justify-center items-center shadow-3xl ${
          snap.isMenuOpen ? "right-0" : "-right-[100%]"
        }`}
      >
        <div className="flex gap-10 flex-col text-3xl">
          <MenuButton
            label="Home"
            onClick={() => (
              (state.intro = true),
              (state.about = false),
              (state.projects = false),
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
            label="Projects"
            onClick={() => (
              (state.intro = false),
              (state.about = false),
              (state.projects = true),
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
    <button onClick={onClick} className="text-left font-bold">
      {label}
    </button>
  )
}

export default Menu