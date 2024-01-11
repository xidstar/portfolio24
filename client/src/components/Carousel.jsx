import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { projects } from "../config/constants";
import Underline from "./Underline";
import { useSnapshot } from "valtio";

import state from "../store";

import { carouselTextAnimation } from "../config/motion";

const Carousel = () => {
  const snap = useSnapshot(state);
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const renderPageSliders = () => {
    return projects.map((_, index) => (
      <span
        key={index}
        onClick={() => goToPage(index)}
        style={{
          cursor: "pointer",
          marginRight: "5px",
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          border: "1px solid #fff",
          backgroundColor: index === currentPage ? "black" : "white",
        }}
      />
    ));
  };

  const goToNextPage = () => {
    setCurrentPage((currentPage + 1) % projects.length);
  };

  const goToPreviousPage = () => {
    setCurrentPage((currentPage - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setTimeout(goToNextPage, 7000);
    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <AnimatePresence>
      <div className="relative h-full ">
        <div className="flex flex-col items-center h-full project-info">
          <motion.div
            className={`text mb-[2rem] md:mb-[50px] md:absolute bottom-20 md:right-0 md:-mr-[10%] z-10 ${
              snap.isMobile ? "w-[85%]" : ""
            }`}
            {...carouselTextAnimation}
          >
            <div
              className={`flex flex-col justify-center text-slate-200 !relative ${
                snap.isMobile ? "text-slate-900 font-bold" : ""
              }`}
            >
              <h3 className="font-bold text-xl md:text-3xl">
                {projects[currentPage].title}
              </h3>
              <p className="text-2xl text-icon py-1 md:py-5">
                {projects[currentPage].description}
              </p>
              <div className="link-wrapper flex flex-col">
                <a
                  href={projects[currentPage].url}
                  target="_blank"
                  className="relative md:text-xl z-10 hover:scale-105 transition ease-in-out"
                >
                  View Project
                </a>
                <Underline />
              </div>
            </div>
          </motion.div>
          <div className="flex w-full h-full overflow-hidden relative">
            <button
              onClick={goToPreviousPage}
              className="absolute left-0 top-0 bottom-0 text-slate-200 z-20"
            >
              <SlArrowLeft className="text-4xl " />
            </button>
            {projects.map((project) => (
              <motion.img
                className="w-full h-full object-fill opacity-90"
                key={project.title}
                src={projects[currentPage].img}
                loading="lazy"
              />
            ))}
            <button
              onClick={goToNextPage}
              className="absolute right-0 top-0 bottom-0 text-slate-200 z-20"
            >
              <SlArrowRight className="text-4xl" />
            </button>
          </div>
          <div className="pagination flex justify-center absolute bottom-10 left-0 right-0">
            {renderPageSliders()}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Carousel;
