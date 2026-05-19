import { useState, useEffect, useRef } from "react";

export default function Dropdown({ options, value, onChange, align }) {
  const [open, setOpen] = useState(false);
  const isLeft = align === "left";
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-xl border font-mono font-bold text-sm
          transition-all duration-200
          ${open
            ? "bg-amber-400/10 border-amber-400/50 text-amber-400"
            : "bg-stone-900 border-stone-700/60 text-amber-400 hover:border-amber-400/40 hover:bg-stone-800/60"
          }
        `}
      >
        {isLeft ? (
          <>
            <span className="min-w-[32px] text-left">{value}</span>
            <span className={`text-stone-500 text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
          </>
        ) : (
          <>
            <span className={`text-stone-500 text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
            <span className="min-w-[48px] text-right">{value}</span>
          </>
        )}
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          className={`
            absolute top-full mt-2 z-50 w-40
            bg-stone-900/95 backdrop-blur-md
            border border-stone-700/70 rounded-md
            shadow-2xl shadow-black/70 overflow-hidden
            ${isLeft ? "left-0" : "right-0"}
          `}
        >
          <div className="max-h-60 overflow-y-auto">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`
                  w-full px-4 py-2.5 font-mono text-sm transition-colors duration-150 text-left
                  ${value === opt
                    ? "bg-amber-400/10 text-amber-400 border-l-2 border-amber-400"
                    : "text-stone-300 hover:bg-stone-800 hover:text-white"
                  }
                `}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}