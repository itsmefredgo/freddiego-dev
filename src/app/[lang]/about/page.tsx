import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <section className="">
      <div className="">
        <h1 className="">About Page</h1>
        <h2 className=""></h2>
        <h2 className=""></h2>
        <h2 className=""></h2>
      </div>
    </section>
  );
}
