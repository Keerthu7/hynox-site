import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Join Our Team | HYNOX',
  description:
    'Start your career journey with hands-on experience and learn from industry professionals at HYNOX. Explore internship and full-time opportunities in software development, design, content creation, and marketing.',
  keywords: [
    'careers at hynox',
    'software development internships tiruppur',
    'design internships tiruppur',
    'it internships tamil nadu',
    'hynox careers',
    'internship programs tiruppur',
  ],
  openGraph: {
    title: 'Careers | Join Our Team | HYNOX',
    description:
      'Start your career journey with hands-on experience and learn from industry professionals at HYNOX. Explore internship and full-time opportunities.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
