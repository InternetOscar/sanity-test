import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`,
);

export const POSTS_SLUGS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }`,
);

export const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`,
);

export const AGENTS_QUERY = defineQuery(
  `*[_type == "agent"]{
  _id,
  name,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  agent->{
    name,
  }
}`,
);

export const AGENT_SLUGS_QUERY = defineQuery(
  `*[_type == "agent" && defined(slug.current)]{
  "slug": slug.current
}`,
);

export const AGENT_QUERY = defineQuery(
  `*[_type == "agent" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`,
);
