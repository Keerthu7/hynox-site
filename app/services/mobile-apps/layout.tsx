import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Company in Tiruppur | Android & iOS Apps – HYNOX',
  description:
    'HYNOX is a top mobile app development company in Tiruppur, Tamil Nadu. We build custom Android apps, iOS apps and cross-platform apps for businesses, startups and eCommerce brands across India.',
  keywords: [
    'mobile app development company in Tiruppur',
    'Android app development Tiruppur',
    'iOS app development Tamil Nadu',
    'app development company Tiruppur',
    'mobile app development Tamil Nadu',
    'React Native app development India',
    'custom mobile app development Tiruppur',
    'best app development company Tamil Nadu',
    'HYNOX mobile apps',
    'ecommerce app development Tiruppur',
  ],
  openGraph: {
    title: 'Mobile App Development Company in Tiruppur | HYNOX',
    description:
      'Custom Android and iOS apps built for businesses in Tiruppur and across India. From idea to App Store — HYNOX handles everything.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function AppDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
