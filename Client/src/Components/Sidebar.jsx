import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiMusic,
  FiBookOpen,
  FiSliders,
  FiLogOut,
  FiUser,
  FiHome,
  FiTrendingUp,
} from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

import { useAuth } from "../context/useAuth";
import { Link } from "react-router-dom";
import api from "../api/axios";

const navItems = [
  { label: "Home", icon: FiHome, path: "/home" },
  { label: "Guitar Tuner", icon: FiSliders, path: "/guitar-tuner" },
  { label: "Learning Section", icon: FiBookOpen, path: "/learning-section" },
  { label: "Chord Library", icon: FiMusic, path: "/chord-library" },
  { label: "Harmony Forge", icon: FiTrendingUp, path: "/chord-prog-gen" },
  { label: "Sense AI", icon: FaRobot, path: "/ai-assistant" },
  { label: "Profile", icon: FiUser, path: "/profile" },
];

export default function Sidebar({ onClose }) {
  const [hovered, setHovered] = useState(null);
  const [loggingOut, setLoggingOut] = useState(false);

  const { logout } = useAuth();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setLoggingOut(true);

    try {
      await api.post("/users/logout");
    } catch (_) {
      // even if it fails, clear local state
    } finally {
      logout();
      navigate("/");
    }
  }

  return (
    <aside
      className="h-full w-64 bg-stone-950 border-r border-stone-800
                 flex flex-col rounded-r-2xl shadow-2xl shadow-black/60"
    >
      {/* Brand */}
      <div className="px-6 py-7 border-b border-stone-800">
        <p className="text-amber-400 font-mono text-xs tracking-[0.35em] uppercase mb-1">
          ◈ ChordSense
        </p>

        <p className="text-stone-500 font-mono text-[10px] tracking-widest uppercase">
          Guitarist&apos;s Companion
        </p>
      </div>

      {isAuthenticated && (
        <>
          <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
            {navItems.map(({ label, icon: Icon, path }, i) => (
              <NavLink
                key={label}
                to={path}
                end={path === "/"}
                onClick={onClose}
                onMouseEnter={() => setHovered(label)}
                onMouseLeave={() => setHovered(null)}
                style={{ animationDelay: `${i * 40}ms` }}
                className={({ isActive }) => `
              relative w-full flex items-center gap-3 px-4 py-2.5 rounded-xl
              font-mono text-sm tracking-wide transition-all duration-200
              border group overflow-hidden
              ${
                isActive
                  ? "bg-amber-400/10 text-amber-400 border-amber-400/30"
                  : "text-stone-400 hover:text-white hover:bg-stone-800/70 border-transparent"
              }
            `}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-amber-400 rounded-r-full" />
                    )}
                    <Icon
                      className={`text-base flex-shrink-0 transition-transform duration-200
                    ${
                      isActive
                        ? "text-amber-400"
                        : "text-stone-500 group-hover:text-amber-400"
                    }
                    ${hovered === label && !isActive ? "scale-110" : ""}
                  `}
                    />
                    <span>{label}</span>
                    {hovered === label && !isActive && (
                      <span className="ml-auto text-amber-400/60 text-xs">
                        ›
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Footer + Logout */}
          <div className="px-3 py-4 border-t border-stone-800 space-y-3">
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              onMouseEnter={() => setHovered("logout")}
              onMouseLeave={() => setHovered(null)}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl
                     font-mono text-sm tracking-wide transition-all duration-200
                     text-stone-500 hover:text-red-400 hover:bg-red-500/10
                     border border-transparent hover:border-red-500/20
                     disabled:opacity-40 disabled:cursor-not-allowed group"
            >
              {loggingOut ? (
                <div className="w-4 h-4 border-2 border-stone-500 border-t-transparent rounded-full animate-spin" />
              ) : (
                <FiLogOut
                  className={`text-base flex-shrink-0 transition-transform duration-200
                ${
                  hovered === "logout"
                    ? "scale-110 text-red-400"
                    : "text-stone-500"
                }
              `}
                />
              )}

              <span>{loggingOut ? "Signing out..." : "Log out"}</span>
            </button>
            <p className="text-stone-600 font-mono text-[10px] tracking-widest uppercase text-center">
              v1.0.0 — Built for Players
            </p>
          </div>
        </>
      )}
      {!isAuthenticated && (
        <>
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
                // onClick={() => setOpenSidebar(false)}
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
                // onClick={() => setOpenSidebar(false)}
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
        </>
      )}
    </aside>
  );
}
