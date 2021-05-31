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
        <div class="md:flex md:flex-wrap md:-mr-4">
          <div class="md:inner md:w-1/2 pb-4 md:pr-4">
            <JustSay />
          </div>
          <div class="md:inner md:w-1/2 pb-4 md:pr-4">
            <Counter />
          </div>
          <div class="md:inner md:w-1/2 pb-4 md:pr-4">
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}
