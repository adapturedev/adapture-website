import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, getTranslations, type Locale } from "@/lib/i18n";
import { LocaleProvider } from "@/components/LocaleProvider";
import LocaleContent from "@/components/LocaleContent";

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
    metadataBase: new URL("https://adapture.pt"),
    openGraph: {
      title: m.title,
      description: m.ogDescription,
      url: `https://adapture.pt/${locale}`,
      siteName: "Adapture",
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
      canonical: `https://adapture.pt/${locale}`,
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
    <LocaleProvider initial={l}>
      <LocaleContent />
    </LocaleProvider>
  );
}
