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
        <h1 className="text-3xl font-bold">{page.contact.title}</h1>
        <p className="text-gray-500">{page.contact.description}</p>
      </div>
    </section>
  );
}
