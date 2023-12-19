import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";


const CustomButton = ({title, type, handleClick}) => {
  const snap = useSnapshot(state); 

  return (
    <button
      className={`custom-btn relative flex items-center justify-center w-[10rem] h-[3.5rem] bg-[${
        snap.color
      }] border-2 hover:border-none text-xl font-semibold hover:font-normal capitalize py-1.5 rounded-full mx-2 overflow-hidden ${
        snap.projects || snap.contact
          ? "text-slate-300 border-slate-400"
          : "text-slate-700 border-slate-700"
      }`}
      onClick={handleClick}
    >
      <div
        className={`svg-wrapper bg-purple-700 text-white flex justify-center items-center w-10 h-10 rounded-full hover:justify-around absolute top-0 bottom-0 m-auto 
        ${ type === "back" ? "right-2" : "left-2 flex-row-reverse" } `}
      >
        {type === "back" ? <GoArrowLeft /> : <GoArrowRight />}
        <p className="hover-text">{title}</p>
      </div>
      <p className="">{type}</p>
    </button>
  );
}

export default CustomButton