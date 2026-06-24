import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // ✅ add useLocation
import { useAuth } from "../../context/useAuth"; // ✅ add useAuth
import api from "../../api/axios";

export default function AddPasswordPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  // ✅ Get email passed from VerifyOTPPage
  const email = location.state?.email;

  const [form, setForm] = useState({ password: "", passwordConfirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  // ✅ Redirect if no email (someone navigated here directly)
  useEffect(() => {
    if (!email) navigate("/signup");
  }, [email, navigate]);

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
    setLoading(true);
    setError("");

    try {
      // ✅ Send email + passwords together
      const res = await api.post("/users/passwordAddition", {
        email, // ← from location.state
        password: form.password,
        passwordConfirm: form.passwordConfirm,
      });
      // ✅ Account created — log in immediately
      login(res.data.data.user, res.data.token);
      navigate("/app", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center px-4 py-10 font-sans">
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp 0.4s ease-out both; }
      `}</style>

      <div className="w-full max-w-md fade-up">
        <div className="text-center mb-8">
          <p className="text-amber-400 text-[10px] font-mono tracking-[0.5em] uppercase mb-2">
            ◈ ChordSense
          </p>
          <h1 className="text-white text-3xl font-bold tracking-tight">
            Almost there
          </h1>
          <p className="text-stone-500 text-sm mt-2">
            Set a password for your account
          </p>
          {/* Step indicator — step 3 active */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-stone-600 text-stone-300 text-xs font-bold font-mono flex items-center justify-center">
                ✓
              </div>
              <span className="text-stone-500 text-xs font-mono">Details</span>
            </div>
            <div className="w-8 h-px bg-stone-600" />
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-stone-600 text-stone-300 text-xs font-bold font-mono flex items-center justify-center">
                ✓
              </div>
              <span className="text-stone-500 text-xs font-mono">Verify</span>
            </div>
            <div className="w-8 h-px bg-stone-600" />
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-amber-400 text-black text-xs font-bold font-mono flex items-center justify-center">
                3
              </div>
              <span className="text-amber-400 text-xs font-mono">Password</span>
            </div>
          </div>
        </div>

        <div className="bg-stone-900 border border-stone-700/60 rounded-2xl p-8 shadow-2xl shadow-black/60">
          {error && (
            <div className="mb-5 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-400 text-sm font-mono">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {[
              {
                name: "password",
                label: "Password",
                placeholder: "Min 8 characters",
              },
              {
                name: "passwordConfirm",
                label: "Confirm Password",
                placeholder: "Repeat password",
              },
            ].map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                <label className="text-stone-400 text-xs font-mono tracking-widest uppercase">
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    minLength={8}
                    className="w-full bg-stone-800/60 border border-stone-700/60 rounded-xl px-4 py-3 pr-16
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
            ))}

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
                  Creating account...
                </>
              ) : (
                "Create Account →"
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-stone-500 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
