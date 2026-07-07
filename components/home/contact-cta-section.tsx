import { getContactCtaData } from "@/lib/apis";
import ContactCta from "./contact-cta";

export default async function ContactCtaSection() {
  const contactCtaData = await getContactCtaData();

  return <ContactCta contactCtaData={contactCtaData} />;
}
