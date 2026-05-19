import { useEffect, useState } from "react";
import { Beginner } from "../../Data/BeginnerLessonData";
import { Intermediate } from "../../Data/IntermediateLessonData";
import { Advanced } from "../../Data/AdvancedLessonData";

const LEVEL_DATA = {
  Beginner,
  Intermediate,
  Advanced,
};

export function LessonCard({ lesson, onBack, selectedLevel, levelMeta }) {
  const [currIndex, setCurrIndex] = useState(0);
  const title = lesson.title;
  const desc = lesson.desc;
  const level = LEVEL_DATA[selectedLevel];
  const slides = level[title];
  const len = slides.length;

  console.log(Beginner["Guitar Anatomy"][0].info);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currIndex]);

  function nextSlide() {
    setCurrIndex((prev) => (prev === len - 1 ? 0 : prev + 1));
  }

  function prevSlide() {
    setCurrIndex((prev) => (prev === 0 ? len - 1 : prev - 1));
  }

  return (
    <div className="animate-fadeIn max-w-4xl mx-auto">
      <div
        className={`bg-stone-900 border-2 ${levelMeta[selectedLevel].border} rounded-2xl p-6 mb-4 relative`}
      >
        <button
          onClick={onBack}
          className="absolute top-5 right-5 text-stone-500 hover:text-amber-400 transition-colors text-md font-mono tracking-widest uppercase"
        >
          ← Back
        </button>
        <h2 className="text-white text-2xl font-bold mb-1">{title}</h2>
        <p className="text-stone-400 text-sm leading-relaxed max-w-2xl">
          {desc}
        </p>

        <div className="flex items-center justify-center gap-1.5 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrIndex(i)}
              className={`transition-all duration-300 rounded-full
                ${
                  i === currIndex
                    ? "w-5 h-2 bg-amber-400"
                    : "w-2 h-2 bg-stone-600 hover:bg-stone-400"
                }`}
            />
          ))}
        </div>
      </div>

      <div className={`relative overflow-hidden`}>
        <div
          className={`flex transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(-${currIndex * 100}%)` }}
        >
          {slides.map((item, i) => (
            <div key={i} className={`min-w-full`}>
              <div
                className={`bg-stone-900 border-2 ${levelMeta[selectedLevel].border} rounded-2xl p-6 text-white`}
              >
                <div className="flex flex-col gap-5 font-sans">
                  <h1 className="text-xl font-bold text-white leading-snug">
                    {item.title}
                  </h1>

                  {item.img && (
                    <div className="rounded-xl overflow-hidden border border-stone-700/40">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full object-cover max-h-100"
                      />
                    </div>
                  )}

                  <div className="relative overflow-hidden rounded-xl border border-stone-700/40 bg-stone-800/40 px-5 py-4">
                    <div
                      className={`absolute left-0 top-0 h-full w-1 ${levelMeta[selectedLevel].bg}`}
                    />

                    <p
                      className="text-stone-300 text-sm leading-7 whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: item.info }}
                    ></p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4 gap-3">
                <button
                  onClick={prevSlide}
                  disabled={currIndex === 0}
                  className="flex-1 py-3 bg-stone-900 border border-stone-700/60 rounded-xl font-mono text-sm
                     text-stone-300 hover:border-amber-400/60 hover:text-amber-400
                     disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-stone-700/60 disabled:hover:text-stone-300
                     transition-all duration-200"
                >
                  ← Previous
                </button>

                {/* Jump to any slide */}
                <div className="flex gap-1">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrIndex(i)}
                      className={`w-8 h-8 rounded-lg text-xs font-mono transition-all duration-200
                ${
                  i === currIndex
                    ? "bg-amber-400 text-black font-bold"
                    : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  disabled={currIndex === len - 1}
                  className="flex-1 py-3 bg-stone-900 border border-stone-700/60 rounded-xl font-mono text-sm
                     text-stone-300 hover:border-amber-400/60 hover:text-amber-400
                     disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-stone-700/60 disabled:hover:text-stone-300
                     transition-all duration-200"
                >
                  Next →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Prev / Next Controls ── */}
    </div>
  );
}
