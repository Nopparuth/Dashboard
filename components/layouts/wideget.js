import React, { useState } from "react";
import Modal from "../modal";
import WgJustsay from "../subwidgets/WgJustsay";
import WgCounter from "../subwidgets/WgCounter";
import WgTimer from "../subwidgets/WgTimer";
import Allcards from "../Allcards";

import { IoClose } from "react-icons/io5";

import { RiAddCircleLine } from "react-icons/ri";

import Card from "../Card";

const Widget = () => {
  const [active, setActive] = useState(false);
  const [activejustsay, setActivejustsay] = useState(false);
  const [activecounter, setActivecounter] = useState(false);
  const [activetimer, setActivetimer] = useState(false);

  const [checkError, setCheckError] = useState("");
  const [txtJustsay, setTxtJustsay] = useState("");
  const [txtCounter, setTxtCounter] = useState(0);
  const [txtTimer, setTxtTimer] = useState("");

  const [justsayList, setJustsayList] = useState([]);
  const [counterList, setCounterList] = useState([]);
  const [timerList, setTimerList] = useState([]);

  const [allwidget, setAllwidget] = useState(0);
  const [timer, setTimer] = useState(0);
  const [justsay, setJustsay] = useState(0);
  const [counter, setCounter] = useState(0);

  const [cardList, setCardList] = useState([
    {
      content: "",
      check: "",
      id: "",
    },
  ]);

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
    setActivecounter(false);
  };

  const onClickJustsay = () => {
    setActive(false);
    setActivejustsay(true);
  };

  const onClear = (item) => {
    setCardList(cardList.filter((_item) => _item.id !== item.id));
  };

  const onInputJustSay = (e) => {
    setTxtJustsay(e.target.value);
  };

  const onAddTxtJustSay = (e) => {
    const idr = Math.floor(Math.random() * 1000) + 1;

    if (txtJustsay.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      const newData = [
        ...cardList,
        { content: txtJustsay, check: "JustSay", id: idr },
      ];
      setCardList(newData);
      console.log("cardList", cardList);
      setActivejustsay(false);
      setAllwidget(allwidget + 1);
    }
  };

  const onClickCounter = () => {
    setActive(false);
    setActivecounter(true);
  };
  const onInputCounter = (e) => {
    setTxtCounter(e.target.value);
  };

  const onAddTxtCounter = (e) => {
    const idr = Math.floor(Math.random() * 1000) + 1;
    console.log("length", e.length);
    if (e < 0) {
      setCheckError("Please enter at least 0.");
    } else if (e.length === 0) {
      setCheckError("Please provide some value.");
      console.log("0");
    } else {
      const newData = [...cardList, { content: e, check: "Counter", id: idr }];
      setCardList(newData);
      setActivecounter(false);
      setAllwidget(allwidget + 1);
    }
  };

  const onClickTimer = () => {
    const idr = Math.floor(Math.random() * 1000) + 1;
    const newData = [...cardList, { content: "", check: "Timer", id: idr }];
    console.log(newData);
    setCardList(newData);
    setActive(false);
    setActivetimer(true);
    setAllwidget(allwidget + 1);
  };

  const onClickWiget = () => {
    console.log("clicked Add Widget");
    setActive(true);
  };

  const onClose = () => {
    setActive(false);
  };

  return (
    <>
      <div className="mb-4">
        <button
          className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
          onClick={onClickWiget}
        >
          <RiAddCircleLine className="inline-block text-xl relative -top-0.5" />{" "}
          Add Widget
        </button>{" "}
      </div>
      <div className="md:flex md:flex-wrap md:-mr-4">
        {allwidget === 0 ? (
          <>
            {" "}
            <Card>
              <div className="text-center text-gray-400 my-8 font-light">
                <p className="text-4xl mb-2 text-gray-400">No widgets at all</p>
                <p>
                  Click{" "}
                  <button
                    onClick={onClickWiget}
                    className="font-normal text-blue-400 focus:outline-none"
                  >
                    HERE
                  </button>{" "}
                  to add a new one
                </p>
              </div>
            </Card>
          </>
        ) : null}

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

        {activecounter && (
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
                  <h2 className="text-xl mb-2">Add Counter</h2>
                  <form className="flex" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex-1 mr-1">
                      <input
                        type="number"
                        className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                        placeholder="Enter the initial value"
                        value={txtCounter}
                        onChange={(event) => setTxtCounter(event.target.value)}
                        required
                      ></input>
                    </div>
                    <div>
                      <button
                        onClick={() => onAddTxtCounter(txtCounter)}
                        className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                      >
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

        <Allcards
          cardList={cardList}
          onClear={onClear}
          setCardList={setCardList}
        />

        {active && (
          <Modal active={active} onClose={onClose}>
            <h2 className="text-xl undefined">Add widget</h2>
            <div className="flex flex-wrap text-center mt-1.5 -ml-1.5">
              <WgJustsay onClickJustsay={onClickJustsay} />
              <WgCounter onClickCounter={onClickCounter} />
              <WgTimer onClickTimer={onClickTimer} />
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};
export default Widget;
