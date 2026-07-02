'use client';
import { motion } from 'framer-motion';
import { Crosshair, Eye } from 'lucide-react';
import Image from 'next/image';
import Reveal from '../ui/reveal';
import Eyebrow from './EyeBrow';

const MissionVision = () => {
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
                            Our mission is to provide dependable, practical, and ethical legal solutions through sound legal knowledge, strategic advocacy, and unwavering commitment to our client's interests. We strive to make quality legal services accessible while maintaining the highest standards of professionalism.
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
                            To establish RP Law Offices as a trusted and respected legal practice known for excellence, integrity, and client-focused legal services while contributing meaningfully to the administration of justice.
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
                                &ldquo;Adv. Rinal Patel is the Founder and Principal Advocate of RP Law Offices. With a strong commitment to justice and professional ethics, Adv. Patel advises and represents clients in a broad range of civil, commercial, corporate, family, and regulatory matters.&rdquo;
                            </p>                           
                            <div className="mt-4">
                                <div className="font-semibold text-white">Adv. Rinal Patel</div>
                                <div className="text-sm text-accent">
                                    Founder &amp; Senior Advocate
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default MissionVision;
