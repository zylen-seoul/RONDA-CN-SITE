# 企业微信咨询第二轮交付

日期：2026-11-17。分支：codex/business-contact-20261117，起点提交：810c297。本轮仅本地修改和测试，未推送、部署、合并或覆盖远程 main。隐私政策、询盘发送实现及真实订单系统未修改。

## 入口与视觉

- 首页“提交合作需求”、六个产品详情的品类需求按钮，以及 TerminalCTA 的需求提交按钮恢复普通链接，直接打开当前语言的 /inquiry/、/en/inquiry/、/ko/inquiry/，无需经过联系弹窗。
- 微信咨询独立：桌面悬浮入口保留；首页首屏增加独立微信按钮，手机也可操作；六个产品详情增加独立微信咨询按钮。企业微信专用按钮只打开联系面板，未验证的生产版本隐藏该按钮，不将它伪装成表单入口。
- 联系页保留原电话、邮箱及7个媒体/即时通讯二维码。中文联系入口优先企业微信；英文联系页优先跳到 WhatsApp/KakaoTalk 区，韩文优先 KakaoTalk/WhatsApp 区。即时通讯二维码按中文企业微信、英文WhatsApp、韩文KakaoTalk优先排列；原有通用企业微信二维码也保留，不冒充吴翔专属二维码。
- 弹窗桌面宽560px，QR宽高200px，保持米白、棕金配色。吴翔姓名/职责及QR为核心，手机紧凑间距；邮箱/电话在次要双列区域，最底部保留当前语言的项目表单链接。
- 姓名一致为吴翔 / Wu Xiang / 우샹 (Wu Xiang)，职责一致为业务负责人 / Business Lead / 비즈니스 책임자；公司名称采用杭州绒达科技的三语名称。

## 真实二维码与验证保护

已找到 docs/contact_me_qr (1).png，其内容与 Downloads 同名文件一致。原样复制到 client/public/business-contact/wu-xiang-wecom.png（396×396 RGBA），未裁剪、修改、重绘或生成二维码。

config/businessContact.ts 的 qrImage 指向该资源。previewQrPath 仅为合法同源图片路径提供预览；DEV模式显示真实图片，并提示等待本人扫码确认。qrVerified **仍为false**。生产模式只允许 verifiedQrPath 返回的已验证资源显示，未验证不显示悬浮/独立微信入口，原表单链接照常可用。静态构建中包含用户要求添加的真实图片文件，但生产组件不会展示或宣称已验证。

officialLink 保持空，officialLinkTested保持false；链接需要官方HTTPS且精确域名 work.weixin.qq.com，并经真机测试才能启用。当前不解码、复制或输出二维码完整客户联系地址，也不向统计事件传入它。用户提供的域名说明不等于本人身份及真机测试通过。本轮没有打开或验证二维码的官方直达链接，没有启用手机一键添加。

统计仍仅使用现有可选Umami接口，数据仅为事件来源标签和语言。不记录QR识别地址、客户输入或个人资料。二维码展示、图片保存和点击均不代表添加好友成功。

## 现有询盘表单完整代码核查

检查文件：client/src/pages/Inquiry.tsx、client/src/components/InquiryPage.tsx、LanguageContext.tsx、server/index.ts、package.json及部署workflow。

1. 浏览器原生 required 验证样衣类型和联系方式；前端保存表单字段于React useState。没有数据库或持久化收单记录。
2. 提交处理 e.preventDefault，逐项取出样衣类型、是否有样品、数量、颜色、尺码、地区、品牌、联系方式及补充说明。过滤空值，使用当前语言的字段名称拼成多行邮件正文。
3. 邮件主题为 Samplewear + 品牌/品类/默认标题，正文附 Source: https://www.samplewear.com/inquiry/（三种语言均写此中文来源路径，属于现有实现）。主题和正文经 encodeURIComponent 后拼入 mailto。
4. 先 setSubmitted(true)，再将 window.location.href 设置为 mailto:zylen@samplewear.com?subject=...&body=...，最后重置submitting。浏览器尝试打开用户已配置的邮件应用；**用户仍须在邮件应用中点击发送**。用户取消、未配置邮件应用或邮件投递失败，网站无法获知。页面“邮件已准备”仅表示前端准备完成。
5. 实际预填收件地址：zylen@samplewear.com；成功页面的备用邮件链接也是此地址。本轮未改收件地址或流程。
6. 没有fetch/axios提交，没有服务器接收POST、数据库写入、SMTP/API邮件发送。server/index.ts只提供静态文件与SPA兜底路由；GitHub Pages部署的产物为dist/public，不会运行此Node服务。
7. 当前代码未设置表单字段长度限制，没有后端校验、服务端限流或重复提交去重。mailto长度与终端邮件客户端能力有关；生成完成不能被统计成线索收单或邮件送达。

## 在线表单升级建议（仅设计，未接入）

建议保留GitHub Pages前端，在**公司自有云账号**下新增一个小型HTTPS无服务器接收接口；优先选择团队熟悉、区域与客户访问情况合适的云服务。例如阿里云函数计算HTTP触发器。表单托管SaaS配置更少，但会把询盘数据引入额外供应商，本轮不推荐未经评估直接接入。

建议最小可靠版本：一个接收函数 + 一张私有小表（持久化、幂等和失败重试状态）+ 公司现有邮箱服务的SMTP/API。若现有邮箱不提供服务端发送权限，再比较经公司批准的事务邮件服务，不在前端放任何邮箱密码/API密钥。

提交处理步骤：

1. 前端 POST JSON 到公司受控API域名，传入限定字段、语言及页面路径；不上传附件，不附浏览历史。浏览器使用HTTPS，服务端限制请求体大小、字段长度/类型并过滤控制字符与邮件头注入。
2. 公共询盘接口不能把“API密钥”嵌进前端。结合短期速率限制、蜜罐字段和时间阈值防垃圾请求；必要时再经隐私评估增加挑战。CORS只允许正式官网/批准的预览域，但不把CORS当作鉴权或防滥用手段。
3. 先写入私有表形成唯一询盘编号及幂等键，再发送邮箱通知。服务端固定收件人为zylen@samplewear.com；固定已认证的发件身份，经过校验的客户邮箱仅可用于Reply-To，不允许客户控制任意收件人或发件人。
4. 通知失败保留待重试状态，通过定时任务重试并告警；超时或服务异常前端保留输入，不显示成功。成功含义区分“服务器已接收”与“邮件服务已接受”，都不宣称客户邮件已经送达或人员已经回复。
5. 返回仅含询盘编号和状态。后台权限限制为业务负责人/授权员工。默认应用日志只保留编号、状态、错误码及耗时，禁止记录请求正文、客户联系方式和二维码识别地址。基础设施安全日志另设最小保留期和访问限制。
6. 建议持久化询盘90天后自动删除（最终期限由业务和隐私负责人确认），限流标识采用短期、可过期策略；不为统计创建永久客户画像。收单前补充网站表单隐私说明、处理目的/存储区域/期限/删除联系方式，提交时仅采集业务所需信息。
7. 不改现有APP隐私政策来冒充网站表单授权。新增网站表单声明需要另行审核。大陆/跨境部署区域、网站域名备案及数据安排按实际方案确认，当前不作合规认证结论。

成本控制：低量B2B询盘适合按调用量计费的函数与小容量存储，不必先维护常开服务器、CRM或大型数据库。先估算每月提交量、恶意请求、出网/邮件/存储、日志保留和域名费用，设置用量预算与限流；不承诺永久免费或虚构固定报价。最省配置的“仅函数发邮件”可试用，但邮件失败后缺乏可靠收单凭据，因此建议保留最小私有表。

官方参考（2026-11-17核对）：

- GitHub Pages为静态HTML/CSS/JS托管：[GitHub说明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)。
- HTTP请求调用函数及触发器配置：[阿里云函数计算](https://www.alibabacloud.com/help/en/functioncompute/configure-an-http-trigger-for-a-function-and-invoke-the-function-by-using-http-requests)。
- 若选独立邮件服务，需遵守供应商发送规则与配额：[阿里云邮件发送FAQ](https://www.alibabacloud.com/help/en/direct-mail/email-sending-faqs)。具体采用现有邮箱SMTP还是API待确认邮箱供应商与授权范围。

## 测试与交付文件

新版浏览器验收：scripts/check-business-contact-round2.mjs，使用现有本机Chrome，测试10个页面×3语言×3屏宽（1440/390/360），输出test-results.json与screenshots/下18张首页/面板截图。实际下载文件与原始QR做SHA256内容比对；检查页面内QR完整边界与180–220px尺寸、桌面面板520–620px、首屏双入口、表单直接跳转、Tab/Esc/遮罩关闭、焦点恢复、7个旧渠道保留、WhatsApp/Kakao旧二维码弹窗、图片失败备用入口及生产未验证保护。

最终结果：90组页面/三语/屏宽检查通过，9组原图下载内容比对通过，二维码失败备用入口与生产保护通过；TypeScript通过，Vite/esbuild构建通过并生成51个三语路由，Vitest 3项配置保护测试通过，git diff --check通过。另只读补查/inquiry/三语言×1440/390/360px共9组，均无横向溢出；没有修改询盘页面代码。无Lint脚本。已有bundle体积超过500KB提示仍存在。未用自动化触发真实邮件客户端发信。

修改：BusinessContact.tsx、business-contact.css、businessContact.ts、businessContact.test.ts、HomeEditorial.tsx、TerminalContent.tsx、ProductDetail.tsx、Contact.tsx、ContactSection.tsx。新增：public/business-contact/wu-xiang-wecom.png、check-business-contact-round2.mjs、本报告、测试结果及截图。原始docs/contact_me_qr (1).png继续保留；未改隐私文件、InquiryPage、部署workflow或远程仓库。

待验证：用户确认吴翔本人已扫码核实身份与二维码可用性后才能改qrVerified；iOS/Android微信内外的相册识别/长按保存由真机验收；官方联系链接需提供/核对并真机测试后才能开启。任何上线仍需用户后续确认。本轮完成后停留本地等待验收。
