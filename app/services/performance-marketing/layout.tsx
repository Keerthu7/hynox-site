import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Marketing Agency in Tiruppur | HYNOX',
  description:
    'HYNOX is a data-driven performance marketing agency specializing in Meta Ads, Google Ads, and e-commerce ROAS scaling for apparel, fashion, and retail brands in Tiruppur, India, and globally.',
  keywords: [
    'Performance marketing Tiruppur',
    'Meta ads agency India',
    'Google ads company Tamil Nadu',
    'ecommerce ads agency Tiruppur',
    'ROAS scaling experts',
    'HYNOX marketing agency',
  ],
  openGraph: {
    title: 'Performance Marketing Agency | HYNOX',
    description:
      'Scale your online store sales and maximize ROAS with our data-driven Meta and Google Ads management by HYNOX.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function PerformanceMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
