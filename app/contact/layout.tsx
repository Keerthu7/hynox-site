import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | HYNOX',
  description:
    'Get in touch with HYNOX. "If you’re not learning, you’re not growing." Contact us for inquiries about our courses, workshops, and programs in Coimbatore.',
  keywords: [
    'contact hynox',
    'hynox contact',
    'hynox coimbatore',
    'hynox contact number',
    'hynox email',
    'hynox courses coimbatore',
  ],
  openGraph: {
    title: 'Contact Us | HYNOX',
    description:
      'Get in touch with HYNOX. "If you’re not learning, you’re not growing." Contact us for inquiries about our courses, workshops, and programs in Coimbatore.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
