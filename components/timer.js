import React, { useState } from "react";
import Card from "./Card";

const Timer = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 59) {
      updatedH++;
      updatedM = 0;
      alert("")
    }
    if (updatedS === 59) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 10) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
     setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => {
    start();
  };

  

  return (
    <div>
      <Card>
        {status === 0 ? (
          <>
            <h2 className="text-lg font-bold text-gray-400 mb-1.5">Timer</h2>
            <div className="text-center">
              <div className="flex items-center justify-center mt-4 mb-6">
                <div className="text-6xl mx-7">
                  <span>{time.m >= 10 ? time.m : "0" + time.m}</span>:
                  <span>{time.s >= 10 ? time.s : "0" + time.s}</span>
                </div>
              </div>
              <button
                onClick={start}
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
              >
                Start
              </button>
              <button
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300 cursor-default ml-2"
                disabled
              >
                Reset
              </button>
            </div>
            <div className="mt-6"></div>
          </>
        ) : (
          ""
        )}

        {status === 1 ? (
          <>
            <h2 className="text-lg font-bold text-gray-400 mb-1.5">Timer</h2>
            <div className="text-center">
              <div className="flex items-center justify-center mt-4 mb-6">
                <div className="text-6xl mx-7">
                  {/* {h()}
                  {m()} */}
                  <span>{time.m >= 10 ? time.m : "0" + time.m}</span>:
                  <span>{time.s >= 10 ? time.s : "0" + time.s}</span>
                </div>
              </div>
              <button
                onClick={stop}
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
              >
                Pause
              </button>
              <button
                onClick={reset}
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600 ml-2"
              >
                Reset
              </button>
            </div>
            <div className="mt-6"></div>
          </>
        ) : (
          ""
        )}

        {status === 2 ? (
          <>
            <h2 className="text-lg font-bold text-gray-400 mb-1.5">Timer</h2>
            <div className="text-center">
              <div className="flex items-center justify-center mt-4 mb-6">
                <div className="text-6xl mx-7">
                  {/* {h()}
                  {m()} */}
                  <span>{time.m >= 10 ? time.m : "0" + time.m}</span>:
                  <span>{time.s >= 10 ? time.s : "0" + time.s}</span>
                </div>
              </div>
              <button
                onClick={resume}
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
              >
                Start
              </button>
              <button
                onClick={reset}
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600 ml-2"
              >
                Reset
              </button>
            </div>
            <div className="mt-6"></div>
          </>
        ) : (
          " "
        )}
      </Card>
    </div>
  );
};
export default Timer;
