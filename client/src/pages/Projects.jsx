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
import Carousel from "../components/Carousel";

const Projects = () => {
  const snap = useSnapshot(state);
  


  return (
    <AnimatePresence>
      {snap.projects && (
        <>
          <motion.section className="flex justify-start items-center h-screen w-full p-4 max-w-screen-2xl mx-auto ">
            <motion.div
              className="tabs flex flex-col w-full h-[70%] xl:w-2/3 xl:h-2/3  drop-shadow-2xl rounded-lg relative"
              {...headTextAnimation}
            >
              <Carousel />
            </motion.div>
          </motion.section>

          <motion.div
            className="page-buttons absolute flex w-full justify-center bottom-10"
            {...headContentAnimation}
          >
            <CustomButton
              type="back"
              title="Bio"
              handleClick={() => (
                (state.about = true), (state.projects = false)
              )}
            />
            <CustomButton
              type="next"
              title="Contact"
              handleClick={() => (
                (state.projects = false), (state.contact = true)
              )}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Projects;
