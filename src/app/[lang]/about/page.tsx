import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import AboutRoles from "@/src/containers/about-page/AboutRoles";
import AboutEducation from "@/src/containers/about-page/AboutEducation";
import AboutExperiences from "@/src/containers/about-page/AboutExperiences";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const contents = page.about;

  return (
      <div className=" h-[auto] flex flex-col gap-20 font-normal">
        <AboutRoles {...contents} />
        <AboutEducation {...contents.education} />
        <AboutExperiences {...contents.experiences} />
      </div>
  );
}
