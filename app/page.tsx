import { getHomePageData } from "@/lib/apis";
import { PLACEHOLDER_IMAGE } from "@/lib/constants";
import { urlFor } from "@/lib/sanity-image-builder";
import { HomePageData } from "@/lib/types";
import Faq from "@components/home/faq";
import HeroSection from "@components/home/hero-section";
import PracticeAreas from "@components/home/practice-areas";
import SuccessStatistics from "@components/home/success-statistics";
import Testimonials from "@components/home/testimonials";
import WhyChooseUs from "@components/home/why-choose-us";


export default async function Home() {

  const homePageData: HomePageData = await getHomePageData();
  const heroImageUrl = homePageData.heroImage
    ? urlFor(homePageData.heroImage).width(1200).quality(85).auto("format").url()
    : PLACEHOLDER_IMAGE;
  const whyChooseUsImageUrl = homePageData.whyChooseUsImage
    ? urlFor(homePageData.whyChooseUsImage).width(800).quality(85).auto("format").url()
    : PLACEHOLDER_IMAGE;

  return (
    <>
      <HeroSection homePageData={homePageData} heroImageUrl={heroImageUrl} />
      <PracticeAreas />
      <WhyChooseUs
        homePageData={homePageData}
        whyChooseUsImageUrl={whyChooseUsImageUrl}
      />
      <SuccessStatistics />
      <Testimonials />
      <Faq />
    </>
  );
}
