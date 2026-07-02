import Image from "next/image";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Experienced Legal Expertise",
    description:
      "Practical solutions backed by strong legal knowledge.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Every case receives personalized attention and strategic guidance.",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear advice and regular updates throughout your legal journey.",
  },
  {
    title: "Ethical & Professional Practice",
    description:
      "Integrity, confidentiality, and honesty in every matter.",
  },
  {
    title: "Result-Oriented Representation",
    description:
      "Focused advocacy to protect your rights and interests.",
  },
  {
    title: "Comprehensive Legal Services",
    description:
      "Comprehensive Legal Services",
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
          </Reveal>

          <div>
            <Reveal direction="left">
              <SectionHeading
                eyebrow="Why Choose RP Law Offices?"
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
