import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, getTranslations, type Locale } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HowWeWork from "@/components/HowWeWork";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const m = t.meta;

  return {
    title: m.title,
    description: m.description,
    metadataBase: new URL("https://flowstatelabs.ai"),
    openGraph: {
      title: m.title,
      description: m.ogDescription,
      url: `https://flowstatelabs.ai/${locale}`,
      siteName: "Flowstate Labs",
      type: "website",
      locale: locale === "pt" ? "pt_PT" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.ogDescription,
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://flowstatelabs.ai/${locale}`,
      languages: {
        pt: "/pt",
        en: "/en",
      },
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const l = locale as Locale;

  return (
    <>
      <Navbar locale={l} />
      <main>
        <Hero locale={l} />
        <Marquee locale={l} />
        <Services locale={l} />
        <WhyUs locale={l} />
        <HowWeWork locale={l} />
        <CTA locale={l} />
      </main>
      <Footer locale={l} />
    </>
  );
}
