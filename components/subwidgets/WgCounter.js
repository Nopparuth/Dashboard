import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiIncreaseDecreaseLine } from "react-icons/ri";

import Card from "../Card";

const WgCounter = ({ onClickCounter }) => {
  console.log("Choice2 : Counter");

  return (
    <div className="w-1/3 pt-1.5 pl-1.5">
      <div
        onClick={onClickCounter}
        className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
      >
        <RiIncreaseDecreaseLine className="mx-auto text-4xl" />
        <h3 className="mt-1 font-semibold text-sm ">Counter</h3>
      </div>
    </div>
  );
};

export default WgCounter;
