// Enable only after the business owner confirms this is Wu Xiang's current QR.
// Existing general company WeCom QR is intentionally not reused for a named advisor.
export const businessContact = {
  advisor: { zh: '吴翔', en: 'Wu Xiang', ko: '우샹 (Wu Xiang)' },
  qrImage: '', // Same-origin path, e.g. /business-contact/wu-xiang.png
  qrVerified: false,
  officialLink: '', // Official HTTPS work.weixin.qq.com contact URL only
  officialLinkTested: false,
  email: 'zylen@samplewear.com',
  phone: '0571-88012309',
};

export function verifiedQrPath(config = businessContact): string | null {
  return config.qrVerified && /^\/(?!\/)[^?#]+\.(png|jpe?g|webp)$/i.test(config.qrImage)
    ? config.qrImage : null;
}

export function verifiedContactLink(config = businessContact): string | null {
  if (!config.officialLinkTested) return null;
  try {
    const url = new URL(config.officialLink);
    return url.protocol === 'https:' && url.hostname === 'work.weixin.qq.com' && !url.username && !url.password
      ? url.href : null;
  } catch { return null; }
}
