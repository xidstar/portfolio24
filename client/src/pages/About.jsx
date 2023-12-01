import React, {useState} from 'react'
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

import { CustomButton, Tab, Bio, Skills, Resume } from "../components";
import { AboutTabs } from '../config/constants';

const About = () => {
  const snap = useSnapshot(state);

  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [resume, setResume] = useState("");
  const [isActiveTab, setIsActiveTab] = useState("");

  const generateTabContent = () => {
    switch (isActiveTab) {
      case "Bio":
        return <Bio />;
      case "Skills":
        return <Skills />;
      case "Resume":
        return <Resume />;

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {snap.about && (
        <motion.section className="flex flex-col justify-center h-screen w-full p-4 max-w-screen-2xl mx-auto items-start">
          <motion.div
            className="page-content flex flex-col w-full"
            {...headContainerAnimation}
          >
            {AboutTabs.map((tab) => (
              <motion.div key={tab.title} {...headTextAnimation}>
                <Tab
                  tab={tab}
                  handleClick={() => setIsActiveTab(tab.title)}
                  customStyles={`${
                    isActiveTab === tab.title
                      ? "bg-purple-700 scale-105 h-[130px]  hover:scale-110 text-white"
                      : "bg-gray-200"
                  }`}
                />
              </motion.div>
            ))}
            {generateTabContent()}
          </motion.div>

          <motion.div
            className="page-buttons flex w-full justify-center"
            {...headContentAnimation}
          >
            <CustomButton
              type="filled"
              title="Home"
              handleClick={() => ((state.intro = true), (state.about = false))}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg mr-2"
            />
            <CustomButton
              type="filled"
              title="Projects"
              handleClick={() => (
                (state.about = false), (state.projects = true)
              )}
              customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg ml-2"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default About