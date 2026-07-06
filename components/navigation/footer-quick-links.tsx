"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PRACTICE_AREAS_HREF,
  handleHomeNavigationClick,
  handlePracticeAreasNavigationClick,
} from "@/lib/practice-areas-navigation";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: PRACTICE_AREAS_HREF, label: "Practice Areas" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function FooterQuickLinks() {
  const pathname = usePathname();

  return (
    <ul className="mt-6 space-y-3">
      {quickLinks.map((link) => {
        const isHomeLink = link.href === "/";
        const isPracticeAreasLink = link.href === PRACTICE_AREAS_HREF;

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={(event) => {
                if (isHomeLink) {
                  handleHomeNavigationClick(event, pathname);
                  return;
                }

                if (isPracticeAreasLink) {
                  handlePracticeAreasNavigationClick(event, pathname);
                }
              }}
              className="text-sm text-white/70 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
