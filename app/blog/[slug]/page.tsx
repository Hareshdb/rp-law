import BlogDetail from "@/components/blog/BlogDetail";
import { getPostBySlug, getRelatedPostsByCategory } from "@/lib/apis";
import { Blog, SanityPost } from "@/lib/types";

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
