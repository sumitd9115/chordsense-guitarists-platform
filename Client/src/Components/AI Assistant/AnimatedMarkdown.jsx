import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AnimatedMarkdown({ text }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i >= text.length) clearInterval(interval);
    }, 5);

    return () => clearInterval(interval);
  }, [text]);

  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{displayed}</ReactMarkdown>;
}
