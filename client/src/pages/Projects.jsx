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
              className="tabs flex flex-col w-full h-[70%] xl:w-2/3 xl:h-2/3 glassmorphism rounded-lg relative"
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
              type="filled"
              title="Bio"
              handleClick={() => (
                (state.about = true), (state.projects = false)
              )}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg mr-2"
            />
            <CustomButton
              type="filled"
              title="Contact"
              handleClick={() => (
                (state.projects = false), (state.contact = true)
              )}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg ml-2"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Projects;
