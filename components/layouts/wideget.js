import React, { useState } from "react";
import Modal from "../modal";
import WgJustsay from "../subwidgets/WgJustsay";
import WgCounter from "../subwidgets/WgCounter";
import WgTimer from "../subwidgets/WgTimer";
import Allcards from "../Allcards";
import { IoSettingsOutline } from "react-icons/io5";
import axios from "axios";


import { IoClose } from "react-icons/io5";

import { RiAddCircleLine } from "react-icons/ri";

import Card from "../Card";
import WgWeather from "../subwidgets/WgWeather";

const Widget = () => {
  const [active, setActive] = useState(false);
  const [activejustsay, setActivejustsay] = useState(false);
  const [editjustsay, setEditjustsay] = useState(false);
  const [activecounter, setActivecounter] = useState(false);
  const [activetimer, setActivetimer] = useState(false);
  const [activeSettings, setActiveSettings] = useState(false);
  const [activeWeather, setActiveWeather] = useState(false);

  const [checkError, setCheckError] = useState("");
  const [txtJustsay, setTxtJustsay] = useState("");
  const [txtCounter, setTxtCounter] = useState(0);
  const [txtWeather, setTxtWeather] = useState("")
  const [newInput, setNewinput] = useState("");
  const [zero, setZero] = useState("");
  const [country, setCountry] = useState("");


  const [totalTimeS, setTotalTimeS] = useState(parseInt(0));
  const [totalTimeM, setTotalTimeM] = useState(parseInt(0));

  const [txtLength, setTxtlength] = useState(0);
  const [counterLength, setCounterlength] = useState(0);
  const [allwidget, setAllwidget] = useState(0);
  const [cardList, setCardList] = useState([
    {
      content: "",
      check: "",
      id: "",
      time: ""
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
  const dateTime = `${mo} ${da}, ${ye}, ${hms}`;

  const onCancelText = () => {
    setActivejustsay(false);
    setEditjustsay(false);
    setActivecounter(false);
    setActiveSettings(false);
    setActiveWeather(false)
  };

  const getTotalTime = () => {
    if (totalTime > 60) {
      setTotalTime(totalTime);
      console.log(totalTime);
    }
    totalTime;
    console.log(totalTime);
  };

  const onClickJustsay = () => {
    setActive(false);
    setActivejustsay(true);
  };

  const onClickWeather = () => {
    console.log("WEATHER")
    setActive(false);
    setActiveWeather(true);
  };

  const onAddTxtWeather = async (country) => {
    console.log("Hello")
    const idr = Math.floor(Math.random() * 1000) + 1;
    const filter = {
      api: "http://api.openweathermap.org/data/2.5/weather",
      q: country,
      appid: "3538704e75db70141f355f244c267e11",
      units: "metric",
    };
    try {
      const result = await axios.get(
        `${filter.api}?q=${filter.q}&appid=${filter.appid}&units=${filter.units}`
      );
      console.log(filter.api, filter.q, filter.appid, filter.units, result);
      const newData = [
        ...cardList,
        { content: result.data, check: "Weather", id: idr, time: dateTime  },
      ];
      console.log("newData", newData)
      // const newData = [...cardList, result.data];
      // console.log(newDatas)
      setCardList(newData);
    } catch (error) {
      console.log(error.response);
      // Swal.fire({
      //   title: "Error",
      //   text: "City not found!",
      //   icon: "error",
      //   confirmButtonText: "ok",
      // });
    }
    setActiveWeather(false)
    setCountry("");
    
  }


  const onClickEditJustsay = (item) => {
    setNewinput(item);
    cardList.map((card) => {
      if (card.id === item.id) {
        setTxtJustsay(card.content);
      }
    });

    setEditjustsay(true);
  };

  const onClear = (item) => {
    setCardList(cardList.filter((_item) => _item.id !== item.id));
  };

  const onClearAll = (item) => {
    cardList.map((card) => {
      setCardList(cardList.filter((_item) => _item.id == item.id));
    });
    setAllwidget(0);
    setTxtlength(0);
    setActiveSettings(false);
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
        { content: txtJustsay, check: "JustSay", id: idr, time: dateTime },
      ];
      setCardList(newData);
      console.log("cardList", newData.id);
      setActivejustsay(false);
      setAllwidget(allwidget + 1);
      setTxtlength(txtLength + txtJustsay.length);
      setTxtJustsay("");
    }
  };

  const onEditTxtJustSay = (e) => {
    if (txtJustsay.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      setCardList(
        cardList.map((card) => {
          if (card.id === newInput.id) {
            newInput.content = txtJustsay;
            return newInput;
          } else {
            return card;
          }
        })
      );
    }
    setEditjustsay(false);
  };

  const onClickCounter = () => {
    setActive(false);
    setActivecounter(true);
  };

  const onAddTxtCounter = (e) => {
    const idr = Math.floor(Math.random() * 1000) + 1;
    console.log("length", e);
    if (e < 0) {
      setCheckError("Please enter at least 0.");
    } else if (e.length === 0) {
      setCheckError("Please provide some value.");
    } else {
      const newData = [...cardList, { content: e, check: "Counter", id: idr, time: dateTime }];
      setCardList(newData);
      setCounterlength(counterLength + Number(e));
      setActivecounter(false);
      setAllwidget(allwidget + 1);
    }
    // setTxtJustsay("")
  };

  const onClickTimer = () => {
    const idr = Math.floor(Math.random() * 1000) + 1;
    const newData = [...cardList, { content: "", check: "Timer", id: idr, time: dateTime }];
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

  const onClickSetting = () => {
    console.log("clicked Setting");
    console.log("Allwidget", allwidget);
    console.log("Total Txt", txtLength);
    console.log("Total Counter", counterLength);
    // console.log("TotalTimer", totalTime);
    setActiveSettings(true);
  };

  const onSetZero = (e) => {
    e.preventDefault();
    // setCardList([])
    // setZero(e.target.value)
    // console.log("type", e.target.onselect);
    cardList.map((card) => {
      if (card.check === "Counter") {
        card.content = "0";
        setNumber(0);
      }
    });
    setActiveSettings(false);
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
        <button
          onClick={onClickSetting}
          className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-500 hover:bg-gray-600"
        >
          <IoSettingsOutline className="inline-block text-xl relative -top-0.5" />{" "}
          Settings
        </button>
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

        {editjustsay && (
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
                  <h2 className="text-xl mb-2">Edit JustSay</h2>
                  <form className="flex" onSubmit={onEditTxtJustSay}>
                    <div className="flex-1 mr-1">
                      <input
                        type="text"
                        className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                        placeholder="Enter text"
                        defaultValue={txtJustsay}
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
                        Edit
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

{activeWeather && (
          <Modal>
            <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
              <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
                <button onClick={() => onCancelText} className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none">
                <IoClose />
                </button>
                <div>
                  <fieldset>
                    <h2 className="text-xl mb-2">Add Weather</h2>
                    <form className="flex">
                      <div className="flex-1 mr-1">
                        <input
                          type="text"
                          className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                          placeholder="Enter a city"
                          value={txtWeather}
                          onChange={(event) => setTxtWeather(event.target.value)}
                        />
                      </div>
                      <div>
                        <button onClick={() => onAddTxtWeather(txtWeather)}  className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600">
                          {" "}
                          Add
                        </button>
                      </div>
                    </form>
                  </fieldset>
                </div>
              </div>
            </div>
          </Modal>
        )}

        <Allcards
          cardList={cardList}
          onClear={onClear}
          setCardList={setCardList}
          onClickEditJustsay={onClickEditJustsay}
          totalTimeS={totalTimeS}
          setTotalTimeS={setTotalTimeS}
          totalTimeM={totalTimeM}
          setTotalTimeM={setTotalTimeM}
          // onEditTxtJustSay={onEditTxtJustSay}
        />

        {active && (
          <Modal active={active} onClose={onClose}>
            <h2 className="text-xl undefined">Add widget</h2>
            <div className="flex flex-wrap text-center mt-1.5 -ml-1.5">
              <WgJustsay onClickJustsay={onClickJustsay} />
              <WgCounter onClickCounter={onClickCounter} />
              <WgTimer onClickTimer={onClickTimer} />
              <WgWeather onClickWeather={onClickWeather}/>
            </div>
          </Modal>
        )}

       

        {activeSettings && (
          <Modal>
            <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
              <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
                <button
                  onClick={onCancelText}
                  className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
                >
                  <IoClose />
                </button>
                <div>
                  <h2 className="text-xl mb-4">Settings</h2>
                  <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
                    <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                      Statistics
                    </h2>
                    <div className="table">
                      <div className="table-row">
                        <div className="table-cell pr-4 font-semibold">
                          Total widgets:{" "}
                        </div>
                        <div className="table-cell">{allwidget}</div>
                      </div>
                      <div className="table-row">
                        <div className="table-cell pr-4 font-semibold">
                          Total Just length:{" "}
                        </div>
                        <div className="table-cell">{txtLength}</div>
                      </div>
                      <div className="table-row">
                        <div className="table-cell pr-4 font-semibold">
                          Total count:{" "}
                        </div>
                        <div className="table-cell">{counterLength}</div>
                      </div>
                      <div className="table-row">
                        <div className="table-cell pr-4 font-semibold">
                          Total time:{" "}
                        </div>
                        <div className="table-cell">
                          {totalTimeM >= 10 ? totalTimeM : "0" + totalTimeM}:
                          {totalTimeS >= 10 ? totalTimeS : "0" + totalTimeS}
                        </div>
                      </div>
                      <div className="table-row">
                        <div className="table-cell pr-4 font-semibold">
                          Coldest cities:{" "}
                        </div>
                        <div className="table-cell">N/A</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
                    <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                      JustShout text
                    </h2>
                    <fieldset disabled>
                      <form className="flex">
                        <div className="flex-1 mr-1">
                          <input
                            type="text"
                            className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                            placeholder="Enter text"
                            defaultValue
                          />
                        </div>
                        <div>
                          <button
                            className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300 cursor-default"
                            disabled
                          >
                            {" "}
                            Edit
                          </button>
                        </div>
                      </form>
                    </fieldset>
                  </div>
                  <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
                    <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                      Reset Zone
                    </h2>
                    <div className="flex items-center">
                      <select
                        name="select"
                        className="flex-1 mt-1 mr-1.5 py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 text-sm"
                      >
                        <option value="Counter">All counters</option>
                        <option value="Timer">All timers</option>
                      </select>
                      <button
                        onClick={onSetZero}
                        className="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600"
                      >
                        {" "}
                        Set zero
                      </button>
                    </div>
                  </div>
                  <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
                    <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                      Delete Zone
                    </h2>
                    <button
                      onClick={onClearAll}
                      className="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600 w-full mb-1"
                    >
                      {" "}
                      Delete all widgets
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};
export default Widget;
