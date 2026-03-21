import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-dark py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-3xl sm:text-4xl">
          Ready to automate?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/70">
          Let&apos;s talk about how we can streamline your operations. No
          commitment, no sales pitch — just a conversation about your needs.
        </p>
        <a
          href="mailto:hello@flowstatelabs.ai"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
        >
          Get in touch
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
