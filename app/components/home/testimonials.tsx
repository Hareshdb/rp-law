"use client";

import { useCallback, useEffect, useState } from "react";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

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
        <Reveal className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Client Stories"
            title="What Our Clients Say"
            description="Real experiences from individuals and businesses who trusted us with their most important legal matters."
          />
        </Reveal>

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
                <div
                  className="mb-4 flex gap-1 text-accent"
                  aria-label="Rated 5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
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
