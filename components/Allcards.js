import React from "react";
import JustSay from "./Justsay";
import Counter from "./Counter";
import Timer from "./Timer";

const Allcards = ({ cardList, onClear }) => {
  const show = cardList.map((item) => {
    if (item.check === "JustSay") {
      console.log("item", item.id);
      return (
        <JustSay
          key={item.id}
          araigordai={item}
          onClear={() => onClear(item)}
        />
      );
    } else if (item.check === "Counter") {
      return (
        <Counter
          key={item.id}
          araigordai={item.content}
          onClear={() => onClear(item)}
        />
      );
    } else if (item.check === "Timer") {
      return <Timer key={item.id} item={item} onClear={() => onClear(item)} />;
    }
  });
  return <>{show}</>;
};
export default Allcards;
