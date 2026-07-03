import BlogDetail from "@/components/blog/BlogDetail";
import { getPostBySlug, getRelatedPostsByCategory } from "@/lib/apis";
import { Blog, SanityPost } from "@/lib/types";
import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: "Blog | RP Law Associates",
        };
    }

    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.short_description,
    };
}

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const blogDetail = await getPostBySlug(slug);
    const primaryCategoryId = blogDetail?.categories?.[0]?._id;
    const relatedBlogs: Blog[] =
        blogDetail && primaryCategoryId
            ? await getRelatedPostsByCategory(primaryCategoryId, blogDetail._id)
            : [];

    return <BlogDetail blogDetail={blogDetail as SanityPost} relatedBlogs={relatedBlogs} />;
}

export default BlogDetailPage;
