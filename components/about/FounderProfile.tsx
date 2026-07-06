import Image from 'next/image';
import { getFirstAuthor } from '@/lib/apis';
import { getImageUrl } from '@/lib/helpers';
import Reveal from '@components/ui/reveal';
import Eyebrow from './EyeBrow';

const FALLBACK_NAME = 'Adv. Rinal Patel';
const FALLBACK_IMAGE = '/avatar-one.jpg';

const FounderProfile = async () => {
    const author = await getFirstAuthor();
    const name = author?.name ?? FALLBACK_NAME;
    const imageUrl = author?.image ? getImageUrl(author.image) : FALLBACK_IMAGE;

    return (
        <section className="bg-surface py-28">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
                <div className="grid items-center justify-items-center gap-16 lg:grid-cols-[auto_1fr] lg:justify-items-start">
                    <Reveal>
                        <div>
                            <div className="relative h-48 w-48 overflow-hidden rounded-full outline outline-4 outline-offset-[6px] outline-accent shadow-2xl sm:h-56 sm:w-56">
                                <Image
                                    src={imageUrl}
                                    alt={name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 192px, 224px"
                                />
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08} className="text-center lg:text-left">
                        <Eyebrow>Founder &amp; Advocate</Eyebrow>
                        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
                            {name}
                        </h2>
                        <div className="mt-6 space-y-5">
                            <p className="leading-relaxed text-muted">
                                Adv. Rinal Patel is the Founder and Principal Advocate of RP Law Firm. With a strong commitment to justice and professional ethics, Adv. Patel advises and represents clients in a broad range of civil, commercial, corporate, family, and regulatory matters.
                            </p>
                            <p className="leading-relaxed text-muted">
                                Known for a meticulous approach to legal research, strategic case preparation, and practical legal advice, Adv. Patel believes in building long-term relationships based on trust, transparency, and dedicated client service. Every matter is handled with professionalism, confidentiality, and careful attention to detail, ensuring that clients receive personalized legal solutions suited to their individual needs.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default FounderProfile;
