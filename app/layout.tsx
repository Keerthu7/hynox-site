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
      <body>
        {children}
        <a
          href="https://wa.me/918870524355"
          className="whatsapp-float-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.066 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.772-.725 2.02-1.425.25-.7.25-1.3 0-1.425-.075-.125-.27-.199-.57-.35zM12 2C6.477 2 2 6.477 2 12c0 1.74.443 3.37 1.217 4.793L2 22l5.377-1.411A9.947 9.947 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.634 0-3.153-.443-4.466-1.214l-.32-.189-3.32.872.887-3.218-.207-.33A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
