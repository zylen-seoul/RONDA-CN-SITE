/**
 * ServicesSection — Left Navigation + Right Detail Panel
 * Interactive: Click left service item to reveal detailed content on right
 * No images, uses deeper color blocks for distinction
 */
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const SERVICES = [
  {
    key: 'services.design',
    number: '01',
  },
  {
    key: 'services.sampling',
    number: '02',
  },
  {
    key: 'services.production',
    number: '03',
  },
  {
    key: 'services.fabric',
    number: '04',
  },
  {
    key: 'services.quality',
    number: '05',
  },
  {
    key: 'services.logistics',
    number: '06',
  },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const [activeIdx, setActiveIdx] = useState(0);

  const active = SERVICES[activeIdx];

  return (
    <section
      id="services"
      ref={ref}
      style={{ background: '#F7F5F2', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem) clamp(4rem, 8vw, 8rem)',
      }}>
        {/* ── Section header ── */}
        <div ref={headerRef} style={{ marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
          >
            <span style={{ display: 'block', width: '2.5rem', height: '1px', background: '#8B7355' }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase' as const,
              color: '#8B7355',
            }}>
              {t('services.label')}
            </span>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'end',
          }} className="grid-cols-1 lg:grid-cols-2">
            <div style={{ overflow: 'hidden' }}>
              <motion.h2
                initial={{ y: '100%' }}
                animate={headerInView ? { y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                  fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                  fontWeight: 300,
                  color: '#1A1A1A',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  whiteSpace: 'pre-line',
                  margin: 0,
                }}
              >
                {t('services.title')}
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                fontSize: '0.85rem',
                color: '#6B7280',
                lineHeight: 1.85,
                margin: 0,
                alignSelf: 'end',
              }}
            >
              {t('services.subtitle')}
            </motion.p>
          </div>
        </div>

        {/* ── Desktop: Left Navigation + Right Detail Panel ── */}
        <div className="hidden lg:grid" style={{
          gridTemplateColumns: '320px 1fr',
          gap: '2rem',
          minHeight: '500px',
          display: undefined,
        } as React.CSSProperties}>
          {/* Left Navigation Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5px',
              background: 'rgba(139,115,85,0.08)',
            }}
          >
            {SERVICES.map((service, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                whileHover={{ scale: 1.02 }}
                style={{
                  padding: '1.5rem',
                  background: activeIdx === idx ? '#8B7355' : '#F7F5F2',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.4s ease',
                  borderLeft: activeIdx === idx ? '3px solid #8B7355' : '3px solid transparent',
                }}
              >
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 300,
                  color: activeIdx === idx ? '#F7F5F2' : '#8B7355',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}>
                  {service.number}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                  fontSize: '0.75rem',
                  color: activeIdx === idx ? 'rgba(247,245,242,0.8)' : '#6B7280',
                  lineHeight: 1.4,
                  fontWeight: 500,
                }}>
                  {t(service.key + '.title')}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right Detail Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: '#D4CCC2',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Number */}
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '4rem',
                fontWeight: 300,
                color: 'rgba(139,115,85,0.15)',
                lineHeight: 1,
                display: 'block',
                marginBottom: '1rem',
              }}>
                {active.number}
              </span>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 300,
                color: '#1A1A1A',
                lineHeight: 1.2,
                margin: '0 0 1.5rem',
              }}>
                {t(active.key + '.title')}
              </h3>

              {/* Accent line */}
              <div style={{
                width: '2rem',
                height: '2px',
                background: '#8B7355',
                marginBottom: '1.5rem',
              }} />

              {/* Description */}
              <p style={{
                fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                fontSize: '0.9rem',
                color: '#4B5563',
                lineHeight: 1.8,
                margin: '0 0 2rem',
                maxWidth: '540px',
              }}>
                {t(active.key + '.desc')}
              </p>

              {/* Service Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {(['point1', 'point2', 'point3'] as const).map((pt) => (
                  <div key={pt} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: '#8B7355',
                      marginTop: '0.55rem',
                      flexShrink: 0,
                    }} />
                    <div>
                      <div style={{
                        fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: '#1A1A1A',
                        letterSpacing: '0.05em',
                        marginBottom: '0.2rem',
                      }}>
                        {t(active.key + '.' + pt + '.title')}
                      </div>
                      <div style={{
                        fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                        fontSize: '0.78rem',
                        color: '#6B7280',
                        lineHeight: 1.7,
                      }}>
                        {t(active.key + '.' + pt + '.desc')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' as const }}>
                {([active.key + '.tag1', active.key + '.tag2'] as const).map(tag => (
                  <span key={tag} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.58rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase' as const,
                    color: '#8B7355',
                    border: '1px solid rgba(139,115,85,0.35)',
                    padding: '4px 12px',
                  }}>
                    {t(tag)}
                  </span>
                ))}
              </div>

            </motion.div>
          </motion.div>
        </div>

        {/* ── Mobile: Stacked Cards ── */}
        <div className="lg:hidden" style={{ flexDirection: 'column', gap: '1rem' } as React.CSSProperties}>
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setActiveIdx(idx)}
              style={{
                background: activeIdx === idx ? '#8B7355' : '#E8E3DC',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.6rem',
                fontWeight: 300,
                color: activeIdx === idx ? '#F7F5F2' : '#1A1A1A',
                marginBottom: '0.5rem',
              }}>
                {service.number}
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                fontSize: '1.1rem',
                fontWeight: 300,
                color: activeIdx === idx ? '#F7F5F2' : '#1A1A1A',
                margin: '0 0 0.5rem',
              }}>
                {t(service.key + '.title')}
              </h3>
              {activeIdx === idx && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                    fontSize: '0.8rem',
                    color: 'rgba(247,245,242,0.8)',
                    lineHeight: 1.6,
                    margin: '0.75rem 0 0',
                  }}
                >
                  {t(service.key + '.desc')}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
