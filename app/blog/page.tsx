import BlogListing from "@/components/blog/BlogList";
import { getPosts } from "@/lib/apis";

const BlogPage = async () => {
  const blogs = await getPosts();

  return (
    <div className="bg-background">
      <BlogListing blogs={blogs} />
    </div>
  );
};

export default BlogPage;
