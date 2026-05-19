// MODULE 1
// Barre Chords - E shape
import barrechords from "../assets/Intermediate/Barre-chords.jpg";
import fmajor from "../assets/Intermediate/f-major-e-shape.png";
import bmajor from "../assets/Intermediate/b-major-e-shape.jpg";
// Barre Chords - A shape
import ashapebarre from "../assets/Intermediate/a-shape-barre.png";
import bcdbarre from "../assets/Intermediate/bcd-barre.png";
// Power Chords
import powerchords from '../assets/Intermediate/power-chords.jpg'
// 7th chords
import sevenchords from '../assets/Intermediate/seven-chords.png'
// Sus and add chords
import suschords from '../assets/Intermediate/sus-chords.png'
import addchords from '../assets/Intermediate/add-chords.png'


// MODULE 2
// Hammer ups and downs
import hammerpull from '../assets/Intermediate/hammer-pull-offs.webp'
// Slides ups and downs
import slideupsdowns from '../assets/Intermediate/slide-ups-downs.png'
// String Bending
import stringbending from '../assets/Intermediate/string-bending.png'


// MODULE 3
// Pentonic Scale - minor
import pentonicminor from '../assets/Intermediate/pentonic-scale-minor.png'
// Pentonic Scale - major
import pentonicmajor from '../assets/Intermediate/pentonic-scale-major.png'
// Blues Scale
import blues from '../assets/Intermediate/blues-scale.png'
// Seven major
import sevenmajor from '../assets/Intermediate/seven-major.png'


// MODULE 4
import pima from '../assets/Intermediate/pima.png'
import sixteen from '../assets/Intermediate/16th-note.jpg'
import syncopation from '../assets/Intermediate/syncopation.jpg'

// MODULE 5
// Circle of fifths
import cof from '../assets/Intermediate/circle-of-fifth.png'
// Building chords with scales
import chordconst from '../assets/Intermediate/chord-construction.png'
// Chord Inversions
import inversion from '../assets/Intermediate/chord-inversion.png'
// Modes
import modes from '../assets/Intermediate/modes.png'

export const Intermediate = {
  // ── MODULE 1: Expanding Chords ───────────────────────────────────

  "Barre Chords — E Shape": [
    {
      title: "What Are Barre Chords?",
      img: barrechords,
      info: `Barre chords are the bridge between beginner and intermediate playing. Once you master them, every chord shape becomes available everywhere on the fretboard.

<u> <b> WHAT IS A BARRE CHORD? </b> </u>
A barre chord is a chord where your index finger presses down across all (or most) of the strings on a single fret — "barring" them. Your other fingers then form a chord shape above that barre.

<u> <b> WHY THEY ARE ESSENTIAL </b> </u>
Open chords are fixed in position — C major always uses the same open strings. Barre chords are moveable — the same shape played at different frets produces different chords. Play an E-shape barre at the 2nd fret = F# major. Move it to the 5th fret = A major. The shape never changes; only the position does.

<u> <b> WHY BEGINNERS STRUGGLE </b> </u>
The most common issue is not getting a clean barre — one or more strings buzz or mute. This is entirely normal and temporary. The solution is not pressing harder (a common mistake that causes fatigue) — it is better finger positioning. Place your index finger as close to the fret wire as possible (but just behind it, not on top), and rotate your index finger slightly so you're pressing with the bony side rather than the soft pad.

<u> <b> BUILDING THE BARRE GRADUALLY </b> </u>
Start by barring just 2 strings, then 3, working up to a full 6-string barre. Each step strengthens the relevant muscles and builds the motor memory needed for clean barres.`,
    },
    {
      title: "F Major — E Shape Barre",
      img: fmajor,
      info: `F major is traditionally the first barre chord beginners learn, and for many it is the most frustrating hurdle in all of guitar playing. Here is everything you need to conquer it.

<u> <b> F MAJOR (E-Shape barre at 1st fret) </b> </u>
  e |--1--|  ← index finger (full barre across all 6 strings at fret 1)
  B |--1--|  ← index finger (barre)
  G |--2--|  ← middle finger
  D |--3--|  ← ring finger
  A |--3--|  ← pinky finger
  E |--1--|  ← index finger (barre)

<u> <b> FINGER PLACEMENT TIPS </b> </u>
- Roll your index finger slightly toward the headstock (bony side contacts the strings)
- Keep the index finger as close to the 1st fret wire as possible without touching it
- Thumb roughly behind the index finger on the back of the neck — not wrapping over the top
- Keep other fingers arched so they don't accidentally mute nearby strings

<u> <b> COMMON PROBLEMS AND FIXES </b> </u>
<b> Problem: Buzz on high e or B strings </b>
Fix: Adjust index finger rotation slightly — bony side needs more contact.

<b> Problem: G string mutes </b>
Fix: Middle finger (2nd fret) must arch clearly over the G string, not touch it.

<b> Problem: Hand fatigues quickly </b>
Fix: You're pressing too hard. Position does more than force.

<u> <b> THE SHORTCUT: PARTIAL F BARRE </b> </u>
For songs where F appears briefly, barre only strings 1 and 2 with the index finger and use a different fingering for the rest. Completely valid — used by professional guitarists.

<u> <b> PRACTICE APPROACH </b> </u>
Place F major cleanly → strum once → lift completely off → replace → strum once. 10 deliberate minutes daily beats hours of frustrated strumming.`,
    },
    {
      title: "B Major and Moving E Shape",
      img: bmajor,
      info: `Once F major is in your hands, every other E-shape barre chord is the same shape moved to a different fret. This is the transformative insight of barre chords.

<u> <b> THE ROOT NOTE PRINCIPLE </b> </u>
In an E-shape barre chord, the root note (the note that names the chord) is always on the 6th string under your index finger.

<u> <b> NOTES ON THE 6TH STRING </b> </u>
  Fret 1  = F   → F major (E-shape)
  Fret 2  = F#  → F# major
  Fret 3  = G   → G major
  Fret 4  = G#  → G# major
  Fret 5  = A   → A major
  Fret 7  = B   → B major
  Fret 8  = C   → C major
  Fret 9  = C#  → C# major
  Fret 10 = D   → D major
  Fret 12 = E   → E major (same as open E)

<u> <b> B MAJOR (E-Shape barre at 7th fret) </b> </u>
  e |--7--|  ← index finger (full barre)
  B |--7--|  ← index finger (barre)
  G |--8--|  ← middle finger
  D |--9--|  ← ring finger
  A |--9--|  ← pinky finger
  E |--7--|  ← index finger (barre)

The higher up the neck you go, the easier barre chords become — frets are closer together and require less stretch. Use higher fret positions to build the muscle memory first, then work back down toward the nut.

<u> <b> MAJOR TO MINOR — ONE SMALL CHANGE </b> </u>
To convert any E-shape barre to minor: lift the middle finger. The shape becomes an Em shape barre. G barre (fret 3) → lift middle finger = Gm. A barre (fret 5) → lift middle finger = Am.

<u> <b> PRACTICAL EXERCISE </b> </u>
Play G major (E-shape, fret 3) → A major (fret 5) → B major (fret 7) → back down. You just played major chords that weren't available to you as open chords.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Barre Chords — A Shape": [
    {
      title: "The A Shape Barre",
      img: ashapebarre,
      info: `The A-shape barre chord gives you access to a completely different set of chord positions on the neck, with the root on the 5th string instead of the 6th.

<u> <b> THE A-SHAPE BARRE </b> </u>
Your index finger bars strings 1 through 5 (or all 6). Your ring finger (or a small barre with your ring finger) covers strings 2, 3, and 4 at two frets above the barre.

<b> Bb MAJOR (A-Shape barre at 1st fret) </b>
  e |--1--|  ← index finger (barre)
  B |--3--|  ← ring finger or pinky
  G |--3--|  ← ring finger (small barre across strings 2,3,4)
  D |--3--|  ← ring finger
  A |--1--|  ← index finger (root = Bb on 5th string)
  E |--x--|  or ← index finger mutes it

<u> <b> TWO FINGERING APPROACHES FOR THE A SHAPE </b> </u>
<b> Option 1: </b> Ring finger barres strings 2, 3, 4 simultaneously (the most common approach)
<b> Option 2: </b> Ring, middle, and pinky each take one string separately (more individual control)
Start with Option 1 — the ring finger mini-barre is faster for chord changes.

<u> <b> NOTES ON THE 5TH STRING (root positions) </b> </u>
  Fret 1  = Bb  → Bb major
  Fret 2  = B   → B major
  Fret 3  = C   → C major
  Fret 5  = D   → D major
  Fret 7  = E   → E major
  Fret 8  = F   → F major
  Fret 10 = G   → G major
  Fret 12 = A   → A major (same as open A)

<u> <b> WHY YOU NEED BOTH SHAPES </b> </u>
E-shape and A-shape together give you two positions for every chord on the neck. G major is available as E-shape at fret 3 AND as A-shape at fret 10. Knowing both lets you choose the position closest to where you already are on the neck — this is how professional guitarists move fluidly without big jumps.`,
    },
    {
      title: "Bb, C, D Barre Shapes",
      img: bcdbarre,
      info: `These three chords — Bb, C, and D — are among the most commonly needed barre chords and are all A-shape barre chords at low fret positions.

<u> <b> Bb MAJOR (A-shape, fret 1) </b> </u>
  e |--1--|
  B |--3--|
  G |--3--|
  D |--3--|
  A |--1--|  ← root (Bb)
  E |--x--|
Bb is one of the most common chords in pop and rock that has no clean open-position version. It appears in countless songs in the keys of F, Bb, and Eb. Mastering Bb as an A-shape barre is essential.

<u> <b> C MAJOR (A-shape, fret 3) </b> </u>
  e |--3--|
  B |--5--|
  G |--5--|
  D |--5--|
  A |--3--|  ← root (C)
  E |--x--|
This gives you an alternative to the open C major chord — useful when you're already positioned higher on the neck.

<u> <b> D MAJOR (A-shape, fret 5) </b> </u>
  e |--5--|
  B |--7--|
  G |--7--|
  D |--7--|
  A |--5--|  ← root (D)
  E |--x--|
An alternative to open D — same chord, different position, different voicing (slightly fuller sound due to the barre).

<u> <b> COMPARING E AND A SHAPES </b> </u>
For the same chord (e.g., G major):
  <b> E-shape at fret 3: </b> root on 6th string, lower voicing
  <b> A-shape at fret 10: </b> root on 5th string, higher voicing
Both are G major. They sound slightly different because the notes are in different octave positions. Using both shapes in a song adds harmonic variety.

<u> <b> THE KEY PRACTICE </b> </u>
Every week, pick one chord name (e.g., C major) and practice playing it in both E-shape and A-shape positions. This builds the connection between chord name, fret position, and shape simultaneously.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Power Chords": [
    {
      title: "Power Chords Explained",
      img: powerchords,
      info: `Power chords are the most important chord type in rock and metal — simple, aggressive, and moveable anywhere on the fretboard.

<u> <b> WHAT IS A POWER CHORD? </b> </u>
A power chord contains only two unique notes: the root and the fifth. Unlike full major or minor chords which have 3 note types, power chords contain no third — the note that determines major or minor quality. This is why they're called "5 chords" (written as G5, A5, C5 etc.) and why they sound equally powerful with both clean and distorted tones.

<u> <b> WHY USE POWER CHORDS? </b> </u>
Distortion and overdrive effects (used in rock and metal) make full chords sound muddy and unclear. The two-note simplicity of power chords cuts through distortion with clarity and aggression. This is why virtually all electric rock rhythm guitar is built on power chords.

<u> <b> THE BASIC POWER CHORD SHAPE (root on 6th string) </b> </u>
G5 example:
  e |--x--|
  B |--x--|
  G |--x--|
  D |--5--|  ← ring finger
  A |--5--|  ← middle finger (optional — adds octave root)
  E |--3--|  ← index finger (root = G)

<u> <b> ROOT ON 5TH STRING SHAPE </b> </u>
A5 example:
  e |--x--|
  B |--x--|
  G |--x--|
  D |--7--|  ← ring finger
  A |--5--|  ← index finger (root = A)
  E |--x--|

<u> <b> MOVING POWER CHORDS </b> </u>
Like barre chords, power chords are entirely moveable. The shape never changes — only the fret position changes. This makes learning power chord-based rock songs very fast once you know the shape and the note positions on the 6th and 5th strings.

<u> <b> PALM MUTING WITH POWER CHORDS </b> </u>
Place the edge of your picking hand lightly on the strings just above the bridge while strumming. This creates the classic muted "chug" sound that defines rock rhythm guitar.`,
    },
    {
      title: "Rock and Punk Usage",
      info: `Power chords are not just a guitar technique — they are the defining sound of rock and punk music. Understanding how to use them musically is as important as knowing the shapes.

<u> <b> THE DISTORTION FACTOR </b> </u>
Power chords were born out of necessity. When guitarists started using distortion and overdrive in the 1950s and 60s, they discovered that full major and minor chords sounded muddy and indistinct with high gain. The two-note power chord, however, cut through distortion with clarity and punch. This is the core reason power chords dominate rock and punk.

<u> <b> PUNK USAGE — FAST AND AGGRESSIVE </b> </u>
Punk guitar is essentially rapid power chord changes played with aggressive downstrokes. The fast chord changes, downstroke-only picking, and palm-muted verses alternating with full open strums are the complete punk rhythm guitar vocabulary.

Classic punk chord progressions are often just 3-4 power chords in rapid succession:
  E5 - A5 - D5 - A5 (played fast with all downstrokes)

<u> <b> ROCK USAGE — DYNAMICS AND TEXTURE </b> </u>
Rock uses power chords more dynamically — alternating between palm-muted "chugging" (tight, compressed) and fully open strummed power chords (loud, full). This contrast creates the push-pull energy of rock rhythm tracks.

<u> <b> RIFF BUILDING WITH POWER CHORDS </b> </u>
Many iconic rock riffs move between a root power chord and additional notes:
  E5 on the open 6th string → single note on 4th string → back to E5
  This kind of riff builds on the power chord as a home base with melodic movement around it.

<u> <b> THE THREE-CHORD APPROACH </b> </u>
Most rock and punk songs use 3-4 power chords. Learn the note positions on the 6th and 5th strings and you can instantly figure out the power chord positions for any rock song by ear.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "7th Chords": [
    {
      title: "7th Chords Explained",
      info: `7th chords add a 4th note to the basic triad, creating richer, more complex harmony. They are the defining sound of blues, jazz, funk, and soul.

<u> <b> WHY THE 7TH? </b> </u>
A basic major or minor chord uses 3 notes: root, 3rd, and 5th. Adding the 7th degree of the scale creates a 4-note chord with more colour and tension.

<u> <b> THE THREE MAIN 7TH CHORD TYPES </b> </u>

<b> DOMINANT 7TH (written as G7, C7, A7) </b>
Formula: 1 - 3 - 5 - b7 (major chord + flat 7th)
Sound: Tense, bluesy — strongly pulls toward the I chord.
Use: Blues, jazz, country, R&B. The V7 chord in any key.
G7 shape:
  e |--1--|
  B |--0--|
  G |--0--|
  D |--0--|
  A |--2--|
  E |--3--|

<b> MAJOR 7TH (written as Cmaj7, Gmaj7, Amaj7) </b>
Formula: 1 - 3 - 5 - 7 (major chord + natural 7th)
Sound: Warm, dreamy, sophisticated.
Use: Jazz, bossa nova, neo-soul.
Cmaj7 shape:
  e |--0--|
  B |--0--|
  G |--0--|
  D |--2--|
  A |--3--|
  E |--x--|

<b> MINOR 7TH (written as Am7, Dm7, Em7) </b>
Formula: 1 - b3 - 5 - b7 (minor chord + flat 7th)
Sound: Cool, melancholic, smooth.
Use: Jazz ii chords, soul, funk.
Am7 shape:
  e |--0--|
  B |--1--|
  G |--0--|
  D |--2--|
  A |--0--|
  E |--x--|

<u> <b> THE BLUES CONNECTION </b> </u>
The entire 12-bar blues is built on dominant 7th chords (I7 - IV7 - V7). Playing open G7, C7, and D7 gives you instant access to authentic blues sound.`,
    },
    {
      title: "G7, C7, D7, B7 Shapes",
      img: sevenchords,
      info: `These are the most-used dominant 7th chord shapes in open position. Every guitarist needs these in their vocabulary.

<u> <b> G7 </b> </u>
  e |--1--|  ← index finger
  B |--0--|
  G |--0--|
  D |--0--|
  A |--2--|  ← middle finger
  E |--3--|  ← ring finger
G7 is the V7 chord in the key of C — used constantly in folk, blues, and pop.

<u> <b> C7 </b> </u>
  e |--0--|
  B |--1--|  ← index finger
  G |--3--|  ← ring finger
  D |--2--|  ← middle finger
  A |--3--|  ← pinky finger
  E |--x--|
C7 is the V7 chord in the key of F and the I7 chord in C blues.

<u> <b> D7 </b> </u>
  e |--2--|  ← middle finger
  B |--1--|  ← index finger
  G |--2--|  ← ring finger
  D |--0--|
  A |--x--|
  E |--x--|
D7 is the V7 chord in the key of G — one of the most common chord changes in folk and country.

<u> <b> B7 </b> </u>
  e |--2--|  ← middle finger
  B |--0--|
  G |--2--|  ← index finger
  D |--1--|  ← ring finger
  A |--2--|  ← pinky
  E |--x--|
B7 is the V7 chord in the key of E — used constantly in blues and acoustic music.

<u> <b> PRACTICAL PROGRESSION — 12-BAR BLUES IN E </b> </u>
E7 - E7 - E7 - E7 - A7 - A7 - E7 - E7 - B7 - A7 - E7 - B7
All achievable with open-position shapes. This lets you jam over any blues backing track in E immediately.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Sus and Add Chords": [
    {
      title: "Sus Chords",
      img: suschords,
      info: `Suspended (sus) chords replace the 3rd of a chord with either the 2nd or 4th scale degree. This creates a floating, unresolved sound that is extremely common in pop, rock, and folk.

<u> <b> SUS2 CHORD </b> </u>
The 3rd is replaced by the 2nd scale degree.
Formula: 1 - 2 - 5
Sound: Open, airy, ambiguous — neither major nor minor.

<b> Dsus2: </b>
  e |--0--|
  B |--3--|
  G |--2--|
  D |--0--|
  A |--x--|
  E |--x--|

<b> Asus2: </b>
  e |--0--|
  B |--0--|
  G |--2--|
  D |--2--|
  A |--0--|
  E |--x--|

<u> <b> SUS4 CHORD </b> </u>
The 3rd is replaced by the 4th scale degree.
Formula: 1 - 4 - 5
Sound: Tense, suspended — strongly wants to resolve down to the major chord.

<b> Dsus4: </b>
  e |--3--|
  B |--3--|
  G |--2--|
  D |--0--|
  A |--x--|
  E |--x--|

<b> Asus4: </b>
  e |--0--|
  B |--3--|
  G |--2--|
  D |--2--|
  A |--0--|
  E |--x--|

<u> <b> THE CLASSIC MOVE: Sus4 → Major </b> </u>
Playing Asus4 then immediately releasing to A major (or Dsus4 → D) is one of the most satisfying movements in all of rock. The tension of the sus4 resolving to major is immediately recognisable.

Famous uses: "Pinball Wizard" by The Who (Asus4-A opening), countless acoustic intros in pop and rock.`,
    },
    {
      title: "Add Chords",
      img: addchords,
      info: `Add chords include an extra note on top of a basic triad without the 7th. They add colour without the full tension of a 7th chord.

<u> <b> ADD9 CHORD </b> </u>
Adds the 9th (same pitch as the 2nd, but an octave higher) to a major chord.
Formula: 1 - 3 - 5 - 9
Sound: Lush, full, colourful — like a major chord with extra shimmer.

<b> Cadd9 (one of the most used chords in rock): </b>
  e |--0--|
  B |--3--|  ← ring finger
  G |--0--|
  D |--2--|  ← middle finger
  A |--3--|  ← ring finger
  E |--x--|

<b> Gadd9: </b>
  e |--3--|  ← pinky
  B |--3--|  ← ring finger
  G |--0--|
  D |--0--|
  A |--2--|  ← middle finger
  E |--3--|  ← index finger

Cadd9 is everywhere in modern rock and pop — richer than plain C major while equally easy to play.

<u> <b> ADD2 vs ADD9 </b> </u>
Technically, add2 and add9 describe different octave placements of the same note, but guitarists use the terms interchangeably. Both add the 2/9 note without the 7th.

<u> <b> WHEN TO USE ADD CHORDS </b> </u>
Substitute a plain major chord with its add9 version whenever you want more harmonic colour without the tension of a 7th chord. G - Cadd9 - D became the defining sound of 1990s–2000s acoustic rock precisely because of this.

<u> <b> HOW TENSION WORKS IN SUS AND ADD </b> </u>
<b> Sus chords: </b> create tension by removing the 3rd (ambiguity — not clearly major or minor)
<b> Sus4 specifically: </b> the 4th scale degree "leans" downward to the 3rd — strong pull to resolve
<b> Add chords: </b> add colour without tension — they're stable and pleasant, just richer`,
    },
  ],

  // ── MODULE 2: Intermediate Techniques ───────────────────────────

  "Hammer-Ons and Pull-Offs": [
    {
      title: "Hammer-Ons",
      img: hammerpull,
      info: `A hammer-on lets you sound a higher note without picking — the force of the fretting finger itself makes the string vibrate. This creates a smooth, fluid connection between notes.

<u> <b> WHAT IS A HAMMER-ON? </b> </u>
You pick the lower note, then sharply bring another finger down onto a higher fret. The momentum of the finger "hammering" onto the fret causes the string to vibrate and produce the higher note — no second pick attack needed.

<b> TAB NOTATION: 5h7 </b>
Pick fret 5, hammer onto fret 7.

<u> <b> HOW TO EXECUTE </b> </u>
1. Pick the first note cleanly (e.g., 5th fret, G string)
2. Keep the first finger pressed down
3. Bring the hammer finger (e.g., ring finger) down SHARPLY onto the target fret (7th)
4. The landing must be fast and firm — right behind the fret wire
5. The second note should ring clearly without any second pick stroke

<u> <b> COMMON PROBLEMS </b> </u>
<b> Too quiet: </b> Not enough speed/force on the hammer. The finger must drop quickly, not slowly press down.
<b> Buzz on hammer note: </b> Landing too far from the fret wire. Aim right behind the metal fret strip.
<b> First note mutes: </b> You're accidentally releasing the first finger when hammering. Keep it pressed.

<u> <b> SINGLE-FINGER LEGATO </b> </u>
Once comfortable with two-finger hammer-ons, practice a full scale using only hammer-ons ascending — pick only the first note on each string and hammer all subsequent notes. This is called single-direction legato and is the foundation of smooth scale runs.

<u> <b> SPEED BUILDING </b> </u>
Practice hammer-ons with a metronome starting at 60 BPM. Focus on evenness — both the picked note and the hammered note should be the same volume and duration. Uneven legato is the most common intermediate mistake.`,
    },
    {
      title: "Pull-Offs",
      img: hammerpull,
      info: `A pull-off is the descending counterpart to the hammer-on — sounding a lower note by pulling the fretting finger off the string with a slight plucking motion.

<u> <b> WHAT IS A PULL-OFF? </b> </u>
You have two fingers on the string simultaneously. You pick the higher fret, then pull the top finger off (slightly downward or upward) to sound the lower fret — again without a second pick stroke.

<b> TAB NOTATION: 7p5 </b>
Pick fret 7, pull off to sound fret 5.

<u> <b> HOW TO EXECUTE </b> </u>
1. Place both fingers on the string simultaneously before picking (index on fret 5, ring on fret 7)
2. Pick the higher fret (ring finger, fret 7)
3. Pull the ring finger off the string with a slight sideways "pluck" — toward the adjacent lower string
4. The index finger (fret 5) should ring out clearly

<u> <b> THE CRUCIAL DETAIL </b> </u>
Simply lifting your finger straight off the string won't work — the string won't vibrate. You need the slight sideways pull that sets the string in motion. Think of it as plucking the string with your fretting finger as you remove it.

<u> <b> COMBINING HAMMER-ONS AND PULL-OFFS — TRILLS </b> </u>
Rapidly alternating between the two creates a trill:
  TAB: 5h7p5h7p5h7

Place both fingers. Pick fret 5. Hammer to 7. Pull off to 5. Hammer to 7. Pull off to 5. Repeat. Start slowly — the rhythm must be perfectly even.

<u> <b> SPEED BUILDING EXERCISES </b> </u>
Practice trills on every finger combination:
  Index-Middle (frets 5-6)
  Index-Ring (frets 5-7)
  Index-Pinky (frets 5-8)
  Middle-Pinky (frets 6-8)
30 seconds per combination, both ascending and descending. This isolates the weakest finger pairs directly.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  Slides: [
    {
      title: "Slide Up and Slide Down",
      img: slideupsdowns,
      info: `Slides connect two notes with a smooth, continuous pitch transition — the guitar equivalent of a vocal glide. They add fluidity and expression to lead playing.

<u> <b> WHAT IS A SLIDE? </b> </u>
Pick a note, then slide your fretting finger along the string to a higher or lower fret without lifting it. The continuous contact with the string keeps it vibrating throughout the movement, producing a smooth pitch transition between the two notes.

<u> <b> TAB NOTATION </b> </u>
<b> / = slide up </b>     5/7 = pick fret 5, slide up to fret 7
<b> \\ = slide down </b>   7\\5 = pick fret 7, slide down to fret 5

<u> <b> HOW TO EXECUTE A SLIDE UP </b> </u>
1. Pick the first note cleanly (e.g., 5th fret, G string)
2. While the note is ringing, smoothly move the finger up the string toward the higher fret
3. Maintain constant, firm pressure throughout — don't let the string stop vibrating
4. Arrive at the target fret (e.g., 7th fret)
5. The second note should be clearly audible

<u> <b> HOW TO EXECUTE A SLIDE DOWN </b> </u>
Same process in reverse. Pick the higher fret, slide downward. Slightly more force is needed to keep the string vibrating while sliding against the natural string tension.

<u> <b> SLIDE WITH PICK VS WITHOUT </b> </u>
<b> "Picked slide": </b> both the start and end notes are clearly defined — you pick the first note and the slide lands the second.
<b> "Legato slide": </b> only the first note is picked; the slide arrives at the destination silently. Written: 5/7 with parentheses around 7: 5/(7)

<u> <b> MAKING SLIDES MUSICAL </b> </u>
The speed of the slide matters enormously to the musical feel:
- <b> Fast slide: </b> aggressive, punchy (rock, blues)
- <b> Slow slide: </b> expressive, vocal, emotional (ballads, blues)
- <b> Very short slides (1-2 frets): </b> grace note effect — common in blues and country`,
    },
    {
      title: "Slides Between Chords",
      img: slideupsdowns,
      info: `Sliding between chord positions is a technique that adds smoothness and a professional "greasy" feel to rhythm guitar playing — especially in blues, soul, and R&B.

<u> <b> CHORD SLIDE TECHNIQUE </b> </u>
Instead of lifting your fingers and replanting them on the new chord, keep the entire chord shape pressed and slide it to the new position. This works best when the chord shape is the same or very similar between two chords.

<u> <b> POWER CHORD SLIDES (most common) </b> </u>
Power chords are the easiest to slide because the two-finger shape stays consistent. Sliding a power chord up or down 2 frets before landing on the target chord adds immediate blues/rock flavour.

Example:
  Play G5 at fret 3 → slide up to A5 at fret 5
  Tab: E|--3/5--|  A|--3/5--|

<u> <b> BLUES CHORD SLIDES </b> </u>
In blues rhythm playing, sliding into dominant 7th chords from 1-2 frets below is a classic technique:
  Approach E7 by sliding up from fret 1 or 2 first
  The slide approach "leans into" the chord rhythmically

<u> <b> PARTIAL CHORD SLIDES </b> </u>
You don't always slide the entire chord — sometimes just one or two fingers slide while others lift. This creates a partial voice-leading effect:
  One finger slides to its target while another moves independently
  Common in jazz and fingerstyle guitar

<u> <b> THE EXPRESSIVE VALUE </b> </u>
Chord slides remove the "hard attack" of a directly placed chord. The smooth approach makes chord changes feel inevitable rather than abrupt — the difference between speaking and singing. In blues and soul rhythm playing, this smoothness is essential to the authentic feel.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "String Bending": [
    {
      title: "Half Step and Full Step Bends",
      img: stringbending,
      info: `String bending is what gives guitar its most expressive, vocal quality — the ability to make the instrument "sing." It is the signature technique of blues, rock, and country lead guitar.

<u> <b> WHAT IS A BEND? </b> </u>
Pushing or pulling a fretted string sideways (perpendicular to the neck) increases its tension, which raises the pitch. A full bend raises the pitch by one whole step (two frets). A half bend raises by one half step (one fret).

<u> <b> HOW TO BEND </b> </u>
1. Fret a note (e.g., 7th fret, G string)
2. Place support fingers behind the bending finger (e.g., index and middle behind ring finger)
3. Push the string upward (toward the ceiling on G, B, e strings — downward for low E, A)
4. Use wrist rotation — not just finger strength — to drive the bend
5. The support fingers prevent the single bending finger from working alone and fatiguing

<b> FULL BEND: Tab 7b9 </b>
Pick fret 7, bend until the pitch matches fret 9 (a whole step higher).

<b> HALF BEND: Tab 7b8 </b>
Pick fret 7, bend until the pitch matches fret 8 (a half step higher).

<u> <b> INTONATION — BENDING IN TUNE </b> </u>
Out-of-tune bends are the most common mistake in lead guitar. To check: first play the target note (e.g., fret 9) so you remember how it sounds. Then bend fret 7 up to match that exact pitch. Your ear is the judge — not how far you physically push the string.

<u> <b> WHICH STRINGS BEND EASIEST </b> </u>
G, B, and high e strings bend most easily. Low E and A strings require significantly more force and are bent less frequently in typical lead playing.`,
    },
    {
      title: "Bend and Release",
      img: stringbending,
      info: `The bend-and-release is one of the most expressive guitar techniques — bending the string up to a higher pitch, then releasing it back down to the original note, all in one fluid motion.

<u> <b> WHAT IS BEND AND RELEASE? </b> </u>
Pick the note, bend it up to the target pitch (e.g., a full step), then smoothly return the string to its original unbent position. The listener hears the pitch rise and then fall — a guitar "singing" the way a voice would.

<b> TAB NOTATION: 7b9r7 </b>
Pick fret 7 → bend up to the pitch of fret 9 → release back to fret 7 pitch.

<u> <b> HOW TO EXECUTE </b> </u>
1. Pick the note at fret 7
2. Bend upward to the target pitch (fret 9 equivalent) smoothly
3. Without re-picking, reverse the wrist rotation to release the bend back to fret 7
4. The release should be as controlled as the bend — not a sudden drop

<u> <b> THE KEY: CONTINUOUS VIBRATION </b> </u>
The string must keep vibrating throughout the entire bend AND release. If the string goes quiet before the release, the effect is lost. Maintaining enough pick attack on the initial note and keeping the bend smooth and controlled preserves the sustain.

<u> <b> PRE-BEND AND RELEASE </b> </u>
Bend the string to the target pitch BEFORE picking. Then pick and release downward.
TAB: (7b9)r7 — parentheses indicate the bend happens before the pick strike.
The listener only hears the note falling from the high pitch, not rising. A completely different emotional effect.

<u> <b> VIBRATO WITH BENDS </b> </u>
After a full bend, adding vibrato at the top pitch — before releasing — creates the most expressive sound in all of rock and blues lead guitar. Bend to pitch, apply vibrato, then release. This is the BB King and David Gilmour signature move.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Vibrato": [
    {
      title: "Wrist Vibrato Technique",
      info: `Vibrato is the subtle, repeated pitch variation applied to a sustained note. It is one of the most personal and expressive techniques on guitar — your vibrato is part of your musical identity.

<u> <b> WHAT IS VIBRATO? </b> </u>
After picking a note, you repeatedly and rapidly oscillate the pitch slightly above the original note. Done well, vibrato makes a note "live and breathe" — the difference between a note that sits there and one that sings.

<u> <b> WRIST VIBRATO (most common in rock/blues) </b> </u>
1. Fret a note with your ring finger, index and middle fingers providing support behind
2. After picking, begin a rapid rotation of your wrist — similar to turning a doorknob
3. This wrist rotation pushes the string slightly sharp, then releases back to pitch, repeatedly
4. The motion should be even and controlled — equal up and down oscillation
5. Start vibrato after the note has spoken for a brief moment — not immediately

<u> <b> THE DOORKNOB ANALOGY </b> </u>
Imagine your wrist is turning a doorknob. The forearm rotates slightly, the wrist drives the motion, and the fingers transfer that rotation to the string bend. The string only bends upward — it doesn't go below the original pitch in standard guitar vibrato (unlike violin vibrato which oscillates around the central pitch).

<u> <b> SPEED AND WIDTH </b> </u>
<b> Slow, wide vibrato: </b> emotional, vocal, bluesy (BB King style)
<b> Fast, narrow vibrato: </b> intense, aggressive (Eddie Van Halen style)
<b> Moderate: </b> the most versatile, used in most rock and pop contexts

Both are valid — your preferred speed and width become part of your personal musical voice.

<u> <b> COMMON MISTAKES </b> </u>
- Starting vibrato immediately on the attack (sounds uncontrolled)
- Inconsistent motion — some oscillations faster than others
- Too narrow (barely perceptible)
- Only bending sharp without returning to pitch (this is a bend, not vibrato)`,
    },
    {
      title: "Classical vs Rock Vibrato",
      info: `Two distinct vibrato techniques are used in guitar playing. Understanding both gives you a complete expressive vocabulary.

<u> <b> CLASSICAL VIBRATO (finger vibrato) </b> </u>
The fretting finger oscillates slightly along the string — parallel to the string direction, not sideways across it. The pitch variation is narrower and centered around the original pitch.

How to do it:
- Fret a note normally
- Rock the finger slightly back (toward the nut) and forward (toward the bridge) repeatedly
- This changes the string length slightly, creating a narrow pitch oscillation
- Keep the motion controlled and even

Sound: Subtle, refined, delicate. Used in classical guitar, nylon string guitar, and jazz. Sounds "proper" and elegant.

<u> <b> ROCK/BLUES VIBRATO (bend vibrato) </b> </u>
The standard guitar vibrato already described — wrist rotation that repeatedly bends the string sharp and releases back to pitch. The oscillation is wider and more dramatic.

Sound: Emotional, bold, vocal. The defining sound of blues and rock lead guitar.

<u> <b> WHICH TO USE </b> </u>
<b> Classical pieces and jazz: </b> classical finger vibrato fits the refined style
<b> Rock solos: </b> bend vibrato gives the aggressive, emotional quality the music calls for
<b> Acoustic fingerstyle: </b> either works, depending on the emotional context

<u> <b> DEVELOPING YOUR OWN VIBRATO </b> </u>
Vibrato is the most personal technique on guitar. Two guitarists playing the same note with different vibrato sound completely different. You develop your vibrato by listening to players you love, consciously imitating their vibrato, and gradually finding your own natural expression through thousands of hours of practice. There is no shortcut — but it develops organically if you practice expressively rather than mechanically.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Palm Muting": [
    {
      title: "Palm Muting Technique",
      info: `Palm muting is the rhythmic "chugging" technique that defines rock rhythm guitar. It is one of the most used techniques in all of rock and metal.

<u> <b> WHAT IS PALM MUTING? </b> </u>
Rest the fleshy edge of your picking hand (the side below the pinky) lightly on the strings right where they cross over the bridge saddles. When you strum or pick, the strings vibrate but are partially dampened — producing a muted, percussive "thunk" rather than a full, resonant note.

<u> <b> FINDING THE SWEET SPOT </b> </u>
The contact point's exact position matters enormously:
- <b> Too far from the bridge (toward the neck): </b> strings muted too much, produces a dead thud
- <b> Too close to the bridge: </b> barely any muting effect
- <b> Right at the bridge saddles: </b> the sweet spot — notes are recognisably pitched but tight and chunky

This position varies between guitars and adjusts continuously as you play — it becomes instinctive with practice.

<u> <b> THE MUTING PRESSURE </b> </u>
Use the minimum pressure needed. The palm should rest on the strings gently — not pressing firmly. Too much pressure deadens the note completely; too little has no effect.

<u> <b> WITH DISTORTION </b> </u>
Palm muting combined with distortion and power chords creates the classic "chug" that drives rock and metal rhythm tracks. This combination is the most iconic sound in rock rhythm guitar.

<u> <b> PRACTICE EXERCISE </b> </u>
Play E5 power chord. Alternate between:
  <b> Full open strum: </b> rich, loud, full resonance
  <b> Palm-muted strum: </b> tight, compressed, percussive
Listen to the dramatic contrast. Then build 4-bar patterns combining both.`,
    },
    {
      title: "The Chug Sound in Rock Music",
      info: `The "chug" — that tight, percussive, rhythmic palm-muted power chord sound — is the backbone of rock and metal rhythm guitar. Mastering it unlocks the entire genre.

<u> <b> ANATOMY OF THE CHUG </b> </u>
A "chug" combines three elements simultaneously:
1. Palm muting (dampening the strings near the bridge)
2. Power chord shape (usually E5 or A5 as the main "chugging" chord)
3. Tight, downstroke-heavy picking (mostly downstrokes for aggression)

<u> <b> THE CLASSIC CHUG PATTERN </b> </u>
  PM---|
  E |--0-0-0-0-0-0-0-0--|

Eight palm-muted hits on the open low E string. Add rhythmic accents (every 4th hit slightly louder) to make it musical rather than mechanical.

<u> <b> ALTERNATING CHUGS AND OPEN POWER CHORDS </b> </u>
Great rock riffs use the contrast between muted and open:
  PM-- |       |
  E5: 0-0-0-0-5-5-5-5
  The palm-muted section builds tension; the open power chord is the release.

<u> <b> DOWNSTROKES VS ALTERNATE PICKING FOR PALM MUTING </b> </u>
<b> Downstrokes only: </b> heavier, more aggressive, slightly slower (Metallica, classic metal)
<b> Alternate picking: </b> faster, more even, used for rapid chug patterns
<b> Beginners: </b> start with all downstrokes. The consistent angle of the pick hitting the palm-muted strings is easier to control.

<u> <b> TAB NOTATION </b> </u>
P.M.--| (with dashes showing how long the muting lasts)
  P.M.--|         |
  E |--0-0-0-0-5-5--|

The vertical bar shows where palm muting stops and open strumming begins.`,
    },
  ],

  // ── MODULE 3: Scales and Lead Guitar ────────────────────────────

  "Pentatonic Scale — Minor": [
    {
      title: "The Minor Pentatonic Box",
      info: `The minor pentatonic scale is the most important scale in rock, blues, and pop lead guitar. If you only ever learn one scale, make it this one.

<u> <b> WHAT IS THE PENTATONIC SCALE? </b> </u>
"Penta" means five, "tonic" means tone. The pentatonic scale uses only 5 notes per octave (vs 7 in a full major scale). This reduction removes the notes most likely to clash with chord changes, making it almost impossible to play a wrong note in the right key context.

<u> <b> THE A MINOR PENTATONIC — POSITION 1 (The Box) </b> </u>
  e |--5--8--|
  B |--5--8--|
  G |--5--7--|
  D |--5--7--|
  A |--5--7--|
  E |--5--8--|

Starting on the 5th fret places you in A minor pentatonic. This rectangular shape is called "the box" — the launching point for most rock and blues improvisation.

<u> <b> THE 5 NOTES </b> </u>
A minor pentatonic: A - C - D - E - G

<u> <b> USING IT TO IMPROVISE </b> </u>
1. Find a backing track in Am
2. Place your hand in the box (5th fret)
3. Play any notes in any order — listen to how each one sounds against the chords
4. Add bends, hammer-ons, pull-offs to make it musical
5. Leave space between phrases

<u> <b> TRANSPOSING TO OTHER KEYS </b> </u>
The box is moveable. The root note (6th string, index finger) determines the key:
  5th fret = A minor pentatonic
  7th fret = B minor pentatonic
  8th fret = C minor pentatonic
  10th fret = D minor pentatonic`,
    },
    {
      title: "5 Positions Across The Fretboard",
      img: pentonicminor,
      info: `The minor pentatonic scale has 5 positions that together cover the entire fretboard. Knowing all 5 gives you complete freedom to play anywhere on the neck in any key.

<u> <b> WHY 5 POSITIONS? </b> </u>
The pentatonic scale has 5 notes. Each note can serve as the starting point for a position pattern. Together the 5 positions connect and overlap to cover the entire neck.

<u> <b> THE 5 POSITIONS (in A minor pentatonic) </b> </u>

<b> POSITION 1 — The Box (root at 5th fret) </b>
  e |--5--8--|  B |--5--8--|  G |--5--7--|
  D |--5--7--|  A |--5--7--|  E |--5--8--|

<b> POSITION 2 (root at 8th fret area) </b>
  e |--8--10--|  B |--8--10--|  G |--7--10--|
  D |--7--10--|  A |--7--10--|  E |--8--10--|

<b> POSITION 3 </b>
  e |--10--12--|  B |--10--13--|  G |--10--12--|
  D |--10--12--|  A |--10--12--|  E |--10--12--|

<b> POSITION 4 </b>
  e |--12--15--|  B |--13--15--|  G |--12--14--|
  D |--12--14--|  A |--12--14--|  E |--12--15--|

<b> POSITION 5 (connects back to Position 1 an octave up) </b>
  e |--15--17--|  B |--15--17--|  G |--14--17--|
  D |--14--17--|  A |--14--17--|  E |--15--17--|

<u> <b> CONNECTING POSITIONS </b> </u>
Each position overlaps with the next. The top two strings of Position 1 are the same as the bottom two strings of Position 2. Learn to slide seamlessly between adjacent positions — this is what makes your solos move across the entire neck rather than staying trapped in one box.

<u> <b> LEARNING ORDER </b> </u>
Master Position 1 thoroughly. Learn Position 2 next. Practice connecting them in one fluid run. Then add Position 3. Build outward from Position 1 rather than trying to learn all 5 separately.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Pentatonic Scale — Major": [
    {
      title: "Major Pentatonic Scale",
      img: pentonicmajor,
      info: `The major pentatonic scale is the "happy" counterpart to the minor pentatonic. It produces a bright, country, and melodic quality — same 5-note structure, completely different emotional character.

<u> <b> THE NOTES </b> </u>
A major pentatonic: A - B - C# - E - F#
A minor pentatonic: A - C - D - E - G
Different notes, but the same physical pattern — just starting from a different root.

<u> <b> THE RELATIVE RELATIONSHIP </b> </u>
A major pentatonic uses the same notes as F# minor pentatonic. They are relative scales — the same 5 notes with a different tonal centre. This means you already know the major pentatonic shape — it's the same box you learned for minor pentatonic, just shifted 3 frets down or interpreted starting from a different root note within the box.

<u> <b> G MAJOR PENTATONIC BOX (starting 2nd fret, root on 6th string) </b> </u>
  e |--2--5--|
  B |--3--5--|
  G |--2--4--|
  D |--2--5--|
  A |--2--5--|
  E |--2--5--|

<u> <b> HOW IT SOUNDS vs MINOR PENTATONIC </b> </u>
<b> Minor pentatonic: </b> bluesy, melancholic, rock/blues feel
<b> Major pentatonic: </b> bright, cheerful, country/folk/pop feel

<u> <b> WHEN TO USE MAJOR PENTATONIC </b> </u>
Play major pentatonic over major chord progressions where the harmony is bright and resolved. If the song has a bluesy feel, use minor pentatonic. Many guitarists blend both within the same solo — major pentatonic for bright resolved phrases, minor pentatonic for the darker tense ones. This blending is the signature of most great rock and blues soloists.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Blues Scale": [
    {
      title: "The Blue Note",
      img: blues,
      info: `The blues scale is the minor pentatonic scale with one extra note added — a single addition that defines the entire sound of blues, rock, and soul music.

<u> <b> THE BLUE NOTE </b> </u>
The blues scale adds the b5 (flat fifth — the "blue note") to the minor pentatonic scale. In A minor pentatonic (A-C-D-E-G), the blues scale adds Eb/D# between D and E.

A BLUES SCALE: A - C - D - Eb - E - G

That one extra note — Eb — creates the characteristic tension and "bent" quality of blues. It is a note that feels unstable and desperate, which is why blues music feels so emotionally raw.

<u> <b> THE BLUES SCALE BOX (A, starting 5th fret) </b> </u>
  e |--5--8--|
  B |--5--8--|
  G |--5--6--7--|  ← Eb at 6th fret = the blue note
  D |--5--6--7--|  ← Eb at 6th fret = the blue note
  A |--5--7--|
  E |--5--8--|

Compare this to the minor pentatonic box — you've only added two notes (one per octave) but the character changes dramatically.

<u> <b> USING THE BLUE NOTE </b> </u>
The blue note is a passing note — not a landing point. Use it to:
- Pass quickly through it to E or D on either side
- Bend into it from D (a half-step bend)
- Bend through it on the way to E (a full-step bend from D)

Landing on the blue note and sustaining it creates unresolved, uncomfortable tension. Moving through it expressively creates authentic blues feeling.`,
    },
    {
      title: "The BB King Box",
      img: {},
      info: `Blues legend BB King famously used a small cluster of notes at the top of the pentatonic box as his primary improvisational zone — producing some of the most expressive lead guitar sounds in music history.

<u> <b> WHAT IS THE BB KING BOX? </b> </u>
It is not a full scale position — it's a small, focused area on the high e and B strings around frets 7-10 in the A minor pentatonic box. BB King rarely moved far from this area, yet produced solos of extraordinary emotional depth.

<u> <b> THE NOTES (in A minor pentatonic, 5th position) </b> </u>
  e |--8--10--|
  B |--7--10--|
These 4 notes — combined with bends, vibrato, and slides — were the foundation of BB King's entire improvisational vocabulary for 60 years.

<u> <b> WHY SUCH A SMALL AREA? </b> </u>
BB King believed in expression over quantity of notes. Within this small zone:
- Every note is a chord tone or a blue note
- Bends are easy and controllable at this part of the neck
- Vibrato can be applied to every sustained note
- The high register projects powerfully over a blues band

<u> <b> THE BB KING APPROACH TO IMPROVISATION </b> </u>
1. Play a simple 2-3 note phrase
2. Let it ring — don't rush to the next phrase
3. Bend the last note slightly and add vibrato
4. Leave silence (the "answer space")
5. Respond with another simple phrase

<u> <b> APPLYING IT </b> </u>
Take an Am backing track. Stay only on the B and high e strings in the 7-10 fret area. Use only bends, vibrato, and deliberate note choices. Force yourself to use fewer notes than you think you need. This restriction produces more musical results than running through the full box.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Major Scale — All Positions": [
    {
      title: "Major Scale — All 7 Positions",
      img: sevenmajor,
      info: `The major scale can be played in 7 different positions across the neck. Knowing all 7 gives you complete freedom to play in any area of the neck in any key.

<u> <b> WHY 7 POSITIONS? </b> </u>
The major scale has 7 unique notes. Each note can serve as the starting point for a position pattern. This is directly related to the 7 modes — each position corresponds to one mode of the major scale.

<u> <b> THE 3-NOTES-PER-STRING APPROACH </b> </u>
The most effective way to learn all positions: each string has exactly 3 notes from the scale. This produces consistent, fast scale patterns used by professional players.

<u> <b> G MAJOR SCALE — POSITION 1 (root at 6th string, 3rd fret) </b> </u>
  e |--2--3--5--|
  B |--3--5--7--|
  G |--2--4--5--|
  D |--2--3--5--|
  A |--2--3--5--|
  E |--3--5--7--|

This is the root position — learn this one first.

<u> <b> CONNECTING ALL POSITIONS </b> </u>
Each position overlaps with the next by 2–3 frets. Think of the neck as a connected chain rather than isolated boxes. Moving seamlessly from one position to the next across the entire neck is the mark of an advanced player.

<u> <b> PRACTICAL LEARNING ORDER </b> </u>
Position 1 (root position) → Position 5 (one octave up) → remaining positions filling in between.
Never try to learn all 7 simultaneously. Master 1 and 5 first.

<u> <b> THE PAYOFF </b> </u>
Once you know all 7 positions, every melody, lick, or scale run you've heard becomes physically accessible anywhere on the neck in any key.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Your First Solo": [
    {
      title: "Playing Your First Solo",
      info: `The moment you play your first real improvised lead over a chord progression is a milestone. Here is exactly how to get there.

<u> <b> WHAT YOU NEED </b> </u>
- A backing track in Am (search "A minor blues backing track" or "Am backing track")
- The A minor pentatonic box position (5th fret)
- A few techniques: bends, hammer-ons, vibrato
That is genuinely all you need.

<u> <b> STEP-BY-STEP </b> </u>
Step 1: Find an Am backing track and let it play
Step 2: Place your hand in the pentatonic box (5th fret, 6th string)
Step 3: Play one note. Listen to how it sounds against the chord.
Step 4: Play two notes. Then three. Build small melodic shapes.
Step 5: Add one hammer-on somewhere.
Step 6: Add one bend — bend the 7th fret G string up one full step.
Step 7: Leave space between phrases. Silence is part of the music.

<u> <b> CALL AND RESPONSE PHRASING </b> </u>
Play a short phrase (the "question") → pause → play an answering phrase (the "response"). This creates musical conversation rather than a continuous stream of notes.
Example: 3 notes going up, ending unresolved → pause → 2 notes resolving down to the root. Even this simple shape sounds musical.

<u> <b> THE MOST IMPORTANT RULE </b> </u>
You cannot play a "wrong" note in the pentatonic scale over a matching key backing track. Every note is harmonically safe. The only things that make a solo sound bad are: no rhythmic intent, no phrasing, and no space. One confident, well-placed, well-bent note is worth more than 20 rushed, uncertain ones.

<u> <b> RECORD YOURSELF </b> </u>
Record even 30 seconds of improvisation. Listen back. You will hear things you can't hear while playing. This feedback loop is how you identify exactly what to improve.`,
    },
  ],

  // ── MODULE 4: Intermediate Rhythm ───────────────────────────────

  "Fingerpicking Patterns": [
    {
      title: "PIMA Technique and Travis Picking",
      img: pima,
      info: `Fingerpicking uses your thumb and fingers to pluck individual strings rather than strumming with a pick — opening a completely different expressive world on guitar.

<u> <b> THE PIMA SYSTEM </b> </u>
Classical and fingerstyle guitarists use letters from Spanish finger names:
  <b> p </b> = pulgar (thumb) → plays strings 4, 5, 6 (bass strings)
  <b> i </b> = índice (index finger) → plays string 3
  <b> m </b> = medio (middle finger) → plays string 2
  <b> a </b> = anular (ring finger) → plays string 1

Thumb handles bass; fingers handle treble. This division lets you play bass and melody simultaneously.

<u> <b> TRAVIS PICKING </b> </u>
Alternates the thumb between two bass strings while fingers play a consistent pattern on higher strings. Made famous by Merle Travis — used extensively in folk, country, and acoustic pop.

On a C major chord:
  Thumb alternates: string 5 (A) and string 4 (D)
  Fingers i, m, a play strings 3, 2, 1 in between thumb strokes
  Pattern: p-i-p-m-a-m (or variations)

<u> <b> SIMPLE ARPEGGIO (starting point) </b> </u>
p-i-m-a = one finger per string, lowest to highest:
  Beat 1: Thumb → root bass string
  Beat 2: Index → string 3
  Beat 3: Middle → string 2
  Beat 4: Ring → string 1

This simple pattern already sounds beautiful on Am, C, G, and Em.

<u> <b> FINGERNAILS vs FLESH </b> </u>
<b> Longer nails: </b> brighter, louder tone (classical guitar style)
<b> Flesh of fingertips: </b> warmer, softer tone (folk, acoustic pop)
Find your preference through experimentation.`,
    },
    {
      title: "Alternating Bass Patterns",
      info: `Alternating bass fingerpicking is one of the most musically rich techniques on acoustic guitar — the thumb walks bass lines while the fingers play chord tones and melodies simultaneously.

<u> <b> THE ALTERNATING BASS CONCEPT </b> </u>
Your thumb alternates between two bass strings on every beat — providing a bass line — while your fingers pluck the higher strings on the off-beats, providing the chordal and melodic content. The result sounds like two instruments: a bass player and a guitarist playing simultaneously.

<u> <b> CHORD-SPECIFIC BASS STRING PAIRS </b> </u>
For each chord, the thumb alternates between the root string and a secondary bass string:
  <b> C major: </b> alternates between 5th string (A=root) and 4th string (D)
  <b> G major: </b> alternates between 6th string (E=root) and 4th string (D)
  <b> D major: </b> alternates between 4th string (D=root) and 5th string (A)
  <b> Am: </b> alternates between 5th string (A=root) and 4th string (D)

<u> <b> A COMPLETE ALTERNATING BASS PATTERN (C major) </b> </u>
  Beat 1: Thumb → 5th string (C root note)
  Beat 1+: Index → 3rd string
  Beat 2: Thumb → 4th string (D, second bass note)
  Beat 2+: Middle → 2nd string
  Beat 3: Thumb → 5th string (C root again)
  Beat 3+: Index → 3rd string
  Beat 4: Thumb → 4th string
  Beat 4+: Ring → 1st string

<u> <b> START SLOWLY </b> </u>
Practice the thumb alternation alone first (no fingers) until it's automatic. Then add the finger pattern on top. The thumb must be independent of the fingers — it should not stop or hesitate when the fingers move. This thumb independence is the core skill of all fingerstyle guitar.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Advanced Strumming": [
    {
      title: "16th Note Strumming",
      img: sixteen,
      info: `16th note strumming doubles the subdivisions of 8th note strumming — creating denser, more energetic rhythmic patterns used in funk, pop, and uptempo rock.

<u> <b> THE COUNTING </b> </u>
<b> 8th notes: </b> 1 + 2 + 3 + 4 + (8 strokes per bar)
<b> 16th notes: </b> 1 e + a 2 e + a 3 e + a 4 e + a (16 positions per bar)

Your strumming hand moves at 16th note speed — constant down-up-down-up at double the previous rate. You choose which of these 16 positions actually contact the strings.

<u> <b> 16TH NOTE PATTERNS </b> </u>

<b> Pattern 1 — Basic (D on 1, 2, 3, 4 — fill with ups): </b>
  1  e  +  a  2  e  +  a  3  e  +  a  4  e  +  a
  D  .  U  .  D  .  U  .  D  .  U  .  D  .  U  .

<b> Pattern 2 — Funk pattern (dots = air strum): </b>
  D  .  D  U  .  U  D  U  .  U  D  U  .  U  D  .

<u> <b> THE PENDULUM PRINCIPLE (still applies) </b> </u>
Your arm moves continuously at 16th note speed regardless of whether you hit the strings. The pick makes contact or misses — the arm never stops. At typical song tempos, 16th notes feel very fast; the consistency of arm motion is what makes it manageable.

<u> <b> MUTING IN 16TH PATTERNS </b> </u>
16th note funk strumming typically alternates between fretted chord strums and muted strums. Lightly rest fretting hand fingers on the strings for the muted positions — this creates the percussive "ch" sound that defines funk rhythm guitar.

<u> <b> PRACTICE TEMPO </b> </u>
Start at 60 BPM for 16th note patterns. This gives each position enough time to execute cleanly. Rushing is the most common mistake — the arm wants to play strong beats harder and faster.`,
    },
    {
      title: "Syncopation",
      img: syncopation,
      info: `Syncopation means emphasising the off-beats — the weak beats or the "and" counts between main beats. It's what makes rhythm guitar feel alive, groovy, and forward-moving rather than mechanical.

<u> <b> WHAT IS SYNCOPATION? </b> </u>
In a standard pattern, the strongest beats are 1, 2, 3, and 4. The "and" counts between them are weaker. Syncopation deliberately places accents, chord hits, or emphasis on those weaker positions — creating surprise and forward momentum.

<u> <b> THE ANTICIPATED CHORD CHANGE </b> </u>
The most common syncopation technique: instead of landing the chord change exactly on beat 1, play it on the "and" of beat 4 — one eighth note early. This "anticipation" is used in virtually all pop and rock and prevents the progression from sounding mechanical.

<u> <b> TIED NOTES </b> </u>
When a chord is strummed on an off-beat and held through the following strong beat (rather than re-strummed on the beat), it creates syncopation. The rhythm "leans forward."

<u> <b> REGGAE SKANK — PURE OFF-BEAT </b> </u>
Reggae is pure off-beat emphasis: chords are played ONLY on the "and" counts (between the beats), never on the main beats:
  1  +  2  +  3  +  4  +
  .  D  .  D  .  D  .  D

This creates the characteristic light, choppy, bouncy feel of reggae rhythm guitar.

<u> <b> MUTING BETWEEN STRUMS </b> </u>
Another form of syncopation: place your fretting hand lightly on the strings between chord strums to create a percussive "ch" sound. This chop-and-strum rhythm is fundamental to funk and R&B.

<u> <b> INTERNALISING SYNCOPATION </b> </u>
Listen to Stevie Wonder, James Brown, Earth Wind & Fire. Your body learns groove from listening. Syncopated feel is absorbed before it can be executed — listen first, then play.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Chord Progressions in Keys": [
    {
      title: "I IV V in Multiple Keys",
      info: `The I-IV-V chord progression is the engine of popular music. Understanding how to find it in any key lets you play along with songs in any key without needing a capo or learning new shapes.

<u> <b> THE DIATONIC CHORDS REVIEW </b> </u>
Every major key produces 7 chords. The I (one), IV (four), and V (five) chords are always major and are the most commonly used.

<u> <b> I-IV-V IN COMMON GUITAR KEYS </b> </u>
  Key of G:  G (I)  -  C (IV)  -  D (V)
  Key of D:  D (I)  -  G (IV)  -  A (V)
  Key of A:  A (I)  -  D (IV)  -  E (V)
  Key of E:  E (I)  -  A (IV)  -  B (V)
  Key of C:  C (I)  -  F (IV)  -  G (V)

<u> <b> THE PATTERN </b> </u>
Find the I chord. Count up 4 scale steps for IV. Count up 5 steps for V (or just 2 steps up from IV). This formula works in every key.

<u> <b> THE 12-BAR BLUES STRUCTURE </b> </u>
The most important application of I-IV-V:
  | I  | I  | I  | I  |
  | IV | IV | I  | I  |
  | V  | IV | I  | V  |

In G: G7 - G7 - G7 - G7 - C7 - C7 - G7 - G7 - D7 - C7 - G7 - D7

This 12-bar pattern is the foundation of all blues and a huge proportion of rock and roll. Once internalised, you can jam with any blues musician in any key.

<u> <b> THE NASHVILLE NUMBER SYSTEM </b> </u>
Professional session musicians use numbers instead of chord names so the same chart works in any key:
  1 - 4 - 5 (instead of G - C - D)
When the key changes, every musician transposes using the numbers. This system is used on thousands of professional recordings.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Playing With A Metronome": [
    {
      title: "Why Timing Matters More Than Speed",
      info: `Of all the skills in music, timing is the most fundamental. A guitarist with imperfect technique but great timing sounds good. A guitarist with perfect technique but poor timing sounds wrong.

<u> <b> THE HONEST TRUTH ABOUT TIMING </b> </u>
Most guitarists believe their timing is "pretty good." Most guitarists' timing is actually inconsistent in ways they don't notice — because they rarely practice with a metronome. The metronome removes self-delusion. It tells you exactly whether you're on time, rushing, or dragging.

<u> <b> RUSHING vs DRAGGING </b> </u>
<b> Rushing: </b> playing slightly ahead of the beat — the most common beginner and intermediate tendency, especially during difficult chord changes or fast passages. The cause: anticipation and tension cause the body to speed up involuntarily.
<b> Dragging: </b> playing slightly behind the beat — less common but equally wrong. Usually occurs when overthinking or when playing slowly and carefully.

<u> <b> INTERNAL PULSE </b> </u>
The real goal of metronome practice is not to depend on the metronome forever — it's to build an internal pulse so accurate that you don't need it. This internal clock is built through consistent metronome practice and playing with other musicians over years.

<u> <b> SUBDIVISION EXERCISES </b> </u>
Set metronome to 60 BPM. Clap quarter notes (1, 2, 3, 4). Then 8th notes (1+2+3+4+). Then 16th notes (1e+a...). This builds rhythmic accuracy at the micro level that directly transfers into your playing.

<u> <b> THE PRACTICAL RESULT </b> </u>
A guitarist with great timing makes everyone around them sound better. A guitarist with poor timing makes everyone worse. Timing is the most fundamental gift you can give to any musical collaboration.`,
    },
    {
      title: "Metronome Practice Methods",
      info: `Using a metronome effectively is a skill in itself. These methods produce the fastest timing improvement.

<u> <b> METHOD 1 — BASIC CLICK PRACTICE </b> </u>
Set the metronome to a comfortable tempo. Play a chord progression, scale, or song in time with the clicks. The click represents the beat. Every note must land precisely with or between clicks. Start at 60 BPM — slower than you think necessary.

<u> <b> METHOD 2 — BEAT 2 AND 4 EMPHASIS </b> </u>
Accent beats 2 and 4 (the "backbeat") when strumming. This is how popular music actually feels — the snare drum hits on 2 and 4 in virtually all rock, pop, and blues. Playing with this emphasis sounds more musical than treating all 4 beats equally.

<u> <b> METHOD 3 — SLOW DOWN TO SPEED UP </b> </u>
Whatever tempo you want to play at, practice at half that speed. If you want to play at 120 BPM, practice at 60 BPM until completely clean. Then increase by 5 BPM at a time. Never skip tempo steps — this is the only method that produces reliable speed without sloppiness.

<u> <b> METHOD 4 — SPARSE CLICK </b> </u>
Set the metronome to half speed so the click only lands on beats 1 and 3. You must fill in beats 2 and 4 yourself from your internal pulse. If your timing is accurate, the click lands exactly where expected. This trains deep internal rhythm faster than a constant click.

<u> <b> METHOD 5 — RECORD AND REVIEW </b> </u>
Record yourself playing along with a metronome. Listen back without playing. You will immediately hear rushing, dragging, and inconsistency that you couldn't hear while playing. This honest feedback loop is one of the most powerful practice tools available.

<u> <b> YOUR APP'S METRONOME </b> </u>
Use the built-in metronome for all rhythm practice. Set it. Keep it running. The discomfort you feel when the metronome reveals your timing inconsistencies is exactly where your timing improves.`,
    },
  ],

  // ── MODULE 5: Intermediate Music Theory ─────────────────────────

  "Circle of Fifths": [
    {
      title: "What The Circle of Fifths Shows",
      img: cof,
      info: `The Circle of Fifths is the most important diagram in music theory. It maps the relationships between all 12 keys and tells you which chords and keys are closely related.

<u> <b> WHAT IT SHOWS </b> </u>
The Circle of Fifths arranges all 12 musical keys in a circle. Moving clockwise, each key is a perfect fifth higher than the previous. Moving counter-clockwise, each key is a perfect fourth higher.

  C → G → D → A → E → B → F# → C# → Ab → Eb → Bb → F → C

<u> <b> PRACTICAL USE 1 — KEY SIGNATURES </b> </u>
As you move clockwise from C, each key adds one sharp:
  C = 0 sharps
  G = 1 sharp (F#)
  D = 2 sharps (F#, C#)
  A = 3 sharps (F#, C#, G#)

As you move counter-clockwise from C, each key adds one flat:
  F = 1 flat (Bb)
  Bb = 2 flats (Bb, Eb)

<u> <b> PRACTICAL USE 2 — CHORD PROGRESSIONS </b> </u>
Keys adjacent on the circle share many chords and sound naturally compatible. This is why chord progressions frequently move between neighbouring keys. The classic I-IV-V progression always moves through adjacent positions on the circle.

<u> <b> PRACTICAL USE 3 — RELATIVE MINOR KEYS </b> </u>
Every major key has a relative minor that shares all the same notes. On the circle, the relative minor is found 3 steps clockwise:
  C major ↔ A minor
  G major ↔ E minor
  D major ↔ B minor

<u> <b> FOR GUITARISTS SPECIFICALLY </b> </u>
The Circle explains why G, C, and D appear together so often (all adjacent), and why Am, C, G, F sound so natural together. These aren't arbitrary groupings — they are musically adjacent keys.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Building Chords From Scales": [
    {
      title: "Chord Construction Formulas",
      img: chordconst,
      info: `Every chord you play was built systematically from a scale. Understanding chord construction gives you the ability to build any chord and understand why progressions work.

<u> <b> THE TRIAD FORMULA </b> </u>
A basic triad (3-note chord) is built by taking the root note and stacking the 3rd and 5th scale degrees above it.

<b> MAJOR CHORD: Root + Major 3rd + Perfect 5th </b>
  C major = C + E + G
  C is root → E is 4 semitones above (major 3rd) → G is 7 semitones above (perfect 5th)

<b> MINOR CHORD: Root + Minor 3rd + Perfect 5th </b>
  A minor = A + C + E
  A is root → C is 3 semitones above (minor 3rd) → E is 7 semitones above (perfect 5th)

The only difference between major and minor: the third is one semitone lower in minor chords. That single semitone difference creates the entire emotional distinction.

<u> <b> DIATONIC CHORDS — CHORDS BUILT FROM THE MAJOR SCALE </b> </u>
When you build chords from every note of the major scale using only notes within that scale, you get 7 chords with this consistent major/minor pattern:
  1 = Major (I)
  2 = Minor (ii)
  3 = Minor (iii)
  4 = Major (IV)
  5 = Major (V) — the "dominant," strong pull back to I
  6 = Minor (vi) — the "relative minor"
  7 = Diminished (vii°)

<u> <b> IN THE KEY OF G: </b> </u>
  G(I)  Am(ii)  Bm(iii)  C(IV)  D(V)  Em(vi)  F#dim(vii°)

This is why those specific chords always sound good together — they all come from the same parent scale and share common notes.

<u> <b> THE DOMINANT-TONIC RELATIONSHIP </b> </u>
The V chord creates tension that "wants" to resolve to the I chord: G7→C, D7→G, A7→D. This push-pull between V and I is the engine of harmony in Western music.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Chord Inversions": [
    {
      title: "Root Position vs Inversions",
      img: inversion,
      info: `A chord inversion changes which note is the lowest (bass) note of the chord. Inversions create smoother voice leading and more interesting basslines without changing the chord's basic identity.

<u> <b> ROOT POSITION </b> </u>
The root of the chord is the lowest note. C major in root position has C as the lowest note (C-E-G from bottom to top). This is the standard way you've been playing all chords so far.

<u> <b> FIRST INVERSION </b> </u>
The 3rd of the chord is the lowest note. C major first inversion has E as the bass (E-G-C). Written as C/E — "C chord with E in the bass" — a slash chord.

<u> <b> SECOND INVERSION </b> </u>
The 5th of the chord is the lowest note. C major second inversion has G as the bass (G-C-E). Written as C/G.

<u> <b> SLASH CHORD NOTATION </b> </u>
When you see G/B in a chord chart: play a G major chord with B as the lowest note. This is the first inversion of G.

G/B shape (common in pop and folk):
  e |--3--|
  B |--0--|
  G |--0--|
  D |--0--|
  A |--2--|  ← B note (not the usual 6th string root)
  E |--x--|

<u> <b> WHY INVERSIONS MATTER — VOICE LEADING </b> </u>
Inversions enable smooth bassline movement between chords. Instead of bass notes jumping around, they can step by step:

<b> Without inversions: </b> C - Am - F - G (bass: C → A → F → G — jumpy)
<b> With inversions: </b>    C - C/B - Am - Am/G - F - C/E - Dm - G
Bass line descends smoothly: C - B - A - G - F - E - D - G

This walking bass descent under changing chords is one of the most elegant sounds in acoustic guitar — and it's built entirely from inversions.`,
    },
  ],

  // ─────────────────────────────────────────────────────────────────

  "Introduction to Modes": [
    {
      title: "What Are Modes",
      info: `Modes are one of the most misunderstood topics in guitar theory. Here is a clear, practical explanation from the ground up.

<u> <b> WHAT ARE MODES? </b> </u>
The major scale has 7 notes. If you play those same 7 notes but start from a different note (not the root), you get a different mode. Each mode has its own characteristic sound and emotional quality.

<u> <b> THE 7 MODES OF THE C MAJOR SCALE </b> </u>
Start from each note of C major and play to the octave:
  <b> C to C = Ionian </b> (this IS the major scale — happy, resolved)
  <b> D to D = Dorian </b> (minor sound with a raised 6th — cool, jazzy)
  <b> E to E = Phrygian </b> (dark, exotic, Spanish-sounding)
  <b> F to F = Lydian </b> (dreamy, floating — major with a raised 4th)
  <b> G to G = Mixolydian </b> (dominant, bluesy — used in rock constantly)
  <b> A to A = Aeolian </b> (natural minor scale — melancholic, dark)
  <b> B to B = Locrian </b> (very dark, unstable — rarely used)

<u> <b> THE MOST IMPORTANT PRACTICAL INSIGHT </b> </u>
Don't think of modes as separate shapes to memorise independently. Think of them as the major scale played from different starting points, each emphasising different intervals and creating different emotional colour. The notes are the same — the tonal centre (what feels like "home") is different.

<u> <b> THE COMMON MISTAKE </b> </u>
Playing D Dorian over a C major chord progression does NOT produce Dorian sound. The chord progression must establish D as the tonal centre. Modal playing requires both the scale AND the appropriate chord context.`,
    },
    {
      title: "Dorian and Mixolydian",
      img: modes,
      info: `These two modes are the most immediately useful for rock guitarists and the best starting points for modal playing.

<u> <b> DORIAN MODE (2nd mode of the major scale) </b> </u>
Formula: W H W W W H W
Compared to natural minor (Aeolian): Dorian has a raised 6th degree.
  A natural minor: A B C D E F G
  A Dorian:        A B C D E F# G (F# instead of F)

The raised 6th gives Dorian a "brighter" minor quality — it's minor but with a cool, sophisticated edge rather than pure sadness.

<b> Sound: </b> Minor but sophisticated, jazzy, slightly funky
<b> Use over: </b> Minor 7th chords (Am7, Dm7), minor chord vamps, funk-rock, Latin-rock
<b> Famous uses: </b> "So What" (Miles Davis), "Oye Como Va" (Santana), "Smoke on the Water" main riff

Play A Dorian: Use the same shape as A natural minor but raise every F to F#.

<u> <b> MIXOLYDIAN MODE (5th mode of the major scale) </b> </u>
Formula: W W H W W H W
Compared to major (Ionian): Mixolydian has a flat 7th degree.
  G major:      G A B C D E F#
  G Mixolydian: G A B C D E F (F natural instead of F#)

The flat 7th gives Mixolydian a "dominant" quality — it feels like a major scale but with a bluesy edge.

<b> Sound: </b> Major but bluesy, slightly unresolved, rock-friendly
<b> Use over: </b> Dominant 7th chords (G7, A7, D7), blues-rock, classic rock
<b> Famous uses: </b> Almost all blues-rock leads, The Beatles' "Norwegian Wood," nearly every classic rock solo

Play G Mixolydian: Use the G major scale but play F natural instead of F#.`,
    },
  ],
};
