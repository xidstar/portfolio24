import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";


const CustomButton = ({title, type, handleClick}) => {
  const snap = useSnapshot(state);

  // const getBgColor = (type) => {
  //   if (snap.intro && type === "next") {
  //     return "#bc8e96"
  //   }
  //   else if (snap.about && type === "back") {
  //     return "#ffa441";
  //   }
  //   else if (snap.about && type === "next") {
  //     return "#8952bf";
  //   }
  //   else if (snap.projects && type === "back") {
  //     return "#bc8e96";
  //   }
  //   else if (snap.projects && type === "next") {
  //     return "#353934";
  //   }
  // } 

  const generateStyle = (type) => {
    if(type === "back") {
      return (
        <div
          className={`svg-wrapper flex justify-center items-center w-10 h-10 rounded-full bg-slate-300 transition-all ease-in-out absolute top-0 bottom-0 right-2 m-auto z-1`}
        >
          <GoArrowLeft />
        </div>
      );
    }
    else if(type === "next") {
      return (
        <div
          className={`svg-wrapper flex justify-center items-center w-10 h-10 rounded-full bg-slate-300 transition-all ease-in-out absolute top-0 bottom-0 left-2 m-auto z-1`}
        >
          <GoArrowRight />
        </div>
      );
    }
  }
  return (
    <button
      className={`custom-btn flex items-center justify-end w-[10rem] h-[3.5rem] bg-[${
        snap.color
      }] border-2 border-slate-700 text-xl font-semibold py-1.5 rounded-full text-slate-800 px-2 mx-2 overflow-hidden relative ${
        type === "back" ? "flex-row-reverse" : ""
      } hover:flex-row-reverse`}
      onClick={handleClick}
    >
      {generateStyle(type)}
      <p className={`hover-text z-2 relative flex justify-center text-center`}>{title}</p>
      <p className="">{type}</p>
    </button>
  );
}

export default CustomButton