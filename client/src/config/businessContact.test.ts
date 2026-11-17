import { describe, expect, it } from 'vitest';
import { businessContact, previewQrPath, verifiedContactLink, verifiedQrPath } from './businessContact';

describe('business contact production gates', () => {
  it('enables the owner-verified QR while keeping the untested direct link disabled', () => {
    expect(previewQrPath()).toBe('/business-contact/wu-xiang-wecom.png');
    expect(businessContact.qrVerified).toBe(true);
    expect(businessContact.officialLinkTested).toBe(false);
    expect(verifiedQrPath()).toBe(previewQrPath());
    expect(verifiedContactLink()).toBeNull();
  });
  it('keeps unconfirmed or external QR assets disabled', () => {
    expect(verifiedQrPath({ ...businessContact, qrVerified: false })).toBeNull();
    expect(verifiedQrPath({ ...businessContact, qrVerified: false, qrImage: '/real.png' })).toBeNull();
    for (const qrImage of ['https://example.com/qr.png', '//example.com/qr.png', '/fake.svg']) {
      expect(verifiedQrPath({ ...businessContact, qrVerified: true, qrImage })).toBeNull();
    }
    expect(verifiedQrPath({ ...businessContact, qrVerified: true, qrImage: '/business-contact/verified.png' })).toBe('/business-contact/verified.png');
  });
  it('requires manual testing and the exact official HTTPS host', () => {
    expect(verifiedContactLink({ ...businessContact, officialLink: 'https://work.weixin.qq.com/contact/test' })).toBeNull();
    for (const officialLink of ['javascript:alert(1)', 'http://work.weixin.qq.com/contact', 'https://work.weixin.qq.com.evil.test/', 'https://user:secret@work.weixin.qq.com/']) {
      expect(verifiedContactLink({ ...businessContact, officialLinkTested: true, officialLink })).toBeNull();
    }
    expect(verifiedContactLink({ ...businessContact, officialLinkTested: true, officialLink: 'https://work.weixin.qq.com/contact/test' })).toBe('https://work.weixin.qq.com/contact/test');
  });
});
