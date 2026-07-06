import AboutSection from "@/components/home/about-section";
import ContactCta from "@/components/home/contact-cta";
import { getFirstAuthor, getHomePageData } from "@/lib/apis";
import { getImageUrl } from "@/lib/helpers";
import { PLACEHOLDER_IMAGE } from "@/lib/constants";
import { getPageMetadata } from "@/lib/metadata";
import { urlFor } from "@/lib/sanity-image-builder";
import Faq from "@components/home/faq";
import HeroSection from "@components/home/hero-section";
import PracticeAreas from "@components/home/practice-areas";
import SuccessStatistics from "@components/home/success-statistics";
import Testimonials from "@components/home/testimonials";
import WhyChooseUs from "@components/home/why-choose-us";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("home");
}

export default async function Home() {

  const [homePageData, author] = await Promise.all([
    getHomePageData(),
    getFirstAuthor(),
  ]);

  const heroImageUrl = homePageData.heroImage
    ? urlFor(homePageData.heroImage).width(1200).quality(85).auto("format").url()
    : PLACEHOLDER_IMAGE;
  const aboutImageUrl = homePageData.aboutImage
    ? urlFor(homePageData.aboutImage).width(900).quality(85).auto("format").url()
    : PLACEHOLDER_IMAGE;
  const authorAvatarUrl = author?.image
    ? getImageUrl(author.image)
    : "/avatar-one.jpg";
  const whyChooseUsImageUrl = homePageData.whyChooseUsImage
    ? urlFor(homePageData.whyChooseUsImage).width(800).quality(85).auto("format").url()
    : PLACEHOLDER_IMAGE;

  return (
    <>
      <HeroSection homePageData={homePageData} heroImageUrl={heroImageUrl} />
      <AboutSection
        aboutImageUrl={aboutImageUrl}
        imageAlt={homePageData.aboutImage?.alt}
        authorAvatarUrl={authorAvatarUrl}
        authorName={author?.name ?? "Adv. Rinal Patel"}
      />
      <PracticeAreas />
      <WhyChooseUs
        homePageData={homePageData}
        whyChooseUsImageUrl={whyChooseUsImageUrl}
      />
      <SuccessStatistics />
      <Testimonials />
      <Faq />
      <ContactCta />
    </>
  );
}
