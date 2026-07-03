'use client';
import type { AboutPageData } from '@/lib/types';
import { Variants, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type BannerProps = {
    aboutPageData?: AboutPageData | null;
    featuredImageUrl: string;
};

const Banner = ({ aboutPageData, featuredImageUrl }: BannerProps) => {
    const router = useRouter();

    const title = aboutPageData?.title ?? 'About';
    const titleHighlight = aboutPageData?.titleHighlight ?? 'RP Law Offices';
    const subtitle =
        aboutPageData?.subtitle ??
        'Although headquartered in Ahmedabad, Gujarat, RP Law Offices proudly serves clients across India. Through technology-enabled consultations and strategic legal coordination, we assist individuals, businesses, NRIs, and corporate clients in handling legal matters before courts, tribunals, and regulatory authorities nationwide.';
    const ctaButtonText = aboutPageData?.ctaButtonText ?? 'Schedule a Consultation';

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
                src={featuredImageUrl}
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

            <div className="relative z-10 my-auto w-full max-w-7xl px-30">
                <motion.div
                    className="max-w-3xl"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={fadeUp}
                        custom={80}
                        className="text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
                    >
                        {title} &nbsp;
                        <span className="text-accent">{titleHighlight}</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        custom={160}
                        className="mt-6 max-w-4xl text-lg leading-relaxed text-white/72"
                    >
                        {subtitle}
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
                            {ctaButtonText} <ArrowRight size={16} />
                        </Link>
                        <Link
                            href=""
                            onClick={(event) => {
                                event.preventDefault();
                                router.push('/#practice-areas');
                            }}
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