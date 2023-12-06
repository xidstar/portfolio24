import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";

import {
  fadeAnimation,
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

import { CustomButton } from "../components";
import { projects } from "../config/constants";

const Projects = () => {
  const snap = useSnapshot(state);
  const boxRef = useRef(null);



  return (
    <AnimatePresence>
      {snap.projects && (
        <motion.section className="flex flex-col justify-center h-screen w-full p-4 max-w-screen-2xl mx-auto items-start">
          <motion.div
            ref={boxRef}
            className="carousel w-3/5 h-full cursor-grab overflow-hidden flex items-center"
          >
            {projects.map((project, index) => (
              <img
                key={"project_" + index}
                src={project.img}
                alt={project.title}
                className="rounded-xs h-auto w-full rounded-xl mx-5 pointer-events-none"
              />
            ))}
          </motion.div>

          <motion.div
            className="page-buttons flex w-full justify-center"
            {...headContentAnimation}
          >
            <CustomButton
              type="filled"
              title="About"
              handleClick={() => (
                (state.about = true), (state.projects = false)
              )}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg mr-2"
            />
            <CustomButton
              type="filled"
              title="Contact"
              handleClick={() => (
                (state.contact = true), (state.projects = false)
              )}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg ml-2"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Projects;
