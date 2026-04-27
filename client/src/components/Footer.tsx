/**
 * Footer — Light Design System v3
 * Clean, compact footer: Brand + Navigation + Legal + CTA Button
 * Light background, no dark overlays
 */
import { useLanguage } from '@/contexts/LanguageContext';

interface FooterProps {
  onInquiryOpen?: () => void;
  onPrivacyOpen?: () => void;
  onTermsOpen?: () => void;
}

export default function Footer({ onInquiryOpen, onPrivacyOpen, onTermsOpen }: FooterProps) {
  const { t } = useLanguage();

  const navLinks = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.products', href: '#products' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.global', href: '#global' },
    { key: 'nav.about', href: '#about' },
  ];

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#EDEAE5',
      borderTop: '1px solid rgba(139,115,85,0.2)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 5rem)',
      }}>
        {/* Main row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2.5rem',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '2rem',
        }}>
          {/* Brand */}
          <div style={{ minWidth: '200px', flex: '1 1 200px', maxWidth: '320px' }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase' as const,
              color: '#8B7355',
              display: 'block',
              marginBottom: '0.4rem',
            }}>
              RONDA · ATLY
            </span>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.4rem',
              fontWeight: 300,
              color: '#1A1A1A',
              letterSpacing: '0.05em',
              display: 'block',
              marginBottom: '0.8rem',
            }}>
              Sample &amp; Simple
            </span>
            <p style={{
              fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
              fontSize: '0.72rem',
              lineHeight: 1.7,
              color: '#6B6560',
              margin: '0 0 1.5rem',
            }}>
              {t('footer.tagline')}
            </p>
            {/* CTA Button */}
            <button
              onClick={() => onInquiryOpen?.()}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.62rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase' as const,
                color: '#F7F5F2',
                background: '#1A1A1A',
                border: 'none',
                padding: '0.75rem 1.8rem',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#8B7355')}
              onMouseLeave={e => (e.currentTarget.style.background = '#1A1A1A')}
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Navigation */}
          <div style={{ minWidth: '120px' }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.55rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase' as const,
              color: '#8B7355',
              display: 'block',
              marginBottom: '1rem',
            }}>
              {t('footer.nav.label')}
            </span>
            <ul style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.55rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}>
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleClick(href); }}
                    style={{
                      fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                      fontSize: '0.75rem',
                      color: '#6B6560',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#8B7355')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6B6560')}
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company info */}
          <div style={{ minWidth: '160px' }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.55rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase' as const,
              color: '#8B7355',
              display: 'block',
              marginBottom: '1rem',
            }}>
              {t('footer.company.label')}
            </span>
            <p style={{
              fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
              fontSize: '0.72rem',
              color: '#6B6560',
              lineHeight: 1.8,
              margin: 0,
            }}>
              {t('footer.company.name')}<br />
              {t('footer.icp')}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(139,115,85,0.15)',
          paddingTop: '1.2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.65rem',
            color: '#9A9590',
          }}>
            {t('footer.rights')}
          </span>
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            <button
              onClick={() => onPrivacyOpen?.()}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.65rem',
                color: '#9A9590',
                textDecoration: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#8B7355')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9A9590')}
            >
              {t('footer.privacy')}
            </button>
            <span style={{ color: 'rgba(139,115,85,0.3)', fontSize: '0.65rem' }}>|</span>
            <button
              onClick={() => onTermsOpen?.()}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.65rem',
                color: '#9A9590',
                textDecoration: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#8B7355')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9A9590')}
            >
              {t('footer.terms')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
