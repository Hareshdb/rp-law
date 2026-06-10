// components/blogs/BlogCard.tsx

import { formatDate } from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";

interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    category: string;
    publishedAt: string;
}

export default function BlogCard({ blog }: { blog: Blog }) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-60 overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex min-h-[280px] flex-col p-6">
                <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                        {blog.category}
                    </span>

                    <span className="text-sm text-muted">
                        {formatDate(blog.publishedAt)}
                    </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-primary transition-colors group-hover:text-accent">
                    {blog.title}
                </h3>

                {/* Fixed-height description */}
                <div className="mb-6 min-h-[72px]">
                    <p className="line-clamp-3 leading-6 text-muted">
                        {blog.excerpt}
                    </p>
                </div>

                {/* Pushes button to bottom */}
                <div className="mt-auto">
                    <Link
                        href={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-accent"
                    >
                        Read More
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>
            </div>
        </article>
    );
}