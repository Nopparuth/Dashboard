import React from "react";
import Card from "../components/Card";

const JustSay = (txtJustsay,
  setAllwidget,
  allwidget,
  setJustsay,
  justsay,
  setJustsayList,
  justsayList,) => {
  
  return (
    <>
      {justsayList.map((justsaytext) => (
        <Card key={justsaytext.id}>
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">JustSay</h2>
          <div className="absolute top-5 right-5">
            <button
              onClick={() => onClearJustsay(justsaytext)}
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
      {/* // <Card>
      //   <h2 className="text-lg font-bold text-gray-400 mb-1.5">JustSay</h2>
      //   <div className="absolute top-5 right-5">
      //   </div>
      //   <div className="text-center mt-8 mb-12">
      //     <h1 className="text-4xl font-bold undefined">Hello</h1>
      //   </div>
      // </Card> */}
    </>
  );
};
export default JustSay;
