export default function PillSelector({ label, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-stone-500 text-[11px] font-mono tracking-[0.35em] uppercase">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`
              px-3 py-1.5 rounded-lg font-mono text-sm font-semibold
              border transition-all duration-200
              ${
                value === opt
                  ? "bg-amber-400/15 border-amber-400/60 text-amber-400"
                  : "bg-stone-900 border-stone-700/60 text-stone-400 hover:border-stone-500 hover:text-stone-200"
              }
            `}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
