import React from "react";

const Card = ({ children }) => {
  return (
    <>
      <div class="p-5 border-1 bg-white rounded-2xl relative undefined">
        {children}
      </div>
    </>
  );
};

export default Card;
