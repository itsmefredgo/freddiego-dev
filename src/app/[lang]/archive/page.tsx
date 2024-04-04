import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { client } from "@/sanity/lib/client";

interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  tags: string[];
}

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    tags,
  }`;

  const posts = await client.fetch(query);

  return { posts };
}

export default async function Archive({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const post = await getPosts();
  console.log(post, "post");

  return (
    <div className=" h-[auto] flex flex-col gap-20 font-normal">
      <SectionTitle title="Archives" />
      <section>
        <SectionTitle title="Projects" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {post.posts.map((post: Post) => (
            <article key={post.slug}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
