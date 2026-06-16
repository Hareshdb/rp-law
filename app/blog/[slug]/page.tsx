import BlogDetail from "@/components/blog/BlogDetail";
import { getPostBySlug, getRelatedPosts } from "@/lib/apis";
import { SanityPost } from "@/lib/types";

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {

    const { slug } = await params;
    const blogDetail = await getPostBySlug(slug);
    const relatedBlogs = await getRelatedPosts(blogDetail?._id ?? "", blogDetail?.categories?.[0]._id ?? "");

    return <BlogDetail blogDetail={blogDetail as SanityPost} relatedBlogs={relatedBlogs} />;
}

export default BlogDetailPage;
