/**
 * PrivacyPolicyPage — Full Privacy Policy
 * 杭州绒达科技有限公司 / Hangzhou Rongda Technology Co., Ltd.
 * Trilingual: Chinese / English / Korean
 */
import { useLanguage } from '@/contexts/LanguageContext';
import { APP_PRIVACY_CONTENT } from '@/content/appPrivacyPolicyContent';

const TERMS_CONTENT = {
  zh: {
    title: '服务条款',
    updated: '最后更新日期：2025年1月1日',
    company: '杭州绒达科技有限公司',
    sections: [
      {
        heading: '一、接受条款',
        body: `欢迎使用杭州绒达科技有限公司（以下简称"本公司"）提供的网站及相关服务。本服务条款（以下简称"本条款"）是您与本公司之间关于使用本网站（samplewear.com）及相关服务的法律协议。

请在使用本网站前仔细阅读本条款。您访问或使用本网站，即表示您已阅读、理解并同意受本条款约束。若您不同意本条款的任何内容，请立即停止使用本网站。

本公司保留随时修改本条款的权利，修改后的条款将在本页面发布并即时生效。建议您定期查阅本条款。`,
      },
      {
        heading: '二、服务说明',
        body: `本公司通过本网站提供以下服务：

1. **企业信息展示**：展示本公司的品牌介绍、业务范围、全球布局及核心优势等信息。
2. **产品与服务咨询**：提供羽绒服、冲锋衣、滑雪服、双面大衣、皮草与皮毛一体、羽绒寝具等产品的开发与生产咨询服务。
3. **商业询盘**：通过在线表单接收客户的样衣定制、供应链合作等商业合作请求。
4. **全链路供应链服务**：包括设计打样、品牌孵化、柔性生产、面料采购、质量控制及物流配送等服务的信息展示与初步对接。

本公司提供的服务以实际签订的商业合同为准，本网站所展示的内容仅供参考，不构成正式的要约或承诺。`,
      },
      {
        heading: '三、用户行为规范',
        body: `您在使用本网站时，须遵守以下规范：

**（一）合法使用**
您须依法使用本网站，不得利用本网站从事任何违法违规活动，包括但不限于：传播虚假信息、侵犯他人知识产权、实施网络攻击、散布恶意软件等。

**（二）真实信息**
您通过询盘表单提交的信息须真实、准确、完整。提供虚假信息所造成的一切后果由您自行承担。

**（三）禁止行为**
您不得进行以下行为：
- 未经授权访问本网站的后台系统或数据库；
- 使用自动化工具批量抓取本网站内容；
- 干扰或破坏本网站的正常运营；
- 冒充本公司或本公司员工进行任何活动。`,
      },
      {
        heading: '四、知识产权',
        body: `本网站所有内容，包括但不限于文字、图片、视频、设计、商标、标志及软件代码，均属于本公司或其授权方所有，受中华人民共和国知识产权法律及国际条约的保护。

未经本公司书面许可，任何单位或个人不得以任何形式复制、转载、传播、修改或使用本网站的任何内容。对于侵犯本公司知识产权的行为，本公司将依法追究法律责任。

"RONDA"及相关标志为本公司的商业标识，未经授权不得使用。`,
      },
      {
        heading: '五、免责声明',
        body: `**（一）信息准确性**
本公司将尽力确保网站内容的准确性和时效性，但不对内容的完整性、准确性或适用性作出任何明示或暗示的保证。网站内容可能因业务调整而随时变更，恕不另行通知。

**（二）服务中断**
本公司不保证网站服务不间断或无错误运行。因技术故障、网络问题、维护升级等原因导致的服务中断，本公司不承担相应责任。

**（三）第三方内容**
本网站可能包含第三方链接或内容，本公司对第三方内容的准确性、合法性不承担责任。

**（四）损失限制**
在法律允许的最大范围内，本公司对因使用或无法使用本网站而产生的任何直接、间接、附带或后果性损失不承担赔偿责任。`,
      },
      {
        heading: '六、商业合作条款',
        body: `通过本网站提交的询盘或合作请求，仅代表您有意向与本公司开展商业合作，不构成具有法律约束力的合同。正式的商业合作须经双方协商，签订书面合同后方可生效。

本公司提供的报价、交期、MOQ（最低起订量）等信息仅供参考，具体条款以双方正式签订的合同为准。

本公司对所有商业信息（包括但不限于客户信息、订单信息、工艺信息）负有保密义务，未经客户同意不得向第三方披露。`,
      },
      {
        heading: '七、适用法律与争议解决',
        body: `本条款的解释、效力及履行均适用中华人民共和国法律。

因使用本网站或本条款引发的任何争议，双方应首先通过友好协商解决。协商不成的，任何一方均可向本公司所在地（杭州市）有管辖权的人民法院提起诉讼。`,
      },
      {
        heading: '八、条款的可分割性',
        body: `若本条款的任何条款被认定为无效或不可执行，该条款将在最小必要范围内被修改以使其有效，其余条款仍继续有效。`,
      },
      {
        heading: '九、联系我们',
        body: `若您对本服务条款有任何疑问，请通过以下方式联系我们：

**公司名称**：杭州绒达科技有限公司
**电子邮件**：guangmdc0901@gmail.com
**工作时间**：周一至周五 9:00–18:00（北京时间）`,
      },
    ],
  },
  en: {
    title: 'Terms of Service',
    updated: 'Last Updated: January 1, 2025',
    company: 'Hangzhou Rongda Technology Co., Ltd.',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: `Welcome to the website and related services provided by Hangzhou Rongda Technology Co., Ltd. (hereinafter referred to as "the Company"). These Terms of Service (hereinafter referred to as "these Terms") constitute a legal agreement between you and the Company regarding your use of this website (samplewear.com) and related services.

Please read these Terms carefully before using this website. By accessing or using this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree with any part of these Terms, please immediately stop using this website.

The Company reserves the right to modify these Terms at any time. Modified Terms will be published on this page and take effect immediately. We recommend that you review these Terms regularly.`,
      },
      {
        heading: '2. Service Description',
        body: `The Company provides the following services through this website:

1. **Corporate Information Display**: Showcasing the Company's brand introduction, business scope, global presence, and core competencies.
2. **Product and Service Consultation**: Providing development and production consultation for down jackets, technical shells, skiwear, double-faced coats, fur and shearling, and down bedding.
3. **Business Inquiries**: Receiving customer requests for sample garment customization, supply chain cooperation, and other business collaboration through online forms.
4. **Full-Chain Supply Chain Services**: Information display and preliminary connection for services including design sampling, brand incubation, flexible production, fabric sourcing, quality control, and logistics distribution.

The Company's services are subject to formally signed commercial contracts. The content displayed on this website is for reference only and does not constitute a formal offer or commitment.`,
      },
      {
        heading: '3. User Conduct',
        body: `When using this website, you must comply with the following standards:

**A. Lawful Use**
You must use this website in accordance with the law and must not use it for any illegal or irregular activities, including but not limited to: spreading false information, infringing on others' intellectual property rights, conducting cyberattacks, or distributing malware.

**B. Accurate Information**
Information submitted through the inquiry form must be truthful, accurate, and complete. You bear all consequences arising from providing false information.

**C. Prohibited Activities**
You must not engage in the following activities:
- Unauthorized access to the backend systems or databases of this website;
- Using automated tools to bulk scrape content from this website;
- Interfering with or disrupting the normal operation of this website;
- Impersonating the Company or its employees in any activity.`,
      },
      {
        heading: '4. Intellectual Property',
        body: `All content on this website, including but not limited to text, images, videos, designs, trademarks, logos, and software code, belongs to the Company or its authorized parties and is protected by the intellectual property laws of the People's Republic of China and international treaties.

Without the written permission of the Company, no entity or individual may reproduce, repost, distribute, modify, or use any content from this website in any form. The Company will pursue legal liability for any infringement of its intellectual property rights.

"RONDA" and related marks are commercial identifiers of the Company and may not be used without authorization.`,
      },
      {
        heading: '5. Disclaimer',
        body: `**A. Information Accuracy**
The Company will endeavor to ensure the accuracy and timeliness of website content but makes no express or implied warranties regarding the completeness, accuracy, or applicability of the content. Website content may change at any time due to business adjustments without prior notice.

**B. Service Interruption**
The Company does not guarantee uninterrupted or error-free operation of website services. The Company is not liable for service interruptions caused by technical failures, network issues, maintenance upgrades, or other reasons.

**C. Third-Party Content**
This website may contain third-party links or content. The Company is not responsible for the accuracy or legality of third-party content.

**D. Limitation of Liability**
To the maximum extent permitted by law, the Company is not liable for any direct, indirect, incidental, or consequential losses arising from the use of or inability to use this website.`,
      },
      {
        heading: '6. Business Cooperation Terms',
        body: `Inquiries or cooperation requests submitted through this website represent only your intention to engage in business cooperation with the Company and do not constitute a legally binding contract. Formal business cooperation requires negotiation by both parties and takes effect only after a written contract is signed.

Quotations, delivery times, MOQ (Minimum Order Quantity), and other information provided by the Company are for reference only. Specific terms are subject to the formally signed contract between both parties.

The Company has a confidentiality obligation for all business information (including but not limited to customer information, order information, and process information) and will not disclose it to third parties without the customer's consent.`,
      },
      {
        heading: '7. Governing Law and Dispute Resolution',
        body: `These Terms shall be interpreted, effective, and performed in accordance with the laws of the People's Republic of China.

Any disputes arising from the use of this website or these Terms shall first be resolved through friendly negotiation. If negotiation fails, either party may file a lawsuit with the competent People's Court at the Company's location (Hangzhou City).`,
      },
      {
        heading: '8. Severability',
        body: `If any provision of these Terms is found to be invalid or unenforceable, that provision will be modified to the minimum extent necessary to make it valid, and the remaining provisions will continue in full force and effect.`,
      },
      {
        heading: '9. Contact Us',
        body: `If you have any questions about these Terms of Service, please contact us through the following:

**Company Name**: Hangzhou Rongda Technology Co., Ltd.
**Email**: guangmdc0901@gmail.com
**Business Hours**: Monday to Friday, 9:00–18:00 (Beijing Time)`,
      },
    ],
  },
  ko: {
    title: '서비스 이용약관',
    updated: '최종 업데이트: 2025년 1월 1일',
    company: '항저우 룽다 테크놀로지 유한공사',
    sections: [
      {
        heading: '1. 약관 동의',
        body: `항저우 룽다 테크놀로지 유한공사(이하 "당사")가 제공하는 웹사이트 및 관련 서비스를 이용해 주셔서 감사합니다. 본 서비스 이용약관(이하 "본 약관")은 귀하와 당사 간의 본 웹사이트(samplewear.com) 및 관련 서비스 이용에 관한 법적 계약입니다.

웹사이트 이용 전 본 약관을 주의 깊게 읽어주시기 바랍니다. 웹사이트에 접속하거나 이용하시면 본 약관을 읽고 이해하였으며 이에 구속되는 것에 동의하는 것으로 간주됩니다. 본 약관의 어떤 부분에도 동의하지 않으시면 즉시 웹사이트 이용을 중단해 주시기 바랍니다.

당사는 언제든지 본 약관을 수정할 권리를 보유합니다. 수정된 약관은 본 페이지에 게시되며 즉시 효력이 발생합니다.`,
      },
      {
        heading: '2. 서비스 설명',
        body: `당사는 본 웹사이트를 통해 다음 서비스를 제공합니다:

1. **기업 정보 제공**: 당사의 브랜드 소개, 사업 범위, 글로벌 현황 및 핵심 역량 정보 제공.
2. **제품 및 서비스 상담**: 다운 재킷, 기능성 셸, 스키웨어, 더블페이스 코트, 퍼와 시어링, 다운 침구의 개발 및 생산 상담 제공.
3. **비즈니스 문의**: 온라인 양식을 통해 샘플 의류 맞춤 제작, 공급망 협력 등 비즈니스 협력 요청 접수.
4. **풀체인 공급망 서비스**: 디자인 샘플링, 브랜드 인큐베이션, 유연 생산, 원단 조달, 품질 관리 및 물류 배송 등 서비스 정보 제공 및 초기 연결.

당사의 서비스는 공식 체결된 상업 계약에 따릅니다. 웹사이트에 표시된 내용은 참고용이며 공식 제안이나 약속을 구성하지 않습니다.`,
      },
      {
        heading: '3. 이용자 행동 규범',
        body: `본 웹사이트 이용 시 다음 규범을 준수해야 합니다:

**가. 합법적 이용**
법률에 따라 웹사이트를 이용해야 하며, 허위 정보 유포, 타인의 지식재산권 침해, 사이버 공격 실시, 악성 소프트웨어 배포 등 불법 활동에 이용해서는 안 됩니다.

**나. 정확한 정보**
문의 양식을 통해 제출하는 정보는 진실하고 정확하며 완전해야 합니다. 허위 정보 제공으로 인한 모든 결과는 귀하가 부담합니다.

**다. 금지 행위**
다음 행위를 해서는 안 됩니다:
- 웹사이트 백엔드 시스템 또는 데이터베이스에 무단 접근;
- 자동화 도구를 사용한 웹사이트 콘텐츠 대량 수집;
- 웹사이트의 정상적인 운영 방해 또는 파괴;
- 당사 또는 당사 직원을 사칭하는 행위.`,
      },
      {
        heading: '4. 지식재산권',
        body: `텍스트, 이미지, 동영상, 디자인, 상표, 로고 및 소프트웨어 코드를 포함하되 이에 국한되지 않는 웹사이트의 모든 콘텐츠는 당사 또는 그 승인 당사자에게 귀속되며, 중화인민공화국 지식재산권 법률 및 국제 조약의 보호를 받습니다.

당사의 서면 허가 없이 어떠한 단체나 개인도 어떠한 형태로든 웹사이트의 콘텐츠를 복제, 재게시, 배포, 수정 또는 사용할 수 없습니다.

"RONDA" 및 관련 마크는 당사의 상업적 식별자이며 무단 사용이 금지됩니다.`,
      },
      {
        heading: '5. 면책 조항',
        body: `**가. 정보 정확성**
당사는 웹사이트 콘텐츠의 정확성과 적시성을 보장하기 위해 노력하지만, 콘텐츠의 완전성, 정확성 또는 적용 가능성에 대해 명시적 또는 묵시적 보증을 하지 않습니다.

**나. 서비스 중단**
당사는 웹사이트 서비스의 무중단 또는 오류 없는 운영을 보장하지 않습니다. 기술적 장애, 네트워크 문제, 유지보수 업그레이드 등으로 인한 서비스 중단에 대해 당사는 책임을 지지 않습니다.

**다. 제3자 콘텐츠**
웹사이트에는 제3자 링크 또는 콘텐츠가 포함될 수 있습니다. 당사는 제3자 콘텐츠의 정확성이나 합법성에 대해 책임을 지지 않습니다.

**라. 책임 제한**
법률이 허용하는 최대 범위 내에서, 당사는 웹사이트 이용 또는 이용 불가로 인해 발생하는 직접적, 간접적, 부수적 또는 결과적 손실에 대해 책임을 지지 않습니다.`,
      },
      {
        heading: '6. 비즈니스 협력 조건',
        body: `웹사이트를 통해 제출된 문의 또는 협력 요청은 귀하가 당사와 비즈니스 협력을 원한다는 의사 표시일 뿐이며 법적 구속력이 있는 계약을 구성하지 않습니다. 공식 비즈니스 협력은 양 당사자의 협의를 거쳐 서면 계약 체결 후 효력이 발생합니다.

당사가 제공하는 견적, 납기, MOQ(최소 주문 수량) 등의 정보는 참고용이며, 구체적인 조건은 양 당사자가 공식 체결한 계약에 따릅니다.

당사는 모든 비즈니스 정보(고객 정보, 주문 정보, 공정 정보 포함)에 대해 기밀 유지 의무가 있으며 고객의 동의 없이 제3자에게 공개하지 않습니다.`,
      },
      {
        heading: '7. 준거법 및 분쟁 해결',
        body: `본 약관은 중화인민공화국 법률에 따라 해석, 효력 및 이행됩니다.

웹사이트 이용 또는 본 약관으로 인한 분쟁은 먼저 우호적인 협의를 통해 해결하도록 합니다. 협의가 이루어지지 않을 경우 어느 당사자든 당사 소재지(항저우시)의 관할 인민법원에 소송을 제기할 수 있습니다.`,
      },
      {
        heading: '8. 조항의 분리 가능성',
        body: `본 약관의 어떤 조항이 무효 또는 집행 불가능한 것으로 판단될 경우, 해당 조항은 유효하게 만들기 위해 최소한의 범위 내에서 수정되며, 나머지 조항은 계속 완전한 효력을 유지합니다.`,
      },
      {
        heading: '9. 문의처',
        body: `본 서비스 이용약관에 관한 질문이 있으시면 다음 연락처로 문의해 주시기 바랍니다:

**회사명**: 항저우 룽다 테크놀로지 유한공사
**이메일**: guangmdc0901@gmail.com
**업무 시간**: 월–금 9:00–18:00 (베이징 시간)`,
      },
    ],
  },
};

function renderBody(text: string) {
  // Convert emphasis and policy URLs into accessible inline elements.
  const parts = text.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s]+)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#8B7355', textDecoration: 'underline', overflowWrap: 'anywhere' }}
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onBack: () => void;
}

export default function LegalPage({ type, onBack }: LegalPageProps) {
  const { lang } = useLanguage();
  const currentLang = (lang === 'zh' || lang === 'en' || lang === 'ko') ? lang : 'zh';

  const content = type === 'privacy'
    ? APP_PRIVACY_CONTENT[currentLang]
    : TERMS_CONTENT[currentLang];

  return (
    <div style={{ minHeight: '100vh', background: '#F7F5F2' }}>
      {/* Header */}
      <div style={{
        background: '#F7F5F2',
        borderBottom: '1px solid rgba(139,115,85,0.15)',
        padding: '1.5rem clamp(1.5rem, 5vw, 5rem)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <div style={{
          maxWidth: '860px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <button
            onClick={onBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              color: '#6B6560',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#8B7355')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6B6560')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            {currentLang === 'zh' ? '返回' : currentLang === 'en' ? 'Back' : '뒤로'}
          </button>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase' as const,
            color: '#8B7355',
          }}>
            RONDA · HANGZHOU
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 5rem)',
      }}>
        {/* Title */}
        <div style={{ marginBottom: '3rem', borderBottom: '1px solid rgba(139,115,85,0.15)', paddingBottom: '2rem' }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase' as const,
            color: '#8B7355',
            display: 'block',
            marginBottom: '1rem',
          }}>
            {content.company}
          </span>
          <h1 style={{
            fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
            fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
            fontWeight: 550,
            color: '#1A1A1A',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
            margin: '0 0 1rem',
          }}>
            {content.title}
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem',
            color: '#9A9590',
            margin: 0,
          }}>
            {content.updated}
          </p>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {content.sections.map((section, i) => (
            <div key={i} style={{
              borderLeft: '2px solid rgba(139,115,85,0.2)',
              paddingLeft: '1.5rem',
            }}>
              <h2 style={{
                fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#1A1A1A',
                letterSpacing: '0.05em',
                margin: '0 0 1rem',
              }}>
                {section.heading}
              </h2>
              <div style={{
                fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                fontSize: '0.82rem',
                color: '#4A4A4A',
                lineHeight: 1.9,
                whiteSpace: 'pre-line',
              }}>
                {section.body.split('\n').map((line, j) => (
                  <p key={j} style={{ margin: '0 0 0.6rem' }}>
                    {renderBody(line)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(139,115,85,0.15)',
          textAlign: 'center' as const,
        }}>
          <p style={{
            fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
            fontSize: '0.72rem',
            color: '#9A9590',
            margin: 0,
          }}>
            © 2026 杭州绒达科技有限公司 · 浙ICP备2025188038号-1
          </p>
        </div>
      </div>
    </div>
  );
}
