import React from 'react';
import { skillset } from '../config/constants';
import { blender, figma } from '../assets';
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div className="tabcontent-container">
        <h3 className="py-5 text-2xl font-bold color-text">Development</h3>

        <motion.div whileInView={"visible"}>
          <div className=" mt-8 space-y-4">
            {skillset.map((skill, index) => (
              <div className="w-full xl:w-2/3" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
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
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full "
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

        <div className="py-5 xl:py-10">
          <h3 className="pb-5 text-2xl font-bold color-text">Design Tools</h3>
          <div className="img-wrapper flex gap-5">
            <img src={figma} alt="figma" className="w-20 h-auto" />
            <img src={blender} alt="blender" className="w-20 h-auto" />
          </div>
          <div className="design flex flex-wrap gap-2 font-bold xl:w-[70%]">
            <p>Figma &#x2022;</p>

            <p>Blender &#x2022;</p>
            <p>Photoshop &#x2022;</p>
            <p>Illustrator &#x2022;</p>
            <p>Sketch &#x2022;</p>
            <p>Procreate</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills