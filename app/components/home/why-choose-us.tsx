import Image from "next/image";
import SectionHeading from "../ui/section-heading";

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
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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

          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Your Trusted Legal Partner"
              description="We combine deep legal expertise with a genuine commitment to your success — because your case deserves nothing less."
              align="left"
            />

            <ul className="mt-10 space-y-8">
              {reasons.map((reason) => (
                <li key={reason.title} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4 text-accent"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-muted">{reason.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
