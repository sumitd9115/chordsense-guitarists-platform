import { useRef } from "react";

// Frequencies of each open string (Hz)
// Low E, A, D, G, B, high e
const OPEN_STRING_FREQ = [82.41, 110.0, 146.83, 196.0, 246.94, 329.63];

// Each fret multiplies frequency by 2^(1/12) — equal temperament
function fretFreq(stringIndex, fret) {
  return OPEN_STRING_FREQ[stringIndex] * Math.pow(2, fret / 12);
}

function pluckString(
  ctx,
  freq,
  startTime,
  duration = 2.5,
  gain = 0.18,
  stringIndex = 0,
) {
  // --- Noise burst (pick attack) ---
  const bufferSize = ctx.sampleRate * 0.05;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  // --- Main oscillator ---
  const osc = ctx.createOscillator();
  osc.type = "sawtooth"; // softer than sawtooth
  osc.frequency.setValueAtTime(freq, startTime);

  // Slight pitch drop = realistic string feel
  osc.frequency.exponentialRampToValueAtTime(freq * 0.995, startTime + 0.08);

  // --- Filters ---
  const lowpass = ctx.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.setValueAtTime(3500 + stringIndex * 400, startTime);

  const bandpass = ctx.createBiquadFilter();
  bandpass.type = "bandpass";
  bandpass.frequency.setValueAtTime(freq * 2, startTime);
  bandpass.Q.value = 1;

  const highpass = ctx.createBiquadFilter();
  highpass.type = "highpass";
  highpass.frequency.setValueAtTime(120, startTime);

  // --- Gain envelope ---
  const gainNode = ctx.createGain();

  gainNode.gain.setValueAtTime(gain, startTime);

  // Natural pluck decay
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  const panner = ctx.createStereoPanner();

  panner.pan.setValueAtTime((Math.random() - 0.5) * 0.3, startTime);

  // Noise envelope
  const noiseGain = ctx.createGain();

  noiseGain.gain.setValueAtTime(0.22, startTime);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.025);

  // Connections
  noise.connect(noiseGain);
  noiseGain.connect(lowpass);

  osc.connect(bandpass);
  bandpass.connect(highpass);
  highpass.connect(lowpass);

  lowpass.connect(gainNode);
  gainNode.connect(panner);
  panner.connect(ctx.destination);

  // Start
  noise.start(startTime);
  noise.stop(startTime + 0.05);

  osc.start(startTime);
  osc.stop(startTime + duration);
}

export function useChordPlayer() {
  const ctxRef = useRef(null);

  function getCtx() {
    if (!ctxRef.current || ctxRef.current.state === "closed") {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    // Resume if suspended (browser autoplay policy)
    if (ctxRef.current.state === "suspended") {
      ctxRef.current.resume();
    }
    return ctxRef.current;
  }

  // Play all strings of a chord with slight strum delay
  function playChord(chord, strumDown = true) {
    const ctx = getCtx();
    const now = ctx.currentTime;
    const strumDelay = 0.1; // 30ms between each string = strum feel

    // Figure out which strings are actually played and at what fret
    const played = []; // { stringIndex, fret }

    // Start with all strings as potentially open
    const stringFrets = [null, null, null, null, null, null]; // null = muted

    // Mark muted strings
    (chord.muted || []).forEach((s) => {
      stringFrets[s] = "muted";
    });

    // Mark open strings
    (chord.open || []).forEach((s) => {
      stringFrets[s] = 0;
    });

    // Mark barre strings
    (chord.barre || []).forEach((b) => {
      for (let s = b.fromString; s <= b.toString; s++) {
        if (stringFrets[s] !== "muted") {
          stringFrets[s] = b.fret;
        }
      }
    });

    // Mark individual finger positions (override barre)
    (chord.fingers || []).forEach((f) => {
      if (stringFrets[f.string] !== "muted") {
        stringFrets[f.string] = f.fret;
      }
    });

    // Build final played list
    stringFrets.forEach((fret, stringIndex) => {
      if (fret !== null && fret !== "muted") {
        played.push({ stringIndex, fret });
      }
    });

    // Strum: low E → high e (down strum) or reverse (up strum)
    const order = strumDown ? played : [...played].reverse();

    order.forEach(({ stringIndex, fret }, i) => {
      const freq = fretFreq(stringIndex, fret);
      const startTime = now + i * strumDelay;
      // Bass strings louder, treble strings slightly quieter
      const gain = stringIndex < 2 ? 0.35 : stringIndex < 4 ? 0.3 : 0.25;
      pluckString(ctx, freq, startTime, 2.5, gain, stringIndex);
    });
  }

  return { playChord };
}
