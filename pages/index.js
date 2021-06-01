import Link from "next";
import JustSay from "../components/justsay";
import Counter from "../components/counter";
import Timer from "../components/timer";
import Widget from '../components/layouts/wideget'

export default function Home() {
  return (
    <div>
      <title>Widget - Daytech Dashboard</title>
      <h2 className="text-xl undifined">Widgets</h2>
      <div className="pt-3">
       <Widget/>
        <div className="pt-3">
</div>
        {/* <JustSay />
        <Counter />
        <Timer /> */}
      
      </div>
    </div>
  );
}
