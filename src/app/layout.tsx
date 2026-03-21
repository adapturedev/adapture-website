import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowstatelabs.pt"),
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Set lang and theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;if(location.pathname.startsWith('/en'))d.lang='en';var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))d.classList.add('dark')})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Flowstate Labs",
              url: "https://flowstatelabs.pt",
              description:
                "AI-powered automation and digital transformation for small and medium businesses. We streamline operations with intelligent workflows, custom integrations, and data analytics.",
              knowsAbout: [
                "AI Automation",
                "Digital Transformation",
                "Process Automation",
                "Cloud Solutions",
                "Custom Integrations",
                "Data Analytics",
                "Machine Learning",
                "Intelligent Workflows",
              ],
              serviceType: [
                "AI-Powered Automation",
                "Digital Transformation",
                "Custom Software Integrations",
                "Data & Analytics",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Flowstate Labs",
              url: "https://flowstatelabs.pt",
              inLanguage: ["pt", "en"],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
