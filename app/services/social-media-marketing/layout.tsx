import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Marketing Agency in Tiruppur | HYNOX',
  description:
    'HYNOX provides professional social media management, organic page growth, graphic designs, content calendars, and brand positioning in Tiruppur, India, and globally.',
  keywords: [
    'Social media management Tiruppur',
    'SMM agency India',
    'Instagram page managers Tamil Nadu',
    'brand strategy experts',
    'best SMM company Tiruppur',
    'HYNOX social media marketing',
  ],
  openGraph: {
    title: 'Social Media Marketing Agency | HYNOX',
    description:
      'Grow your brand presence organically with professional content calendars, custom graphics, and active community management by HYNOX.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function SocialMediaMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
