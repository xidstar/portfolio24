import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";

import {
  headContainerAnimation,
  headTextAnimationDelay,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

import { CustomButton, Underline } from "../components";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="flex flex-col justify-center h-[95%] md:h-screen w-full p-4 md:max-w-screen-xl 2md:max-w-screen-2xl mx-auto items-start"
          {...slideAnimation("left")}
        >
          <motion.div
            className="page-content flex flex-col w-full h-full md:w-1/2 md:h-2/3"
            {...headContainerAnimation}
          >
            <div className={`${snap.isMobile ? "p-2" : ""}`}>
              <motion.h1 className="head-text" {...headTextAnimation}>
                Hi, I'm
                <span className="color-text-wrapper relative pl-5">
                  <span className="text-icon font-bold h-[3.2rem] md:h-[4.5rem]">
                    Sid!
                  </span>
                  <Underline />
                </span>
              </motion.h1>
              <br />
              <motion.h3
                className="text-xl md:text-3xl"
                {...headTextAnimationDelay}
              >
                I develop websites, user interfaces, web applications, and 2D &
                3D visuals.
              </motion.h3>

              <motion.div {...headTextAnimation}>
                <h3 className="text-xl pt-5 md:text-2xl font-bold">
                  Front End / Creative
                  <br className="hidden sm:block" />
                  Developer
                </h3>
              </motion.div>
            </div>

            <CustomButton
              type="next"
              title="Projects"
              handleClick={() => (
                (state.intro = false), (state.projects = true)
              )}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
