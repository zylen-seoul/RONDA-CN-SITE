/**
 * InquiryModal — Product Inquiry Form
 * Standalone modal with detailed fields
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
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
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send to email via API
    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          to: 'guangmdc0901@gmail.com',
        }),
      });
      
      if (response.ok) {
        alert(t('contact.form.sent'));
        setFormData({
          sampleType: '',
          hasSample: '',
          expectedQty: '',
          color: '',
          size: '',
          region: '',
          brand: '',
          contact: '',
        });
        onClose();
      }
    } catch (error) {
      console.error('Error sending inquiry:', error);
    }
  };

  const sampleTypes = [
    { value: 'down', label: t('inquiry.sampleType.down') },
    { value: 'ski', label: t('inquiry.sampleType.ski') },
    { value: 'jacket', label: t('inquiry.sampleType.jacket') },
    { value: 'pants', label: t('inquiry.sampleType.pants') },
    { value: 'coat', label: t('inquiry.sampleType.coat') },
    { value: 'fur', label: t('inquiry.sampleType.fur') },
    { value: 'furOne', label: t('inquiry.sampleType.furOne') },
    { value: 'leather', label: t('inquiry.sampleType.leather') },
    { value: 'duvet', label: t('inquiry.sampleType.duvet') },
    { value: 'pillow', label: t('inquiry.sampleType.pillow') },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(10,10,10,0.6)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#F7F5F2',
              borderRadius: '8px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '2rem',
              borderBottom: '1px solid rgba(139,115,85,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', 'Noto Serif SC', serif",
                fontSize: '1.8rem',
                fontWeight: 300,
                color: '#1A1A1A',
                margin: 0,
              }}>
                {t('inquiry.title')}
              </h2>
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#8B7355',
                  padding: '0.5rem',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Sample Type */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8B7355',
                  marginBottom: '0.5rem',
                }}>
                  {t('inquiry.sampleType')}
                </label>
                <select
                  name="sampleType"
                  value={formData.sampleType}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(139,115,85,0.2)',
                    borderRadius: '4px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: '#1A1A1A',
                  }}
                >
                  <option value="">Select sample type</option>
                  {sampleTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              {/* Has Sample */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8B7355',
                  marginBottom: '0.5rem',
                }}>
                  {t('inquiry.hasSample')}
                </label>
                <select
                  name="hasSample"
                  value={formData.hasSample}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(139,115,85,0.2)',
                    borderRadius: '4px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: '#1A1A1A',
                  }}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Expected Qty */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8B7355',
                  marginBottom: '0.5rem',
                }}>
                  {t('inquiry.expectedQty')}
                </label>
                <input
                  type="text"
                  name="expectedQty"
                  value={formData.expectedQty}
                  onChange={handleChange}
                  placeholder="e.g., 500-1000 pcs"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(139,115,85,0.2)',
                    borderRadius: '4px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: '#1A1A1A',
                  }}
                />
              </div>

              {/* Color */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8B7355',
                  marginBottom: '0.5rem',
                }}>
                  {t('inquiry.color')}
                </label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="e.g., Black, Navy Blue"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(139,115,85,0.2)',
                    borderRadius: '4px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: '#1A1A1A',
                  }}
                />
              </div>

              {/* Size */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8B7355',
                  marginBottom: '0.5rem',
                }}>
                  {t('inquiry.size')}
                </label>
                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  placeholder="e.g., XS-XXL"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(139,115,85,0.2)',
                    borderRadius: '4px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: '#1A1A1A',
                  }}
                />
              </div>

              {/* Region */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8B7355',
                  marginBottom: '0.5rem',
                }}>
                  {t('inquiry.region')}
                </label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  placeholder="e.g., Europe, Asia"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(139,115,85,0.2)',
                    borderRadius: '4px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: '#1A1A1A',
                  }}
                />
              </div>

              {/* Brand */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8B7355',
                  marginBottom: '0.5rem',
                }}>
                  {t('inquiry.brand')}
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="Your brand name"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(139,115,85,0.2)',
                    borderRadius: '4px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: '#1A1A1A',
                  }}
                />
              </div>

              {/* Contact */}
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8B7355',
                  marginBottom: '0.5rem',
                }}>
                  {t('inquiry.contact')}
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Phone or Email"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid rgba(139,115,85,0.2)',
                    borderRadius: '4px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: '#1A1A1A',
                  }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                style={{
                  padding: '1rem',
                  background: '#8B7355',
                  color: '#F7F5F2',
                  border: 'none',
                  borderRadius: '4px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  marginTop: '1rem',
                }}
              >
                {t('inquiry.submit')}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
