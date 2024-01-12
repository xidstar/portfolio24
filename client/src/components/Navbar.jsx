import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";

import {
  fadeAnimation,
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

import { Menu } from "../components";
import { logo } from "../assets";
import Music from "./Music";

const Navbar = ({ props }) => {
  const snap = useSnapshot(state);

  return (
    <>
      <motion.div
        className="absolute z-10 top-5 w-screen px-5"
        {...fadeAnimation}
      >
        <div className="navbar w-full flex justify-between items-center m-auto relative">
          <img
            src={logo}
            alt="logo"
            className="max-w-[100px] h-auto cursor-pointer"
            onClick={() => (
              (state.intro = true),
              (state.about = false),
              (state.projects = false),
              (state.contact = false)
            )}
          />
          <Music />
        </div>
      </motion.div>

      <Menu />
    </>
  );
};

export default Navbar;
