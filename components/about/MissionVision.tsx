'use client';
import type { AboutPageData } from '@/lib/types';
import { motion } from 'framer-motion';
import { Crosshair, Eye } from 'lucide-react';
import Reveal from '../ui/reveal';
import Eyebrow from './EyeBrow';

type MissionVisionProps = {
    aboutPageData?: AboutPageData | null;
};

const MissionVision = ({ aboutPageData }: MissionVisionProps) => {
    const missionText =
        aboutPageData?.missionText ??
        "Our mission is to provide dependable, practical, and ethical legal solutions through sound legal knowledge, strategic advocacy, and unwavering commitment to our client's interests. We strive to make quality legal services accessible while maintaining the highest standards of professionalism.";
    const visionText =
        aboutPageData?.visionText ??
        'To establish RP Law Firm as a trusted and respected legal practice known for excellence, integrity, and client-focused legal services while contributing meaningfully to the administration of justice.';

    return (
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
                            {missionText}
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
                            {visionText}
                            </p>
                        </motion.div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default MissionVision;
