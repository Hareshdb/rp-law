import { getFooterData } from "@/lib/apis";
import ContactCta from "@components/home/contact-cta";
import Testimonials from "@components/home/testimonials";

export default async function ContactUs() {
  const footerData = await getFooterData();

  return (
    <>
      <ContactCta footerData={footerData} />
      <Testimonials />
    </>
  );
}