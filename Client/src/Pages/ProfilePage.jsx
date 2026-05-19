import { useState, useEffect } from "react";
import { useAuth } from "../context/useAuth";
import api from "../api/axios";

const LEVELS = ["Beginner", "Intermediate", "Advanced"];

const levelMeta = {
  Beginner: {
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/10",
    bar: "bg-emerald-400",
    width: "w-1/3",
  },
  Intermediate: {
    color: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/10",
    bar: "bg-amber-400",
    width: "w-2/3",
  },
  Advanced: {
    color: "text-purple-400",
    border: "border-purple-400/30",
    bg: "bg-purple-400/10",
    bar: "bg-purple-400",
    width: "w-full",
  },
};

function getInitials(name = "") {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function Section({ title, children }) {
  return (
    <div className="bg-stone-900 border border-stone-700/60 rounded-2xl p-6 shadow-xl shadow-black/40">
      <h2 className="text-stone-400 text-[10px] font-mono tracking-[0.4em] uppercase mb-5">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-stone-500 text-[10px] font-mono tracking-widest uppercase">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls = `
  bg-stone-800/60 border border-stone-700/60 rounded-xl px-4 py-3
  text-white placeholder-stone-600 text-sm font-mono
  focus:outline-none focus:border-amber-400/50 focus:bg-stone-800
  transition-all duration-200
`;

export default function ProfilePage() {
  const { user, login } = useAuth();

  // ── Profile form ──────────────────────────────────────────
  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    level: user?.level || "Beginner",
  });
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState("");
  const [profileError, setProfileError] = useState("");

  // ── Password form ─────────────────────────────────────────
  const [passwords, setPasswords] = useState({
    currPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });
  const [showCurr, setShowCurr] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passLoading, setPassLoading] = useState(false);
  const [passSuccess, setPassSuccess] = useState("");
  const [passError, setPassError] = useState("");

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || "",
        email: user.email || "",
        level: user.level || "Beginner",
      });
    }
  }, [user]);

  // ── Handlers ──────────────────────────────────────────────
  async function handleProfileSave(e) {
    e.preventDefault();
    setProfileLoading(true);
    setProfileError("");
    setProfileSuccess("");
    try {
      const res = await api.patch(`/users/${user._id}`, {
        name: profile.name,
        level: profile.level,
      });
      login(res.data.data.user, localStorage.getItem("token"));
      setProfileSuccess("Profile updated successfully!");
    } catch (err) {
      setProfileError(err.response?.data?.message || "Something went wrong");
    } finally {
      setProfileLoading(false);
    }
  }

  async function handlePasswordSave(e) {
    e.preventDefault();
    if (passwords.newPassword !== passwords.newPasswordConfirm) {
      setPassError("New passwords do not match");
      return;
    }
    if (passwords.newPassword.length < 8) {
      setPassError("Password must be at least 8 characters");
      return;
    }
    setPassLoading(true);
    setPassError("");
    setPassSuccess("");
    try {
      await api.patch("/users/updatePassword", passwords);
      setPassSuccess("Password changed successfully!");
      setPasswords({ currPassword: "", newPassword: "", newPasswordConfirm: "" });
    } catch (err) {
      setPassError(err.response?.data?.message || "Something went wrong");
    } finally {
      setPassLoading(false);
    }
  }

  function getPasswordStrength(pwd) {
    if (!pwd) return null;
    let score = 0;
    if (pwd.length >= 8) score++;
    if (pwd.length >= 12) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    if (score <= 1) return { label: "Weak", color: "bg-red-500", width: "w-1/4" };
    if (score <= 3) return { label: "Fair", color: "bg-amber-400", width: "w-2/4" };
    if (score === 4) return { label: "Good", color: "bg-emerald-400", width: "w-3/4" };
    return { label: "Strong", color: "bg-emerald-500", width: "w-full" };
  }

  const strength = getPasswordStrength(passwords.newPassword);
  const level = levelMeta[profile.level] || levelMeta["Beginner"];

  return (
    <div className="min-h-screen bg-stone-950 px-6 py-8 font-sans overflow-y-auto">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* ── Header / Avatar ── */}
        <div className="flex items-center gap-5 mb-2">
          <div className="w-16 h-16 rounded-2xl bg-amber-400/15 border border-amber-400/30
                          flex items-center justify-center flex-shrink-0">
            <span className="text-amber-400 text-xl font-mono font-bold tracking-wider">
              {getInitials(user?.name)}
            </span>
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              {user?.name || "Your Profile"}
            </h1>
            <p className="text-stone-500 text-sm font-mono mt-0.5">{user?.email}</p>
          </div>

          {/* Level badge */}
          <div className={`ml-auto px-4 py-1.5 rounded-xl border text-xs font-mono tracking-widest uppercase
                           ${level.color} ${level.border} ${level.bg}`}>
            {profile.level}
          </div>
        </div>

        {/* ── Level bar ── */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-1 bg-stone-800 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-500 ${level.bar} ${level.width}`} />
          </div>
          <span className="text-stone-600 text-[10px] font-mono tracking-widest uppercase">
            {profile.level}
          </span>
        </div>

        {/* ── Edit Profile ── */}
        <Section title="Edit Profile">
          {profileError && (
            <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-400 text-sm font-mono">{profileError}</p>
            </div>
          )}
          {profileSuccess && (
            <div className="mb-4 px-4 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <p className="text-emerald-400 text-sm font-mono">{profileSuccess}</p>
            </div>
          )}

          <form onSubmit={handleProfileSave} className="flex flex-col gap-5">
            <Field label="Display Name">
              <input
                type="text"
                value={profile.name}
                onChange={(e) => {
                  setProfile({ ...profile, name: e.target.value });
                  setProfileError("");
                  setProfileSuccess("");
                }}
                placeholder="Your name"
                className={inputCls}
              />
            </Field>

            <Field label="Email">
              <input
                type="email"
                value={profile.email}
                disabled
                className={`${inputCls} opacity-40 cursor-not-allowed`}
              />
              <p className="text-stone-600 text-[10px] font-mono mt-0.5">
                Email cannot be changed
              </p>
            </Field>

            <Field label="Skill Level">
              <div className="grid grid-cols-3 gap-2">
                {LEVELS.map((lvl) => {
                  const meta = levelMeta[lvl];
                  const isSelected = profile.level === lvl;
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        setProfile({ ...profile, level: lvl });
                        setProfileSuccess("");
                      }}
                      className={`py-2.5 rounded-xl text-xs font-mono tracking-widest uppercase
                                  border transition-all duration-200
                                  ${isSelected
                                    ? `${meta.bg} ${meta.border} ${meta.color}`
                                    : "bg-stone-800/40 border-stone-700/40 text-stone-500 hover:border-stone-600 hover:text-stone-300"
                                  }`}
                    >
                      {lvl}
                    </button>
                  );
                })}
              </div>
            </Field>

            <button
              type="submit"
              disabled={profileLoading}
              className="mt-1 py-3 rounded-xl font-mono font-semibold text-sm tracking-widest uppercase
                         bg-amber-400/15 border border-amber-400/50 text-amber-400
                         hover:bg-amber-400/25 hover:border-amber-400
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition-all duration-300 flex items-center justify-center gap-2"
            >
              {profileLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes →"
              )}
            </button>
          </form>
        </Section>

        {/* ── Change Password ── */}
        <Section title="Change Password">
          {passError && (
            <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-400 text-sm font-mono">{passError}</p>
            </div>
          )}
          {passSuccess && (
            <div className="mb-4 px-4 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <p className="text-emerald-400 text-sm font-mono">{passSuccess}</p>
            </div>
          )}

          <form onSubmit={handlePasswordSave} className="flex flex-col gap-5">
            {/* Current Password */}
            <Field label="Current Password">
              <div className="relative">
                <input
                  type={showCurr ? "text" : "password"}
                  value={passwords.currPassword}
                  onChange={(e) => {
                    setPasswords({ ...passwords, currPassword: e.target.value });
                    setPassError("");
                  }}
                  placeholder="••••••••"
                  required
                  className={`w-full pr-12 ${inputCls}`}
                />
                <button
                  type="button"
                  onClick={() => setShowCurr(!showCurr)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500
                             hover:text-stone-300 transition-colors text-[10px] font-mono"
                >
                  {showCurr ? "HIDE" : "SHOW"}
                </button>
              </div>
            </Field>

            {/* New Password */}
            <Field label="New Password">
              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  value={passwords.newPassword}
                  onChange={(e) => {
                    setPasswords({ ...passwords, newPassword: e.target.value });
                    setPassError("");
                  }}
                  placeholder="••••••••"
                  required
                  className={`w-full pr-12 ${inputCls}`}
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500
                             hover:text-stone-300 transition-colors text-[10px] font-mono"
                >
                  {showNew ? "HIDE" : "SHOW"}
                </button>
              </div>
              {strength && (
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1 bg-stone-700 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`} />
                  </div>
                  <span className="text-[10px] font-mono text-stone-500">{strength.label}</span>
                </div>
              )}
            </Field>

            {/* Confirm New Password */}
            <Field label="Confirm New Password">
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  value={passwords.newPasswordConfirm}
                  onChange={(e) => {
                    setPasswords({ ...passwords, newPasswordConfirm: e.target.value });
                    setPassError("");
                  }}
                  placeholder="••••••••"
                  required
                  className={`w-full pr-12 ${inputCls}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500
                             hover:text-stone-300 transition-colors text-[10px] font-mono"
                >
                  {showConfirm ? "HIDE" : "SHOW"}
                </button>
              </div>
              {passwords.newPasswordConfirm && (
                <p className={`text-[10px] font-mono mt-0.5 ${
                  passwords.newPassword === passwords.newPasswordConfirm
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}>
                  {passwords.newPassword === passwords.newPasswordConfirm
                    ? "✓ Passwords match"
                    : "✗ Passwords do not match"}
                </p>
              )}
            </Field>

            <button
              type="submit"
              disabled={passLoading}
              className="mt-1 py-3 rounded-xl font-mono font-semibold text-sm tracking-widest uppercase
                         bg-amber-400/15 border border-amber-400/50 text-amber-400
                         hover:bg-amber-400/25 hover:border-amber-400
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition-all duration-300 flex items-center justify-center gap-2"
            >
              {passLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Password →"
              )}
            </button>
          </form>
        </Section>

      </div>
    </div>
  );
}
