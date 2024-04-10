import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import MainIntro from "@/src/containers/main-page/MainIntro";
import MainRoles from "@/src/containers/main-page/MainRoles";
import MainExperiences from "@/src/containers/main-page/MainExperiences";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const contents = page.home;

  return (
    <div className=" h-[auto] flex flex-col gap-12 font-normal">
      <MainIntro {...contents.introduction} />
      <MainRoles />
      {/* <MainRoles {...contents.roles} /> */}
      <MainExperiences />
      {/* <MainExperiences {...contents.experiences} /> */}
    </div>
  );
}
