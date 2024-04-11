import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/public/dictionary";
import MainIntro from "@/src/containers/main-page/MainIntro";
import MainRoles from "@/src/containers/main-page/MainRoles";
import MainExperiences from "@/src/containers/main-page/MainExperiences";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const contents = page;

  return (
    <div className=" h-[auto] flex flex-col gap-40 font-normal">
      <MainIntro {...contents.home.introduction} />
      <MainRoles roles={contents.home.roles} />
      <MainExperiences experiences={contents.home.experiences} />
    </div>
  );
}
