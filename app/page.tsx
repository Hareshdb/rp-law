import HeroSection from "./components/home/hero-section";
import PracticeAreas from "./components/home/practice-areas";
import WhyChooseUs from "./components/home/why-choose-us";
import SuccessStatistics from "./components/home/success-statistics";
import Testimonials from "./components/home/testimonials";
import Faq from "./components/home/faq";
import ContactCta from "./components/home/contact-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PracticeAreas />
      <WhyChooseUs />
      <SuccessStatistics />
      <Testimonials />
      <Faq />
      <ContactCta />
    </>
  );
}
