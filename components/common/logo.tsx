import Image from "next/image";
import Link from "next/link";

export function Logo({
    className = "",
    size = "default",
    logoUrl,
}: {
    className?: string;
    size?: "default" | "large" | "custom";
    logoUrl: string;
}) {

    return (
        <Link
            href="/"
            className={`inline-flex items-center shrink-0 `}
        >
            <Image
                src={logoUrl || "/logo.png"}
                alt="RP Law Offices"
                width={128}
                height={44}
                className={`object-contain ${size === "large" ? "h-11 w-auto md:w-32" : size === "custom" ? className : "h-9 w-auto md:w-24"}`}
                priority
            />
        </Link>
    );
}