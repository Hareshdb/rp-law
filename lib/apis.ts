import { DEFAULT_LIMIT, DEFAULT_OFFSET, PLACEHOLDER_IMAGE } from "./constants";
import { sanityClient } from "./sanity-client";
import { urlFor } from "./sanity-image-builder";
import type {
  Blog,
  FooterData,
  HomePageData,
  PostAuthor,
  SanityPost,
} from "./types";

const postsQuery = `
  *[_type == "post"]
  | order(publishedAt desc)
  [$offset...$offset + $limit] {
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

const postsByCategoryQuery = `
  *[
    _type == "post" &&
    $categoryId in categories[]._ref
  ]
  | order(publishedAt desc)
  [$offset...$offset + $limit] {
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

const relatedPostsByCategoryQuery = `
  *[
    _type == "post" &&
    _id != $postId &&
    $categoryId in categories[]._ref
  ] | order(publishedAt desc)[0...3] {
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

type PostsQueryOptions = {
  limit?: number;
  offset?: number;
};

export async function getPosts({
  limit = DEFAULT_LIMIT,
  offset = DEFAULT_OFFSET,
}: PostsQueryOptions = {}): Promise<Blog[]> {
  const posts: SanityPost[] = await sanityClient.fetch(postsQuery, {
    limit,
    offset,
  });

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

  return post;
}

export async function getPostsByCategory({
  categoryId,
  limit = DEFAULT_LIMIT,
  offset = DEFAULT_OFFSET,
}: PostsQueryOptions & { categoryId: string }): Promise<Blog[]> {
  const posts: SanityPost[] = await sanityClient.fetch(
    postsByCategoryQuery,
    {
      categoryId,
      limit,
      offset,
    }
  );

  return posts.map(mapSanityPostToBlog);
}

const relatedPostsQuery = `
  *[
    _type == "post" &&
    _id != $postId &&
    $categoryId in categories[]._ref
  ]
  | order(publishedAt desc)
  [0...$limit] {
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

export async function getRelatedPosts(
  postId: string,
  categoryId: string,
  limit: number = 2
): Promise<Blog[]> {
  const posts: SanityPost[] = await sanityClient.fetch(
    relatedPostsQuery,
    {
      postId,
      categoryId,
      limit,
    }
  );

  return posts.map(mapSanityPostToBlog);
}

export async function getRelatedPostsByCategory(
  categoryId: string,
  postId: string
): Promise<Blog[]> {
  const posts: SanityPost[] = await sanityClient.fetch(
    relatedPostsByCategoryQuery,
    { categoryId, postId }
  );

  return posts.map(mapSanityPostToBlog);
}

export async function getHomePageData(): Promise<HomePageData> {
  const homePageData = await sanityClient.fetch(`
    *[_type == "homePage"][0]{
      _id,
      heroTitle,
      heroHighlightText,
      heroSubtitle,
      heroImage,
      whyChooseUsImage
    }
  `);

  return homePageData;
}

export async function getFooterData(): Promise<FooterData> {
  return sanityClient.fetch(`
    *[_type == "homePage"][0]{
      footerSummary,
      address,
      mobileNumber,
      email
    }
  `);
}

export async function getSettings() {
  return sanityClient.fetch(`
    *[_type == "settings"][0]{
      logo,
      logoInverted
    }
  `);
}

const firstAuthorQuery = `
  *[_type == "author"] | order(_createdAt asc)[0] {
    _id,
    name,
    "slug": slug.current,
    image,
    bio
  }
`;

export async function getFirstAuthor(): Promise<PostAuthor | null> {
  return sanityClient.fetch(firstAuthorQuery);
}