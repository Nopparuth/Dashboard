import React, { useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const WgWeather = ({ onClickWeather }) => {
  console.log("Choice4 : TiWeatherPartlySunny");

  return (
    <div className="w-1/3 pt-1.5 pl-1.5">
      <div
        onClick={onClickWeather}
        className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
      >
        <TiWeatherPartlySunny className="mx-auto text-4xl" />
        <h3 className="mt-1 font-semibold text-sm ">Weather</h3>
      </div>
    </div>
  );
};

export default WgWeather;
