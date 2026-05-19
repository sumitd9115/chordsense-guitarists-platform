import { ModuleCard } from "./ModuleCard";

export default function ModuleSelection({ meta, levelMeta, selectedLevel, curriculum, setlevel, setlesson, setmodule, module }) {
  return (
    <div className="animate-fadeIn mt-4 max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex flex-row justify-between">
          <p
            className={`text-[10px] font-mono tracking-[0.35em] uppercase mb-2 ${meta.color}`}
          >
            {levelMeta[selectedLevel].tag}
          </p>
          <button
            onClick={() => {
              setlevel(null);
              setlesson(null);
              setmodule(null);
            }}
            className="text-stone-300 hover:text-amber-300 text-sm font-mono tracking-widest uppercase transition-colors cursor-pointer"
          >
            ← Back to all Levels
          </button>
        </div>
        <h1 className="text-white text-3xl font-bold tracking-tight">
          {selectedLevel}
        </h1>
        <p className="text-stone-500 text-sm mt-1 font-mono">
          {curriculum[selectedLevel].length} modules ·{" "}
          {curriculum[selectedLevel].reduce((a, m) => a + m.lessons.length, 0)}{" "}
          lessons
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {curriculum[selectedLevel].map((mod, i) => (
          <div
            key={mod.module}
            style={{ animationDelay: `${i * 60}ms` }}
            className="animate-fadeIn"
          >
            <ModuleCard
              mod={mod}
              levelMeta={meta}
              onSelectLesson={setlesson}
              openModule={module}
              setOpenModule={setmodule}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
