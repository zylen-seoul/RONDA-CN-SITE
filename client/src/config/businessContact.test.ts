import { describe, expect, it } from 'vitest';
import { businessContact, previewQrPath, verifiedContactLink, verifiedQrPath } from './businessContact';

describe('business contact production gates', () => {
  it('allows local image preview without bypassing identity verification', () => {
    expect(previewQrPath()).toBe('/business-contact/wu-xiang-wecom.png');
    expect(businessContact.qrVerified).toBe(false);
    expect(businessContact.officialLinkTested).toBe(false);
    expect(verifiedQrPath()).toBeNull();
    expect(verifiedContactLink()).toBeNull();
  });
  it('keeps unconfirmed or external QR assets disabled', () => {
    expect(verifiedQrPath()).toBeNull();
    expect(verifiedQrPath({ ...businessContact, qrImage: '/real.png' })).toBeNull();
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
