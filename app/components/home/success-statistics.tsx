import AnimatedCounter from "../ui/animated-counter";
import SectionHeading from "../ui/section-heading";

const stats = [
  { value: 15, suffix: "+", label: "Years in Practice" },
  { value: 2000, suffix: "+", label: "Successful Cases" },
  { value: 500, suffix: "+", label: "Corporate Clients" },
  { value: 10000, suffix: "+", label: "Hours of Counsel" },
];

export default function SuccessStatistics() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Our Track Record"
            title="Success Statistics"
            description="Numbers that reflect our dedication, expertise, and the trust our clients place in us."
            light
          />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
            >
              <p className="text-5xl font-bold text-accent sm:text-6xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium text-white/70 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
