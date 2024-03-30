import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { TracingBeam } from "@/src/components/ui/tracing-beam";

export default async function Archive({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <TracingBeam>
      <section className=" h-[200rem]">
        <div className="">
          <h1 className="">{page.archive.title}</h1>
          <p className="">{page.archive.description}</p>
        </div>
      </section>
    </TracingBeam>
  );
}
