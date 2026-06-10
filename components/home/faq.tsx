"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../ui/reveal";

const faqs = [
  {
    question: "How do I schedule an initial consultation?",
    answer:
      "You can schedule a consultation by filling out our contact form, calling our office directly, or sending us an email. We typically respond within one business day to arrange a convenient time.",
  },
  {
    question: "What should I bring to my first meeting?",
    answer:
      "Bring any documents relevant to your matter — contracts, notices, correspondence, court papers, or identification. Don't worry if you're missing something; we'll guide you on anything additional we need.",
  },
  {
    question: "How are your legal fees structured?",
    answer:
      "Our fee structure depends on the nature and complexity of your case. We offer transparent pricing — including fixed fees, hourly rates, and retainers — and discuss all costs upfront so there are no surprises.",
  },
  {
    question: "Do you handle cases outside of your city?",
    answer:
      "Yes. We represent clients across multiple jurisdictions and regularly assist NRI clients globally through secure virtual consultations and coordinated local representation.",
  },
  {
    question: "How long will my case take to resolve?",
    answer:
      "Timelines vary widely based on the type of matter and court schedules. During your consultation we'll provide a realistic assessment and keep you updated at every stage of the process.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <Reveal direction="right">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Everything you need to know about working with us. Can&rsquo;t find
            the answer you&rsquo;re looking for? Reach out to our team.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Schedule a Consultation
          </Link>
        </Reveal>

        <Reveal direction="left" className="divide-y divide-border">
          {faqs.map((faq, index) => {
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
                    {faq.question}
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
