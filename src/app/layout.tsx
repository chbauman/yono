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
  metadataBase: new URL("https://yonostreetband.ch"),
  title: "YONO Streetband – Strassenmusik aus Zürich",
  description:
    "Die YONO Streetband ist eine Strassenmusik Kleinformation aus Zürich. Wir spielen Pop, Funk, Rock, Hip-Hop und Jazz an Events und Konzerten.",
  keywords: [
    "YONO Streetband",
    "Strassenmusik",
    "Zürich",
    "Blasmusik",
    "Streetband",
    "Konzert",
    "Auftritt",
    "Pop",
    "Funk",
    "Jazz",
  ],
  authors: [{ name: "YONO Streetband" }],
  openGraph: {
    title: "YONO Streetband – Strassenmusik aus Zürich",
    description:
      "Die YONO Streetband ist eine Strassenmusik Kleinformation aus Zürich. Wir spielen Pop, Funk, Rock, Hip-Hop und Jazz.",
    url: "https://yonostreetband.ch",
    siteName: "YONO Streetband",
    type: "website",
    locale: "de_CH",
    images: [
      {
        url: "/band_photo.jpg",
        alt: "YONO Streetband",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YONO Streetband – Strassenmusik aus Zürich",
    description:
      "Die YONO Streetband ist eine Strassenmusik Kleinformation aus Zürich.",
    images: ["/band_photo.jpg"],
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "YONO Streetband",
  description:
    "Die YONO Streetband ist eine Strassenmusik Kleinformation aus Zürich, die Pop, Funk, Rock, Hip-Hop und Jazz spielt.",
  url: "https://yonostreetband.ch",
  email: "yonostreetband@gmail.com",
  foundingDate: "2022",
  genre: ["Pop", "Funk", "Rock", "Hip-Hop", "Jazz"],
  location: {
    "@type": "Place",
    name: "Zürich",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
  },
  sameAs: [
    "https://www.youtube.com/@Yono-Streetband",
    "https://www.instagram.com/yono_streetband/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
