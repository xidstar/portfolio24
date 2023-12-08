import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';

import state from '../store';

import {
  headContainerAnimation,
  headContentAnimation,
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
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Hi, I'm
                <span className='color-text-wrapper relative'>
                  <span className="color-text">Sid!</span>

                  <Underline />
                </span>
              </h1>
              <br />
              <h3 className="font-bold text-3xl">
                I develop websites, user interfaces, web applications, & 2D and
                3D visuals.
              </h3>
            </motion.div>

            <motion.div {...headTextAnimation}>
              <h3 className="text-2xl font-bold">
                Front End / Creative
                <br className="hidden sm:block" />
                Developer
              </h3>
            </motion.div>

            <CustomButton
              type="filled"
              title="Scout"
              handleClick={() => ((state.intro = false), (state.about = true))}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Home