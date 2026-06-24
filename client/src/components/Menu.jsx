import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { useSnapshot } from "valtio";
import state from "../store";
import Socials from "./Socials";
import { headTextAnimation } from "../config/motion"

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
        className={`text-[2.5rem] hover:text-[#d61a39] z-30 top-7 right-5 xl:right-10 absolute`}
      >
        {snap.isMenuOpen ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex"
          >
            <VscChromeClose className="stroke-white text-white" />
          </motion.span>
        ) : (
          <FiMenu className="stroke-black" />
        )}
      </button>

      <motion.div
        className={`absolute w-full xl:w-96 h-full top-0 z-20 bg-gray-900 duration-700 flex justify-center items-center shadow-3xl ${
          snap.isMenuOpen ? "right-0" : "-right-[100%]"
        }`}
      >
        <AnimatePresence>
          {snap.isMenuOpen && (
            <motion.div 
              className="menu-wrapper flex gap-10 flex-col items-center text-center text-3xl text-slate-200"
              {...headTextAnimation}
            >
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
              <Socials />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="menu-btn text-left font-bold transition duration-100"
    >
      {label}
    </button>
  );
};

export default Menu;