import Link from "next";
import JustSay from "../components/justsay";
import Counter from "../components/counter";
import Timer from "../components/timer";

export default function Home() {
  return (
    <div>
      <title>Widget - Daytech Dashboard</title>
      <h2 className="text-xl undifined">Widgets</h2>
      <div className="pt-3">
        <div className="md:flex md:flex-wrap md:mr-4">
          <JustSay />
          <Counter />
          <Timer />
        </div>
      </div>
    </div>
  );
}
