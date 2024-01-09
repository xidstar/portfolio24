import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {contactText} from "../assets"
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
        <motion.section
          className="flex flex-col justify-center h-screen w-full p-4 max-w-screen-2xl mx-auto items-start"
          {...slideAnimation("left")}
        >
          <motion.div
            className="page-content flex flex-col w-full"
            {...headContainerAnimation}
          >
            <div>
              <motion.span
                className="text-xl xl:text-2xl"
                {...headTextAnimation}
              >
                Ready for your next project?
              </motion.span>
              <motion.h3
                className="text-3xl xl:text-[150px] font-bold text-slate-900 tracking-tight py-10"
                {...headTextAnimationDelay}
              >
                <br />
                Let's Talk!
              </motion.h3>
            </div>
            <motion.div
              className="flex justify-center items-center relative w-[10rem] h-[10rem]"
              {...headContentAnimation}
            >
              <img
                src={contactText}
                alt="contact"
                className="contact-spin absolute z-1"
              />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sidneyo254@gmail.com"
                target="_blank"
              >
                <TbMailShare className="text-[5rem] cursor-pointer relative z-3 fill-[#ccc] hover:scale-110 hover:fill-[#cd455b] transition-all ease-in-out" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="page-buttons flex w-full justify-center"
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
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Contact;
