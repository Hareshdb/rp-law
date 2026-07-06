import AnimatedCounter from "@components/ui/animated-counter";
import SectionHeading from "@components/ui/section-heading";
import Reveal from "@components/ui/reveal";

const stats = [
  { value: 100, suffix: "%", label: "Transparent Communication" },
  { value: 100, suffix: "+", label: "Satisfied Clients" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 100, suffix: "%", label: "Confidentiality Assured" },
];

export default function SuccessStatistics() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Our Track Record"
            title="Trusted by Clients. Proven Through Results."
            description="Our achievements reflect years of legal excellence, successful outcomes, and the confidence that individuals and businesses place in RP Law Firm."
            light
            markAs="h4"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.1}
              className="bg-primary/40 p-8 text-center backdrop-blur-sm"
            >
              <p className="text-4xl font-bold text-accent sm:text-5xl">
                <AnimatedCounter duration={index === 0 ? 700 : 2000} end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium text-white/70 sm:text-base">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
