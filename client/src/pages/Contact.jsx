import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { contactText } from "../assets";
import { TbMailShare } from "react-icons/tb";

import state from "../store";

import {
  headTextAnimationDelay,
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

import { CustomButton } from "../components";

const Contact = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.contact && (
        <>
          <motion.section className="flex flex-col justify-center h-[88%] md:h-screen w-full p-4 md:max-w-screen-xl 2md:max-w-screen-2xl mx-auto items-start">
            <motion.div
              className={`page-content flex flex-col w-full h-1/2 md:w-2/3 md:h-2/3 p-3 md:p-10 `}
              {...headTextAnimation}
            >
              <div>
                <motion.h3 {...headTextAnimation}>
                  <span className="text-xl md:text-3xl">
                    Ready for your next project?
                  </span>
                  <br />
                  <span className="text-[3rem] md:text-[150px] font-bold text-slate-800 tracking-tight md:py-10">
                    Let's Talk!
                  </span>
                </motion.h3>
                <motion.div
                  className="flex justify-center items-center w-[8rem] md:w-[10rem] h-[10rem] relative"
                  {...headTextAnimationDelay}
                >
                  <img
                    src={contactText}
                    alt="contact"
                    className="contact-spin z-1 w-full h-full"
                  />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sidneyo254@gmail.com"
                    target="_blank"
                    className="absolute mx-auto"
                  >
                    <TbMailShare className="text-[5rem] cursor-pointer relative z-3 fill-[#ccc] hover:scale-110 hover:fill-[#cd455b] transition-all ease-in-out" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>
          <motion.div
            className="page-buttons absolute flex w-full justify-center bottom-10"
            {...headContentAnimation}
          >
            <CustomButton
              type="back"
              title=" Projects"
              handleClick={() => (
                (state.contact = false), (state.about = true)
              )}
            />
            <CustomButton
              type="next"
              title="Intro"
              handleClick={() => (
                (state.contact = false), (state.intro = true)
              )}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Contact;
