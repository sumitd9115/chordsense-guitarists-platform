export function ModuleCard({
  mod,
  levelMeta,
  onSelectLesson,
  openModule,
  setOpenModule,
}) {
  const isOpen = openModule === mod.module;
  const Icon = mod.icon;
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${levelMeta.border} bg-stone-900/60`}
    >
      {/* Module Header */}
      <button
        onClick={() => setOpenModule(isOpen ? null : mod.module)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-stone-800/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">
            <Icon className="text-amber-400 text-xl" />
          </span>
          <div className="text-left">
            <p
              className={`text-xs font-mono tracking-[0.3em] uppercase ${levelMeta.color}`}
            >
              {mod.module}
            </p>
            <p className="text-white font-semibold text-base">{mod.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-stone-500 text-xs font-mono">
            {mod.lessons.length} lessons
          </span>
          <span
            className={`text-stone-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            ▾
          </span>
        </div>
      </button>

      {/* Lesson list */}
      <div
        className={`border-t border-stone-700/40 divide-y divide-stone-800/60 overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        {mod.lessons.map((lesson, i) => (
          <button
            key={i}
            onClick={() => onSelectLesson(lesson)}
            className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-stone-800/40 transition-colors group text-left"
          >
            <div className="flex items-center gap-3">
              <span
                className={`text-xs font-mono ${levelMeta.color} opacity-60`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-stone-200 text-sm font-medium group-hover:text-white transition-colors">
                  {lesson.title}
                </p>
                <p className="text-stone-500 text-xs mt-0.5 leading-relaxed max-w-md">
                  {lesson.desc}
                </p>
              </div>
            </div>
            <span
              className={`text-stone-600 group-hover:${levelMeta.color} transition-colors text-sm ml-4 flex-shrink-0`}
            >
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
