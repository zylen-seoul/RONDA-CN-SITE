/**
 * GlobalPresence — Full-Width City Cards v3
 * - Light background (#F7F5F2)
 * - 2 cities only: Hangzhou (left) + Seoul (right)
 * - Large landmark image placeholder (600×800px each)
 * - City name overlay + brief desc
 * - Bottom: "Upcoming cities" in translated text
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GlobalPresence() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const cities = [
    {
      key: 'hangzhou',
      city: t('contact.hangzhou'),
      tag: t('global.hq'),
      desc: t('global.hz.desc'),
      imagePlaceholder: false,
      imageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/VEnkGmmicAmbbpjx.jpg',
      imageWidth: 600,
      imageHeight: 800,
    },
    {
      key: 'seoul',
      city: t('contact.seoul'),
      tag: t('global.branch'),
      desc: t('global.kr.desc'),
      imagePlaceholder: false,
      imageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/mtPiHFXgDZRAQlWl.jpg',
      imagePosition: 'left center',
      imageWidth: 600,
      imageHeight: 800,
    },
  ];

  const upcoming = [
    { city: t('global.milan'), icon: '🇮🇹' },
    { city: t('global.tokyo'), icon: '🇯🇵' },
    { city: t('global.newyork'), icon: '🇺🇸' },
  ];

  return (
    <section
      id="global"
      ref={ref}
      style={{ background: '#F7F5F2', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 5vw, 5rem)',
      }}>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
            <span style={{ display: 'block', width: '2.5rem', height: '1px', background: '#8B7355' }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase' as const,
              color: '#8B7355',
            }}>
              {t('global.label')}
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 300,
            color: '#1A1A1A',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            margin: 0,
            whiteSpace: 'pre-line',
          }}>
            {t('global.title')}
          </h2>
        </motion.div>

        {/* ── Two city cards: left/right equal columns ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          {cities.map((city, i) => (
            <motion.div
              key={city.key}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.18 }}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {/* ── Large landmark image ── */}
              {city.imagePlaceholder ? (
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 9',
                    background: 'linear-gradient(135deg, #E8E4DE 0%, #D4CFC8 50%, #C8C2BA 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  data-image-placeholder={`${city.imageWidth}×${city.imageHeight}px — ${city.city} landmark`}
                >
                  {/* Placeholder visual cue */}
                  <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase' as const,
                      color: 'rgba(139,115,85,0.5)',
                      marginBottom: '0.5rem',
                    }}>
                      {city.imageWidth} × {city.imageHeight}
                    </div>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.1rem',
                      fontWeight: 300,
                      color: 'rgba(139,115,85,0.4)',
                    }}>
                      {city.city}
                    </div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.55rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase' as const,
                      color: 'rgba(139,115,85,0.3)',
                      marginTop: '0.3rem',
                    }}>
                      Landmark Photo
                    </div>
                  </div>
                  {/* Subtle grid lines for placeholder feel */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(139,115,85,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,115,85,0.06) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }} />
                </div>
              ) : (
                <img
                  src={city.imageUrl}
                  alt={city.city}
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 9',
                    objectFit: 'cover',
                    objectPosition: (city as any).imagePosition || 'center center',
                    display: 'block',
                  }}
                />
              )}

              {/* ── City info overlay at bottom ── */}
              <div style={{
                background: '#EDEAE5',
                padding: '1.5rem 1.8rem',
                borderTop: '2px solid #8B7355',
              }}>
                {/* Tag + city name row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                    fontWeight: 400,
                    color: '#1A1A1A',
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    {city.city}
                  </h3>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.55rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase' as const,
                    color: '#8B7355',
                    background: 'rgba(139,115,85,0.1)',
                    padding: '0.2rem 0.6rem',
                    flexShrink: 0,
                  }}>
                    {city.tag}
                  </span>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                  fontSize: '0.75rem',
                  color: '#6B6560',
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  {city.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Upcoming cities ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem',
          }}>
            <span style={{ display: 'block', width: '1.5rem', height: '1px', background: 'rgba(139,115,85,0.4)' }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.6rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase' as const,
              color: 'rgba(139,115,85,0.65)',
            }}>
              {t('global.upcoming')}
            </span>
          </div>

          <div style={{
            display: 'flex',
            gap: '0.8rem',
            flexWrap: 'wrap' as const,
            alignItems: 'center',
          }}>
            {upcoming.map(({ city, icon }) => (
              <div
                key={city}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1.2rem',
                  background: 'rgba(139,115,85,0.04)',
                  border: '1px dashed rgba(139,115,85,0.22)',
                }}
              >
                <span style={{ fontSize: '0.9rem' }}>{icon}</span>
                <span style={{
                  fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                  fontSize: '0.95rem',
                  fontWeight: 400,
                  color: '#6B6560',
                  lineHeight: 1.2,
                }}>
                  {city}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
