import Reveal from "@components/ui/reveal";
import Image from "next/image";
import Eyebrow from "./EyeBrow";

const AboutFirm = () => {

    const TAGS = [
        "Corporate Law",
        "Civil Litigation",
        "Family Law",
        "Criminal Defense",
        "Tax Advisory",
        "Property Law",
    ] as const;

    return (
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
    );
};

export default AboutFirm;