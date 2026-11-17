import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { MessageCircle, X } from 'lucide-react';
import { localizedPath, useLanguage } from '@/contexts/LanguageContext';
import { businessContact, previewQrPath, verifiedContactLink, verifiedQrPath } from '@/config/businessContact';
import '@/business-contact.css';

const copy = {
  zh: { action: '企业微信咨询', title: '与绒达业务负责人沟通', role: '杭州绒达科技 · 业务负责人', hint: '扫码添加吴翔，沟通款式、数量与目标交期。', desktop: '打开微信「扫一扫」，扫描二维码添加联系。', mobile: '保存二维码后，打开微信「扫一扫」→ 相册识别；也可长按图片保存。', save: '保存二维码', direct: '打开企业微信联系', pending: '开发预览 · 二维码待接入', unverified: '本地预览 · 待吴翔本人扫码确认', unavailable: '企业微信暂不可用，请使用以下联系方式。', alt: '吴翔企业微信联系二维码', close: '关闭咨询面板', email: '邮箱', phone: '电话', form: '填写项目需求', error: '二维码加载失败，请使用电话或邮箱联系。' },
  en: { action: 'WeCom Consultation', title: 'Contact RONDA’s Business Lead', role: 'Hangzhou Rongda Technology · Business Lead', hint: 'Scan to connect with Wu Xiang about your style, quantity and target date.', desktop: 'Open WeChat Scan to add our contact using this QR code.', mobile: 'Save the image, then open WeChat → Scan → Album. You can also touch and hold the image to save it.', save: 'Save QR Image', direct: 'Open WeCom Contact', pending: 'Development preview · QR pending', unverified: 'Local preview · Awaiting Wu Xiang’s scan confirmation', unavailable: 'WeCom is unavailable. Please contact us below.', alt: 'Wu Xiang WeCom contact QR code', close: 'Close contact panel', email: 'Email', phone: 'Phone', form: 'Project Inquiry', error: 'QR image could not load. Please use phone or email.' },
  ko: { action: '기업 위챗 상담', title: 'RONDA 비즈니스 책임자와 상담', role: '항저우 룽다 테크놀로지 · 비즈니스 책임자', hint: 'QR 코드로 우샹과 연결하여 스타일, 수량과 희망 납기를 상담하세요.', desktop: '위챗 스캔 기능으로 QR 코드를 스캔해 연락처를 추가하세요.', mobile: '이미지 저장 후 위챗 → 스캔 → 앨범에서 인식하세요. 이미지를 길게 눌러 저장할 수도 있습니다.', save: 'QR 이미지 저장', direct: '기업 위챗 연락처 열기', pending: '개발 미리보기 · QR 연결 대기', unverified: '로컬 미리보기 · 우샹 본인의 스캔 확인 대기', unavailable: '기업 위챗을 이용할 수 없습니다. 아래 연락처를 이용해 주세요.', alt: '우샹 담당자 기업 위챗 연락 QR 코드', close: '상담 창 닫기', email: '이메일', phone: '전화', form: '프로젝트 문의', error: 'QR 이미지를 불러오지 못했습니다. 전화나 이메일을 이용해 주세요.' },
};

const ContactContext = createContext<{ open: (source: string, trigger: HTMLElement) => void; available: boolean }>({ open: () => {}, available: false });

// Only use the existing Umami installation, if present. No script or personal data added.
function track(event: string, source: string, language: string) {
  const analytics = (window as Window & { umami?: { track: (event: string, data: Record<string, string>) => unknown } }).umami;
  try { analytics?.track(event, { source, language }); } catch { /* Analytics must never block contact. */ }
}

export function BusinessContactTrigger({ children, className, source, style }: { children?: ReactNode; className?: string; source: string; style?: CSSProperties }) {
  const { lang } = useLanguage();
  const contact = useContext(ContactContext);
  const label = children || copy[lang].action;
  // No development placeholder is rendered in production without a verified QR.
  if (!contact.available) return null;
  return <button data-business-contact-trigger className={className} style={style} type="button" aria-haspopup="dialog" onClick={event => contact.open(source, event.currentTarget)}>{label}</button>;
}

export default function BusinessContact({ children }: { children: ReactNode }) {
  const { lang } = useLanguage();
  const c = copy[lang];
  const verifiedQr = verifiedQrPath();
  const qr = verifiedQr || (import.meta.env.DEV ? previewQrPath() : null);
  const direct = verifiedQr ? verifiedContactLink() : null;
  const available = Boolean(qr) || import.meta.env.DEV;
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const source = useRef('floating');
  const trigger = useRef<HTMLElement | null>(null);
  const counted = useRef(false);
  useEffect(() => {
    if (open && loaded && !failed && !counted.current) {
      counted.current = true;
      track('business_contact_qr_view', source.current, lang);
    }
  }, [open, loaded, failed, lang]);
  const show = (value: string, element: HTMLElement) => {
    source.current = value;
    trigger.current = element;
    counted.current = false;
    track('business_contact_click', value, lang);
    setOpen(true);
  };
  return <ContactContext.Provider value={{ open: show, available }}>
    {children}
    {available && <button type="button" className="bc-floating" aria-haspopup="dialog" onClick={event => show('floating', event.currentTarget)}>
      <MessageCircle size={20} aria-hidden="true" /><span>{c.action}</span>
    </button>}
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bc-overlay" />
        <Dialog.Content className="bc-panel" onCloseAutoFocus={event => { event.preventDefault(); trigger.current?.focus(); }}>
          <Dialog.Title className="bc-title">{c.title}</Dialog.Title>
          <Dialog.Description className="bc-description">{c.hint}</Dialog.Description>
          <p className="bc-advisor">{businessContact.advisor[lang]}<small>{c.role}</small></p>
          {qr && !verifiedQr && <p className="bc-preview-note" role="status">{c.unverified}</p>}
          {qr ? <>
            <img className="bc-qr" src={qr} alt={c.alt} hidden={failed} onLoad={() => { setLoaded(true); setFailed(false); }} onError={() => { setLoaded(false); setFailed(true); }} />
            {failed ? <p role="status">{c.error}</p> : <>
              <p className="bc-desktop-hint">{c.desktop}</p><p className="bc-mobile-hint">{c.mobile}</p>
              {loaded && <a href={qr} download={`RONDA-Wu-Xiang-WeCom.${qr.split('.').pop()}`} className="bc-save" onClick={() => track('business_contact_qr_save', source.current, lang)}>{c.save}</a>}
              {direct && loaded && <a className="bc-direct" href={direct} target="_blank" rel="noopener noreferrer" onClick={() => track('business_contact_direct_click', source.current, lang)}>{c.direct}</a>}
            </>}
          </> : <p className="bc-pending" role="status">{import.meta.env.DEV ? c.pending : c.unavailable}</p>}
          <div className="bc-links">
            <a href={`mailto:${businessContact.email}`}><small>{c.email}</small>{businessContact.email}</a>
            <a href={`tel:${businessContact.phone}`}><small>{c.phone}</small>{businessContact.phone}</a>
          </div>
          <a className="bc-form-link" href={localizedPath('/inquiry/', lang)}>{c.form} ↗</a>
          <Dialog.Close className="bc-close" aria-label={c.close}><X size={22} aria-hidden="true" /></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </ContactContext.Provider>;
}
