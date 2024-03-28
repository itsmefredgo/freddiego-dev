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
    <section className="">
      <div className="">
        <h1 className="">{page.home.introduction.greeting}</h1>
        <p className="">{page.home.introduction.name}</p>
        <p className="">{page.home.introduction.role}</p>
      </div>
    </section>
  );
}
