import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tabSound from "/audio/interface.mp3";
import { useSnapshot } from "valtio";

import state from "../store";

import {
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

import {
  CustomButton,
  Tab,
  Bio,
  Skills,
} from "../components";
import { AboutTabs } from "../config/constants";

const About = () => {
  const snap = useSnapshot(state);
  const [isActiveTab, setIsActiveTab] = useState("Bio");
  const [ping] = useState(new Audio(tabSound));

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
          <motion.section className="flex flex-col justify-center h-[88%] md:h-screen w-full p-4 md:max-w-screen-xl 2md:max-w-screen-2xl mx-auto items-start">
            <motion.div
              className={`content-wrapper flex flex-col justify-around w-full h-full md:w-1/2 md:h-2/3 p-3 md:p-10 rounded-lg `}
              {...headTextAnimation}
            >
              <div className="tab-title-wrapper flex flex-col items-center justify-center pb-10"></div>

              <div className="btn-wrapper flex justify-start gap-10 w-full">
                {AboutTabs.map((tab) => (
                  <motion.div key={tab.title}>
                    <Tab
                      {...slideAnimation}
                      tab={tab}
                      handleClick={() => {
                        ping.volume = 0.08;
                        {snap.isPlaying ? ping.play() : ""}
                        setIsActiveTab(tab.title)

                      }}
                      customStyles={`${
                        isActiveTab === tab.title
                          ? "bg-purple-700 scale-105 h-[130px] hover:scale-110 text-white"
                          : "bg-slate-300"
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
              <div className="content-wrapper md:pt-10">
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
              handleClick={() => (
                (state.about = false), (state.projects = true)
              )}
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
};

export default About;
