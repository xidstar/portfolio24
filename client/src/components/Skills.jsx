import React from "react";
import { skillset } from "../config/constants";
import { file, resume } from "../assets";
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import Underline from "./Underline";

const Skills = () => {
  const snap = useSnapshot(state);
  return (
    <>
      <div
        className={`tabcontent-container md:h-[50vh] ${
          snap.isMobile ? "glassmorphism h-[60vh]" : ""
        }`}
      >
        <h3 className="md:pt-5 text-icon text-2xl md:text-3xl font-bold">
          Development
        </h3>

        <motion.div whileInView={"visible"}>
          <div className="mt-4 md:mt-8 md:space-y-4">
            {skillset.map((skill, index) => (
              <div className="w-full md:w-5/6" key={index}>
                <motion.h3
                  className="md:text-xl font-semibold text-slate-800 pt-2 md:pt-0"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.name}
                </motion.h3>
                <div className="h-2 w-full bg-slate-200 rounded-full md:mt-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-violet-700 via-fuchsia-500 to-pink-500 rounded-full border-2 border-slate-200"
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 0.8,
                          delay: 0.5 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="py-3 md:py-10">
          <h3 className="pb-5 text-icon text-2xl md:text-3xl font-bold">
            Design Tools
          </h3>

          <div className="design flex flex-wrap gap-2 font-bold md:w-[70%] text-slate-900">
            <p>Figma &#x2022;</p>
            <p>Blender &#x2022;</p>
            <p>Photoshop &#x2022;</p>
            <p>Illustrator &#x2022;</p>
            <p>Sketch &#x2022;</p>
            <p>Procreate</p>
          </div>

          <div className="resume-wrapper flex gap-5 md:mt-[2rem]">
            <div className="flex items-center relative h-[5rem]">
              <img src={file} alt="figma" className="relative w-14 h-auto" />
              <div className="link-wrapper flex flex-col">
                <a
                  href={resume}
                  target="_blank"
                  className="resume relative text-icon text-center md:text-left font-bold text-2xl md:text-3xl xl
                :pb-2 z-10 hover:scale-110 transition ease-in-out"
                >
                  Resume
                </a>
                <Underline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
