import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";


const CustomButton = ({title, type, handleClick}) => {
  const snap = useSnapshot(state); 

  return (
    <button
      className={`custom-btn relative flex items-center justify-center w-[10rem] h-[3.5rem] bg-slate-200 border-2 hover:bg-purple-700 hover:border-none text-xl font-semibold hover:font-normal capitalize py-1.5 rounded-full mx-2 overflow-hidden text-slate-700  transition ease-in-out ${snap.intro ? "border-2 border-slate-400" : ""}`}
      onClick={handleClick}
    >
      <div
        className={`svg-wrapper bg-purple-700 text-white flex justify-center items-center w-10 h-10 rounded-full hover:justify-around hover:w-full absolute top-0 bottom-0 m-auto
        ${
          type === "back"
            ? "right-2 hover:right-0"
            : "left-2 hover:left-0 flex-row-reverse"
        } `}
      >
        {type === "back" ? <GoArrowLeft /> : <GoArrowRight />}
        <p className="hover-text">{title}</p>
      </div>
      <p className="">{type}</p>
    </button>
  );
}

export default CustomButton