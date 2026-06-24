import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";

import LandingScreen from "../Components/AI Assistant/LandingScreen.jsx";
import ChatMessages from "../Components/AI Assistant/ChatMessages.jsx";
import RightbarIcon from "../Components/AI Assistant/RightbarIcon.jsx";
import PromptBox from "../Components/AI Assistant/PromptBox.jsx";
import api from "../api/axios.js";

export default function AIassistant() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const textareaRef = useRef(null);

  const navigate = useNavigate();
  const { chatId } = useParams();

  useEffect(() => {
    const loadChat = async () => {
      if (!chatId) {
        setMessages([]);
        return;
      }
      setLoadingChat(true);
      try {
        const res = await api.get(`/ai/chat/${chatId}`);
        setMessages(res.data.messages);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingChat(false);
      }
    };

    loadChat();
  }, [chatId]);

  const fetchAIResponse = async () => {
    setLoadingResponse(true);
    try {
      const res = await api.post("/ai/ask", {
        chatId: chatId,
        question: prompt,
      });

      const newChatId = res.data.data.chatId;

      setMessages((prev) =>
        prev.map((msg) =>
          msg.loading
            ? {
                role: "assistant",
                content: res.data.data.response,
                animate: true,
              }
            : msg
        )
      );

      if (!chatId) {
        navigate(`/ai-assistant/${newChatId}`);
      }
    } catch {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.loading
            ? {
                role: "assistant",
                content: "Something went wrong. Please try again.",
                animate: true,
              }
            : msg
        )
      );
    } finally {
      setLoadingResponse(false);
    }
  };

  function handleSend() {
    if (!prompt.trim() || loadingResponse) return;

    const userMessage = { role: "user", content: prompt, animate: false };
    const typingMessage = {
      role: "assistant",
      content: "",
      loading: true,
    };

    setMessages((prev) => [...prev, userMessage, typingMessage]);
    fetchAIResponse();
    setPrompt("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  }

  const handleChange = (e) => {
    setPrompt(e.target.value);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const showHeader = !!chatId;
  const showLanding = !chatId && messages.length === 0;
  const showLoading = loadingChat;
  const showChat = !loadingChat && messages.length > 0;

  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      {showHeader && (
        <header className="fixed top-0 left-0 right-0 z-30 bg-black/80
                           backdrop-blur-md border-b border-stone-800/60">
          <div className="max-w-4xl mx-auto px-6 py-5 flex justify-center items-center gap-1.5 pl-16">
            <RiRobot2Fill className="text-amber-400 text-lg" />
            <div>
              <h1 className="text-white font-semibold text-lg leading-none">
                Sense<span className="text-amber-400">AI</span>
              </h1>
            </div>
          </div>
        </header>
      )}

      <RightbarIcon />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 flex flex-col">

        {showLoading && (
          <div className="flex-1 flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center gap-3">
              <FaSpinner className="text-3xl text-amber-400 animate-spin" />
              <p className="text-stone-500 text-sm font-mono">
                Loading conversation...
              </p>
            </div>
          </div>
        )}

        {showLanding && !showLoading && (
          <div className="flex-1 flex items-center justify-center min-h-screen">
            <LandingScreen />
          </div>
        )}

        {showChat && (
          <ChatMessages
            messages={messages}
            hasHeader={showHeader}
          />
        )}

        {!showLoading && chatId && messages.length === 0 && (
          <div className="flex-1 flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20
                              flex items-center justify-center mx-auto mb-4">
                <RiRobot2Fill className="text-amber-400 text-2xl" />
              </div>
              <p className="text-stone-400 text-sm font-mono">
                Start a conversation
              </p>
            </div>
          </div>
        )}

      </main>

      <PromptBox
        textRef={textareaRef}
        prompt={prompt}
        hChange={handleChange}
        hSend={handleSend}
        hKD={handleKeyDown}
        loading={loadingResponse}
      />
    </div>
  );
}