import AboutSection from "@/components/home/about-section";
import { getContactCtaData, getFirstAuthor, getHomePageData } from "@/lib/apis";
import { getImageUrl } from "@/lib/helpers";
import { PLACEHOLDER_IMAGE } from "@/lib/constants";
import { getPageMetadata } from "@/lib/metadata";
import { urlFor } from "@/lib/sanity-image-builder";
import type { HomeFaqItem, HomePageData } from "@/lib/types";
import HeroSection from "@components/home/hero-section";
import PracticeAreas, {
  type ResolvedPracticeArea,
} from "@components/home/practice-areas";
import SuccessStatistics from "@components/home/success-statistics";
import WhyChooseUs from "@components/home/why-choose-us";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const Faq = dynamic(() => import("@components/home/faq"));
const Testimonials = dynamic(() => import("@components/home/testimonials"));
const ContactCta = dynamic(() => import("@/components/home/contact-cta"));

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("home");
}

const emptyHomePageData: HomePageData = { _id: "" };

function resolvePracticeAreas(
  homePageData: HomePageData,
): ResolvedPracticeArea[] | undefined {
  if (!homePageData.practiceAreas?.length) return undefined;

  return homePageData.practiceAreas.map((area) => ({
    label: area.label,
    description: area.description,
    iconUrl: area.icon
      ? urlFor(area.icon).width(48).height(48).auto("format").url()
      : undefined,
    iconAlt: area.icon?.alt,
  }));
}

function buildFaqJsonLd(faqs: HomeFaqItem[] | undefined) {
  if (!faqs?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default async function Home() {
  const [homePageData, author, contactCtaData] = await Promise.all([
    getHomePageData(),
    getFirstAuthor(),
    getContactCtaData(),
  ]);

  const data = homePageData ?? emptyHomePageData;

  const heroImageUrl = data.heroImage
    ? urlFor(data.heroImage).width(960).quality(80).auto("format").url()
    : PLACEHOLDER_IMAGE;
  const aboutImageUrl = data.aboutImage
    ? urlFor(data.aboutImage).width(800).quality(80).auto("format").url()
    : PLACEHOLDER_IMAGE;
  const authorAvatarUrl = author?.image
    ? getImageUrl(author.image)
    : "/avatar-one.jpg";
  const whyChooseUsImageUrl = data.whyChooseUsImage
    ? urlFor(data.whyChooseUsImage).width(720).quality(80).auto("format").url()
    : PLACEHOLDER_IMAGE;

  const faqJsonLd = buildFaqJsonLd(data.faqs);

  return (
    <>
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <HeroSection homePageData={data} heroImageUrl={heroImageUrl} />
      <AboutSection
        aboutImageUrl={aboutImageUrl}
        imageAlt={data.aboutImage?.alt}
        authorAvatarUrl={authorAvatarUrl}
        authorName={author?.name ?? "Adv. Rinal Patel"}
        aboutTag={data.aboutTag}
        aboutTitle={data.aboutTitle}
        aboutDescription={data.aboutDescription}
        aboutCtaButtonText={data.aboutCtaButtonText}
      />
      <PracticeAreas
        practiceAreaTag={data.practiceAreaTag}
        practiceAreaTitle={data.practiceAreaTitle}
        practiceAreaDescription={data.practiceAreaDescription}
        practiceAreas={resolvePracticeAreas(data)}
      />
      <WhyChooseUs
        homePageData={data}
        whyChooseUsImageUrl={whyChooseUsImageUrl}
      />
      <SuccessStatistics
        trackRecordTag={data.trackRecordTag}
        trackRecordTitle={data.trackRecordTitle}
        trackRecordDescription={data.trackRecordDescription}
        trackRecords={data.trackRecords}
      />
      <Testimonials
        testimonialTag={data.testimonialTag}
        testimonialTitle={data.testimonialTitle}
        testimonialDescription={data.testimonialDescription}
        testimonials={data.testimonials}
      />
      <Faq
        faqTag={data.faqTag}
        faqTitle={data.faqTitle}
        faqDescription={data.faqDescription}
        faqCtaButtonText={data.faqCtaButtonText}
        faqs={data.faqs}
      />
      <ContactCta contactCtaData={contactCtaData} />
    </>
  );
}
