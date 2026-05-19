import { useState } from "react";
import { CURRICULUM } from "../Data/CurriculumData";
import { LessonCard } from "../Components/LearningSection/LessonCard.jsx";
import LevelSelection  from "../Components/LearningSection/LevelSelection.jsx";
import ModuleSelection from "../Components/LearningSection/ModuleSelection.jsx";

const LEVEL_META = {
  Beginner: {
    tag: "Start here",
    color: "text-emerald-400",
    border: "border-emerald-500/40",
    bg: "bg-emerald-500/10",
    glow: "shadow-emerald-500/20",
  },
  Intermediate: {
    tag: "Level up",
    color: "text-amber-400",
    border: "border-amber-500/40",
    bg: "bg-amber-500/10",
    glow: "shadow-amber-500/20",
  },
  Advanced: {
    tag: "Master the craft",
    color: "text-rose-400",
    border: "border-rose-500/40",
    bg: "bg-rose-500/10",
    glow: "shadow-rose-500/20",
  },
};

export default function LearningSection() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [openModule, setOpenModule] = useState(null);

  const levels = ["Beginner", "Intermediate", "Advanced"];
  const meta = selectedLevel ? LEVEL_META[selectedLevel] : null;

  function handlelevel(lvl) {
    setSelectedLevel(lvl);
  }
  
  function handlelesson(lesson) {
    setSelectedLesson(lesson);
  }

  function handlemodule(module) {
    setOpenModule(module);
  }

  return (
    <div className="min-h-screen bg-stone-950 font-sans">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out both; }
      `}</style>

      <div className="px-4 py-10">
        {!selectedLevel && (
          <LevelSelection
            levels={levels}
            levelmeta={LEVEL_META}
            curriculum={CURRICULUM}
            setlevel={handlelevel}
          />
        )}

        {/* ── Module / Lesson View ── */}
        {selectedLevel && !selectedLesson && (
          <ModuleSelection
            meta={meta}
            levelMeta={LEVEL_META}
            selectedLevel={selectedLevel}
            curriculum={CURRICULUM}
            setlevel={handlelevel}
            setlesson={handlelesson}
            setmodule={handlemodule}
            module={openModule}
          />
        )}

        {/* ── Lesson Detail ── */}
        {selectedLevel && selectedLesson && (
          <LessonCard
            lesson={selectedLesson}
            onBack={() => setSelectedLesson(null)}
            selectedLevel={selectedLevel}
            levelMeta={LEVEL_META}
          />
        )}
      </div>
    </div>
  );
}
