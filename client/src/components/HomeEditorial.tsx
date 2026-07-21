import { useLanguage, type Language } from '@/contexts/LanguageContext';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const HERO_IMAGE = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/SsFUjHEjxUzuZYiG.jpg';
const PRODUCT_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663578556874/PykNo9z94x68gsxLjEHmf5/product_down_jacket_v2-C28aTj77bjh3DrRgssWnET.webp';
const SERVICE_IMAGE = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/yKbizznUxhuUSbYA.jpg';

// Keep these two established city assets paired with their original locations.
const HANGZHOU_IMAGE = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/VEnkGmmicAmbbpjx.jpg';
const SEOUL_IMAGE = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/mtPiHFXgDZRAQlWl.jpg';

const copy: Record<Language, {
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPrimary: string;
  heroSecondary: string;
  companyEyebrow: string;
  companyTitle: string;
  companyBody: string;
  companyLink: string;
  productsEyebrow: string;
  productsTitle: string;
  productsBody: string;
  productsLink: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesBody: string;
  servicesLink: string;
  citiesEyebrow: string;
  citiesTitle: string;
  citiesBody: string;
  hangzhou: string;
  hangzhouMeta: string;
  seoul: string;
  seoulMeta: string;
  cityLink: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaLink: string;
}> = {
  zh: {
    heroEyebrow: 'SAMPLEWEAR · 杭州绒达科技',
    heroTitle: '杭州绒达科技 · 冬装柔性供应链',
    heroBody: '连接杭州供应链与首尔设计资源，围绕冬装项目，从设计打样到生产交付提供清晰协作。',
    heroPrimary: '了解绒达',
    heroSecondary: '查看产品',
    companyEyebrow: 'RONDA · HANGZHOU',
    companyTitle: 'Samplewear 与杭州绒达科技',
    companyBody: 'Samplewear（展示名 Sample & Simple）由杭州绒达科技有限公司运营。RONDA 对应杭州供应链业务，ATLY 对应首尔办公室。我们连接杭州供应链与首尔设计及品牌资源，围绕羽绒服、双面大衣、皮草和羽绒寝具，提供设计打样、面辅料协作、生产、质量控制与交付服务。',
    companyLink: '公司介绍',
    productsEyebrow: '产品开发 · PRODUCT DEVELOPMENT',
    productsTitle: '冬装产品与开发方向',
    productsBody: '围绕羽绒服与户外系列、双面大衣、皮草及羽绒寝具，协同推进设计、面辅料与样衣开发。',
    productsLink: '浏览产品',
    servicesEyebrow: '供应链服务 · SUPPLY CHAIN',
    servicesTitle: '从设计到交付的协作',
    servicesBody: '覆盖设计打样、面辅料协作、生产、质量控制与交付，让每个冬装项目的节点更清晰。',
    servicesLink: '查看服务',
    citiesEyebrow: '杭州 · 首尔',
    citiesTitle: 'RONDA 杭州 × ATLY 首尔',
    citiesBody: 'RONDA 连接杭州供应链能力，ATLY 首尔办公室连接当地设计与品牌资源。',
    hangzhou: '杭州 · RONDA',
    hangzhouMeta: '供应链协作与项目交付',
    seoul: '首尔 · ATLY',
    seoulMeta: '设计与品牌资源连接',
    cityLink: '了解两地布局',
    ctaEyebrow: 'START A PROJECT',
    ctaTitle: '让下一个冬装项目清晰落地',
    ctaBody: '告诉我们产品方向、数量与计划时间，我们将从合适的协作节点开始。',
    ctaLink: '联系绒达',
  },
  en: {
    heroEyebrow: 'SAMPLEWEAR · HANGZHOU RONGDA',
    heroTitle: 'Hangzhou Rongda · Winter Apparel Supply Chain',
    heroBody: 'Connecting Hangzhou supply-chain capabilities with Seoul design resources, from sampling and sourcing to production and delivery.',
    heroPrimary: 'About Rongda',
    heroSecondary: 'View products',
    companyEyebrow: 'RONDA · HANGZHOU',
    companyTitle: 'Samplewear and Hangzhou Rongda Technology',
    companyBody: 'Samplewear, presented as Sample & Simple, is operated by Hangzhou Rongda Technology Co., Ltd. RONDA represents the Hangzhou supply-chain operation, while ATLY represents the Seoul office. Together, they connect Hangzhou manufacturing capabilities with Seoul-based design and brand resources for winter-apparel development, production, quality control and delivery.',
    companyLink: 'About the company',
    productsEyebrow: 'PRODUCT DEVELOPMENT',
    productsTitle: 'Winter Apparel Development',
    productsBody: 'Down and outdoor apparel, double-faced coats, fur and shearling, and down bedding—developed through coordinated design, material and sampling work.',
    productsLink: 'Explore products',
    servicesEyebrow: 'SUPPLY CHAIN SERVICES',
    servicesTitle: 'From Design to Delivery',
    servicesBody: 'A clear project path across design, sampling, material sourcing, production, quality control and delivery.',
    servicesLink: 'Explore services',
    citiesEyebrow: 'HANGZHOU · SEOUL',
    citiesTitle: 'RONDA Hangzhou × ATLY Seoul',
    citiesBody: 'RONDA connects Hangzhou supply-chain capabilities; ATLY connects Seoul-based design and brand resources.',
    hangzhou: 'Hangzhou · RONDA',
    hangzhouMeta: 'Supply-chain collaboration and delivery',
    seoul: 'Seoul · ATLY',
    seoulMeta: 'Design and brand connections',
    cityLink: 'Our locations',
    ctaEyebrow: 'START A PROJECT',
    ctaTitle: 'Give Your Next Winter Project a Clear Path',
    ctaBody: 'Share your product direction, quantity and target timing, and we will identify the right place to begin.',
    ctaLink: 'Contact Rongda',
  },
  ko: {
    heroEyebrow: 'SAMPLEWEAR · 항저우 룽다',
    heroTitle: '항저우 룽다 · 겨울 의류 공급망',
    heroBody: '항저우의 공급망 역량과 서울의 디자인 자원을 연결해 샘플링부터 생산과 납품까지 명확하게 협업합니다.',
    heroPrimary: '룽다 소개',
    heroSecondary: '제품 보기',
    companyEyebrow: 'RONDA · HANGZHOU',
    companyTitle: 'Samplewear와 항저우 룽다 테크놀로지',
    companyBody: 'Samplewear(Sample & Simple)는 항저우 룽다 테크놀로지 유한공사가 운영합니다. RONDA는 항저우 공급망 사업을, ATLY는 서울 오피스를 나타냅니다. 항저우의 생산 역량과 서울의 디자인·브랜드 자원을 연결해 겨울 의류 개발, 생산, 품질 관리와 납품을 지원합니다.',
    companyLink: '회사 소개',
    productsEyebrow: '제품 개발 · PRODUCT DEVELOPMENT',
    productsTitle: '겨울 의류 제품 개발',
    productsBody: '다운 및 아웃도어, 더블페이스 코트, 퍼와 시어링, 다운 침구를 중심으로 디자인, 소재와 샘플 개발을 연결합니다.',
    productsLink: '제품 보기',
    servicesEyebrow: '공급망 서비스 · SUPPLY CHAIN',
    servicesTitle: '디자인부터 납품까지',
    servicesBody: '디자인과 샘플링, 소재 협업, 생산, 품질 관리와 납품까지 프로젝트의 각 단계를 명확하게 연결합니다.',
    servicesLink: '서비스 보기',
    citiesEyebrow: '항저우 · 서울',
    citiesTitle: 'RONDA 항저우 × ATLY 서울',
    citiesBody: 'RONDA는 항저우 공급망 역량을, ATLY 서울 오피스는 현지 디자인과 브랜드 자원을 연결합니다.',
    hangzhou: '항저우 · RONDA',
    hangzhouMeta: '공급망 협업과 프로젝트 납품',
    seoul: '서울 · ATLY',
    seoulMeta: '디자인과 브랜드 자원 연결',
    cityLink: '두 거점 보기',
    ctaEyebrow: 'START A PROJECT',
    ctaTitle: '다음 겨울 의류 프로젝트를 명확하게',
    ctaBody: '제품 방향, 수량과 목표 일정을 알려주시면 적절한 협업 단계부터 함께 시작합니다.',
    ctaLink: '룽다 문의',
  },
};

function ArrowLink({ href, children }: { href: string; children: string }) {
  return (
    <a className="home-arrow-link" href={href}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.7} />
    </a>
  );
}

export default function HomeEditorial() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <div className="home-editorial" data-lang={lang}>
      <section className="home-editorial-hero" aria-labelledby="home-title">
        <figure className="home-hero-media">
          <img src={HERO_IMAGE} alt="冬装面料与服装产品开发" fetchPriority="high" />
          <figcaption>RONDA · HANGZHOU / 01</figcaption>
        </figure>

        <div className="home-hero-copy">
          <div>
            <p className="home-kicker">{c.heroEyebrow}</p>
            <h1 id="home-title" className="home-hero-title">{c.heroTitle}</h1>
          </div>
          <div className="home-hero-copy-bottom">
            <p className="home-lead">{c.heroBody}</p>
            <div className="home-hero-links">
              <a className="home-primary-link" href="/about/">{c.heroPrimary}<ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.7} /></a>
              <ArrowLink href="/products/">{c.heroSecondary}</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="home-company" aria-labelledby="home-company-title">
        <div className="home-company-mark" aria-label="RONDA">
          <span className="home-section-index">02 / RONDA</span>
          <img src="/ronda-logo.png" alt="RONDA 绒达" />
        </div>
        <div className="home-company-copy">
          <p className="home-kicker">{c.companyEyebrow}</p>
          <h2 id="home-company-title" className="home-section-title">{c.companyTitle}</h2>
          <p>{c.companyBody}</p>
          <ArrowLink href="/about/">{c.companyLink}</ArrowLink>
        </div>
      </section>

      <section className="home-story home-story-product" aria-labelledby="home-products-title">
        <div className="home-story-media">
          <img src={PRODUCT_IMAGE} alt="羽绒服与冬装产品开发" loading="lazy" />
          <span className="home-media-number">03</span>
        </div>
        <div className="home-story-copy">
          <p className="home-kicker">{c.productsEyebrow}</p>
          <h2 id="home-products-title" className="home-section-title">{c.productsTitle}</h2>
          <p>{c.productsBody}</p>
          <ArrowLink href="/products/">{c.productsLink}</ArrowLink>
        </div>
      </section>

      <section className="home-story home-story-service" aria-labelledby="home-services-title">
        <div className="home-story-copy">
          <p className="home-kicker">{c.servicesEyebrow}</p>
          <h2 id="home-services-title" className="home-section-title">{c.servicesTitle}</h2>
          <p>{c.servicesBody}</p>
          <ArrowLink href="/services/">{c.servicesLink}</ArrowLink>
        </div>
        <div className="home-story-media">
          <img src={SERVICE_IMAGE} alt="冬装设计打样与面辅料协作" loading="lazy" />
          <span className="home-media-number">04</span>
        </div>
      </section>

      <section className="home-cities" aria-labelledby="home-cities-title">
        <div className="home-cities-heading">
          <div>
            <p className="home-kicker">{c.citiesEyebrow}</p>
            <h2 id="home-cities-title" className="home-section-title">{c.citiesTitle}</h2>
          </div>
          <div>
            <p>{c.citiesBody}</p>
            <ArrowLink href="/global/">{c.cityLink}</ArrowLink>
          </div>
        </div>

        <div className="home-city-grid">
          <article className="home-city-card">
            <img src={HANGZHOU_IMAGE} alt={c.hangzhou} loading="lazy" />
            <div>
              <h3>{c.hangzhou}</h3>
              <p>{c.hangzhouMeta}</p>
            </div>
          </article>
          <article className="home-city-card">
            <img className="home-city-seoul-image" src={SEOUL_IMAGE} alt={c.seoul} loading="lazy" />
            <div>
              <h3>{c.seoul}</h3>
              <p>{c.seoulMeta}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="home-project-cta" aria-labelledby="home-cta-title">
        <p className="home-kicker">{c.ctaEyebrow}</p>
        <div>
          <h2 id="home-cta-title" className="home-section-title">{c.ctaTitle}</h2>
          <p>{c.ctaBody}</p>
        </div>
        <a className="home-cta-link" href="/contact/">{c.ctaLink}<ArrowRight aria-hidden="true" size={14} strokeWidth={1.7} /></a>
      </section>
    </div>
  );
}
