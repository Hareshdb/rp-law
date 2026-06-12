import AnimatedCounter from "../ui/animated-counter";

const indicators = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 5000, suffix: "+", label: "Cases Handled" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Expert Advocates" },
];

export default function TrustIndicators() {
  return (
    <section className="border-b border-border bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {indicators.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-4xl font-bold text-primary sm:text-5xl">
                <AnimatedCounter end={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-muted sm:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
