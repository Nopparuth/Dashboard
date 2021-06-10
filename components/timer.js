import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Card from "./Card";

const Timer = ({ item,  onClear = () => {} , totalTimeS, setTotalTimeS, totalTimeM, setTotalTimeM}) => {
  // console.log(item.id);
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [pTimeS,setPTimeS] = useState(parseInt(0))
  const [pTimeM,setPTimeM] = useState(parseInt(0))


  const start = () => {
    run();
    setStatus(1);

    // console.log("time.s", time.s )
    // console.log("time.m", time.m )

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
      // alert("");
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
    // setTotalTime(parseInt(totalTime + Number(time.s)))
      // console.log(totalTime)
    setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    // console.log(time.s)
    setPTimeS(time.s)
    setPTimeM(time.m)
    setTotalTimeS(parseInt((totalTimeS + Number(time.s)) - pTimeS))
    console.log("pTimeS", pTimeS , "totalTimeS", totalTimeS, "time.s", time.s)
    setTotalTimeM(parseInt((totalTimeM + Number(time.m)) - pTimeM))
    console.log("pTimeM", pTimeM , "totalTimeM", totalTimeM, "time.m", time.m)
    // console.log(totalTime)
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

  const test = () => {
    console.log("HELLO " , totalTime + time.s)
    console.log("toTaltime", totalTime)

  }

  return (
    <>
    {/* <button onClick={test}>Timer{totalTime}</button> */}
      <Card>
        {status === 0 ? (
          <>
            <h2 className="text-lg font-bold text-gray-400 mb-1.5">Timer</h2>
            <div className="absolute top-5 right-5">
              <button onClick={onClear}>
                <IoClose />
              </button>
            </div>
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
            <div className="absolute top-5 right-5">
              <button onClick={onClear}>
                <IoClose />
              </button>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mt-4 mb-6">
                <div className="text-6xl mx-7">
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
            <div className="absolute top-5 right-5">
              <button onClick={onClear}>
                <IoClose />
              </button>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mt-4 mb-6">
                <div className="text-6xl mx-7">
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
    </>
  );
};
export default Timer;
