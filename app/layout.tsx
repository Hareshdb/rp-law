import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppFloat from "@components/common/whatsapp-float";
import ContactCta from "@components/home/contact-cta";
import Header from "@components/layout/header";
import Footer from "@components/layout/footer";
import { FooterDataProvider } from "@/context/footer-data-context";
import "./globals.css";
import { getFooterData, getSettings } from "@/lib/apis";
import { getImageUrl } from "@/lib/helpers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RP Law Associates | Trusted Legal Excellence",
    template: "%s",
  },
  description:
    "RP Law Associates provides expert legal counsel in corporate law, litigation, labor & employment, NRI services, and real estate.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [settings, footerData] = await Promise.all([
    getSettings(),
    getFooterData(),
  ]);
  const logoUrl = settings?.logo ? getImageUrl(settings.logo) : "/logo.png";
  const logoInvertedUrl = settings?.logoInverted
    ? getImageUrl(settings.logoInverted)
    : logoUrl;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <FooterDataProvider footerData={footerData}>
          <Header logoUrl={logoUrl} />
          <main className="flex-1">{children}</main>
          <Footer logoUrl={logoInvertedUrl} footerData={footerData} />
          <WhatsAppFloat mobileNumber={footerData?.mobileNumber} />
        </FooterDataProvider>
      </body>
    </html>
  );
}
