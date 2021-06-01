import React, { useState } from "react";
import Modal from "../modal";
import wgJustsay from "../windowWidget/wgJustsay";
import { IoClose } from "react-icons/io5";
import JustSay from "../justsay";
import Counter from "../counter";
import Timer from "../timer";
import Card from "../Card";

const Widget = () => {
  const [active, setActive] = useState(false);
  const [activejustsay, setActivejustsay] = useState(false);
  const [activecounter, setActivecounter] = useState(false);
  const [activetimer, setActivetimer] = useState(false);
  const [modalJustsay, setModalJustsay] = useState(false);

  const [checkError, setCheckError] = useState("");
  const [txtJustsay, setTxtJustsay] = useState("");
  const [txtCounter, setTxtCounter] = useState("");
  const [txtTimer, setTxtTimer] = useState("");

  const [justsayList, setJustsayList] = useState([]);
  const [counterList, setCounterList] = useState([]);
  const [timerList, setTimerList] = useState([]);

  const [allwidget, setAllwidget] = useState(0);
  const [timer, setTimer] = useState(0);
  const [justsay, setJustsay] = useState(0);
  const [counter, setCounter] = useState(0);

  const id = Math.floor(Math.random() * 10000) + 1;
  const date = new Date();
  let ye = new Intl.DateTimeFormat("en", { year: "2-digit" }).format(date);
  let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  let hms = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
  const dateTime = `Added on ${mo} ${da}, ${ye}, ${hms}`;

  const onCancelText = () => {
    setActivejustsay(false);
  };

  const onClickJustsay = () => {
    setActive(false);
    setActivejustsay(true);
    setAllwidget(allwidget + 1);
  };

  const onInputJustSay = (e) => {
    setTxtJustsay(e.target.value);
  };

  const onAddTxtJustSay = (e) => {
    e.preventDefault();

    setTxtJustsay("".trim());
    setCheckError("");
    if (txtJustsay.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      const title = "JusySay";
      const newWidget = { id, title, dateTime, txtJustsay };
      const item = setJustsayList([...justsayList, newWidget]);
      setActivejustsay(false);
      setJustsay(justsay + 1);
      setAllwidget(allwidget + 1);
      console.log(item);
    }
  };

  const onClickCounter = () => {
    setActive(false);
    setActivecounter(true);
    setAllwidget(allwidget + 1);
  };

  const onClickTimer = () => {
    setActive(false);
    setActivetimer(true);
    setAllwidget(allwidget + 1);
  };

  const onClickWiget = () => {
    console.log("click");
    setActive(true);
  };

  const handleJustsay = () => {
    setActive(false);
    setModalJustsay(true);
  };

  const onClose = () => {
    setActive(false);
  };

  return (
    <>
      <button
        onClick={onClickWiget}
        className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="inline-block text-xl relative -top-0.5"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
          </g>
        </svg>{" "}
        Add Widget
      </button>
      {/* {activejustsay > 0 ? <JustSay /> : null} */}
      {activecounter > 0 ? <Counter /> : null}
      {activetimer > 0 ? <Timer /> : null}

      {activejustsay && (
        <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
          <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
            <button
              onClick={onCancelText}
              className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
            >
              <IoClose />
            </button>
            <div>
              <fieldset>
                <h2 className="text-xl mb-2">Add JustSay</h2>
                <form className="flex" onSubmit={onAddTxtJustSay}>
                  <div className="flex-1 mr-1">
                    <input
                      type="text"
                      className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                      placeholder="Enter text"
                      value={txtJustsay}
                      onChange={onInputJustSay}
                      required
                    ></input>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                    >
                      {" "}
                      Add
                    </button>
                  </div>
                </form>
                <p className="text-red-600 text-xs mt-1">{checkError}</p>
              </fieldset>
            </div>
          </div>
        </div>
      )}
      {justsay > 0 ? (
        // <JustSay
        //   txtJustsay={txtJustsay}
        //   justsayList={justsayList}
        //   setAllwidget={setAllwidget}
        //   allwidget={allwidget}
        //   setJustsay={setJustsay}
        //   justsay={justsay}
        //   setJustsayList={setJustsayList}
        // />
        <>
        {justsayList.map((justsaytext) => (
          <Card key={justsaytext.id}>
            <h2 className="text-lg font-bold text-gray-400 mb-1.5">JustSay</h2>
            <div className="absolute top-5 right-5">
              <button
              //   onClick={() => onClearJustsay(justsaytext)}
                className="text-lg text-gray-600 focus:outline-none undefined"
              >
                <IoClose />
              </button>
            </div>
            <div className="text-center mt-8 mb-12">
              <h1 className="text-4xl font-bold undefined">
                {justsaytext.txtJustsay}
              </h1>
            </div>
          </Card>
        ))}
        </>
      ) : null}

      {active && (
        <Modal active={active} onClose={onClose}>
          <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
            <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
              <button
                onClick={onClose}
                className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
                    onClick={onClose}
                  />
                </svg>
              </button>
              <div>
                <h2 className="text-xl undefined">Add widget</h2>
                <div className="flex flex-wrap text-center mt-1.5 -ml-1.5">
                  <div className="w-1/3 pt-1.5 pl-1.5">
                    <div
                      onClick={onClickJustsay}
                      className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 1024 1024"
                        className="mx-auto text-4xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z" />
                      </svg>
                      <h3 className="mt-1 font-semibold text-sm ">JustSay</h3>
                    </div>
                  </div>
                  <div className="w-1/3 pt-1.5 pl-1.5">
                    <div
                      onClick={onClickCounter}
                      className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="mx-auto text-4xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        />
                      </svg>
                      <h3 className="mt-1 font-semibold text-sm ">Counter</h3>
                    </div>
                  </div>
                  <div className="w-1/3 pt-1.5 pl-1.5">
                    <div
                      onClick={onClickTimer}
                      className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        className="mx-auto text-4xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M112.91 128A191.85 191.85 0 0064 254c-1.18 106.35 85.65 193.8 192 194 106.2.2 192-85.83 192-192 0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 00-4.5 4.37V152"
                        />
                        <path d="M233.38 278.63l-79-113a8.13 8.13 0 0111.32-11.32l113 79a32.5 32.5 0 01-37.25 53.26 33.21 33.21 0 01-8.07-7.94z" />
                      </svg>
                      <h3 className="mt-1 font-semibold text-sm ">Timer</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
export default Widget;
