import InfoPill from "./InfoPill";
import ChordCard from "./ChordCard";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function SavedProgressionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [progression, setProgression] = useState(null);

  useEffect(() => {
    fetchProgression();
  }, []);

  const fetchProgression = async () => {
    const res = await api.get(`/progression/${id}`);
    console.log("Response: ", res);
    console.log("Sumit");
    setProgression(res.data.data);
  };

  console.log(progression);

  return (
    <div className="min-h-screen bg-stone-950 font-sans">
      {!progression && (
        <div className="h-screen flex items-center justify-center">
          <p className="text-stone-400 font-mono">Loading progression...</p>
        </div>
      )}
      {progression && (
        <>
          <button
            className="absolute top-5 right-5 text-stone-500 hover:text-amber-400 transition-colors text-md font-mono tracking-widest uppercase border border-stone-500 hover:border-amber-400 rounded-xl px-3 py-1 cursor-pointer"
            onClick={() => navigate("/chord-prog-gen")}
          >
            ← Back
          </button>
          <div className="max-w-3xl mx-auto px-4 py-8 fade-up">
            <div
              className="bg-stone-900 border border-stone-700/60 rounded-2xl p-6 mb-5
                                shadow-xl shadow-black/40"
            >
              <div className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <InfoPill label="Key" value={progression.inputs.key} />
                  <InfoPill label="Mood" value={progression.inputs.mood} />
                </div>

                <InfoPill label="Genre" value={progression.inputs.genre} />

                <div className="grid grid-cols-3 gap-5">
                  <InfoPill
                    label="Difficulty"
                    value={progression.inputs.difficulty}
                  />
                  <InfoPill
                    label="No. of Chords"
                    value={progression.inputs.numChords}
                  />
                  <InfoPill
                    label="Time Signature"
                    value={progression.inputs.timeSignature}
                  />
                </div>
              </div>
            </div>

            {/* ── Result ── */}
            <div className="space-y-4 fade-up">
              {/* Chord progression */}
              <div className="bg-stone-900 border border-stone-700/60 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-amber-400 text-[10px] font-mono tracking-[0.35em] uppercase mb-1">
                      Generated Progression
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-stone-500 text-[9px] font-mono tracking-widest uppercase">
                      Suggested BPM
                    </p>
                    <p className="text-amber-400 font-mono font-bold text-lg">
                      {progression.result.bpm}
                    </p>
                  </div>
                </div>

                {/* Chord cards */}
                <div className="flex flex-wrap items-center gap-0 mb-2">
                  {progression.result.progression?.map((chord, i) => (
                    <ChordCard
                      key={i}
                      chord={chord}
                      index={i}
                      total={progression.result.progression.length}
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
                  {progression.result.explanation}
                </p>
                {progression.result.theoryTip && (
                  <div className="mt-4 px-4 py-3 bg-amber-400/5 border border-amber-400/20 rounded-xl">
                    <p className="text-amber-400/80 text-xs font-mono">
                      💡 {progression.result.theoryTip}
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
                    {progression.result.strummingPattern}
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
                    {progression.result.songs?.map((song, i) => (
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
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}
