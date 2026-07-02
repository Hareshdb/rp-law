import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@components/layout/header";
import Footer from "@components/layout/footer";
import "./globals.css";
import { getSettings } from "@/lib/apis";
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
  title: "RP Law Associates | Trusted Legal Excellence",
  description:
    "RP Law Associates provides expert legal counsel in corporate law, litigation, labor & employment, NRI services, and real estate.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const settings = await getSettings();
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
        <Header logoUrl={logoUrl} />
        <main className="flex-1">{children}</main>
        <Footer logoUrl={logoInvertedUrl} />
      </body>
    </html>
  );
}
