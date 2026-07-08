import { FooterDataProvider } from "@/context/footer-data-context";
import { getFooterData, getSettings } from "@/lib/apis";
import { getSiteUrl } from "@/lib/constants";
import { getImageUrl } from "@/lib/helpers";
import WhatsAppFloat from "@components/common/whatsapp-float";
import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "RP Law Firm | Trusted Legal Excellence",
    template: "%s",
  },
  description:
    "RP Law Firm provides expert legal counsel in corporate law, litigation, labor & employment, NRI services, and real estate.",
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
      <head>
      <meta name="google-site-verification" content="LjN0bMBdK17wU_T6Yr3YoXRKmVn4nZrKKLwC551_3hg" />        
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5XC2BMMB');
      `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XC2BMMB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
