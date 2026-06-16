import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";
import {
  Building2,
  Scale,
  Users,
  Globe,
  House,
  Heart,
  ArrowRight,
} from "lucide-react";

const practiceAreas = [
  {
    title: "Corporate Law",
    description:
      "Comprehensive legal support for businesses — from incorporation and compliance to mergers, acquisitions, and corporate governance.",
    icon: Building2,
  },
  {
    title: "Litigation Services",
    description:
      "Aggressive and strategic representation in civil, commercial, and criminal litigation across all levels of courts.",
    icon: Scale,
  },
  {
    title: "Labor & Employment",
    description:
      "Expert guidance on employment contracts, workplace disputes, labor compliance, and industrial relations matters.",
    icon: Users,
  },
  {
    title: "NRI Services",
    description:
      "Specialized legal assistance for Non-Resident Indians in property matters, inheritance, family law, and investment compliance.",
    icon: Globe,
  },
  {
    title: "Real Estate",
    description:
      "End-to-end legal services for property transactions, title verification, RERA compliance, and real estate disputes.",
    icon: House,
  },
  {
    title: "Family Law",
    description:
      "Compassionate counsel on divorce, maintenance, child custody, succession, and other sensitive family matters.",
    icon: Heart,
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Practice Areas"
            description="Comprehensive legal services tailored to protect your interests and achieve the best possible outcomes."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <Reveal
                key={area.title}
                as="article"
                delay={(index % 3) * 0.1}
                className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent">
                  <Icon
                    className="h-6 w-6"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-xl font-bold text-primary">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowRight
                    className="h-4 w-4"
                    strokeWidth={2}
                  />
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
