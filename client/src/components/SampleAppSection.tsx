import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// 5张独立手机图片 CDN URL（已套壳 iPhone 15 Pro 金色模型）
const PHONE_IMAGES = [
  'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/FOYxUxwSGEBZuwXe.png', // 01 定位双机 990x1800 v5内容97%对齐
  'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/xdFiDvOhmZhcYSbm.png', // 02 订单详情 990x1800 内容裁剪对齐
  'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/kfOzyokoOrJCxYDT.png', // 03 汇报周期 990x1800 内容裁剪对齐
  'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/xeakRshXXIrZrRVo.png', // 04 在线定制 990x1800 内容裁剪对齐
  'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/KjvAjhztUnEvcygp.png', // 05 个人工作台 990x1800 内容裁剪对齐
];

const SLIDE_KEYS = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];

export default function SampleAppSection() {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = (idx: number) => {
    if (isAnimating || idx === activeSlide) return;
    setIsAnimating(true);
    setActiveSlide(idx);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % SLIDE_KEYS.length);
    }, 4000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const resetAutoPlay = (idx: number) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    goToSlide(idx);
    autoPlayRef.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % SLIDE_KEYS.length);
    }, 4000);
  };

  const sk = SLIDE_KEYS[activeSlide];

  return (
    <section
      id="sampleapp"
      style={{
        background: 'linear-gradient(160deg, #EAE6DF 0%, #DDD8D0 50%, #E8E4DC 100%)',
        padding: 'clamp(2.5rem, 5vw, 4rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 背景装饰 */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(139,115,85,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 5rem)' }}>

        {/* ── 顶部标题区（紧凑） ── */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(0.6rem, 0.9vw, 0.7rem)',
            letterSpacing: '0.25em',
            color: '#b8956a',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            {t('sampleapp.label')}
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.2,
            marginBottom: '0.5rem',
            letterSpacing: '0.02em',
          }}>
            {t('sampleapp.title')}
          </h2>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)',
            color: '#b8956a',
            letterSpacing: '0.15em',
            fontStyle: 'italic',
            marginBottom: '0.5rem',
          }}>
            {t('sampleapp.slogan')}
          </p>
          <p style={{
            fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
            color: 'rgba(30,25,20,0.4)',
            letterSpacing: '0.05em',
          }}>
            ★ {t('sampleapp.availability')}
          </p>
        </div>

        {/* ── 三大核心优势图标（紧凑横排） ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(184,149,106,0.15)',
          border: '1px solid rgba(184,149,106,0.15)',
          marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
        }}>
          {[1, 2, 3].map(n => (
            <div key={n} style={{
              background: 'rgba(255,255,255,0.55)',
              padding: 'clamp(1rem, 2vw, 1.5rem) clamp(0.75rem, 1.5vw, 1.5rem)',
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                color: '#b8956a',
                marginBottom: '0.4rem',
                fontFamily: 'serif',
              }}>
                {t(`sampleapp.feature${n}.icon`)}
              </div>
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
                fontWeight: 500,
                color: '#1A1A1A',
                marginBottom: '0.3rem',
                letterSpacing: '0.05em',
              }}>
                {t(`sampleapp.feature${n}.title`)}
              </h4>
              <p style={{
                fontSize: 'clamp(0.62rem, 0.9vw, 0.72rem)',
                color: 'rgba(30,25,20,0.55)',
                lineHeight: 1.5,
                letterSpacing: '0.03em',
              }}>
                {t(`sampleapp.feature${n}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* ── 主体：左侧导航 + 中间手机图 + 右侧文字 ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1.5fr',
          gap: 'clamp(1.5rem, 3vw, 3rem)',
          alignItems: 'center',
          marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
        }}>

          {/* 左侧：幻灯片导航 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {SLIDE_KEYS.map((sk_key, idx) => (
              <button
                key={idx}
                onClick={() => resetAutoPlay(idx)}
                style={{
                  background: activeSlide === idx ? 'rgba(184,149,106,0.12)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 'clamp(0.6rem, 1.2vw, 0.85rem) clamp(0.75rem, 1.5vw, 1.25rem)',
                  textAlign: 'left',
                  position: 'relative',
                  borderLeft: activeSlide === idx
                    ? '2px solid #b8956a'
                    : '2px solid rgba(184,149,106,0.2)',
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{
                  display: 'block',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(0.5rem, 0.75vw, 0.6rem)',
                  letterSpacing: '0.2em',
                  color: activeSlide === idx ? '#b8956a' : 'rgba(184,149,106,0.4)',
                  marginBottom: '0.15rem',
                  textTransform: 'uppercase',
                }}>
                  0{idx + 1}
                </span>
                <span style={{
                  display: 'block',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(0.75rem, 1.1vw, 0.95rem)',
                  color: activeSlide === idx ? '#1A1A1A' : 'rgba(30,25,20,0.4)',
                  fontWeight: activeSlide === idx ? 500 : 400,
                  transition: 'color 0.3s ease',
                  letterSpacing: '0.03em',
                }}>
                  {t(`sampleapp.${sk_key}.title`)}
                </span>
              </button>
            ))}
          </div>

          {/* 中间：手机图片（每张独立，切换时淡入淡出） */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            minHeight: 'clamp(320px, 50vw, 520px)',
          }}>
            {PHONE_IMAGES.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Sample App Screen ${idx + 1}`}
                style={{
                  position: 'absolute',
                  maxHeight: 'clamp(300px, 48vw, 500px)',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  opacity: activeSlide === idx ? 1 : 0,
                  transform: activeSlide === idx ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.15))',
                }}
              />
            ))}
          </div>

          {/* 右侧：当前幻灯片文字 */}
          <div style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? 'translateX(10px)' : 'translateX(0)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(0.55rem, 0.85vw, 0.65rem)',
              letterSpacing: '0.25em',
              color: '#b8956a',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>
              0{activeSlide + 1} / 05
            </p>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.25,
              marginBottom: '0.4rem',
              letterSpacing: '0.02em',
            }}>
              {t(`sampleapp.${sk}.title`)}
            </h3>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)',
              color: '#b8956a',
              fontStyle: 'italic',
              marginBottom: '0.75rem',
              letterSpacing: '0.05em',
            }}>
              {t(`sampleapp.${sk}.subtitle`)}
            </p>
            <div style={{
              width: '2rem',
              height: '1px',
              background: 'rgba(184,149,106,0.4)',
              marginBottom: '0.75rem',
            }} />
            <p style={{
              fontSize: 'clamp(0.7rem, 1vw, 0.8rem)',
              color: 'rgba(30,25,20,0.65)',
              lineHeight: 1.75,
              letterSpacing: '0.03em',
              marginBottom: '1rem',
            }}>
              {t(`sampleapp.${sk}.desc`)}
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {[1, 2].map(n => (
                <span key={n} style={{
                  padding: '0.25rem 0.6rem',
                  border: '1px solid rgba(184,149,106,0.3)',
                  fontSize: 'clamp(0.58rem, 0.8vw, 0.68rem)',
                  color: 'rgba(184,149,106,0.7)',
                  letterSpacing: '0.1em',
                }}>
                  {t(`sampleapp.${sk}.tag${n}`)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── 进度条 ── */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'center',
          marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
        }}>
          {SLIDE_KEYS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => resetAutoPlay(idx)}
              style={{
                width: activeSlide === idx ? '2.5rem' : '0.5rem',
                height: '2px',
                background: activeSlide === idx ? '#b8956a' : 'rgba(184,149,106,0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* ── AI 愿景板块（紧凑三列并列） ── */}
        <div style={{
          border: '1px solid rgba(184,149,106,0.2)',
          padding: 'clamp(1.25rem, 2.5vw, 2rem)',
          background: 'rgba(255,255,255,0.35)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* 标题行 */}
          <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)', textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(0.55rem, 0.85vw, 0.65rem)',
              letterSpacing: '0.3em',
              color: '#b8956a',
              textTransform: 'uppercase',
              marginBottom: '0.4rem',
            }}>
              {t('sampleapp.ai.label')}
            </p>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.2rem, 2vw, 1.7rem)',
              fontWeight: 400,
              color: '#1A1A1A',
              lineHeight: 1.25,
              letterSpacing: '0.02em',
            }}>
              {t('sampleapp.ai.title')}
            </h3>
          </div>

          {/* 三列并列 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(0.75rem, 1.5vw, 1.5rem)',
          }}>
            {[1, 2, 3].map(n => (
              <div key={n} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: 'clamp(0.75rem, 1.5vw, 1.25rem)',
                background: 'rgba(255,255,255,0.4)',
                border: '1px solid rgba(184,149,106,0.12)',
              }}>
                <span style={{
                  flexShrink: 0,
                  width: '1.5rem',
                  height: '1.5rem',
                  border: '1px solid rgba(184,149,106,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.6rem',
                  color: '#b8956a',
                  fontFamily: "'Cormorant Garamond', serif",
                }}>
                  {String.fromCharCode(8544 + n - 1)}
                </span>
                <p style={{
                  fontSize: 'clamp(0.68rem, 1vw, 0.78rem)',
                  color: 'rgba(30,25,20,0.65)',
                  lineHeight: 1.7,
                  letterSpacing: '0.03em',
                }}>
                  {t(`sampleapp.ai.point${n}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
