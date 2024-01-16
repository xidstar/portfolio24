import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";

import { headContentAnimation, headTextAnimation } from "../config/motion";

import { CustomButton } from "../components";
import Carousel from "../components/Carousel";

const Projects = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.projects && (
        <>
          <motion.section
            className="flex flex-col justify-center h-[88%] md:h-screen w-full p-4 md:max-w-screen-xl 2md:max-w-screen-2xl mx-auto items-start"
            {...headTextAnimation}
          >
            <motion.div className="tabs flex flex-col h-auto w-full md:w-2/3 md:max-w-[800px] drop-shadow-2xl rounded-lg relative">
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
        </>
      )}
    </AnimatePresence>
  );
};

export default Projects;
