import React from "react";
import JustSay from "./Justsay";
import Counter from "./Counter";
import Timer from "./Timer";
import Weather from "./Weather";

const Allcards = ({
  cardList,
  onClear,
  onClickEditJustsay,
  totalTimeS,
  setTotalTimeS,
  totalTimeM,
  setTotalTimeM,
}) => {
  const show = cardList.map((item) => {
    if (item.check === "JustSay") {
      console.log("item", item);
      return (
        <JustSay
          key={item.id}
          araigordai={item}
          onClear={() => onClear(item)}
          onClickEditJustsay={() => onClickEditJustsay(item)}
          // onEditTxtJustSay={() => onEditTxtJustSay(item)}
        />
      );
    } else if (item.check === "Counter") {
      console.log("item", item);
      return (
        <Counter
          key={item.id}
          araigordai={item.content}
          onClear={() => onClear(item)}
        />
      );
    } else if (item.check === "Timer") {
      return (
        <Timer
          key={item.id}
          item={item}
          onClear={() => onClear(item)}
          setTotalTimeS={setTotalTimeS}
          totalTimeS={totalTimeS}
          totalTimeM={totalTimeM}
          setTotalTimeM={setTotalTimeM}
        />
      );
    } else if (item.check === "Weather") {
      // console.log("item", item);
      return (
        <Weather key={item.id} araigordai={item} />
      );
    }
  });

  return <>{show}</>;
};
export default Allcards;
