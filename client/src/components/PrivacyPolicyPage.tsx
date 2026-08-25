/**
 * PrivacyPolicyPage — Full Privacy Policy
 * 杭州绒达科技有限公司 / Hangzhou Rongda Technology Co., Ltd.
 * Trilingual: Chinese / English / Korean
 */
import { useLanguage } from '@/contexts/LanguageContext';

const PRIVACY_CONTENT = {
  zh: {
    title: '隐私政策',
    updated: '更新日期：2026年8月21日\n生效日期：2026年8月21日',
    company: '杭州绒达科技有限公司',
    footer: '杭州绒达科技有限公司 · Sample APP · Samplewear',
    sections: [
      {
        heading: '一、总则',
        body: `杭州绒达科技有限公司（以下简称"本公司"、"我们"或"绒达科技"）深知个人信息对您的重要性，我们将依据《中华人民共和国个人信息保护法》《中华人民共和国数据安全法》《中华人民共和国网络安全法》及相关法律法规，保护您的个人信息安全。

本隐私政策适用于您使用本公司开发的Sample APP（以下简称"本应用"）及通过本应用提交的任何询盘、咨询或合作请求。请您在使用本应用前仔细阅读本政策。当您首次启动本应用时，我们会通过弹窗等明显方式提示您阅读本隐私政策，并在您主动点击"同意"后，我们才会开始收集您的个人信息。若您不同意本政策的任何条款，请立即停止使用本应用。

我们非常重视您的个人信息和隐私保护。本隐私政策将向您说明我们在收集、使用、存储和保护您的个人信息方面的做法。请您仔细阅读，并在充分理解后使用我们的产品和服务。`,
      },
      {
        heading: '二、我们收集的信息',
        body: `我们可能收集以下类型的信息：

**（一）您主动提供的信息**
当您使用本应用的注册、登录功能或通过询盘表单提交合作请求时，我们会收集您主动提供的信息，包括但不限于：

1. 注册与登录信息：手机号码、昵称。
2. 询盘与合作信息：姓名或公司名称、联系方式（电话、电子邮件）、所在地区或国家、样衣类型需求、预期订单数量、颜色与尺码要求、品牌信息及其他您在表单中填写的内容。

**（二）自动收集的信息**
在您使用本应用过程中，我们会根据合法、正当、必要原则，仅收集实现产品功能所必需的信息，包括：

1. 设备信息：设备型号、操作系统版本。
2. 网络信息：网络类型、IP地址。
3. 日志信息：访问时间、页面浏览记录、错误日志。
4. 标识符信息：Android ID、OAID，IOS如IDFA（仅在必要情况下读取，用于统计分析、消息推送及安全保障）。

我们不会收集您的通讯录、精确定位、麦克风、相册等敏感信息，除非您在明确同意后授权。我们不会将您的个人信息用于广告投放或用户画像分析。`,
      },
      {
        heading: '三、信息收集的目的',
        body: `我们收集上述信息的目的包括：

1. 账户服务：保障注册、登录等功能的正常使用；
2. 系统运行与安全：用于错误分析、故障排查、安全保障；
3. 消息推送：为您提供系统通知或必要的业务提醒；
4. 功能实现：如支付功能、物流查询、文件存储、电子发票服务；
5. 响应询盘与合作请求：处理您通过表单提交的样衣定制、供应链合作等商业咨询；
6. 提供专业服务：根据您的需求为您匹配合适的产品方案、面料资源及生产安排；
7. 法律合规：履行法律法规规定的义务，配合监管机构的合法要求。

我们不会将您的个人信息用于与上述目的无关的任何商业营销活动，亦不会在未经您明确同意的情况下向第三方出售您的个人信息。`,
      },
      {
        heading: '四、信息的存储与安全',
        body: `**存储地点**：您的个人信息将存储于中华人民共和国境内的服务器。如需进行跨境数据传输，我们将依据相关法律法规履行必要的合规程序。

**存储期限**：我们将在实现收集目的所必要的最短期限内保存您的信息。具体而言：

1. 注册账号信息：在您注销账号前持续保存；
2. 商业询盘记录：保存期限不超过3年；
3. 设备信息与日志信息：保存期限不超过1年；
4. 法律法规另有规定的，从其规定。

**安全措施**：我们采用符合行业标准的技术与管理措施保护您的信息安全，包括但不限于：SSL加密传输、访问权限控制、数据备份、去标识化处理。

尽管如此，互联网传输本身存在一定风险，我们无法对绝对安全作出保证。`,
      },
      {
        heading: '五、您的权利',
        body: `依据《个人信息保护法》等相关法律，您对自己的个人信息享有以下权利：

1. **查阅权**：您有权查阅我们持有的关于您的个人信息；
2. **更正权**：若您的信息不准确或不完整，您有权要求更正；
3. **删除权**：在法律允许的范围内，您有权要求删除您的个人信息；
4. **撤回同意权**：若我们基于您的同意处理信息，您可随时撤回该同意；
5. **注销账号权**：您有权注销您的账号，我们将在15个工作日内完成处理；
6. **投诉权**：若您认为我们侵犯了您的个人信息权益，您有权向相关监管机构投诉。

**权利行使方式**：您可以通过本应用"我的"页面中的"个人信息管理"功能自行查阅、更正部分信息，或通过本政策末尾的联系方式联系我们行使其他权利。我们将在15个工作日内予以回复。`,
      },
      {
        heading: '六、第三方SDK使用说明',
        body: `为实现部分功能，我们接入了第三方SDK。所有SDK均在您同意本隐私政策后方可初始化。以下是我们使用的第三方SDK清单：

1. 阿里云OSS SDK（阿里云计算有限公司）：文件存储；收集设备标识信息；隐私政策：https://terms.aliyun.com/legal-agreement/term/privacy
2. 开灵科技SDK（北京开灵科技有限公司）：电子发票；收集订单信息、发票信息；隐私政策：https://www.kailingteck.com
3. 快递100 SDK（深圳前海百递网络有限公司）：快递物流查询；收集快递运单号、手机号；隐私政策：https://www.kuaidi100.com/about/private.shtml
4. 支付宝SDK（支付宝（中国）网络技术有限公司）：支付服务；收集Android ID、OAID、IP地址、设备信息；隐私政策：https://render.alipay.com/p/c/180020570000139469/index.html
5. 微信支付SDK（财付通支付科技有限公司）：支付服务；收集用户标识信息、网络IP地址、订单金额；隐私政策：https://www.tenpay.com/v3/helpcenter/low/privacy.shtml
6. 极光推送SDK（深圳市和讯华谷信息技术有限公司）：消息推送；收集设备标识符（Android ID、OAID、IDFA等）；隐私政策：https://www.jiguang.cn/license/privacy
7. DCloud uni-app（5+ App/Wap2App）（数字天堂（北京）网络技术有限公司）：应用开发框架；收集设备唯一识别码（IMEI/Android ID/IDFA/OAID）；隐私政策：https://dcloud.io/license/appprivacy.html

**重要说明**：我们的产品基于DCloud uni-app（5+ App/Wap2App）开发，应用运行期间需要收集您的设备唯一识别码（IMEI/Android ID/DEVICE_ID/IDFA、SIM卡IMSI信息、OAID）以提供统计分析服务，并通过应用启动数据及异常错误日志分析改进性能和用户体验。`,
      },
      {
        heading: '七、未成年人保护',
        body: `本应用的服务对象为具有完全民事行为能力的成年商业用户。我们不会故意收集未满18周岁未成年人的个人信息。若您发现我们无意间收集了未成年人的信息，请立即联系我们，我们将及时予以删除。`,
      },
      {
        heading: '八、隐私政策的更新',
        body: `我们可能适时修订本隐私政策。当政策发生重大变更时（如信息收集目的、方式、范围发生重大变化），我们将通过应用内弹窗等方式提醒您阅读更新后的政策，并在您重新点击同意后方可继续使用。`,
      },
      {
        heading: '九、联系我们',
        body: `如您对本隐私政策有任何疑问、意见或建议，或希望行使您的个人信息相关权利，可通过以下方式联系我们：

公司名称：杭州绒达科技有限公司
电子邮件：guangmdc0901@gmail.com
工作时间：周一至周五 9:00–18:00（北京时间）

我们将在15个工作日内回复您的请求。`,
      },
      {
        heading: '十、附则',
        body: `本隐私政策的解释、效力及争议解决均适用中华人民共和国法律。若您与本应用发生任何争议，双方应友好协商解决；协商不成的，任何一方均有权向本公司所在地有管辖权的人民法院提起诉讼。`,
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Updated: August 21, 2026\nEffective: August 21, 2026',
    company: 'Hangzhou Rongda Technology Co., Ltd.',
    footer: 'Hangzhou Rongda Technology Co., Ltd. · Sample APP · Samplewear',
    sections: [
      {
        heading: '1. Introduction',
        body: `Hangzhou Rongda Technology Co., Ltd. (hereinafter referred to as "the Company", "we", "us", or "Rongda Technology") understands the importance of your personal information and will protect it in accordance with the Personal Information Protection Law, the Data Security Law, the Cybersecurity Law of the People's Republic of China, and other applicable laws and regulations.

This Privacy Policy applies to your use of the Sample APP developed by the Company (hereinafter referred to as "the App") and any inquiries, consultations, or cooperation requests submitted through the App. Please read this Policy carefully before using the App. When you first launch the App, we will prompt you to read this Privacy Policy through a pop-up or other prominent means, and we will begin collecting your personal information only after you actively tap "Agree". If you do not agree to any term of this Policy, please stop using the App immediately.

We take the protection of your personal information and privacy seriously. This Policy explains how we collect, use, store, and protect your personal information. Please read it carefully and use our products and services only after you fully understand it.`,
      },
      {
        heading: '2. Information We Collect',
        body: `We may collect the following types of information:

**A. Information You Provide Voluntarily**
When you use the App's registration or login features, or submit a cooperation request through an inquiry form, we collect information you provide voluntarily, including but not limited to:

1. Registration and login information: mobile phone number and nickname.
2. Inquiry and cooperation information: name or company name, contact details (phone number, email address), region or country, sample garment type requirements, expected order quantity, color and size requirements, brand information, and any other content you fill in the form.

**B. Automatically Collected Information**
While you use the App, we collect only the information necessary to provide product functions, based on the principles of lawfulness, legitimacy, and necessity, including:

1. Device information: device model and operating system version.
2. Network information: network type and IP address.
3. Log information: access time, page browsing records, and error logs.
4. Identifier information: Android ID, OAID, and, on iOS, IDFA (read only when necessary for statistical analysis, push notifications, and security).

We will not collect your contacts, precise location, microphone, photo album, or other sensitive information unless you expressly authorize us. We will not use your personal information for advertising or user profiling.`,
      },
      {
        heading: '3. Purposes of Collection',
        body: `We collect the above information for the following purposes:

1. Account services: to enable registration, login, and related functions;
2. System operation and security: for error analysis, troubleshooting, and security;
3. Push notifications: to send system notices or necessary business reminders;
4. Feature delivery: such as payments, logistics tracking, file storage, and e-invoicing;
5. Responding to inquiries and cooperation requests: processing sample garment customization, supply chain cooperation, and other business consultations submitted through the form;
6. Providing professional services: matching you with suitable product solutions, fabric resources, and production arrangements;
7. Legal compliance: fulfilling legal obligations and cooperating with lawful requests from regulators.

We will not use your personal information for any commercial marketing unrelated to the above purposes, nor will we sell your personal information to third parties without your explicit consent.`,
      },
      {
        heading: '4. Storage and Security',
        body: `**Storage Location**: Your personal information will be stored on servers within the People's Republic of China. For cross-border data transfers, we will complete the required compliance procedures under applicable laws.

**Retention Period**: We will retain your information for the minimum period necessary to achieve the collection purpose, specifically:

1. Registered account information: retained until you delete your account;
2. Commercial inquiry records: retained for no more than 3 years;
3. Device and log information: retained for no more than 1 year;
4. Where otherwise required by law, such requirements shall prevail.

**Security Measures**: We use industry-standard technical and organizational measures to protect your information, including but not limited to SSL encrypted transmission, access control, data backup, and de-identification.

Internet transmission inherently carries certain risks, and we cannot guarantee absolute security.`,
      },
      {
        heading: '5. Your Rights',
        body: `Under the Personal Information Protection Law and other applicable laws, you have the following rights regarding your personal information:

1. **Right of Access**: You have the right to access the personal information we hold about you;
2. **Right of Rectification**: If your information is inaccurate or incomplete, you have the right to request correction;
3. **Right of Erasure**: To the extent permitted by law, you have the right to request deletion of your personal information;
4. **Right to Withdraw Consent**: Where we process information based on your consent, you may withdraw that consent at any time;
5. **Right to Delete Your Account**: You have the right to delete your account, and we will complete the process within 15 business days;
6. **Right to Complain**: If you believe we have violated your personal information rights, you have the right to file a complaint with the relevant regulatory authority.

**How to exercise your rights**: You may review and correct some information through "Personal Information Management" on the App's "Me" page, or contact us using the details at the end of this Policy to exercise other rights. We will respond within 15 business days.`,
      },
      {
        heading: '6. Third-Party SDKs',
        body: `To provide certain features, we integrate third-party SDKs. All SDKs are initialized only after you agree to this Privacy Policy. The SDKs we use are:

1. Alibaba Cloud OSS SDK (Alibaba Cloud Computing Co., Ltd.): file storage; collects device identifiers; privacy policy: https://terms.aliyun.com/legal-agreement/term/privacy
2. Kailing Technology SDK (Beijing Kailing Technology Co., Ltd.): e-invoicing; collects order and invoice information; privacy policy: https://www.kailingteck.com
3. Kuaidi100 SDK (Shenzhen Qianhai Baidi Network Co., Ltd.): logistics tracking; collects tracking numbers and phone numbers; privacy policy: https://www.kuaidi100.com/about/private.shtml
4. Alipay SDK (Alipay.com Co., Ltd.): payment services; collects Android ID, OAID, IP address, and device information; privacy policy: https://render.alipay.com/p/c/180020570000139469/index.html
5. WeChat Pay SDK (Tenpay Payment Technology Co., Ltd.): payment services; collects user identifiers, network IP address, and order amount; privacy policy: https://www.tenpay.com/v3/helpcenter/low/privacy.shtml
6. JPush SDK (Shenzhen Hexun Huagu Information Technology Co., Ltd.): push notifications; collects device identifiers (Android ID, OAID, IDFA, etc.); privacy policy: https://www.jiguang.cn/license/privacy
7. DCloud uni-app (5+ App/Wap2App) (Digital Heaven (Beijing) Network Technology Co., Ltd.): app development framework; collects unique device identifiers (IMEI/Android ID/IDFA/OAID); privacy policy: https://dcloud.io/license/appprivacy.html

**Important**: Our product is built on DCloud uni-app (5+ App/Wap2App). While the App is running, unique device identifiers (IMEI/Android ID/DEVICE_ID/IDFA, SIM IMSI, and OAID) may be collected for statistical analysis, and launch data and error logs may be used to improve performance and user experience.`,
      },
      {
        heading: '7. Protection of Minors',
        body: `The App is intended for adult commercial users with full civil capacity. We do not intentionally collect personal information from individuals under the age of 18. If you discover that we have inadvertently collected information from a minor, please contact us immediately and we will promptly delete it.`,
      },
      {
        heading: '8. Policy Updates',
        body: `We may revise this Privacy Policy from time to time. When a material change occurs (such as a material change to the purpose, method, or scope of information collection), we will remind you to read the updated Policy through an in-app pop-up or similar means, and you may continue using the App only after you tap Agree again.`,
      },
      {
        heading: '9. Contact Us',
        body: `If you have any questions, comments, or suggestions about this Privacy Policy, or wish to exercise your personal information rights, please contact us through the following:

Company Name: Hangzhou Rongda Technology Co., Ltd.
Email: guangmdc0901@gmail.com
Business Hours: Monday to Friday, 9:00–18:00 (Beijing Time)

We will respond to your request within 15 business days.`,
      },
      {
        heading: '10. Miscellaneous',
        body: `The interpretation, validity, and dispute resolution of this Privacy Policy are governed by the laws of the People's Republic of China. If any dispute arises between you and the App, the parties shall first seek to resolve it through friendly negotiation; if negotiation fails, either party may file a lawsuit with the competent People's Court at the Company's location.`,
      },
    ],
  },
  ko: {
    title: '개인정보 처리방침',
    updated: '업데이트: 2026년 8월 21일\n시행일: 2026년 8월 21일',
    company: '항저우 룽다 테크놀로지 유한공사',
    footer: '항저우 룽다 테크놀로지 유한공사 · Sample APP · Samplewear',
    sections: [
      {
        heading: '1. 총칙',
        body: `항저우 룽다 테크놀로지 유한공사(이하 "당사", "저희" 또는 "룽다 테크놀로지")는 귀하의 개인정보 중요성을 잘 알고 있으며, 「중화인민공화국 개인정보보호법」, 「데이터보안법」, 「사이버보안법」 및 관련 법령에 따라 개인정보를 보호합니다.

본 개인정보 처리방침은 당사가 개발한 Sample APP(이하 "본 앱") 이용 및 본 앱을 통해 제출된 모든 문의, 상담 또는 협력 요청에 적용됩니다. 본 앱 이용 전 본 방침을 주의 깊게 읽어주시기 바랍니다. 본 앱을 처음 실행할 때 팝업 등 명확한 방식으로 본 방침을 안내하며, 귀하가 "동의"를 직접 선택한 후에만 개인정보 수집을 시작합니다. 본 방침의 어떤 조항에도 동의하지 않으시면 즉시 본 앱 이용을 중단해 주시기 바랍니다.

당사는 귀하의 개인정보와 프라이버시 보호를 매우 중요하게 생각합니다. 본 방침은 개인정보의 수집, 이용, 보관 및 보호 방식을 설명합니다. 충분히 이해하신 후 제품과 서비스를 이용해 주시기 바랍니다.`,
      },
      {
        heading: '2. 수집하는 정보',
        body: `당사는 다음과 같은 유형의 정보를 수집할 수 있습니다:

**가. 귀하가 자발적으로 제공하는 정보**
본 앱의 회원가입·로그인 기능을 이용하거나 문의 양식을 통해 협력 요청을 제출하실 때, 귀하가 자발적으로 제공하는 정보를 수집합니다. 여기에는 다음이 포함될 수 있습니다:

1. 회원가입 및 로그인 정보: 휴대전화번호, 닉네임.
2. 문의 및 협력 정보: 성명 또는 회사명, 연락처(전화번호, 이메일), 지역 또는 국가, 샘플 의류 유형, 예상 주문 수량, 색상 및 사이즈, 브랜드 정보 및 양식에 작성하신 기타 내용.

**나. 자동으로 수집되는 정보**
본 앱 이용 과정에서 적법·정당·필요 원칙에 따라 기능 구현에 필요한 정보만 수집합니다. 여기에는 다음이 포함됩니다:

1. 기기 정보: 기기 모델, 운영체제 버전.
2. 네트워크 정보: 네트워크 유형, IP 주소.
3. 로그 정보: 접속 시간, 페이지 열람 기록, 오류 로그.
4. 식별자 정보: Android ID, OAID, iOS의 경우 IDFA(통계 분석, 푸시 알림 및 보안을 위해 필요한 경우에만 읽음).

명시적 동의 없이 주소록, 정밀 위치, 마이크, 앨범 등 민감정보를 수집하지 않습니다. 개인정보를 광고 또는 이용자 프로파일링에 사용하지 않습니다.`,
      },
      {
        heading: '3. 정보 수집 목적',
        body: `위 정보는 다음 목적으로 수집됩니다:

1. 계정 서비스: 회원가입, 로그인 등 기능의 정상 이용 보장;
2. 시스템 운영 및 보안: 오류 분석, 장애 점검, 보안 보장;
3. 푸시 알림: 시스템 공지 또는 필요한 업무 안내 제공;
4. 기능 구현: 결제, 물류 조회, 파일 저장, 전자세금계산서 등;
5. 문의 및 협력 요청 응대: 샘플 의류 맞춤, 공급망 협력 등 상업 상담 처리;
6. 전문 서비스 제공: 제품 솔루션, 원단 자원 및 생산 일정 매칭;
7. 법적 준수: 법령상 의무 이행 및 규제 기관의 적법한 요청 협조.

당사는 위 목적과 무관한 상업적 마케팅에 개인정보를 사용하지 않으며, 명시적 동의 없이 제3자에게 판매하지 않습니다.`,
      },
      {
        heading: '4. 정보 보관 및 보안',
        body: `**보관 위치**: 귀하의 개인정보는 중화인민공화국 내 서버에 보관됩니다. 국경 간 이전 시 관련 법령에 따른 필요한 준수 절차를 이행합니다.

**보관 기간**: 수집 목적 달성에 필요한 최소 기간 동안 보관합니다. 구체적으로는 다음과 같습니다:

1. 회원가입 계정 정보: 계정 삭제 전까지 보관;
2. 상업 문의 기록: 3년을 초과하지 않음;
3. 기기 정보 및 로그 정보: 1년을 초과하지 않음;
4. 법령에 다른 규정이 있는 경우 해당 규정을 따름.

**보안 조치**: SSL 암호화 전송, 접근 권한 제어, 데이터 백업, 가명처리 등 업계 표준의 기술·관리 조치를 사용합니다.

다만 인터넷 전송에는 고유한 위험이 있으며 절대적인 보안을 보장할 수 없습니다.`,
      },
      {
        heading: '5. 귀하의 권리',
        body: `「개인정보보호법」 등 관련 법률에 따라 귀하는 다음과 같은 권리를 가집니다:

1. **열람권**: 당사가 보유한 귀하의 개인정보를 열람할 권리;
2. **정정권**: 정보가 부정확하거나 불완전한 경우 정정을 요청할 권리;
3. **삭제권**: 법률이 허용하는 범위 내에서 개인정보 삭제를 요청할 권리;
4. **동의 철회권**: 동의에 기반한 처리인 경우 언제든지 동의를 철회할 권리;
5. **계정 삭제권**: 계정을 삭제할 권리. 당사는 15 영업일 이내에 처리합니다;
6. **민원 제기권**: 개인정보 권리가 침해되었다고 판단되는 경우 관련 규제 기관에 민원을 제기할 권리.

**권리 행사 방법**: 본 앱의 "마이" 페이지에 있는 "개인정보 관리"에서 일부 정보를 직접 열람·정정하거나, 본 방침 말미의 연락처로 그 외 권리를 행사하실 수 있습니다. 15 영업일 이내에 회신드리겠습니다.`,
      },
      {
        heading: '6. 제3자 SDK 안내',
        body: `일부 기능 구현을 위해 제3자 SDK를 연동합니다. 모든 SDK는 본 방침에 동의하신 후에만 초기화됩니다. 사용 중인 SDK는 다음과 같습니다:

1. 알리바바 클라우드 OSS SDK(알리바바 클라우드 컴퓨팅): 파일 저장; 기기 식별 정보 수집; 개인정보 처리방침: https://terms.aliyun.com/legal-agreement/term/privacy
2. 카이링 테크 SDK(베이징 카이링 테크놀로지): 전자세금계산서; 주문·세금계산서 정보 수집; 개인정보 처리방침: https://www.kailingteck.com
3. 콰이디100 SDK(선전 첸하이 바이디 네트워크): 택배 조회; 운송장 번호 및 휴대전화번호 수집; 개인정보 처리방침: https://www.kuaidi100.com/about/private.shtml
4. 알리페이 SDK(알리페이닷컴): 결제; Android ID, OAID, IP 주소, 기기 정보 수집; 개인정보 처리방침: https://render.alipay.com/p/c/180020570000139469/index.html
5. 위챗페이 SDK(텐페이): 결제; 이용자 식별 정보, 네트워크 IP, 주문 금액 수집; 개인정보 처리방침: https://www.tenpay.com/v3/helpcenter/low/privacy.shtml
6. JPush SDK(선전 허쉰화구 정보기술): 푸시 알림; 기기 식별자(Android ID, OAID, IDFA 등) 수집; 개인정보 처리방침: https://www.jiguang.cn/license/privacy
7. DCloud uni-app(5+ App/Wap2App)(디지털 헤븐(베이징) 네트워크 테크놀로지): 앱 개발 프레임워크; 기기 고유 식별코드(IMEI/Android ID/IDFA/OAID) 수집; 개인정보 처리방침: https://dcloud.io/license/appprivacy.html

**중요 안내**: 본 제품은 DCloud uni-app(5+ App/Wap2App)을 기반으로 개발되었습니다. 앱 실행 중 통계 분석을 위해 기기 고유 식별코드(IMEI/Android ID/DEVICE_ID/IDFA, SIM IMSI, OAID)가 수집될 수 있으며, 실행 데이터와 오류 로그를 통해 성능과 이용 경험을 개선합니다.`,
      },
      {
        heading: '7. 미성년자 보호',
        body: `본 앱은 완전한 민사 행위 능력을 가진 성인 상업 사용자를 대상으로 합니다. 당사는 18세 미만 미성년자의 개인정보를 의도적으로 수집하지 않습니다. 미성년자 정보가 수집된 것을 발견하시면 즉시 연락해 주시기 바라며, 신속히 삭제하겠습니다.`,
      },
      {
        heading: '8. 방침 업데이트',
        body: `당사는 본 개인정보 처리방침을 필요에 따라 개정할 수 있습니다. 정보 수집의 목적, 방식, 범위에 중대한 변경이 있는 경우 앱 내 팝업 등으로 업데이트된 방침을 안내하며, 다시 "동의"를 선택하신 후에만 계속 이용하실 수 있습니다.`,
      },
      {
        heading: '9. 문의처',
        body: `본 개인정보 처리방침에 관한 질문, 의견, 제안이 있거나 개인정보 관련 권리를 행사하시려면 다음 연락처로 문의해 주시기 바랍니다:

회사명: 항저우 룽다 테크놀로지 유한공사
이메일: guangmdc0901@gmail.com
업무 시간: 월–금 9:00–18:00 (베이징 시간)

요청은 15 영업일 이내에 회신드립니다.`,
      },
      {
        heading: '10. 부칙',
        body: `본 개인정보 처리방침의 해석, 효력 및 분쟁 해결에는 중화인민공화국 법률이 적용됩니다. 본 앱과 관련된 분쟁은 먼저 우호적 협의로 해결하며, 협의가 이루어지지 않을 경우 어느 당사자든 당사 소재지 관할 인민법원에 소송을 제기할 수 있습니다.`,
      },
    ],
  },
};

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
  const parts = text.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (/^https?:\/\//.test(part)) {
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer" style={{ color: '#8B7355' }}>
          {part}
        </a>
      );
    }
    if (/^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`} style={{ color: '#8B7355' }}>
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
    ? PRIVACY_CONTENT[currentLang]
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
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
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
            fontSize: '0.95rem',
            color: '#9A9590',
            margin: 0,
            whiteSpace: 'pre-line',
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
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#1A1A1A',
                letterSpacing: '0.05em',
                margin: '0 0 1rem',
              }}>
                {section.heading}
              </h2>
              <div style={{
                fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
                fontSize: '1.125rem',
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
            fontSize: '0.9rem',
            color: '#9A9590',
            margin: 0,
          }}>
            {'footer' in content && content.footer
              ? content.footer
              : '© 2025 杭州绒达科技有限公司 · 浙ICP备2025188038号-1'}
          </p>
        </div>
      </div>
    </div>
  );
}
