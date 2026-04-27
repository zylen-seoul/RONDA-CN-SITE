/**
 * ContactSection — Simplified Contact Info + Inquiry Button
 * Hangzhou & Seoul info displayed
 * Social media + IM icons in one row
 * Inquiry button triggers modal
 */
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import InquiryModal from './InquiryModal';

const QR = {
  wechatWork: '/manus-storage/wechat_work_qr_fbd3eec0.png',
  douyin: '/manus-storage/douyin_qr_d648ee6c.png',
  whatsapp: '/manus-storage/whatsapp_qr_4c97cab8.png',
  kakao: '/manus-storage/kakao_pure_qr_00e88e26.png',
};

const SOCIAL_ITEMS = [
  {
    name: 'Instagram',
    handle: '@samplewear_official',
    href: 'https://www.instagram.com/samplewear_official',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: '小红书',
    handle: 'samplewear',
    href: 'https://www.xiaohongshu.com/user/profile/49653701006',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 1 1 0 16A8 8 0 0 1 12 4zm-1 3v2H9v2h2v6h2v-6h2V9h-2V7h-2z"/>
      </svg>
    ),
  },
  {
    name: '抖音',
    handle: 'Sample服装供应链',
    href: '#',
    qr: QR.douyin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@samplewear',
    href: 'https://www.tiktok.com/@samplewear',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
      </svg>
    ),
  },
];

const IM_ITEMS = [
  {
    name: 'WhatsApp',
    qr: QR.whatsapp,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: 'KakaoTalk',
    qr: QR.kakao,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.73 1.67 5.12 4.2 6.6L5.1 21l4.5-2.7c.77.1 1.57.16 2.4.16 5.523 0 10-3.477 10-7.66C22 6.477 17.523 3 12 3z"/>
      </svg>
    ),
  },
  {
    name: '企业微信',
    qr: QR.wechatWork,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M9.5 2C5.91 2 3 4.91 3 8.5c0 2.11 1.03 3.98 2.62 5.15L5 16l2.5-1.25c.64.17 1.31.25 2 .25C13.09 15 16 12.09 16 8.5S13.09 2 9.5 2zm0 2c2.49 0 4.5 2.01 4.5 4.5S11.99 13 9.5 13c-.57 0-1.12-.1-1.63-.28L6.5 13.5l.5-1.5C5.76 11.1 5 9.88 5 8.5 5 6.01 7.01 4 9.5 4zm9 5c-1.1 0-2.1.3-2.97.82.62.97.97 2.12.97 3.35 0 1.17-.33 2.26-.9 3.19.28-.03.57-.05.86-.05 1.06 0 2.07.24 2.96.67L21 18l-.5-2.5C21.42 14.56 22 13.35 22 12c0-1.66-.67-3.16-1.76-4.24C19.5 9.26 18.77 9 18 9z"/>
      </svg>
    ),
  },
];

function QRModal({ name, qr, onClose }: { name: string; qr: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: 'rgba(10,10,10,0.88)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 22, stiffness: 300 }}
        style={{ background: '#E8E3DC', border: '1px solid rgba(139,115,85,0.3)', padding: '2.5rem', maxWidth: '260px', width: '90%', textAlign: 'center', position: 'relative' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#8B7355')}
          onMouseLeave={e => (e.currentTarget.style.color = '#8A8680')}
        >
          <X size={16} />
        </button>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', display: 'block', marginBottom: '1.5rem' }}>
          {name}
        </span>
        <img src={qr} alt={`${name} QR`} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </motion.div>
    </motion.div>
  );
}

export default function ContactSection({ onInquiryOpen }: { onInquiryOpen?: () => void }) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeQR, setActiveQR] = useState<{ name: string; qr: string } | null>(null);
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <section id="contact" style={{ background: '#F7F5F2' }} className="py-10 md:py-16">
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
        >
          <div>
            <span style={{ display: 'block', width: '2.5rem', height: '1px', background: '#8B7355', marginBottom: '1.5rem' }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355', display: 'block', marginBottom: '0.75rem' }}>
              {t('contact.label')}
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                color: '#1A1A1A',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              {t('contact.title')}
            </h2>
          </div>
          <p style={{ fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif", fontSize: '0.8rem', color: '#6B7280', maxWidth: '280px', lineHeight: 1.7 }}>
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Hangzhou & Seoul Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Hangzhou */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355' }}>
                CHINA · HQ
              </span>
              <span style={{ flex: 1, height: '1px', background: 'rgba(139,115,85,0.2)' }} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif", fontSize: '1.6rem', fontWeight: 300, color: '#1A1A1A', marginBottom: '1.5rem' }}>
              {t('contact.hangzhou')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { icon: '↗', text: t('contact.hz.phone') },
                { icon: '✉', text: t('contact.hz.email'), isEmail: true },
                { icon: '◎', text: t('contact.hz.address') },
                { icon: '◷', text: t('contact.hz.time') },
              ].map(({ icon, text, isEmail }, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#8B7355', fontSize: '0.75rem', marginTop: '2px', flexShrink: 0 }}>{icon}</span>
                  {isEmail ? (
                    <a href={`mailto:${text}`} style={{ fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif", fontSize: '0.82rem', color: '#1A1A1A', lineHeight: 1.5, textDecoration: 'none', transition: 'color 0.3s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#8B7355')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
                    >{text}</a>
                  ) : (
                    <span style={{ fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif", fontSize: '0.82rem', color: '#1A1A1A', lineHeight: 1.5 }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Seoul */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B7355' }}>
                KOREA · BRANCH
              </span>
              <span style={{ flex: 1, height: '1px', background: 'rgba(139,115,85,0.2)' }} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif", fontSize: '1.6rem', fontWeight: 300, color: '#1A1A1A', marginBottom: '1.5rem' }}>
              {t('contact.seoul')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { icon: '↗', text: t('contact.kr.phone') },
                { icon: '✉', text: t('contact.kr.email1'), isEmail: true },
                { icon: '✉', text: t('contact.kr.email2'), isEmail: true },
                { icon: '◎', text: t('contact.kr.address') },
                { icon: '◷', text: t('contact.kr.time') },
              ].map(({ icon, text, isEmail }, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#8B7355', fontSize: '0.75rem', marginTop: '2px', flexShrink: 0 }}>{icon}</span>
                  {isEmail ? (
                    <a href={`mailto:${text}`} style={{ fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif", fontSize: '0.82rem', color: '#1A1A1A', lineHeight: 1.5, textDecoration: 'none', transition: 'color 0.3s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#8B7355')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
                    >{text}</a>
                  ) : (
                    <span style={{ fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif", fontSize: '0.82rem', color: '#1A1A1A', lineHeight: 1.5 }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Media + IM in one row */}
        <div className="mb-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {/* Social Media */}
            <div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B7355', display: 'block', marginBottom: '1rem' }}>
                社交媒体 / Social Media
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                {SOCIAL_ITEMS.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#1A1A1A', cursor: 'pointer', transition: 'color 0.3s' }}
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#8B7355')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
                    title={item.name}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Instant Messaging */}
            <div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B7355', display: 'block', marginBottom: '1rem' }}>
                即时通讯 / Messaging
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                {IM_ITEMS.map((item, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setActiveQR({ name: item.name, qr: item.qr })}
                    style={{ background: 'none', border: 'none', color: '#1A1A1A', cursor: 'pointer', padding: 0, transition: 'color 0.3s' }}
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#8B7355')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
                    title={item.name}
                  >
                    {item.icon}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ textAlign: 'center' }}
        >
          <motion.button
            onClick={() => onInquiryOpen?.()}
            whileHover={{ scale: 1.05 }}
            style={{
              padding: '1.2rem 2.5rem',
              background: '#8B7355',
              color: '#F7F5F2',
              border: 'none',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {t('contact.label')}
          </motion.button>
        </motion.div>
      </div>

      {/* QR Modal */}
      <AnimatePresence>
        {activeQR && (
          <QRModal
            name={activeQR.name}
            qr={activeQR.qr}
            onClose={() => setActiveQR(null)}
          />
        )}
      </AnimatePresence>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showInquiry && (
          <InquiryModal onClose={() => setShowInquiry(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
