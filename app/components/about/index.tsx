"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
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

/* ─────────────────────────────────────────
   ANIMATION VARIANTS  (defined once, outside
   render — zero re-creation cost)
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   REVEAL WRAPPER
   - once:true  → fires only the first time
   - amount:0.15 → triggers early, avoids
     waiting for large elements to fully enter
───────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   COUNTER — spring-driven, no setInterval
   useSpring smoothly interpolates to target
───────────────────────────────────────── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) raw.set(target);
  }, [inView, target, raw]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

/* ─────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase"
      style={{ color: "var(--accent)" }}
    >
      <span className="h-px w-6 inline-block" style={{ background: "var(--accent)" }} />
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────
   STATIC DATA — outside component so never
   re-created on re-render
───────────────────────────────────────── */

const TAGS = [
  "Corporate Law", "Civil Litigation", "Family Law",
  "Criminal Defense", "Tax Advisory", "Property Law",
] as const;

const CORE_VALUES = [
  { Icon: ShieldCheck, title: "Integrity", desc: "Uncompromising ethical standards are the bedrock of our practice. Transparency and honesty above all else." },
  { Icon: Star, title: "Excellence", desc: "We pursue perfection in every case. Good enough is never enough — we aim for the extraordinary in every brief." },
  { Icon: Users, title: "Client First", desc: "Your success is our priority. We listen deeply, understand fully, and act decisively to protect your interests." },
  { Icon: TrendingUp, title: "Results Driven", desc: "Every strategy is built around a single goal — delivering practical solutions and winning outcomes for you." },
] as const;

const AWARDS = [
  { title: "Best Lawyers", year: "2024" },
  { title: "Chambers & Partners", year: "Ranked" },
  { title: "Legal 500", year: "Listed" },
  { title: "Super Lawyers", year: "Top Rated" },
] as const;

const TRUST = [
  { Icon: Scale, text: "Free Initial Consultation" },
  { Icon: Lock, text: "100% Confidential" },
  { Icon: Trophy, text: "Award-Winning Team" },
] as const;

/* ═══════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <main
      className="overflow-x-hidden"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >

      {/* ══════════════════════════════════════
          1. BANNER
      ══════════════════════════════════════ */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
          alt="Law office"
          fill priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* static overlays — zero JS cost */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(15,30,53,0.96) 40%, rgba(15,30,53,0.55) 100%)" }} />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="absolute left-0 top-0 h-full w-1" style={{ background: "var(--accent)" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 pt-40">
          {/* stagger children on mount — no scroll trigger needed for hero */}
          <motion.div className="max-w-3xl" variants={stagger} initial="hidden" animate="visible">

            <motion.div variants={fadeUp} custom={0} className="mb-6 flex items-center gap-3">
              <span className="h-px w-8" style={{ background: "var(--accent)" }} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--accent)" }}>
                Since 2005 · RP Law Associates
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp} custom={80}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white"
            >
              About Our <br />
              <span style={{ color: "var(--accent)" }}>Law Firm</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={160}
              className="mt-6 text-lg leading-relaxed max-w-xl"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Providing strategic legal counsel, dedicated representation, and trusted advocacy
              for individuals, families, and businesses across India.
            </motion.p>

            <motion.div variants={fadeUp} custom={240} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold tracking-wide transition-[filter] hover:brightness-110"
                style={{ background: "var(--accent)", color: "var(--primary)" }}
              >
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/#practice-areas"
                className="inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}
              >
                Our Practice Areas
              </Link>
            </motion.div>
          </motion.div>
          
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. ABOUT OUR FIRM
      ══════════════════════════════════════ */}
      <section className="py-28" style={{ background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <Reveal>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80"
                    alt="Law office interior"
                    fill className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                </div>
                <div
                  className="absolute -bottom-6 -right-4 rounded-2xl px-6 py-4 shadow-xl"
                  style={{ background: "var(--primary)", border: "1px solid rgba(201,162,39,0.3)" }}
                >
                  <div className="text-2xl font-bold text-white">20<span style={{ color: "var(--accent)" }}>+</span></div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>Years of Excellence</div>
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl" style={{ background: "var(--accent)", opacity: 0.18 }} />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <Label>Our Origins</Label>
              <h2 className="mt-3 mb-6 text-4xl font-bold leading-tight" style={{ color: "var(--primary)" }}>
                About Our Firm
              </h2>
              <blockquote className="pl-5 mb-6 text-lg italic leading-relaxed" style={{ borderLeft: "3px solid var(--accent)", color: "var(--muted)" }}>
                "Founded on the principles of integrity and diligence, RP Law Associates has
                spent two decades redefining the landscape of legal excellence."
              </blockquote>
              <p className="mb-5 leading-relaxed" style={{ color: "var(--muted)" }}>
                RP Law Associates is a full-service law firm delivering high-calibre legal solutions
                across corporate, civil, criminal, and family law. Our attorneys combine deep
                courtroom advocacy with strategic counsel to protect your interests at every stage.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                We have established strategic alliances with associate lawyers across more than
                20 states, enabling us to offer clients the advantage of a single trusted service
                provider for all their legal matters — nationwide, under one unified umbrella.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {TAGS.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full px-4 py-1.5 text-xs font-semibold"
                    style={{ background: "rgba(30,58,95,0.07)", color: "var(--primary)", border: "1px solid rgba(30,58,95,0.12)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. MISSION & VISION
      ══════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ background: "var(--primary)" }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="text-center mb-16">
            <Label>Our Purpose</Label>
            <h2 className="mt-3 text-4xl font-bold text-white">Mission &amp; Vision</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-2xl p-10 h-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: "var(--accent)" }} />
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(201,162,39,0.15)", color: "var(--accent)" }}>
                  <Crosshair size={26} strokeWidth={1.8} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="leading-relaxed text-lg" style={{ color: "rgba(255,255,255,0.68)" }}>
                  To provide unwavering legal support and strategic counsel that empowers our clients
                  to navigate their most complex challenges with absolute confidence. We strive to turn
                  legal obstacles into opportunities for growth and security.
                </p>
              </motion.div>
            </Reveal>

            <Reveal delay={120}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-2xl p-10 h-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: "var(--accent-light)" }} />
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(201,162,39,0.15)", color: "var(--accent)" }}>
                  <Eye size={26} strokeWidth={1.8} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="leading-relaxed text-lg" style={{ color: "rgba(255,255,255,0.68)" }}>
                  To be the global standard for legal excellence — recognized not only for our victories
                  but for fostering a legacy of justice, innovation, and unwavering client advocacy
                  that shapes the future of law.
                </p>
              </motion.div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div
              className="mt-10 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-center"
              style={{ background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.2)" }}
            >
              <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden" style={{ outline: "2px solid var(--accent)", outlineOffset: "3px" }}>
                <Image src="/avatar-one.jpg" alt="Founder" fill className="object-cover" sizes="80px" />
              </div>
              <div>
                <p className="text-lg italic leading-relaxed text-white/80">
                  "Our mission is to provide practical legal guidance while maintaining the highest
                  standards of professionalism, integrity, and client service — every single day."
                </p>
                <div className="mt-4">
                  <div className="font-semibold text-white">Rajesh Patel</div>
                  <div className="text-sm" style={{ color: "var(--accent)" }}>Founder &amp; Managing Partner</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. CORE VALUES
      ══════════════════════════════════════ */}
      <section className="py-28" style={{ background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="max-w-2xl mb-16">
            <Label>Principles That Drive Us</Label>
            <h2 className="mt-3 text-4xl font-bold leading-tight" style={{ color: "var(--primary)" }}>
              Our Core Values
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
              The foundational pillars that guide every decision, every case, and every
              client interaction at RP Law Associates.
            </p>
          </Reveal>

          {/* whileInView on the grid container — children inherit stagger */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {CORE_VALUES.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i * 80}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl p-8 cursor-default"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                {/* hover accent underbar — Framer handles transform, no CSS conflict */}
                <motion.div
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full origin-left"
                  style={{ background: "var(--accent)" }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25 }}
                />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(30,58,95,0.07)", color: "var(--primary)" }}>
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "var(--primary)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={200}>
            <div
              className="mt-16 rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-6"
              style={{ background: "var(--primary)" }}
            >
              <div>
                <div className="text-xs font-bold tracking-[0.15em] uppercase mb-1" style={{ color: "var(--accent)" }}>
                  Recognized for Excellence
                </div>
                <div className="text-white text-sm">by Industry Leaders</div>
              </div>
              <div className="flex flex-wrap gap-4">
                {AWARDS.map(({ title, year }) => (
                  <div key={title} className="rounded-xl px-5 py-3 text-center" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <div className="text-xs font-bold text-white">{title}</div>
                    <div className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{year}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. PRE-FOOTER CTA
      ══════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden" style={{ background: "var(--primary-dark)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(ellipse, var(--accent) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <Reveal>
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "var(--accent)" }}>
                <span className="h-px w-6 inline-block" style={{ background: "var(--accent)" }} />
                Take the First Step
                <span className="h-px w-6 inline-block" style={{ background: "var(--accent)" }} />
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Secure <br />
              <span style={{ color: "var(--accent)" }}>Your Future?</span>
            </h2>

            <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
              Schedule a consultation today to discuss your legal needs with our
              expert team. Trusted counsel, decisive action, proven results.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-bold tracking-wide transition-[filter] hover:brightness-110"
                  style={{ background: "var(--accent)", color: "var(--primary-dark)" }}
                >
                  Book a Consultation <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="tel:+911234567890"
                  className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  style={{ border: "1.5px solid rgba(255,255,255,0.25)" }}
                >
                  <Phone size={16} /> Call Us Now
                </Link>
              </motion.div>
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-8">
              {TRUST.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
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