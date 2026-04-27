/**
 * ProductsSection — International Standard v4
 * Design philosophy: Sticky left panel + scrolling right images
 * - Left panel: sticky text that updates as user scrolls through products
 * - Right panel: full-height product images that scroll vertically
 * - Mobile: stacked MobileCard components (hooks-safe)
 * Inspired by Loro Piana / Hermès product storytelling
 */
import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const PRODUCTS = [
  {
    key: 'products.down',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663578556874/PykNo9z94x68gsxLjEHmf5/product_down_jacket_v2-C28aTj77bjh3DrRgssWnET.webp',
    number: '01',
    accent: '#8B7355',
  },
  {
    key: 'products.coat',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663578556874/PykNo9z94x68gsxLjEHmf5/product_wool_coat_v2-ZC6afyE7amnvS2ibnyeWZq.webp',
    number: '02',
    accent: '#6B7280',
  },
  {
    key: 'products.fur',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663578556874/PykNo9z94x68gsxLjEHmf5/product_shearling_v2-koikyMmjkFu3RzUrFdNVLk.webp',
    number: '03',
    accent: '#8B7355',
  },
  {
    key: 'products.duvet',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663578556874/PykNo9z94x68gsxLjEHmf5/product_duvet_v2-i9Eti2XbCk4wTyrnkfri8A.webp',
    number: '04',
    accent: '#8B7355',
  },
];

// Mobile card — separate component so hooks are called at top level
function MobileCard({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        position: 'relative',
        minHeight: '85vw',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(139,115,85,0.1)',
      }}
    >
      <img
        src={product.image}
        alt={t(product.key + '.title')}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.85) saturate(0.9)',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '3rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          minHeight: '85vw',
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '5rem',
            fontWeight: 300,
            lineHeight: 0.85,
            color: 'rgba(139,115,85,0.12)',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          {product.number}
        </span>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
            fontSize: '1.8rem',
            fontWeight: 300,
            color: '#F7F5F2',
            margin: '0 0 0.5rem',
            lineHeight: 1.2,
          }}
        >
          {t(product.key + '.title')}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
            fontSize: '0.75rem',
            color: 'rgba(247,245,242,0.8)',
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {t(product.key + '.desc')}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const panels = container.querySelectorAll<HTMLDivElement>('[data-panel]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.panel);
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.5 }
    );
    panels.forEach((p) => observer.observe(p));
    return () => observer.disconnect();
  }, []);

  const active = PRODUCTS[activeIndex];

  return (
    <section id="products" style={{ background: '#F7F5F2' }}>
      {/* ── Section header ── */}
      <div
        ref={headerRef}
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 5rem) clamp(3rem, 5vw, 5rem)',
        }}
      >
        {/* Label row */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={headerInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}
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
            {t('products.label')}
          </span>
        </motion.div>

        {/* Title — single line, no wrap */}
        <div style={{ overflow: 'hidden', marginBottom: '2.5rem' }}>
          <motion.h2
            initial={{ y: '100%' }}
            animate={headerInView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
              fontSize: 'clamp(1.8rem, 3.8vw, 3.8rem)',
              fontWeight: 300,
              color: '#1A1A1A',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
              margin: 0,
            }}
          >
            {t('products.title')}
          </motion.h2>
        </div>

        {/* Subtitle + category pills row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '2rem',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
              fontSize: '0.85rem',
              color: '#6B7280',
              lineHeight: 1.85,
              margin: 0,
              maxWidth: '480px',
            }}
          >
            {t('products.subtitle')}
          </motion.p>

          {/* Four category preview cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              background: 'rgba(139,115,85,0.15)',
              border: '1px solid rgba(139,115,85,0.15)',
            }}
          >
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 12 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.08 }}
                style={{
                  background: '#F7F5F2',
                  padding: '1.25rem 1.2rem',
                  display: 'flex',
                  flexDirection: 'column' as const,
                  gap: '0.5rem',
                  cursor: 'default',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.7rem',
                    fontWeight: 400,
                    letterSpacing: '0.18em',
                    color: '#8B7355',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                    fontSize: 'clamp(0.78rem, 1.1vw, 1rem)',
                    fontWeight: 400,
                    color: '#1A1A1A',
                    lineHeight: 1.3,
                    letterSpacing: '0.01em',
                  }}
                >
                  {t(p.key + '.title')}
                </span>
                <span
                  style={{
                    display: 'block',
                    width: '1.5rem',
                    height: '1px',
                    background: 'rgba(139,115,85,0.4)',
                    marginTop: '0.25rem',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop: Sticky left + scrolling right ── */}
      <div className="hidden lg:flex" style={{ position: 'relative' }}>
        {/* Sticky left panel */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '50%',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 clamp(1rem, 2vw, 2rem) 0 clamp(3rem, 7vw, 7rem)',
            background: '#F7F5F2',
            zIndex: 10,
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Big ghost number */}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(7rem, 14vw, 13rem)',
                  fontWeight: 300,
                  lineHeight: 0.85,
                  color: 'rgba(139,115,85,0.06)',
                  display: 'block',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.03em',
                }}
              >
                {active.number}
              </span>

              {/* Product title */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                  fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
                  fontWeight: 300,
                  color: '#1A1A1A',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                  margin: '0 0 1.25rem',
                }}
              >
                {t(active.key + '.title')}
              </h3>

              {/* Gold accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  width: '3rem',
                  height: '1px',
                  background: active.accent,
                  transformOrigin: 'left',
                  marginBottom: '1.25rem',
                }}
              />
              {/* Keyword tag */}
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                color: active.accent,
                marginBottom: '1.5rem',
                textTransform: 'uppercase' as const,
              }}>
                {t(active.key + '.keyword')}
              </div>
              {/* Three detail points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {(['point1', 'point2', 'point3'] as const).map((pt) => (
                  <div key={pt} style={{ borderLeft: `2px solid ${active.accent}40`, paddingLeft: '0.75rem' }}>
                    <div style={{
                      fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#1A1A1A',
                      marginBottom: '0.25rem',
                      letterSpacing: '0.05em',
                    }}>
                      {t(active.key + '.' + pt + '.title')}
                    </div>
                    <div style={{
                      fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                      fontSize: '0.88rem',
                      color: '#6B7280',
                      lineHeight: 1.7,
                    }}>
                      {t(active.key + '.' + pt + '.desc')}
                    </div>
                  </div>
                ))}
              </div>
              {/* Tags */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {[active.key + '.tag1', active.key + '.tag2'].map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.58rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase' as const,
                      color: active.accent,
                      border: `1px solid ${active.accent}40`,
                      padding: '4px 12px',
                    }}
                  >
                    {t(tag)}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Progress indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '3rem',
              left: 'clamp(2rem, 4vw, 5rem)',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
            }}
          >
            {PRODUCTS.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === activeIndex ? '2rem' : '0.4rem',
                  height: '1px',
                  background: i === activeIndex ? '#8B7355' : 'rgba(139,115,85,0.2)',
                  transition: 'width 0.4s ease, background 0.4s ease',
                }}
              />
            ))}
          </div>
        </div>
        {/* Scrolling right panel */}
        <div ref={scrollRef} style={{ flex: 1, minWidth: 0, padding: '2.5rem 2.5rem 2.5rem 0', background: '#F7F5F2' }}>
          {PRODUCTS.map((product, i) => (
            <div
              key={product.key}
              data-panel={i}
              style={{
                height: '85vh',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4px',
                marginBottom: '2.5rem',
              }}
            >
              <img
                src={product.image}
                alt={t(product.key + '.title')}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(0.82) saturate(0.9)',
                  transition: 'filter 0.6s ease',
                }}
              />
              {/* Left gradient blending with sticky panel */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, rgba(247,245,242,0.6) 0%, transparent 35%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Bottom gradient */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '25%',
                  background: 'linear-gradient(to top, rgba(247,245,242,0.3) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Divider */}
              {i < PRODUCTS.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'rgba(139,115,85,0.1)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* ── Mobile: vertical stacked cards ── */}
      <div className="lg:hidden">
        {PRODUCTS.map((product, i) => (
          <MobileCard key={product.key} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
