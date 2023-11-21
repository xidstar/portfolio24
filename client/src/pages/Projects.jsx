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

const Projects = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.projects && (
        <motion.section className="flex flex-col justify-center h-screen w-full p-4 max-w-screen-2xl mx-auto items-start">
          <motion.div
            className="home-content flex flex-col w-full"
            {...headContainerAnimation}
          >
            <motion.div>
              <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
                <li>Project 4</li>
                <li>Project 5</li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div
            className="page-buttons flex w-full justify-center"
            {...slideAnimation("up")}
          >
            <CustomButton
              type="filled"
              title="About"
              handleClick={() => (
                (state.projects = false), (state.about = true)
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
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Projects;
