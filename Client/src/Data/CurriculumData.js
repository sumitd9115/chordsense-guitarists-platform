import {
  FiMusic,
  FiBookOpen,
  FiHeadphones,
  FiTrendingUp,
  FiDisc,
  FiZap,
  FiTarget,
  FiSliders,
  FiCompass,
  FiRefreshCw,
  FiAward,
  FiEdit3,
  FiLayers,
  FiGrid,
} from "react-icons/fi";

export const CURRICULUM = {
  Beginner: [
    {
      module: "MODULE 1",
      title: "Getting Started",
      icon: FiMusic,
      lessons: [
        {
          title: "Guitar Anatomy",
          desc: "Parts of the guitar, string names (EADGBE), types of guitars (acoustic, electric, classical)",
        },
        {
          title: "How To Hold The Guitar",
          desc: "Sitting position, standing with strap, fretting hand position, picking hand position",
        },
        {
          title: "Reading Guitar Tabs",
          desc: "How tablature works, string lines, fret numbers, basic tab symbols",
        },
        {
          title: "How To Tune Your Guitar",
          desc: "Standard tuning, using a tuner, relative tuning by ear",
        },
        {
          title: "Your First Sounds",
          desc: "Picking single strings, basic finger exercises, left hand independence drills",
        },
      ],
    },
    {
      module: "MODULE 2",
      title: "First Chords",
      icon: FiDisc,
      lessons: [
        {
          title: "Basic Chord Theory",
          desc: "What is a chord, major vs minor feel, how finger placement creates sound",
        },
        {
          title: "Open Chords",
          desc: "E, A, D, G, C major. Finger diagrams + common mistakes",
        },
        {
          title: "Open Chords — Minor",
          desc: "Em, Am, Dm minor. When to use minor chords",
        },
        {
          title: "The 4 Magic Chords",
          desc: "G, C, D, Em — hundreds of songs use these",
        },
        {
          title: "Chord Transitions",
          desc: "Exercise routines for smooth switching, one-minute changes drill",
        },
      ],
    },
    {
      module: "MODULE 3",
      title: "Rhythm Basics",
      icon: FiHeadphones,
      lessons: [
        {
          title: "Understanding Beat and Tempo",
          desc: "What is a beat, BPM, counting 1-2-3-4",
        },
        {
          title: "Basic Strumming Patterns",
          desc: "Down strums, down-up strums, D DU UDU pattern",
        },
        {
          title: "Using a Pick vs Fingers",
          desc: "Pick grip, fingerstyle intro, pros/cons of each",
        },
        {
          title: "Playing Your First Songs",
          desc: "Simple 3-chord song examples, how to follow a chord chart",
        },
      ],
    },
    {
      module: "MODULE 4",
      title: "Basic Music Theory",
      icon: FiBookOpen,
      lessons: [
        {
          title: "Notes On The Fretboard",
          desc: "Natural notes, finding notes on each string",
        },
        {
          title: "What Are Sharps and Flats",
          desc: "Half steps, whole steps, the musical alphabet",
        },
        {
          title: "Major Scale Introduction",
          desc: "What a scale is, C major scale on one string",
        },
        {
          title: "Understanding Keys",
          desc: 'What "playing in a key" means, why it matters for beginners',
        },
      ],
    },
  ],

  Intermediate: [
    {
      module: "MODULE 1",
      title: "Expanding Chords",
      icon: FiLayers,
      lessons: [
        {
          title: "Barre Chords — E Shape",
          desc: "F major, B major, moveable shapes, common pain points + solutions",
        },
        {
          title: "Barre Chords — A Shape",
          desc: "Bb, C, D barre shapes, comparing E and A shape",
        },
        {
          title: "Power Chords",
          desc: "Two-finger power chords, rock + punk usage, moving power chords across the neck",
        },
        {
          title: "7th Chords",
          desc: "G7, C7, D7, B7 — blues and jazz flavor. Major 7th vs Dominant 7th",
        },
        {
          title: "Sus and Add Chords",
          desc: "Sus2, Sus4, Add9 — color chords, how they create tension and release",
        },
      ],
    },
    {
      module: "MODULE 2",
      title: "Intermediate Techniques",
      icon: FiZap,
      lessons: [
        {
          title: "Hammer-Ons and Pull-Offs",
          desc: "Single finger legato, combining both, speed building exercises",
        },
        { title: "Slides", desc: "Slide up, slide down, slide between chords" },
        {
          title: "String Bending",
          desc: "Half step bend, full step bend, bend and release, vibrato with bends",
        },
        {
          title: "Vibrato",
          desc: "Classical vibrato vs rock vibrato, wrist technique, finger technique",
        },
        {
          title: "Palm Muting",
          desc: 'Right hand muting, partial muting, the "chug" sound in rock music',
        },
      ],
    },
    {
      module: "MODULE 3",
      title: "Scales and Lead Guitar",
      icon: FiTarget,
      lessons: [
        {
          title: "Pentatonic Scale — Minor",
          desc: "The most important scale for beginners to lead, 5 positions across the fretboard",
        },
        {
          title: "Pentatonic Scale — Major",
          desc: "How it differs from minor pentatonic, when to use each",
        },
        {
          title: "Blues Scale",
          desc: 'Adding the blue note to pentatonic, the "BB King box"',
        },
        {
          title: "Major Scale — All Positions",
          desc: "7 positions across the neck, connecting them smoothly",
        },
        {
          title: "Your First Solo",
          desc: "Using pentatonic over a backing track, call and response phrasing basics",
        },
      ],
    },
    {
      module: "MODULE 4",
      title: "Intermediate Rhythm",
      icon: FiSliders,
      lessons: [
        {
          title: "Fingerpicking Patterns",
          desc: "Travis picking, alternating bass, PIMA technique",
        },
        {
          title: "Advanced Strumming",
          desc: "16th note strumming, syncopation, muting between strums",
        },
        {
          title: "Chord Progressions in Keys",
          desc: "I IV V in multiple keys, the Nashville number system intro",
        },
        {
          title: "Playing With A Metronome",
          desc: "Why timing matters more than speed, subdivision exercises",
        },
      ],
    },
    {
      module: "MODULE 5",
      title: "Intermediate Music Theory",
      icon: FiTrendingUp,
      lessons: [
        {
          title: "Circle of Fifths",
          desc: "What it is, how to read it, practical use for chord progressions",
        },
        {
          title: "Building Chords From Scales",
          desc: "How major/minor chords come from scales, diatonic chords in a key",
        },
        {
          title: "Chord Inversions",
          desc: "Root position vs inversions, why bassline movement matters",
        },
        {
          title: "Introduction to Modes",
          desc: "What modes are conceptually, Dorian and Mixolydian as starting points",
        },
      ],
    },
  ],

  Advanced: [
    {
      module: "MODULE 1",
      title: "Fretboard Mastery",
      icon: FiCompass,
      lessons: [
        {
          title: "The CAGED System",
          desc: "5 chord shapes that map the entire neck, connecting all positions seamlessly",
        },
        {
          title: "3 Notes Per String Scales",
          desc: "Faster than box patterns, used by professional lead guitarists",
        },
        {
          title: "Fretboard Note Memorization",
          desc: "Methods for knowing every note instantly, octave shapes, pattern recognition",
        },
        {
          title: "Horizontal vs Vertical Playing",
          desc: "Moving across strings vs up the neck, combining both for full fretboard freedom",
        },
      ],
    },
    {
      module: "MODULE 2",
      title: "Advanced Techniques",
      icon: FiZap,
      lessons: [
        {
          title: "Sweep Picking",
          desc: "Arpeggios with sweep motion, 3-string and 5-string sweeps",
        },
        {
          title: "Economy Picking",
          desc: "Combining alternate and sweep picking, efficiency of motion principle",
        },
        {
          title: "Finger Tapping",
          desc: "Eddie Van Halen style tapping, two-hand tapping intro",
        },
        {
          title: "Hybrid Picking",
          desc: "Pick + fingers simultaneously, country bends, complex voicings",
        },
        {
          title: "Advanced Vibrato and Bending",
          desc: "Microtonal bends, pre-bends, expressive vibrato control",
        },
      ],
    },
    {
      module: "MODULE 3",
      title: "Modes In Depth",
      icon: FiRefreshCw,
      lessons: [
        {
          title: "All 7 Modes of the Major Scale",
          desc: "Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian",
        },
        {
          title: "Modal Chord Progressions",
          desc: "Progressions that imply specific modes, how to hear the modal center",
        },
        {
          title: "Harmonic Minor Scale",
          desc: 'The "Spanish" sound, how it differs, Phrygian Dominant from harmonic minor',
        },
        {
          title: "Melodic Minor and Its Modes",
          desc: "Jazz melodic minor, Lydian Dominant, Altered scale for jazz soloing",
        },
      ],
    },
    {
      module: "MODULE 4",
      title: "Advanced Harmony",
      icon: FiGrid,
      lessons: [
        {
          title: "Extended Chords",
          desc: "9th, 11th, 13th chords, jazz voicings and shell chords",
        },
        {
          title: "Altered Chords",
          desc: "7#9 (Hendrix chord), 7b9, 7#11, when tension creates expression",
        },
        {
          title: "Modal Interchange",
          desc: "Borrowing chords from parallel modes, why it sounds emotional (e.g. bVI in major)",
        },
        {
          title: "Chord Substitutions",
          desc: "Tritone substitution, secondary dominants, reharmonization basics",
        },
      ],
    },
    {
      module: "MODULE 5",
      title: "Improvisation and Creativity",
      icon: FiEdit3,
      lessons: [
        {
          title: "Soloing Over Chord Changes",
          desc: 'Targeting chord tones, guide tones, avoiding "scale running"',
        },
        {
          title: "Phrasing and Musicality",
          desc: "Space in solos, question-answer phrases, copying vocal melody concepts",
        },
        {
          title: "Genre-Specific Soloing",
          desc: "Blues soloing, rock soloing, jazz improvisation basics",
        },
        {
          title: "Composing Your Own Music",
          desc: "Song structure, writing chord progressions, melody writing over chords",
        },
      ],
    },
    {
      module: "MODULE 6",
      title: "Advanced Music Theory",
      icon: FiAward,
      lessons: [
        {
          title: "Ear Training",
          desc: "Interval recognition, chord quality by ear, transcribing simple melodies",
        },
        {
          title: "Reading Standard Notation",
          desc: "Staff, notes, rhythm values — bridge between tab and real notation",
        },
        {
          title: "Songwriting Theory",
          desc: "Verse-chorus structure, tension-release, the emotional logic of chord choices",
        },
        {
          title: "Understanding Different Tunings",
          desc: "Drop D, Open G, DADGAD — how each opens new creative possibilities",
        },
      ],
    },
  ],
};
