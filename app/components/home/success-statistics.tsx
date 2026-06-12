import AnimatedCounter from "../ui/animated-counter";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

const stats = [
  { value: 15, suffix: "+", label: "Years in Practice" },
  { value: 2000, suffix: "+", label: "Successful Cases" },
  { value: 500, suffix: "+", label: "Corporate Clients" },
  { value: 7000, suffix: "+", label: "Hours of Counsel" },
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
            title="Success Statistics"
            description="Numbers that reflect our dedication, expertise, and the trust our clients place in us."
            light
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
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
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
