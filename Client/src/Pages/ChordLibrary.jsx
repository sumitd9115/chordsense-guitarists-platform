import { useState } from "react";
import ChordsMainPage from "../Components/ChordLibrary/ChordMainPage.jsx";
import ChordStartingPage from "../Components/ChordLibrary/ChordStartingPage.jsx";

export default function ChordLibrary() {
  const [showMainPage, setShowMainPage] = useState(false);

  function openChordLibrary() {
    setShowMainPage(true);
  }

  return (
    <div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(200px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out both;
        }
      `}</style>

      {!showMainPage && <ChordStartingPage setpage={openChordLibrary} />}

      {showMainPage && <ChordsMainPage />}
    </div>
  );
}
