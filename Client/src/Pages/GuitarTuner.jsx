import { useState, useEffect, useRef } from "react";
import GuitarHole from "../assets/Guitar-Hole_01.png";

const STRINGS = [
  { id: 0, name: "Low E", note: "E2", freq: 82.41, color: "#f59e0b" },
  { id: 1, name: "A", note: "A2", freq: 110.0, color: "#f59e0b" },
  { id: 2, name: "D", note: "D3", freq: 146.83, color: "#fbbf24" },
  { id: 3, name: "G", note: "G3", freq: 196.0, color: "#fbbf24" },
  { id: 4, name: "B", note: "B3", freq: 246.94, color: "#fcd34d" },
  { id: 5, name: "High E", note: "E4", freq: 329.63, color: "#fcd34d" },
];

const STRING_Y_POSITIONS = [62, 57, 52, 47, 43, 36];

function getNoteStatus(detectedFreq, targetFreq) {
  if (!detectedFreq) return null;
  const cents = 1200 * Math.log2(detectedFreq / targetFreq);
  if (Math.abs(cents) < 5)
    return { status: "intune", cents, label: "✓ In Tune", color: "#4ade80" };
  if (cents < 0)
    return { status: "flat", cents, label: "▼ Too Flat", color: "#f87171" };
  return { status: "sharp", cents, label: "▲ Too Sharp", color: "#60a5fa" };
}

function getAutoCorrelationFreq(buffer, sampleRate) {
  const SIZE = buffer.length;
  const MAX_SAMPLES = Math.floor(SIZE / 2);
  let bestOffset = -1,
    bestCorrelation = 0,
    rms = 0;
  for (let i = 0; i < SIZE; i++) rms += buffer[i] * buffer[i];
  rms = Math.sqrt(rms / SIZE);
  if (rms < 0.01) return null;
  let lastCorrelation = 1;

  for (let offset = 0; offset < MAX_SAMPLES; offset++) {
    let correlation = 0;
    for (let i = 0; i < MAX_SAMPLES; i++)
      correlation += Math.abs(buffer[i] - buffer[i + offset]);
    correlation = 1 - correlation / MAX_SAMPLES;
    if (
      correlation > 0.9 &&
      correlation > lastCorrelation &&
      correlation > bestCorrelation
    ) {
      bestCorrelation = correlation;
      bestOffset = offset;
    }
    lastCorrelation = correlation;
  }
  return bestOffset !== -1 ? sampleRate / bestOffset : null;
}

export default function GuitarTuner() {
  const [listening, setListening] = useState(false);
  const [activeString, setActiveString] = useState(null);
  const [detectedFreq, setDetectedFreq] = useState(null);
  const [blinking, setBlinking] = useState(null);
  const [noteStatus, setNoteStatus] = useState(null);

  const audioCtxRef = useRef(null);
  const animFrameRef = useRef(null);
  const streamRef = useRef(null);

  const detectClosestString = (freq) => {
    if (!freq) return null;
    let closest = null,
      minDist = Infinity;
    STRINGS.forEach((s) => {
      const dist = Math.abs(freq - s.freq);
      if (dist < minDist) {
        minDist = dist;
        closest = s;
      }
    });
    return minDist < 30 ? closest : null;
  };

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      audioCtxRef.current = ctx;
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      ctx.createMediaStreamSource(stream).connect(analyser);
      setListening(true);
      detectLoop(analyser, ctx.sampleRate);
    } catch {
      alert("Microphone access denied.");
    }
  };

  const stopListening = () => {
    cancelAnimationFrame(animFrameRef.current);
    streamRef.current?.getTracks().forEach((t) => t.stop());
    audioCtxRef.current?.close();
    setListening(false);
    setDetectedFreq(null);
    setActiveString(null);
    setBlinking(null);
    setNoteStatus(null);
  };

  const detectLoop = (analyser, sampleRate) => {
    const buffer = new Float32Array(analyser.fftSize);
    const loop = () => {
      analyser.getFloatTimeDomainData(buffer);
      const freq = getAutoCorrelationFreq(buffer, sampleRate);
      if (freq && freq > 70 && freq < 400) {
        setDetectedFreq(Math.round(freq * 10) / 10);
        const matched = detectClosestString(freq);
        if (matched) {
          setActiveString(matched.id);
          setBlinking(matched.id);
          setNoteStatus(getNoteStatus(freq, matched.freq));
        }
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };
    animFrameRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => () => stopListening(), []);

  const status = activeString !== null ? noteStatus : null;

  return (
    <div className="relative w-full h-screen font-mono overflow-hidden">
      <style>{`
        @keyframes stringPulse {
          0%   { opacity: 1; transform: scaleY(4); }
          60%  { opacity: 0.8; transform: scaleY(2); }
          100% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>

      <img
        src={GuitarHole}
        alt="Guitar"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-20
                      bg-stone-950/80 backdrop-blur-md
                      rounded-b-2xl border-x border-b border-stone-700/60
                      px-10 py-4 text-center shadow-xl shadow-black/40"
      >
        <h1 className="text-white text-2xl font-bold tracking-tight">
          Guitar Tuner
        </h1>
        <p className="text-stone-400 text-[10px] tracking-[0.35em] uppercase mt-0.5">
          Standard Tuning — E A D G B E
        </p>
        {detectedFreq && (
          <p className="text-amber-400 text-sm font-bold mt-1">
            {detectedFreq}{" "}
            <span className="text-stone-400 text-xs font-normal">Hz</span>
          </p>
        )}
      </div>

      {STRINGS.map((s, i) => (
        <div
          key={s.id}
          className="absolute left-0 right-0 pointer-events-none transition-all duration-150 z-10"
          style={{
            top: `${STRING_Y_POSITIONS[i]}%`,
            height: i < 2 ? "3px" : i < 4 ? "2px" : "1.5px",
            background:
              blinking === s.id
                ? status?.color || s.color
                : "rgba(255,255,255,0.07)",
            boxShadow:
              blinking === s.id
                ? `0 0 14px 5px ${status?.color || s.color}`
                : "none",
            borderRadius: "2px",
            animation: blinking === s.id ? "stringPulse 0.4s ease-out" : "none",
          }}
        />
      ))}

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                      flex flex-col gap-1.5
                      bg-stone-950/80 backdrop-blur-md
                      border-y border-l border-stone-700/60
                      rounded-l-2xl p-3 shadow-2xl shadow-black/50"
      >
        {STRINGS.map((s) => {
          const isActive = activeString === s.id;
          const st = isActive ? status : null;
          return (
            <div
              key={s.id}
              className={`
                flex flex-col items-center px-3 py-2 rounded-xl border transition-all duration-300 min-w-[84px]
                ${
                  isActive
                    ? "border-amber-400/60 bg-amber-400/10 shadow-md shadow-amber-400/20"
                    : "border-stone-700/60 bg-stone-900/40"
                }
              `}
            >
              <span
                className={`text-xs font-bold tracking-widest uppercase ${isActive ? "text-amber-400" : "text-stone-400"}`}
              >
                {s.name}
              </span>
              <span
                className={`text-[10px] ${isActive ? "text-amber-300/70" : "text-stone-600"}`}
              >
                {s.note}
              </span>

              {isActive && st ? (
                <div className="mt-1.5 flex flex-col items-center gap-1 w-full">
                  <span
                    className="text-[11px] font-bold tracking-wide"
                    style={{ color: st.color }}
                  >
                    {st.label}
                  </span>
                  <div className="w-full h-1.5 bg-stone-700/60 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-200"
                      style={{
                        width: `${Math.min(100, Math.abs(st.cents) * 2)}%`,
                        marginLeft: st.cents < 0 ? 0 : "auto",
                        background: st.color,
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-1.5 w-full h-1.5 bg-stone-800/50 rounded-full" />
              )}
            </div>
          );
        })}
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20
                      bg-stone-950/80 backdrop-blur-md
                      rounded-t-2xl border-x border-t border-stone-700/60
                      px-10 py-4 text-center shadow-xl shadow-black/40
                      flex flex-col items-center gap-2"
      >
        <button
          onClick={listening ? stopListening : startListening}
          className={`
            px-8 py-2.5 rounded-full font-mono font-semibold text-sm tracking-widest uppercase
            transition-all duration-300 border
            ${
              listening
                ? "bg-red-500/15 border-red-500/50 text-red-400 hover:bg-red-500/25"
                : "bg-amber-400/15 border-amber-400/50 text-amber-400 hover:bg-amber-400/25"
            }
          `}
        >
          {listening ? "⏹ Stop Tuner" : "🎙 Start Tuner"}
        </button>
      </div>
    </div>
  );
}
