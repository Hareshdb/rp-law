"use client";

import {
  clearPracticeAreasHash,
  markPracticeAreasHomeMounted,
  scrollToPracticeAreasElement,
  shouldScrollToPracticeAreas,
} from "@/lib/practice-areas-navigation";
import {
  Banknote,
  BookA,
  BookMarked,
  BookType,
  Building,
  Building2,
  FileText,
  LockKeyhole,
  Scale,
  Shield,
  University,
  Unlink
} from "lucide-react";
import { useEffect, useRef } from "react";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";

const practiceAreas = [
  {
    title: "Gujarat High Court Matters",
    description:
      "Representation in writ petitions, civil and criminal appeals, constitutional matters, bail applications, commercial disputes, and other proceedings before the Gujarat High Court.",
    icon: Building2,
  },
  {
    title: "District & Civil Court Litigation",
    description:
      "Legal representation in civil suits, recovery matters, injunctions, property disputes, family disputes, criminal trials, appeals, and execution proceedings before District and Civil Courts.",
    icon: Scale,
  },
  {
    title: "RERA (Real Estate) Matters",
    description:
      "Legal assistance for homebuyers, developers, and builders in RERA complaints, delayed possession, refund claims, compensation, and real estate disputes.",
    icon: Building,
  },
  {
    title: "GST Litigation & Advisory",
    description:
      "Professional representation in GST notices, assessments, appeals, refunds, compliance, and indirect tax litigation before authorities and courts.",
    icon: FileText,
  },
  {
    title: "Insolvency & Bankruptcy (IBC)",
    description:
      "Legal services for creditors, businesses, and corporate entities in insolvency proceedings, debt recovery, restructuring, and NCLT matters.",
    icon: University,
  },
  {
    title: "Cheque Bounce (NI Act) Matters",
    description:
      "Comprehensive legal assistance in cheque dishonour cases, including legal notices, complaint filing, defence, recovery proceedings, and appeals.",
    icon: Banknote,
  },
  {
    title: "Divorce & Family Law",
    description:
      "Expert legal support in mutual consent divorce, contested divorce, child custody, maintenance, domestic violence, guardianship, and family settlements.",
    icon: Unlink,
  },
  {
    title: "Property Law Services",
    description:
      "Legal assistance in title verification, property disputes, partition suits, sale deeds, land matters, inheritance, documentation, and real estate transactions.",
    icon: Shield,
  },
  {
    title: "Consumer Protection Matters",
    description:
      "Representation before Consumer Commissions for disputes involving defective products, deficient services, insurance, banking, medical negligence, and e-commerce.",
    icon: LockKeyhole,
  },
  {
    title: "Company & Commercial Law",
    description:
      "Legal advisory for startups and businesses covering commercial contracts, shareholder disputes, corporate governance, compliance, business agreements, and commercial litigation.",
    icon: BookMarked,
  },
  {
    title: "Legal Consultation & Documentation",
    description:
      "Professional legal opinions, contract drafting, legal notices, agreements, deeds, Power of Attorney, wills, affidavits, and business documentation.",
      icon: BookType,
  },
  {
    title: "NRI Legal Services",
    description:
      "Dedicated legal support for Non-Resident Indians in property matters, inheritance, family disputes, documentation, Power of Attorney, and court representation across India.",
    icon: BookA,
  },
];

export default function PracticeAreas() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scrollIfNeeded = () => {
      if (shouldScrollToPracticeAreas()) {
        scrollToPracticeAreasElement(sectionRef.current);
        return;
      }

      clearPracticeAreasHash();
    };

    scrollIfNeeded();
    markPracticeAreasHomeMounted();

    window.addEventListener("hashchange", scrollIfNeeded);

    return () => {
      window.removeEventListener("hashchange", scrollIfNeeded);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="practice-areas"
      className="scroll-mt-20 bg-background py-20 lg:scroll-mt-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Practice Areas"
            description="At RP Law Firm, we provide comprehensive legal services to individuals, businesses, startups, and corporate clients across Ahmedabad, Gujarat, and throughout India. Our firm is committed to delivering strategic legal advice, effective representation, and practical solutions across a wide range of legal matters."
            markAs="h3"
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

                <div className="text-xl font-bold text-primary">
                  {area.title}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>

                {/* <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowRight
                    className="h-4 w-4"
                    strokeWidth={2}
                  />
                </span> */}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
