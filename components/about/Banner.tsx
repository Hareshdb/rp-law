'use client';
import { Variants, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {

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

    return (
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

            {/* <div className="absolute left-0 top-0 h-full w-1 bg-accent" /> */}

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
    );

};

export default Banner