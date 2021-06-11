import React from "react";
import Card from "../components/Card";
import { IoClose } from "react-icons/io5";
import { TiRefresh } from "react-icons/ti";

const Weather = ({ araigordai}) => {
  return (
    <>
      <Card>
        <div>
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">Weather</h2>
          <div className="absolute top-5 right-5">
            <button className="text-lg text-gray-600 focus:outline-none mr-2">
              <TiRefresh />
            </button>
            <button className="text-lg text-gray-600 focus:outline-none mr-2">
            </button>
            <button className="text-lg text-gray-600 focus:outline-none undefined">
              <IoClose/>
            </button>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold capitalize">{araigordai.content.name}</h3>
            <h4 className="text-gray-400 -mt-1">
              <i className="align-middle text-2xl mr-1.5 owi owi-10d" />
              <span className="align-middle">{araigordai.content.weather[0].description}</span>
            </h4>
            <h2 className="text-gray-500 mt-1 text-5xl font-extralight">{araigordai.content.main.temp}</h2>
          </div>
          <div className="mt-6 ">
            <div className="text-xs text-gray-400">
              <div className="-mb-2 text-center">
                Last updated on {araigordai.time}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default Weather;
