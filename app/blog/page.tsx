import BlogListing from "@/components/blog/BlogList";
import { getMetadata, getPosts } from "@/lib/apis";
import { getPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactCtaSection = dynamic(
  () => import("@/components/home/contact-cta-section"),
);

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
