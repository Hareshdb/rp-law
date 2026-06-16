import BlogDetail from "@/components/blog/BlogDetail";
import { getPostBySlug } from "@/lib/apis";
import type { PortableTextBlock } from "@/lib/portable-text";
import { SanityPost } from "@/lib/types";

const relatedBlogs = [
    {
        id: "2",
        title: "What to Do After Receiving a Legal Notice",
        slug: "what-to-do-after-receiving-a-legal-notice",
        short_description:
            "Receiving a legal notice can be stressful. This guide explains the appropriate actions and how to protect your rights.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
        category: "Civil Law",
        publishedAt: "2026-05-28",
    },
    {
        id: "3",
        title: "Key Points to Include in a Business Contract",
        slug: "key-points-to-include-in-business-contract",
        short_description:
            "A well-drafted contract minimizes disputes and protects all parties. Discover the essential clauses every contract should contain.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        category: "Corporate Law",
        publishedAt: "2026-05-20",
    },
    {
        id: "4",
        title: "The Complete Guide to Divorce Proceedings",
        slug: "complete-guide-to-divorce-proceedings",
        short_description:
            "Understand the legal process, documentation requirements, and timelines involved in divorce proceedings.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
        category: "Family Law",
        publishedAt: "2026-05-15",
    },
];

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {

    const { slug } = await params;
    const blogDetail = await getPostBySlug(slug);

    return <BlogDetail blogDetail={blogDetail as SanityPost} relatedBlogs={relatedBlogs} />;
}

export default BlogDetailPage;
