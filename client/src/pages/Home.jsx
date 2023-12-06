import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';
import { box } from '../assets';

import state from '../store';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

import { CustomButton } from '../components';

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
            className="page-content flex flex-col w-full"
            {...headContainerAnimation}
          >
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Hi, I'm <span style={{ color: "#600bb5" }}>Sid!</span>
              </h1>
            </motion.div>

            <motion.div {...headTextAnimation}>
              <h3 className="text-2xl font-bold">
                Front End / Creative
                <br className="hidden sm:block" />
                Developer
              </h3>
            </motion.div>

            <motion.div className="flex flex-col" {...headContentAnimation}>
              <p className="max-w-md font-normal text-gray-600 md:text-xl">
                I develop websites, user interfaces, web applications, 2D and 3D
                visuals.
              </p>
            </motion.div>

            <CustomButton
              type="filled"
              title="Scout"
              handleClick={() => (
                (state.intro = false), 
                (state.about = true))}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Home