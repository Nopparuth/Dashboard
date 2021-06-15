import React, { useState } from "react";
import { RiVirusLine } from "react-icons/ri";

const WgCovid = ({ onClickCovid }) => {
  console.log("Choice6 : Covid");

  return (
    <div className="w-1/3 pt-1.5 pl-1.5">
      <div
        onClick={onClickCovid}
        className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
      >
        <RiVirusLine className="mx-auto text-4xl" />
        <h3 className="mt-1 font-semibold text-sm ">Covid-19</h3>
      </div>
    </div>
  );
};

export default WgCovid;
