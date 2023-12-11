import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({ tab, handleClick, customStyles }) => {
  const snap = useSnapshot(state);

  return (
    <div
      key={tab.title}
      className={`w-[120px] xl:w-[200px] h-[50px] text-xl hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg hover:shadow-2xl p-3 overflow-hidden rounded-lg ${customStyles}`}
      onClick={handleClick}
    >
      <h3 className="uppercase text-center">{tab.title}</h3>
    </div>
  );
};

export default Tab;
