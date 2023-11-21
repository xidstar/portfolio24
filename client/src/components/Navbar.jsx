import React from 'react';
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

import { CustomButton, Menu } from "../components";

const Navbar = ({props}) => {
  const snap = useSnapshot(state);

  // const { onSectionChange, menuOpened, setMenuOpened } = props;
  
  return (
    <motion.div
      className="absolute z-10 top-5 w-screen px-5"
      {...fadeAnimation}
    >
      <div className="navbar w-full flex justify-between">
        <CustomButton
          type="filled"
          title="Home"
          handleClick={() => (
            (state.intro = true), 
            (state.about = false),
            (state.projects = false), 
            (state.contact = false)
          )}
        />

        <Menu />
      </div>
    </motion.div>
  );
}

export default Navbar