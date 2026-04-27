/**
 * AboutSection — Editorial Tension v4
 * Design: Light background (#F7F5F2) with warm gold accents (#8B7355)
 * - Four key stats as oversized display numbers
 * - Brand story with dual identity (RONDA × ATLY)
 * - Four pillars in horizontal grid
 */
import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const ABOUT_IMG = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/yKbizznUxhuUSbYA.jpg';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { value: 10, suffix: '+', label: t('stats.years'), unit: t('stats.years.unit') },
    { value: 2000, suffix: '+', label: t('stats.factories'), unit: '' },
    { value: 500, suffix: '+', label: t('stats.fabrics'), unit: '' },
    { value: 100, suffix: '', label: t('stats.moq'), unit: '' },
  ];

  const pillars = [
    { titleKey: 'about.digital', descKey: 'about.digital.desc' },
    { titleKey: 'about.talent', descKey: 'about.talent.desc' },
    { titleKey: 'about.global', descKey: 'about.global.desc' },
    { titleKey: 'about.sustainable', descKey: 'about.sustainable.desc' },
  ];

  return (
    <section id="about" style={{ background: '#EDEAE5' }}>
      {/* Stats band — full width */}
      <div
        ref={ref}
        style={{
          borderBottom: '1px solid rgba(139,115,85,0.18)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '1600px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
              style={{
                padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 3vw, 3rem)',
                borderRight: i < 3 ? '1px solid rgba(139,115,85,0.15)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                cursor: 'default',
                transition: 'background 0.4s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(139,115,85,0.06)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.8rem, 5vw, 5rem)',
                  fontWeight: 300,
                  color: '#1A1A1A',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                <CountUp target={value} suffix={suffix} />
              </div>
              <span
                style={{
                  fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                  fontSize: '0.68rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#8B7355',
                }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main story block */}
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)',
        }}
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 'clamp(3rem, 6vw, 6rem)' }}
        >
          <span style={{ display: 'block', width: '2.5rem', height: '1px', background: '#8B7355' }} />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#8B7355',
            }}
          >
            {t('about.label')}
          </span>
        </motion.div>

        {/* Two-column: text left, image right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: 'clamp(2rem, 4vw, 6rem)',
            alignItems: 'center',
            marginBottom: 'clamp(4rem, 8vw, 8rem)',
          }}
        >
          {/* Left: text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                color: '#1A1A1A',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                marginBottom: '2rem',
              }}
            >
              {t('about.story.title')}
            </h2>
            <div style={{ marginBottom: '3rem' }}>
              {t('about.story.text').split('\n\n').map((para, idx) => (
                <p
                  key={idx}
                  style={{
                    fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                    fontSize: '0.88rem',
                    color: '#5A5550',
                    lineHeight: 1.9,
                    marginBottom: idx < 2 ? '1.5rem' : 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Dual brand identities */}
            <div
              style={{
                display: 'flex',
                gap: '0',
                borderTop: '1px solid rgba(139,115,85,0.2)',
                paddingTop: '2rem',
              }}
            >
              <div style={{ flex: 1, paddingRight: '2rem' }}>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.58rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#8B7355',
                    display: 'block',
                    marginBottom: '0.6rem',
                  }}
                >
                  Hangzhou
                </span>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '2.2rem',
                    fontWeight: 400,
                    color: '#1A1A1A',
                    letterSpacing: '0.05em',
                    fontStyle: 'italic',
                    display: 'block',
                  }}
                >
                  RONDA
                </span>
              </div>
              <div style={{ width: '1px', background: 'rgba(139,115,85,0.2)', margin: '0 2rem' }} />
              <div style={{ flex: 1, paddingLeft: '0' }}>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.58rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#8B7355',
                    display: 'block',
                    marginBottom: '0.6rem',
                  }}
                >
                  Seoul
                </span>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '2.2rem',
                    fontWeight: 400,
                    color: '#1A1A1A',
                    letterSpacing: '0.1em',
                    display: 'block',
                  }}
                >
                  ATLY
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35 }}
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              overflow: 'hidden',
              marginTop: '-4rem',
              marginBottom: '-4rem',
            }}
          >
            <img
              src={ABOUT_IMG}
              alt="Our story"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.95) saturate(0.9)',
                transition: 'transform 1s ease, filter 0.6s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)';
                (e.currentTarget as HTMLImageElement).style.filter = 'brightness(1) saturate(1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.95) saturate(0.9)';
              }}
            />
            {/* Gold corner accent */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                width: '3rem',
                height: '3rem',
                borderRight: '1px solid rgba(139,115,85,0.6)',
                borderBottom: '1px solid rgba(139,115,85,0.6)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                width: '3rem',
                height: '3rem',
                borderLeft: '1px solid rgba(139,115,85,0.3)',
                borderTop: '1px solid rgba(139,115,85,0.3)',
                pointerEvents: 'none',
              }}
            />
          </motion.div>
        </div>

        {/* Four pillars */}
        <div
          style={{
            borderTop: '1px solid rgba(139,115,85,0.15)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {pillars.map(({ titleKey, descKey }, i) => (
            <motion.div
              key={titleKey}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              style={{
                padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1rem, 2vw, 2rem)',
                borderRight: i < 3 ? '1px solid rgba(139,115,85,0.1)' : 'none',
                paddingLeft: i === 0 ? 0 : undefined,
                paddingRight: i === 3 ? 0 : undefined,
                transition: 'background 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(139,115,85,0.05)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: 'rgba(139,115,85,0.25)',
                  display: 'block',
                  marginBottom: '1.2rem',
                  lineHeight: 1,
                }}
              >
                0{i + 1}
              </span>
              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                  fontSize: '1.15rem',
                  fontWeight: 400,
                  color: '#1A1A1A',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3,
                }}
              >
                {t(titleKey)}
              </h4>
              <p
                style={{
                  fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                  fontSize: '0.75rem',
                  color: '#6B6560',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {t(descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
