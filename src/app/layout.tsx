import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chakradhar Hospitals | Trusted Healthcare in Rajamahendravaram",
    template: "%s | Chakradhar Hospitals",
  },
  description:
    "Chakradhar Hospitals - Leading multi-specialty hospital in Rajamahendravaram, Andhra Pradesh. Expert doctors, advanced facilities, 24/7 emergency care. Book appointment today.",
  keywords: [
    "hospital in rajamahendravaram",
    "best hospital andhra pradesh",
    "orthopaedic hospital",
    "emergency care rajamahendravaram",
    "joint replacement surgery",
    "physiotherapy rajamahendravaram",
    "general hospital",
    "trauma care",
    "spine treatment",
    "knee replacement surgery",
    "chakradhar hospitals",
    "health checkup packages",
  ],
  authors: [{ name: "Chakradhar Hospitals" }],
  creator: "Chakradhar Hospitals",
  publisher: "Chakradhar Hospitals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chakradharhospitals.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chakradhar Hospitals | Trusted Healthcare in Rajamahendravaram",
    description:
      "Expert doctors, advanced facilities, and compassionate care. Your trusted healthcare partner in Rajamahendravaram, Andhra Pradesh.",
    url: "https://chakradharhospitals.com",
    siteName: "Chakradhar Hospitals",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chakradhar Hospitals | Trusted Healthcare",
    description:
      "Expert doctors, advanced facilities, and compassionate care in Rajamahendravaram.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Chakradhar Hospitals",
    alternateName: "చక్రధర్ హాస్పిటల్స్",
    url: "https://chakradharhospitals.com",
    logo: "https://chakradharhospitals.com/logo.png",
    description:
      "Leading multi-specialty hospital in Rajamahendravaram providing expert healthcare with advanced facilities.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "06-24/1, House No. 85, Morampudi Road, VL Puram Junction",
      addressLocality: "Rajamahendravaram",
      addressRegion: "Andhra Pradesh",
      postalCode: "533103",
      addressCountry: "IN",
    },
    telephone: "+919348291119",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "229",
      bestRating: "5",
    },
    medicalSpecialty: [
      "Orthopaedics",
      "General Medicine",
      "General Surgery",
      "Emergency Medicine",
      "Physiotherapy",
      "Trauma Care",
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Rajamahendravaram",
    },
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
