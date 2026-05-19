export default function LevelSelection({ levels, levelmeta, curriculum, setlevel }) {
  return (
    <div className="animate-fadeIn mt-4 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-white text-4xl font-bold tracking-tight mb-3">
          Start your journey
        </h1>
        <p className="text-stone-400 text-base max-w-md mx-auto leading-relaxed">
          Choose your level. Every guitarist starts somewhere — no judgment,
          just progress.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {levels.map((level, i) => {
          const m = levelmeta[level];
          const modules = curriculum[level].length;
          const lessons = curriculum[level].reduce(
            (acc, mod) => acc + mod.lessons.length,
            0,
          );
          return (
            <button
              key={level}
              onClick={() => setlevel(level)}
              style={{ animationDelay: `${i * 80}ms` }}
              className={`animate-fadeIn group flex items-center justify-between p-6 rounded-2xl border ${m.border} ${m.bg} hover:shadow-lg ${m.glow} transition-all duration-300 text-left`}
            >
              <div>
                <p
                  className={`text-[10px] font-mono tracking-[0.35em] uppercase mb-1 ${m.color}`}
                >
                  {m.tag}
                </p>
                <h2 className="text-white text-xl font-bold">{level}</h2>
                <p className="text-stone-500 text-xs mt-1 font-mono">
                  {modules} modules · {lessons} lessons
                </p>
              </div>
              <span
                className={`text-2xl ${m.color} group-hover:translate-x-1 transition-transform duration-200`}
              >
                →
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
