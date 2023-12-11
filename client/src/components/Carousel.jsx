import React, { useState, useEffect } from "react";

import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { projects } from "../config/constants";

const Carousel = () => {
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
    <div className="relative h-full ">
      <button
        onClick={goToPreviousPage}
        className="absolute left-0 top-0 bottom-0 text-slate-300 z-20"
      >
        <SlArrowLeft className="text-4xl " />
      </button>

      <div className="flex flex-col items-center h-full">
        <div className="text mb-[50px] absolute bottom-20 right-0 xl:-mr-[10%] z-10">
          <div className="flex flex-col justify-center text-slate-300">
            <h3 className="font-bold pb-5 text-xl xl:text-3xl">
              {projects[currentPage].title}
            </h3>
            <p className="text-lg">{projects[currentPage].description}</p>
            <a
              href={projects[currentPage].url}
              target="_blank"
              className="pt-5 underline"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="flex w-full h-full overflow-hidden">
          {projects.map((project) => (
            <img
              className="w-full h-full object-cover opacity-90"
              key={project.title}
              src={projects[currentPage].img}
            />
          ))}
        </div>
        <div className="pagination flex justify-center absolute bottom-10 left-0 right-0">
          {renderPageSliders()}
        </div>
      </div>

      <button
        onClick={goToNextPage}
        className="absolute right-0 top-0 bottom-0 text-slate-300 z-20"
      >
        <SlArrowRight className="text-4xl" />
      </button>
    </div>
  );
};

export default Carousel;
