import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiGrid,
  FiMusic,
  FiBook,
  FiSliders,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const NAV_ITEMS = [
  { label: "Dashboard", icon: FiGrid },
  { label: "Guitar Tuner", icon: FiSliders },
  { label: "Learning Section", icon: FiBook },
  { label: "Chord Library", icon: FiMusic },
];

export default function PublicLayout({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  const { isAuthenticated } = useAuth();

  // Hide public sidebar after login
  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="relative">
      {/* Hamburger */}
      <button
        onClick={() => setOpenSidebar(true)}
        className={`fixed top-5 left-5 z-[100] p-2 rounded-xl
bg-stone-900/80 backdrop-blur-md
           border border-stone-700
           shadow-lg shadow-black/40
           cursor-pointer ${openSidebar ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <FiMenu className="text-2xl text-stone-300 hover:text-white transition-colors duration-200" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-40
        transition-transform duration-500 ease-in-out
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <aside
          className="h-full w-64 bg-stone-950 border-r border-stone-800
                     flex flex-col rounded-r-2xl shadow-2xl shadow-black/60 overflow-hidden"
        >
          {/* Brand */}
          <div className="px-6 py-7 border-b border-stone-800 flex items-center justify-between">
            <div>
              <p className="text-amber-400 font-mono text-xs tracking-[0.35em] uppercase mb-1">
                ◈ ChordSense
              </p>

              <p className="text-stone-500 font-mono text-[10px] tracking-widest uppercase">
                Guitarist&apos;s Companion
              </p>
            </div>

            <button
              onClick={() => setOpenSidebar(false)}
              className="text-stone-500 hover:text-stone-300 transition-colors duration-200"
            >
              <FiX className="text-lg" />
            </button>
          </div>

          {/* Blurred Nav */}
          <div className="flex-1 px-3 py-5 space-y-1 overflow-y-auto filter blur-sm pointer-events-none select-none">
            {NAV_ITEMS.map(({ label, icon: Icon }, i) => (
              <div
                key={label}
                style={{ animationDelay: `${i * 40}ms` }}
                className="relative w-full flex items-center gap-3 px-4 py-2.5 rounded-xl
                           font-mono text-sm tracking-wide border border-transparent
                           text-stone-400"
              >
                <Icon className="text-base text-stone-500" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* Login Overlay */}
          <div
            className="absolute inset-0 top-[88px] flex flex-col items-center justify-center
                       px-6 bg-stone-950/60 backdrop-blur-sm rounded-b-2xl"
          >
            <div className="text-center mb-6">
              <div
                className="w-12 h-12 bg-amber-400/10 border border-amber-400/30 rounded-2xl
                           flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-xl">🔐</span>
              </div>

              <h3 className="text-white font-bold text-base mb-2">
                Sign in to continue
              </h3>

              <p className="text-stone-500 text-xs font-mono leading-relaxed">
                Access your chord library, tuner, lessons and more
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full">
              <Link
                to="/login"
                replace
                onClick={() => setOpenSidebar(false)}
                className="w-full py-2.5 rounded-xl font-mono font-semibold text-sm
                           tracking-widest uppercase text-center
                           bg-amber-400/15 border border-amber-400/50 text-amber-400
                           hover:bg-amber-400/25 transition-all duration-200"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                replace
                onClick={() => setOpenSidebar(false)}
                className="w-full py-2.5 rounded-xl font-mono font-semibold text-sm
                           tracking-widest uppercase text-center
                           bg-stone-800 border border-stone-700 text-stone-300
                           hover:border-stone-500 hover:text-white transition-all duration-200"
              >
                Create Account
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="px-3 py-4 border-t border-stone-800">
            <p className="text-stone-600 font-mono text-[10px] tracking-widest uppercase text-center">
              v1.0.0 — Built for Players
            </p>
          </div>
        </aside>
      </div>

      {/* Background Overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-[1px]"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {children}
    </div>
  );
}
