"use client";

import { useState, type FormEvent } from "react";
import Reveal from "../ui/reveal";
import { Mail, PhoneCall } from "lucide-react";

const contactDetails = [
  {
    label: "Call us",
    value: "+91 9512123013",
    href: "tel:+919512123013",
    icon: (
      <PhoneCall
        className="h-5 w-5"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "Email us",
    value: "advocate.rinal@gmail.com",
    href: "mailto:advocate.rinal@gmail.com",
    icon: (
      <Mail
        className="h-5 w-5"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    ),
  },
];

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-accent focus:bg-white/10";

export default function ContactCta() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
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
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&rsquo;s discuss your case
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/75">
            Share a few details about your legal matter and our team will get
            back to you within one business day. Your information stays
            confidential.
          </p>

          <ul className="mt-10 space-y-5">
            {contactDetails.map((detail) => (
              <li key={detail.label}>
                <a
                  href={detail.href}
                  className="group flex items-center gap-4"
                >
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
                  placeholder="Phone number"
                  className={fieldClass}
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
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-accent-light"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
