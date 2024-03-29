import React, { useState, useEffect } from "react";
import { useSnapshot } from "valtio";

import state from "../store";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";

import { headTextAnimation } from "../config/motion";

import { CustomButton } from "../components";

const LoadingScreen = ({ onStarted }) => {
  const [isLoading, setIsLoading] = useState(true);
  const snap = useSnapshot(state);

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 4 });

    return animation.stop;
  }, []);

  useEffect(() => {
    // Simulating an asynchronous operation
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setIsLoading(false);
      // (state.loading = false), (state.intro = true);
    };

    fetchData();
  }, []);

  return (
    <AnimatePresence>
      {snap.loading && (
        <>
          <div
            className={`loadingScreen bg-gradient-to-br from-slate-300 to-violet-500 : ""`}
          >
            {isLoading ? (
              <div className="flex text-[5rem] md:text-[8rem] text-slate-800">
                <motion.h1>{rounded}</motion.h1>
                <motion.h1>%</motion.h1>
              </div>
            ) : (
              <motion.div {...headTextAnimation}>
                <CustomButton
                  type=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; explore"
                  title="Intro"
                  handleClick={() => (
                    (state.loading = false), (state.intro = true)
                  )}
                  customStyles="w-fit min-w-[150px] px-5 py-2.5 font-bold text-lg"
                />
              </motion.div>
            )}
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
