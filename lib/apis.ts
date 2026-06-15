import { sanityClient } from "./sanity-client";
import { urlFor } from "./sanity-image-builder";
import type { Blog, HomePageData, SanityPost } from "./types";

const PLACEHOLDER_IMAGE =
  process.env.PLACEHOLDER_IMAGE_URL ||
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80";

const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    short_description,
    body,
    mainImage,

    author->{
      _id,
      name,
      "slug": slug.current,
      image,
      bio
    },

    categories[]->{
      _id,
      title,
      description
    }
  }
`;


const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    short_description,
    body,
    mainImage,

    author->{
      _id,
      name,
      "slug": slug.current,
      image,
      bio
    },

    categories[]->{
      _id,
      title,
      description
    }
  }
`;

export function mapSanityPostToBlog(post: SanityPost): Blog {
  return {
    id: post._id,
    title: post.title,
    slug: post.slug,
    short_description: post.short_description ?? "",
    image: post.mainImage
      ? urlFor(post.mainImage).width(800).height(480).url()
      : PLACEHOLDER_IMAGE,
    category: post.categories?.[0]?.title ?? "Legal",
    publishedAt: post.publishedAt,
  };
}

export async function getPosts(): Promise<Blog[]> {
  const posts: SanityPost[] = await sanityClient.fetch(postsQuery);

  return posts.map(mapSanityPostToBlog);
}

export async function getPostBySlug(
  slug: string
): Promise<SanityPost | null> {
  const post: SanityPost | null = await sanityClient.fetch(
    postBySlugQuery,
    { slug }
  );

  if (!post) {
    return null;
  }

  return post
}

export async function getHomePageData(): Promise<HomePageData> {
  const homePageData = await sanityClient.fetch(`
    *[_type == "homePage"][0]{
      _id,
      heroTitle,
      heroHighlightText,
      heroSubtitle,
      heroImage
    }
  `);
  return homePageData;
}
