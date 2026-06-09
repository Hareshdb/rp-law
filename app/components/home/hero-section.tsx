import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
        alt="Law office interior"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/80" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            RP Law Associates
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trusted Legal Excellence for Every Challenge
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/85 sm:text-xl">
            Dedicated advocates delivering strategic counsel across corporate,
            litigation, and personal legal matters — with integrity you can
            count on.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-accent-light"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/#practice-areas"
              className="inline-flex items-center rounded-full border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Explore Practice Areas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
