import React from "react";
import { pin } from "../assets";
import Underline from "./Underline";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";

import { headTextAnimation, slideAnimation } from "../config/motion";

const Bio = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      <div
        className={`tabcontent-container md:p-5 h-full relative ${
          snap.isMobile ? "glassmorphism" : ""
        }`}
      >
        <h4 className="font-bold text-icon text-[1.5rem] md:text-3xl pb-5 md:pb-10">
          "Passionately Curious..."
        </h4>
        <motion.p
          className="text-[1.1rem] md:text-2xl text-left"
          {...headTextAnimation}
        >
          I'm a creative web developer with a keen focus on interactivity,
          motion design and building appealing web experiences. I believe in
          crafting web experiences that are not just functional but also
          captivating.
        </motion.p>
        <br />
        <motion.p
          className="text-[1.1rem] md:text-2xl text-left"
          {...headTextAnimation}
        >
          I'm passionate about translating ideas and brand values into
          eye-catching, user-centered digital solutions. I'm a strong advocate
          for great design, in all its forms.
        </motion.p>

        <motion.div className="py-2 md:mt-[2rem]">
          <div className="img-wrapper gap-5 flex flex-col">
            <div className="flex items-center">
              <motion.img
                src={pin}
                alt="blender"
                className="w-14 h-auto"
                {...slideAnimation("down")}
              />
              <div>
                <p
                  className="text-icon font-bold text-[1.3rem] md:text-3xl xl
                :pb-2"
                >
                  Maryland, US
                </p>
                <Underline />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Bio;
