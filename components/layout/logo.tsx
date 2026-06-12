import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center shrink-0 ${className}`}
    >
      <Image
        src="/logo.png"
        alt="RP Law Offices"
        width={128}
        height={44}
        className={
          size === "large"
            ? "h-14 w-auto md:h-[44px] md:w-[128px] object-contain"
            : "h-9 w-auto md:h-[44px] md:w-[128px] object-contain"
        }
        priority
      />
    </Link>
  );
}