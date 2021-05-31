import React from "react";

const Card = ({ children }) => {
  return (
    <>
          <div class="p-5 border-1 bg-white rounded-2xl relative undefined">
            {children}
</div>
      {/* <div class="p-5 border-1 bg-white rounded-2xl relative undefined">
        <div class="md:flex md:flex-wrap md:-mr-4">
          
              {children}
            </div>
          </div> */}
        

      
    </>
  );
};

export default Card;
