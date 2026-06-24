import { RiRobot2Fill } from "react-icons/ri";

export default function LandingScreen() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <div className="bg-amber-400/15 p-6 rounded-full border border-amber-400/30 shadow-lg shadow-amber-400/20">
          <RiRobot2Fill size={55} className="text-amber-400" />
        </div>
      </div>

      {/* Heading */}
      <h1 className="mt-8 text-center text-5xl font-bold text-white">
        Sense<span className="text-amber-400">AI</span>
      </h1>

      <p className="mt-1 text-center text-white text-lg">
        Your intelligent{" "}
        <span className="text-amber-400">guitar companion.</span>
      </p>

      <p className="mt-5 text-center text-stone-400 text-lg">
        Learn. Create. Play.
        <br />
      </p>
    </div>
  );
}
