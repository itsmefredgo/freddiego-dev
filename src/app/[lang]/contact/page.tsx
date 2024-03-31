import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <section className=" h-[500rem]">
      <div className="">
        <h1 className="">{page.contact.title}</h1>
        <p className="">{page.contact.description}</p>
      </div>
    </section>
  );
}
