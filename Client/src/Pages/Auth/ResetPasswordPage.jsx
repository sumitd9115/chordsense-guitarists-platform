import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../api/axios";

export default function ResetPasswordPage() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({ password: "", passwordConfirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.passwordConfirm) {
      setError("Passwords do not match");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await api.patch(`/users/resetPassword/${token}`, {
        password: form.password,
        passwordConfirm: form.passwordConfirm,
      });
      navigate("/login?reset=success", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  // Derive password strength
  function getStrength(pwd) {
    if (!pwd) return null;
    let score = 0;
    if (pwd.length >= 8) score++;
    if (pwd.length >= 12) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    if (score <= 1)
      return { label: "Weak", color: "bg-red-500", width: "w-1/4" };
    if (score <= 3)
      return { label: "Fair", color: "bg-amber-400", width: "w-2/4" };
    if (score === 4)
      return { label: "Good", color: "bg-emerald-400", width: "w-3/4" };
    return { label: "Strong", color: "bg-emerald-500", width: "w-full" };
  }

  const strength = getStrength(form.password);

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
            Reset password
          </h1>
          <p className="text-stone-500 text-sm mt-2">
            Choose a strong new password
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
            {/* New Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-stone-400 text-xs font-mono tracking-widest uppercase">
                New Password
              </label>
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

              {/* Strength bar */}
              {strength && (
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1 bg-stone-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`}
                    />
                  </div>
                  <span className="text-xs font-mono text-stone-500">
                    {strength.label}
                  </span>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-stone-400 text-xs font-mono tracking-widest uppercase">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="passwordConfirm"
                  value={form.passwordConfirm}
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
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500
                             hover:text-stone-300 transition-colors text-xs font-mono"
                >
                  {showConfirm ? "HIDE" : "SHOW"}
                </button>
              </div>
              {/* Match indicator */}
              {form.passwordConfirm && (
                <p
                  className={`text-xs font-mono mt-0.5 ${
                    form.password === form.passwordConfirm
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {form.password === form.passwordConfirm
                    ? "✓ Passwords match"
                    : "✗ Passwords do not match"}
                </p>
              )}
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
                  Updating...
                </>
              ) : (
                "Update Password →"
              )}
            </button>
          </form>
        </div>

        {/* Back to login */}
        <p className="text-center text-stone-500 text-sm mt-6">
          Remember your password?{" "}
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
