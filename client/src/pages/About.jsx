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

import { CustomButton, Tab, Bio, Skills, Resume, Underline } from "../components";
import { AboutTabs } from '../config/constants';

const About = () => {
  const snap = useSnapshot(state);

  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [resume, setResume] = useState("");
  const [isActiveTab, setIsActiveTab] = useState("Bio");

  const generateTabContent = () => {
    switch (isActiveTab) {
      case "Bio":
        return <Bio />;
      case "Skills":
        return <Skills />;
      case "Resume":
        return <Resume />;

      default:
        return <Bio />;
    }
  };

  return (
    <AnimatePresence>
      {snap.about && (
        <>
          <motion.section className="flex justify-start items-center h-screen w-full p-4 max-w-screen-2xl mx-auto ">
            <motion.div
              className="content-wrapper flex flex-col w-full h-full xl:w-2/3 xl:h-2/3 glassmorphism p-3 xl:p-10 rounded-lg"
              {...headTextAnimation}
            >
              <div className="tab-title-wrapper flex flex-col items-center justify-center py-10">
                <h3 className="text-4xl font-bold py-2 text-center">
                  About Me
                </h3>
                <Underline />
              </div>

              <div className="btn-wrapper flex gap-2 justify-between w-full">
                {AboutTabs.map((tab) => (
                  <motion.div key={tab.title}>
                    <Tab
                      {...slideAnimation}
                      tab={tab}
                      handleClick={() => setIsActiveTab(tab.title)}
                      customStyles={`${
                        isActiveTab === tab.title
                          ? "bg-purple-700 scale-105 h-[130px] hover:scale-110 text-white"
                          : "bg-gray-200"
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
              <div className="content-wrapper pt-10">
                {generateTabContent()}
              </div>
            </motion.div>
          </motion.section>
          <motion.div
            className="page-buttons absolute flex w-full justify-center bottom-10"
            {...headContentAnimation}
          >
            <CustomButton
              type="filled"
              title="Intro"
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
        </>
      )}
    </AnimatePresence>
  );
}

export default About