import Image from "next/image";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Experienced Advocates",
    description:
      "Our team brings decades of courtroom and advisory experience across diverse legal domains.",
  },
  {
    title: "Transparent Communication",
    description:
      "We keep you informed at every stage with clear, honest updates — no legal jargon, no surprises.",
  },
  {
    title: "Client-Focused Strategy",
    description:
      "Every case receives a tailored approach designed around your goals, timeline, and priorities.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                alt="Professional legal team in discussion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            <div className="absolute -bottom-6 right-6 flex items-center gap-4 rounded-2xl bg-primary p-5 shadow-xl sm:-right-6">
              <p className="text-4xl font-bold text-accent">15+</p>
              <p className="text-sm font-medium leading-tight text-white/80">
                Years of trusted
                <br />
                legal practice
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal direction="left">
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Your Trusted Legal Partner"
                description="We combine deep legal expertise with a genuine commitment to your success — because your case deserves nothing less."
                align="left"
              />
            </Reveal>

            <ul className="mt-10 space-y-8">
              {reasons.map((reason, index) => (
                <Reveal
                  as="li"
                  key={reason.title}
                  direction="left"
                  delay={0.1 + index * 0.1}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check
                      className="h-4 w-4 text-accent"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-muted">{reason.description}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
