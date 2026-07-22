import { localizedPath, useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();
  const navLinks = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.products', href: '/products/' },
    { key: 'nav.services', href: '/services/' },
    { key: 'nav.partners', href: '/partners/' },
    { key: 'nav.digital', href: '/digital-platform/' },
    { key: 'nav.global', href: '/global/' },
    { key: 'nav.about', href: '/about/' },
  ];

  return (
    <footer className="ronda-footer">
      <div className="ronda-footer-main">
        <div className="ronda-footer-brand">
          <img src="/ronda-logo.png" alt="RONDA 绒达科技" />
          <p>{t('footer.tagline')}</p>
          <a className="ronda-footer-cta" href={localizedPath('/inquiry/', lang)}>{t('nav.contact')}</a>
        </div>

        <nav className="ronda-footer-nav" aria-label={t('footer.nav.label')}>
          <span>{t('footer.nav.label')}</span>
          {navLinks.map(({ key, href }) => (
            <a key={key} href={localizedPath(href, lang)}>{t(key)}</a>
          ))}
        </nav>

        <div className="ronda-footer-company">
          <span>{t('footer.company.label')}</span>
          <strong>{t('footer.company.name')}</strong>
          <p>samplewear.com<br />{t('footer.icp')}</p>
        </div>
      </div>

      <div className="ronda-footer-bottom">
        <span>{t('footer.rights')}</span>
        <div>
          <a href={localizedPath('/privacy/', lang)}>{t('footer.privacy')}</a>
          <a href={localizedPath('/terms/', lang)}>{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
}
