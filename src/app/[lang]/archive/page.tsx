import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Archive({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <section className="">
      <div className="">
        <h1 className="">{page.archive.title}</h1>
        <p className="">{page.archive.description}</p>
      </div>
    </section>
  );
}
