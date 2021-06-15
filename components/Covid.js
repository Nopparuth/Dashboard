import React from "react";
import Card from "../components/Card";
import { IoClose } from "react-icons/io5";

const Covid = ({ araigordai, onClear = () => {}}) => {
  return (
    <>
      <Card>
        <div>
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">Covid-19</h2>
          <div className="absolute top-5 right-5">
            <button className="text-lg text-gray-600 focus:outline-none mr-2">
            </button>
            <button onClick={onClear} className="text-lg text-gray-600 focus:outline-none undefined">
              <IoClose/>
            </button>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold capitalize">{araigordai.content[0].country}</h3>
            <h4 className="text-gray-400 -mt-1">
              <i className="align-middle text-2xl mr-1.5 owi owi-10d" />
              
              <span className="align-middle">Confirmed {araigordai.content[0].confirmed}</span>
              <br/>
              <span className="align-middle">Recovered {araigordai.content[0].recovered}</span>
                <br/>
              <span className="align-middle">Deaths {araigordai.content[0].deaths}</span>

            </h4>
            {/* <h2 className="text-gray-500 mt-1 text-5xl font-extralight">{araigordai.content.main.temp}</h2> */}
          </div>
          <div className="mt-6 ">
            <div className="text-xs text-gray-400">
              <div className="-mb-2 text-center">
                Last updated on {araigordai.content[0].lastUpdate}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default Covid;
