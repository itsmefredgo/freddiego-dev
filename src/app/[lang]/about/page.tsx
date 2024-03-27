import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">{page.about.title}</h1>
        <h2 className=" text-2xl ">{page.about.summary.section}</h2>
        <h2 className=" text-2xl ">{page.about.work.section}</h2>
        <h2 className=" text-2xl ">{page.about.techstack.section}</h2>
      </div>
    </section>
  );
}
