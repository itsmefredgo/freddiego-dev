import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import MainIntro from "@/src/containers/main-page/MainIntro";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const contents = page.home;

  return (
    <div className=" h-[auto] flex flex-col gap-20 font-normal">
      <MainIntro {...contents.introduction} />
      <section>
        
      </section>
    </div>
  );
}
