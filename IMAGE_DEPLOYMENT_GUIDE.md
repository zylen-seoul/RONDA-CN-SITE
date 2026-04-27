# 图片资源部署指南 / Image Deployment Guide

> **重要说明**：本项目所有图片均托管在 Manus CDN（`files.manuscdn.com`）。
> 部署到 GitHub Pages 或其他服务器时，CDN 链接**长期有效**，无需替换。
> 但如需迁移图片到自己的服务器，请参考下方说明。

---

## 一、当前图片资源清单

### 1. 首页背景图（HeroSection）
| 文件 | 用途 | 当前 URL |
|------|------|---------|
| `hero_bg.jpg` | 首页右侧工作室场景图 | `https://files.manuscdn.com/...SsFUjHEjxUzuZYiG.jpg` |

**代码位置**：`client/src/components/HeroSection.tsx` 第 12 行
```tsx
const HERO_BG = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663268754099/SsFUjHEjxUzuZYiG.jpg';
```

---

### 2. Sample App 手机截图（SampleAppSection）
| 编号 | 用途 | 尺寸 | 当前 URL 文件名 |
|------|------|------|----------------|
| phone1 | 我们的定位（双机叠放） | 1200×2509 | `CQJhlXIZAcGNliUB.png` |
| phone2 | 全链路透明（订单详情） | 990×2048 | `FksEDKiYePGeIJng.png` |
| phone3 | 汇报周期 | 990×2048 | `LQCuJktAulYWefLP.png` |
| phone4 | 在线定制 | 990×2048 | `TrsNiDcSCcIMDXLI.png` |
| phone5 | 个人工作台 | 990×2048 | `qzLUHOQtaIvyvdEQ.png` |

**代码位置**：`client/src/components/SampleAppSection.tsx` 第 5–11 行
```tsx
const PHONE_IMAGES = [
  'https://files.manuscdn.com/.../CQJhlXIZAcGNliUB.png', // 01 定位双机
  'https://files.manuscdn.com/.../FksEDKiYePGeIJng.png', // 02 订单详情
  'https://files.manuscdn.com/.../LQCuJktAulYWefLP.png', // 03 汇报周期
  'https://files.manuscdn.com/.../TrsNiDcSCcIMDXLI.png', // 04 在线定制
  'https://files.manuscdn.com/.../qzLUHOQtaIvyvdEQ.png', // 05 个人工作台
];
```

---

### 3. 城市图（GlobalPresence）
| 城市 | 用途 | 当前 URL 文件名 |
|------|------|----------------|
| 杭州 | 杭州城市展示图 | `VEnkGmmicAmbbpjx.jpg` |
| 首尔 | 首尔南山塔展示图 | `mtPiHFXgDZRAQlWl.jpg` |

**代码位置**：`client/src/components/GlobalPresence.tsx` 第 25、35 行

---

### 4. 关于我们配图（AboutSection）
| 文件 | 用途 | 当前 URL 文件名 |
|------|------|----------------|
| `about_us.jpg` | 关于我们板块配图 | `yKbizznUxhuUSbYA.jpg` |

**代码位置**：`client/src/components/AboutSection.tsx` 第 12 行

---

### 5. 二维码图片（ContactSection）
| 文件 | 用途 |
|------|------|
| `/manus-storage/wechat_work_qr_fbd3eec0.png` | 企业微信二维码 |
| `/manus-storage/douyin_qr_d648ee6c.png` | 抖音二维码 |
| `/manus-storage/whatsapp_qr_4c97cab8.png` | WhatsApp 二维码 |
| `/manus-storage/kakao_pure_qr_00e88e26.png` | KakaoTalk 二维码 |

> ⚠️ 这些二维码使用相对路径，**部署时需要将文件放入 `public/manus-storage/` 目录**。

**代码位置**：`client/src/components/ContactSection.tsx` 第 14–17 行

---

## 二、GitHub Pages 部署方案

### 方案 A：直接使用 CDN 链接（推荐，零配置）

CDN 图片链接（`files.manuscdn.com`）**长期有效**，无需任何修改，直接部署即可。

```bash
# 构建项目
pnpm build

# 将 dist/ 目录推送到 GitHub Pages
```

**唯一需要处理的是二维码图片**（相对路径），见下方。

---

### 方案 B：将图片迁移到自己的服务器

如果需要完全自托管，按以下步骤操作：

#### 步骤 1：下载所有 CDN 图片
```bash
# 创建图片目录
mkdir -p public/images/phones public/images/cities public/images/hero

# 下载图片（替换为实际文件名）
curl -o public/images/hero/hero_bg.jpg "https://files.manuscdn.com/.../SsFUjHEjxUzuZYiG.jpg"
curl -o public/images/phones/phone1.png "https://files.manuscdn.com/.../CQJhlXIZAcGNliUB.png"
curl -o public/images/phones/phone2.png "https://files.manuscdn.com/.../FksEDKiYePGeIJng.png"
curl -o public/images/phones/phone3.png "https://files.manuscdn.com/.../LQCuJktAulYWefLP.png"
curl -o public/images/phones/phone4.png "https://files.manuscdn.com/.../TrsNiDcSCcIMDXLI.png"
curl -o public/images/phones/phone5.png "https://files.manuscdn.com/.../qzLUHOQtaIvyvdEQ.png"
```

#### 步骤 2：修改代码中的图片路径

**HeroSection.tsx**：
```tsx
const HERO_BG = '/images/hero/hero_bg.jpg';
```

**SampleAppSection.tsx**：
```tsx
const PHONE_IMAGES = [
  '/images/phones/phone1.png',
  '/images/phones/phone2.png',
  '/images/phones/phone3.png',
  '/images/phones/phone4.png',
  '/images/phones/phone5.png',
];
```

**GlobalPresence.tsx**：
```tsx
imageUrl: '/images/cities/hangzhou.jpg',
imageUrl: '/images/cities/seoul.jpg',
```

**AboutSection.tsx**：
```tsx
const ABOUT_IMG = '/images/about_us.jpg';
```

---

### 方案 C：二维码图片处理（必须操作）

二维码图片使用了 `/manus-storage/` 相对路径，**无论哪种部署方案都需要处理**：

```bash
# 将二维码文件复制到 public 目录
mkdir -p public/manus-storage
cp client/public/manus-storage/*.png public/manus-storage/
```

或者在 `ContactSection.tsx` 中将路径改为完整 URL：
```tsx
const QR_CODES = {
  wechatWork: 'https://你的域名/images/qr/wechat_work.png',
  douyin: 'https://你的域名/images/qr/douyin.png',
  whatsapp: 'https://你的域名/images/qr/whatsapp.png',
  kakao: 'https://你的域名/images/qr/kakao.png',
};
```

---

## 三、快速替换图片说明

如需替换某张图片，只需：
1. 将新图片上传到你的图床/CDN
2. 找到对应的代码文件和行号（见上方清单）
3. 替换 URL 字符串即可

所有图片 URL 都在组件文件顶部以**常量**形式定义，方便维护。
