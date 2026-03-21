import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowstate Labs — Automate Smarter. Grow Faster.",
  description:
    "Flowstate Labs automates and accelerates small-to-medium companies through digitalization and personalized solutions. Streamline your operations today.",
  metadataBase: new URL("https://flowstatelabs.ai"),
  openGraph: {
    title: "Flowstate Labs — Automate Smarter. Grow Faster.",
    description:
      "We automate and accelerate organizations through digitalization and personalized solutions.",
    url: "https://flowstatelabs.ai",
    siteName: "Flowstate Labs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowstate Labs — Automate Smarter. Grow Faster.",
    description:
      "We automate and accelerate organizations through digitalization and personalized solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://flowstatelabs.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Flowstate Labs",
              url: "https://flowstatelabs.ai",
              description:
                "We automate and accelerate small-to-medium companies through digitalization and personalized solutions.",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
