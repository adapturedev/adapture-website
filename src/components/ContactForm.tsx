"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { getTranslations, type Locale } from "@/lib/i18n";

type FormStatus = "idle" | "sending" | "success" | "error";
type FormStep = 0 | 1 | 2;

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  teamSize: string;
  annualScale: string;
  automationFocus: string[];
  challenge: string;
  website: string;
};

const SUBMISSION_EMAIL = "adapture@adapture.pt";
const WEB3FORMS_ACCESS_KEY = "4a777630-bdb8-4979-bb39-6e8bb0ec74cf";
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  teamSize: "",
  annualScale: "",
  automationFocus: [],
  challenge: "",
  website: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const labelClass =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-primary";
const inputClass =
  "w-full rounded-xl border border-white/12 bg-white/[0.03] px-4 py-4 text-white placeholder:text-white/25 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40";
const choiceBaseClass =
  "rounded-xl border px-4 py-3 text-sm font-medium transition-all";
const choiceIdleClass =
  "border-white/12 bg-white/[0.03] text-white/75 hover:border-primary/60 hover:text-white";
const choiceActiveClass =
  "border-primary bg-primary text-white shadow-lg shadow-primary/20";
const errorTextClass = "mt-2 text-xs font-medium text-red-300";

function getChoiceClass(active: boolean, extra = "") {
  return `${choiceBaseClass} ${active ? choiceActiveClass : choiceIdleClass} ${extra}`;
}

export default function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [step, setStep] = useState<FormStep>(0);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [validationAttempted, setValidationAttempted] = useState(false);
  const t = getTranslations(locale).contact;
  const fallbackMailHref = `mailto:${SUBMISSION_EMAIL}?subject=${encodeURIComponent(
    t.subject,
  )}&body=${encodeURIComponent(
    [
      `${t.name}: ${values.name.trim()}`,
      `${t.company}: ${values.company.trim()}`,
      `${t.email}: ${values.email.trim()}`,
      `${t.phone}: ${values.phone.trim() || "-"}`,
      `${t.teamSize}: ${values.teamSize || "-"}`,
      `${t.annualScale}: ${values.annualScale || "-"}`,
      `${t.focus}: ${values.automationFocus.join(", ") || "-"}`,
      `${t.message}: ${values.challenge.trim()}`,
      `${t.website}: ${values.website.trim() || "-"}`,
    ].join("\n"),
  )}`;

  const canContinue =
    step === 0
      ? values.name.trim().length > 1 && values.company.trim().length > 1
      : step === 1
        ? emailPattern.test(values.email.trim()) && values.teamSize.length > 0
        : values.automationFocus.length > 0 && values.challenge.trim().length >= 10;

  function updateValue(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function selectValue(name: keyof FormValues, value: string) {
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function toggleFocus(value: string) {
    setValues((current) => {
      const hasValue = current.automationFocus.includes(value);
      return {
        ...current,
        automationFocus: hasValue
          ? current.automationFocus.filter((item) => item !== value)
          : [...current.automationFocus, value],
      };
    });
  }

  function goNext() {
    if (!canContinue || step === 2) {
      setValidationAttempted(true);
      return;
    }

    setValidationAttempted(false);
    setStep((current) => (current + 1) as FormStep);
  }

  function goBack() {
    setStatus("idle");
    setValidationAttempted(false);
    setStep((current) => Math.max(0, current - 1) as FormStep);
  }

  function resetForm() {
    setValues(initialValues);
    setStep(0);
    setValidationAttempted(false);
    setStatus("idle");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canContinue) {
      setValidationAttempted(true);
      return;
    }

    setStatus("sending");

    const form = e.currentTarget;
    const raw = new FormData(form);
    const honeypot = raw.get("_honey")?.toString().trim();
    const botcheck = raw.get("botcheck") === "on";

    if (honeypot || botcheck) {
      setStatus("success");
      setValues(initialValues);
      return;
    }

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: t.subject,
      from_name: "Adapture Website",
      name: values.name.trim(),
      company: values.company.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      team_size: values.teamSize,
      annual_scale: values.annualScale || "-",
      automation_focus: values.automationFocus.join(", "),
      message: values.challenge.trim(),
      website: values.website.trim() || "-",
      locale,
      page_url: window.location.href,
    };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await res.json().catch(() => null)) as {
        success?: boolean;
      } | null;

      if (res.ok && result?.success === true) {
        setStatus("success");
        setValues(initialValues);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="w-full rounded-2xl border border-white/10 bg-[#090A0C] p-10 text-center shadow-2xl shadow-black/30">
        <CheckCircle className="mx-auto mb-4 text-green-400" size={48} strokeWidth={1.5} />
        <h3 className="mb-2 text-xl font-semibold text-white">{t.successTitle}</h3>
        <p className="text-white/60">
          {t.successMessage}
        </p>
        <button
          type="button"
          onClick={resetForm}
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
      className="w-full rounded-2xl border border-white/10 bg-[#090A0C] p-7 text-left shadow-2xl shadow-black/30 sm:p-10"
    >
      {/* Honeypot anti-spam */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

      <div className="mb-8">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.38em] text-primary">
          -- {t.eyebrow} --
        </p>
        <h3 className="mb-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t.steps[step].title}{" "}
          <span className="text-primary">{t.steps[step].accent}</span>
        </h3>
        <p className="text-base leading-relaxed text-white/55">
          {t.steps[step].subtitle}
        </p>
      </div>

      <div className="mb-8 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((item) => (
          <span
            key={item}
            className={`h-1 rounded-full ${
              item <= step ? "bg-primary" : "bg-white/10"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="min-h-[220px]">
        {step === 0 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className={labelClass}>
                -- {t.name} *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={values.name}
                onChange={updateValue}
                placeholder={t.namePlaceholder}
                className={inputClass}
              />
              {validationAttempted && values.name.trim().length <= 1 && (
                <p className={errorTextClass}>{t.validation.requiredField}</p>
              )}
            </div>

            <div>
              <label htmlFor="company" className={labelClass}>
                -- {t.company} *
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                value={values.company}
                onChange={updateValue}
                placeholder={t.companyPlaceholder}
                className={inputClass}
              />
              {validationAttempted && values.company.trim().length <= 1 && (
                <p className={errorTextClass}>{t.validation.requiredField}</p>
              )}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className={labelClass}>
                  -- {t.email} *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={updateValue}
                  placeholder={t.emailPlaceholder}
                  className={inputClass}
                />
                {validationAttempted && values.email.trim().length === 0 && (
                  <p className={errorTextClass}>{t.validation.requiredField}</p>
                )}
                {validationAttempted &&
                  values.email.trim().length > 0 &&
                  !emailPattern.test(values.email.trim()) && (
                    <p className={errorTextClass}>{t.validation.invalidEmail}</p>
                  )}
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  -- {t.phone}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={updateValue}
                  placeholder={t.phonePlaceholder}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <p className={labelClass}>
                -- {t.teamSize} *
              </p>
              <div className="grid gap-3 sm:grid-cols-4">
                {t.teamSizeOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectValue("teamSize", option)}
                    className={getChoiceClass(values.teamSize === option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {validationAttempted && values.teamSize.length === 0 && (
                <p className={errorTextClass}>{t.validation.selectTeamSize}</p>
              )}
            </div>

            <div>
              <div className="mb-3">
                <p className={labelClass}>
                  -- {t.annualScale}
                </p>
                <p className="-mt-1 text-xs text-white/40">{t.annualScaleHint}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-4">
                {t.annualScaleOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      selectValue(
                        "annualScale",
                        values.annualScale === option ? "" : option,
                      )
                    }
                    className={getChoiceClass(values.annualScale === option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <p className={labelClass}>
                -- {t.focus} *
              </p>
              <p className="-mt-1 mb-3 text-xs text-white/40">{t.focusHint}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {t.focusOptions.map((option, index) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => toggleFocus(option.label)}
                    className={getChoiceClass(
                      values.automationFocus.includes(option.label),
                      `min-h-[84px] text-left ${
                        index === t.focusOptions.length - 1 ? "sm:col-span-2" : ""
                      }`,
                    )}
                  >
                    <span className="block text-sm font-semibold">
                      {option.label}
                    </span>
                    <span
                      className={`mt-1 block text-xs leading-relaxed ${
                        values.automationFocus.includes(option.label)
                          ? "text-white/80"
                          : "text-white/42"
                      }`}
                    >
                      {option.description}
                    </span>
                  </button>
                ))}
              </div>
              {validationAttempted && values.automationFocus.length === 0 && (
                <p className={errorTextClass}>{t.validation.selectFocus}</p>
              )}
            </div>

            <div>
              <label htmlFor="challenge" className={labelClass}>
                -- {t.message} *
              </label>
              <textarea
                id="challenge"
                name="challenge"
                required
                rows={5}
                value={values.challenge}
                onChange={updateValue}
                placeholder={t.messagePlaceholder}
                className={`${inputClass} resize-none`}
              />
              <p
                className={`mt-2 text-xs ${
                  validationAttempted && values.challenge.trim().length < 10
                    ? "font-medium text-red-300"
                    : "text-white/40"
                }`}
              >
                {t.validation.messageMin}
              </p>
            </div>

            <div>
              <label htmlFor="website" className={labelClass}>
                -- {t.website}
              </label>
              <input
                id="website"
                name="website"
                type="text"
                value={values.website}
                onChange={updateValue}
                placeholder={t.websitePlaceholder}
                className={inputClass}
              />
            </div>
          </div>
        )}
      </div>

      {status === "error" && (
        <div className="mt-5 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-300">
          <div className="flex items-start gap-2">
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            <div>
              <p>{t.error}</p>
              <p className="mt-1 text-red-200/70">{t.errorFallback}</p>
              <a
                href={fallbackMailHref}
                className="mt-3 inline-flex font-semibold text-white underline decoration-white/25 underline-offset-4 transition-colors hover:text-primary"
              >
                {t.emailFallback}
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-4 sm:justify-start">
          {step > 0 && (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white/70 transition-colors hover:border-white/25 hover:text-white"
            >
              <ArrowLeft size={15} />
              {t.back}
            </button>
          )}
          <span className="text-xs font-medium text-white/35">
            {step + 1}/3
          </span>
        </div>

        {step < 2 ? (
          <button
            type="button"
            onClick={goNext}
            className="btn-glow inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 sm:w-auto"
          >
            {t.continue}
            <ArrowRight size={17} strokeWidth={2} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-glow inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-45 sm:w-auto"
          >
            {status === "sending" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                {t.sending}
              </>
            ) : (
              <>
                {t.send}
                <Send size={17} strokeWidth={2} />
              </>
            )}
          </button>
        )}
      </div>

      <p className="mt-8 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
        {t.privacy}
      </p>
    </form>
  );
}
