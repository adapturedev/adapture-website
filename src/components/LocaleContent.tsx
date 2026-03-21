"use client";

import { useLocale } from "./LocaleProvider";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Services from "./Services";
import WhyUs from "./WhyUs";
import HowWeWork from "./HowWeWork";
import CTA from "./CTA";
import Footer from "./Footer";

/** Client-side page shell that re-renders instantly when locale changes. */
export default function LocaleContent() {
  const { locale } = useLocale();

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Hero locale={locale} />
        <Marquee locale={locale} />
        <Services locale={locale} />
        <WhyUs locale={locale} />
        <HowWeWork locale={locale} />
        <CTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
