import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HYNOX | Custom Software & E-commerce Development in Tiruppur",
  description: "HYNOX builds custom software, websites, mobile applications, ERP systems, and AI automation for businesses in Tiruppur, Tamil Nadu, and globally.",
  keywords: [
    "software company Tiruppur",
    "software development company Tiruppur",
    "web development Tiruppur",
    "mobile app development Tiruppur",
    "ERP software company Tiruppur",
    "AI solutions Tiruppur",
    "IT company in Tiruppur",
    "ecommerce website development Tiruppur",
    "hynox.in",
    "HYNOX Tiruppur",
    "software developers in Tamil Nadu"
  ],
  authors: [{ name: "HYNOX" }],
  openGraph: {
    title: "HYNOX | Custom Software & E-commerce Development in Tiruppur",
    description: "HYNOX builds websites, custom mobile apps, ERP systems, and AI automation to scale your business.",
    locale: "en_IN",
    type: "website",
    url: "https://hynox.in",
    siteName: "HYNOX"
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Tiruppur",
    "geo.position": "11.1085;77.3411",
    "ICBM": "11.1085, 77.3411",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "HYNOX",
    "alternateName": "HYNOX Software Company",
    "url": "https://hynox.in",
    "logo": "https://hynox.in/hero-illustration.png",
    "image": "https://hynox.in/hero-illustration.png",
    "description": "HYNOX is the leading software development and digital marketing company in Tiruppur, Tamil Nadu. We specialize in custom web development, mobile apps (Android & iOS), ERP systems, Shopify stores, and AI/ML solutions.",
    "telephone": "+91 88705 24355",
    "email": "thehynoxofficial@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tiruppur",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN",
      "postalCode": "641601"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.1085,
      "longitude": 77.3411
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://facebook.com/hynox",
      "https://instagram.com/hynox",
      "https://linkedin.com/company/hynox"
    ],
    "areaServed": [
      "Tiruppur",
      "Coimbatore",
      "Erode",
      "Tamil Nadu",
      "India"
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
