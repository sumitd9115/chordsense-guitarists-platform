const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const chordProgressions = require("../models/generatedChordsModel.js");

exports.generateProgression = catchAsync(async (req, res, next) => {
  const { key, mood, genre, difficulty, numChords, timeSignature } = req.body;

  // ── Validate inputs ───────────────────────────────────────────────────────
  if (!key || !mood || !genre || !difficulty || !numChords || !timeSignature) {
    return next(new AppError("Please provide all fields", 400));
  }

  // ── Build the prompt ──────────────────────────────────────────────────────
  // This is the most important part — the more specific you are,
  // the better and more consistent Gemini's output will be.
  const prompt = `
You are an expert music theory teacher and guitarist.
Generate a guitar chord progression based on these parameters:
- Key: ${key}
- Mood: ${mood}
- Genre: ${genre}
- Difficulty: ${difficulty}
- Number of chords: ${numChords}
- Time signature: ${timeSignature}

Respond with ONLY a valid JSON object. No markdown, no explanation outside the JSON.
Use exactly this structure:
{
  "progression": ["chord1", "chord2", "chord3", "chord4"],
  "explanation": "Why this progression works musically (2-3 sentences)",
  "strummingPattern": "e.g. D DU UDU or fingerpicking description",
  "bpm": 120,
  "songs": [
    { "title": "Song Name", "artist": "Artist Name" },
    { "title": "Song Name", "artist": "Artist Name" }
  ],
  "theoryTip": "One practical music theory insight about this progression"
}`;

  // ── Call Gemini API ───────────────────────────────────────────────────────
  const geminiRes = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7, // 0=predictable, 1=creative. 0.7 is balanced
          maxOutputTokens: 2048, // enough for our JSON
          responseMimeType: "application/json",
        },
      }),
    },
  );

  if (!geminiRes.ok) {
    const errorBody = await geminiRes.text();

    console.error("Gemini API Error:");
    console.error("Status:", geminiRes.status);
    console.error(errorBody);
    console.log(process.env.GEMINI_API_KEY);

    return next(new AppError(`Gemini API Error: ${geminiRes.status}`, 502));
  }

  const geminiData = await geminiRes.json();
  const rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!rawText) {
    return next(new AppError("No response from Gemini", 502));
  }

  const cleaned = rawText.replace(/```json|```/g, "").trim();

  let progression;
  try {
    console.log("========== GEMINI RESPONSE ==========");
    console.dir(rawText, { maxArrayLength: null });
    console.log(rawText.length);
    console.log("====================================");
    if (!cleaned.endsWith("}")) {
      console.error("Incomplete JSON:");
      console.error(cleaned);
      console.log(geminiData.candidates?.[0]?.finishReason);

      return next(new AppError("Gemini response was truncated", 502));
    }

    console.log(geminiData.candidates?.[0]?.finishReason);
    console.log(JSON.stringify(geminiData, null, 2));
    progression = JSON.parse(cleaned);
  } catch {
    return next(new AppError("Gemini returned invalid JSON. Try again.", 502));
  }

  // ── Return to frontend ───────────────────────────────────────────────────
  res.status(200).json({
    success: true,
    data: {
      progression,
      inputs: { key, mood, genre, difficulty, numChords, timeSignature },
    },
  });
});

exports.saveProg = catchAsync(async (req, res, next) => {
  const { inputs, result } = req.body;

  const progression = await chordProgressions.create({
    user: req.user._id,
    name: `${inputs.mood} ${inputs.genre} Progression`,
    inputs: inputs,
    result: result,
  });

  res.status(201).json({
    status: "success",
    data: progression,
  });
});

exports.getMyProg = catchAsync(async (req, res, next) => {
  const progressions = await chordProgressions
    .find({
      user: req.user._id,
    })
    .sort("-createdAt");

  res.status(200).json({
    status: "success",
    data: progressions,
  });
});

exports.getOneProg = catchAsync(async (req, res, next) => {
  const progression = await chordProgressions.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: progression,
  });
});