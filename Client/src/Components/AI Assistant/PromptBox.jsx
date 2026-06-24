import { IoSend } from "react-icons/io5";
import { useEffect } from "react";

export default function PromptBox({
  textRef,
  hChange,
  hSend,
  hKD,
  loading,
  prompt,
}) {

  useEffect(() => {
    const textarea = textRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`;
  }, [prompt, textRef]);

  const hasContent = prompt.trim().length > 0;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-20
                 bg-gradient-to-t from-black via-black/95 to-transparent
                 pt-2 pb-4 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* ── Input Container ── */}
        <div className="flex items-center gap-3 rounded-2xl border border-stone-700/60 bg-stone-900/90 backdrop-blur-sm px-4 py-3 focus-within:border-stone-500/80 transition-colors duration-200 shadow-lg shadow-black/40">
          <textarea
            ref={textRef}
            value={prompt}
            onChange={hChange}
            onKeyDown={hKD}
            rows={1}
            placeholder="Ask anything about guitar..."
            className="flex-1 resize-none bg-transparent text-stone-200 placeholder:text-stone-600 outline-none text-md leading-relaxed overflow-y-auto scrollbar-none min-h-[24px] max-h-[180px] py-0.5"
            style={{ scrollbarWidth: "none" }} />

          <button
            onClick={hSend}
            disabled={!hasContent || loading}
            className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center
                        justify-center transition-all duration-200 mb-0.5
                        ${
                          hasContent && !loading
                            ? "bg-amber-400 hover:bg-amber-300 cursor-pointer shadow-md shadow-amber-400/20"
                            : "bg-stone-800 cursor-not-allowed"
                        }`}
          >
            {loading ? (
              <div
                className="w-4 h-4 border-2 border-stone-600 border-t-stone-300
                           rounded-full animate-spin"
              />
            ) : (
              <IoSend
                className={`text-sm ${
                  hasContent ? "text-stone-950" : "text-stone-600"
                }`}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
