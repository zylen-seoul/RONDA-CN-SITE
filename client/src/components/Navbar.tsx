/**
 * Navbar — Chalk & Slate Design System
 * Light chalk white background, camel accent
 * Cormorant Garamond logo, DM Sans nav items
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const NAV_ITEMS = [
  { key: 'nav.home', href: '#hero' },
  { key: 'nav.products', href: '#products' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.global', href: '#global' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.contact', href: '#contact' },
];

const LANGS: { code: Language; label: string; full: string }[] = [
  { code: 'zh', label: '中', full: '中文' },
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'ko', label: '한', full: '한국어' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(247,245,242,0.97)' : 'rgba(247,245,242,0.90)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid #E2DDD8' : '1px solid transparent',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
              className="flex flex-col leading-none group"
              style={{ textDecoration: 'none' }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                  fontWeight: 400,
                  fontSize: '1.25rem',
                  letterSpacing: '0.05em',
                  color: '#1A1A1A',
                  transition: 'color 0.3s',
                }}
              >
                Sample <span style={{ color: '#8B7355' }}>&amp;</span> Simple
              </span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase' as const,
                color: '#8B7355',
                marginTop: '2px',
              }}>
                Hangzhou · Seoul
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_ITEMS.map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNav(href); }}
                  className="relative group"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase' as const,
                    color: '#4A4A4A',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1A1A1A')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#4A4A4A')}
                >
                  {t(key)}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#8B7355] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Right: language + CTA */}
            <div className="flex items-center gap-4 md:gap-5">
              {/* Language switcher */}
              <div className="flex items-center gap-0.5">
                {LANGS.map(({ code, label }, i) => (
                  <span key={code} className="flex items-center">
                    <button
                      onClick={() => setLang(code)}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase' as const,
                        padding: '4px 6px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'color 0.2s',
                        color: lang === code ? '#8B7355' : '#6B7280',
                        fontWeight: lang === code ? 600 : 400,
                      }}
                    >
                      {label}
                    </button>
                    {i < 2 && <span style={{ color: '#C4B8A8', fontSize: '0.7rem' }}>/</span>}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                className="hidden md:inline-flex items-center gap-2"
                style={{
                  backgroundColor: '#1C1F24',
                  color: '#F7F5F2',
                  fontSize: '0.65rem',
                  padding: '0.6rem 1.25rem',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s',
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.75'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
              >
                {t('nav.contact')}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden flex flex-col gap-1.5 p-1"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                <motion.span
                  className="block h-px"
                  style={{ width: '22px', backgroundColor: '#1A1A1A' }}
                  animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-px"
                  style={{ width: '14px', backgroundColor: '#1A1A1A' }}
                  animate={mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-px"
                  style={{ width: '22px', backgroundColor: '#1A1A1A' }}
                  animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center"
            style={{ background: 'rgba(247,245,242,0.98)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav className="container flex flex-col gap-5 py-20">
              {NAV_ITEMS.map(({ key, href }, i) => (
                <motion.a
                  key={key}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNav(href); }}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '2.5rem',
                    fontWeight: 300,
                    color: '#1A1A1A',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#8B7355')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  {t(key)}
                </motion.a>
              ))}
              <motion.div
                className="flex gap-5 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {LANGS.map(({ code, full }) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.8rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase' as const,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: lang === code ? '#8B7355' : '#6B7280',
                      fontWeight: lang === code ? 500 : 400,
                    }}
                  >
                    {full}
                  </button>
                ))}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
