import Link from "next/link";
import { Logo } from "@components/common/logo";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import type { FooterData } from "@/lib/types";

const defaultFooterData: Required<FooterData> = {
  footerSummary:
    "RP Law Associates delivers trusted legal counsel with integrity, expertise, and a relentless commitment to protecting your rights.",
  address:
    "A-208, Ananta Square, Opp. 108 EMRI, Naroda,\nAhmedabad, Gujarat 382330, India",
  mobileNumber: "+91 95121 23013",
  email: "advocate.rinal@gmail.com",
};

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/#practice-areas", label: "Practice Areas" },
  { href: "/contact-us", label: "Contact Us" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rinal-patel-0b999920a/",
    icon: (
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/legal_charm",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
];

export default function Footer({
  logoUrl,
  footerData,
}: {
  logoUrl: string;
  footerData?: FooterData;
}) {
  const summary = footerData?.footerSummary || defaultFooterData.footerSummary;
  const address = footerData?.address || defaultFooterData.address;
  const mobileNumber =
    footerData?.mobileNumber || defaultFooterData.mobileNumber;
  const email = footerData?.email || defaultFooterData.email;
  const phoneHref = `tel:${mobileNumber.replace(/\s/g, "")}`;

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <Logo logoUrl={logoUrl} className="w-[188px]" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {summary}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contact Us
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="whitespace-pre-line">{address}</span>
              </li>

              <li className="flex gap-3">
                <PhoneCall
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <a
                  href={phoneHref}
                  className="transition-colors hover:text-accent"
                >
                  {mobileNumber}
                </a>
              </li>

              <li className="flex gap-3">
                <Mail
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${email}`}
                  className="transition-colors hover:text-accent"
                >
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} RP Law Associates. All rights
            reserved.
          </p>
          <div className="flex gap-1 text-sm text-white/50">
            Designed & Developed by
            <Link
              className="text-accent hover:underline"
              href="https://ebranding.studio"
              target="_blank"
            >
              eBranding Studio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
