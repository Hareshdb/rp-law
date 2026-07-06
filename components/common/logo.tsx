import Image from "next/image";
import Link from "next/link";

export function Logo({
    className = "h-9 w-auto md:w-24",
    logoUrl,
}: {
    className?: string;
    logoUrl: string;
}) {
    return (
        <Link
            href="/"
            className="inline-flex items-center shrink-0"
        >
            <Image
                src={logoUrl || "/logo.png"}
                alt="RP Law Firm"
                width={128}
                height={44}
                className={`object-cover ${className}`}
                priority
            />
        </Link>
    );
}
