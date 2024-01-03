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
  const [isActiveTab, setIsActiveTab] = useState("Bio");

  const generateTabContent = () => {
    switch (isActiveTab) {
      case "Bio":
        return <Bio />;
      case "Skills":
        return <Skills />;

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
              className={`content-wrapper flex flex-col w-full h-full xl:w-1/2 xl:h-2/3 p-3 xl:p-10 rounded-lg `}
              {...headTextAnimation}
            >
              <div className="tab-title-wrapper flex flex-col items-center justify-center pb-10">
              </div>

              <div className="btn-wrapper flex justify-start gap-10 w-full">
                {AboutTabs.map((tab) => (
                  <motion.div key={tab.title}>
                    <Tab
                      {...slideAnimation}
                      tab={tab}
                      handleClick={() => setIsActiveTab(tab.title)}
                      customStyles={`${
                        isActiveTab === tab.title
                          ? "bg-purple-700 scale-105 h-[130px] hover:scale-110 text-white"
                          : "bg-slate-300"
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
              <div className="content-wrapper xl:pt-10">
                {generateTabContent()}
              </div>
            </motion.div>
          </motion.section>
          <motion.div
            className="page-buttons absolute flex w-full justify-center bottom-10"
            {...headContentAnimation}
          >
            <CustomButton
              type="back"
              title="Projects"
              handleClick={() => ((state.about = false), (state.projects = true))}
            />
            <CustomButton
              type="next"
              title="Contacts"
              handleClick={() => (
                (state.about = false), (state.contact = true)
              )}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default About