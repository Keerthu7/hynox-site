import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Store Development Company in Tiruppur | HYNOX',
  description:
    'HYNOX designs and builds custom Shopify e-commerce stores, custom theme setups, API integrations, and checkout optimization for fashion and retail brands in Tiruppur, India, and globally.',
  keywords: [
    'Shopify developer Tiruppur',
    'ecommerce store setup India',
    'Shopify agency Tamil Nadu',
    'garment online store developers',
    'best Shopify company Tiruppur',
    'HYNOX Shopify development',
  ],
  openGraph: {
    title: 'Shopify Store Development Company | HYNOX',
    description:
      'Launch your premium Shopify e-commerce store with high-performance theme customization and integrations by HYNOX.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ShopifyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
