"use client";

import { useCallback, useEffect, useState } from "react";
import SectionHeading from "../ui/section-heading";

const testimonials = [
  {
    quote:
      "RP Law Associates handled our corporate merger with exceptional professionalism. Their attention to detail and strategic guidance made a complex process seamless.",
    name: "Rajesh Mehta",
    role: "CEO, Mehta Industries",
  },
  {
    quote:
      "When I needed legal support for my NRI property dispute, the team was responsive, transparent, and fought tirelessly for my rights. Highly recommended.",
    name: "Priya Sharma",
    role: "NRI Client, Dubai",
  },
  {
    quote:
      "Their litigation team secured a favorable outcome in a case others said was unwinnable. True experts who genuinely care about their clients.",
    name: "Amit Patel",
    role: "Business Owner",
  },
  {
    quote:
      "From employment contracts to labor disputes, RP Law has been our go-to legal partner for over five years. Reliable, knowledgeable, and always accessible.",
    name: "Sneha Reddy",
    role: "HR Director, TechCorp",
  },
  {
    quote:
      "The real estate team guided us through every step of our property purchase. Their title verification and RERA expertise saved us from a costly mistake.",
    name: "Vikram Singh",
    role: "Property Investor",
  },
];

function useSlidesToShow() {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const update = () => setSlidesToShow(mediaQuery.matches ? 3 : 1);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return slidesToShow;
}

export default function Testimonials() {
  const slidesToShow = useSlidesToShow();
  const maxIndex = Math.max(0, testimonials.length - slidesToShow);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex],
  );

  const next = useCallback(() => {
    goTo(current >= maxIndex ? 0 : current + 1);
  }, [current, maxIndex, goTo]);

  const prev = useCallback(() => {
    goTo(current <= 0 ? maxIndex : current - 1);
  }, [current, maxIndex, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const visible = testimonials.slice(current, current + slidesToShow);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Client Stories"
            title="What Our Clients Say"
            description="Real experiences from individuals and businesses who trusted us with their most important legal matters."
          />
        </div>

        <div className="relative mt-14">
          <div
            className={`grid gap-6 ${
              slidesToShow === 3 ? "lg:grid-cols-3" : "grid-cols-1"
            }`}
          >
            {visible.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex flex-col rounded-2xl border border-border bg-surface p-8 shadow-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mb-4 h-8 w-8 text-accent/40"
                  aria-hidden="true"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0c-1.03-1.094-1.583-2.321-1.583-4.311 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <blockquote className="flex-1 text-muted leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 border-t border-border pt-6">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </footer>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary transition-colors hover:border-accent hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === current
                      ? "w-8 bg-accent"
                      : "w-2.5 bg-border hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary transition-colors hover:border-accent hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
