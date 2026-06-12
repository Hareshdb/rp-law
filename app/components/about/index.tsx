"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  Star,
  Users,
  TrendingUp,
  ArrowRight,
  Phone,
  Crosshair,
  Eye,
  Scale,
  Lock,
  Trophy,
} from "lucide-react";
import SectionHeading from "../ui/section-heading";
import Reveal from "../ui/reveal";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 },
  }),
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const TAGS = [
  "Corporate Law",
  "Civil Litigation",
  "Family Law",
  "Criminal Defense",
  "Tax Advisory",
  "Property Law",
] as const;

const CORE_VALUES = [
  {
    title: "Integrity",
    description:
      "Uncompromising ethical standards are the bedrock of our practice. Transparency and honesty above all else.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description:
      "We pursue perfection in every case. Good enough is never enough — we aim for the extraordinary in every brief.",
    icon: Star,
  },
  {
    title: "Client First",
    description:
      "Your success is our priority. We listen deeply, understand fully, and act decisively to protect your interests.",
    icon: Users,
  },
  {
    title: "Results Driven",
    description:
      "Every strategy is built around a single goal — delivering practical solutions and winning outcomes for you.",
    icon: TrendingUp,
  },
] as const;

const AWARDS = [
  { title: "Best Lawyers", year: "2024" },
  { title: "Chambers & Partners", year: "Ranked" },
  { title: "Legal 500", year: "Listed" },
  { title: "Super Lawyers", year: "Top Rated" },
] as const;

const TRUST = [
  { icon: Scale, text: "Free Initial Consultation" },
  { icon: Lock, text: "100% Confidential" },
  { icon: Trophy, text: "Award-Winning Team" },
] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
      <span className="inline-block h-px w-6 bg-accent" />
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* 1. BANNER */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
          alt="Law office"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-primary/75" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:40px_40px]"
        />

        <div className="absolute left-0 top-0 h-full w-1 bg-accent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:px-10 lg:px-16">
          <motion.div
            className="max-w-3xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Since 2005 · RP Law Associates
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={80}
              className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              About Our <br />
              <span className="text-accent">Law Firm</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={160}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/72"
            >
              Providing strategic legal counsel, dedicated representation, and
              trusted advocacy for individuals, families, and businesses across
              India.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={240}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold tracking-wide text-primary transition-[filter] hover:brightness-110"
              >
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/#practice-areas"
                className="inline-flex items-center rounded-full border-[1.5px] border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Our Practice Areas
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT OUR FIRM */}
      <section className="bg-surface py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80"
                    alt="Law office interior"
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 rounded-2xl border border-accent/30 bg-primary px-6 py-4 shadow-xl">
                  <div className="text-2xl font-bold text-white">
                    20<span className="text-accent">+</span>
                  </div>
                  <div className="mt-0.5 text-xs text-white/55">
                    Years of Excellence
                  </div>
                </div>
                <div className="absolute -left-4 -top-4 h-16 w-16 rounded-xl bg-accent opacity-[0.18]" />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <Eyebrow>Our Origins</Eyebrow>
              <h2 className="mb-6 mt-3 text-4xl font-bold leading-tight text-primary">
                About Our Firm
              </h2>
              <blockquote className="mb-6 border-l-[3px] border-accent pl-5 text-lg italic leading-relaxed text-muted">
                &ldquo;Founded on the principles of integrity and diligence, RP
                Law Associates has spent two decades redefining the landscape of
                legal excellence.&rdquo;
              </blockquote>
              <p className="mb-5 leading-relaxed text-muted">
                RP Law Associates is a full-service law firm delivering
                high-calibre legal solutions across corporate, civil, criminal,
                and family law. Our attorneys combine deep courtroom advocacy
                with strategic counsel to protect your interests at every stage.
              </p>
              <p className="leading-relaxed text-muted">
                We have established strategic alliances with associate lawyers
                across more than 20 states, enabling us to offer clients the
                advantage of a single trusted service provider for all their
                legal matters — nationwide, under one unified umbrella.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/25 bg-accent/12 px-4 py-1.5 text-xs font-semibold text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="relative overflow-hidden bg-primary py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-10"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-16 text-center">
            <Eyebrow>Our Purpose</Eyebrow>
            <h2 className="mt-3 text-4xl font-bold text-white">
              Mission &amp; Vision
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            <Reveal delay={0}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10"
              >
                <div className="absolute left-0 top-0 h-1 w-full rounded-t-2xl bg-accent" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Crosshair size={26} strokeWidth={1.8} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Our Mission
                </h3>
                <p className="text-lg leading-relaxed text-white/68">
                  To provide unwavering legal support and strategic counsel that
                  empowers our clients to navigate their most complex challenges
                  with absolute confidence. We strive to turn legal obstacles
                  into opportunities for growth and security.
                </p>
              </motion.div>
            </Reveal>

            <Reveal delay={0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10"
              >
                <div className="absolute left-0 top-0 h-1 w-full rounded-t-2xl bg-accent-light" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Eye size={26} strokeWidth={1.8} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Our Vision
                </h3>
                <p className="text-lg leading-relaxed text-white/68">
                  To be the global standard for legal excellence — recognized
                  not only for our victories but for fostering a legacy of
                  justice, innovation, and unwavering client advocacy that
                  shapes the future of law.
                </p>
              </motion.div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-8 rounded-2xl border border-accent/20 bg-accent/8 p-8 sm:flex-row sm:p-10">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full outline outline-2 outline-offset-[3px] outline-accent">
                <Image
                  src="/avatar-one.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div>
                <p className="text-lg italic leading-relaxed text-white/80">
                  &ldquo;Our mission is to provide practical legal guidance while
                  maintaining the highest standards of professionalism,
                  integrity, and client service — every single day.&rdquo;
                </p>
                <div className="mt-4">
                  <div className="font-semibold text-white">Rajesh Patel</div>
                  <div className="text-sm text-accent">
                    Founder &amp; Managing Partner
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="bg-background py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <Reveal>
            <SectionHeading
              eyebrow="Principles That Drive Us"
              title="Our Core Values"
              description="The foundational pillars that guide every decision, every case, and every client interaction at RP Law Associates."
              align="left"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal
                  key={value.title}
                  as="article"
                  delay={index * 0.1}
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
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary px-8 py-7 sm:flex-row">
              <div>
                <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-accent">
                  Recognized for Excellence
                </div>
                <div className="text-sm text-white">by Industry Leaders</div>
              </div>
              <div className="flex flex-wrap gap-4">
                {AWARDS.map(({ title, year }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-white/12 bg-white/[0.07] px-5 py-3 text-center"
                  >
                    <div className="text-xs font-bold text-white">{title}</div>
                    <div className="mt-0.5 text-[10px] text-white/50">
                      {year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. PRE-FOOTER CTA */}
      <section className="relative overflow-hidden bg-primary-dark py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:36px_36px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,var(--color-accent)_0%,transparent_70%)] opacity-20"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10">
          <Reveal>
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                <span className="inline-block h-px w-6 bg-accent" />
                Take the First Step
                <span className="inline-block h-px w-6 bg-accent" />
              </span>
            </div>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Ready to Secure <br />
              <span className="text-accent">Your Future?</span>
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-lg text-white/65">
              Schedule a consultation today to discuss your legal needs with our
              expert team. Trusted counsel, decisive action, proven results.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-9 py-4 text-sm font-bold tracking-wide text-primary-dark transition-[filter] hover:brightness-110"
                >
                  Book a Consultation <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="tel:+911234567890"
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/25 px-9 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Phone size={16} /> Call Us Now
                </Link>
              </motion.div>
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-8">
              {TRUST.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-white/55"
                >
                  <Icon size={15} strokeWidth={1.8} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
