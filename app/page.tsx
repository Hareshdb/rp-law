import { getHomePageData } from "@/lib/apis";
import { sanityClient } from "@/lib/sanity-client";
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
    ? urlFor(homePageData.heroImage).url()
    : process.env.PLACEHOLDER_IMAGE_URL || "/placeholder.jpg";

  return (
    <>
      <HeroSection homePageData={homePageData} heroImageUrl={heroImageUrl} />
      <PracticeAreas />
      <WhyChooseUs />
      <SuccessStatistics />
      <Testimonials />
      <Faq />
      {/* <ContactCta /> */}
    </>
  );
}
