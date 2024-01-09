import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";

import {
  headContentAnimation,
  headTextAnimation,
} from "../config/motion";

import { CustomButton } from "../components";
import Carousel from "../components/Carousel";

const Projects = () => {
  const snap = useSnapshot(state);
  


  return (
    <AnimatePresence>
      {snap.projects && (
        <motion.div {...headTextAnimation}>
          <motion.section className="flex justify-start items-center h-screen w-full p-4 max-w-screen-2xl mx-auto ">
            <motion.div className="tabs flex flex-col w-full h-[70%] xl:w-3/5 xl:h-3/5  drop-shadow-2xl rounded-lg relative">
              <Carousel />
            </motion.div>
          </motion.section>

          <motion.div
            className="page-buttons absolute flex w-full justify-center bottom-10"
            {...headContentAnimation}
          >
            <CustomButton
              type="back"
              title="Intro"
              handleClick={() => (
                (state.projects = false), (state.intro = true)
              )}
            />
            <CustomButton
              type="next"
              title="About"
              handleClick={() => (
                (state.projects = false), (state.about = true)
              )}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Projects;
