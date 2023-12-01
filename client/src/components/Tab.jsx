import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({ tab, isActiveTab, handleClick, customStyles }) => {
  const snap = useSnapshot(state);

  return (
    <div
      key={tab.title}
      className={`relative w-[300px] h-[100px]  bg-cover bg-left text-xl hover:cursor-pointer hover:scale-105 transition ease-in-out shadow-lg hover:shadow-2xl p-3 overflow-hidden ${customStyles}`}
      onClick={handleClick}
    >
      <h3 className="uppercase">{tab.title}</h3>
      {isActiveTab === tab.title ? <h2>Active</h2> : ""}
      {<tab.icon className="text-[6rem] absolute -right-3 top-3" />}
    </div>
  );
};

export default Tab;
