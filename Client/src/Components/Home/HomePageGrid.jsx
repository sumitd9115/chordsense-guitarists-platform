import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiGitBranch,
  FiActivity,
  FiClock,
  FiGrid,
} from "react-icons/fi";

export default function HomePageGrid() {
  const cards = [
    {
      heading: "Practice Tracker",
      content:
        "Track your consistency, build better habits, and monitor your improvement over time.",
      icon: FiActivity,
    },
    {
      heading: "Chord Progressions",
      content:
        "Practice realistic chord transitions and discover common progressions used in popular music.",
      icon: FiGitBranch,
    },
    {
      heading: "Metronome",
      content:
        "Keep perfect timing and improve rhythm accuracy during practice sessions.",
      icon: FiClock,
    },
    {
      heading: "AI Assistant",
      content:
        "Receive intelligent recommendations for practice routines, chord suggestions, and learning paths.",
      icon: FiGrid,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderButtonClass =
    "absolute top-1/2 -translate-y-1/2 z-20 bg-stone-900 text-white p-3 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300";

  function nextSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1,
    );
  }

  function prevSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1,
    );
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Left Arrow */}
      <button onClick={prevSlide} className={`${sliderButtonClass} left-0`}>
        <FiChevronLeft size={15} />
      </button>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.heading}
                className="min-w-full flex justify-center"
              >
                <div className="bg-stone-950 border border-stone-800 rounded-3xl p-8">
                  <div className="text-amber-400 text-3xl mb-4">{Icon}</div>
                  <h3 className="text-white text-2xl font-semibold mb-4">
                    {card.heading}
                  </h3>
                  <p className="text-stone-400 leading-relaxed">
                    {card.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Arrow */}
      <button onClick={nextSlide} className={`${sliderButtonClass} right-0`}>
        <FiChevronRight size={15} />
      </button>
    </div>
  );
}
