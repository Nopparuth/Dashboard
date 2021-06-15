import React, { useState } from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const WgJustshout = ({ onClickJustshout }) => {
  console.log("Choice5 : Justshout");

  return (
    <div className="w-1/3 pt-1.5 pl-1.5">
      <div
        onClick={onClickJustshout}
        className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
      >
        <HiOutlineSpeakerphone className="mx-auto text-4xl" />
        <h3 className="mt-1 font-semibold text-sm ">Justshout</h3>
      </div>
    </div>
  );
};

export default WgJustshout;
