import SectionHeading from "../ui/section-heading";

const practiceAreas = [
  {
    title: "Corporate Law",
    description:
      "Comprehensive legal support for businesses — from incorporation and compliance to mergers, acquisitions, and corporate governance.",
    icon: (
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    ),
  },
  {
    title: "Litigation Services",
    description:
      "Aggressive and strategic representation in civil, commercial, and criminal litigation across all levels of courts.",
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M5 10h14" />
        <path d="M8 6l-3 4 3 4" />
        <path d="M16 6l3 4-3 4" />
      </>
    ),
  },
  {
    title: "Labor & Employment",
    description:
      "Expert guidance on employment contracts, workplace disputes, labor compliance, and industrial relations matters.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </>
    ),
  },
  {
    title: "NRI Services",
    description:
      "Specialized legal assistance for Non-Resident Indians in property matters, inheritance, family law, and investment compliance.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </>
    ),
  },
  {
    title: "Real Estate",
    description:
      "End-to-end legal services for property transactions, title verification, RERA compliance, and real estate disputes.",
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Practice Areas"
            description="Comprehensive legal services tailored to protect your interests and achieve the best possible outcomes."
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <article
              key={area.title}
              className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/40 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  {area.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
