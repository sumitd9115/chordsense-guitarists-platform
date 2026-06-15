import { useEffect, useState } from "react";
import api from "../../api/axios";
import { LuMusic4 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function RightBar() {
  const [progressions, setProgressions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProgressions();
  }, []);

  const fetchProgressions = async () => {
    try {
      const res = await api.get("/progression/getMyProgressions");
      setProgressions(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <aside
      className="h-full w-80 bg-stone-950 border-l border-stone-800
                 flex flex-col rounded-l-2xl shadow-2xl shadow-black/60"
    >
      {/* Header */}
      <div className="px-6 py-6 border-b border-stone-800">
        <h2 className="text-white text-lg font-bold">Saved Progressions</h2>

        <p className="text-stone-500 text-xs font-mono mt-1 tracking-widest uppercase">
          Your Generated Chords
        </p>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {progressions.length === 0 ? (
          <div className="text-center mt-10">
            <p className="text-stone-500 text-sm">No saved progressions yet</p>
          </div>
        ) : (
          progressions.map((prog) => (
            <div
              key={prog._id}
              onClick={() => navigate(`/saved-progression/${prog._id}`)}
              className="group bg-stone-900 border border-stone-800 rounded-xl p-4 cursor-pointer hover:border-amber-400/40 hover:bg-stone-900/80 transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-400/10 border border-amber-400/20">
                  <LuMusic4 className="text-amber-400 text-lg" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-sm font-semibold truncate group-hover:text-amber-300">
                    {prog.name}
                  </h3>

                  <p className="text-stone-500 text-xs mt-1">
                    {new Date(prog.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}
