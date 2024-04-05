import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { client } from "@/sanity/lib/client";

interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: any;
  tags: Array<Tag>;
  _id: string;
}

interface Tag {
  title: string;
  slug: { current: string };
  _id: string;
}

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    tags,
  }`;


return await client.fetch(query);
}

export default async function Archive({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const posts: Post[] = await getPosts();

  return (
    <div className=" h-[auto] flex flex-col gap-20 font-normal">
      <SectionTitle title="Archives" />
      <section>
        <SectionTitle title="Projects" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts?.length > 0 && posts?.map((post: Post) => (
            <article key={post.slug.current}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
