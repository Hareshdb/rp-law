// components/blogs/BlogListing.tsx

"use client";

import { useMemo, useState } from "react";
import BlogCard from "@components/blog/BlogCard";
import Pagination from "@components/common/pagination";

interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    category: string;
    publishedAt: string;
}

interface Props {
    blogs: Blog[];
}

const BLOGS_PER_PAGE = 6;

export default function BlogListing({ blogs }: Props) {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(
        blogs.length / BLOGS_PER_PAGE
    );

    const currentBlogs = useMemo(() => {
        const start = (page - 1) * BLOGS_PER_PAGE;

        return blogs.slice(
            start,
            start + BLOGS_PER_PAGE
        );
    }, [page, blogs]);

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mb-14 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-primary lg:text-5xl">
                        Legal Insights & Resources
                    </h1>

                    <p className="mx-auto max-w-2xl text-muted">
                        Explore articles, legal updates, and practical
                        guidance from our experienced legal team.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {currentBlogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            blog={blog}
                        />
                    ))}
                </div>

                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                />
            </div>
        </section>
    );
}