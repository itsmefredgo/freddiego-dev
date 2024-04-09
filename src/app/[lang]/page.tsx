import { Separator } from "@/src/components/ui/separator";
import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { AuroraBackground } from "@/src/components/ui/aurora-background";
import { CiMapPin } from "react-icons/ci";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <div className=" ">
      <AuroraBackground className="w-full h-fit rounded-3xl mb-8 p-8 text-black dark:text-white">
        <section className=" w-full bg-transparent rounded-3xl mb-8 p-8 z-10">
          <div>
            <h1 className=" text-[2.5rem]">
              {page.home.introduction.greeting}
            </h1>
            <p className=" text-[2rem] text-primary">
              {page.home.introduction.name}
            </p>
          </div>
          <Separator className=" my-4" />
          <div className="flex h-6 items-center space-x-4 text-sm">
            <div className=" flex-1">
              <p>Software Engineer</p>
            </div>
            <Separator orientation="vertical" className=" " />
            <div className=" flex-1">
              <p>Full-stack Developer </p>
            </div>
            <Separator orientation="vertical" className=" " />
            <div className=" flex-1">
              <p>Data Scientist </p>
            </div>
          </div>
          <Separator className=" my-4" />
          <div className="flex h-[2rem] items-center space-x-4 text-[1.5rem]">
            <div className=" flex-1 flex gap-1">
              <div className=" flex flex-col justify-center">
                <CiMapPin className=" h-[2rem]" />
              </div>
              <p>Canada</p>
            </div>
            <Separator orientation="vertical" className=" " />
            <div className=" flex-1">
              <p>Nice to see you. </p>
            </div>
          </div>
        </section>
        <section className=""></section>
      </AuroraBackground>
    </div>
  );
}
