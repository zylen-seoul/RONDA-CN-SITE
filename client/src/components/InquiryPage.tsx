/**
 * InquiryPage — Standalone full-page inquiry form
 * Triggered by "Contact Us" buttons in Hero and Footer.
 * Submits to /api/send-inquiry → bound to guangmdc0901@gmail.com
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface InquiryPageProps {
  onClose: () => void;
}

const SAMPLE_TYPES = [
  '羽绒服 / Down Jacket',
  '滑雪服 / Ski Jacket',
  '冲锋衣 / Shell Jacket',
  '羽绒裤 / Down Pants',
  '羊绒大衣 / Cashmere Coat',
  '皮草 / Fur Coat',
  '皮毛一体 / Shearling',
  '皮衣 / Leather Jacket',
  '羽绒被 / Down Duvet',
  '羽绒枕头 / Down Pillow',
];

export default function InquiryPage({ onClose }: InquiryPageProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    sampleType: '',
    hasSample: '',
    expectedQty: '',
    color: '',
    size: '',
    region: '',
    brand: '',
    contact: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, to: 'guangmdc0901@gmail.com' }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(t('inquiry.error') || '提交失败，请稍后重试。');
      }
    } catch {
      setError(t('inquiry.error') || '网络错误，请稍后重试。');
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
    fontSize: '0.85rem',
    color: '#1A1A1A',
    background: '#FAFAF8',
    border: '1px solid rgba(139,115,85,0.2)',
    borderRadius: 0,
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.62rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#8B7355',
    display: 'block',
    marginBottom: '0.4rem',
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F7F5F2', display: 'flex', flexDirection: 'column' }}>
      {/* ── Top bar ── */}
      <div style={{
        borderBottom: '1px solid rgba(139,115,85,0.12)',
        padding: '1.2rem clamp(1.5rem, 5vw, 5rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#F7F5F2',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ display: 'block', width: '2rem', height: '1px', background: '#8B7355' }} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#8B7355',
          }}>
            {t('inquiry.title') || 'INQUIRY'}
          </span>
        </div>
        <button
          onClick={onClose}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#6B6560',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          ← {t('inquiry.back') || '返回'}
        </button>
      </div>

      {/* ── Main content ── */}
      <div style={{
        flex: 1,
        maxWidth: '760px',
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem)',
      }}>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', paddingTop: '4rem' }}
          >
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#1A1A1A',
              marginBottom: '1rem',
            }}>
              {t('inquiry.success.title') || '感谢您的咨询'}
            </div>
            <p style={{
              fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
              fontSize: '0.9rem',
              color: '#6B7280',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}>
              {t('inquiry.success.desc') || '我们已收到您的需求，将在 1-2 个工作日内与您联系。'}
            </p>
            <button
              onClick={onClose}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#F7F5F2',
                background: '#1A1A1A',
                border: 'none',
                padding: '1rem 2.5rem',
                cursor: 'pointer',
              }}
            >
              {t('inquiry.back') || '返回首页'}
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Page title */}
            <div style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 300,
                color: '#1A1A1A',
                lineHeight: 1.15,
                margin: '0 0 1rem',
              }}>
                {t('inquiry.heading') || '样品 & 订单咨询'}
              </h1>
              <p style={{
                fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                fontSize: '0.85rem',
                color: '#6B7280',
                lineHeight: 1.8,
                margin: 0,
              }}>
                {t('inquiry.subheading') || '请填写以下信息，我们将在 1-2 个工作日内与您联系。'}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem 2rem' }}>

                {/* Sample Type */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>{t('inquiry.sampleType') || '样衣类型'} *</label>
                  <select
                    required
                    value={formData.sampleType}
                    onChange={e => handleChange('sampleType', e.target.value)}
                    style={{ ...inputStyle, appearance: 'none' as const }}
                  >
                    <option value="">{t('inquiry.select') || '请选择'}</option>
                    {SAMPLE_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Has Sample */}
                <div>
                  <label style={labelStyle}>{t('inquiry.hasSample') || '是否有样品'}</label>
                  <select
                    value={formData.hasSample}
                    onChange={e => handleChange('hasSample', e.target.value)}
                    style={{ ...inputStyle, appearance: 'none' as const }}
                  >
                    <option value="">{t('inquiry.select') || '请选择'}</option>
                    <option value="yes">{t('inquiry.yes') || '有'}</option>
                    <option value="no">{t('inquiry.no') || '无'}</option>
                  </select>
                </div>

                {/* Expected Qty */}
                <div>
                  <label style={labelStyle}>{t('inquiry.expectedQty') || '预期订单数量'}</label>
                  <input
                    type="text"
                    value={formData.expectedQty}
                    onChange={e => handleChange('expectedQty', e.target.value)}
                    placeholder={t('inquiry.qtyPlaceholder') || '例：100件'}
                    style={inputStyle}
                  />
                </div>

                {/* Color */}
                <div>
                  <label style={labelStyle}>{t('inquiry.color') || '颜色'}</label>
                  <input
                    type="text"
                    value={formData.color}
                    onChange={e => handleChange('color', e.target.value)}
                    placeholder={t('inquiry.colorPlaceholder') || '例：米白、黑色'}
                    style={inputStyle}
                  />
                </div>

                {/* Size */}
                <div>
                  <label style={labelStyle}>{t('inquiry.size') || '尺码'}</label>
                  <input
                    type="text"
                    value={formData.size}
                    onChange={e => handleChange('size', e.target.value)}
                    placeholder={t('inquiry.sizePlaceholder') || '例：S / M / L / XL'}
                    style={inputStyle}
                  />
                </div>

                {/* Region */}
                <div>
                  <label style={labelStyle}>{t('inquiry.region') || '来自地区'}</label>
                  <input
                    type="text"
                    value={formData.region}
                    onChange={e => handleChange('region', e.target.value)}
                    placeholder={t('inquiry.regionPlaceholder') || '例：中国、韩国、欧洲'}
                    style={inputStyle}
                  />
                </div>

                {/* Brand */}
                <div>
                  <label style={labelStyle}>{t('inquiry.brand') || '品牌名称'}</label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={e => handleChange('brand', e.target.value)}
                    placeholder={t('inquiry.brandPlaceholder') || '您的品牌名称'}
                    style={inputStyle}
                  />
                </div>

                {/* Contact */}
                <div>
                  <label style={labelStyle}>{t('inquiry.contact') || '联系方式'} *</label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={e => handleChange('contact', e.target.value)}
                    placeholder={t('inquiry.contactPlaceholder') || '手机 / 邮箱 / WhatsApp'}
                    style={inputStyle}
                  />
                </div>

                {/* Message */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>{t('inquiry.message') || '补充说明'}</label>
                  <textarea
                    value={formData.message}
                    onChange={e => handleChange('message', e.target.value)}
                    placeholder={t('inquiry.messagePlaceholder') || '请描述您的具体需求、面料偏好或其他特殊要求…'}
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical' as const }}
                  />
                </div>
              </div>

              {error && (
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.8rem',
                  color: '#C0392B',
                  margin: '1rem 0 0',
                }}>
                  {error}
                </p>
              )}

              {/* Submit */}
              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#F7F5F2',
                    background: submitting ? '#8B7355' : '#1A1A1A',
                    border: 'none',
                    padding: '1rem 2.5rem',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    transition: 'background 0.3s',
                  }}
                >
                  {submitting
                    ? (t('inquiry.sending') || '发送中…')
                    : (t('inquiry.submit') || '发送咨询')}
                </button>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  color: 'rgba(139,115,85,0.6)',
                }}>
                  → guangmdc0901@gmail.com
                </span>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
}
