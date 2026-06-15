import type { PortableTextBlock } from "@/lib/portable-text";
import type { SanityImageSource } from "@sanity/image-url";

export type HomePageData = {
  _id: string;
  heroTitle: string;
  heroHighlightText: string;
  heroSubtitle: string;
  heroImage: SanityImageSource;
};

export type PostAuthor = {
  _id: string;
  name: string;
  slug: string;
  image?: SanityImageSource;
  bio?: PortableTextBlock[];
};

export type PostCategory = {
  _id: string;
  title: string;
  description?: string;
};

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  short_description?: string;
  body: PortableTextBlock[];
  mainImage?: SanityImageSource;
  author?: PostAuthor;
  categories?: PostCategory[];
};

export type Blog = {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  image: string;
  category?: string;
  publishedAt: string;
};
