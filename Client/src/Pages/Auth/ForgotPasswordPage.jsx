import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await api.post("/users/forgotPassword", { email });
      setSuccess(res.data?.message || "Reset link sent! Check your inbox.");
      setEmail("");
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
            Forgot password?
          </h1>
          <p className="text-stone-500 text-sm mt-2">
            Enter your email and we'll send a reset link
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

          {/* Success */}
          {success && (
            <div className="mb-5 px-4 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-start gap-3">
              <span className="text-emerald-400 mt-0.5 text-base">✓</span>
              <p className="text-emerald-400 text-sm font-mono">{success}</p>
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="you@example.com"
                required
                className="bg-stone-800/60 border border-stone-700/60 rounded-xl px-4 py-3
                           text-white placeholder-stone-600 text-sm
                           focus:outline-none focus:border-amber-400/50 focus:bg-stone-800
                           transition-all duration-200"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !!success}
              className="mt-2 py-3 rounded-xl font-mono font-semibold text-sm tracking-widest uppercase
                         bg-amber-400/15 border border-amber-400/50 text-amber-400
                         hover:bg-amber-400/25 hover:border-amber-400
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition-all duration-300 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Reset Link →"
              )}
            </button>
          </form>
        </div>

        {/* Back to login */}
        <p className="text-center text-stone-500 text-sm mt-6">
          Remembered it?{" "}
          <Link
            to="/login"
            className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
          >
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
