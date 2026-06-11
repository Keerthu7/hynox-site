import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom ERP & Software Development Company in Tiruppur | HYNOX',
  description:
    'HYNOX builds custom ERP systems, CRM software, dashboards, and automated business management software for enterprises in Tiruppur, Tamil Nadu, and globally.',
  keywords: [
    'ERP systems Tiruppur',
    'custom software development Tamil Nadu',
    'ERP software company Tiruppur',
    'business automation software India',
    'best ERP developers Tiruppur',
    'HYNOX custom software',
  ],
  openGraph: {
    title: 'Custom ERP & Software Development Company | HYNOX',
    description:
      'Custom ERP systems and software solutions built for business automation in Tiruppur and Tamil Nadu.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ERPLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
