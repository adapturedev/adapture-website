"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { getTranslations, type Locale } from "@/lib/i18n";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const t = getTranslations(locale).contact;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/adapture.ai@gmail.com", {
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
        <h3 className="mb-2 text-xl font-semibold text-white">{t.successTitle}</h3>
        <p className="text-white/60">
          {t.successMessage}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          {t.successAction}
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
      <input type="hidden" name="_subject" value={t.subject} />

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/70">
          {t.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={t.namePlaceholder}
          className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/70">
          {t.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t.emailPlaceholder}
          className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/70">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder={t.messagePlaceholder}
          className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle size={16} />
          {t.error}
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
            {t.sending}
          </>
        ) : (
          <>
            {t.send}
            <Send size={18} strokeWidth={2} />
          </>
        )}
      </button>
    </form>
  );
}
