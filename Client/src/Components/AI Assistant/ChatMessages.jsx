import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TypingIndicator from "./TypingIndicator";
import AnimatedMarkdown from "./AnimatedMarkdown";
import { useRef, useEffect } from "react";

export default function ChatMessages({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-6 pt-20 pb-36 space-y-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {msg.loading ? (
            <TypingIndicator />
          ) : (
            <div
              className={`max-w-3xl rounded-xl p-4 ${
                msg.role === "user" ? "bg-stone-700 text-white" : " text-white"
              }`}
            >
              {msg.role === "assistant" ? (
                msg.animate ? (
                  <AnimatedMarkdown text={msg.content} />
                ) : (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.content}
                  </ReactMarkdown>
                )
              ) : (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.content}
                </ReactMarkdown>
              )}
            </div>
          )}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
