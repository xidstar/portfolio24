import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { contactText } from "../assets";
import { TbMailShare } from "react-icons/tb";
import Socials from "../components/Socials";

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
          <motion.section className="flex flex-col justify-center h-[85vh] md:h-screen w-full p-4 xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto items-start">
            <motion.div
              className={`page-content flex flex-col w-full h-1/2 xl:w-2/3 p-3 xl:px-10 `}
              {...headTextAnimation}
            >
              <motion.h3 {...headTextAnimation}>
                <span className="text-xl md:text-2xl xl:text-3xl text-black">
                  Ready for your next project?
                </span>
                <br />
                <div className="flex md:flex-col items-center md:items-start">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sidneyo254@gmail.com"
                    target="_blank"
                    className="flex items-center text-black gap-10 hover:text-[#a03333] "
                  >
                    <span className="text-icon text-[3rem] md:text-[6rem] font-bold tracking-tight hover:underline 
                    -hover:underline-offset-8 hover:scale-105">
                      Let's Talk!
                    </span>
                    <div>
                      <motion.div
                        className="mx-auto md:mx-0 flex justify-center items-center w-[6rem] h-[8rem] relative"
                        {...headTextAnimationDelay}
                      >
                        <img
                          src={contactText}
                          alt="contact"
                          className="contact-spin z-1 w-full h-full hover:text-[#cd455b]"
                        />
                        <span className="absolute mx-auto" >
                          <TbMailShare className="text-[3rem] cursor-pointer relative z-3 fill-[#ccc] hover:scale-110 transition-all ease-in-out" />
                        </span>
                      </motion.div>
                    </div>
                  </a>
                  
                </div>
              </motion.h3>
              <div className="w-fit">
                <Socials />
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
