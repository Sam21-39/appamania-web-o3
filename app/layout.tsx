import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Appamania - Expert Flutter & Firebase Mobile App Development",
    template: "%s | Appamania",
  },
  description:
    "Professional mobile app development company in Kolkata specializing in Flutter, Firebase, and Supabase. Transform your ideas into powerful mobile applications with our expert team.",
  keywords: [
    "Flutter development",
    "Firebase",
    "Supabase",
    "mobile app development",
    "iOS app",
    "Android app",
    "cross-platform development",
    "mobile app company Kolkata",
    "app development services",
    "Flutter developers India",
    "Firebase integration",
    "mobile app consulting",
  ],
  authors: [{ name: "Appamania Team", url: "https://appamania.in" }],
  creator: "Appamania",
  publisher: "Appamania",
  generator: "Next.js",
  applicationName: "Appamania",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0891b2" },
    { media: "(prefers-color-scheme: dark)", color: "#0891b2" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://appamania.in",
    siteName: "Appamania",
    title: "Appamania - Expert Flutter & Firebase Mobile App Development",
    description:
      "Professional mobile app development company in Kolkata specializing in Flutter, Firebase, and Supabase. Transform your ideas into powerful mobile applications.",
    images: [
      {
        url: "https://appamania.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Appamania - Mobile App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@appamania",
    creator: "@appamania",
    title: "Appamania - Expert Flutter & Firebase Mobile App Development",
    description:
      "Professional mobile app development company in Kolkata specializing in Flutter, Firebase, and Supabase.",
    images: ["https://appamania.in/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0891b2",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Mobile App Development",
  other: {
    "msapplication-TileColor": "#0891b2",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <link rel="canonical" href="https://appamania.in" />
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata" />
        <meta name="geo.position" content="22.5726;88.3639" />
        <meta name="ICBM" content="22.5726, 88.3639" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.className = theme;
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
