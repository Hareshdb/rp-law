"use client";
import { Scale, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact-us", label: "Contact Us" },
];

function Logo({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${isLight ? "bg-white/10" : "bg-primary"
          }`}
      >
        <Scale
          className="h-6 w-6 text-accent"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-col leading-tight">
        <span
          className={`text-lg font-bold ${isLight ? "text-white" : "text-primary"
            }`}
        >
          RP Law
        </span>

        <span
          className={`text-xs font-medium uppercase tracking-wide ${isLight ? "text-white/60" : "text-muted"
            }`}
        >
          Associates
        </span>
      </div>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${isActive
                    ? "text-accent-light"
                    : "text-foreground/80 hover:text-accent-light"
                  }`}
              >
                {link.label}

                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent-light" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact-us"
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent-light md:inline-flex"
        >
          Schedule Consultation
        </Link>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contact-us"
            className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-accent-light"
          >
            Consult
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-lg p-2 text-primary transition-colors hover:bg-primary/10"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-border bg-surface transition-all duration-300 md:hidden ${mobileMenuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col px-4 py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive
                    ? "bg-accent/10 text-accent-light"
                    : "text-foreground/80 hover:bg-primary/5 hover:text-accent-light"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export { Logo };