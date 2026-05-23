export default function HomePageSection({
  img,
  HTp1,
  HTp2,
  isScroll,
  alignment,
  children,
}) {
  const alignmentClass = alignment === "start" ? "items-start" : "items-end";

  return (
    <section
      className={`relative h-screen flex flex-col justify-center overflow-hidden ${alignmentClass}`}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero text */}
      <div className="relative z-10 text-left px-6 ml-6">
        <p className="text-amber-400 text-sm tracking-[0.4em] uppercase mb-4 font-mono">
          {HTp1}
        </p>
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          {children}
        </h1>
        <p className="text-stone-300 text-lg md:text-xl mt-5 font-mono tracking-wide max-w-xl mx-auto">
          {HTp2}
        </p>
        {/* <div className="mt-10 flex gap-4">
          <button className="bg-amber-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition-colors duration-200 tracking-wide">
            {b1}
          </button>
          <button className="border border-stone-400 text-stone-300 px-6 py-3 rounded-full hover:border-white hover:text-white transition-colors duration-200 tracking-wide">
            {b2}
          </button>
        </div> */}
      </div>

      {isScroll && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 animate-bounce">
          <span className="text-xs tracking-widest uppercase font-mono">
            Scroll
          </span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-stone-950"></div>
    </section>
  );
}
