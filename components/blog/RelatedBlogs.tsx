import BlogCard from "@components/blog/BlogCard";
import Link from "next/link";

interface RelatedBlog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    category: string;
    publishedAt: string;
}

interface RelatedBlogsProps {
    blogs: RelatedBlog[];
}

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
    if (blogs.length === 0) return null;

    return (
        <section className="bg-background py-20">
            <div className="container">
                <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            Related Articles
                        </h2>
                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-muted">
                            More from our legal blog
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="text-xs font-bold uppercase tracking-[0.15em] text-accent transition-colors hover:text-accent-light"
                    >
                        View All Articles
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
