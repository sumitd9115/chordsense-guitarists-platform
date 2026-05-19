// import guitarchords from "../../assets/Guitar-chords.jpg";

// export default function ChordStartingPage({ setpage }) {
//   return (
//     <div
//       className="relative h-screen flex flex-col justify-center overflow-hidden"
//       style={{
//         backgroundImage: `url(${guitarchords})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/80" />

//       <div className="animate-fadeIn max-w-3xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-white text-4xl font-bold font-sans tracking-tight mb-5">
//             Welcome to Chord Library!
//           </h1>
//           <p className="text-stone-400 text-base max-w-md mx-auto leading-relaxed">
//             Lets deep dive into Chord Library by learning various chord patterns
//             and knowing about how exactly they are played!!
//           </p>
//           <button
//             className="text-stone-900 p-4 rounded-2xl cursor-pointer bg-amber-300 mt-6"
//             onClick={setpage}
//           >
//             Lets start!! →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import guitarchords from "../../assets/Guitar-chords.jpg";

export default function ChordStartingPage({ setpage }) {
  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden font-sans"
      style={{
        backgroundImage: `url(${guitarchords})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-black/60" />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fadeUp 0.5s ease-out 0.1s both; }
        .fade-up-2 { animation: fadeUp 0.5s ease-out 0.25s both; }
        .fade-up-3 { animation: fadeUp 0.5s ease-out 0.4s both; }
        .fade-up-4 { animation: fadeUp 0.5s ease-out 0.55s both; }
      `}</style>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">

        {/* Brand tag */}
        <p className="fade-up-1 text-amber-400 text-[10px] font-mono tracking-[0.5em] uppercase mb-4">
          ◈ ChordSense
        </p>

        {/* Heading */}
        <h1 className="fade-up-2 text-white text-5xl font-bold tracking-tight leading-tight mb-4">
          Chord <span className="text-amber-400">Library</span>
        </h1>

        {/* Divider */}
        <div className="fade-up-2 flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50" />
          <span className="text-amber-400/60 text-xs font-mono tracking-widest">◆</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50" />
        </div>

        {/* Description */}
        <p className="fade-up-3 text-stone-400 text-base leading-relaxed max-w-md mx-auto mb-10">
          Explore chord fingerings across every root note and quality.
          From open position to jazz voicings — it's all here.
        </p>

        {/* Stats row */}
        <div className="fade-up-3 flex items-center justify-center gap-8 mb-10">
          {[
            { value: "12", label: "Root Notes" },
            { value: "29", label: "Qualities" },
            { value: "348", label: "Chord Shapes" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-amber-400 text-2xl font-bold font-mono">{stat.value}</p>
              <p className="text-stone-600 text-[10px] font-mono tracking-widest uppercase mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Button — matches Guitar Tuner style */}
        <div className="fade-up-4">
          <button
            onClick={setpage}
            className="px-10 py-3 rounded-full font-mono font-semibold text-sm tracking-widest uppercase
                       bg-amber-400/15 border border-amber-400/50 text-amber-400
                       hover:bg-amber-400/25 hover:border-amber-400
                       transition-all duration-300 shadow-lg shadow-amber-400/10"
          >
            Explore Chords →
          </button>
        </div>

      </div>

      {/* Bottom flush tag — mirrors Guitar Tuner bottom panel */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20
                      bg-stone-950/80 backdrop-blur-md
                      rounded-t-2xl border-x border-t border-stone-700/60
                      px-10 py-3 text-center">
        <p className="text-stone-600 text-[9px] font-mono tracking-[0.4em] uppercase">
          Standard Tuning · E A D G B E
        </p>
      </div>
    </div>
  );
}