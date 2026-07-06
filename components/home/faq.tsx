"use client";

import type { HomeFaqItem } from "@/lib/types";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/reveal";

const defaultFaqs: HomeFaqItem[] = [
  {
    question: "What types of legal services does RP Law Firm provide?",
    answer:
      "We offer legal services across multiple practice areas, including corporate law, civil disputes, family law, property matters, contract drafting, legal consultation, and litigation.",
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation by calling us, sending an email, or filling out the contact form on our website. Our team will get in touch to arrange a convenient appointment.",
  },
  {
    question: "Do you provide legal services for businesses?",
    answer:
      "Yes. We assist startups, SMEs, and established companies with corporate advisory, contract drafting and review, compliance, dispute resolution, and other business-related legal matters.",
  },
  {
    question: "Will my information remain confidential?",
    answer:
      "Absolutely. Client confidentiality is a core principle of our practice. All information shared with us is handled with the highest level of privacy and professional ethics.",
  },
  {
    question: "How are your legal fees determined?",
    answer:
      "Our fees depend on the nature, complexity, and scope of the legal matter. We discuss the fee structure transparently during the initial consultation so you know what to expect before we begin.",
  },
];

type FaqProps = {
  faqTag?: string;
  faqTitle?: string;
  faqDescription?: string;
  faqCtaButtonText?: string;
  faqs?: HomeFaqItem[];
};

export default function Faq({
  faqTag = "FAQs",
  faqTitle = "Frequently Asked Questions",
  faqDescription = "Everything you need to know about our legal services, consultation process, and how RP Law Firm delivers trusted, client-focused legal solutions.",
  faqCtaButtonText = "Schedule a Consultation",
  faqs = defaultFaqs,
}: FaqProps) {
  const items = faqs?.length ? faqs : defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <Reveal direction="right">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            {faqTag}
          </p>
          <div className="text-xl font-bold tracking-tight text-primary">
            {faqTitle}
          </div>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {faqDescription}
          </p>
          <Link
            href="/contact-us"
            className="group mt-8 inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            {faqCtaButtonText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal direction="left" className="divide-y divide-border">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-semibold text-primary sm:text-lg">
                    {index + 1}. {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-12 leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
