"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/flowstatelabsai@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-sm">
        <CheckCircle className="mx-auto mb-4 text-green-400" size={48} strokeWidth={1.5} />
        <h3 className="mb-2 text-xl font-semibold text-white">Message sent!</h3>
        <p className="text-white/60">
          We&apos;ll get back to you soon. Thanks for reaching out.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-5 rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10"
    >
      {/* Honeypot anti-spam */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      {/* Disable captcha redirect */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New inquiry from flowstatelabs.ai" />

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/70">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle size={16} />
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-glow flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-9 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <Send size={18} strokeWidth={2} />
          </>
        )}
      </button>
    </form>
  );
}
