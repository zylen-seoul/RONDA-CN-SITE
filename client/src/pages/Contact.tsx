import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { BusinessContactTrigger } from '@/components/BusinessContact';
import { useLanguage, localizedPath } from '@/contexts/LanguageContext';

export default function Contact() {
  const { lang } = useLanguage();
  const formLabel = { zh: '填写项目需求', en: 'Project Inquiry', ko: '프로젝트 문의' }[lang];
  return (
    <SiteShell pageKey="contact">
      <PageHero pageKey="contact" />
      <div className="bc-contact-entry">
        {lang !== 'zh' && <a className="terminal-button terminal-button--primary" href="#contact">{lang === 'ko' ? 'KakaoTalk · WhatsApp' : 'WhatsApp · KakaoTalk'}</a>}
        <BusinessContactTrigger className={`terminal-button terminal-button--${lang === 'zh' ? 'primary' : 'ghost'}`} source="contact-page" />
        <a className="terminal-button terminal-button--ghost" href={localizedPath('/inquiry/', lang)}>{formLabel}</a>
      </div>
      <RelatedLinks current="contact" keys={["services", "products", "about"]} />
    </SiteShell>
  );
}
