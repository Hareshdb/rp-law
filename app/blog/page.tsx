import BlogListing from "@/components/blog/BlogList";
import ContactCtaSection from "@/components/home/contact-cta-section";
import { getMetadata, getPosts } from "@/lib/apis";
import { getPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("blog");
}

const BlogPage = async () => {
  const [blogs, metadata] = await Promise.all([getPosts(), getMetadata()]);

  return (
    <div className="bg-background">
      <BlogListing
        blogs={blogs}
        blogHeroTitle={metadata?.blogHeroTitle}
        blogHeroDescription={metadata?.blogHeroDescription}
      />
      <ContactCtaSection />
    </div>
  );
};

export default BlogPage;
