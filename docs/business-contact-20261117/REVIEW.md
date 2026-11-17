# 绒达官网审查与企业微信咨询第一轮交付

审查日期：2026-11-17。仅本地开发，未推送、部署或修改生产配置。

## 项目与安全基线

- 仓库：`https://github.com/zylen-seoul/RONDA-CN-SITE.git`。React 19、TypeScript、Vite 7、Tailwind 4、Wouter、Framer Motion；CSS 由 shell-v2/home-v2/terminal-pages/contact-section 和组件样式组成。
- 路由：App.tsx 以 normalizeRoute 去掉语言前缀并选择页面；LanguageContext 以路径解析 zh/en/ko，localizedPath 保持相同语言。新增咨询文案为同一三语机制下独立字典。
- 构建：pnpm install --frozen-lockfile → pnpm run build，输出 dist/public；额外 Express 服务仅为本地/独立 Node 托管选项。GitHub Actions 的 deploy.yml 在 main push 时发布 GitHub Pages。
- 线上 HTTP 响应为 GitHub.com；首页正文、路由与项目 SEO manifest 对应。是独立代码站，无 Framer/Wix 托管证据。代码构建可以更新官网，但仍需有权限的账号推送正确分支并完成部署。
- 起点提交：`3c04b9d728c78619bd78535bc161755af3a5b3da`。新分支 `codex/business-contact-20261117`。远程 main 只读查询为 `739880305e2028896b731b12953b008a46c4dbed`；本地起点与远程分叉，ahead 5 / behind 2。远程独有修改涉及隐私页面、SEO manifest 和生成脚本。未自动合并，避免覆盖双方隐私版本；上线前需要技术人员比对合并。
- 原有 .DS_Store 修改及未跟踪的图片、PPT、tmp 等均保留，未加入功能提交。回退仅需回退本轮功能提交，不应对整个工作区执行 reset/clean。

## 咨询入口与本轮实现

原有首页主 CTA、六个产品详情首屏/页尾、服务流程及关于页末尾均指向 inquiry。联系页主要依赖共享 ContactSection，后者链接写死 /inquiry/，切换语言会丢失前缀。询盘页仅准备 mailto 邮件，并非真实后台收单系统。

新增 BusinessContact（Provider + Trigger）统一接入首页主按钮、六品类详情、服务/关于等 TerminalCTA、联系页及共享联系区域。保留原有电话、邮箱、社交联系和询盘页面。桌面端右下角轻量悬浮入口；手机端沿用页面内 48px 起的大按钮，避免浮层遮挡正文、Cookie UI 或其他操作。桌面返回顶部按钮移至咨询入口上方。

面板使用项目现有 Radix Dialog 依赖：标题和描述关联、焦点限制与恢复、Esc/遮罩/关闭按钮关闭、滚动锁定、小屏高度滚动及安全区域。真实 QR 配置后支持图片展示、同源下载、手机长按保存和微信相册识别说明。图片失败时显示电话/邮件备用入口，隐藏下载及直达按钮。

### 待接入与生产保护

配置文件：`client/src/config/businessContact.ts`。

1. 提供并确认**吴翔专属企业微信联系二维码原图**及使用授权/有效期。现有公司通用企业微信二维码未证实属于吴翔，不能直接冒用。
2. 将真实图片放入 client/public/business-contact，设置 qrImage 同源路径，并在业务确认与扫码验收后将 qrVerified 改为 true。
3. 官方直达链接可选。仅接受 HTTPS work.weixin.qq.com；用 iOS/Android、微信内外分别验证后才能设置 officialLinkTested=true。没有链接时只使用二维码方案，不猜测 deep link。
4. 当前无专属 QR：开发模式显示文字“待接入”，不生成假码；生产模式不渲染此悬浮入口与待接入面板，原主 CTA 回退到对应语言的询盘页。因此当前生产构建不等于已启用吴翔企业微信获客。
5. 保存/识别依赖终端微信版本和相册权限，自动化下载已验证；真实手机扫码、正确添加吴翔及官方直达仍待真实素材后人工验收。

统计：main.tsx 已有可选 Umami 配置钩子；检查的线上 JS 未发现启用的 Umami 加载地址，尚无证据证明生产统计已启用。本轮仅在 window.umami 存在时调用现有 track，不安装第三方脚本，不上传联系方式、URL 查询参数或用户身份。事件：business_contact_click / qr_view / qr_save / direct_click；仅发送来源标签及语言。qr_view 只在加载成功并打开面板后记录，每次打开一次。点击、展示和下载都不代表加好友数。建议未来按隐私评估选择现有 Umami 或自托管聚合统计，并用经业务确认的 CRM 数据核算有效线索。

## 技术 SEO 审查

证据：live-seo.json（15 个生产 URL：5 类页面 × 中英韩），通过 curl 获取原始 HTML；不是以浏览器 DOM 动态补充标签冒充静态可抓取内容。

- robots.txt 可访问，Allow /，声明正确 sitemap 地址。
- sitemap.xml 包含 42 个 URL（14 个可索引页面 × 3 语言）；另外 privacy/terms/inquiry 不入索引列表与 manifest 一致。站点本地生成 51 个三语路由页面。
- 15 个抽查页面均有独立 title/description、自指 canonical、zh-CN/en/ko/x-default 四个 alternate，以及 OG 基础字段。
- 均有 JSON-LD Organization/WebSite/WebPage 及适用页面的 BreadcrumbList、产品页 Service；未发现虚构评分或评论。Schema 语法可解析；Google 实际收录/富结果及 Search Console 状态待账号核实。
- 原始 HTML 中有 data-seo-prerender 静态摘要、导航和主要文本；React 启动后替换为交互页面。摘要不是完整 React 页面 SSR，后续内容变化需要同步维护 shared/seo-pages.json，避免摘要与实际业务正文漂移。
- 15 个页面均缺少 og:image。建议业务确认真实公司/产品照片后生成分享卡，并补全尺寸与 alt；本轮未新造素材。
- 抽查随机不存在路径 `/ronda-audit-not-found-20261117/` 返回真实 HTTP 404。Express 的兜底仍将未知路径返回 index/200：如未来切换 Node 托管需要修复；当前 GitHub Pages 路径未见此问题。
- 图片 alt：组件源码的首页、产品详情与现有社交二维码有描述；Sample App 使用英文通用 Screen 1–5，三语语义可改善。原始 SEO 摘要不含主视觉图片，不能据此判断动态页面断图。本轮未将未加载的 lazy 图片或 CDN 未授权响应直接当作生产断图。
- 首页及各页“15–20天交付”“15–30天参考”“15–30工作日”并存。推荐业务确认后统一为“常规大货生产约15–30个工作日，自产前样及材料确认后计算，具体以项目排期为准”，并确认是否含物流和法定假日。此为建议，未修改现有交期承诺。
- 无障碍遗留项：client/index.html viewport 含 maximum-scale=1，限制缩放；旧二维码面板、返回顶部语言、旧翻译文案可后续专项处理。本轮对新面板提供完整键盘支持。

## 内容与后续转化建议（本轮不改业务口径）

- 首页公司介绍两段较长，与关于页及数字化模块重复。建议缩为“服务品类 + 100件评估起点 + 项目协作方式”三句，将跨国协作背景留到关于页。
- 产品页已有品类差异化结构，建议保留 focus/materials/sampleChecks，压缩页尾重复的全链路宣传；CTA旁突出发送款式图、数量、目标时间这三项准备资料。
- 中英韩旧翻译字典里仍留有 2000+ 工厂、48小时、15–25天等旧文案：需区分实际路由使用位置和未引用条目，再由业务确认统一，不能全局替换数字。
- 真实案例可独立建 caseStudies 数据模型（授权状态、项目范围、品类、可公开图片、结果的来源与日期），授权通过才显示；APP截图继续使用真实本地图片并提供说明字段；需求表单以后可复用 Inquiry 数据字段并接入经授权的收单接口。未造案例、未新增品牌背书，未接触真实订单及企业微信管理 API。

## 验收与限制

- TypeScript 与生产构建通过；51 个静态路由生成成功；git diff --check 通过。包体有现有的 >500KB 警告（本轮产物约802KB minified），可后续做按路由拆包。
- package.json 未提供 lint 命令/ESLint 配置；未声称 Lint 已通过。原仓库无测试文件，本轮新增 businessContact.test.ts 的 2 项配置保护测试，均通过，覆盖二维码确认状态、同源图片路径、官方链接 HTTPS/域名及人工测试开关。
- 独立浏览器验收脚本 scripts/check-business-contact.mjs，使用本机 Chrome，覆盖首页、六个产品详情、服务流程、关于、联系共10个页面，中英韩及1440/390/360px共90组检查。结果见 test-results.json，18张截图见 screenshots/。检查页面无横向溢出、面板、Tab焦点限制、Esc/遮罩关闭、焦点恢复。二维码保存/失败使用浏览器内临时替换配置和现有公司二维码作 QA fixture；未写入真实吴翔配置或发布素材，不代表业务扫码验收。
- 本轮未上线。上线前：处理远程分叉与隐私版本、补齐吴翔真实二维码并确认归属、真机扫码和官方链接验收、用户确认上线。固定 dock 若未来启用，必须再次与 Cookie 提示协调；本轮手机使用页面内 CTA 避免该遮挡问题。

## 修改文件清单

新增：components/BusinessContact.tsx、config/businessContact.ts、config/businessContact.test.ts、business-contact.css、scripts/check-business-contact.mjs、scripts/audit-live-seo.mjs、本审查文档及测试/截图证据。

修改：SiteShell.tsx（Provider）、HomeEditorial.tsx（首页CTA）、ProductDetail.tsx（6品类CTA）、TerminalContent.tsx（共用页尾CTA）、Contact.tsx（联系页入口）、ContactSection.tsx（共享联系按钮）、ScrollToTop.tsx（浮动控件错位）。没有改动 SEO manifest、隐私内容或业务承诺。
