import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Company in Tiruppur | Custom Websites & Web Apps – HYNOX',
  description:
    'HYNOX is a leading web development company in Tiruppur, Tamil Nadu. We build custom websites, web applications, eCommerce stores, admin dashboards and SaaS platforms for businesses across India.',
  keywords: [
    'web development company in Tiruppur',
    'website development Tiruppur',
    'custom web application development Tamil Nadu',
    'web development company Tamil Nadu',
    'website design Tiruppur',
    'ecommerce website development Tiruppur',
    'web app development company India',
    'best web development company Tiruppur',
    'HYNOX web development',
    'software company Tiruppur',
  ],
  openGraph: {
    title: 'Web Development Company in Tiruppur | HYNOX',
    description:
      'Custom websites, web applications and eCommerce platforms built for businesses in Tiruppur and across India.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
