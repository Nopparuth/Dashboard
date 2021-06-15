import React from "react";
import JustSay from "./Justsay";
import Counter from "./Counter";
import Timer from "./Timer";
import Weather from "./Weather";
import JustShout from "./Justshout";
import Covid from "./Covid";

const Allcards = ({
  cardList,
  onClear,
  onClickEditJustsay,
  onClickEditJustshout,
  totalTimeS,
  setTotalTimeS,
  totalTimeM,
  setTotalTimeM,
  onClickRefresh,
  onClickEditWeather
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
        <Weather
          key={item.id}
          araigordai={item}
          onClear={() => onClear(item)}
          onClickRefresh={() => onClickRefresh(item)}
          onClickEditWeather={() => onClickEditWeather(item)}
        />
      );
    } else if (item.check === "JustShout") {
      console.log("item", item);
      return (
        <JustShout
          key={item.id}
          araigordai={item}
          onClear={() => onClear(item)}
          onClickEditJustshout={() => onClickEditJustshout(item)}
          // onEditTxtJustSay={() => onEditTxtJustSay(item)}
        />
      );
    } else if (item.check === "Covid") {
      console.log("item", item);

      return (
        <Covid key={item.id} araigordai={item} onClear={() => onClear(item)} />
      );
    }
  });

  return <>{show}</>;
};
export default Allcards;
