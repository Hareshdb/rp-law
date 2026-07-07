"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HomePageData } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  PRACTICE_AREAS_HREF,
  handlePracticeAreasNavigationClick,
} from "@/lib/practice-areas-navigation";
import Eyebrow from "../about/EyeBrow";

export default function HeroSection({
  homePageData,
  heroImageUrl,
}: {
  homePageData: HomePageData;
  heroImageUrl: string;
}) {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent"
          >
            RP Law Firm
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {homePageData.heroTitle}{" "}
            {homePageData.heroHighlightText && (
              <span className="italic text-accent">
                {homePageData.heroHighlightText}
              </span>
            )}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white"
          >
            {homePageData.heroSubtitle ||
              "At RP Law Firm, we provide trusted legal counsel and effective representation with professionalism, integrity, and dedication. We are committed to protecting your rights and delivering practical legal solutions tailored to your needs."}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="group inline-flex items-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-primary shadow-lg shadow-accent/20 transition-colors hover:bg-accent-light"
            >
              {homePageData.ctaButtonText || "Schedule a Consultation"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={PRACTICE_AREAS_HREF}
              onClick={(event) =>
                handlePracticeAreasNavigationClick(event, pathname)
              }
              className="inline-flex items-center rounded-full border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Explore Practice Areas
            </Link>
          </motion.div>

          {/* <motion.dl
            variants={item}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-6 pt-8"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl font-bold text-white">{stat.value}</dt>
                <dd className="mt-1 text-sm font-medium text-white/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl> */}
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={heroImageUrl}
              alt={
                homePageData.heroImage?.alt ||
                (homePageData.heroTitle
                  ? `${homePageData.heroTitle} - RP Law Firm`
                  : "RP Law Firm hero image")
              }
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-surface p-5 sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-primary">98% Client Satisfaction</p>
                <p className="text-xs text-muted">Proven track record</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
