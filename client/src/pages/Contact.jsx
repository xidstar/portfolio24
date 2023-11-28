import React from "react";
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

import { CustomButton } from "../components";

const Contact = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.contact && (
        <motion.section
          className="flex flex-col justify-center h-screen w-full p-4 max-w-screen-2xl mx-auto items-start"
          {...slideAnimation("left")}
        >
          <motion.div
            className="page-content flex flex-col w-full"
            {...headContainerAnimation}
          >
            <motion.div {...headTextAnimation}>
              <h3>Contact</h3>
            </motion.div>
          </motion.div>
          <motion.div
            className="page-buttons flex w-full justify-center"
            {...headContentAnimation}
          >
            <CustomButton
              type="filled"
              title="Projects"
              handleClick={() => (
                (state.projects = true), (state.contact = false)
              )}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg mr-2"
            />
            <CustomButton
              type="filled"
              title="Home"
              handleClick={() => (
                (state.intro = true), (state.contact = false)
              )}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg ml-2"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Contact;
