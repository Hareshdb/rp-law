import type { Metadata } from "next";
import { getPageSeoData } from "@/lib/apis";
import type { PageSeoData, PageSeoKey } from "@/lib/types";

const PAGE_SEO_FIELD_MAP: Record<
  PageSeoKey,
  keyof Pick<
    PageSeoData,
    "homePageSeo" | "blogPageSeo" | "aboutPageSeo" | "contactPageSeo"
  >
> = {
  home: "homePageSeo",
  blog: "blogPageSeo",
  about: "aboutPageSeo",
  contact: "contactPageSeo",
};

const DEFAULT_PAGE_METADATA: Record<PageSeoKey, Metadata> = {
  home: {
    title: "RP Law Associates | Trusted Legal Excellence",
    description:
      "RP Law Associates provides expert legal counsel in corporate law, litigation, labor & employment, NRI services, and real estate.",
  },
  blog: {
    title: "Blog | RP Law Associates",
    description:
      "Read legal insights, updates, and expert commentary from RP Law Associates on corporate law, litigation, and more.",
  },
  about: {
    title: "About Us | RP Law Associates",
    description:
      "Learn about RP Law Associates — our mission, vision, values, and the team behind our trusted legal services.",
  },
  contact: {
    title: "Contact Us | RP Law Associates",
    description:
      "Get in touch with RP Law Associates for expert legal counsel. Reach us by phone, email, or our contact form.",
  },
};

export async function getPageMetadata(page: PageSeoKey): Promise<Metadata> {
  const pageSeo = await getPageSeoData();
  const seoField = PAGE_SEO_FIELD_MAP[page];
  const seo = pageSeo?.[seoField];
  const defaults = DEFAULT_PAGE_METADATA[page];

  return {
    title: seo?.metaTitle || defaults.title,
    description: seo?.metaDescription || defaults.description,
  };
}
