"use client";

import dynamic from "next/dynamic";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactCtaData, FooterData } from "@/lib/types";
import { useFooterData } from "@/context/footer-data-context";
import Reveal from "../ui/reveal";
import { Mail, PhoneCall } from "lucide-react";

const ReCAPTCHAWidget = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const recaptchaSiteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;

const defaultFooterData: Pick<
  Required<FooterData>,
  "mobileNumber" | "email"
> = {
  mobileNumber: "+91 95121 23013",
  email: "advocate.rinal@gmail.com",
};

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-accent focus:bg-white/10";

const DEFAULT_TAG = "Get In Touch";
const DEFAULT_TITLE = "Let's Discuss Your Legal Needs";
const DEFAULT_DESCRIPTION =
  "Share your legal requirements with us, and our team will respond within one business day. Every inquiry is handled with complete confidentiality, professionalism, and care.";

type ContactCtaProps = {
  contactCtaData?: ContactCtaData | null;
  isContactPage?: boolean;
};

export default function ContactCta({
  contactCtaData,
  isContactPage = false,
}: ContactCtaProps) {
  const footerData = useFooterData();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaResetKey, setRecaptchaResetKey] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mobileNumber =
    footerData?.mobileNumber || defaultFooterData.mobileNumber;
  const email = footerData?.email || defaultFooterData.email;
  const phoneHref = `tel:${mobileNumber.replace(/\s/g, "")}`;
  const tag = contactCtaData?.tag ?? DEFAULT_TAG;
  const title = contactCtaData?.title ?? DEFAULT_TITLE;
  const description = contactCtaData?.description ?? DEFAULT_DESCRIPTION;

  const resetRecaptcha = () => {
    setRecaptchaToken(null);
    setRecaptchaResetKey((key) => key + 1);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = event.currentTarget.value.replace(
      /(?!^\+)[^\d\s()-]|^\++/g,
      "",
    );
    let digitCount = 0;

    event.currentTarget.value = Array.from(sanitizedValue)
      .filter((character) => {
        if (!/\d/.test(character)) {
          return true;
        }

        if (digitCount >= 10) {
          return false;
        }

        digitCount += 1;
        return true;
      })
      .join("");
  };

  const contactDetails = [
    {
      label: "Call us",
      value: mobileNumber,
      href: phoneHref,
      icon: (
        <PhoneCall className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      ),
    },
    {
      label: "Email us",
      value: email,
      href: `mailto:${email}`,
      icon: <Mail className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />,
    },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification.");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      recaptchaToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Failed to send your inquiry.");
      }

      setSubmitted(true);
      resetRecaptcha();
    } catch (submitError) {
      resetRecaptcha();
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Failed to send your inquiry.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal direction="right">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            {tag}
          </p>
          {isContactPage ? (
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h1>
          ) : (
            <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </div>
          )}

          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/75">
            {description}
          </p>

          <ul className="mt-10 space-y-5">
            {contactDetails.map((detail) => (
              <li key={detail.label}>
                <a href={detail.href} className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent ring-1 ring-white/10 transition-colors group-hover:bg-accent group-hover:text-primary">
                    {detail.icon}
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-white/50">
                      {detail.label}
                    </span>
                    <span className="block font-semibold text-white">
                      {detail.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          direction="left"
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
        >
          {submitted ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                Thank you for reaching out
              </h3>
              <p className="mt-2 text-white/70">
                We&rsquo;ve received your inquiry and will respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="First name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Last name"
                    className={fieldClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  pattern="^\+?[0-9\s()-]*$"
                  maxLength={10}
                  placeholder="Phone number"
                  className={fieldClass}
                  onChange={handlePhoneChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us briefly about your legal matter"
                  className={`${fieldClass} resize-none`}
                />
              </div>
              {recaptchaSiteKey ? (
                <div className="flex justify-center sm:justify-start">
                  <ReCAPTCHAWidget
                    key={recaptchaResetKey}
                    sitekey={recaptchaSiteKey}
                    theme="dark"
                    onChange={(token) => {
                      setRecaptchaToken(token);
                      setError(null);
                    }}
                    onExpired={() => setRecaptchaToken(null)}
                  />
                </div>
              ) : null}
              {error ? (
                <p
                  role="alert"
                  className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                >
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
