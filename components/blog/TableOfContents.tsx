"use client";

import { ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { TocHeading } from "@/lib/portable-text";

const HEADER_OFFSET = 80;

interface TableOfContentsProps {
    headings: TocHeading[];
    children: React.ReactNode;
}

export default function TableOfContents({
    headings,
    children,
}: TableOfContentsProps) {
    const [activeId, setActiveId] = useState(headings[0]?.id ?? "");

    const handleNavigate = (id: string) => {
        const target = document.getElementById(id);
        if (!target) return;

        setActiveId(id);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(() => {
        if (headings.length === 0) return;

        const handleScroll = () => {
            let current = headings[0].id;

            for (const heading of headings) {
                const el = document.getElementById(heading.id);
                if (el && el.getBoundingClientRect().top <= HEADER_OFFSET + 16) {
                    current = heading.id;
                }
            }

            setActiveId(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [headings]);

    if (headings.length === 0) return <>{children}</>;

    return (
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
            <aside className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto lg:self-start">
                <div className="rounded-2xl border border-border bg-surface py-5">
                    <div className="mb-3 flex items-center gap-2 px-4">
                        <ChevronRightIcon
                            className="h-4 w-4 text-accent"
                            aria-hidden="true"
                        />
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                            In This Article
                        </h2>
                    </div>

                    <nav aria-label="Table of contents">
                        <ul>
                            {headings.map((heading) => {
                                const isActive = activeId === heading.id;
                                return (
                                    <li key={heading.id}>
                                        <a
                                            href={`#${heading.id}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavigate(heading.id);
                                            }}
                                            className={`relative block border-l-2 py-2 text-sm leading-snug transition-colors
                      ${heading.level === 3 ? "pl-6 text-muted/80" : "pl-4 font-medium"}
                      ${isActive
                                                    ? "border-accent bg-background text-primary"
                                                    : "border-transparent text-muted hover:bg-background hover:text-primary"
                                                }`}
                                        >
                                            {heading.text}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </aside>

            <div className="min-w-0">{children}</div>
        </div>
    );
}
