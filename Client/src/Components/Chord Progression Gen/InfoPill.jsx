export default function InfoPill({ label, value }) {
  return (
    <div>
      <p className="text-stone-500 text-[10px] font-mono tracking-widest uppercase mb-2">
        {label}
      </p>

      <div
        className="bg-stone-800 border border-stone-700
                   rounded-xl px-4 py-3 text-white font-mono"
      >
        {value}
      </div>
    </div>
  );
}
