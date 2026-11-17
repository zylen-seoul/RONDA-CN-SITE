// Enable only after the business owner confirms this is Wu Xiang's current QR.
// Existing general company WeCom QR is intentionally not reused for a named advisor.
export const businessContact = {
  advisor: { zh: '吴翔', en: 'Wu Xiang', ko: '우샹 (Wu Xiang)' },
  qrImage: '/business-contact/wu-xiang-wecom.png',
  qrVerified: false,
  officialLink: '', // Official HTTPS work.weixin.qq.com contact URL only
  officialLinkTested: false,
  email: 'zylen@samplewear.com',
  phone: '0571-88012309',
};

export function previewQrPath(config = businessContact): string | null {
  return /^\/(?!\/)[^?#]+\.(png|jpe?g|webp)$/i.test(config.qrImage)
    ? config.qrImage : null;
}

export function verifiedQrPath(config = businessContact): string | null {
  return config.qrVerified ? previewQrPath(config) : null;
}

export function verifiedContactLink(config = businessContact): string | null {
  if (!config.officialLinkTested) return null;
  try {
    const url = new URL(config.officialLink);
    return url.protocol === 'https:' && url.hostname === 'work.weixin.qq.com' && !url.username && !url.password
      ? url.href : null;
  } catch { return null; }
}
