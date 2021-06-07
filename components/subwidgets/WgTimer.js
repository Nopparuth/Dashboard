import React, { useState } from "react";
import { IoTimerOutline } from "react-icons/io5";

const WgTimer = ({ onClickTimer }) => {
  console.log("Choice3 : Timer");

  return (
    <div className="w-1/3 pt-1.5 pl-1.5">
      <div
        onClick={onClickTimer}
        className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
      >
        <IoTimerOutline className="mx-auto text-4xl" />
        <h3 className="mt-1 font-semibold text-sm ">Timer</h3>
      </div>
    </div>
  );
};

export default WgTimer;
