import guitarBg from "../assets/Guitar_06.png";
import chords from "../assets/Chords.jpg";
import guitarTune from "../assets/Guitar-Tuner.jpg";
import HomePageSection from "../Components/Home/HomePageSection.jsx";
import HomePageGrid from "../Components/Home/HomePageGrid.jsx";

export default function HomePage() {
  return (
    <div className="relative font-mono">
      <HomePageSection
        img={guitarBg}
        HTp1="— for those who play —"
        HTp2="Your fretboard companion. Learn chords, track practice, and master
            the guitar — one string at a time."
        b1="Get Started"
        b2="Explore Learning Section"
        isScroll={true}
        alignment="start"
      >
        Chord<span className="text-amber-400">Sense</span>
      </HomePageSection>

      <HomePageSection
        img={chords}
        HTp1="— understand the harmony —"
        HTp2="From open chords to advanced jazz voicings, explore shapes, finger
            placements, and smooth transitions that bring every song to life."
        b1="Browse Chords"
        b2="Start Practicing"
        isScroll={false}
        alignment="end"
      >
        Master Guitar <br /> <span className="text-amber-400">Chords</span>
      </HomePageSection>

      <HomePageSection
        img={guitarTune}
        HTp1="— tune every string perfectly —"
        HTp2="Master standard and alternate tunings with precise guidance designed to keep your guitar sounding clean, balanced, and performance-ready at all times."
        b1="Start Tuning"
        b2="Explore Tunings"
        isScroll={false}
        alignment="start"
      >
        Perfect Your <br />{" "}
        <span className="text-amber-400">Guitar Tuning</span>
      </HomePageSection>

      <section className="bg-black py-28 px-6 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-400 text-lg tracking-[0.4em] uppercase mb-4">
            — More Features to become master —
          </p>
          <HomePageGrid />
        </div>
      </section>

      {/* ─── Quote Section ─── */}
      <section className="bg-stone-900 py-20 px-6 text-center">
        <blockquote className="max-w-2xl mx-auto">
          <p className="text-stone-300 text-2xl md:text-3xl font-mono leading-relaxed italic">
            "The guitar often makes you look cooler than you actually are!!"
          </p>
          <footer className="text-amber-400 text-sm tracking-widest uppercase mt-6 font-mono">
            — Amyt Datta
          </footer>
        </blockquote>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="bg-stone-950 py-24 px-6 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 font-mono">
          Ready to play smarter?
        </h2>
        <p className="text-stone-400 mb-8 max-w-md mx-auto">
          Open the menu and dive into your chord library or start learning from
          Learning Section today.
        </p>
        <button className="bg-amber-400 text-black font-bold px-8 py-3 rounded-full hover:bg-amber-300 transition-colors duration-200 font-mono tracking-wide">
          Open Dashboard →
        </button>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-black py-6 text-center text-stone-400 text-xs font-mono tracking-widest">
        © {new Date().getFullYear()} CHORDSENSE — BUILT FOR GUITARISTS
      </footer>
    </div>
  );
}
