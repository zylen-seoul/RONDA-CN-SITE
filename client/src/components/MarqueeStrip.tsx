/**
 * MarqueeStrip — Editorial Tension v3
 * Thin horizontal ticker strip between sections.
 * Variant 1 (default): dark text on off-white (#FAFAF8)
 * Variant 2 (accent): warm gold text on light cream (#FDF8F2) — bright & airy
 */
import { motion } from 'framer-motion';

const TOKENS = [
  'DESIGN', '·', 'SAMPLING', '·', 'PRODUCTION', '·',
  'QUALITY', '·', 'LOGISTICS', '·', 'INNOVATION', '·',
  'HANGZHOU', '·', 'SEOUL', '·', 'GLOBAL', '·',
  'RONDA', '·', 'ATLY', '·', 'SUPPLY CHAIN', '·',
];

interface MarqueeStripProps {
  /** dark: removed. Use accent for the second strip (warm gold on cream) */
  dark?: boolean;
  accent?: boolean;
}

export default function MarqueeStrip({ dark = false, accent = false }: MarqueeStripProps) {
  const repeated = [...TOKENS, ...TOKENS, ...TOKENS];

  // Variant logic:
  // accent=true  → warm cream bg (#FDF8F2) + vivid gold text — second strip
  // dark=true    → kept for backward compat but now maps to accent
  // default      → off-white bg + muted dark text — first strip
  const isAccent = accent || dark;

  const bg        = isAccent ? '#FDF8F2' : '#FAFAF8';
  const borderClr = isAccent ? 'rgba(180,140,80,0.18)' : 'rgba(10,10,10,0.06)';
  const dotColor  = isAccent ? 'rgba(180,140,80,0.35)' : 'rgba(10,10,10,0.2)';
  const textColor = isAccent ? 'rgba(160,120,55,0.85)' : 'rgba(10,10,10,0.35)';

  return (
    <div
      style={{
        background: bg,
        borderTop: `1px solid ${borderClr}`,
        borderBottom: `1px solid ${borderClr}`,
        overflow: 'hidden',
        padding: '0.85rem 0',
        position: 'relative',
      }}
    >
      {/* Fade edges */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: '8rem',
        background: `linear-gradient(to right, ${bg}, transparent)`,
        zIndex: 2,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        right: 0, top: 0, bottom: 0,
        width: '8rem',
        background: `linear-gradient(to left, ${bg}, transparent)`,
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      <motion.div
        style={{ display: 'flex', gap: '1.5rem', whiteSpace: 'nowrap', width: 'max-content' }}
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: isAccent ? 32 : 28, repeat: Infinity, ease: 'linear' }}
      >
        {repeated.map((token, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.6rem',
              fontWeight: token === '·' ? 300 : 500,
              letterSpacing: token === '·' ? '0' : '0.2em',
              textTransform: 'uppercase',
              color: token === '·' ? dotColor : textColor,
              flexShrink: 0,
            }}
          >
            {token}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
