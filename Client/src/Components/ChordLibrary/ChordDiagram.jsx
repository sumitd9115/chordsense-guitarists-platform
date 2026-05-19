export default function ChordDiagram({ root, quality, placeholder }) {
  const strings = ["E", "A", "D", "G", "B", "e"];
  const chord = placeholder;
  const SW = 44, FH = 58, OX = 48, OY = 72, FRETS = 4;
  const totalW = OX + 5 * SW + OX;
  const totalH = OY + FRETS * FH + 36;

  // If chord starts at a higher fret (barre chords up the neck)
  const startFret = chord.startFret ?? 1;

  return (
    <svg
      width={totalW}
      height={totalH}
      viewBox={`0 0 ${totalW} ${totalH}`}
      className="overflow-visible"
    >
      {/* ── Watermark ── */}
      <text
        x={totalW / 2} y={totalH - 8}
        textAnchor="middle" fontSize="11"
        fill="#44403c" fontFamily="monospace" letterSpacing="3"
      >
        {root}{quality.toUpperCase()}
      </text>

      {/* ── String labels ── */}
      {strings.map((note, i) => (
        <text
          key={i}
          x={OX + i * SW} y={22}
          textAnchor="middle" fontSize="13"
          fontWeight="700" fontFamily="monospace" fill="#a8a29e"
        >
          {note}
        </text>
      ))}

      {/* ── Open (○) / Muted (✕) above nut ── */}
      {strings.map((_, i) => {
        const isOpen  = chord.open?.includes(i);
        const isMuted = chord.muted?.includes(i);
        const cx = OX + i * SW, cy = 44;
        if (!isOpen && !isMuted) return null;
        return isOpen ? (
          <circle
            key={i} cx={cx} cy={cy} r={7}
            stroke="#fbbf24" strokeWidth="1.8" fill="none"
          />
        ) : (
          <g key={i}>
            <line x1={cx-6} y1={cy-6} x2={cx+6} y2={cy+6}
              stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
            <line x1={cx+6} y1={cy-6} x2={cx-6} y2={cy+6}
              stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
          </g>
        );
      })}

      {/* ── Fret lines ── */}
      {Array.from({ length: FRETS + 1 }).map((_, i) => (
        <line
          key={i}
          x1={OX} y1={OY + i * FH}
          x2={OX + 5 * SW} y2={OY + i * FH}
          stroke={i === 0 ? "#e7e5e4" : "#44403c"}
          strokeWidth={i === 0 ? 5 : 1.5}
          strokeLinecap="round"
        />
      ))}

      {/* ── Strings ── */}
      {strings.map((_, i) => (
        <line
          key={i}
          x1={OX + i * SW} y1={OY}
          x2={OX + i * SW} y2={OY + FRETS * FH}
          stroke="#57534e"
          strokeWidth={i === 0 || i === 5 ? 2.5 : 1.5}
        />
      ))}

      {/* ── Fret numbers (left side) — respects startFret ── */}
      {Array.from({ length: FRETS }).map((_, i) => (
        <text
          key={i}
          x={OX - 20} y={OY + (i + 0.5) * FH + 5}
          textAnchor="middle" fontSize="11"
          fill="#57534e" fontFamily="monospace"
        >
          {startFret + i}
        </text>
      ))}

      {/* ── BARRE BARS ── rendered before finger dots so dots appear on top ── */}
      {chord.barre?.map((b, i) => {
        const fretIndex = b.fret - startFret; // 0-based visual row
        const x1 = OX + b.fromString * SW;
        const x2 = OX + b.toString   * SW;
        const cy = OY + (fretIndex + 0.5) * FH; // centered in fret row
        const barWidth = x2 - x1;

        return (
          <g key={i}>
            {/* Outer glow */}
            <rect
              x={x1 - 3} y={cy - 19}
              width={barWidth + 6} height={38}
              rx={19} ry={19}
              fill="#fbbf24" opacity="0.08"
            />
            {/* Barre pill */}
            <rect
              x={x1} y={cy - 16}
              width={barWidth} height={32}
              rx={16} ry={16}
              fill="#1c1917" stroke="#fbbf24" strokeWidth="1.5"
            />
            {/* Finger number centered on barre */}
            <text
              x={x1 + barWidth / 2} y={cy + 5}
              textAnchor="middle" fontSize="13"
              fontWeight="700" fontFamily="monospace" fill="#fbbf24"
            >
              {b.label}
            </text>
          </g>
        );
      })}

      {/* ── Individual finger dots — rendered on top of barre ── */}
      {chord.fingers?.map((f, i) => {
        const fretIndex = f.fret - startFret;
        const cx = OX + f.string * SW;
        const cy = OY + (fretIndex + 0.5) * FH;
        return (
          <g key={i}>
            {/* Glow */}
            <circle cx={cx} cy={cy} r={20} fill="#fbbf24" opacity="0.08" />
            {/* Dot — white border to stand out over a barre */}
            <circle
              cx={cx} cy={cy} r={16}
              fill="#1c1917" stroke="#e7e5e4" strokeWidth="1.5"
            />
            <text
              x={cx} y={cy + 5}
              textAnchor="middle" fontSize="13"
              fontWeight="700" fontFamily="monospace" fill="#e7e5e4"
            >
              {f.label}
            </text>
          </g>
        );
      })}

    </svg>
  );
}