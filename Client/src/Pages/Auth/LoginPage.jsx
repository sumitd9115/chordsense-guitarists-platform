import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import api from "../../api/axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/users/login", form);
      login(res.data.data.user, res.data.token);
      navigate("/home", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center px-4 font-sans">
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp 0.4s ease-out both; }
      `}</style>

      <div className="w-full max-w-md fade-up">
        {/* Brand */}
        <div className="text-center mb-8">
          <p className="text-amber-400 text-[10px] font-mono tracking-[0.5em] uppercase mb-2">
            ◈ ChordSense
          </p>
          <h1 className="text-white text-3xl font-bold tracking-tight">
            Welcome back
          </h1>
          <p className="text-stone-500 text-sm mt-2">
            Sign in to continue your journey
          </p>
        </div>

        {/* Card */}
        <div className="bg-stone-900 border border-stone-700/60 rounded-2xl p-8 shadow-2xl shadow-black/60">
          {/* Error */}
          {error && (
            <div className="mb-5 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-400 text-sm font-mono">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-stone-400 text-xs font-mono tracking-widest uppercase">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="bg-stone-800/60 border border-stone-700/60 rounded-xl px-4 py-3
                           text-white placeholder-stone-600 text-sm
                           focus:outline-none focus:border-amber-400/50 focus:bg-stone-800
                           transition-all duration-200"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-stone-400 text-xs font-mono tracking-widest uppercase">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-amber-400/70 text-xs hover:text-amber-400 transition-colors font-mono"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full bg-stone-800/60 border border-stone-700/60 rounded-xl px-4 py-3 pr-12
                             text-white placeholder-stone-600 text-sm
                             focus:outline-none focus:border-amber-400/50 focus:bg-stone-800
                             transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500
                             hover:text-stone-300 transition-colors text-xs font-mono"
                >
                  {showPass ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 py-3 rounded-xl font-mono font-semibold text-sm tracking-widest uppercase
                         bg-amber-400/15 border border-amber-400/50 text-amber-400
                         hover:bg-amber-400/25 hover:border-amber-400
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition-all duration-300 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In →"
              )}
            </button>
          </form>
        </div>

        {/* Sign up link */}
        <p className="text-center text-stone-500 text-sm mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
