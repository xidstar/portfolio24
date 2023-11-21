import React from 'react'
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

const About = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.about && (
        <motion.section className="flex flex-col justify-center h-screen w-full p-4 max-w-screen-2xl mx-auto items-start">
          <motion.div
            className="home-content flex flex-col w-full"
            {...headContainerAnimation}
          >
            <motion.div {...headTextAnimation}>
              <h3 className="head-text">Bio</h3>
            </motion.div>

            <motion.div {...headTextAnimation}>
              <h3 className="text-2xl font-bold">Skills</h3>
            </motion.div>

            <motion.div className="flex flex-col" {...headContentAnimation}>
              <p className="max-w-md font-normal text-gray-600 md:text-xl">
                Resume
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="page-buttons flex w-full justify-center"
            {...slideAnimation("up")}
          >
            <CustomButton
              type="filled"
              title="Home"
              handleClick={() => ((state.intro = true), (state.about = false))}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg mr-2"
            />
            <CustomButton
              type="filled"
              title="Projects"
              handleClick={() => (
                (state.about = false), (state.projects = true)
              )}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg ml-2"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default About