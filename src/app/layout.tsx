import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import { GA_TRACKING_ID } from "@/shared/lib/gtag";

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gesitech.africa"),
  title: {
    template: "%s",
    default:
      "Gesitech Solutions Africa | Safe, Reliable LPG Solutions Across Africa",
  },
  description:
    "Trusted LPG solutions provider in Africa since 2017. We deliver world-class LPG accessories, plant installations, and maintenance services that drive growth, protect communities, and support a cleaner energy future.",
  keywords:
    "LPG solutions Africa, LPG accessories Kenya, LPG plant installation, LPG maintenance services, EPRA licensed LPG, ISO certified LPG services, Nairobi LPG solutions, sustainable energy Africa, LPG safety services, industrial LPG systems",
  authors: [{ name: "Gesitech Solutions Africa" }],
  applicationName: "Gesitech Solutions Africa",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Gesitech",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#22c55e",
    "msapplication-tap-highlight": "no",
  },
  openGraph: {
    title:
      "Gesitech Solutions Africa | Safe, Reliable LPG Solutions Across Africa",
    description:
      "Trusted LPG solutions provider in Africa since 2017. We deliver world-class LPG accessories, plant installations, and maintenance services that drive growth, protect communities, and support a cleaner energy future.",
    url: "https://gesitech.africa",
    siteName: "Gesitech Solutions Africa",
    images: [
      {
        url: "/assets/images/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Gesitech Solutions Africa - LPG Solutions & Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gesitech Solutions Africa | Safe, Reliable LPG Solutions Across Africa",
    description:
      "Trusted LPG solutions provider in Africa since 2017. We deliver world-class LPG accessories, plant installations, and maintenance services that drive growth, protect communities, and support a cleaner energy future.",
    images: ["/assets/images/opengraph.png"],
    site: "@GesitechAfrica",
    creator: "@GesitechAfrica",
  },
};

export const viewport: Viewport = {
  themeColor: "#22c55e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>

        {/* Google reCAPTCHA v3 (invisible) — loaded once here, executed
            per-form via executeRecaptchaV3 */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}`}
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
