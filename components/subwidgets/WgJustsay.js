import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";

const WgJustsay = ({ onClickJustsay }) => {
  console.log("Choice1 : Justsay");

  return (
    <div className="w-1/3 pt-1.5 pl-1.5">
      <div
        onClick={onClickJustsay}
        className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
      >
        <AiOutlineMessage className="mx-auto text-4xl" />
        <h3 className="mt-1 font-semibold text-sm ">JustSay</h3>
      </div>
    </div>
  );
};

export default WgJustsay;
