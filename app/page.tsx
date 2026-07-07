import AboutSection from "@/components/home/about-section";
import ContactCtaSection from "@/components/home/contact-cta-section";
import { getFirstAuthor, getHomePageData } from "@/lib/apis";
import { getImageUrl } from "@/lib/helpers";
import { PLACEHOLDER_IMAGE } from "@/lib/constants";
import { getPageMetadata } from "@/lib/metadata";
import { urlFor } from "@/lib/sanity-image-builder";
import type { HomePageData } from "@/lib/types";
import Faq from "@components/home/faq";
import HeroSection from "@components/home/hero-section";
import PracticeAreas, {
  type ResolvedPracticeArea,
} from "@components/home/practice-areas";
import SuccessStatistics from "@components/home/success-statistics";
import Testimonials from "@components/home/testimonials";
import WhyChooseUs from "@components/home/why-choose-us";
import type { Metadata } from "next";

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

export default async function Home() {
  const [homePageData, author] = await Promise.all([
    getHomePageData(),
    getFirstAuthor(),
  ]);

  const data = homePageData ?? emptyHomePageData;


  const heroImageUrl = data.heroImage
    ? urlFor(data.heroImage).width(1200).quality(85).auto("format").url()
    : PLACEHOLDER_IMAGE;
  const aboutImageUrl = data.aboutImage
    ? urlFor(data.aboutImage).width(900).quality(85).auto("format").url()
    : PLACEHOLDER_IMAGE;
  const authorAvatarUrl = author?.image
    ? getImageUrl(author.image)
    : "/avatar-one.jpg";
  const whyChooseUsImageUrl = data.whyChooseUsImage
    ? urlFor(data.whyChooseUsImage).width(800).quality(85).auto("format").url()
    : PLACEHOLDER_IMAGE;

  return (
    <>
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
      <ContactCtaSection />
    </>
  );
}
