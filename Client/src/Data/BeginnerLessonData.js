// MODULE 1
// Guitar Anatomy
import partsofguitarimg from "../assets/Beginner/parts-of-guitar.png";
import stringsofguitarimg from "../assets/Beginner/strings-of-guitar.jpg";
import typesofguitarimg from "../assets/Beginner/types-of-guitar.jpg";
// How to hold a guitar
import sittingposition from "../assets/Beginner/sitting-position.png";
import standingstrap from "../assets/Beginner/standing-with-strap.png";
import guitarfretting from "../assets/Beginner/Guitar-Fretting.jpg";
import pickinghand from "../assets/Beginner/picking-hand-position.png";
// Reading Guitar tabs
import tabletureguitar from "../assets/Beginner/Tablature-Guitar.png";
import stringlinesfretnums from "../assets/Beginner/string-lines-fret-nums.jpg";
import basictabsymbols from "../assets/Beginner/basic-tab-symbols.png";
// How to tune guitar
import standardtuning from "../assets/Beginner/standard-tuning.webp";
import usingtuner from "../assets/Beginner/using-tuner.jpg";
import eartuning from "../assets/Beginner/ear-tuning.png";
// Your first sounds
import pickingsinglestrings from "../assets/Beginner/picking-single-strings.jpg";
import fingerexercise from "../assets/Beginner/finger-exercise.jpg";
import lefthandind from "../assets/Beginner/left-hand-independence.webp";

// MODULE 2
// Open Chords
import fivemajor from "../assets/Beginner/five-major-chords.png";
import threeminor from "../assets/Beginner/three-minor-chords.jpg";
// Open Chords - Minor
import eminor from "../assets/Beginner/E-minor.jpg";
import aminor from "../assets/Beginner/A-minor.jpg";
import dminor from "../assets/Beginner/D-minor.jpg";
// 4 Magic Chords
import gdec from "../assets/Beginner/gdec.png";

// MODULE 3
// Understanding Beat and Tempo
import beat from "../assets/Beginner/beat.png";
import bpm from "../assets/Beginner/bpm.png";
// Basic Strumming Patterns
import updown from "../assets/Beginner/up-down.webp";
// Using a Pick vs Fingers
import plectrum from "../assets/Beginner/plectrum.jpg";

// MODULE 4
// Notes on Fretboard
import naturalnotes from "../assets/Beginner/natural-notes.png";
import aestringnotes from "../assets/Beginner/a-e-string-note.png";
// Sharps Flats
import sharpFlats from "../assets/Beginner/sharps-flats.webp";
// Major Scale Introduction
import scale from "../assets/Beginner/scale.jpg";

export const Beginner = {
  // ── MODULE 1: Getting Started ────────────────────────────────────
  "Guitar Anatomy": [
    {
      title: "Parts of Guitar",
      img: partsofguitarimg,
      info: `Every guitar — acoustic or electric — is built around three main sections: the Headstock, the Neck, and the Body. Understanding each part helps you communicate with other musicians, care for your instrument, and understand how sound is made.
 
<u> <b> HEADSTOCK </b> </u>
The headstock sits at the very top of the guitar. It holds the tuning pegs (also called machine heads), which you turn to tighten or loosen each string. Tightening raises the pitch; loosening lowers it. The nut — a small notched piece of plastic or bone — sits at the base of the headstock where it meets the neck. The nut spaces the strings evenly and keeps them at the right height.
 
<u> <b> NECK </b> </u>
The neck is the long, thin piece of wood connecting the headstock to the body. It is where your fretting hand works. On the face of the neck is the fretboard (also called the fingerboard) — a flat surface usually made of rosewood, maple, or ebony. Embedded into the fretboard are metal strips called frets. Pressing a string behind a fret shortens its vibrating length, raising its pitch. Most guitars have 20 to 22 frets. Inside the neck runs a metal rod called the truss rod, which keeps the neck straight against string tension.
 
<u> <b>  BODY </b> </u>
The body is the large section you rest against your body. On an acoustic guitar, the body contains the sound hole — a circular opening that projects the vibrating sound outward. The bridge is glued to the top of the body and anchors the strings. The saddle (a small strip inside the bridge) is the last contact point for the strings before they travel up the neck. On electric guitars, the body holds the pickups (which convert string vibration to electrical signal), the volume and tone knobs, the pickup selector switch, and the output jack where you plug in your cable.
 
<u> <b> KEY PARTS SUMMARY </b> </u>
- Tuning Pegs → tune each string up or down
- Nut → spaces strings, defines the start of the fretboard
- Neck → where your fretting hand lives
- Fretboard → the playing surface on the neck
- Frets → metal strips that define each note
- Truss Rod → keeps the neck straight (inside the neck)
- Body → resonates sound and holds all hardware
- Sound Hole → projects acoustic sound (acoustic only)
- Bridge → anchors the strings to the body
- Pickups → capture string vibration (electric only)`,
    },
    {
      title: "String Names (EADGBE)",
      img: stringsofguitarimg,
      info: `A standard guitar has 6 strings. Each string has a name, a number, a note, and a specific thickness (gauge). Knowing this is the very first thing every guitarist must memorize.
 
<u> <b> STRING NAMES AND NUMBERS </b> </u>
Strings are numbered 1 through 6. Here is the key fact that confuses most beginners: String 1 is the thinnest string (at the bottom when you hold the guitar), and String 6 is the thickest string (at the top). The numbering goes from thinnest to thickest.
 
<u> <b> THE NOTES — EADGBE </b> </u>
From the thickest string (6th) to the thinnest (1st), the open string notes are:
 
  6th string → E (lowest pitch, thickest)
  5th string → A
  4th string → D
  3rd string → G
  2nd string → B
  1st string → E (highest pitch, thinnest)
 
This is called Standard Tuning. Almost all beginner lessons, songs, and tutorials are written in standard tuning.
 
<u> <b> HOW TO REMEMBER THEM </b> </u>
A classic memory trick: "Eddie Ate Dynamite, Good Bye Eddie"
E - A - D - G - B - E  (read from the 6th string down to the 1st)
 
<u> <b> WHY THIS SPECIFIC TUNING? </b> </u>
Standard tuning uses mostly Perfect 4th intervals between strings (E→A→D→G), with one Major 3rd between G and B. This single exception makes common chord shapes physically comfortable to play. Without it, basic chords like C and G would require an awkward finger stretch.
 
<u> <b> EXACT FREQUENCIES </b> </u>
  6th (E2) → 82.41 Hz
  5th (A2) → 110 Hz
  4th (D3) → 146.83 Hz
  3rd (G3) → 196 Hz
  2nd (B3) → 246.94 Hz
  1st (E4) → 329.63 Hz
 
<u> <b> STRING GAUGES </b> </u>
Strings also vary by thickness, measured in thousandths of an inch. Light gauge strings (like .009 or .010 sets) are easier to press and bend — perfect for beginners. Heavier gauges produce a fuller, louder tone but need more finger strength. Most beginner guitars come with a .010 or .011 set.
 
<u> <b> WHEN TO CHANGE STRINGS </b> </u>
Change your strings when they look dull/dark, feel rough or sticky, or when your guitar won't stay in tune. Fresh strings make a guitar significantly easier and more enjoyable to play.`,
    },
    {
      title: "Types of Guitar",
      img: typesofguitarimg,
      info: `Guitars come in several types, each designed for different sounds and playing styles. Choosing the right type as a beginner directly affects how fast you progress.
 
<u> <b> ACOUSTIC GUITAR </b> </u>
Acoustic guitars produce sound entirely through the vibration of the strings and the resonance of the hollow wooden body — no electricity needed. They come in two main varieties:
 
  Steel-String Acoustic: The most common type. Bright, loud, and versatile. Used in pop, rock, country, folk, and blues. Steel strings are harder on beginner fingers initially, but calluses build within a few weeks.
 
  Classical / Nylon-String: Uses nylon strings instead of steel. Softer on fingers, wider neck, and a warm, mellow tone. Standard for classical music and flamenco. The wider neck can be harder for small hands.
 
Best for beginners who: want to play without any extra equipment, or love acoustic sounds in singer-songwriter, folk, or country styles.
 
<u> <b> ELECTRIC GUITAR </b> </u>
Electric guitars use magnetic pickups to convert string vibration into an electrical signal, which is sent to an amplifier. The body is usually solid wood (solid body), producing very little sound without amplification. They have thinner strings and lower action (string height), making them physically easier to press down than acoustics.
 
Iconic styles include the Fender Stratocaster, Fender Telecaster, and Gibson Les Paul.
 
Best for beginners who: want to play rock, metal, blues, or jazz, and don't mind investing in an amplifier too.
 
<u> <b> SEMI-HOLLOW / HOLLOW BODY ELECTRIC </b> </u>
These have a partially or fully hollow body combined with electric pickups. They produce a warm, resonant tone with some natural acoustic projection. Popular in jazz, blues, and rockabilly.
 
<u> <b> BASS GUITAR </b> </u>
The bass guitar has 4 strings (usually E, A, D, G — an octave lower than a standard guitar) and provides the low-end foundation in a band. It's played differently from a regular guitar and is its own instrument.
 
<u> <b> WHICH SHOULD YOU START WITH? </b> </u>
If you're unsure: start with a steel-string acoustic. It builds finger strength faster, requires no extra gear, and teaches you the fundamentals that transfer to any other guitar type. If you already know you want to play a specific style (rock, metal), go electric from the start.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "How To Hold The Guitar": [
    {
      title: "Sitting Position",
      img: sittingposition,
      info: `Proper posture from day one prevents bad habits, reduces fatigue, and protects you from long-term injury. Most beginners ignore posture — don't make that mistake.
 
<u> <b> CLASSICAL POSITION </b> </u>
Rest the waist of the guitar on your left leg (if right-handed). The neck tilts upward at roughly 45 degrees. Your back is straight. This position gives your fretting hand maximum reach across the neck. Classical guitarists and many fingerstyle players prefer this.
 
<u> <b> CASUAL / POPULAR POSITION </b> </u>
Rest the guitar on your right leg (if right-handed). The guitar sits more horizontally. This is the most common position for beginners and acoustic players. Make sure the guitar doesn't slope downward — the headstock should be at least at shoulder height.
 
<u> <b> GENERAL POSTURE RULES </b> </u>
- Sit on the edge of a chair, not slouched back
- Both feet flat on the floor (or use a footstool under your left foot)
- Keep your back straight — don't hunch over the guitar to see your fingers
- The guitar body should rest against your chest naturally
- Your strumming arm rests over the top curve of the guitar body
 
<u> <b> FRETTING HAND POSITION </b> </u>
- Thumb rests behind the neck, roughly opposite your middle finger
- Fingers curl over the fretboard from above
- Press strings with your fingertips, not the flat pad of your fingers
- Keep your fingernails short on the fretting hand — long nails prevent proper fingertip contact
- Leave a small gap between your palm and the neck for leverage
 
<u> <b> PICKING HAND POSITION </b> </u>
- Rest your forearm lightly on the top curve of the guitar body
- Your hand should hover over the sound hole (acoustic) or pickups (electric)
- Keep your wrist relaxed — tension kills speed and accuracy
 
<u> <b> COMMON BEGINNER MISTAKES </b> </u>
- Wrapping the thumb over the top of the neck (limits reach severely)
- Hunching over to watch your fingers (causes back and neck pain)
- Gripping the neck too tightly (causes fatigue and muffled notes)
- Letting the guitar slip downward (makes everything harder)`,
    },
    {
      title: "Standing With A Strap",
      img: standingstrap,
      info: `Once you progress to performing or just want to practice standing up, your strap and standing technique become important.
 
<u> <b> USING A STRAP </b> </u>
Attach the strap to both strap buttons on the guitar — one on the bottom of the body, and one on the upper bout (or the heel of the neck, on acoustics). Make sure the strap is securely attached before letting go of the guitar. Strap locks are small accessories that prevent straps from accidentally coming off — worth investing in.
 
<u> <b> IDEAL GUITAR HEIGHT WHILE STANDING </b> </u>
The guitar should hang at roughly the same height as when you were sitting. A common beginner mistake is wearing the guitar very low (like a rock star pose) — this severely limits your fretting hand's reach and causes wrist strain. If you cannot comfortably reach the lower frets while standing, shorten your strap.
 
<u> <b> RULE OF THUMB </b> </u>
When standing, the body of the guitar should be roughly at hip-to-waist level. Your fretting hand should feel just as comfortable as when sitting.
 
<u> <b> BODY BALANCE </b> </u>
Let your strumming arm rest over the guitar body. Don't hold the guitar up with your fretting hand — the strap should support all the weight. Your fretting hand should be completely free to move along the neck without supporting the instrument.
 
<u> <b> MOVEMENT AND PERFORMANCE </b> </u>
Once comfortable, you can move naturally while playing. The key is that your fretting hand technique should not change between sitting and standing. If it does, your sitting posture needs adjustment.`,
    },
    {
      title: "Fretting Hand Position",
      img: guitarfretting,
      info: `Your fretting hand is responsible for every note and chord you play. Correct technique from the start prevents injury and accelerates your progress dramatically.
 
<u> <b> THUMB PLACEMENT </b> </u>
Rest your thumb on the back of the neck, roughly behind your middle finger. The thumb acts as a support and pivot point — not a gripping tool. Keep it pointing roughly upward (not lying flat along the neck). This allows your fingers to arch over the fretboard naturally.
 
<u> <b> FINGER ARCH </b> </u>
Curl your fingers so they approach the strings from above, pressing with the very tips of your fingers. Flat fingers accidentally mute adjacent strings, causing buzzing and dead notes. The arch creates space under your fingers so only the intended string is touched.
 
<u> <b> FINGERNAILS </b> </u>
Keep fretting hand fingernails cut very short — flush with the fingertip. Long nails force you to press with the flat pad instead of the tip, which mutes adjacent strings and prevents proper fret contact. This is non-negotiable for clean playing.
 
<u> <b> WRIST POSITION </b> </u>
Keep a slight bend in your wrist, bringing your fingers over the fretboard at a natural angle. For chords in the lower positions (near the nut), your wrist may extend slightly forward. Avoid collapsing the wrist flat against the neck bottom — this restricts finger movement severely.
 
<u> <b> PRESSING PRESSURE </b> </u>
Press just hard enough for a clean note — not with maximum force. Most beginners press too hard, causing fatigue and slowing transitions. The correct amount of pressure produces a clean sound without effort. As you build calluses over the first few weeks, this becomes effortless.
 
<u> <b> COMMON MISTAKES </b> </u>
- Thumb wrapping over the top of the neck (severely limits pinky and ring finger reach)
- Flat fingers instead of arched (mutes adjacent strings)
- Pressing in the middle of the fret space rather than just behind the fret wire (causes buzzing)
- Tensing the entire hand and forearm (causes fatigue and repetitive strain)`,
    },
    {
      title: "Picking Hand Position",
      img: pickinghand,
      info: `Your picking hand controls tone, rhythm, dynamics, and articulation. Correct positioning gives you control over all of these simultaneously.
 
<u> <b> ARM POSITION </b> </u>
Rest your forearm lightly on the top curve of the guitar body — the curved edge should sit in the crook of your elbow. This anchors your arm without restricting movement. Don't lift your arm completely off the body — floating the arm creates inconsistency and tension.
 
<u> <b> WRIST POSITION </b> </u>
Your wrist should hover slightly above the strings, with a natural curve — not locked straight or bent sharply. The wrist generates most of the strumming motion. A relaxed, mobile wrist is what allows fast, fluid strumming and picking.
 
<u> <b> PICK GRIP (RECAP) </b> </u>
Hold the pick between the thumb and the side of the index finger. 3–5mm of tip exposed. Relaxed grip — firm enough not to drop, loose enough to avoid tension.
 
<u> <b> FOR STRUMMING </b> </u>
The motion comes primarily from the wrist, with the forearm providing a gentle rotation. Think of shaking water off your hand — loose, fluid, from the wrist. Stiff, all-elbow strumming sounds mechanical and tires quickly.
 
<u> <b> FOR SINGLE-NOTE PICKING </b> </u>
The wrist stays relatively still. The motion is smaller and more controlled — the pick moves just enough to pass through the string cleanly. Rest strokes (where the pick comes to rest on the adjacent string after picking) help control the depth of pick travel.
 
<u> <b> ANCHOR POINTS </b> </u>
Some guitarists rest the pinky finger lightly on the guitar body below the strings as an anchor point for stability during single-note playing. Others prefer a floating hand. Experiment to find what gives you the most control and comfort.
 
<u> <b> PALM MUTING POSITION </b> </u>
For palm muting, the fleshy edge of your picking hand (below the pinky) rests lightly on the strings right at the bridge saddles. Moving this contact point further from the bridge mutes more; closer to the bridge mutes less.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Reading Guitar Tabs": [
    {
      title: "How Tablature Works",
      img: tabletureguitar,
      info: `Guitar tablature (tab) is a simple system for writing guitar music that tells you exactly where to put your fingers — no music reading experience needed. It's the most widely used format for guitar music on the internet.
 
<u> <b> HOW TO READ TAB </b> </u>
Tab shows 6 horizontal lines. Each line represents one string:
 
<b>  e |---|---|---|---|   ← 1st string (thinnest, highest)
  B |---|---|---|---|   ← 2nd string
  G |---|---|---|---|   ← 3rd string
  D |---|---|---|---|   ← 4th string
  A |---|---|---|---|   ← 5th string
  E |---|---|---|---|   ← 6th string (thickest, lowest) </b>

The numbers on the lines tell you which fret to press. A 0 means play the string open (no fret pressed).

<b> EXAMPLE — The Opening Riff of "Smoke on the Water"
  e |------------------------|
  B |------------------------|
  G |--0-3-5-0-3-6-5---------|
  D |------------------------|
  A |------------------------|
  E |------------------------| </b>
 
Read left to right. Press fret 0 (open), then fret 3, then fret 5 on the G string.
 
<u> <b> READING RHYTHM IN TAB </b> </u>
Standard tab doesn't always show rhythm — it shows finger positions only. To know the rhythm, you usually need to listen to the song alongside the tab. Some advanced tabs include rhythm notation above the numbers.
 
<u> <b> TAB VS STANDARD NOTATION </b> </u>
<b> Tab: </b> Easy to read, shows exact finger positions, no music theory needed.
<b> Standard Notation: </b> More precise about rhythm and pitch, universal across all instruments.
 
For guitar beginners, tab is the fastest way to start playing real songs. Most guitarists use tab their entire career, even professionals.`,
    },
    {
      title: "String Lines and Fret Numbers",
      img: stringlinesfretnums,
      info: `Understanding the layout of tab — which line is which string, and what the numbers mean — is the foundation for reading any piece of guitar music you find online.
 
<u> <b> THE 6 LINES </b> </u>
The bottom line in a tab = the LOW E string (6th, thickest).
The top line in a tab = the HIGH e string (1st, thinnest).
This is the opposite of how the guitar looks when you hold it — the thickest string is at the top of the guitar but at the BOTTOM of the tab. This trips up many beginners.
 
<b>  e |---|   ← 1st string (HIGH e, thinnest — TOP LINE in tab)
  B |---|   ← 2nd string
  G |---|   ← 3rd string
  D |---|   ← 4th string
  A |---|   ← 5th string
  E |---|   ← 6th string (LOW E, thickest — BOTTOM LINE in tab) </b>
 
<u> <b> FRET NUMBERS </b> </u>
  0 = open string (don't fret anything, just pick the string)
  1 = press the 1st fret
  5 = press the 5th fret
  12 = press the 12th fret
 
Numbers are always read left to right — left is earlier in time, right is later.
 
<u> <b> SIMULTANEOUS NOTES (CHORDS IN TAB) </b> </u>
When numbers appear stacked vertically (same horizontal position), play all those strings at exactly the same time:
 
  e |--0--|
  B |--1--|
  G |--0--|
  D |--2--|
  A |--3--|
  E |--x--|
  This is a C Major chord. The x means don't play the low E string.
 
<u> <b> SEQUENTIAL NOTES (MELODIES AND RIFFS) </b> </u>
When numbers appear one after another horizontally, play them one at a time in sequence — left to right.
 
<u> <b> PRACTICAL TIP </b> </u>
Always identify: is this tab showing a chord (vertical stack) or a melody/riff (horizontal sequence)? Most tabs contain both at different points.`,
    },
    {
      title: "Basic Tab Symbols",
      img: basictabsymbols,
      info: `Beyond basic fret numbers, tabs use symbols to indicate specific techniques. Recognising these unlocks the full meaning of any tab you encounter.
 
<u> <b> ESSENTIAL SYMBOLS </b> </u>
 
<b> h — Hammer-on </b>
Pick the first note, then "hammer" another finger onto a higher fret without picking again.
  G |--5h7--|   → Pick fret 5, hammer onto fret 7
 
<b> p — Pull-off </b>
Pick a higher fret, then pull your finger off to sound a lower fret without picking.
  G |--7p5--|   → Pick fret 7, pull off to sound fret 5
 
<b> / — Slide Up </b>
Pick the first note, then slide your finger up to the second fret.
  G |--5/7--|   → Pick fret 5, slide up to fret 7
 
<b> \\ — Slide Down </b>
  G |--7\\5--|   → Pick fret 7, slide down to fret 5
 
<b> b — Bend </b>
Push the string sideways to raise its pitch.
  G |--7b9--|   → Pick fret 7, bend until it sounds like fret 9
 
<b> r — Release Bend </b>
Return the bent string back to its original pitch.
  G |--7b9r7--|   → Bend up to 9, release back to 7
 
<b> ~ — Vibrato </b>
Rapidly oscillate the string slightly after picking.
  G |--7~---|   → Pick fret 7, apply vibrato
 
<b> x — Muted / Dead Note </b>
Pick the string while lightly resting your finger on it — produces a percussive "thunk."
  A |--x-x-x--|
 
<b> ( ) — Ghost Note </b>
A note implied from a previous technique — usually from a bend or slide.
 
<b> T — Tap </b>
Use a picking-hand finger to tap directly onto the fret.
  e |--T12--|   → Tap fret 12 with your picking hand
 
<b> PM or P.M. — Palm Mute </b>
Rest your picking hand's palm edge on the strings near the bridge while playing.
  PM--|
  E |--0-0-0-0--|`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "How To Tune Your Guitar": [
    {
      title: "Standard Tuning",
      img: standardtuning,
      info: `Tuning your guitar is the very first thing you do every single time you play. An out-of-tune guitar sounds bad no matter how well you play — and it trains your ear incorrectly. Never skip tuning.
 
<u> <b> STANDARD TUNING </b> </u>
The 6 strings, from thickest to thinnest, are tuned to:
  6th string → E (82.41 Hz)
  5th string → A (110 Hz)
  4th string → D (146.83 Hz)
  3rd string → G (196 Hz)
  2nd string → B (246.94 Hz)
  1st string → E (329.63 Hz)
 
All tuners — clip-on, app, pedal — listen for these exact frequencies.
 
<u> <b> HOW TUNING WORKS </b> </u>
Each tuning peg controls one string. Turning it increases or decreases string tension, which raises or lowers the pitch.
  Tightening the peg → higher pitch (sharp)
  Loosening the peg → lower pitch (flat)
 
<u> <b> USING A CLIP-ON TUNER (RECOMMENDED FOR BEGINNERS) </b> </u>
1. Clip the tuner onto your headstock
2. Pluck one string
3. The tuner detects the vibration and shows the nearest note
4. Needle/indicator to the LEFT → you are flat (too low) → tighten the peg
5. Needle/indicator to the RIGHT → you are sharp (too high) → loosen the peg
6. Aim for the needle pointing perfectly to the centre / green indicator
7. Tune all 6 strings, starting from the low E
 
<u> <b> IMPORTANT HABIT </b> </u>
Always tune UP to a note, not down. If you overshoot and go sharp, loosen past the note and come back up. This keeps string tension consistent and helps the guitar stay in tune longer.
 
<u> <b> HOW OFTEN TO TUNE </b> </u>
Tune every single time you pick up the guitar. Guitars go out of tune naturally due to temperature changes, humidity, and just from being played. Even 10 minutes of playing can shift the tuning enough to notice.`,
    },
    {
      title: "Using A Tuner",
      img: usingtuner,
      info: `Electronic tuners take all the guesswork out of tuning, making it fast, reliable, and accurate for players at every level.
 
<u> <b> TYPES OF TUNERS </b> </u>
 
<b> CLIP-ON TUNER </b>
Clips directly onto the headstock. Detects pitch through vibration in the wood — not through sound in the air. This means it works even in noisy environments (rehearsal rooms, gigs). Best choice for most guitarists. Affordable and highly reliable.
 
<b> PEDAL TUNER </b>
Plugs into your signal chain between guitar and amp. Used by professional guitarists on stage. Extremely accurate. Has a mute function so you can tune silently during live performance. Only relevant for electric guitar players.
 
<b> PHONE APP TUNERS </b>
Free apps (GuitarTuna, Pano Tuner, Fender Tune) use your phone's microphone. Work well in quiet environments. Less reliable in noisy rooms — the microphone picks up background sound. Good for home practice.
 
<b> YOUR APP'S BUILT-IN TUNER </b>
The guitar tuner feature in this app uses your device's microphone or the Web Audio API to detect your guitar's pitch in real time — the same technology as dedicated tuner apps, built directly into your practice environment.
 
<u> <b> READING THE TUNER DISPLAY </b> </u>
Most tuners show:
- The detected note name (E, A, D, G, B)
- A needle or bar indicator
- Colour feedback: red = out of tune, green/blue = in tune
 
<u> <b> TUNING TIPS </b> </u>
- Pluck the string cleanly and let it ring — don't mute it
- Tune one string at a time
- After tuning all 6 strings, go back and recheck — tuning one string can slightly affect others
- New strings go out of tune faster until they're "broken in" — stretch them gently by pulling them away from the fretboard and retune until stable`,
    },
    {
      title: "Relative Tuning By Ear",
      img: eartuning,
      info: `Once your low E string is in tune (use a tuner for this reference pitch), you can tune the remaining 5 strings by ear using only the guitar itself.
 
<u> <b> THE 5TH FRET METHOD </b> </u>
Press the 5th fret on the 6th string (E) → the note produced is A → tune the open 5th string to match it
Press the 5th fret on the 5th string (A) → the note produced is D → tune the open 4th string to match it
Press the 5th fret on the 4th string (D) → the note produced is G → tune the open 3rd string to match it
Press the 4th fret on the 3rd string (G) → the note produced is B → tune the open 2nd string to match it
Press the 5th fret on the 2nd string (B) → the note produced is E → tune the open 1st string to match it
 
<u> <b> THE CRITICAL EXCEPTION </b> </u>
The G to B transition uses the 4TH fret, not the 5th. This is because of the major third interval between those two strings. All other pairs use the 5th fret. Forgetting this exception is the most common mistake in relative tuning.
 
<u> <b> HOW TO MATCH PITCHES BY EAR </b> </u>
Play the fretted reference note, then pluck the open string. Listen for "beating" — a wavering, wobbling sound that occurs when two notes are close but not exactly matching. The beating speeds up as the notes diverge and slows down as they converge. Adjust the tuning peg until the beating completely disappears and the two notes fuse into one smooth, stable tone.
 
<u> <b> LIMITATION OF RELATIVE TUNING </b> </u>
Relative tuning keeps your guitar in tune with itself, but does not guarantee you are in tune with other instruments or recordings. Always use a tuner when playing with other musicians.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Your First Sounds": [
    {
      title: "Picking Single Strings",
      img: pickingsinglestrings,
      info: `Before playing chords or scales, you need to get comfortable making clean, clear sounds from individual strings. This is where everything begins.
 
<u> <b> HOW TO PICK A SINGLE STRING </b> </u>
Hold your pick between your thumb and index finger with about 3–5mm of tip exposed. Rest your picking forearm lightly on the body of the guitar. Now aim the pick at just one string — the low E (6th string) to start — and make a smooth downward motion through the string. The pick should pass through the string and come to rest near the next string below it. This is called a "rest stroke" and it naturally limits how far your pick travels.
 
<u> <b> GETTING A CLEAN SOUND </b> </u>
Press the string firmly with your fretting finger just behind a fret — not on top of the fret wire, not too far back. Use the very tip of your finger. If you hear a buzz, one of three things is happening:
  1. Not pressing hard enough
  2. Pressing on top of the fret wire instead of just behind it
  3. Another finger is accidentally touching the string
 
<u> <b> THE 6 STRINGS ONE BY ONE </b> </u>
Start by picking each open string (no fretting) from low to high:
  6th → 5th → 4th → 3rd → 2nd → 1st
Then back down:
  1st → 2nd → 3rd → 4th → 5th → 6th
Listen to how each string has a different pitch. The 6th is low and deep; the 1st is high and bright. This exercise builds picking accuracy and trains your ear simultaneously.
 
<u> <b> ALTERNATE PICKING </b> </u>
Once comfortable with downstrokes, introduce alternate picking: down on the way to a string, up on the way back. Down-Up-Down-Up in a continuous pendulum motion. This is the most fundamental picking technique and the basis for all lead guitar playing.`,
    },
    {
      title: "Basic Finger Exercises",
      img: fingerexercise,
      info: `Your fretting hand needs to develop independence, strength, and coordination between all four fingers. These exercises build exactly that.
 
<u> <b> THE SPIDER EXERCISE (1-2-3-4) </b> </u>
Place your index finger on fret 1 of the low E string. Then middle finger fret 2, ring finger fret 3, pinky fret 4. Pick each note cleanly as you place each finger. Then move to the A string and repeat. Continue across all 6 strings, then come back.
 
  e |--1--2--3--4--|
  B |--1--2--3--4--|
  G |--1--2--3--4--|
  D |--1--2--3--4--|
  A |--1--2--3--4--|
  E |--1--2--3--4--|
 
<u> <b> KEY RULES </b> </u>
- Every finger placed stays down until you move the entire hand
- Press with your fingertips, not the flat pad
- Thumb stays behind the neck, not wrapped over the top
- Keep unused fingers hovering close to the strings — don't let them fly away
 
<u> <b> CHROMATIC VARIATIONS </b> </u>
Once the 1-2-3-4 pattern is solid, try different orderings to isolate weaker fingers:
  1-3-2-4   (crosses the middle and ring)
  4-3-2-1   (reverse direction)
  1-4-2-3   (large stretches for index and pinky)
 
<u> <b> LEFT HAND INDEPENDENCE </b> </u>
The ring finger and pinky naturally share tendons, making them harder to move independently. This is normal — it's not a limitation, it's a starting point. Consistent, slow, deliberate practice for 5 minutes daily produces dramatic improvement within two weeks.
 
<u> <b> IMPORTANT RULE </b> </u>
Never practice to the point of pain. Slight muscle fatigue is normal. Sharp or persistent pain means stop immediately and rest. Playing through pain causes injury. Rest is an essential part of building technique.`,
    },
    {
      title: "Left Hand Independence Drills",
      img: lefthandind,
      info: `Left hand independence — the ability to move each finger separately and accurately — is what separates clean playing from buzzy, muffled playing. These focused drills develop it faster than general practice.
 
<u> <b> WHY INDEPENDENCE IS HARD </b> </u>
Your ring finger and pinky share a common extensor tendon in the hand. This is why lifting your ring finger often causes the pinky to lift involuntarily — they're physically connected. Training independence means teaching your nervous system to override this connection through repetition.
 
<u> <b> DRILL 1 — FINGER LIFT ISOLATION </b> </u>
Place all four fingers on the 1st through 4th frets of the G string. Now lift ONLY the index finger, keeping the others pressed. Replace it. Lift ONLY the middle finger. Replace. Lift ONLY the ring finger — the hardest one. Replace. Lift ONLY the pinky. Repeat slowly.
 
<u> <b> DRILL 2 — TRILL EXERCISE </b> </u>
Place index finger on fret 5, ring finger on fret 7 of any string. Alternate rapidly between them:
  hammer-on with ring → pull-off back to index → hammer-on → pull-off
This is called a trill. Start very slowly — clean and even — then gradually increase speed. 30 seconds per string pair.
 
<u> <b> DRILL 3 — SPIDER POSITION SHIFTS </b> </u>
Play the 1-2-3-4 spider exercise but shift up one fret after completing all 6 strings. Play at frets 1-2-3-4, then 2-3-4-5, then 3-4-5-6, continuing up the neck. Then reverse downward. This adds position shifting to the independence training.
 
<u> <b> PRACTICE SCHEDULE </b> </u>
5 minutes of independence drills at the START of every practice session — before playing songs or chords. This primes the hand for the session and produces faster development than doing it at the end when the hand is tired.`,
    },
  ],

  // ── MODULE 2: First Chords ───────────────────────────────────────

  "Basic Chord Theory": [
    {
      title: "What Is A Chord?",
      info: `A chord is three or more notes played simultaneously. On guitar, chords are the foundation of rhythm playing — they provide the harmonic backdrop over which melodies and solos are played.
 
<u> <b> MAJOR vs MINOR </b> </u>
The two most fundamental chord types:
<b> Major chords </b> sound happy, bright, and resolved. Think of the opening of "Let It Be" — those are major chords.
<b> Minor chords </b> sound sad, dark, or emotional. Think of the intro to "Stairway to Heaven" — those are minor chords.
The difference between them is a single note (the third of the chord) being lowered by one half-step. That tiny change completely transforms the emotional quality.
 
<u> <b> HOW FINGER PLACEMENT CREATES SOUND </b> </u>
When you press a string down against a fret, you shorten its vibrating length. A shorter string vibrates faster, producing a higher pitch. By pressing different combinations of strings at different frets, you create specific combinations of pitches — that combination is a chord.
 
<u> <b> CHORD DIAGRAMS — HOW TO READ THEM </b> </u>
Guitar chords are shown in chord charts:
- Vertical lines = strings (leftmost = low E, rightmost = high e)
- Horizontal lines = frets
- Dots = where to place your fingers
- Numbers inside dots = which finger (1=index, 2=middle, 3=ring, 4=pinky)
- X above a string = do not play that string
- O above a string = play that string open (no finger)
 
<u> <b> YOUR FIRST GOAL </b> </u>
Learn 8 essential open chords: E, A, D, G, C (major) and Em, Am, Dm (minor). With just these 8 chords you can play thousands of songs across every genre.`,
    },
    {
      title: "How Chords Create Emotion",
      info: `Understanding why chords sound the way they do transforms you from someone who memorises shapes into someone who understands music.
 
<u> <b> THE PHYSICS OF HARMONY </b> </u>
When two or more notes are played together, their sound waves interact. Notes whose frequencies have simple mathematical relationships blend smoothly — they sound consonant (pleasant). Notes whose frequencies don't relate cleanly create tension — they sound dissonant (unresolved or tense).
 
Major and minor chords are built from consonant intervals, which is why they sound stable and resolved. Diminished chords use less consonant intervals, which is why they sound tense and unstable.
 
<u> <b> THE MAJOR THIRD vs MINOR THIRD </b> </u>
The defining interval between the root and the third of a chord:
- <b> Major 3rd </b> (4 semitones apart): creates the "happy" sound of major chords
- <b> Minor 3rd </b> (3 semitones apart): creates the "sad" sound of minor chords
 
This single semitone difference — just one fret — is responsible for one of the most profound emotional distinctions in all of music.
 
<u> <b> CONTEXT MATTERS </b> </u>
The same chord can feel different depending on context. Am feels sad after C major. But Am can feel resolved and "home" if the song is in A minor — because now Am is the tonic (home base), not a departure from major.
 
This is why understanding keys matters even for beginners: it tells you which chords are "home" and which create tension or movement.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Open Chords": [
    {
      title: "The 5 Essential Major Chords",
      img: fivemajor,
      info: `These are the 5 open major chords every guitarist must know. "Open" means at least one string is played unfretted.
 
<u> <b> E MAJOR </b> </u>
  e |--0--|
  B |--0--|
  G |--1--|  ← middle finger
  D |--2--|  ← ring finger
  A |--2--|  ← index finger
  E |--0--|
All 6 strings strummed. One of the easiest chords — a great starting point.
 
<u> <b> A MAJOR </b> </u>
  e |--0--|
  B |--2--|  ← ring finger
  G |--2--|  ← middle finger
  D |--2--|  ← index finger
  A |--0--|
  E |--x--|  (don't play)
Three fingers on the same fret in a row. Try using one finger as a small barre across strings 2, 3, 4.
 
<u> <b> D MAJOR </b> </u>
  e |--2--|  ← middle finger
  B |--3--|  ← ring finger
  G |--2--|  ← index finger
  D |--0--|
  A |--x--|  (don't play)
  E |--x--|  (don't play)
Only the top 4 strings. Bright and cheerful sounding.
 
<u> <b> G MAJOR </b> </u>
  e |--3--|  ← pinky
  B |--0--|
  G |--0--|
  D |--0--|
  A |--2--|  ← middle finger
  E |--3--|  ← ring finger
All 6 strings. G major has several fingering variations — this is the most common for beginners.
 
<u> <b> C MAJOR </b> </u>
  e |--0--|
  B |--1--|  ← index finger
  G |--0--|
  D |--2--|  ← middle finger
  A |--3--|  ← ring finger
  E |--x--|  (don't play)
Often the hardest first chord due to the stretched position. Becomes natural within days of consistent practice.
 
<u> <b> PRACTICE TIP </b> </u>
Practice each chord individually — press all fingers, strum slowly, listen to every string. If any string buzzes, press closer to the fret wire and use your fingertips.`,
    },
    {
      title: "The 3 Essential Minor Chords",
      img: threeminor,
      info: `Minor chords complete your beginner vocabulary. These three open minor chords pair naturally with the major chords and are used in virtually every song genre.
 
<u> <b> E MINOR (Em) </b> </u>
  e |--0--|
  B |--0--|
  G |--0--|
  D |--2--|  ← middle finger
  A |--2--|  ← index finger
  E |--0--|
Em is the easiest chord on guitar — only two fingers. Deep, melancholic sound. All 6 strings strummed.
 
<u> <b> A MINOR (Am) </b> </u>
  e |--0--|
  B |--1--|  ← index finger
  G |--2--|  ← middle finger
  D |--2--|  ← ring finger
  A |--0--|
  E |--x--|  (don't play)
Am is very similar to E major shifted across the strings. Notice the shape similarity — this is the beginning of understanding moveable chord shapes.
 
<u> <b> D MINOR (Dm) </b> </u>
  e |--1--|  ← index finger
  B |--3--|  ← ring finger
  G |--2--|  ← middle finger
  D |--0--|
  A |--x--|  (don't play)
  E |--x--|  (don't play)
Dm has a particularly mournful quality. Only the top 4 strings, same as D major.
 
<u> <b> THE RELATIONSHIP BETWEEN MAJOR AND MINOR </b> </u>
E Major and E Minor are nearly identical — you simply remove the finger on the G string to go from E to Em. This relationship exists throughout the chord system and is worth observing as you learn each pair.
 
<u> <b> THE FOUR CHORD TRICK </b> </u>
Am - F - C - G is used in hundreds of popular songs. Once you know Am, C, and G, you're already playing the backbone of pop music.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Open Chords — Minor": [
    {
      title: "E Minor (Em)",
      img: eminor,
      info: `E minor is the easiest chord on the entire guitar — just two fingers — and one of the most emotionally powerful. It is the starting point for understanding minor chords.
 
<u> <b> THE SHAPE </b> </u>
  e |--0--|
  B |--0--|
  G |--0--|
  D |--2--|  ← middle finger (or index)
  A |--2--|  ← index finger (or middle)
  E |--0--|
 
Strum all 6 strings. Every string rings open except the A and D strings.
 
<u> <b> TWO FINGERING OPTIONS </b> </u>
<b> Option 1: </b> Index on A string (5th), middle on D string (4th) — most common
<b> Option 2: </b> Middle on A string, ring on D string — leaves index free, which makes transitioning to other chords easier in some progressions
 
<u> <b> THE SOUND </b> </u>
Em has a deep, melancholic, slightly dramatic quality. It's the "emotional" chord that appears in countless ballads, rock songs, and classical pieces. The fact that it uses all 6 open strings gives it a full, resonant sound that smaller chord shapes can't match.
 
<u> <b> RELATIONSHIP TO E MAJOR </b> </u>
Place your E major chord. Now lift the middle finger off the G string (fret 1). What remains is E minor. The only difference is that one fret — and it completely transforms the emotional character. This major-to-minor relationship is fundamental to understanding chord construction.
 
<u> <b> COMMON USES </b> </u>
Em is the vi chord in G major — making it a natural partner for G, C, and D. It appears in the classic I-V-vi-IV progression (G-D-Em-C) that drives hundreds of pop songs.`,
    },
    {
      title: "A Minor (Am)",
      img: aminor,
      info: `A minor is one of the most-used chords in all of popular music. It has a warm yet melancholic quality and serves as the home chord (tonic) for songs in A minor.
 
<u> <b> THE SHAPE </b> </u>
  e |--0--|
  B |--1--|  ← index finger
  G |--2--|  ← middle finger
  D |--2--|  ← ring finger
  A |--0--|
  E |--x--|  (avoid the low E string)
 
Strum strings 5 through 1 only (avoid the 6th string).
 
<u> <b> AVOIDING THE LOW E </b> </u>
The low E string is not part of Am — it's an E note, and although it won't sound terrible, it muddies the bass. Practice angling your strumming motion to start from the A string (5th) rather than the low E.
 
<u> <b> THE AM - C CONNECTION </b> </u>
Am and C major share two notes (C and E). Moving between them uses very little finger movement — your middle finger stays at the same place (D string, 2nd fret) for both chords. This pivot finger makes Am-C one of the smoothest transitions in beginner guitar.
 
<u> <b> RELATIVE MAJOR </b> </u>
Am is the relative minor of C major — they share the same 7 notes. This is why Am, C, G, and F sound so naturally together in songs: they all live in the same musical "family."
 
<u> <b> SONGS BUILT ON AM </b> </u>
"Stairway to Heaven" opening, "Hotel California" verse, "Losing My Religion" — all use Am prominently. Once you have Am, C, G, and F, you can play a huge library of songs.`,
    },
    {
      title: "D Minor (Dm)",
      img: dminor,
      info: `D minor is often described as the "saddest chord" — it has a particularly dark, mournful quality that makes it emotionally distinctive even among minor chords.
 
<u> <b> THE SHAPE </b> </u>
  e |--1--|  ← index finger
  B |--3--|  ← ring finger
  G |--2--|  ← middle finger
  D |--0--|
  A |--x--|  (don't play)
  E |--x--|  (don't play)
 
Play only strings 4 through 1 (same 4 strings as D major).
 
<u> <b> COMPARING DM TO D MAJOR </b> </u>
D major:   e=2, B=3, G=2, D=0
D minor:   e=1, B=3, G=2, D=0
 
The only difference: the high e string drops from fret 2 to fret 1 (one half step lower). That single note — the third of the chord lowering from F# to F — shifts the chord from major to minor and completely changes its emotional character.
 
<u> <b> THE FINGER STRETCH </b> </u>
Dm requires your fingers to spread across three different fret positions on adjacent strings. This stretch is challenging for beginners initially. Keep your thumb behind the neck and let your fingers arch over from above — this gives them the reach they need.
 
<u> <b> COMMON PROGRESSIONS WITH DM </b> </u>
Dm is the ii chord in C major and the iv chord in A minor. Common progressions:
  Am - Dm - E (A minor classical progression)
  C - Am - Dm - G (pop/rock in C major)
  F - C - Dm - Bb (very common in pop)`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "The 4 Magic Chords": [
    {
      title: "The G-C-D-Em Progression",
      img: gdec,
      info: `The four chords G major, C major, D major, and E minor are the most powerful combination in popular music. Hundreds of hit songs across pop, rock, country, and folk are built entirely from these four chords.
 
<u> <b> WHY THESE FOUR? </b> </u>
These chords all belong to the key of G major. In music theory:
  G = the I chord (home base)
  C = the IV chord (movement away from home)
  D = the V chord (strongest tension, pulls back to G)
  Em = the vi chord (emotional, minor colour)
 
This I-V-vi-IV progression (G-D-Em-C) is sometimes called "the four-chord trick."
 
<u> <b> SONGS YOU ALREADY KNOW </b> </u>
- "Let Her Go" — Passenger
- "No Woman No Cry" — Bob Marley
- "With or Without You" — U2
- "I'm Yours" — Jason Mraz
- "Knockin' on Heaven's Door" — Bob Dylan
 
<u> <b> HOW TO PRACTICE THEM </b> </u>
1. Place G major → strum 4 times
2. Place C major → strum 4 times
3. Place D major → strum 4 times
4. Place Em → strum 4 times
5. Repeat with a steady count or metronome
Start at 60 BPM. When transitions are clean, increase by 5 BPM.
 
<u> <b> THE REAL LESSON </b> </u>
Once you can play these 4 chords and switch between them in time, you are no longer a complete beginner. You can sit down, play these chords, and someone listening will recognise it as real music. That moment is closer than you think.`,
    },
    {
      title: "Playing Your First Real Song",
      info: `The bridge between exercises and actual music is playing a real song from start to finish — even a simple one.
 
<u> <b> HOW TO APPROACH A SONG </b> </u>
1. Find the chord chart
2. Identify which chords appear — are they all ones you know?
3. Practice chord changes in isolation before the full song
4. Listen to the original recording to understand the rhythm
5. Start much slower than the original tempo
6. Add a strumming pattern once the changes feel natural
 
<u> <b> GOOD FIRST SONGS (3 or 4 chords only) </b> </u>
- "Knockin' on Heaven's Door" (G, D, Am/C) — very slow changes
- "Horse With No Name" (Em, D) — only two chords
- "Leaving on a Jet Plane" (G, C, D) — slow, clear changes
- "Bad Moon Rising" (D, A, G) — clear rhythm
- "Brown Eyed Girl" (G, C, D, Em) — slightly faster but iconic
 
<u> <b> THE IMPERFECT RUN-THROUGH RULE </b> </u>
Play from start to finish without stopping, even when you make mistakes. Stopping every time trains your muscle memory to stop — the opposite of what you want. Keep going. Let mistakes happen. Fix them in isolation afterward.
 
<u> <b> MOMENTUM IS EVERYTHING </b> </u>
A complete, imperfect run-through of a song is worth more than ten perfect isolated chord changes. The moment you play a recognisable song all the way through — that is the moment guitar becomes real to you.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Chord Transitions": [
    {
      title: "The One-Minute Change Exercise",
      info: `Knowing chord shapes is only half the challenge. Moving between them smoothly and in time is the real skill. This exercise is the single most effective way to build that skill.
 
<u> <b> THE EXERCISE </b> </u>
Set a timer for 60 seconds. Pick two chords (start with G and C). Strum one, immediately switch to the other, strum again. Count how many complete changes you make in 60 seconds. Write it down. Practice this daily. Track your progress.
 
<u> <b> TARGETS </b> </u>
  Day 1: 10–15 changes/minute (normal starting point)
  Week 1: 25–30 changes/minute
  Week 2: 40+ changes/minute
  Month 1: 60+ changes/minute (smooth, musical playing level)
 
<u> <b> PRIORITY TRANSITIONS TO MASTER </b> </u>
  G ↔ C — the most common transition in pop and rock
  C ↔ Am — folk, ballads, shares pivot fingers
  G ↔ D — country, rock
  Am ↔ E — blues, rock
  D ↔ A — very common in many keys
 
<u> <b> THE GOLDEN RULE </b> </u>
Slow and clean always beats fast and sloppy. Practice at a tempo where the transition is clean. Speed builds naturally as muscle memory develops — you cannot force it faster without losing accuracy.`,
    },
    {
      title: "Pivot Fingers and Smooth Changes",
      info: `The secret to fast chord transitions is not speed — it's efficiency. Pivot fingers and anchor fingers dramatically reduce the amount of movement required between chords.
 
<u> <b> WHAT IS A PIVOT FINGER? </b> </u>
A pivot finger is a finger that stays in the same position (or very close to it) when changing between two chords. Instead of lifting all fingers and replanting them, you keep the pivot finger down as an anchor while the other fingers reposition around it.
 
<u> <b> EXAMPLE — C MAJOR TO A MINOR </b> </u>
  C major:  index=B string fret 1,  middle=D string fret 2,  ring=A string fret 3
  A minor:  index=B string fret 1,  middle=D string fret 2,  ring=G string fret 2
 
Your index and middle fingers don't move at all — they stay in exactly the same position. Only the ring finger moves (from A string fret 3 to G string fret 2). This is a pivot transition.
 
<u> <b> EXAMPLE — G MAJOR TO CADD9 </b> </u>
  G major:   ring=E string fret 3, middle=A string fret 2, pinky=e string fret 3
  Cadd9:     ring=B string fret 3, middle=D string fret 2, pinky=e string fret 3 (stays!)
 
The pinky stays at fret 3 on the e string for both chords. Use it as the anchor.
 
<u> <b> FINDING PIVOT FINGERS </b> </u>
Before practicing any transition, stop and compare the two chord diagrams. Ask: "Which fingers are in the same or very similar position in both chords?" Those are your pivot fingers. Keep them down. Only move what needs to move.
 
<u> <b> MENTAL PREPARATION </b> </u>
Don't wait until the beat to start moving your fingers. Think ahead — as you're playing the last strum of chord 1, your mind should already be preparing chord 2. Anticipation is what makes transitions sound smooth.`,
    },
  ],

  // ── MODULE 3: Rhythm Basics ──────────────────────────────────────

  "Understanding Beat and Tempo": [
    {
      title: "What Is A Beat?",
      img: beat,
      info: `Before you can strum, you need to understand the rhythmic foundation that all music is built on.
 
<u> <b> WHAT IS A BEAT? </b> </u>
A beat is the basic unit of time in music — it's the steady pulse you tap your foot to when listening to a song. If someone says "count to four," they mean count four beats: 1, 2, 3, 4, 1, 2, 3, 4.
 
<u> <b> WHAT IS TEMPO? </b> </u>
Tempo is the speed of those beats, measured in BPM (beats per minute).
  60 BPM = 1 beat per second (slow ballad)
  90 BPM = medium pace (pop/rock)
  120 BPM = energetic pace (upbeat pop)
  160+ BPM = fast (metal, fast rock)
 
<u> <b> TIME SIGNATURES </b> </u>
The most common is 4/4 — 4 beats per measure (bar). You count: 1, 2, 3, 4, 1, 2, 3, 4. Also called "common time." Used in the vast majority of popular music.
 
3/4 time (waltz): 3 beats per measure — 1, 2, 3, 1, 2, 3.
 
<u> <b> SUBDIVISIONS </b> </u>
Each beat can be divided into smaller units:
  <b> Eighth notes: </b> divide each beat into 2 → counted: 1 + 2 + 3 + 4 + (where + = "and")
  <b> Sixteenth notes: </b> divide each beat into 4 → counted: 1 e + a 2 e + a 3 e + a 4 e + a
 
Most basic strumming patterns use eighth note subdivisions — the "and" counts between the main beats.
 
<u> <b> USING A METRONOME </b> </u>
A metronome clicks at a set BPM, helping you maintain steady time. Use your app's built-in metronome. Start every practice session slow and only speed up when the pattern is clean and consistent.`,
    },
    {
      title: "BPM and Counting",
      img: bpm,
      info: `Understanding BPM and how to count through a song gives you the framework to learn any song and play with other musicians.
 
<u> <b> COUNTING A BAR </b> </u>
In 4/4 time, count steadily: 1 — 2 — 3 — 4 — 1 — 2 — 3 — 4
Each number is one beat. Four beats = one bar (measure).
When the bar repeats, you're back at 1.
 
<u> <b> COUNTING WITH SUBDIVISIONS </b> </u>
To count eighth notes (the most common subdivision for strumming), add "and" between each beat:
  1 and 2 and 3 and 4 and
  1  +  2  +  3  +  4  +
 
Each "and" falls exactly halfway between two beats. Your strumming hand moves DOWN on the numbers, UP on the "ands."
 
<u> <b> FINDING THE TEMPO OF A SONG </b> </u>
Tap your foot along with a song you know. Count how many taps happen in 15 seconds, then multiply by 4 — that's roughly the BPM. Or use a tap-tempo feature (available in your app's metronome).
 
<u> <b> COMMON SONG TEMPOS </b> </u>
  Slow ballad: 60–75 BPM
  Medium pop/rock: 90–110 BPM
  Fast pop: 120–140 BPM
  Punk/metal: 160–200+ BPM
 
<u> <b> INTERNAL PULSE </b> </u>
The goal of all tempo practice is to develop an internal pulse — a reliable inner clock that keeps steady time without external help. This develops through consistent metronome practice. Every professional musician has a deeply internalised sense of time built through years of deliberate rhythmic practice.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Basic Strumming Patterns": [
    {
      title: "Down Strums and Down-Up",
      info: `These are the first two strumming techniques every guitarist learns. Master these before attempting more complex patterns.
 
<u> <b> HOW TO READ STRUMMING PATTERNS </b> </u>
<b> D </b> = Down strum (strum from low E string toward high e string)
<b> U </b> = Up strum (strum from high e string toward low E string)
<b> - </b> = Rest (silence — hand moves but doesn't touch strings)
 
<u> <b> PATTERN 1 — ALL DOWNSTROKES (starting point) </b> </u>
Count:  1    2    3    4
Strum:  D    D    D    D
The simplest possible strumming pattern. Focus entirely on keeping the tempo even and the tone consistent. Use a metronome.
 
<u> <b> PATTERN 2 — DOWN-UP (eighth notes) </b> </u>
Count:  1  +  2  +  3  +  4  +
Strum:  D  U  D  U  D  U  D  U
This doubles the activity. Keep your strumming hand moving in a constant pendulum motion — down on numbers, up on "ands." Even on the "U" counts where you might miss the strings intentionally (air strum), the hand keeps moving.
 
<u> <b> THE PENDULUM PRINCIPLE </b> </u>
Your strumming arm should never stop moving — it swings continuously down-up-down-up at the subdivision rate. You choose when to make contact with the strings and when to let the pick pass through air. This is what makes rhythmic consistency possible. Stopping and restarting the arm produces stiffness and inconsistency.
 
<u> <b> TONE CONSISTENCY </b> </u>
Strum through all the strings your chord uses with even pressure. Don't strum harder on some beats and softer on others (unless intentional). Consistent tone comes from consistent pick depth and arm speed.`,
    },
    {
      title: "D DU UDU Pattern",
      img: updown,
      info: `This pattern — or close variations of it — is used in more popular songs than any other single strumming pattern. Learn it and you instantly unlock a huge song library.
 
<u> <b> THE PATTERN </b> </u>
Count:  1    2   +  3  +  4  +
Strum:  D    D   U  -  U  D  U
 
Written as: D - D U - U D U
(the dash represents a missed/air strum where your hand moves DOWN but skips the strings)
 
<u> <b> BREAKING IT DOWN </b> </u>
Beat 1: DOWN
Beat 2: DOWN
Beat 2 "and": UP
Beat 3: MISS (hand moves DOWN but doesn't touch strings)
Beat 3 "and": UP
Beat 4: DOWN
Beat 4 "and": UP
 
<u> <b> THE KEY TO MAKING IT WORK </b> </u>
The "miss" on beat 3 is what makes this pattern feel musical rather than mechanical. Your hand still moves DOWN on beat 3 — it just doesn't contact the strings. If you actually stop your arm, the pattern breaks down. The pendulum keeps going; only the contact is interrupted.
 
<u> <b> PRACTICE APPROACH </b> </u>
Step 1: Air strum the pattern (no guitar) while counting aloud until the arm motion feels natural
Step 2: Apply to one chord (G major works well) and strum slowly — listen for the pattern
Step 3: Speed up gradually with a metronome
Step 4: Add chord changes
 
<u> <b> VARIATIONS </b> </u>
Once this pattern is comfortable, experiment with:
  D - D U U - D U  (slightly different feel)
  D U D U - U D U  (busier, more syncopated)
Most strumming patterns are variations of the same down-up motion with different notes "missed."`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Using a Pick vs Fingers": [
    {
      title: "Using A Pick",
      img: plectrum,
      info: `The pick (plectrum) is the most common tool for playing guitar. It produces a bright, articulate, consistent tone and is essential for most rock, pop, country, and metal styles.
 
<u> <b> PICK GRIP </b> </u>
Hold the pick between the thumb and the side of the index finger. About 3–5mm of the tip should extend beyond your fingers. The grip should be firm enough that the pick doesn't fly away, but relaxed enough that your hand doesn't tense up.
 
<u> <b> ANGLE THE PICK SLIGHTLY </b> </u>
Rather than hitting the string perfectly flat, tilt the pick about 30–45 degrees. This reduces pick noise and creates a smoother, cleaner attack. Many beginners play too flat, producing a harsh "scratchy" sound.
 
<u> <b> PICK THICKNESS </b> </u>
- <b> Thin (0.46–0.60mm): </b> flexible, great for strumming, less articulate for single notes
- <b> Medium (0.70–0.84mm): </b> versatile — the best starting point for beginners
- <b> Heavy (1.0mm+): </b> very stiff, excellent control for single-note lead playing
 
Start with a medium pick. Experiment as your style develops.
 
<u> <b> PICK MATERIAL </b> </u>
Picks come in nylon, celluloid, Tortex, and more. Each produces a slightly different tone. Tortex picks are durable and popular for rock. The differences are subtle — don't overthink this at the beginner stage.
 
<u> <b> WHEN PICKS ARE BEST </b> </u>
- Rock, metal, punk rhythm playing
- Country lead playing
- Single-note melodies and solos
- Any style needing consistent, bright articulation`,
    },
    {
      title: "Playing With Fingers",
      info: `Fingerstyle means using your thumb and fingers to pluck strings directly, without a pick. It produces a warmer, more intimate tone and enables playing bass lines and melodies simultaneously.
 
<u> <b> THE BASICS </b> </u>
Your thumb handles the lower strings (6, 5, 4 — the bass strings).
Your index (i), middle (m), and ring (a) fingers handle the higher strings (3, 2, 1).
 
This division is the foundation of all fingerpicking. Your thumb can walk bass lines while your fingers play melody — the equivalent of two instruments played at once.
 
<u> <b> NAILS vs FLESH </b> </u>
- <b> Fingernails: </b> brighter tone, more volume — used in classical guitar
- <b> Flesh of fingertips: </b> warmer, softer — used in folk and acoustic pop
Many players find a middle ground: slightly grown nails that catch the string naturally.
 
<u> <b> WHEN FINGERSTYLE IS BETTER </b> </u>
- Acoustic fingerpicking (folk, singer-songwriter, classical)
- Playing chord melody (chords and melody simultaneously)
- Travis picking and alternating bass patterns
- Intimate, quiet moments where a pick sounds too harsh
 
<u> <b> HYBRID PICKING </b> </u>
Many guitarists hold a pick and use their middle, ring, and pinky fingers simultaneously. This combines pick precision with fingerstyle versatility and is used extensively in country guitar and increasingly in rock.
 
<u> <b> WHICH SHOULD YOU START WITH? </b> </u>
If you're unsure: learn with a pick first. It builds picking-hand control and discipline faster. Add fingerstyle as a second technique once basic pick technique is established.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Playing Your First Songs": [
    {
      title: "How To Follow A Chord Chart?",
      info: `A chord chart is the simplest way a song's harmony is written down. Learning to read one quickly is a practical skill you'll use constantly.
 
<u> <b> WHAT A CHORD CHART LOOKS LIKE </b> </u>
- Song title and key at the top
- Chord symbols written above the lyrics at the exact syllable where the chord changes
- Sometimes shown as: | G | C | D | Em |
 
<u> <b> READING CHORD SYMBOLS </b> </u>
<b> Capital letter alone </b> = major chord (G = G major)
<b> Capital letter + m </b> = minor chord (Am = A minor)
<b> Capital letter + 7 </b> = dominant 7th (G7)
<b> Capital letter + maj7 </b> = major 7th (Cmaj7)
<b> Capital letter + / + note </b> = slash chord (G/B = G chord with B as lowest note)
 
<u> <b> COUNTING BARS </b> </u>
Each | | section usually represents one bar of 4 beats. If a chord has no replacement for 2 bars, hold it for 8 beats. Follow the lyrics to know where you are in the song.
 
<u> <b> PRACTICAL APPROACH </b> </u>
1. Read through the entire chart before playing
2. Identify any unfamiliar chords — look them up first
3. Listen to the song once while following the chart with your eyes
4. Play slowly, focusing on hitting the chord change on the right syllable
5. Speed up gradually once all changes are in the right place
 
<u> <b> THE MOST IMPORTANT SKILL: TIMING THE CHANGE </b> </u>
A chord change even slightly late sounds worse than an imperfect chord shape. Train yourself to anticipate the change — start moving your fingers just before the change is due. This anticipation is what makes transitions sound smooth and musical.`,
    },
    {
      title: "Simple 3-Chord Songs",
      info: `The vast majority of popular songs are built on 3 or 4 chords. Understanding this structure lets you learn new songs much faster and start making real music immediately.
 
<u> <b> THE I-IV-V PROGRESSION </b> </u>
The most fundamental chord progression in Western music.
  Key of G: I = G, IV = C, V = D
  Key of A: I = A, IV = D, V = E
  Key of C: I = C, IV = F, V = G
 
The V chord creates the strongest pull back to I — it's the tension-resolution engine of almost all folk, blues, country, and rock.
 
<u> <b> GOOD FIRST SONGS </b> </u>
- "Knockin' on Heaven's Door" — G, D, Am and C (slow, clear changes)
- "Horse With No Name" — Em and D only (two chords)
- "Leaving on a Jet Plane" — G, C, D (slow and clear)
- "Bad Moon Rising" — D, A, G (punchy rhythm)
- "Brown Eyed Girl" — G, C, D, Em (iconic, great for practice)
 
<u> <b> THE IMPERFECT RUN-THROUGH RULE </b> </u>
Play from start to finish without stopping, even when you make mistakes. Stopping every time trains your muscle memory to stop — the opposite of performance muscle memory. Keep going. Let the mistakes happen. Identify what needs work, then fix it in isolation.
 
<u> <b> VERSE-CHORUS STRUCTURE </b> </u>
Most popular songs alternate between:
- <b> Verse: </b> tells the story, slightly lower energy
- <b> Chorus: </b> the emotional peak, most memorable part
 
Often the same chords appear in both sections with different ordering or energy. Once you know the key, you know the likely chord pool.`,
    },
  ],

  // ── MODULE 4: Basic Music Theory ────────────────────────────────

  "Notes On The Fretboard": [
    {
      title: "Natural Notes",
      img: naturalnotes,
      info: `The guitar neck contains 12 unique musical notes, repeating across every string as you move higher up the frets.
 
<u> <b> THE 12 NOTES </b> </u>
A   A#/Bb   B   C   C#/Db   D   D#/Eb   E   F   F#/Gb   G   G#/Ab
Then it repeats: A, A#, B, C...
 
The distance between any two adjacent notes = one Half Step (semitone) = one fret.
Two frets = a Whole Step (whole tone).
 
<u> <b> THE 7 NATURAL NOTES (NO SHARPS OR FLATS) </b> </u>
A  B  C  D  E  F  G — then back to A.
Two important exceptions — pairs of natural notes with NO sharp/flat between them:
  B → C: naturally a half step apart (no B# exists in standard music)
  E → F: naturally a half step apart (no E# exists in standard music)
Memorise these exceptions — they come up constantly in theory.
 
<u> <b> THE 12TH FRET RULE </b> </u>
At the 12th fret, every string produces exactly the same note as its open string — one octave higher. The 12th fret is marked with a double dot inlay on most guitars for this reason.
 
<u> <b> OCTAVE SHAPES </b> </u>
The same note appears at multiple locations across the neck in predictable patterns:
  Same note is found 2 strings higher, 2 frets higher (from the E/A/D/G string group)
  Same note is found 2 strings higher, 3 frets higher (from the B string, due to the major third)
Learning octave shapes lets you quickly find any note anywhere on the fretboard.`,
    },
    {
      title: "Finding Notes On Each String",
      img: aestringnotes,
      info: `Knowing the notes on every string — especially the lowest two — is the foundation for understanding the entire fretboard.
 
<u> <b> LOW E STRING (6th) — MOST IMPORTANT </b> </u>
  Open = E
  Fret 1 = F
  Fret 2 = F#/Gb
  Fret 3 = G
  Fret 4 = G#/Ab
  Fret 5 = A
  Fret 6 = A#/Bb
  Fret 7 = B
  Fret 8 = C
  Fret 9 = C#/Db
  Fret 10 = D
  Fret 11 = D#/Eb
  Fret 12 = E (octave — same as open)
 
<u> <b> A STRING (5th) — SECOND MOST IMPORTANT </b> </u>
  Open = A
  Fret 2 = B
  Fret 3 = C
  Fret 5 = D
  Fret 7 = E
  Fret 8 = F
  Fret 10 = G
  Fret 12 = A (octave)
 
<u> <b> WHY THESE TWO STRINGS FIRST </b> </u>
The 6th and 5th strings contain the root notes for all E-shape and A-shape barre chords. Knowing these strings means you can immediately find any barre chord in any key — a huge practical payoff.
 
<u> <b> DOT INLAYS AS LANDMARKS </b> </u>
Most guitars have dot inlays at frets 3, 5, 7, 9, and 12. Use these as reference points. Know the notes at these fret positions on each string and calculate from the nearest landmark for any fret in between.
 
<u> <b> MEMORISATION METHOD </b> </u>
Pick one string. Learn its notes at the dot inlay frets first (3, 5, 7, 9, 12). Then fill in the gaps. Spend 5 minutes quizzing yourself daily on random fret-string combinations. Full fretboard knowledge comes within a month of consistent daily practice.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "What Are Sharps and Flats": [
    {
      title: "Sharps, Flats, and the Musical Alphabet",
      img: sharpFlats,
      info: `Sharps and flats fill the gaps between the natural notes (A B C D E F G) and are essential for understanding scales, keys, and chords.
 
<u> <b> THE 12 NOTES </b> </u>
Western music uses 12 unique pitches before they repeat:
A — A#/Bb — B — C — C#/Db — D — D#/Eb — E — F — F#/Gb — G — G#/Ab — then back to A
 
<b> Sharp (#): </b> raises a note by one half step (one fret higher)
<b> Flat (b): </b> lowers a note by one half step (one fret lower)
 
<u> <b> ENHARMONIC EQUIVALENTS </b> </u>
A# and Bb are the same pitch — just named differently depending on musical context. These are called enharmonic equivalents. The same physical fret, two different names:
  A# = Bb
  C# = Db
  D# = Eb
  F# = Gb
  G# = Ab
 
<u> <b> THE NATURAL EXCEPTIONS — NO SHARPS BETWEEN THESE </b> </u>
  B → C: naturally a half step apart (no B# in standard use)
  E → F: naturally a half step apart (no E# in standard use)
These exceptions are built into the structure of the major scale. Memorise them.
 
<u> <b> HALF STEPS AND WHOLE STEPS </b> </u>
<b> Half step (semitone): </b> distance between two adjacent frets. The smallest interval in Western music.
<b> Whole step (whole tone): </b> two frets apart = two half steps.
 
<u> <b> ON THE GUITAR </b> </u>
Every fret = one half step. Moving from 5th fret to 6th fret raises pitch by one semitone. From 5th fret to 7th fret = one whole step. The guitar makes interval distances physically visible and tangible in a way other instruments don't — use this advantage.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Major Scale Introduction": [
    {
      title: "What Is A Scale",
      info: `The major scale is the most fundamental structure in Western music. Understanding it unlocks chord construction, songwriting, and improvisation.
 
<u> <b> WHAT IS A SCALE? </b> </u>
A scale is a specific sequence of notes in a specific order of intervals. The major scale uses a pattern of whole steps (W) and half steps (H):
 
W - W - H - W - W - W - H
 
Starting from any note and following this pattern gives you the major scale for that root note.
 
<u> <b> C MAJOR SCALE (no sharps or flats — the simplest example) </b> </u>
C - D - E - F - G - A - B - C
  C to D = Whole step
  D to E = Whole step
  E to F = Half step (no sharp between E and F)
  F to G = Whole step
  G to A = Whole step
  A to B = Whole step
  B to C = Half step (no sharp between B and C)
 
<u> <b> THE SCALE DEGREES </b> </u>
Each note in the scale is numbered:
  1 = C (root)
  2 = D
  3 = E
  4 = F
  5 = G
  6 = A
  7 = B
  8 = C (octave)
 
These numbers are used throughout all music theory. "Play the 1-4-5 progression in G" means use the 1st, 4th, and 5th notes of G major as chord roots.
 
<u> <b> WHY LEARN THIS NOW? </b> </u>
Every chord you play is built from scale notes. C major chord (C-E-G) uses the 1st, 3rd, and 5th notes of C major. This relationship between scales and chords is the foundation of all music theory on guitar.`,
    },
    {
      title: "C Major Scale On One String",
      img: scale,
      info: `Playing the major scale on a single string is the clearest way to physically feel the whole step / half step pattern and connect theory to the fretboard.
 
<u> <b> C MAJOR ON THE B STRING (2nd string) </b> </u>
The B string opens on B, so C is at the 1st fret:
 
  Fret 1  = C  (root)
  Fret 3  = D  (whole step from C)
  Fret 5  = E  (whole step from D)
  Fret 6  = F  (half step from E — only 1 fret!)
  Fret 8  = G  (whole step from F)
  Fret 10 = A  (whole step from G)
  Fret 12 = B  (whole step from A)
  Fret 13 = C  (half step from B — only 1 fret!)
 
Notice the pattern: 2-2-1-2-2-2-1 frets between notes. That is the W-W-H-W-W-W-H major scale pattern made physical.
 
<u> <b> C MAJOR ON THE LOW E STRING (6th string) </b> </u>
C is at the 8th fret of the low E string:
  Fret 8  = C
  Fret 10 = D
  Fret 12 = E
  Fret 13 = F (only 1 fret!)
  Fret 15 = G
  Fret 17 = A
  Fret 19 = B
  Fret 20 = C
 
<u> <b> THE KEY INSIGHT </b> </u>
The pattern of fret distances is the same on every string (adjusting for the B string's major third tuning). Once you know the W-W-H-W-W-W-H pattern and the starting note, you can play any major scale on any string. This is how moveable scale patterns work across the entire fretboard.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Understanding Keys": [
    {
      title: "What Playing In A Key Means",
      info: `A key is the home base of a piece of music — the note and scale that everything else revolves around and "wants" to return to.
 
<u> <b> WHAT DOES "PLAYING IN A KEY" MEAN? </b> </u>
When a song is "in the key of G," it means:
- The G note feels like home — the most resolved, resting note
- The chord progression is built from notes of the G major scale
- Lead guitar solos use notes from the G major scale
 
<u> <b> THE CHORDS IN A KEY </b> </u>
Every major key has 7 chords built from its scale notes with this consistent major/minor pattern:
  1 = Major (I)
  2 = Minor (ii)
  3 = Minor (iii)
  4 = Major (IV)
  5 = Major (V)
  6 = Minor (vi)
  7 = Diminished (vii°) — rarely used at beginner level
 
<u> <b> KEY OF G EXAMPLE </b> </u>
  I   = G Major
  ii  = Am (A minor)
  iii = Bm (B minor)
  IV  = C Major
  V   = D Major
  vi  = Em (E minor)
 
This is why G, C, D, and Em appear together constantly in songs — they all belong to the key of G.
 
<u> <b> THE I-IV-V PROGRESSION </b> </u>
The 1st, 4th, and 5th chords of any key are the most powerful and most used in all music.
  Key of G: G - C - D
  Key of A: A - D - E
  Key of C: C - F - G
This three-chord pattern is the backbone of blues, rock, country, and folk.`,
    },
    {
      title: "Why Keys Matter For Beginners",
      info: `Understanding keys isn't just theory — it has immediate, practical uses for learning songs, jamming, and communicating with other musicians.
 
<u> <b> PRACTICAL USE 1 — FIGURING OUT SONGS FASTER </b> </u>
When you hear a new song and want to play it, identify the key. Once you know the key, you instantly know which chords are most likely to appear. Instead of guessing randomly, you have a shortlist of 6–7 chords that all work together. This is how musicians "figure out songs by ear."
 
<u> <b> PRACTICAL USE 2 — JAMMING WITH OTHER MUSICIANS </b> </u>
When someone says "let's jam in G" they mean: use G major scale notes for your melody and solo. All the chords belong to the key of G. You don't need the full chord chart — you already know the framework.
 
<u> <b> PRACTICAL USE 3 — TRANSPOSING </b> </u>
Moving a song to a different key keeps all the same chord relationships but starts on a different root note. The song sounds the same; it's just higher or lower. Knowing keys lets you transpose instantly by moving the same chord pattern to a new starting point.
 
<u> <b> RELATIVE MINOR </b> </u>
Every major key has a relative minor — a minor key that shares all the same notes and chords. The relative minor starts on the 6th degree of the major scale.
  G major ↔ E minor (same notes, same chords, different tonal centre)
  C major ↔ A minor
  D major ↔ B minor
 
<u> <b> SONGS IN G MAJOR AND E MINOR </b> </u>
Songs in G major and songs in E minor use the same 6 chords — they just treat different chords as "home." This is why the same four chords (G, C, D, Em) work for both "happy" songs in G and "darker" songs in Em.`,
    },
  ],
};
