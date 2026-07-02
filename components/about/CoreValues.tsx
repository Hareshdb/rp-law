import React from 'react'
import SectionHeading from '../ui/section-heading';
import Reveal from '../ui/reveal';
import { ArrowRight, Lock, MessageCircle, ShieldCheck, Star, TrendingUp, Users } from 'lucide-react';

const CORE_VALUES = [
    {
        title: "Integrity",
        description:
            "We uphold honesty, fairness, and ethical conduct in every professional engagement.",
        icon: ShieldCheck,
    },
    {
        title: "Excellence",
        description:
            "We continuously strive to deliver legal services of the highest quality through preparation, dedication, and attention to detail.",
        icon: Star,
    },
    {
        title: "Confidentiality",
        description:
            "Every client's information is treated with complete privacy and professional discretion.",
        icon: Lock,
    },
    {
        title: "Commitment",
        description:
            "We remain dedicated to protecting our clients' legal rights and pursuing their objectives with diligence and responsibility.",
        icon: TrendingUp,
    },
    {
        title: "Transparency",
        description:
            "We believe in clear communication, honest advice, and keeping clients informed throughout the legal process.",
        icon: MessageCircle,
    }
] as const;

const AWARDS = [
    { title: "Best Lawyers", year: "2024" },
    { title: "Chambers & Partners", year: "Ranked" },
    { title: "Legal 500", year: "Listed" },
    { title: "Super Lawyers", year: "Top Rated" },
] as const;


function CoreValues() {
    return (
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
    )
}

export default CoreValues