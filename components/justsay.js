import React from "react";
import Card from "../components/Card";
import { IoClose } from "react-icons/io5";

const JustSay = ({ araigordai, onClear = () => {} }) => {
  return (
    <>
      <Card>
        <h2 className="text-lg font-bold text-gray-400 mb-1.5"> JustSay</h2>
        <div className="absolute top-5 right-5">
          <button className="text-lg text-gray-600 focus:outline-none mr-2"></button>
          <button
            onClick={onClear}
            className="text-lg text-gray-600 focus:outline-none undefined"
          >
            <IoClose />
          </button>
        </div>
        <div className="text-center mt-8 mb-12">
          <h1 className="text-4xl font-bold undefined">
            {" "}
            {araigordai.content}
          </h1>
        </div>
      </Card>
    </>
  );
};
export default JustSay;
