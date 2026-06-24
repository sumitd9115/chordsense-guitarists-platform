import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/axios";
import { RiRobot2Fill, RiAddLine, RiMessage3Line } from "react-icons/ri";
import { FaSpinner } from "react-icons/fa";

export default function Rightbar_assistant({ setRightbar }) {
  const navigate = useNavigate();
  const { chatId: activeChatId } = useParams();

  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchChats = async () => {
    setLoading(true);
    try {
      const res = await api.get("/ai/getMyChats");
      setChats(res.data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, [activeChatId]); // refetch when chat changes so list stays fresh

  function handleChatClick(id) {
    if (!id) {
      navigate("/ai-assistant");
    } else {
      navigate(`/ai-assistant/${id}`);
    }
    setRightbar(false);
  }

  return (
    <aside
      className="h-full w-72 bg-stone-950 border-l border-stone-800/60
                 flex flex-col rounded-l-2xl shadow-2xl shadow-black/80"
    >
      {/* ── Header ── */}
      <div
        className="flex items-center justify-between px-5 py-4
                      border-b border-stone-800/60 flex-shrink-0"
      >
        <div className="flex items-center gap-1.5">
          <RiRobot2Fill className="text-amber-400 text-sm" />
          <div>
            <h2 className="text-white text-md font-semibold leading-none">
              Conversations
            </h2>
          </div>
        </div>
      </div>

      {/* ── New Chat Button ── */}
      <div className="px-4 pt-4 pb-2 flex-shrink-0">
        <button
          onClick={() => handleChatClick("")}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl
                     bg-amber-400/8 border border-amber-400/20 text-amber-400
                     hover:bg-amber-400/15 hover:border-amber-400/40
                     transition-all duration-200 group"
        >
          <div
            className="w-6 h-6 rounded-md bg-amber-400/15 flex items-center
                          justify-center group-hover:bg-amber-400/25 transition-colors"
          >
            <RiAddLine className="text-sm" />
          </div>
          <span className="text-sm font-medium font-mono tracking-wide">
            New Conversation
          </span>
        </button>
      </div>

      {/* ── Section Label ── */}
      <div className="px-5 pb-2 flex-shrink-0">
        <p className="text-stone-600 text-[10px] font-mono uppercase tracking-[0.2em]">
          Recent
        </p>
      </div>

      {/* ── Chat List ── */}
      <div
        className="flex-1 overflow-y-auto px-3 pb-4 space-y-0.5
                      scrollbar-thin scrollbar-track-transparent scrollbar-thumb-stone-800"
      >
        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <FaSpinner className="text-amber-400 animate-spin text-lg" />
          </div>
        )}

        {/* Empty state */}
        {!loading && chats.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <div
              className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800
                            flex items-center justify-center mb-3"
            >
              <RiMessage3Line className="text-stone-600 text-lg" />
            </div>
            <p className="text-stone-500 text-xs font-mono">
              No conversations yet
            </p>
            <p className="text-stone-700 text-[10px] font-mono mt-1">
              Start one above
            </p>
          </div>
        )}

        {/* Chat items */}
        {!loading &&
          chats.map((ch) => {
            const isActive = ch._id === activeChatId;

            return (
              <div
                key={ch._id}
                onClick={() => handleChatClick(ch._id)}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl
                            cursor-pointer transition-all duration-150
                            ${
                              isActive
                                ? "bg-amber-400/10 border border-amber-400/20"
                                : "hover:bg-stone-900 border border-transparent"
                            }`}
              >
                {/* Icon */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center
                               flex-shrink-0 transition-colors
                               ${
                                 isActive
                                   ? "bg-amber-400/15"
                                   : "bg-stone-900 group-hover:bg-stone-800"
                               }`}
                >
                  <RiMessage3Line
                    className={`text-xs ${
                      isActive ? "text-amber-400" : "text-stone-500"
                    }`}
                  />
                </div>

                {/* Chat name */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs font-mono truncate transition-colors leading-relaxed
                                 ${
                                   isActive
                                     ? "text-amber-300"
                                     : "text-stone-400 group-hover:text-stone-200"
                                 }`}
                  >
                    {ch.chat_name || "Untitled conversation"}
                  </p>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                )}
              </div>
            );
          })}
      </div>
    </aside>
  );
}
