import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import api from "../../api/axios";

export default function VerifyOTPPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const email = location.state?.email;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const inputs = useRef([]);

  // Redirect if no email passed
  useEffect(() => {
    if (!email) navigate("/signup");
  }, [email, navigate]);

  // Cooldown countdown for resend
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  function handleOtpChange(index, value) {
    if (!/^\d*$/.test(value)) return; // digits only
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // only last char
    setOtp(newOtp);
    setError("");

    // Auto-advance to next input
    if (value && index < 5) inputs.current[index + 1]?.focus();
  }

  function handleKeyDown(index, e) {
    // Backspace on empty → go back
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  }

  function handlePaste(e) {
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (pasted.length === 6) {
      setOtp(pasted.split(""));
      inputs.current[5]?.focus();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const otpString = otp.join("");
    if (otpString.length < 6) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await api.post("/users/verifyOTP", {
        email,
        otp: otpString,
      });
      login(res.data.data.user, res.data.token);
      navigate("/home", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
      setOtp(["", "", "", "", "", ""]);
      inputs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    if (cooldown > 0) return;
    setResending(true);
    setError("");

    try {
      await api.post("/users/resendOTP", { email });
      setCooldown(60); // 60 second cooldown
      setOtp(["", "", "", "", "", ""]);
      inputs.current[0]?.focus();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to resend OTP");
    } finally {
      setResending(false);
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
          <div
            className="w-14 h-14 bg-amber-400/10 border border-amber-400/30 rounded-2xl
                          flex items-center justify-center mx-auto mb-4"
          >
            <span className="text-2xl">📬</span>
          </div>
          <h1 className="text-white text-3xl font-bold tracking-tight">
            Check your email
          </h1>
          <p className="text-stone-500 text-sm mt-2 leading-relaxed">
            We sent a 6-digit code to
            <br />
            <span className="text-amber-400 font-mono">{email}</span>
          </p>
        </div>

        {/* Card */}
        <div className="bg-stone-900 border border-stone-700/60 rounded-2xl p-8 shadow-2xl shadow-black/60">
          {error && (
            <div className="mb-5 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-400 text-sm font-mono">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* OTP Boxes */}
            <div className="flex gap-3 justify-center" onPaste={handlePaste}>
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (inputs.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={`
                    w-12 h-14 text-center text-xl font-bold font-mono rounded-xl border
                    bg-stone-800/60 text-white
                    focus:outline-none transition-all duration-200
                    ${
                      digit
                        ? "border-amber-400/60 bg-amber-400/5 text-amber-400"
                        : "border-stone-700/60 focus:border-amber-400/40"
                    }
                  `}
                />
              ))}
            </div>

            {/* Verify button */}
            <button
              type="submit"
              disabled={loading || otp.join("").length < 6}
              className="py-3 rounded-xl font-mono font-semibold text-sm tracking-widest uppercase
                         bg-amber-400/15 border border-amber-400/50 text-amber-400
                         hover:bg-amber-400/25 hover:border-amber-400
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition-all duration-300 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify Email →"
              )}
            </button>
          </form>

          {/* Resend */}
          <div className="mt-5 text-center">
            <p className="text-stone-500 text-sm">
              Didn't receive the code?{" "}
              <button
                onClick={handleResend}
                disabled={cooldown > 0 || resending}
                className="text-amber-400 hover:text-amber-300 transition-colors font-medium
                           disabled:text-stone-600 disabled:cursor-not-allowed"
              >
                {resending
                  ? "Sending..."
                  : cooldown > 0
                    ? `Resend in ${cooldown}s`
                    : "Resend OTP"}
              </button>
            </p>
          </div>
        </div>

        <p className="text-center text-stone-500 text-sm mt-6">
          Wrong email?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
          >
            Go back
          </button>
        </p>
      </div>
    </div>
  );
}
