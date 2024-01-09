import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';

import state from '../store';

import {
  headContainerAnimation,
  headTextAnimationDelay,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

import { CustomButton, Underline } from '../components';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="flex flex-col justify-center h-screen w-full p-4 max-w-screen-2xl mx-auto items-start"
          {...slideAnimation("left")}
        >
          <motion.div
            className="page-content flex flex-col w-2/5"
            {...headContainerAnimation}
          >
            <div>
              <motion.h1 className="head-text" {...headTextAnimation}>
                Hi, I'm
                <span className="color-text-wrapper relative pl-5">
                  <span className="color-text">Sid!</span>
                  <Underline />
                </span>
              </motion.h1>
              <br />
              <motion.h3 className="text-3xl" {...headTextAnimationDelay}>
                I develop websites, user interfaces, web applications, and 2D &
                3D visuals.
              </motion.h3>
            </div>

            <motion.div {...headTextAnimation}>
              <h3 className="text-xl xl:text-2xl font-bold">
                Front End / Creative
                <br className="hidden sm:block" />
                Developer
              </h3>
            </motion.div>

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
}

export default Home