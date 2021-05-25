import React from "react";

const Card = ({ children }) => {
  return (
    <>
      <div className="md:inner md:w-1/2 pb-4 md:pr-4">
        <div className="p-5 border-1 bg-white rounded-2xl relative undefined">
          {children}
        </div>
      </div>
      <div className="mt-6"></div>
    </>
  );
};

export default Card;