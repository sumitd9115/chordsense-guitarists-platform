import { useState } from "react";
import { LuPanelRight } from "react-icons/lu";
import Rightbar_assistant from "./Rightbar_assistant.jsx";

export default function RightbarIcon() {
  const [openRightbar, setOpenRightbar] = useState(false);

  return (
    <>
      <div className="fixed top-0 right-0 m-4 z-50">
        <button
          onClick={() => setOpenRightbar(!openRightbar)}
          className={`cursor-pointer ${openRightbar ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <LuPanelRight className="text-2xl text-stone-300" />
        </button>
      </div>

      {openRightbar && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setOpenRightbar(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full z-40 flex items-center
                                    transition-transform duration-500 ease-in-out
                                    ${openRightbar ? "translate-x-0" : "translate-x-full"}`}
      >
        <Rightbar_assistant setRightbar={setOpenRightbar} />
      </div>
    </>
  );
}
