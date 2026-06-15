export default function ChordCard({ chord, index, total }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex flex-col items-center">
        <div
          className="bg-stone-900 border border-amber-400/40 rounded-2xl
             px-5 py-4
             flex items-center justify-center
             shadow-lg shadow-amber-400/5
             hover:border-amber-400/70 hover:bg-amber-400/5
             transition-all duration-200 ml-1"
        >
          <span className="text-amber-400 font-mono font-bold text-xl">
            {chord}
          </span>
        </div>
        <span className="text-stone-600 text-[9px] font-mono mt-1">
          {index + 1}
        </span>
      </div>

      {/* Arrow between chords */}
      {index < total - 1 && (
        <span className="text-stone-700 text-lg font-mono mb-4">→</span>
      )}
    </div>
  );
}
