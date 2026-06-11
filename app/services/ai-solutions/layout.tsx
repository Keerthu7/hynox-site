import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Machine Learning Solutions Company in Tiruppur | HYNOX',
  description:
    'HYNOX builds custom AI solutions, automated chatbots, data processing models, NLP applications, and predictive analytics tools for businesses in Tiruppur, India, and globally.',
  keywords: [
    'AI developers Tiruppur',
    'machine learning company India',
    'AI automation tools Tamil Nadu',
    'custom AI chatbots Tiruppur',
    'business AI solutions',
    'HYNOX AI solutions',
  ],
  openGraph: {
    title: 'AI & Machine Learning Solutions | HYNOX',
    description:
      'Automate your business workflows and leverage data insights with custom AI models and integrations by HYNOX.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function AILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
