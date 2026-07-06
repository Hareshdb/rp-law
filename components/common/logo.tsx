"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { handleHomeNavigationClick } from "@/lib/practice-areas-navigation";
import { usePathname } from "next/navigation";

export function Logo({
    className = "h-9 w-auto md:w-24",
    logoUrl,
    onClick,
}: {
    className?: string;
    logoUrl: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
    const pathname = usePathname();

    return (
        <Link
            href="/"
            onClick={(event) => {
                handleHomeNavigationClick(event, pathname);
                onClick?.(event);
            }}
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
