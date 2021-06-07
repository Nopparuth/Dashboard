import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Card from "./Card";

const Counter = ({ araigordai, onClear = () => {} }) => {
  const [number, setNumber] = useState(parseInt(araigordai));
  const onIncrease = () => {
    setNumber(number + 1);
    console.log(number);
  };

  const onDecrease = () => {
    console.log("minus");
    setNumber(number - 1);
  };

  const onReset = (txtCounter) => {
    setNumber(0);
  };

  return (
    <>
      <Card>
        <h2 className="text-lg font-bold text-gray-400 mb-1.5">Counter</h2>
        <div className="absolute top-5 right-5">
          <button
            onClick={onClear}
            className="text-lg text-gray-600 focus:outline-none undefined"
          >
            <IoClose />
          </button>
        </div>
        {number > 0 ? (
          <div className="text-center" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-center mt-4 mb-6">
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
                onClick={onDecrease}
              >
                -
              </button>
              <div className="text-6xl mx-7">{number}</div>
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
                onClick={onIncrease}
              >
                +
              </button>
            </div>
            <button
              className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
              onClick={onReset}
            >
              Set zero
            </button>
          </div>
        ) : (
          <div className="text-center" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-center mt-4 mb-6">
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-gray-300"
                disabled
                onClick={onDecrease}
              >
                -
              </button>
              <div className="text-6xl mx-7">{number}</div>
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
                onClick={onIncrease}
              >
                +
              </button>
            </div>
            <button
              className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300 cursor-default"
              disabled
              onClick={onReset}
            >
              Set zero
            </button>
          </div>
        )}
        <div className="mt-6"></div>
      </Card>
    </>
  );
};
export default Counter;
