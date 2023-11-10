import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { ui } from "../i18n/ui";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: ui.en["seo.home.title"],
    description: ui.en["seo.home.description"],
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
