import Faq from "@components/home/faq";
import HeroSection from "@components/home/hero-section";
import PracticeAreas from "@components/home/practice-areas";
import SuccessStatistics from "@components/home/success-statistics";
import Testimonials from "@components/home/testimonials";
import WhyChooseUs from "@components/home/why-choose-us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PracticeAreas />
      <WhyChooseUs />
      <SuccessStatistics />
      <Testimonials />
      <Faq />
    </>
  );
}
