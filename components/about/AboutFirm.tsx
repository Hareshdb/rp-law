import Reveal from "@components/ui/reveal";
import Image from "next/image";
import Eyebrow from "./EyeBrow";

const AboutFirm = () => {

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
                        <div className="space-y-5 mt-5">
                        <blockquote className="mb-6 border-l-[3px] border-accent pl-5 text-lg italic leading-relaxed text-muted">
                        About RP Law Offices
                        </blockquote>
                        <p className="leading-relaxed text-muted">
                        At RP Law Offices, we are committed to providing practical, ethical, and result-oriented legal services to individuals, families, entrepreneurs, and businesses across Gujarat and India. Founded by Adv. Rinal Patel, our firm combines legal knowledge, strategic thinking, and a client-centric approach to deliver effective solutions for complex legal matters.
                        </p>
                        <p className="leading-relaxed text-muted">
                        We understand that every legal issue has personal, financial, and commercial implications. Whether you are involved in litigation, require legal advice, or need assistance with documentation and compliance, we work closely with you to protect your rights and achieve the most appropriate legal outcome.
                        </p>
                        <p className="leading-relaxed text-muted">
                        Based in Ahmedabad, Gujarat, RP Law Offices represents clients before the Gujarat High Court, District & Sessions Courts, Civil Courts, Family Courts, Consumer Commissions, Commercial Courts, and various judicial and quasi-judicial authorities. Our commitment is to provide clear legal guidance, responsive communication, and professional representation at every stage of your matter.</p>
                        </div>                                        
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default AboutFirm;