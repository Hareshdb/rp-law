// components/blogs/BlogDetail.tsx

import { formatDate } from "@/lib/helpers";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogDetailProps {
    blog: {
        title: string;
        subtitle: string;
        slug: string;
        category: string;
        image: string;
        publishedAt: string;
        excerpt: string;
        author: string;
        authorImage: string;
        authorDescription: string;
        content: string; // HTML from CMS
    };
}

export default function BlogDetail({
    blog,
}: BlogDetailProps) {
    return (
        <article className="bg-background">
            {/* Hero */}

            <section className="relative flex min-h-[62vh] items-start overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
                    alt="Law office"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/75" />

                {/* Subtle Pattern */}
                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-14">
                    <div className="max-w-3xl">

                        {/* Breadcrumb */}
                        <nav
                            aria-label="Breadcrumb"
                            className="mb-6 flex items-center gap-2 text-sm text-white/70"
                        >
                            <Link
                                href="/blog"
                                className="transition-colors hover:text-accent text-xl"
                            >
                                Blog
                            </Link>

                            <span> <ChevronRightIcon className="w-4 h-4" /> </span>

                            <span className="line-clamp-1 text-white text-xl">
                                {blog.title}
                            </span>
                        </nav>
                        <div className="mt-20">
                            {/* Category */}
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 bg-accent" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                                    {blog.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-4xl">
                                {blog.title}
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                                {blog.subtitle}
                            </p>

                            {/* Date */}
                            <p className="mt-6 text-sm font-medium text-white/70">
                                {formatDate(blog.publishedAt)}
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Excerpt */}
            <section className="space-y-5 pt-5">
                <div className="container">
                    <div className="mb-10 border-l-4 border-accent pl-6">
                        <p className="text-lg leading-8 text-muted italic">
                            {blog.excerpt}
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid gap-16 px-4 sm:px-6 lg:grid-cols-[280px,1fr] lg:px-36">

                    {/* TOC */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-28 rounded-2xl border border-border bg-surface p-6">
                            <h3 className="mb-4 font-bold text-primary">
                                Table of Contents
                            </h3>

                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a href="#intro" className="text-muted hover:text-accent">
                                        Introduction
                                    </a>
                                </li>

                                <li>
                                    <a href="#rights" className="text-muted hover:text-accent">
                                        Ownership Rights
                                    </a>
                                </li>

                                <li>
                                    <a href="#transfer" className="text-muted hover:text-accent">
                                        Property Transfer
                                    </a>
                                </li>

                                <li>
                                    <a href="#remedies" className="text-muted hover:text-accent">
                                        Legal Remedies
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    {/* Content */}
                    <article className="prose prose-lg max-w-none text-muted text-lg">
                        <div id="intro">
                            <h2>Introduction</h2>
                            <p>
                                Lorem ipsum dolor sit amet...
                            </p>
                        </div>

                        <div id="rights">
                            <h2>Ownership Rights</h2>
                            <p>
                                Lorem ipsum dolor sit amet...
                            </p>
                        </div>

                        <blockquote>
                            Property ownership is not merely possession,
                            but also legal recognition and protection.
                        </blockquote>

                        <div id="transfer">
                            <h2>Property Transfer</h2>
                            <p>
                                Lorem ipsum dolor sit amet...
                            </p>
                        </div>

                        <div id="remedies">
                            <h2>Legal Remedies</h2>
                            <p>
                                Lorem ipsum dolor sit amet...
                            </p>
                        </div>
                    </article>
                </div>

                <div className="container">

                    {/* Rich HTML Content */}
                    <div
                        className="text-muted text-lg"
                        // className="
                        //     prose
                        //     prose-lg
                        //     max-w-none

                        //     prose-headings:text-primary
                        //     prose-p:text-foreground
                        //     prose-strong:text-primary
                        //     prose-a:text-accent
                        //     prose-blockquote:border-accent
                        //     prose-blockquote:text-muted
                        //     prose-li:text-foreground
                        //     prose-img:rounded-xl
                        // "
                        dangerouslySetInnerHTML={{
                            __html: blog.content,
                        }}
                    />
                </div>
            </section>

            <section className="py-5">
                <div className="container max-w-5xl">
                    <div className=" flex flex-col items-center gap-6 rounded-3xl border border-border bg-surface p-8 text-center md:flex-row md:text-left ">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full outline outline-2 outline-offset-[3px] outline-accent">
                            <Image
                                src={blog.authorImage}
                                alt="Founder"
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-primary">
                                {blog.author}
                            </h3>

                            <p className="mt-2 text-muted">
                                {blog.authorDescription}
                            </p>
                        </div>

                    </div>

                </div>
            </section>

        </article>
    );
}