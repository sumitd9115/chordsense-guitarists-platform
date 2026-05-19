import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "", email: "", password: "", passwordConfirm: "",
  });
  const [error, setError]   = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

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
      await api.post("/users/signUp", form);
      // OTP sent — go to verify page with email in state
      navigate("/verify-otp", { state: { email: form.email } });
    } catch (err) {
      setError(err.response?.data?.message || "Enter all fields with valid data!!");
    } finally {
      setLoading(false);
    }
  }

  const fields = [
    { name: "name",            label: "Full Name",       type: "text",     placeholder: "John Doe" },
    { name: "email",           label: "Email",           type: "email",    placeholder: "you@example.com" },
    { name: "password",        label: "Password",        type: "password", placeholder: "Min 8 characters" },
    { name: "passwordConfirm", label: "Confirm Password",type: "password", placeholder: "Repeat password" },
  ];

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

        {/* Brand */}
        <div className="text-center mb-8">
          <p className="text-amber-400 text-[10px] font-mono tracking-[0.5em] uppercase mb-2">
            ◈ ChordSense
          </p>
          <h1 className="text-white text-3xl font-bold tracking-tight">
            Start your journey
          </h1>
          <p className="text-stone-500 text-sm mt-2">
            Create your free account
          </p>
        </div>

        {/* Card */}
        <div className="bg-stone-900 border border-stone-700/60 rounded-2xl p-8 shadow-2xl shadow-black/60">

          {error && (
            <div className="mb-5 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-400 text-sm font-mono">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {fields.map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                <label className="text-stone-400 text-xs font-mono tracking-widest uppercase">
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    type={
                      field.type === "password"
                        ? showPass ? "text" : "password"
                        : field.type
                    }
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-stone-800/60 border border-stone-700/60 rounded-xl px-4 py-3
                               text-white placeholder-stone-600 text-sm
                               focus:outline-none focus:border-amber-400/50 focus:bg-stone-800
                               transition-all duration-200"
                  />
                  {field.type === "password" && (
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500
                                 hover:text-stone-300 transition-colors text-xs font-mono"
                    >
                      {showPass ? "HIDE" : "SHOW"}
                    </button>
                  )}
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
              ) : "Create Account →"}
            </button>
          </form>
        </div>

        <p className="text-center text-stone-500 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}