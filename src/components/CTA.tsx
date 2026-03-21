import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-dark py-28 text-white">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeIn animation="fade-up">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-primary">
            Get started
          </p>
          <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl text-white">
            Ready to automate?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/60">
            Let&apos;s talk about how we can streamline your operations. No
            commitment, no sales pitch — just a conversation about your needs.
          </p>
        </FadeIn>
        <FadeIn animation="scale-in" delay={200}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
