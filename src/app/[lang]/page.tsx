// export default function Home() {
//   return <main>Contents</main>;
// }

import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">
          {page.home.introduction.greeting}
        </h1>
        <p className="text-gray-500">{page.home.introduction.name}</p>
        <p className="text-gray-500">{page.home.introduction.role}</p>
      </div>
    </section>
  );
}
