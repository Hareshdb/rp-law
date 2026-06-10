// components/blogs/BlogDetail.tsx

import { formatDate } from "@/lib/helpers";
import Image from "next/image";

interface BlogDetailProps {
    blog: {
        title: string;
        slug: string;
        category: string;
        image: string;
        publishedAt: string;
        excerpt: string;
        content: string; // HTML from CMS
    };
}

export default function BlogDetail({
    blog,
}: BlogDetailProps) {
    return (
        <article className="bg-background">
            {/* Hero */}
            <section className="relative h-[350px] md:h-[500px]">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-primary/60" />

                <div className="absolute inset-0 flex items-end">
                    <div className="container mx-auto px-4 pb-12 lg:px-8">
                        <span className="mb-4 inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary-dark">
                            {blog.category}
                        </span>

                        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
                            {blog.title}
                        </h1>

                        <p className="mt-4 text-white/80">
                            {formatDate(blog.publishedAt)}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto max-w-4xl px-4 lg:px-8">

                    {/* Excerpt */}
                    <div className="mb-10 border-l-4 border-accent pl-6">
                        <p className="text-lg leading-8 text-muted italic">
                            {blog.excerpt}
                        </p>
                    </div>

                    {/* Rich HTML Content */}
                    <div
                        className="
                            prose
                            prose-lg
                            max-w-none

                            prose-headings:text-primary
                            prose-p:text-foreground
                            prose-strong:text-primary
                            prose-a:text-accent
                            prose-blockquote:border-accent
                            prose-blockquote:text-muted
                            prose-li:text-foreground
                            prose-img:rounded-xl
                        "
                        dangerouslySetInnerHTML={{
                            __html: blog.content,
                        }}
                    />
                </div>
            </section>
        </article>
    );
}