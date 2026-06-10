import { Scale } from "lucide-react";
import Link from "next/link";

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
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact-us"
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent-light md:inline-flex"
        >
          Schedule Consultation
        </Link>

        <Link
          href="/contact-us"
          className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-primary md:hidden"
        >
          Consult
        </Link>
      </div>
    </header>
  );
}

export { Logo };
