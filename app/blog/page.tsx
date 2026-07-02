import BlogListing from "@/components/blog/BlogList";
import ContactCta from "@/components/home/contact-cta";
import { getPosts } from "@/lib/apis";

const BlogPage = async () => {
  const blogs = await getPosts();


  return (
    <div className="bg-background">
      <BlogListing blogs={blogs} />
      <ContactCta />
    </div>
  );
};

export default BlogPage;
