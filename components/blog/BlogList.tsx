"use client";

import { useMemo, useState } from "react";
import BlogCard from "@components/blog/BlogCard";
import Pagination from "@components/common/pagination";
import type { Blog } from "@/lib/types";
import Image from "next/image";

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
        <>
            <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
                    alt="Insights & Resources Listing Page"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/75" />

                {/* Content */}
                <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-10 sm:px-10 lg:px-14">
                    <div className="max-w-3xl text-center">

                        {/* Title */}
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Legal Insights & Resources
                        </h1>

                        {/* Subtitle */}
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
                        Explore expert-written blogs, practical legal guidance, and updates designed to simplify complex legal issues and keep you informed.
                        </p>

                    </div>
                </div>
            </section>
            <section className="py-20 container">
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

            </section>
        </>


    );
}