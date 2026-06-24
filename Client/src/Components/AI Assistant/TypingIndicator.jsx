export default function TypingIndicator() {
  return (
    <div className="flex gap-1 px-3 py-2">
      <span className="w-2 h-2 rounded-full bg-stone-400 animate-bounce"></span>
      <span
        className="w-2 h-2 rounded-full bg-stone-400 animate-bounce"
        style={{ animationDelay: "150ms" }}
      ></span>
      <span
        className="w-2 h-2 rounded-full bg-stone-400 animate-bounce"
        style={{ animationDelay: "300ms" }}
      ></span>
    </div>
  );
}
