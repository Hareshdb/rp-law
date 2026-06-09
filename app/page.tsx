import HeroSection from "./components/home/hero-section";
import TrustIndicators from "./components/home/trust-indicators";
import PracticeAreas from "./components/home/practice-areas";
import WhyChooseUs from "./components/home/why-choose-us";
import SuccessStatistics from "./components/home/success-statistics";
import Testimonials from "./components/home/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <PracticeAreas />
      <WhyChooseUs />
      <SuccessStatistics />
      <Testimonials />
    </>
  );
}
