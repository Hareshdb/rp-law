import BlogCard from "@components/blog/BlogCard";
import type { Blog } from "@/lib/types";
import Link from "next/link";

interface RelatedBlogsProps {
    blogs: Blog[];
}

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
    if (blogs.length === 0) return null;

    return (
        <section className="bg-background py-20">
            <div className="container">
                <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            Related Blogs
                        </div>
                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-muted">
                            More from our legal blog
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="text-xs font-bold uppercase tracking-[0.15em] text-accent transition-colors hover:text-accent-light"
                    >
                        View All Blogs
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
}
