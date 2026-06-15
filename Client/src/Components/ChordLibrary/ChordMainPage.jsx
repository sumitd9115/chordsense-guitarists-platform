import { useState } from "react";
import Dropdown from "./Dropdown";
import ChordDiagram from "./ChordDiagram";
import { ROOT_NOTES, QUALITIES } from "../../Data/ChordLibraryBasics";
import { ChordLibrary } from "../../Data/ChordLibrary";
import { useChordPlayer } from "../../Hooks/useChordPlayer";
  
export default function ChordMainPage() {
  const [root, setRoot] = useState("C");
  const [quality, setQuality] = useState("Major");
  const { playChord } = useChordPlayer();

  const PLACEHOLDER = ChordLibrary[root][quality];
  console.log(PLACEHOLDER);

  return (
    <div className="h-screen bg-stone-950 font-sans flex flex-col">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.4s ease-out both; }
      `}</style>

      <div className="fade-up sticky top-0 left-1/2 z-10 flex justify-center">
        <div
          className="bg-stone-950/80 backdrop-blur-md
                        rounded-b-2xl border-x border-b border-stone-700/60
                        px-12 py-4 text-center shadow-xl shadow-black/40"
        >
          <p className="text-amber-400 text-[10px] font-mono tracking-[0.5em] uppercase mb-1">
            ◈ ChordSense
          </p>
          <h1 className="text-white text-xl font-bold tracking-tight">
            Chord Library
          </h1>
          <p className="text-stone-500 text-[10px] font-mono tracking-widest uppercase mt-0.75">
            Select root · quality · explore
          </p>
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between fade-up">
        {/* LEFT flush panel Root Note */}
        <div
          className="hidden lg:flex bg-stone-950/80 backdrop-blur-md
                        border border-stone-700/60
                        rounded-r-2xl border-y border-r shadow-2xl shadow-black/50
                        px-5 py-6 flex flex-col gap-4 min-w-[160px]"
        >
          <div className="flex items-center gap-3">
            <span className="text-stone-300 font-medium text-lg tracking-wide font-mono mr-3">
              Root Note →
            </span>

            <Dropdown
              options={ROOT_NOTES}
              value={root}
              onChange={setRoot}
              align="left"
            />
          </div>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex lg:hidden gap-4 mb-6">
          {/* Root */}
          <div
            className="
      bg-stone-950/80 backdrop-blur-md
      border border-stone-700/60
      rounded-2xl shadow-xl shadow-black/40
      px-4 py-3
      flex items-center gap-3
    "
          >
            <Dropdown
              options={ROOT_NOTES}
              value={root}
              onChange={setRoot}
              align="left"
            />
          </div>

          {/* Quality */}
          <div
            className="
      bg-stone-950/80 backdrop-blur-md
      border border-stone-700/60
      rounded-2xl shadow-xl shadow-black/40
      px-4 py-3
      flex items-center gap-3
    "
          >
            <Dropdown
              options={QUALITIES}
              value={quality}
              onChange={setQuality}
              align="right"
            />
          </div>
        </div>

        {/* Center Diagram */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-fit flex flex-col items-center">
            {/* CENTER Diagram */}
            <div className="flex flex-col items-center justify-center gap-4">
              {/* Chord name */}
              <div className="text-center">
                <span className="text-white text-3xl font-bold tracking-tight">
                  {root}
                  <span className="text-amber-400 ml-1">{quality}</span>
                </span>
              </div>

              {/* Diagram frame */}
              <div className="relative bg-stone-900 border border-stone-700/60 rounded-t-3xl rounded-b-none px-4 pt-3 pb-3 shadow-2xl shadow-black/60">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

                <ChordDiagram
                  root={root}
                  quality={quality}
                  placeholder={PLACEHOLDER}
                />
              </div>
            </div>

            {/* Bottom Play Button */}
            <div className="w-full bg-stone-950/80 backdrop-blur-md rounded-b-3xl rounded-t-none border-x border-b border-stone-500/60 px-6 py-4 shadow-xl shadow-black/40 flex justify-center top-0">
              <button
                onClick={() => playChord(PLACEHOLDER)}
                className="px-8 py-2.5 rounded-full font-mono font-semibold text-sm tracking-widest uppercase transition-all duration-300 border bg-amber-400/15 border-amber-400/50 text-amber-400 hover:bg-amber-400/25"
              >
                 ▶ Play
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT flush panel Quality */}
        <div
          className="hidden lg:flex bg-stone-950/80 backdrop-blur-md
                        border border-stone-700/60
                        rounded-l-2xl border-x shadow-2xl shadow-black/50
                        px-5 py-6 flex flex-col gap-4 min-w-[160px]"
        >
          <div className="flex items-center gap-3">
            <Dropdown
              options={QUALITIES}
              value={quality}
              onChange={setQuality}
              align="right"
            />

            <span className="text-stone-300 font-medium tracking-wide font-mono ml-3">
              ← Quality
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
