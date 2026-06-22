import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UGC Video Creation Agency in Coimbatore | HYNOX',
  description:
    'HYNOX creates high-converting User Generated Content (UGC) videos, ad hooks, product demos, aesthetic reels, and video ads for e-commerce and retail brands in Coimbatore, India, and globally.',
  keywords: [
    'UGC video creation Coimbatore',
    'User generated content agency India',
    'product video shoots Tamil Nadu',
    'tiktok reels creation',
    'best video ads company Coimbatore',
    'HYNOX UGC videos',
  ],
  openGraph: {
    title: 'UGC Video Creation Agency | HYNOX',
    description:
      'Boost conversion rates and running ROAS with high-performing, authentic short-form video ads created by HYNOX.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function UGCVideoCreationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
