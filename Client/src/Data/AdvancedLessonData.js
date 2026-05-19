// MODULE 1
// Caged systems
import caged from '../assets/Advanced/caged.png'
// 3 notes per string
import threenps from '../assets/Advanced/threenps.png'
// Fretboard Note 
import octaveShapes from '../assets/Advanced/octave-shapes.webp'
// Horizontal Vertical Playing
import horiver from '../assets/Advanced/hori-ver.jpg'

// MODULE 2
// Sweep Picking
import sweep from '../assets/Advanced/sweep-picking.jpg'
// Economy Picking
import economy from '../assets/Advanced/economy-picking.png'
// Hybrid Picking
import hybrid from '../assets/Advanced/hybrid-picking.jpg'
// Advanced Bending
import micronelprebends from '../assets/Advanced/micronel-pre-bends.png'

// MODULE 3
// 7 modes
import seven from '../assets/Advanced/seven-modes.png'
// Modal Chord Progressions
import modalchord from '../assets/Advanced/modal-progressions.png'
// Harmonic minor scale
import harmonic from '../assets/Advanced/harmonic-minor-scale.png'
import phrdominant from '../assets/Advanced/phr-dominant-mode.png'
// Melodic minor scale
import melodicminor from '../assets/Advanced/melodic-minor.webp'
import impmodes from '../assets/Advanced/imp-modes.png'

// MODULE 4: Advanced Harmony
// Extended Chords
import extended from '../assets/Advanced/extended-chords.png'
// Altered Chords
import altered from '../assets/Advanced/altered-chords.png'
// Borrowing Chords
import borrowing from '../assets/Advanced/borrowing-chords.png'


// MODULE 5: Advanced Harmony
// No images
// MODULE 6: Advanced Harmony
// No images


export const Advanced = {

  // ── MODULE 1: Fretboard Mastery ──────────────────────────────────

  "The CAGED System": [
    {
      title: "What Is CAGED",
      img: caged,
      info: `The CAGED system is the most practical framework for mastering the entire guitar neck. Once understood, you will never feel "lost" on the fretboard again.

<u> <b> WHAT IS CAGED? </b> </u>
CAGED stands for the 5 open chord shapes every guitarist knows: C, A, G, E, and D. The insight is that every major chord on the entire fretboard is simply one of these 5 shapes moved to a new position.

<u> <b> THE FIVE POSITIONS FOR ONE CHORD </b> </u>
Take C major as an example. C major can be played in 5 different positions across the neck, each using a different shape:
  Position 1: C shape (open position, frets 1-3)
  Position 2: A shape (barre at 3rd fret)
  Position 3: G shape (around 5th fret)
  Position 4: E shape (barre at 8th fret)
  Position 5: D shape (around 10th fret)
  Then back to C shape at the 12th fret (octave)

Together, these 5 positions cover the entire neck. They connect and overlap — the top of one shape connects to the bottom of the next.

<u> <b> HOW TO LEARN CAGED </b> </u>
1. Start with E and A shape barre chords (already covered in Intermediate)
2. Add the C shape barre (root on 5th string, 3rd fret for C)
3. Add the G shape (root on 6th string, 3rd fret position, G-shaped voicing)
4. Add the D shape (root on 4th string)

<u> <b> SCALES WITHIN CAGED </b> </u>
Each chord position contains an associated pentatonic and major scale pattern. Once you link a chord shape to its scale position, improvising over chord changes becomes visual — you can see the chord shape and know exactly where the scale notes are around it.`,
    },
    {
      title: "Connecting All Positions Seamlessly",
      info: `Knowing the 5 CAGED shapes individually is just the beginning. The real power is connecting them into one continuous, fluid map of the entire neck.

<u> <b> THE OVERLAP PRINCIPLE </b> </u>
Adjacent CAGED positions overlap by 2-3 frets. The highest notes of one position are the lowest notes of the next. This means there are no "gaps" on the neck — every fret belongs to at least one CAGED position.

<u> <b> PRACTISING THE CONNECTION </b> </u>
Take G major. Play the E-shape barre (fret 3). Now identify the next shape — the D shape starts where the E shape ends. Shift into it. Then the C shape. Then A shape. Then G shape. You've just travelled the entire length of the neck on one chord.

<u> <b> PRACTICAL RESULT — POSITIONAL THINKING </b> </u>
Instead of asking "where are the notes of C major?" you ask "which CAGED position am I in?" Once you identify the position, you instantly know:
- The chord voicing available in that area
- The pentatonic scale pattern associated with it
- The major scale pattern surrounding it

This is how professional guitarists navigate the fretboard intuitively during live improvisation.

<u> <b> CAGED AND SCALES TOGETHER </b> </u>
Each CAGED position has a corresponding pentatonic box:
  <b> E shape position </b> → Pentatonic Position 1 (the Box)
  <b> D shape position </b> → Pentatonic Position 2
  <b> C shape position </b> → Pentatonic Position 3
  <b> A shape position </b> → Pentatonic Position 4
  <b> G shape position </b> → Pentatonic Position 5

Learn these pairings and your scale knowledge and chord knowledge become one unified system rather than two separate things.

<u> <b> THE LONG-TERM PAYOFF </b> </u>
Once CAGED is deeply internalised, you stop thinking about the guitar as "frets and strings" and start thinking about it as "harmonic regions" — areas of the neck where specific chords and scales live together. This is the mental model of every advanced guitarist.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "3 Notes Per String Scales": [
    {
      title: "The 3NPS System",
      img: threenps,
      info: `The 3-notes-per-string (3NPS) system is the preferred scale system of professional lead guitarists. It enables faster playing, consistent picking patterns, and seamless across-neck movement.

<u> <b> WHY 3 NOTES PER STRING? </b> </u>
Pentatonic box patterns have 2 notes per string. While excellent for beginners and intermediate players, 2NPS patterns limit speed because each string crossing requires a picking direction change very frequently. 3NPS patterns give your picking hand more time on each string before crossing — allowing higher speeds with less effort.

<u> <b> THE PATTERN </b> </u>
Every string has exactly 3 notes from the scale. This creates a consistent, repeatable picking pattern (down-up-down across every string) that your picking hand can fully automate.

<u> <b> G MAJOR SCALE — 3NPS POSITION 1 (root at 6th string, 3rd fret) </b> </u>
  e |--2--3--5--|
  B |--2--3--5--|
  G |--2--4--5--|
  D |--2--3--5--|
  A |--2--3--5--|
  E |--3--5--7--|

<u> <b> THE PICKING PATTERN PER STRING </b> </u>
With 3 notes per string, each string gets: D-U-D (down-up-down). Moving to the next string continues D-U-D. This is called "outside picking" at the string crossing and creates a very efficient picking arc.

<u> <b> WHY IT'S FASTER </b> </u>
With 2NPS, crossing to a new string requires an immediate direction change: D-U | U-D (awkward). With 3NPS, crossing continues in the same direction: D-U-D | D-U-D (fluid). This continuity is why 3NPS enables dramatically higher speeds.

<u> <b> FAMOUS PLAYERS WHO USE 3NPS </b> </u>
John Petrucci (Dream Theater), Paul Gilbert, Steve Morse, and virtually all modern shred and progressive rock guitarists use 3NPS as their primary scale system.`,
    },
    {
      title: "Connecting 3NPS Positions",
      info: `3NPS patterns become truly powerful when you connect all 7 positions into continuous across-neck runs — one of the most impressive techniques in advanced guitar playing.

<u> <b> THE 7 POSITIONS </b> </u>
G major scale has 7 positions using the 3NPS system (one starting from each scale degree). Each position spans exactly 2 frets in width, and positions connect more seamlessly than pentatonic boxes.

<u> <b> CONNECTING POSITIONS 1 AND 2 (G major) </b> </u>
Position 1 ends at fret 7 on the high e string.
Position 2 begins at fret 5 on the low E string.

The run across the entire neck (ascending G major):
  Start at fret 3 on low E (Position 1) → play through all strings → arrive at fret 19 on high e (Position 7)

This "burning across the neck" — a single continuous scale run from the lowest note to the highest — is the hallmark of professional lead guitar playing.

<u> <b> POSITION SHIFTING TECHNIQUE </b> </u>
When moving between positions, a guide finger maintains light contact with the string during the shift, guiding the hand to the new position without losing the string. This prevents the "jump" that disrupts the melodic line.

<u> <b> LEARNING ORDER </b> </u>
Position 1 (root position) → Position 2 → connect them in both directions → add Position 3 → connect all three → continue outward. Never learn all 7 simultaneously — build outward from Position 1.

<u> <b> PRACTICE WITH A METRONOME </b> </u>
Start at 60 BPM with 8th notes. Play Position 1 up and down cleanly. Then Position 2. Then connect both in one continuous run. Add 5 BPM only when the run is clean. Speed built this way is reliable — speed forced by skipping steps breaks down under performance pressure.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Fretboard Note Memorization": [
    {
      title: "Methods For Knowing Every Note Instantly",
      info: `Knowing every note on every string instantly — without calculating — is a hallmark of an advanced guitarist. It transforms how you think and communicate musically.

<u> <b> WHY IT MATTERS </b> </u>
When a bandmate says "let's play in Eb," or a chord chart shows an unfamiliar chord, knowing the notes on the fretboard lets you immediately find any chord shape, scale, or reference point you need without pausing to calculate.

<u> <b> METHOD 1 — LOW E AND A STRINGS FIRST </b> </u>
These two strings are most important: they contain the root notes for all barre chords and scale patterns. Memorise them as a priority.

Low E string natural notes:
  E(0)  F(1)  G(3)  A(5)  B(7)  C(8)  D(10)  E(12)

A string natural notes:
  A(0)  B(2)  C(3)  D(5)  E(7)  F(8)  G(10)  A(12)

Quiz yourself daily until these are instant. This alone unlocks every barre chord in every key.

<u> <b> METHOD 2 — OCTAVE SHAPES </b> </u>
The same note appears at multiple neck locations in predictable patterns:
  Same note: 2 strings higher, 2 frets higher (from the E/A/D/G string group)
  Same note: 2 strings higher, 3 frets higher (from the B string — major third adjustment)

Find C on the A string (3rd fret) → same C appears on the G string (5th fret) and on the high e (8th fret). Octave shapes let you find any note quickly from a known position.

<u> <b> METHOD 3 — 12TH FRET RESET </b> </u>
At the 12th fret, every string repeats its open note one octave higher. Frets 12-24 are an exact repeat of frets 0-12. Know frets 1-12 and you know the entire neck.

<u> <b> METHOD 4 — DOT INLAY LANDMARKS </b> </u>
Memorise the notes at frets 3, 5, 7, 9, and 12 on each string (where the dot inlays are). Use these as reference points and calculate up or down from the nearest landmark for any other fret.

<u> <b> DAILY PRACTICE </b> </u>
Pick a random fret and string. Name the note immediately. Check yourself. 5 minutes daily. Within one month the entire fretboard becomes familiar.`,
    },
    {
      title: "Octave Shapes and Pattern Recognition",
      img: octaveShapes,
      info: `Octave shapes are the fastest practical tool for navigating the fretboard — once you know one instance of a note, you can instantly locate it everywhere else on the neck.

<u> <b> THE TWO OCTAVE SHAPES </b> </u>

<b> SHAPE 1 — 2 strings up, 2 frets up (from strings 6→4, 5→3, 4→2) </b>
Example: G at the 3rd fret of the 6th string
  → Same G appears at the 5th fret of the 4th string
  → Same G appears at the 7th fret of the 3rd string
Pattern: skip one string, move 2 frets toward the body.

<b> SHAPE 2 — 2 strings up, 3 frets up (when crossing the B string) </b>
Example: G at the 8th fret of the 2nd string (B string)
Going from the G string (3rd) to the B string (2nd): add 1 extra fret due to the major third tuning gap.
  G at 5th fret of D string → G at 8th fret of B string (not 7th — B string exception adds 1)

<u> <b> THE B STRING EXCEPTION </b> </u>
The B string is tuned a major 3rd above the G string instead of a perfect 4th. This means any shape crossing the B string shifts 1 fret higher than expected. This exception applies to ALL patterns (scales, chords, octave shapes) involving the B string. Internalising this exception is essential for advanced fretboard navigation.

<u> <b> PRACTICAL APPLICATION </b> </u>
You're playing in the key of D and need to find the chord tones of D major (D, F#, A) across the neck. Start with D on the A string (5th fret). Use octave shapes to find D everywhere else. Then do the same for F# and A. In minutes you've mapped all D major chord tones across the entire neck — the foundation for CAGED and advanced chord voicings.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Horizontal vs Vertical Playing": [
    {
      title: "Vertical vs Horizontal Thinking",
      img: horiver,
      info: `Most beginners play vertically — staying in one position, using box patterns. Advanced players think horizontally — moving across the entire length of the neck. Mastery combines both.

<u> <b> VERTICAL PLAYING (POSITION-BASED) </b> </u>
Playing within a 4-5 fret window using box patterns. Strong for:
- Control and precision in one area
- Pentatonic licks and blues playing
- Chord-tone targeting in a specific register
- Building positional confidence and accuracy

<u> <b> HORIZONTAL PLAYING (LINEAR) </b> </u>
Playing across multiple positions, moving along one or two strings for extended stretches. Strong for:
- Dramatic, sweeping melodic lines spanning wide ranges
- Covering wide pitch ranges in a single phrase
- Position shifting and connecting different neck areas
- Imitating vocal and wind instrument phrasing

<u> <b> THE GUITAR NECK AS GEOGRAPHY </b> </u>
Think of the fretboard as a map:
  <b> Vertical </b> = staying in your neighbourhood
  <b> Horizontal </b> = travelling across the city
  <b> Mastery </b> = moving freely between both at will

<u> <b> ONE-STRING SCALES </b> </u>
Practice playing the G major scale entirely on one string (e.g., the B string). You'll cover 12 frets in one octave. This forces your hand to shift position continuously and builds horizontal orientation. It also reveals the note layout of the entire string in a linear, visually clear way.

<u> <b> WHEN EACH APPROACH IS SUPERIOR </b> </u>
<b> Blues playing: </b> vertical (box patterns, tight control, bending in one area)
<b> Classical-style runs: </b> horizontal (long scalar passages across the neck)
<b> Jazz comping: </b> vertical (chord voicings in specific positions)
<b> Rock shredding: </b> often horizontal (dramatic position-shifting runs)`,
    },
    {
      title: "Position Shifting and Combining Both",
      info: `Position shifting is the technique that enables smooth horizontal movement — the physical skill of moving your fretting hand from one position to another without disrupting the melodic line.

<u> <b> POSITION SHIFTING TECHNIQUE </b> </u>
When shifting position during a scale run or melodic phrase:
1. Identify the shift point — which finger moves first?
2. A "guide finger" maintains light contact with the string during the shift
3. The guide finger slides smoothly along the string to the new position
4. The hand arrives before the next note is due — never late
5. No audible scrape or pause occurs during the shift

<u> <b> THE GUIDE FINGER </b> </u>
The guide finger is whichever finger plays both the last note before the shift and the first note after it (or stays on the same string during the shift). Its continuous contact with the string:
- Prevents the "jump" that disrupts melodic lines
- Guides the hand to the precise target position
- Produces a subtle, expressive slide sound that enhances legato phrasing

<u> <b> COMBINING VERTICAL AND HORIZONTAL — THE PROFESSIONAL APPROACH </b> </u>
Great guitarists don't commit exclusively to either approach. They:
1. Enter a box position (vertical) for a specific lick or chord-tone phrase
2. Slide out horizontally to the next position
3. Settle into the new box for another phrase
4. Continue moving across the neck as the music dictates

The music directs the movement — not a rigid commitment to either approach.

<u> <b> PRACTISING THE COMBINATION </b> </u>
Take an Am backing track. Start in the pentatonic box at the 5th fret (vertical). After 4 bars, slide up to the next position (horizontal shift). Play from there for 4 bars. Shift again. Force yourself to cover 3 different positions across one solo. This conscious practice builds the habit of neck-wide thinking.`,
    },
  ],

  // ── MODULE 2: Advanced Techniques ───────────────────────────────

  "Sweep Picking": [
    {
      title: "Sweep Picking Explained",
      img: sweep,
      info: `Sweep picking is one of the most technically demanding and visually impressive guitar techniques — used to play arpeggios at very high speed with fluidity.

<u> <b> WHAT IS SWEEP PICKING? </b> </u>
Instead of alternate picking (down-up-down-up), sweep picking uses one continuous directional stroke across multiple strings in sequence. A downward sweep flows from the low strings to the high strings; an upward sweep flows back. Combined with the fretting hand playing one note per string, this produces arpeggios that sound fast and clean.

<u> <b> THE KEY INSIGHT — NOT STRUMMING </b> </u>
Sweep picking is NOT strumming. In strumming, all strings are hit simultaneously. In sweep picking, each string is struck individually in sequence — the pick flows like a slow, deliberate sweep — but each string is muted immediately after being picked (by releasing fretting pressure) so only one note sounds at a time. One note at a time, continuous pick direction: this is sweep picking.

<u> <b> THE FRETTING HAND ROLE </b> </u>
The fretting hand must:
- Place each finger just before the pick arrives at that string
- Release pressure immediately after the pick passes
- Never leave two fingers pressed simultaneously (this creates a chord, not an arpeggio)

This coordination of fretting hand timing with pick motion is what makes sweep picking technically demanding.

<u> <b> 3-STRING ARPEGGIO SHAPE (A minor) </b> </u>
  G |----5------|  ← 1 note
  D |----7------|  ← 1 note
  A |----7------|  ← 1 note

Sweep down: A string (7) → D string (7) → G string (5)
Sweep back up: G string (5) → D string (7) → A string (7)

<u> <b> LEARNING APPROACH </b> </u>
Start at 30 BPM — far slower than you think necessary. The muscle memory for simultaneous pick direction and fretting hand release must be built carefully. Speed comes naturally once the motion is clean. Forcing speed before the motion is clean produces a technique that breaks down at higher tempos.`,
    },
    {
      title: "3-String and 5-String Sweeps",
      info: `Once the basic sweep motion is internalised, extend the technique to 5-string arpeggios — the most commonly used sweep pattern in advanced guitar playing.

<u> <b> 3-STRING MAJOR ARPEGGIO (C major, starting 8th fret A string) </b> </u>
  G |----9------|  ← major 3rd (E)
  D |----10-----|  ← fifth (G)
  A |----8------|  ← root (C)

<u> <b> 3-STRING MINOR ARPEGGIO (A minor, starting 5th fret A string) </b> </u>
  G |----5------|  ← minor 3rd (C)
  D |----7------|  ← fifth (E)
  A |----7------|  ← root (A)

<u> <b> 5-STRING ARPEGGIO (A minor, full shape) </b> </u>
  e |----5------|  ← octave root (tap or hammer)
  B |----5------|  ← fifth (E)
  G |----5------|  ← minor 3rd (C)
  D |----7------|  ← fifth (E)
  A |----7------|  ← root (A)
  E |----5------|  ← root (A, lowest)

<u> <b> THE DIRECTION CHANGE AT THE TOP </b> </u>
A 5-string sweep descends from low E to high e, then reverses and ascends. The top note (high e string) often has a hammer-on or pull-off to add a note before reversing direction:
  Descend: low E → A → D → G → B → e
  Top: tap or hammer-on at the e string
  Ascend: e → B → G → D → A → low E

<u> <b> MUSICAL CONTEXT </b> </u>
Sweep picking is used in: neo-classical metal (Yngwie Malmsteen), progressive rock (Dream Theater), shred guitar. It is not appropriate for blues, folk, or most pop contexts. Knowing when NOT to use a technique is as important as knowing how to use it.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Economy Picking": [
    {
      title: "Economy Picking Principle",
      img: economy,
      info: `Economy picking combines alternate picking and sweep picking for maximum efficiency of motion — enabling the fastest and most effortless melodic runs across multiple strings.

<u> <b> THE PRINCIPLE </b> </u>
In strict alternate picking, moving from one string to the next always alternates direction regardless of which direction the string crossing moves. Economy picking instead continues in the same direction when crossing to a new string — eliminating the "wasted" opposite pick stroke.

<u> <b> ALTERNATE vs ECONOMY AT A STRING CROSSING </b> </u>
<b> Alternate picking: </b> ...D-U-D | cross to next string | U-D-U...
<b> Economy picking: </b> ...D-U-D | cross to next string | D-U-D... (pick continues downward into the new string)

The downstroke that plays the last note on string 1 flows directly into the first note on string 2 — one continuous downward movement rather than a direction reversal.

<u> <b> WHEN ECONOMY WINS OVER ALTERNATE </b> </u>
<b> Economy: </b> best for scalar runs across many strings — the pick flows in the direction of travel
<b> Alternate: </b> best for string skipping, single-string passages, and rhythmic accuracy where consistent pick direction matters

Most advanced guitarists use both — economy for scale runs, alternate for string-skipping licks. The choice is musical and practical, not dogmatic.

<u> <b> NOTABLE ECONOMY PICKERS </b> </u>
Frank Gambale (jazz fusion) is the most prominent advocate and has published method books on the subject. Many jazz and fusion guitarists use economy picking instinctively. Shawn Lane and Brett Garsed also use it extensively.

<u> <b> EFFICIENCY OF MOTION </b> </u>
The deeper principle behind economy picking: use the minimum number of pick strokes needed to play any given passage. Every "wasted" motion is energy spent that doesn't produce a note. Economy picking simply applies this efficiency principle to string crossings.`,
    },
    {
      title: "Applying Economy Picking to Scales",
      info: `The most practical application of economy picking is 3-notes-per-string scale runs — the combination produces the fastest, most fluid scalar passages on guitar.

<u> <b> 3NPS + ECONOMY PICKING — THE PERFECT PAIRING </b> </u>
With 3 notes per string, the pick pattern per string is D-U-D. When crossing to the next string in an ascending run:
  String 1: D-U-D (last stroke is D, going downward)
  Cross to string 2: continue D (sweep down into the new string)
  String 2: D-U-D
  Cross to string 3: continue D
  ...and so on ascending

Descending runs work the same way with upstrokes:
  String 6: U-D-U (last stroke is U, going upward)
  Cross to string 5: continue U (sweep up into the new string)
  String 5: U-D-U

<u> <b> THE RESULT </b> </u>
An ascending major scale run from low E to high e becomes one continuous, flowing motion — the pick never reverses direction unnecessarily. The result is a smooth, fast, effortless quality that alternate picking on the same run can't match.

<u> <b> LEARNING APPROACH </b> </u>
Step 1: Learn the G major scale Position 1 with 3NPS fingering (D-U-D per string)
Step 2: Practice with alternate picking first — make the fingering automatic before changing pick technique
Step 3: Relearn with economy picking — the string crossing direction change will feel unnatural initially
Step 4: Use a metronome at 60 BPM. Focus on the string crossing moments. Start slow.
Step 5: Build speed only when the crossing is clean and natural

<u> <b> THE COMMON MISTAKE </b> </u>
Students learn the economy picking motion at slow speeds but the motion "breaks down" at fast tempos and reverts to alternate picking. The fix: practice at the specific speed where the breakdown occurs and stay there until it's solid before going faster.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Finger Tapping": [
    {
      title: "Eddie Van Halen Style Tapping",
      info: `Tapping uses a picking-hand finger to fret notes on the neck, allowing melodic lines and arpeggios that span ranges impossible to reach with the fretting hand alone.

<u> <b> WHAT IS TAPPING? </b> </u>
You use a finger of your picking hand (usually the index or middle) to hammer-on directly onto the fretboard while the fretting hand simultaneously handles its own notes. This allows rapid two-hand legato passages spanning wide intervals.

<u> <b> THE BASIC TECHNIQUE </b> </u>
1. Place fretting hand fingers on the neck as normal (e.g., index at fret 5, ring at fret 7)
2. Bring a picking-hand finger down sharply onto a higher fret (e.g., fret 12)
3. Pull off the tapping finger with a slight downward flick — this sets the string vibrating
4. The fretting hand note (fret 7) now sounds without picking
5. Hammer-on back to fret 7 with the fretting hand ring finger
6. Repeat: tap 12 → pull off to 7 → pull off to 5 → hammer to 7 → tap 12...

<u> <b> TAB NOTATION </b> </u>
  e |--T12p7p5h7--|   → Tap fret 12, pull off to 7, pull off to 5, hammer to 7

<u> <b> THE VAN HALEN "ERUPTION" PATTERN </b> </u>
Eddie Van Halen's 1978 solo "Eruption" introduced tapping to mainstream rock. His core tapping pattern: rapid tap-pull-hammer-pull sequences on one string, covering a wide range, played at extremely high speed. The specific notes matter less than the fluidity and evenness of the three-note pattern.

<u> <b> HOLDING THE PICK WHILE TAPPING </b> </u>
Most rock guitarists hold the pick between their middle finger and thumb while tapping with the index finger (or hold it in the palm to free the index finger). Practice holding and retrieving the pick quickly — you'll need it after the tapping section.

<u> <b> THE ESSENTIAL REQUIREMENT </b> </u>
Every tap must be followed by a proper pull-off — not just lifting the finger. The pull-off motion (slight downward flick) is what sets the string vibrating for the lower note. Without it, the lower note won't sound.`,
    },
    {
      title: "Two-Hand Tapping Introduction",
      info: `Two-hand tapping extends the technique to using multiple fingers of both hands, enabling complex arpeggios, chord melodies, and passages that are completely impossible by conventional single-hand playing.

<u> <b> BEYOND ONE-FINGER TAPPING </b> </u>
Single-finger tapping uses one picking-hand finger alternating with two fretting-hand fingers. Two-hand tapping expands to:
- Multiple picking-hand fingers tapping different frets in sequence
- Both hands simultaneously tapping across all 6 strings
- Complete chord voicings tapped with both hands (8-finger tapping)

<u> <b> SIMPLE TWO-FINGER TAPPING </b> </u>
Adding a second tapping finger:
Fretting hand: index at fret 5, ring at fret 7
Picking hand: index taps fret 12, middle finger taps fret 10

Pattern: T12 - p7 - T10 - p7 - T12 - p7 - T10 - p7
This creates a 4-note repeating pattern covering a range impossible with one hand.

<u> <b> 8-FINGER TAPPING (STANLEY JORDAN / STEVE HOWE APPROACH) </b> </u>
Both hands tap chords and melodies simultaneously, treating the guitar like a piano keyboard. Each finger of both hands independently taps its own notes. This technique is highly specialised and requires years of development — it's mentioned here as a direction rather than an immediate goal.

<u> <b> RHYTHMIC EVENNESS — THE CORE CHALLENGE </b> </u>
Tapping naturally groups notes in triplets (tap-pull-hammer = 3 notes). Keeping these triplets rhythmically even — each note the same duration as the others — is the primary technical challenge. Use a metronome exclusively during tapping practice. Record yourself and listen back — uneven tapping is often invisible while playing but obvious on playback.

<u> <b> MUSICAL CONTEXTS FOR TAPPING </b> </u>
<b> Rock and metal solos: </b> dramatic, showy moments
<b> Neo-classical passages: </b> wide-interval arpeggios
<b> Ambient/atmospheric guitar: </b> harmonics combined with tapping
NOT appropriate for: blues, folk, acoustic rhythm — context always determines technique choice.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Hybrid Picking": [
    {
      title: "Hybrid Picking Technique",
      img: hybrid,
      info: `Hybrid picking combines holding a pick with simultaneously using the middle, ring, and pinky fingers of the picking hand. It bridges the gap between pick playing and fingerstyle, offering capabilities neither alone can provide.

<u> <b> HOW IT WORKS </b> </u>
Hold the pick between thumb and index finger as normal. Your middle (m), ring (a), and pinky fingers are free to pluck strings independently. You can pick one string with the pick and simultaneously pluck a higher string with a finger — impossible with a pick alone and impractical with pure fingerstyle repositioning.

<u> <b> THE COUNTRY CHICKEN-PICKING SOUND </b> </u>
Hybrid picking is the defining technique of country lead guitar. The pick handles the low strings with snappy, aggressive attack while the fingers pluck the high strings for bright, banjo-like notes. Rapidly alternating between pick and fingers at speed creates the "clucking" country sound.

<u> <b> BASIC HYBRID PATTERN (double stop) </b> </u>
Pick the G string with the pick → simultaneously pluck the high e with the ring finger. The combination of two strings at once with different attack characters is the hybrid picking signature.

Tab: D string picked, B string finger:
  B |--5--|  ← ring finger plucks
  D |--5--|  ← pick strikes
Both simultaneously.

<u> <b> ROCK AND BLUES APPLICATION </b> </u>
Hybrid picking allows complex chord embellishments while maintaining a strummed rhythm. Play a power chord with the pick, then pluck a hammer-on embellishment on the high strings with the middle finger — without changing pick grip.

<u> <b> COMPLEX VOICINGS </b> </u>
Extended and spread voicings (where chord notes are spread across non-adjacent strings) are much easier with hybrid picking — the fingers can pluck the wide-interval strings that a flat pick would need to awkwardly skip across.`,
    },
    {
      title: "Country Bends and Complex Voicings",
      info: `Once the basic hybrid motion is comfortable, two specific applications — country bends and complex chord voicings — represent the technique's highest musical payoffs.

<u> <b> COUNTRY BENDS WITH HYBRID PICKING </b> </u>
The "chicken picking" technique combines:
1. A string bend on a lower string (pick)
2. A simultaneously plucked open string or fretted note on a higher string (finger)
The result: two notes at different pitches sounding simultaneously, one bending upward while the other stays fixed. This is the exact sound of a pedal steel guitar — impossible to replicate any other way on standard guitar.

Example — G string bend + B string pluck:
  B |--0--|  ← ring finger plucks open B string
  G |--7b9|  ← pick bends G string from 7 up to pitch of 9
Both simultaneously. The open B rings while the G string bends up to meet it and passes it.

<u> <b> ADDING THE "SNAP" </b> </u>
Country chicken-picking has a characteristic snapping attack. To achieve it: slightly dig the finger into the string and pull it slightly away from the fretboard before releasing. The snap as the string releases against the fretboard creates the percussive pop that defines the sound.

<u> <b> COMPLEX VOICINGS — WIDE INTERVALS </b> </u>
Many advanced chord voicings use notes on non-adjacent strings — impossible to arpeggiate naturally with just a flat pick. Hybrid picking solves this:

A13 voicing:
  e |--0--|  ← ring finger
  B |--0--|  ← middle finger
  G |--1--|  ← pick
  D |--0--|
  A |--0--|
  E |--x--|

The pick handles the G string while the fingers simultaneously pluck B and e. All three sound together cleanly.

<u> <b> THE TRANSFER TO JAZZ AND FUSION </b> </u>
Jazz guitarists use hybrid picking for chord-melody playing — simultaneously picking bass notes with the pick and plucking chord tones with the fingers, producing full arrangements without accompaniment.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Advanced Vibrato and Bending": [
    {
      title: "Microtonal Bends and Pre-Bends",
      img: micronelprebends,
      info: `Advanced bending techniques go beyond standard half-step and full-step bends to include subtle pitch manipulations that bring extraordinary expressiveness to lead playing.

<u> <b> MICROTONAL BEND (QUARTER-TONE BEND) </b> </u>
A quarter-tone bend raises the pitch by half of a half-step — an interval that doesn't exist in standard Western harmony but is deeply felt in blues and vocal music. It's the "almost-in-tune" note that gives Delta blues and country lead guitar its crying, expressive quality.

To execute: pick the note and push the string upward with minimal force — barely enough to raise pitch slightly. The note should sound neither entirely in tune nor a full half-step sharp. This unstable, between-notes quality is intentional and emotionally powerful.

<u> <b> PRE-BEND </b> </u>
Bend the string to the target pitch before picking — the string is already bent when the pick strikes it. Then release downward to the unbent pitch. The listener hears the note starting high and falling, rather than the usual rising bend.

TAB: (7b9)r7 — parentheses indicate the bend happens before the pick strike, then release from 9 pitch back to 7 pitch.

<u> <b> PRE-BEND AND RELEASE COMBINED </b> </u>
Combine pre-bend with a ringing open string: the picked pre-bent note falls while an open string rings simultaneously — a traditional country pedal-steel sound achievable on regular guitar.

<u> <b> BEND INTONATION AT THE ADVANCED LEVEL </b> </u>
Advanced bending is not just reaching the target pitch — it's controlling the speed of arrival, the amount of time spent at the peak pitch, and the character of the release. A bend that arrives at the target pitch quickly and stays there communicates differently from one that glides slowly to the target and immediately releases. Both are tools in the expressive vocabulary.`,
    },
    {
      title: "Expressive Vibrato Control",
      info: `Advanced vibrato is not one fixed speed and width — it is a continuously variable expression tool that communicates emotional nuance no other technique can.

<u> <b> SPEED AND WIDTH AS EXPRESSIVE VARIABLES </b> </u>
Every combination of vibrato speed and width produces a different emotional quality:
  <b> Slow + wide: </b> maximum emotional weight, vulnerability, crying quality (BB King, David Gilmour)
  <b> Fast + narrow: </b> intensity, urgency, controlled aggression (Eddie Van Halen high notes)
  <b> Slow + narrow: </b> gentle warmth, subtle colour (jazz and classical)
  <b> Accelerating: </b> starts slow and narrow, gradually increases — creates a natural swell

<u> <b> TIMING OF VIBRATO ONSET </b> </u>
<b> Beginning of note: </b> let it sustain plain for a brief moment before adding vibrato. This "speaking" of the note before the vibrato begins sounds more vocal and intentional.
<b> Immediate vibrato on attack: </b> sounds urgent, aggressive, raw — appropriate in specific contexts.
<b> Delayed vibrato after a bend: </b> sustain the bent pitch briefly before adding vibrato at the top — the most expressive blues technique.

<u> <b> THE ACCELERATING VIBRATO </b> </u>
Start the vibrato slow and narrow immediately after picking. Gradually increase speed and width through the note's duration. The note builds from subtle to intensely expressive — mirroring how a singer's voice naturally vibrates more intensely on sustained notes. This is the advanced technique used by Gilmour, Santana, and Gary Moore.

<u> <b> VIBRATO ON DIFFERENT STRINGS </b> </u>
The same wrist rotation produces different results on different strings due to their thickness and tension. Develop vibrato individually on every string — don't assume the motion that works on the G string will feel or sound the same on the B string.

<u> <b> YOUR PERSONAL VIBRATO </b> </u>
After years of playing, your vibrato will be as individual as your fingerprint. Every choice — speed, width, timing, onset, release — combines into a recognisable signature. The path to personal vibrato is not copying one player but absorbing many and allowing your own preferences to emerge through thousands of hours of expressive playing.`,
    },
  ],

  // ── MODULE 3: Modes In Depth ─────────────────────────────────────

  "All 7 Modes of the Major Scale": [
    {
      title: "The 7 Modes — Complete Reference",
      img: seven,
      info: `At the advanced level, modes cease to be abstract theory and become practical, expressive tools for improvisation and composition.

<u> <b> IONIAN (1st mode) = The Major Scale </b> </u>
Formula: W W H W W W H
Character: Bright, happy, resolved
Use over: Major chords, I chord in major key, pop, country
Example: C Ionian = C D E F G A B

<u> <b> DORIAN (2nd mode) </b> </u>
Formula: W H W W W H W
Character: Minor but sophisticated — "cool minor"
Unique note: Raised 6th compared to natural minor
Use over: Minor 7th chords, ii chord in major key, jazz, funk-rock
Example: D Dorian = D E F G A B C
Famous use: "Oye Como Va" (Santana), most jazz minor ii chords

<u> <b> PHRYGIAN (3rd mode) </b> </u>
Formula: H W W W H W W
Character: Dark, tense, exotic — Spanish/flamenco character
Unique note: Flat 2nd (one semitone above root)
Use over: iii chord in major key, flamenco, metal
Famous use: Metallica's "Wherever I May Roam," flamenco guitar

<u> <b> LYDIAN (4th mode) </b> </u>
Formula: W W W H W W H
Character: Dreamy, floating, otherworldly — "the sci-fi scale"
Unique note: Raised 4th (tritone above root)
Use over: Major 7th chords, IV chord in major key, film music
Famous use: John Williams film scores, "Flying in a Blue Dream" (Satriani)

<u> <b> MIXOLYDIAN (5th mode) </b> </u>
Formula: W W H W W H W
Character: Major but bluesy — "dominant" sound
Unique note: Flat 7th compared to major scale
Use over: Dominant 7th chords, V chord, blues-rock, classic rock
Famous use: Nearly all blues-rock leads, Beatles songs

<u> <b> AEOLIAN (6th mode) = Natural Minor Scale </b> </u>
Formula: W H W W H W W
Character: Sad, melancholic, serious
Use over: Minor chords, vi chord in major key, rock, ballads

<u> <b> LOCRIAN (7th mode) </b> </u>
Formula: H W W H W W W
Character: Unstable, dissonant — the "bad" sound
Unique note: Flat 2nd AND flat 5th
Use over: Diminished chords, vii° chord — rarely used in practice`,
    },
    {
      title: "Hearing the Modal Difference",
      info: `Knowing the formulas of modes is theory. Hearing the difference between them in a musical context is the actual skill. Here is how to develop modal hearing.

<u> <b> THE CHARACTERISTIC NOTE </b> </u>
Every mode has one note that most strongly defines its character — the note that is different from the nearest "obvious" scale (major or natural minor). Targeting and emphasising this characteristic note when playing in a mode makes the modal colour clear.

<u> <b> MODE CHARACTERISTIC NOTES </b> </u>
  <b> Dorian: </b> the raised 6th (F# in A Dorian) — brighter than natural minor
  <b> Phrygian: </b> the flat 2nd (F in E Phrygian) — creates the Spanish tension
  <b> Lydian: </b> the raised 4th (F# in C Lydian) — the floating, dream quality
  <b> Mixolydian: </b> the flat 7th (F in G Mixolydian) — the bluesy dominant quality
  <b> Locrian: </b> the flat 5th (Bb in B Locrian) — the extreme instability

<u> <b> LISTENING EXERCISE </b> </u>
Find a single-chord backing track (e.g., an Am7 vamp). Play A natural minor (Aeolian) over it. Listen for the sound. Now raise the F to F# (A Dorian). Listen to how the character changes — same tonal centre, dramatically different flavour. This direct comparison is the fastest way to train modal hearing.

<u> <b> MODAL CONTEXT MATTERS </b> </u>
The same scale sounds different depending on the harmonic context. A Dorian sounds like "Dorian" only when A is clearly established as the tonal centre. Over a C major chord progression, those same notes would sound like C major (Ionian). The chord progression creates the mode, not just the scale.

<u> <b> TRANSCRIBING MODAL MUSIC </b> </u>
Find songs known to use specific modes (Santana for Dorian, Satriani for Lydian) and transcribe the leads. Identify the characteristic note. Notice when the guitarist emphasises it. This direct connection between sound and theory builds modal hearing faster than any theoretical exercise.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Modal Chord Progressions": [
    {
      title: "Creating Modal Progressions",
      img: modalchord,
      info: `Modes are not useful in isolation — they become powerful when combined with chord progressions that establish and reinforce the modal tonal centre.

<u> <b> THE COMMON MISTAKE </b> </u>
Many guitarists learn mode scales as shapes, then play them over chord progressions that don't support the mode. The result sounds wrong — not because the notes are wrong, but because the harmonic context doesn't establish the modal home base. The chord progression creates the mode, not the scale alone.

<u> <b> HOW TO CREATE A MODAL PROGRESSION </b> </u>
You need chord progressions that: (1) establish the mode's root as the tonal centre, and (2) include the characteristic chord that confirms the mode's specific colour.

<u> <b> DORIAN PROGRESSION (A Dorian) </b> </u>
Notes: A B C D E F# G
Characteristic chord: D major (contains F# — distinguishes Dorian from Aeolian)
Progression: Am7 - D - Am7 - G
The Am7 establishes A as home; the D major confirms Dorian (not plain A minor).

<u> <b> MIXOLYDIAN PROGRESSION (G Mixolydian) </b> </u>
Notes: G A B C D E F natural
Characteristic chord: F major (the F natural chord — impossible in G major)
Progression: G - F - C - G
Used in countless rock songs. The F chord is the Mixolydian signature.

<u> <b> LYDIAN PROGRESSION (C Lydian) </b> </u>
Notes: C D E F# G A B
Characteristic chord: D major (F# only exists in Lydian, not standard C major)
Progression: Cmaj7 - D - Cmaj7
The Cmaj7 establishes home; the D major confirms the Lydian raised 4th.

<u> <b> PHRYGIAN PROGRESSION (E Phrygian) </b> </u>
Notes: E F G A B C D
Characteristic movement: Em → F major (F natural one semitone above root)
Progression: Em - F - Em - F
The F chord — just one semitone above E — is the defining Phrygian sound.`,
    },
    {
      title: "How To Hear the Modal Centre",
      info: `Identifying the modal centre of a piece of music — knowing which mode is being used — is the advanced analytical skill that connects theory to your ears.

<u> <b> WHAT IS THE MODAL CENTRE? </b> </u>
The modal centre is the note (and mode) that sounds like "home" in a given musical context. In a Dorian piece in A, the note A sounds resolved, arrived, at rest. All other notes create varying degrees of tension relative to it.

<u> <b> CLUE 1 — THE LOWEST BASS NOTE </b> </u>
The bass note that appears most often and on the strongest beats is usually the modal root. In a G - F - C - G progression, G appears on the strongest beats — G is the modal root. The F chord (b7 of G) confirms Mixolydian.

<u> <b> CLUE 2 — THE CHORD THAT RESOLVES EVERYTHING </b> </u>
The chord that other chords "want" to move toward is the I chord. Identify the chord that provides the greatest sense of rest and arrival — that's your tonic chord and root of the mode.

<u> <b> CLUE 3 — THE CHARACTERISTIC CHORD </b> </u>
Find the chord in the progression that "shouldn't" be there according to the obvious major or minor key. That unexpected chord is usually the one confirming the mode:
  <b> Unexpected F major in a G context </b> → Mixolydian (flat 7th)
  <b> Unexpected D major in an A minor context </b> → Dorian (raised 6th)
  <b> Unexpected F major in an E minor context </b> → Phrygian (flat 2nd)

<u> <b> TRAINING YOUR EAR </b> </u>
Take 5 songs you know that use specific modes. Listen with the characteristic note in mind. When the characteristic note or chord appears, notice how it sounds — notice the specific colour it creates. Over time, your ear begins recognising modal colours immediately rather than analytically.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Harmonic Minor Scale": [
    {
      title: "The Harmonic Minor Scale",
      img: harmonic,
      info: `The harmonic minor scale is one of the most distinctive and emotionally powerful scales in guitar music. Its unique interval creates an exotic, tense, "Spanish" or "Arabian" sound.

<u> <b> WHAT IS IT? </b> </u>
The harmonic minor scale is the natural minor scale (Aeolian) with one alteration: the 7th scale degree is raised by one half step.

A natural minor:   A B C D E F G A
A harmonic minor:  A B C D E F G# A

The single G# (raised 7th) creates an augmented 2nd interval between the 6th and 7th degrees (F to G# = 3 semitones). This unusual interval is what gives harmonic minor its exotic, tense character.

<u> <b> WHY IS IT CALLED "HARMONIC" MINOR? </b> </u>
The raised 7th creates a stronger V7 chord in the minor key. In A natural minor, the V chord is Em (weak pull back to Am). Raising G to G# makes the V chord E major (or E7) — which has a dramatically stronger resolution back to Am. This stronger dominant-to-tonic pull is essential for "harmonic" purposes — hence the name.

<u> <b> THE "SPANISH" / "ARABIAN" SOUND </b> </u>
The augmented 2nd interval (F to G#) is the sound of flamenco, Middle Eastern music, and dramatic film scores. This interval doesn't appear in the standard major or natural minor scale — it's entirely unique to harmonic minor and its modes.

<u> <b> A HARMONIC MINOR BOX (5th fret position) </b> </u>
  e |--5--7--8--|
  B |--5--6--8--|
  G |--4--5--7--|
  D |--5--7--8--|
  A |--5--7--8--|
  E |--5--7--8--|

<u> <b> FAMOUS USES </b> </u>
Yngwie Malmsteen built his entire neo-classical metal style on harmonic minor. Also prominent in flamenco, Middle Eastern music, and Baroque-influenced guitar.`,
    },
    {
      title: "Phrygian Dominant Mode",
      img: phrdominant,
      info: `Phrygian Dominant is the 5th mode of the harmonic minor scale. It produces the "Spanish" and "Arabian Nights" sound — one of the most instantly recognisable modal colours in all of music.

<u> <b> HOW IT'S DERIVED </b> </u>
Take A harmonic minor: A B C D E F G#
Start on the 5th degree (E) and play to the octave: E F G# A B C D E
This is E Phrygian Dominant.

<u> <b> THE DEFINING INTERVAL </b> </u>
The flat 2nd (F natural, one semitone above E) is the defining note. Standard Phrygian also has a flat 2nd, but Phrygian Dominant raises the 3rd to major (G# instead of G). The combination of a major 3rd with a flat 2nd — present in no other common scale — creates the exotic dominant-with-Spanish-flavour sound.

E PHRYGIAN DOMINANT NOTES: E - F - G# - A - B - C - D

<u> <b> THE SIGNATURE CHORD MOVEMENT </b> </u>
Play E major (E-G#-B) then move to F major (F-A-C) — just one semitone above the root chord. This E → F movement is the signature Phrygian Dominant chord change. It's the opening of countless flamenco progressions and the harmonic engine of "Spanish" guitar music.

<u> <b> E PHRYGIAN DOMINANT (open position) </b> </u>
  e |--0--1--4--|
  B |--0--1--3--|
  G |--1--2--4--|
  D |--2--3-----|
  A |--2--3-----|
  E |--0--1-----|

<u> <b> USE IN ROCK AND METAL </b> </u>
Metallica's "Wherever I May Roam," many Megadeth and Black Sabbath riffs, and virtually all neo-classical metal use Phrygian Dominant. The raised 3rd in an otherwise dark, flat-heavy scale creates dramatic harmonic tension perfectly suited to aggressive music.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Melodic Minor and Its Modes": [
    {
      title: "Jazz Melodic Minor Scale",
      img: melodicminor,
      info: `The melodic minor scale is the most harmonically versatile minor scale — the foundation of jazz improvisation, creating harmonic colours unavailable from natural or harmonic minor.

<u> <b> WHAT IS MELODIC MINOR? </b> </u>
Classical melodic minor raised the 6th and 7th ascending, reverted to natural minor descending. Jazz melodic minor keeps the raised 6th and 7th in both directions — this "jazz melodic minor" is what guitarists mean when they say "melodic minor."

A MELODIC MINOR: A B C D E F# G# A
Compare to A natural minor: A B C D E F G
Two notes are raised: the 6th (F→F#) and 7th (G→G#).

<u> <b> THE SOUND </b> </u>
Melodic minor has a "smoky," sophisticated quality — it's minor in feel (the flat 3rd gives it darkness) but the raised 6th and 7th prevent the heaviness of natural or harmonic minor. Sophisticated and slightly unstable in a beautiful way — perfect for jazz.

<u> <b> A MELODIC MINOR BOX (5th fret) </b> </u>
  e |--5--7--8--|
  B |--5--7--8--|
  G |--4--6--7--|
  D |--5--7--8--|
  A |--5--7--8--|
  E |--5--7--8--|

<u> <b> PRACTICAL STARTING POINT </b> </u>
Learn the scale as a shape first — then focus on its two most musically valuable modes: Lydian Dominant and the Altered Scale.`,
    },
    {
      title: "Lydian Dominant and Altered Scale",
      img: impmodes,
      info: `The two most important modes of melodic minor for guitarists are Lydian Dominant (4th mode) and the Altered Scale (7th mode). These are the most used jazz improvisation tools beyond the basic modes.

<u> <b> LYDIAN DOMINANT (4th mode of melodic minor) </b> </u>
Starting on the 4th degree of A melodic minor (D):
D - E - F# - G# - A - B - C - D
This is D Lydian Dominant: major with a raised 4th (#11) AND a flat 7th.

<b> THE SOUND: </b> Combines the dreamy floating quality of Lydian (#4) with the unresolved tension of Mixolydian (b7). The result: a dominant chord colour that floats rather than pushes. Used over dominant 7th chords where you want sophistication rather than blues.

<b> CHARACTERISTIC: </b> The #11 (raised 4th/tritone) — the note that defines Lydian Dominant and gives it its floating quality over a dominant chord.

<b> USE OVER: </b> D7, D9, D13 chords — especially in jazz contexts where the standard G Mixolydian sounds too plain.

<u> <b> THE ALTERED SCALE (7th mode of melodic minor) </b> </u>
Starting on the 7th degree of A melodic minor (G#):
G# - A - B - C - D - E - F# - G#
Also called the "Super Locrian" scale.

<b> THE SOUND: </b> Maximum harmonic tension over a dominant chord. This scale contains every possible alteration of a dominant chord: b9, #9, b5 (#11), and b13.

<b> USE OVER: </b> G#7alt (altered dominant) — creates the most intense possible tension before resolving to C# major or C# minor. Essential for bebop and modern jazz.

<u> <b> THE RULE </b> </u>
<b> Lydian Dominant: </b> use for a sophisticated, floating dominant sound (not too tense)
<b> Altered Scale: </b> use for maximum tension demanding immediate resolution
<b> Combined: </b> the complete jazz dominant chord vocabulary`,
    },
  ],

  // ── MODULE 4: Advanced Harmony ──────────────────────────────────

  "Extended Chords": [
    {
      title: "9th, 11th, and 13th Chords",
      img: extended,
      info: `Extended chords go beyond the basic 3-note triad to include the 7th, 9th, 11th, and 13th scale degrees. They are the language of jazz, soul, and sophisticated pop harmony.

<u> <b> BUILDING EXTENDED CHORDS </b> </u>
Start with a major triad (1-3-5) and keep stacking thirds:
  Add 7th  → 7th chord (1-3-5-7)
  Add 9th  → 9th chord (1-3-5-7-9)
  Add 11th → 11th chord (1-3-5-7-9-11)
  Add 13th → 13th chord (1-3-5-7-9-11-13)

The 9th = the 2nd an octave higher
The 11th = the 4th an octave higher
The 13th = the 6th an octave higher

<u> <b> TYPES OF 7TH CHORDS </b> </u>
<b> Major 7th (maj7): </b> 1-3-5-7. Natural 7th. Sound: warm, dreamy, sophisticated. E.g., Cmaj7
<b> Dominant 7th (7): </b> 1-3-5-b7. Flat 7th. Sound: tense, bluesy, wants to resolve. E.g., G7
<b> Minor 7th (m7): </b> 1-b3-5-b7. Sound: cool, smooth, jazz-influenced. E.g., Am7

<u> <b> 9TH CHORDS </b> </u>
<b> Dominant 9th (9): </b> 1-3-5-b7-9. Most common in funk and soul rhythm guitar.
<b> Major 9th (maj9): </b> 1-3-5-7-9. Lush, cinematic quality.
<b> Minor 9th (m9): </b> 1-b3-5-b7-9. Very sophisticated minor sound.

<u> <b> PRACTICAL APPLICATION </b> </u>
Extended chords are essential for:
- Jazz and bossa nova comping
- Neo-soul and R&B rhythm guitar
- Film and TV music
- Sophisticated pop songwriting`,
    },
    {
      title: "Jazz Voicings and Shell Chords",
      info: `On guitar, playing all 7 notes of an extended chord is physically impossible — only 6 strings. Jazz guitarists solve this with shell chords: minimal voicings containing only the essential notes.

<u> <b> WHAT IS A SHELL CHORD? </b> </u>
A shell chord uses the minimum notes needed to define a chord's quality and function:
  Root + 3rd + 7th = the shell
  These three notes tell the listener everything essential about the chord

<b> The 3rd defines: </b> major or minor quality
<b> The 7th defines: </b> major 7th, dominant 7th, or minor 7th quality
<b> The 5th </b> is almost always omitted — it adds little harmonic information

<u> <b> ADD COLOUR NOTES ON TOP </b> </u>
After the shell (R-3-7), add one colour note:
  Add 9th for richness: R-3-7-9
  Add 13th for brightness: R-3-7-13
  Add #11 for Lydian Dominant colour: R-3-7-#11

<u> <b> COMMON SHELL CHORD SHAPES (jazz style) </b> </u>

G7 shell (root on 6th string, 3rd fret):
  e |--x--|
  B |--1--|  ← b7 (F)
  G |--0--|  ← 3rd (B)
  D |--x--|
  A |--x--|
  E |--3--|  ← root (G)

<u> <b> VOICE LEADING WITH SHELL CHORDS </b> </u>
In a ii-V-I progression (Dm7 - G7 - Cmaj7), the guide tones (3rd and 7th) move by small steps:
  <b> Dm7: </b> 3rd=F, 7th=C
  <b> G7: </b> 3rd=B, 7th=F (F was 7th of Dm7, now 3rd of G7 — same note!)
  <b> Cmaj7: </b> 3rd=E, 7th=B (B was 3rd of G7, now 7th of Cmaj7 — same note!)
This smooth guide-tone movement is the foundation of jazz harmonic voice leading.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Altered Chords": [
    {
      title: "7#9, 7b9, 7#11 — Altered Dominant Chords",
      img: altered,
      info: `Altered chords modify specific tension notes (the 9th, 11th, and 13th) of dominant 7th chords by raising or lowering them half a step. The result is harmonically complex, extremely tense sounds that resolve powerfully.

<u> <b> WHY ALTER CHORD TONES? </b> </u>
A basic G7 chord creates tension that wants to resolve to C major. Adding alterations (G7#9, G7b9, G7#11) intensifies that tension dramatically — the resolution to C major feels even more satisfying after a highly altered dominant chord.

<u> <b> 7#9 — THE "HENDRIX CHORD" </b> </u>
Formula: 1 - 3 - 5 - b7 - #9
The #9 is enharmonically equivalent to a b3 — so this chord contains both a major 3rd and a minor 3rd simultaneously. This inherent tension between major and minor is why the 7#9 chord has such an electric, ambiguous quality.

E7#9 shape (the Jimi Hendrix chord — "Purple Haze"):
  e |--x--|
  B |--7--|  ← #9
  G |--6--|  ← b7 (D)
  D |--7--|  ← 3rd (G#)
  A |--6--|  ← root (E)
  E |--0--|  ← open low E root

<u> <b> 7b9 </b> </u>
Formula: 1 - 3 - 5 - b7 - b9
The flat 9th creates a dark, diminished quality. Very common in jazz over secondary dominant chords. Produces a diminished sound that resolves urgently.

<u> <b> 7#11 (LYDIAN DOMINANT) </b> </u>
Formula: 1 - 3 - 5 - b7 - #11
The #11 (tritone above root) creates a floaty, mysterious tension unlike standard dominant chords. Used in jazz fusion and sophisticated pop/rock.

<u> <b> PRACTICAL USE </b> </u>
Altered chords are colour chords — used at specific high-tension moments in a progression, always resolving to a satisfying landing chord afterward. They are not everyday chords; they are expressive punctuation marks.`,
    },
    {
      title: "When Tension Creates Expression",
      info: `Altered chords are most powerful when you understand exactly what kind of tension each creates and how that tension resolves — turning harmonic theory into expressive musical choices.

<u> <b> THE SPECTRUM OF DOMINANT TENSION </b> </u>
Not all dominant chords create equal tension. From least to most tense:
  <b> G (no 7th): </b> basic major, minimal tension
  <b> G7 (dominant 7th): </b> standard tension, wants to resolve to C
  <b> G9 (add 9th): </b> richer, slightly more tense
  <b> G7b9 (flat 9th): </b> dark, urgent — diminished quality
  <b> G7#9 (sharp 9th): </b> tense and ambiguous — major-minor conflict
  <b> G7alt (all alterations): </b> maximum tension — every possible tension note present

<u> <b> CHOOSING THE RIGHT ALTERATION </b> </u>
The context and the style determine which alteration fits:
  <b> Blues context: </b> G7#9 (the Hendrix chord fits the blues-rock vocabulary perfectly)
  <b> Jazz ii-V-I: </b> G7b9 or G7alt resolves beautifully to Cmaj7
  <b> Funk vamp: </b> G7#9 held as a colour chord (doesn't need to resolve — the tension is the texture)
  <b> Film/TV music: </b> G7#11 for floating, unresolved drama

<u> <b> RESOLVING ALTERED CHORDS </b> </u>
The resolution note matters: when an altered dominant resolves to the I chord, the altered note resolves by half step:
  <b> b9 (Ab) </b> → resolves up to the root (A) or down to the 5th (G)
  <b> #9 (A#) </b> → resolves up to the 3rd (B) or down to the root (A)
  <b> #11 (C#) </b> → resolves to the 3rd (E) or 5th (G)

<u> <b> PRACTICAL EXERCISE </b> </u>
Take a simple I-IV-V-I progression in G (G-C-D-G). Replace the D chord with D7#9. Listen to how it intensifies the resolution back to G. Then try D7b9. Notice the different quality of tension. Then try D7alt. These substitutions require no new scale knowledge — just chord voicings — yet completely transform the harmonic richness of the progression.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Modal Interchange": [
    {
      title: "Borrowing Chords From Parallel Modes",
      img: borrowing,
      info: `Modal interchange (also called modal mixture) is one of the most powerful harmonic tools in songwriting — one of the main reasons certain chord progressions create such strong emotional responses.

<u> <b> WHAT IS MODAL INTERCHANGE? </b> </u>
Modal interchange means borrowing chords from a parallel mode and inserting them into your current key. Two keys are "parallel" when they share the same root but different modes.

C major and C minor are parallel keys — same root (C), different modes.
You can borrow chords from C minor and use them in a song that's otherwise in C major.

<u> <b> THE MOST COMMON BORROWED CHORD — bVII </b> </u>
In C major, the 7th chord is Bdim. But borrowing from C Mixolydian or C minor, you can use Bb major instead (the bVII chord). Bb has no place in C major theory but sounds incredibly powerful and natural:
  C - Bb - F - C
This progression is everywhere in rock music — the Bb creates surprise and emotional weight.

<u> <b> THE bVI CHORD — One of Music's Most Emotional Sounds </b> </u>
Borrowing the bVI from the parallel minor key (Ab major in C major context):
  C - Ab - Bb - C (bVI - bVII - I)
This progression creates a huge, cinematic, emotional swell — used in countless film scores and power ballads.

<u> <b> OTHER COMMON BORROWED CHORDS (in C major) </b> </u>
  <b> iv chord (Fm from C minor): </b> melancholic, emotional drop — very powerful
  <b> bIII chord (Eb major): </b> warm, surprising
  <b> bVI chord (Ab major): </b> powerfully emotional
  <b> bVII chord (Bb major): </b> rock anthemic quality

<u> <b> FAMOUS EXAMPLES </b> </u>
"Stairway to Heaven" uses borrowed chords throughout. "Under Pressure" (Queen/Bowie) uses bVI-bVII-I. "Let It Be" (Beatles) uses bVII extensively.`,
    },
    {
      title: "Why It Sounds Emotional",
      info: `Understanding the mechanism behind why borrowed chords create such powerful emotional responses gives you conscious control over the emotional impact of your songwriting.

<u> <b> THE CHROMATIC VOICE LEADING EXPLANATION </b> </u>
Borrowed chords introduce notes from outside the current key. When these foreign notes appear in chords and then resolve back into the home key, they move by half steps — creating "chromatic voice leading." The human ear finds half-step movements particularly smooth and satisfying, which is why borrowed chord movements feel both surprising and inevitable simultaneously.

<u> <b> THE bVI - bVII - I PROGRESSION IN DETAIL </b> </u>
In C major: Ab major → Bb major → C major
  Ab major contains Ab, C, Eb
  Bb major contains Bb, D, F
  C major contains C, E, G

The voice leading from Ab to C:
  Ab → G (half step down)
  C stays (common tone)
  Eb → E (half step up)
  + Bb → C (whole step)
  + D → E (whole step)
This combination of smooth half-step movements and common tones creates a feeling of inevitability — the borrowed chords feel like they "belong" despite being outside the key.

<u> <b> THE iv CHORD — MOST EMOTIONALLY DIRECT BORROWING </b> </u>
The iv chord (Fm in C major) is arguably the most emotionally charged borrowed chord. It takes a major key chord (IV = F major) and darkens it by lowering the 3rd (F major → F minor). This shift from F major to F minor creates an immediate sense of heaviness or melancholy dropping into a major key context.
  C - Am - Fm - C (the Fm is heartbreaking in this context)

<u> <b> WRITING WITH BORROWED CHORDS </b> </u>
When you want a moment of unexpected emotional depth in a major key song, introduce a borrowed chord at the moment of greatest lyrical or dramatic weight. The borrowed chord intensifies whatever emotion the lyrics are expressing.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Chord Substitutions": [
    {
      title: "Tritone Substitution and Secondary Dominants",
      info: `Chord substitution is the art of replacing an expected chord with a different chord that serves a similar harmonic function. It is fundamental to jazz harmony and sophisticated songwriting.

<u> <b> TRITONE SUBSTITUTION (Jazz) </b> </u>
The most famous chord substitution in jazz. Any dominant 7th chord can be replaced by the dominant 7th chord whose root is a tritone (6 semitones) away.

G7 resolves to Cmaj7 (standard V7 → I)
Tritone of G: Db (6 semitones away)
Db7 → Cmaj7 — also resolves to C, with beautiful chromatic voice leading (Db moves down by half step to C)

<u> <b> WHY IT WORKS </b> </u>
A dominant 7th chord's identity is defined by its guide tones (3rd and 7th). G7's guide tones: B (3rd) and F (7th). Db7's guide tones: F (3rd) and Cb/B (7th). The same two notes — just swapped in function. The ear accepts the substitution because the harmonic "job" (tension → resolution) is still performed.

<u> <b> SECONDARY DOMINANT </b> </u>
Temporarily treating any chord as a I chord and placing its V7 chord before it:
  In key of C: C - Am - Dm - G7 - C (standard)
  With secondary dominant: C - A7 - Dm - G7 - C
  The A7 is the V7 of Dm — it creates extra pull toward Dm

Any chord in any key can be preceded by its V7 chord. This creates a "mini resolution" to a non-tonic chord that adds momentum to the progression.

<u> <b> REHARMONISATION </b> </u>
Completely rewriting the underlying chords of a melody while keeping the melody unchanged. The melody notes are retained but harmonised by different chords. Used extensively in jazz arrangements and sophisticated covers.

<u> <b> RELATIVE MAJOR/MINOR SUBSTITUTION </b> </u>
Any major chord substitutes with its relative minor (3 semitones below), sharing 2 of 3 notes:
  C major (C-E-G) ↔ Am (A-C-E) — share C and E`,
    },
  ],

  // ── MODULE 5: Improvisation and Creativity ───────────────────────

  "Soloing Over Chord Changes": [
    {
      title: "Chord Tone Targeting and Guide Tones",
      info: `The most important skill in lead guitar is making your solos follow and respond to the underlying chord changes — not just running scale patterns without listening.

<u> <b> THE COMMON MISTAKE </b> </u>
Most intermediate improvisers pick one scale (usually pentatonic) and run it over the entire chord progression without differentiating what they play over each chord. The result: technically correct but musically flat — like reading from a list rather than having a conversation.

<u> <b> CHORD TONE SOLOING </b> </u>
The most reliable way to make solos track chord changes: target the notes of whatever chord is currently playing, especially on strong beats (beat 1 and beat 3).

If the current chord is G major (G-B-D), prioritise landing on G, B, or D on strong beats. If the chord changes to C major (C-E-G), shift to landing on C, E, or G. The notes between — passing notes, scale runs — can be anything from your scale. But the landing points should reflect the current chord.

<u> <b> GUIDE TONES </b> </u>
The most harmonically clear notes in any chord are the 3rd and 7th — called guide tones:
  <b> The 3rd </b> tells you: major or minor quality
  <b> The 7th </b> tells you: dominant, major 7th, or minor 7th quality

Build solos around guide tones and the harmony sounds clear and intentional even in complex chord progressions.

<u> <b> ANTICIPATION AND RESOLUTION </b> </u>
Professional soloists often play a note from the upcoming chord just before the chord change (anticipation) — creating a smooth, forward-moving quality. Alternatively, landing on a slightly "wrong" note and resolving to the chord tone on the beat creates beautiful tension and release.

<u> <b> PHRASING AS CONVERSATION </b> </u>
Think of the solo as a conversation: ask a musical question (phrase ending unresolved) then answer it (phrase resolving to a chord tone). Space between phrases gives the listener time to process what you've said.`,
    },
    {
      title: "Avoiding Scale Running",
      info: `"Scale running" is the most common trap advanced guitarists fall into — technically impressive but musically empty passages that run up and down scale patterns without musical intent.

<u> <b> WHAT IS SCALE RUNNING? </b> </u>
Scale running is improvising by playing scale notes in order — up, down, or in patterns — rather than choosing notes for their musical meaning. The result sounds like a "guitar exercise" over the chord changes rather than a musical statement.

<u> <b> HOW TO IDENTIFY IT IN YOUR OWN PLAYING </b> </u>
Record yourself improvising. Listen back without playing. Ask:
- Am I emphasising chord tones on strong beats? Or am I just passing through them?
- Do my phrases have clear beginnings, midpoints, and endings? Or do they just start and stop randomly?
- Could I sing what I'm playing? Or is it too fast and pattern-driven to sing?
- Is there space between phrases? Or is every beat filled with notes?

<u> <b> THE MELODIC APPROACH — THINK IN MOTIFS </b> </u>
A motif is a short, recognisable melodic idea (3-5 notes). Great improvisers develop a motif and repeat it, vary it, and transform it through the chord changes — rather than running up and down scale patterns.

Step 1: Play a simple 3-note idea
Step 2: Repeat it (exact or near-exact)
Step 3: Vary it — change the rhythm, change one note, change the direction
Step 4: Develop it further — invert it, play it in a higher position, extend it
Step 5: Resolve it — land on a chord tone and let it rest

<u> <b> RHYTHM IS AS IMPORTANT AS NOTES </b> </u>
Many scale-running improvisers play everything in even 8th notes. Introducing quarter notes, dotted rhythms, triplets, rests, and syncopation makes the same notes sound completely different — and dramatically more musical. Rhythmic variety is the first tool to develop when escaping scale running.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Phrasing and Musicality": [
    {
      title: "Space, Dynamics, and Rhythm in Solos",
      info: `Technical ability without phrasing is like a vocabulary without grammar. Phrasing is what separates a player with impressive technique from a player who actually moves people musically.

<u> <b> WHAT IS PHRASING? </b> </u>
Phrasing refers to how you shape each musical idea — where it begins, how it develops, and how it ends. It encompasses note choice, rhythm, dynamics, space, vibrato, bending, and the emotional arc of a musical phrase.

<u> <b> SPACE IS NOT SILENCE </b> </u>
Many lead guitarists fill every beat with notes. Professional phrasing uses space intentionally. After a strong phrase, resting for a beat or two lets the previous phrase breathe and makes the next entrance more impactful. The "breaths" between phrases give the listener time to absorb what was just said.

<u> <b> DYNAMIC VARIATION </b> </u>
Play some notes louder, some softer within the same solo. A phrase building from soft to loud, or one that suddenly drops to a whisper after a loud peak, creates the same emotional arc as a well-crafted sentence. Without dynamic variation, even technically perfect solos feel flat and mechanical.

<u> <b> RHYTHMIC VARIATION </b> </u>
Don't always start phrases on beat 1. Start some on the "&" of beat 4 (anticipating the next bar), some on beat 3, play triplets against a straight-eighth backdrop. Rhythmic unpredictability — within a controlled, intentional framework — keeps solos interesting and forward-moving.

<u> <b> THE VOCAL MODEL </b> </u>
Sing whatever you're about to play before you play it. If you can't hear the phrase in your head first, your fingers won't know where to go. The most expressive guitarists — BB King, David Gilmour, Carlos Santana — play as if they're singing. Every note has intention.

<u> <b> THE TASTE PRINCIPLE </b> </u>
One perfectly placed, perfectly bent note with expressive vibrato can be more moving than an entire sweep-picked run. Taste — knowing when to play and when not to — is the hardest skill to develop and the most important.`,
    },
    {
      title: "Question-Answer Phrases and Vocal Concepts",
      info: `The question-answer phrasing structure and the concept of "playing like you're singing" are the two most transformative approaches to musical improvisation.

<u> <b> QUESTION-ANSWER PHRASING </b> </u>
Every great solo is built on this structure at the micro level:
- <b> Question phrase: </b> begins on a relatively stable note, ends on an unresolved, "asking" note
- <b> Answer phrase: </b> begins in response to the question, ends on a stable, resolved note

This mirrors natural speech patterns and the call-response tradition of blues music. The listener's brain anticipates the answer after the question — and feels satisfied when it arrives.

<u> <b> BUILDING A COMPLETE PHRASE ARC </b> </u>
Extend question-answer into a complete 4-phrase structure:
  <b> Phrase 1: </b> Question (introduces the idea)
  <b> Phrase 2: </b> Answer (partial resolution)
  <b> Phrase 3: </b> Question (intensified — higher register, more tension)
  <b> Phrase 4: </b> Answer (full resolution — most satisfying landing of the solo)

This structure mirrors the verse-chorus arc of songwriting at the micro level.

<u> <b> STEALING FROM SINGERS AND HORN PLAYERS </b> </u>
Great guitar phrasing often comes from absorbing non-guitar sources:
  <b> Blues singers: </b> rhythmic, vocal phrasing — short phrases with space between
  <b> Jazz saxophonists: </b> long melodic lines, complex rhythms, chromatic passing notes
  <b> Gospel singers: </b> call-response, emotional build, vibrato at phrase endings
  <b> Miles Davis (trumpet): </b> minimalism, space, every note with maximum intention

Listen to Stevie Wonder's harmonica solos. Listen to John Coltrane's saxophone phrasing. The rhythmic and melodic vocabulary is directly transferable to guitar — your fingers just need to learn what your ear already knows.

<u> <b> SINGING BEFORE PLAYING </b> </u>
Before your next improvisation practice: put down the guitar. Sing freely over the backing track for 5 minutes. Sing melodies, rhythms, whatever feels natural. Then pick up the guitar and play what you were singing. Your melodic imagination is far richer than your guitar fingers at this point in your development — let the voice lead and the hands follow.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Genre-Specific Soloing": [
    {
      title: "Blues Soloing",
      info: `Blues is the foundation of virtually all rock, soul, and jazz guitar soloing. Mastering blues vocabulary gives you a universal musical language that transfers across every genre.

<u> <b> THE BLUES VOCABULARY </b> </u>
Blues soloing is not about scales — it's about phrasing, bends, and storytelling. The notes are secondary to how they're delivered.

<u> <b> CORE TECHNIQUES IN BLUES </b> </u>
<b> Call and response: </b> a phrase followed by a pause, then an answering phrase. Mimics conversation and sermon-response in the tradition that birthed blues.
<b> Bending: </b> virtually every significant blues note is bent. A blues lick without bends is not blues.
<b> Vibrato: </b> every sustained note gets vibrato. No exceptions in authentic blues.
<b> Repetition: </b> playing the same lick 2-3 times, slightly varied, before moving on. Builds familiarity and emotional intensity.

<u> <b> THE TURNAROUND </b> </u>
The last two bars of a 12-bar blues (bars 11-12) are called the turnaround. A distinctive lick brings the progression back to the beginning. Having a vocabulary of turnaround licks is essential for blues playing.

<u> <b> THE BB KING PRINCIPLE — LESS IS MORE </b> </u>
BB King was famous for very few notes played with extraordinary expression. One perfectly bent note with vibrato, held until it fades, surrounded by silence — more powerful in blues than running the entire pentatonic scale. Let notes breathe. Let silence work.

<u> <b> BLUES SCALE vs MAJOR PENTATONIC IN BLUES </b> </u>
The most sophisticated blues soloists blend both:
  <b> Over the I chord: </b> mix major and minor pentatonic freely
  <b> Over the IV chord: </b> lean toward major pentatonic (brighter)
  <b> Over the V chord: </b> lean toward minor pentatonic or blues scale (more tension)
This chord-sensitive scale blending is what distinguishes advanced blues playing from intermediate blues playing.`,
    },
    {
      title: "Rock Soloing",
      info: `Rock soloing builds on the blues foundation but adds more technical intensity, wider pitch range, heavier tone, and a more structured dramatic arc. Understanding the full spectrum of rock soloing gives you a complete vocabulary.

<u> <b> THE ROCK SOLO STRUCTURE </b> </u>
Unlike jazz (prioritises chord changes) or blues (prioritises feel), rock solos often have a structured arc:
  <b> Build: </b> start in a lower register with simpler phrases
  <b> Climax: </b> highest register, most intense technique (fast runs, high bends, screaming notes)
  <b> Resolution: </b> return to a melodic, resolved landing

<u> <b> ESSENTIAL ROCK SOLOING ELEMENTS </b> </u>
- Pentatonic and blues scale as foundation — same as blues, played faster and more aggressively
- Fast alternate-picked runs — the "shred" element of rock and metal
- Wide bends (full step and wider) with vibrato
- High-register playing on the 1st and 2nd strings
- Strategic sustain — letting notes ring and feed back on electric guitar
- Whammy bar for pitch dives and dramatic effects (electric only)

<u> <b> THE DIFFERENT ERAS </b> </u>
<b> Classic Rock (Clapton, Page, Hendrix): </b> blues-rooted, feel-focused, pentatonic and blues scale
<b> Hard Rock / Heavy Metal (Van Halen, Randy Rhoads): </b> added sweep picking, tapping, neoclassical elements
<b> Alternative (Jonny Greenwood, Thurston Moore): </b> texture, noise, non-conventional phrasing
<b> Modern Metal (Petrucci, Guthrie Govan): </b> combines all previous eras with jazz harmony and extreme technical facility

<u> <b> YOUR PERSONAL STYLE </b> </u>
The best rock soloists are immediately recognisable. That recognisability comes not from technique but from consistent choices: specific bends you favour, scale positions you gravitate toward, tempo of phrases, vibrato character. These preferences emerge through hundreds of hours of improvisation — they cannot be forced; they are discovered.`,
    },
    {
      title: "Jazz Improvisation Basics",
      info: `Jazz improvisation is the most harmonically sophisticated improvisational tradition in Western music. Even basic jazz vocabulary will transform the harmonic awareness you bring to every style.

<u> <b> THE FUNDAMENTAL DIFFERENCE </b> </u>
<b> Blues/rock improvisation: </b> play one scale over the whole progression, rely on feel and phrasing.
<b> Jazz improvisation: </b> change scales and arpeggios with every chord change, track the harmony precisely.
This is called "playing the changes" — the defining skill of jazz improvisation.

<u> <b> THE ii-V-I PROGRESSION </b> </u>
The most important progression in jazz: Dm7 - G7 - Cmaj7 (in C major)
  <b> Over Dm7: </b> play D Dorian (natural minor with raised 6th)
  <b> Over G7: </b> play G Mixolydian (major with flat 7th) or G altered scale
  <b> Over Cmaj7: </b> play C Ionian (C major scale)

This single progression — and knowing which scale fits each chord — is the foundation of all jazz improvisation.

<u> <b> ARPEGGIO SOLOING </b> </u>
Instead of scale runs, jazz improvisation extensively uses arpeggios — the notes of the current chord, played in order. Over Dm7, playing D-F-A-C (the Dm7 arpeggio) clearly outlines the chord and creates harmonically precise solo lines.

<u> <b> BEBOP VOCABULARY </b> </u>
Bebop (Charlie Parker, Dizzy Gillespie) added chromatic passing notes between chord tones, creating flowing 8th-note lines that outline harmony while maintaining smooth melodic movement. The "bebop major scale" (major scale + chromatic note between the 7th and octave) creates a characteristic 8-note scale that fits perfectly into swung 8th-note patterns.

<u> <b> THE HONEST REALITY </b> </u>
Jazz improvisation takes years of dedicated study. But 6 months of focused work on ii-V-I, basic arpeggios, and guide tones will make you noticeably more harmonically aware in every style. The investment pays dividends across all music.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Composing Your Own Music": [
    {
      title: "Song Structure",
      info: `Understanding song structure lets you compose pieces that feel intentional, emotionally logical, and satisfying to listen to — not just collections of chords.

<u> <b> THE FUNDAMENTAL STRUCTURE: VERSE-CHORUS </b> </u>
  Intro: establishes mood and key (4-8 bars)
  Verse: tells the story, lower energy (16 bars)
  Chorus: emotional peak, highest energy and memorability (8 bars)
  Verse 2: continues story (16 bars)
  Chorus: repeat (8 bars)
  Bridge: contrast and tension, harmonically different (8 bars)
  Final Chorus: resolved, triumphant, often louder or differently arranged (8 bars)
  Outro: winds down (4-8 bars)

<u> <b> WHY THIS STRUCTURE WORKS </b> </u>
It creates expectation (verse), fulfils it (chorus), surprises (bridge), and resolves (final chorus). This arc mirrors the emotional journey of storytelling. The listener's anticipation builds through the verse, is released by the chorus, and the bridge creates the greatest tension before the final payoff.

<u> <b> TENSION AND RELEASE — THE ENGINE OF COMPOSITION </b> </u>
Every good song is built on tension followed by release at every level:
  <b> Within a bar: </b> a bent note resolving to a chord tone
  <b> Within a phrase: </b> a question-phrase resolved by an answer-phrase
  <b> Within a section: </b> verse tension released by the chorus
  <b> Within the whole song: </b> the bridge creates greatest tension before the final resolution

<u> <b> DEPARTURE FROM STANDARD STRUCTURE </b> </u>
Once you understand standard structure, break it deliberately for effect. Nirvana's "Smells Like Teen Spirit" delayed the chorus so long it felt explosive when it arrived. The rules exist to be understood, then broken with intention.`,
    },
    {
      title: "Writing Chord Progressions and Melodies",
      info: `The craft of writing chord progressions and melodies that work together is the core of songwriting. Here is the practical framework used by professional songwriters.

<u> <b> WRITING A CHORD PROGRESSION </b> </u>
Step 1: Choose a key — it determines your palette of natural chords
Step 2: Start with the tonic (I chord) to establish home
Step 3: Move to a chord that creates movement — IV, V, or vi
Step 4: Create tension by approaching the V chord
Step 5: Resolve back to I

Simplest complete progression: I - IV - V - I (home, movement, tension, resolution)

<u> <b> EMOTIONAL COLOUR BY CHORD CHOICE </b> </u>
  <b> I → IV: </b> warmth, hope, opening up
  <b> I → V: </b> momentum, forward motion
  <b> I → vi: </b> emotional turn inward, slight sadness
  <b> I → bVII: </b> surprise, rock anthemic quality (borrowed from Mixolydian)
  <b> V → I: </b> resolution, satisfaction, arrival

<u> <b> WRITING A MELODY OVER CHORDS </b> </u>
<b> Rule 1: </b> Chord tones are the most stable landing points for the melody on strong beats
<b> Rule 2: </b> Non-chord tones create tension on strong beats and need to resolve to chord tones
<b> Rule 3: </b> Stepwise motion (moving by 2nds) feels natural and singable. Leaps (3rds, 4ths, 5ths) create drama
<b> Rule 4: </b> Your melody should have a clear shape — rising, falling, or arch

<u> <b> THE CONTRAPUNTAL RULE </b> </u>
When chords move a lot, keep the melody simple. When chords are static (holding one chord), let the melody move more. This contrast keeps both elements interesting and prevents rhythmic and harmonic monotony.

<u> <b> HUMMING FIRST </b> </u>
Before touching the guitar, hum the melody you want. Then figure out how to play what you're humming. This reversal — ear first, instrument second — produces more original, personal melodies than noodling on the guitar hoping something sticks. Your melodic imagination is richer than your fingers believe.`,
    },
  ],

  // ── MODULE 6: Advanced Music Theory ─────────────────────────────

  "Ear Training": [
    {
      title: "Interval Recognition and Chord Quality by Ear",
      info: `Ear training is the practice of developing your musical hearing — the ability to recognise, identify, and reproduce what you hear. It is the skill that connects all other theory knowledge to real musical situations.

<u> <b> WHY EAR TRAINING MATTERS </b> </u>
All theory knowledge becomes practical only when your ear can confirm it. A trained ear lets you:
- Figure out songs by listening — no tabs needed
- Know immediately when a note is right or wrong
- Communicate with other musicians naturally
- Improvise with real confidence — hearing what you want before you play it

<u> <b> INTERVAL RECOGNITION </b> </u>
An interval is the distance between two notes. Each interval has a characteristic sound:

  <b> Minor 2nd: </b> Very tense (Jaws theme)
  <b> Major 2nd: </b> Stepwise, neutral (Happy Birthday, first two notes)
  <b> Minor 3rd: </b> Sad (Smoke on the Water riff)
  <b> Major 3rd: </b> Happy (When the Saints Go Marching In)
  <b> Perfect 4th: </b> Strong, open (Here Comes the Bride)
  <b> Tritone: </b> Maximum tension (The Simpsons theme)
  <b> Perfect 5th: </b> Powerful, open (Star Wars theme)
  <b> Minor 6th: </b> Expressive (The Entertainer)
  <b> Major 6th: </b> Smooth (My Way)
  <b> Minor 7th: </b> Slightly tense (Somewhere — West Side Story)
  <b> Major 7th: </b> Tense leading tone (Take On Me chorus)
  <b> Octave: </b> Same note, different register (Somewhere Over the Rainbow opening)

<u> <b> CHORD QUALITY BY EAR </b> </u>
Practice listening to chords and identifying: major, minor, dominant 7th, major 7th, minor 7th. Start with major vs minor (the fundamental distinction — bright vs dark). Add other qualities gradually.

<u> <b> TRANSCRIBING </b> </u>
The ultimate ear training exercise: figure out a simple song entirely by ear without tabs. Start with the bass line, then the chords, then the melody. 5 minutes of transcription practice daily produces rapid improvement.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Reading Standard Notation": [
    {
      title: "Introduction to Standard Notation",
      info: `Standard notation (sheet music) is the universal language of music — readable by a pianist, violinist, or guitarist anywhere in the world. Reading it unlocks a vastly larger world of musical resources.

<u> <b> THE STAFF </b> </u>
Standard notation uses a staff: 5 horizontal lines with notes placed on lines and in spaces. For guitar, the treble clef is used (the swirling symbol at the start of each staff).

<u> <b> NOTE POSITIONS ON THE TREBLE CLEF </b> </u>
Notes on lines (bottom to top): E - G - B - D - F ("Every Good Boy Does Fine")
Notes in spaces (bottom to top): F - A - C - E ("FACE")

<u> <b> RHYTHM VALUES </b> </u>
  <b> Whole note: </b> 4 beats (open oval, no stem)
  <b> Half note: </b> 2 beats (open oval with stem)
  <b> Quarter note: </b> 1 beat (filled oval with stem)
  <b> Eighth note: </b> 1/2 beat (filled oval with stem + flag or beam)
  <b> Sixteenth note: </b> 1/4 beat (filled oval with stem + double flag or beam)

<u> <b> GUITAR IS A TRANSPOSING INSTRUMENT </b> </u>
Guitar music is written one octave higher than it actually sounds. This is purely conventional — it keeps most guitar notes on or near the staff rather than requiring many ledger lines below it.

<u> <b> WHY LEARN THIS? </b> </u>
Access to the entire classical guitar repertoire, jazz lead sheets, and collaborative notation with non-guitar musicians. Even slow reading opens up a world of musical resources unavailable through tab alone.`,
    },
    {
      title: "Key Signatures and Time Signatures",
      info: `Key signatures and time signatures are the two fundamental pieces of information at the start of every piece of written music. Reading them correctly is the entry point to sight-reading.

<u> <b> KEY SIGNATURES </b> </u>
Placed immediately after the clef, a key signature shows which notes are consistently sharped or flatted throughout the piece.

<u> <b> SHARP KEY SIGNATURES (sharps added in this order: F# C# G# D# A# E# B#) </b> </u>
  No sharps = C major / A minor
  1 sharp (F#) = G major / E minor
  2 sharps (F# C#) = D major / B minor
  3 sharps (F# C# G#) = A major / F# minor
  4 sharps = E major / C# minor

<u> <b> FLAT KEY SIGNATURES (flats added: Bb Eb Ab Db Gb Cb Fb) </b> </u>
  1 flat (Bb) = F major / D minor
  2 flats (Bb Eb) = Bb major / G minor
  3 flats = Eb major / C minor
  4 flats = Ab major / F minor

<u> <b> NATURAL SIGN </b> </u>
A natural sign (♮) cancels the key signature for one specific note in that bar. After the bar line, the key signature applies again.

<u> <b> TIME SIGNATURES </b> </u>
The fraction after the key signature:
  <b> Top number </b> = beats per bar
  <b> Bottom number </b> = what note value = 1 beat (4 = quarter note, 8 = eighth note)

Common signatures:
  <b> 4/4: </b> 4 quarter-note beats per bar (most common — "common time")
  <b> 3/4: </b> 3 quarter-note beats per bar (waltz)
  <b> 6/8: </b> 6 eighth-note beats per bar (compound duple — counted in 2 groups of 3)
  <b> 2/4: </b> 2 quarter-note beats per bar (march)
  <b> 5/4: </b> 5 quarter-note beats per bar (Dave Brubeck, Pink Floyd's "Money")`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Songwriting Theory": [
    {
      title: "The Emotional Logic of Chord Choices",
      info: `Beyond music theory rules, there is an emotional logic to harmony — patterns and tendencies that listeners feel even without conscious awareness. Understanding this logic lets you write music that creates specific emotional experiences.

<u> <b> THE EMOTIONAL MAP OF DIATONIC CHORDS (in a major key) </b> </u>
  <b> I (tonic): </b> Home, resolution, stability, arrival
  <b> ii (supertonic): </b> Gentle movement, slightly unstable, anticipatory
  <b> iii (mediant): </b> Ambiguous, introspective — rarely used as a landing point
  <b> IV (subdominant): </b> Warmth, hope, "lifting" feeling — the gospel chord
  <b> V (dominant): </b> Tension, forward drive, urgency — demands resolution to I
  <b> vi (submediant): </b> Emotional, melancholic, inward — the "emotional" chord
  <b> vii° (leading tone): </b> Maximum tension, instability — drives hard to I

<u> <b> THE POWER OF THE IV CHORD </b> </u>
The IV chord has a special warmth — the "church chord," used in gospel and soul to create uplift. Moving from I to IV feels like opening a door or looking upward. The IV is the major chord most harmonically distant from the tonic while still sharing 2 notes with it.

<u> <b> THE vi CHORD — EMOTIONAL TURN </b> </u>
The vi chord (relative minor) is the most emotionally charged diatonic chord. Moving I - V - vi feels like a sudden turn toward introspection. Many classic pop songs use this moment deliberately — the chorus lands on I with joy, then the post-chorus drops to vi for an emotional check.

<u> <b> WRITING WITH EMOTIONAL INTENT </b> </u>
Before writing a chord progression, ask: what should this section feel like?
  <b> Restless, unresolved: </b> avoid landing on I, end phrases on V or ii
  <b> Triumphant, arrived: </b> emphasise I, approach it from V
  <b> Dark, serious: </b> stay in minor keys, use vi and iv, avoid IV major
  <b> Dreamy, suspended: </b> use maj7 chords, add9, avoid strong V-I resolutions`,
    },
    {
      title: "Tension, Release, and Song Architecture",
      info: `The most effective songs are not just collections of good chords and memorable melodies — they are architecturally designed experiences where tension and release are carefully controlled from beginning to end.

<u> <b> WHAT CREATES TENSION IN MUSIC </b> </u>
  <b> Harmonically: </b> dominant chords, altered chords, avoiding resolution
  <b> Melodically: </b> non-chord tones on strong beats, ascending lines, unresolved phrases
  <b> Rhythmically: </b> syncopation, accelerating note density, off-beat accents
  <b> Dynamically: </b> increasing volume, adding instruments or texture
  <b> Texturally: </b> distortion, dissonance, higher register

<u> <b> WHAT CREATES RELEASE </b> </u>
  <b> Harmonically: </b> resolving to I, arriving at the tonic after a strong V7
  <b> Melodically: </b> landing on the root note, descending to a chord tone
  <b> Rhythmically: </b> landing on beat 1, a sudden rhythmic pause
  <b> Dynamically: </b> sudden drop in volume, stripped-back texture after fullness
  <b> Texturally: </b> clean tone after distortion, silence

<u> <b> THE ARCHITECTURE OF A GREAT SONG </b> </u>
Think of tension and release as a wave:
  <b> Intro: </b> introduces tension gently
  <b> Verse: </b> moderate tension, storytelling, holding back energy
  <b> Pre-chorus: </b> tension builds — harmonically, rhythmically, dynamically
  <b> Chorus: </b> major release — the payoff. Maximum clarity, highest melodic point
  <b> Verse 2: </b> rebuild tension from a new starting point
  <b> Bridge: </b> highest tension of the entire song — unexpected harmony, new register
  <b> Final Chorus: </b> maximum release — the song's greatest moment of arrival

<u> <b> THE PRINCIPLE OF DELAYED GRATIFICATION </b> </u>
The longer you delay resolution, the more satisfying it is when it arrives. A song that withholds the chorus through a long verse and pre-chorus trains the listener's anticipation — and the release is proportionally more powerful. This is why the greatest choruses in music feel inevitable and earned rather than simply pleasant.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Understanding Different Tunings": [
    {
      title: "Drop D, Open G, and DADGAD",
      info: `Alternate tunings transform the guitar into a different instrument — opening up chord voicings, drone sounds, and stylistic possibilities that standard tuning cannot provide.

<u> <b> DROP D TUNING (EADGBe → DADGBe) </b> </u>
Change: Lower the 6th string by one whole step from E to D.
Result: The lowest three strings form a power chord shape — D-A-D. One-finger power chords become possible (barre across strings 4, 5, 6).
Best for: Heavy rock, metal, grunge. Easy low-end heaviness in D.
Famous examples: Soundgarden, Foo Fighters, Tool, Alice in Chains

<u> <b> OPEN G TUNING (DADGBd) </b> </u>
Change: Strings 1, 5, and 6 lowered so strumming open produces a G major chord.
Result: Slide guitar becomes very natural. Resonant drone sounds across the neck.
Best for: Blues slide guitar, folk, country. Keith Richards' signature sound.
Famous examples: "Brown Sugar," "Start Me Up," "Honky Tonk Women" (Rolling Stones)

<u> <b> DADGAD TUNING </b> </u>
Change: Strings 1, 2, and 6 adjusted to form D-A-D-G-A-D.
Character: Neither fully major nor minor — open, modal, ambiguous.
Best for: Celtic and Irish music, acoustic fingerstyle, Middle Eastern-influenced music.
Famous examples: "Kashmir" by Led Zeppelin uses a similar approach; much Celtic guitar

<u> <b> OPEN D TUNING (DADf#Ad) </b> </u>
Change: Similar to Open G but centred on D major.
Best for: Blues slide guitar, Americana, folk, resonator guitar.
Famous examples: Duane Allman slide work, Joni Mitchell songs

<u> <b> OPEN E TUNING (EBEg#Be) </b> </u>
Change: Tuned up to produce E major open — raises string tension significantly.
Famous examples: Robert Johnson Delta blues, early rock and roll slide guitar`,
    },
    {
      title: "How Each Tuning Opens New Creative Possibilities",
      info: `Each alternate tuning is not just a different key — it's a different instrument with its own vocabulary, strengths, and creative possibilities. Here is how to think about developing fluency in alternate tunings.

<u> <b> THE OPEN TUNING ADVANTAGE </b> </u>
Open tunings allow one-finger slide chords across the entire neck. A bottleneck slide placed flat across all strings at any fret produces a complete major chord. This is impossible in standard tuning and is the reason slide guitar as a genre was built on open tunings.

<u> <b> THE DRONE STRING ADVANTAGE </b> </u>
In most alternate tunings, one or more strings serve as constant drones — the same open note rings throughout while other strings fret melodies and chords. This drone creates instant modal, hypnotic, or country character depending on context. DADGAD's drone D strings create a powerful modal foundation that standard tuning can't replicate.

<u> <b> THE CHORD VOICING ADVANTAGE </b> </u>
Alternate tunings create chord voicings that are physically impossible in standard tuning — particularly open, resonant, widely-voiced chords where notes are separated by octaves. Drop D alone makes certain power chord riffs dramatically easier and heavier.

<u> <b> HOW TO EXPLORE A NEW TUNING </b> </u>
Step 1: Spend one week in the tuning before looking up any tutorials — discover its natural sounds
Step 2: Find where the root notes of common chords lie on the new string arrangement
Step 3: Find the pentatonic scale pattern in the new tuning
Step 4: Learn 3-4 songs specifically written for this tuning
Step 5: Write original music — the tuning itself will suggest ideas unavailable in standard

<u> <b> THE COMMITMENT PRINCIPLE </b> </u>
Many guitarists own a dedicated guitar for each alternate tuning they use regularly (especially common with acoustic players). Constantly retuning and detuning a single guitar causes tuning instability, wears strings, and makes you less likely to spend deep time in each tuning. A dedicated guitar per tuning is the most practical approach for serious exploration.`,
    },
  ],
};