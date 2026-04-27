/**
 * HeroSection — Chalk & Slate Design System
 * Asymmetric split: left 45% = chalk white text column, right 55% = full-bleed image.
 * Giant staggered Cormorant headline. Camel line accent.
 * Mouse parallax on image. Scroll-triggered fade-in.
 * Mobile: stacked, image behind with light overlay.
 */
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const HERO_BG = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/SsFUjHEjxUzuZYiG.jpg';

export default function HeroSection({ onInquiryOpen }: { onInquiryOpen?: () => void }) {
  const { t } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 25 });
  const imgX = useTransform(springX, [-1, 1], ['-2.5%', '2.5%']);
  const imgY = useTransform(springY, [-1, 1], ['-2.5%', '2.5%']);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        background: '#F7F5F2',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      {/* ── LEFT COLUMN ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 5vw, 5rem) clamp(3rem, 6vw, 5rem)',
        }}
        className="lg:w-[55%]"
      >
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}
        >
          <span style={{ display: 'block', width: '2.5rem', height: '1px', background: '#8B7355' }} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.62rem',
            fontWeight: 500,
            letterSpacing: '0.28em',
            textTransform: 'uppercase' as const,
            color: '#8B7355',
          }}>
            {t('hero.label')}
          </span>
        </motion.div>

        {/* Headline line 1 */}
        <div style={{ overflow: 'visible', marginBottom: '0.15rem' }}>
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
              fontSize: 'clamp(2.2rem, 4.2vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#1A1A1A',
              letterSpacing: '-0.02em',
              margin: 0,
              wordBreak: 'keep-all',
            }}
          >
            {t('hero.line1')}
          </motion.h1>
        </div>

        {/* Headline line 2 — italic camel */}
        <div style={{ overflow: 'visible', marginBottom: '2.5rem' }}>
          <motion.h1
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
              fontSize: 'clamp(2.2rem, 4.2vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#8B7355',
              letterSpacing: '-0.02em',
              fontStyle: 'italic',
              margin: 0,
              wordBreak: 'keep-all',
            }}
          >
            {t('hero.line2')}
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ transformOrigin: 'left', width: '100%', height: '1px', background: 'rgba(139,115,85,0.2)', marginBottom: '2rem' }}
        />

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{
            fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
            fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)',
            color: '#6B7280',
            lineHeight: 1.8,
            maxWidth: '380px',
            marginBottom: '2.5rem',
          }}
        >
          {t('hero.text')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}
        >
          <button
            onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase' as const,
              color: '#F7F5F2',
              background: '#1C1F24',
              border: 'none',
              padding: '0.85rem 2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'background 0.3s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = '#8B7355';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = '#1C1F24';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
            }}
          >
            {t('hero.cta1')}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button
            onClick={() => onInquiryOpen?.()}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.68rem',
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase' as const,
              color: '#4A4A4A',
              background: 'transparent',
              border: '1px solid #E2DDD8',
              padding: '0.85rem 2rem',
              cursor: 'pointer',
              transition: 'border-color 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#8B7355';
              (e.currentTarget as HTMLButtonElement).style.color = '#8B7355';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#E2DDD8';
              (e.currentTarget as HTMLButtonElement).style.color = '#4A4A4A';
            }}
          >
            {t('hero.cta2')}
          </button>
        </motion.div>

        {/* Bottom: brand + coords */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            marginTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 400, color: '#8B7355', letterSpacing: '0.12em' }}>RONDA</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#9CA3AF' }}>Hangzhou</span>
          </div>
          <span style={{ width: '1px', height: '28px', background: '#E2DDD8', display: 'block' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 400, color: '#8B7355', letterSpacing: '0.1em' }}>ATLY</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#9CA3AF' }}>Seoul</span>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT IMAGE COLUMN (desktop only) ── */}
      <div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '48%',
          overflow: 'hidden',
        }}
      >
        {/* Left fade gradient — chalk to transparent */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '30%',
          background: 'linear-gradient(to right, #F7F5F2 0%, transparent 100%)',
          zIndex: 2,
        }} />

        <motion.div style={{ x: imgX, y: imgY, width: '110%', height: '110%', position: 'absolute', top: '-5%', left: '-5%' }}>
          <img
            src={HERO_BG}
            alt="Fashion Atelier"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '65% center', filter: 'brightness(0.85) saturate(0.9)' }}
          />
        </motion.div>

        {/* Vertical text right edge */}
        <div
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            writingMode: 'vertical-rl' as const,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
            zIndex: 3,
          }}
        >
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'rgba(247,245,242,0.6)' }}>
            30°14'N · Hangzhou
          </span>
          <span style={{ width: '1px', height: '40px', background: 'rgba(139,115,85,0.4)', display: 'block' }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'rgba(247,245,242,0.6)' }}>
            37°33'N · Seoul
          </span>
        </div>
      </div>

      {/* Mobile: full-bleed bg */}
      <div
        className="lg:hidden absolute inset-0"
        style={{ zIndex: 0 }}
      >
        <img src={HERO_BG} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.15) saturate(0.5)' }} />
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 5,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: '#9CA3AF' }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
            <rect x="0.5" y="0.5" width="13" height="21" rx="6.5" stroke="#C4B8A8" strokeWidth="1"/>
            <motion.rect x="6" y="4" width="2" height="5" rx="1" fill="#8B7355"
              animate={{ y: [4, 10, 4] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}
