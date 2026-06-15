import { useState } from "react";
import { LuPanelRight } from "react-icons/lu";
import api from "../api/axios";
import PillSelector from "../Components/Chord Progression Gen/PillSelector";
import ChordCard from "../Components/Chord Progression Gen/ChordCard";
import RightBar from "../Components/Chord Progression Gen/RightBar";
import {
  KEYS,
  MOODS,
  GENRES,
  DIFFICULTY,
  NUM_CHORDS,
  TIME_SIGS,
} from "../Data/ChordProgGen";

export default function ChordProgGen() {
  const [inputs, setInputs] = useState({
    key: "G",
    mood: "Happy",
    genre: "Pop",
    difficulty: "Beginner",
    numChords: 4,
    timeSignature: "4/4",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openRightbar, setOpenRightbar] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleChange(field, value) {
    setInputs((prev) => ({ ...prev, [field]: value }));
    setError("");
  }

  async function handleGenerate() {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await api.post("/progression/generate", inputs);
      setResult(res.data.data.progression);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to generate. Try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    try {
      await api.post("/progression/save", {
        inputs,
        result,
      });
      setSaved(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen bg-stone-950 font-sans">
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp 0.4s ease-out both; }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
        .shimmer {
          background: linear-gradient(90deg, #1c1917 25%, #292524 50%, #1c1917 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
      `}</style>

      {/* ── Header ── */}
      <div className="relative flex justify-center">
        <div
          className="bg-stone-950/80 backdrop-blur-md rounded-b-2xl
          border-x border-b border-stone-700/60
          px-12 py-3 text-center shadow-xl shadow-black/40 flex flex-col justify-center"
        >
          <p className="text-amber-400 text-[10px] font-mono tracking-[0.5em] uppercase mb-0.5">
            ◈ ChordSense
          </p>
          <h1 className="text-white text-xl font-bold tracking-tight">
            Harmony Forge
          </h1>
          <p className="text-stone-500 text-[12px] font-mono tracking-widest uppercase mt-2">
            - AI-Powered Chord Progression Generator -
          </p>
        </div>

        <div className="text-white fixed right-0 top-0 m-6">
          <button
            onClick={() => setOpenRightbar(!openRightbar)}
            className={`cursor-pointer ${openRightbar ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <LuPanelRight className="text-2xl text-stone-300" />
          </button>

          {openRightbar && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpenRightbar(false)}
            />
          )}

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full z-40 flex items-center
                  transition-transform duration-500 ease-in-out
                  ${openRightbar ? "translate-x-0" : "translate-x-full"}`}
          >
            <RightBar />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 fade-up">
        {/* ── Selectors ── */}
        <div
          className="bg-stone-900 border border-stone-700/60 rounded-2xl p-6 mb-5
                        shadow-xl shadow-black/40"
        >
          <div className="grid grid-cols-1 gap-5">
            {/* Row 1: Key + Mood */}
            <div className="grid grid-cols-2 gap-5">
              <PillSelector
                label="Key"
                options={KEYS}
                value={inputs.key}
                onChange={(v) => handleChange("key", v)}
              />
              <PillSelector
                label="Mood"
                options={MOODS}
                value={inputs.mood}
                onChange={(v) => handleChange("mood", v)}
              />
            </div>

            {/* Row 2: Genre */}
            <PillSelector
              label="Genre"
              options={GENRES}
              value={inputs.genre}
              onChange={(v) => handleChange("genre", v)}
            />

            {/* Row 3: Difficulty + Chords + Time */}
            <div className="grid grid-cols-3 gap-5">
              <PillSelector
                label="Difficulty"
                options={DIFFICULTY}
                value={inputs.difficulty}
                onChange={(v) => handleChange("difficulty", v)}
              />
              <PillSelector
                label="No. of Chords"
                options={NUM_CHORDS}
                value={inputs.numChords}
                onChange={(v) => handleChange("numChords", v)}
              />
              <PillSelector
                label="Time Signature"
                options={TIME_SIGS}
                value={inputs.timeSignature}
                onChange={(v) => handleChange("timeSignature", v)}
              />
            </div>
          </div>
        </div>

        {/* ── Generate button ── */}
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full py-4 rounded-2xl font-mono font-bold text-sm tracking-widest uppercase
                     bg-amber-400/15 border border-amber-400/50 text-amber-400
                     hover:bg-amber-400/25 hover:border-amber-400
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-300 flex items-center justify-center gap-3 mb-5"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
              Generating...
            </>
          ) : (
            "✦ Generate Progression"
          )}
        </button>

        {/* ── Error ── */}
        {error && (
          <div className="mb-5 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl">
            <p className="text-red-400 text-sm font-mono">{error}</p>
          </div>
        )}

        {/* ── Loading skeleton ── */}
        {loading && (
          <div className="bg-stone-900 border border-stone-700/60 rounded-2xl p-6 space-y-4">
            <div className="shimmer h-4 w-32 rounded-lg" />
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="shimmer w-16 h-16 rounded-2xl" />
              ))}
            </div>
            <div className="shimmer h-3 w-full rounded-lg" />
            <div className="shimmer h-3 w-3/4 rounded-lg" />
          </div>
        )}

        {/* ── Result ── */}
        {result && !loading && (
          <div className="space-y-4 fade-up">
            {/* Chord progression */}
            <div className="bg-stone-900 border border-stone-700/60 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-amber-400 text-[10px] font-mono tracking-[0.35em] uppercase mb-1">
                    Generated Progression
                  </p>
                  <p className="text-stone-500 text-xs font-mono">
                    {inputs.key} · {inputs.mood} · {inputs.genre} ·{" "}
                    {inputs.timeSignature}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-stone-500 text-[9px] font-mono tracking-widest uppercase">
                    Suggested BPM
                  </p>
                  <p className="text-amber-400 font-mono font-bold text-lg">
                    {result.bpm}
                  </p>
                </div>
              </div>

              {/* Chord cards */}
              <div className="flex flex-wrap items-center gap-0 mb-2">
                {result.progression?.map((chord, i) => (
                  <ChordCard
                    key={i}
                    chord={chord}
                    index={i}
                    total={result.progression.length}
                  />
                ))}
              </div>
            </div>

            {/* Explanation */}
            <div className="bg-stone-900 border border-stone-700/60 rounded-2xl p-6">
              <p className="text-amber-400 text-[13px] font-mono tracking-[0.35em] uppercase mb-3">
                Why It Works?
              </p>
              <p className="text-stone-300 text-sm leading-7">
                {result.explanation}
              </p>
              {result.theoryTip && (
                <div className="mt-4 px-4 py-3 bg-amber-400/5 border border-amber-400/20 rounded-xl">
                  <p className="text-amber-400/80 text-xs font-mono">
                    💡 {result.theoryTip}
                  </p>
                </div>
              )}
            </div>

            {/* Strumming + Songs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-900 border border-stone-700/60 rounded-2xl p-5">
                <p className="text-amber-400 text-[10px] font-mono tracking-[0.35em] uppercase mb-3">
                  Strumming Pattern
                </p>
                <p className="text-white font-mono font-bold text-lg tracking-widest">
                  {result.strummingPattern}
                </p>
                <p className="text-stone-500 text-xs mt-2">
                  D = down strum · U = up strum
                </p>
              </div>

              <div className="bg-stone-900 border border-stone-700/60 rounded-2xl p-5">
                <p className="text-amber-400 text-[10px] font-mono tracking-[0.35em] uppercase mb-3">
                  Songs Using This
                </p>
                <div className="space-y-2">
                  {result.songs?.map((song, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-white text-sm font-medium">
                        {song.title}
                      </span>
                      <span className="text-stone-500 text-xs font-mono">
                        {song.artist}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progression Saving */}
            <div className={`mt-3 flex justify-center items-center gap-2`}>
              <p className="text-stone-300 text-[15px] font-mono">
                Do you want to save this progression?
              </p>
              <button
                onClick={handleSave}
                disabled={saved}
                className={`font-mono px-3 py-2 rounded-xl transition-all
                ${
                  saved
                    ? "bg-stone-700 text-stone-400 cursor-not-allowed"
                    : "bg-amber-400 text-stone-950 cursor-pointer hover:bg-amber-300"
                }`}
              >
                {saved ? "Saved ✓" : "Save"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
