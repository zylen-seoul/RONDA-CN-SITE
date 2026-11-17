# 绒达官网正式发布前检查

日期：2026-11-17。当前分支：codex/business-contact-20261117。第三轮基线：fb39783。

## 结论

**A：代码与本地生产预发布检查满足本轮上线准备条件，可以在用户最终确认后进入正式发布。** 本轮未把功能分支合并进入main，未推送，未运行生产部署；本地预发布不等于官网已更新，也不冒充GitHub Actions远程构建已经运行。最终本地交付提交号以本轮回复及 git log -1 为准。

当前没有二维码身份或代码同步阻塞项。官方一键直达链接未验证，按要求关闭，不属于二维码方案发布阻塞。实际部署仍需有仓库写入权限的账号，并在部署完成后对正式域名做线上验收。

## 二维码人工验证与手机路径

用户已在本轮明确确认：二维码来自企业微信管理员后台“客户联系”，已使用普通微信扫码，能够正常添加吴翔。本报告以该确认作为已完成人工身份/有效性验证的依据，不再要求重复验证。

- qrVerified=true；officialLinkTested=false；officialLink保持空。
- 资源：client/public/business-contact/wu-xiang-wecom.png，396×396 PNG，内容与用户原图一致，SHA256：48ab6a72bb2e587b5f7a8eaae27a1cc24fddc59ae94eebcd4f4d8e5abffbd170。
- 生产构建包含该图片，页面正式显示企业微信咨询入口，开发预览不再显示待验证提示。
- 旧卡片原资源为 /media-qr/wechat-work.png，与上述文件不同，旧图没有本轮吴翔身份验证记录。仅凭图片不同无法断定两者后台归属不同，因此不将旧图认定为吴翔专属码。
- 最小修正：保留联系区域已有企业微信二维码卡片的位置、图标和外观，统一从 verifiedQrPath 配置读取已验证吴翔图片。点击此卡片复用现有 BusinessContact 面板，包含保存图片、微信相册识别说明、邮箱、电话和当前语言的项目需求链接。没有新增重复按钮，没有删除旧资源文件或其他联系渠道。
- 手机首页/品类详情还保留第二轮的页面内微信咨询按钮。服务、关于、联系页的手机用户可以使用原有即时通讯区企业微信卡片。桌面悬浮入口照常显示，手机仍隐藏桌面固定按钮。
- 自动化验证的是浏览器显示、二维码完整边界和原图下载；普通微信实际扫码及成功添加由用户本轮确认。没有声称在代理环境内操作了真实手机或完成官方直达链接测试。
- 未识别、输出或在统计中记录二维码完整客户联系URL；事件仍只含来源标签和语言，不含客户信息。点击和下载不作为实际添加好友数。

## Git同步与回退

1. 已执行git fetch origin。远程main为739880305e2028896b731b12953b008a46c4dbed，独有提交为fec7f36及7398803。
2. 同步前功能分支相对origin/main：领先8、落后2。远程独有变更仅4个文件：client/public/privacy/index.html、client/src/components/PrivacyPolicyPage.tsx、scripts/generate-seo-pages.mjs、shared/seo-pages.json，无其他远程独有业务改动。
3. 在当前功能分支执行非快进合并，合并提交e7fa74a，父提交为fb39783和7398803，未重写已有历史。所有原功能提交及两条远程提交均保留。没有把功能合并进入main，也没有移动远程main。
4. PrivacyPolicyPage发生内容冲突，按远程最新政策版本完整保留。其他3个远程文件与origin/main字节一致。远程PrivacyPolicyPage带有TypeScript footer字段收窄错误，本轮仅在条件表达式增加 typeof content.footer === 'string'，正文、日期、SDK清单和联系方式与远程版本保持一致。
5. 中文生产隐私页沿用远程手写静态HTML，生成脚本的“不覆盖该文件”逻辑已保留；dist/public/privacy/index.html与源文件字节一致。中英韩应用内隐私和原有服务条款使用远程最新组件内容。
6. 同步后origin/main是当前分支祖先，落后提交数为0。本轮未更改main历史、未执行force push。回退基线另保存在本地分支codex/pre-release-baseline-20261117，指向fb39783。
7. 用户原有.DS_Store改动、PPT、图片目录、临时文件及原始二维码等未跟踪文件均保留，不纳入本轮提交。

## 正式生产构建与验证

构建使用NODE_ENV=production、Vite --mode production，执行项目既有Vite → esbuild → generate-seo-pages流程。无开发占位码，没有新增第三方脚本或后端。

- TypeScript检查通过，3项Vitest配置保护测试通过，生产构建通过，git diff --check通过。
- 本地运行Node v24.18.1、Vite 7.1.9；既有GitHub Actions配置为Node 20及packageManager指定的pnpm 10.4.1。本轮未运行远程CI，不宣称完全复现了云端运行环境。依赖及锁文件未修改，另在隔离临时目录使用本地pnpm 10.18.1执行离线 frozen-lockfile/lockfile-only/ignore-scripts 校验通过。
- 正式构建静态目录为dist/public，生成51个三语页面、robots.txt、sitemap.xml和404.html、.nojekyll。保留远程中文静态隐私页。所有51个页面及其HTML内引用的本地JS/CSS/图片路径返回200；嵌套路由相对资源路径正确。
- 生产浏览器验收脚本scripts/check-release-readiness.mjs。覆盖首页、六品类详情、服务、关于、联系共10页×中英韩×1440/390/360px，共90组。检查生产QR实际加载、无开发提示/未测直达、手机原卡片打开面板、保存原图、完整QR边界、Tab焦点、Esc关闭恢复、无横向溢出、顶部联系页与底部/页脚询盘路径以及七类原联系渠道保留。
- 联系页三语×三种尺寸的9次图片下载均与原始文件字节一致。生产截图见screenshots/。
- 另验证三语隐私政策、服务条款和询盘共9页；政策为10章，原服务条款为9章。中英韩切换保留当前页面路径。开发环境也可加载正式验证QR。
- InquiryPage.tsx、Navbar.tsx、Footer.tsx及business-contact.css相对fb39783无修改。询盘仍生成mailto到zylen@samplewear.com，本轮未触发真实发信、未接入服务器收单或数据库。
- 无现成Lint脚本。既有主JS bundle超过500KB提示仍存在（本轮约804KB minified），属于后续性能优化项，不阻塞此次入口与二维码上线准备。

## 实际部署方式与待最终确认

官网当前只读HTTP检查返回200，server为GitHub.com，既有部署为GitHub Pages。工作流.github/workflows/deploy.yml在main收到push后安装冻结锁文件依赖、构建dist/public并通过actions/deploy-pages发布；平台已有自定义域名配置在仓库托管设置中，本轮未更动域名、权限或任何生产敏感配置。

后续经用户最终确认，由有权限的发布人员将已包含最新origin/main的功能版本合并到main并推送，等待Actions成功，再验收https://www.samplewear.com/。本轮没有执行这些发布步骤。工作流和平台权限的实际执行结果须在批准发布后记录，不以本地测试代替线上部署记录。

## 本轮修改清单

- businessContact.ts：记录用户验证并设置qrVerified=true，保持officialLinkTested=false。
- businessContact.test.ts：验证已确认QR可以生产显示，同时保留未确认/外部图片拦截及官方链接独立保护。
- BusinessContact.tsx：导出已有联系面板上下文的复用接口，不改布局/文案/尺寸。
- ContactSection.tsx：原企业微信卡片读取统一配置并打开同一面板。
- PrivacyPolicyPage.tsx：仅补类型收窄，保留远程政策内容。
- 远程合并带入的静态隐私页、SEO manifest、生成脚本更新完整保留。
- 新增发布检查脚本、本报告、测试结果和9张生产截图；历史各轮报告按当时状态保留，本报告及当前代码为最新发布依据。
