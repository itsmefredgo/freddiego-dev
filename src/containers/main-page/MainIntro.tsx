import { Separator } from "@/src/components/ui/separator";
import { AuroraBackground } from "@/src/components/ui/aurora-background";
import { CiMapPin } from "react-icons/ci";

type AboutEducationProps = {
  greeting: string;
  name: string;
  roles: string[];
  hello: string;
};

function AboutEducation({ greeting, name, roles, hello }: AboutEducationProps) {
  return (
    <AuroraBackground className=" min-w-auto w-full h-fit rounded-3xl mb-8 p-12 text-text duration-300">
      <section className=" w-full bg-transparent rounded-3xl z-10">
        <div>
          <h1 className=" text-[2.5rem]">{greeting}</h1>
          <p className=" text-[2rem] text-primary">{name}</p>
        </div>

        <Separator className=" my-4" />

        <div className="flex h-6 items-center space-x-4 text-sm">
          <SoftwareEngineer />
          <Separator orientation="vertical" className=" " />
          <FullStackDeveloper />
          <Separator orientation="vertical" className=" hidden md:block" />
          <DataScientist classString=" hidden md:block" />
        </div>

        <Separator className=" my-4" />

        <div className="flex h-[2rem]  items-center space-x-4 text-sm md:text-[1.5rem]">
          <div className=" flex-1 gap-1 flex ">
            <CanadaPin classString=" hidden md:block" />
            <DataScientist classString=" md:hidden" />
          </div>
          <Separator orientation="vertical" className="  " />
          <div className=" flex-1 gap-1 flex ">
            <CanadaPin classString=" md:hidden" />
            <NiceToSeeYou classString=" hidden md:block" />
          </div>
        </div>

        <Separator className=" my-4 md:hidden" />

        <div className=" md:hidden">
          <NiceToSeeYou />
        </div>
      </section>{" "}
    </AuroraBackground>
  );
  function CanadaPin({ classString }: { classString?: string }) {
    return (
      <div className={` flex-1 ${classString}`}>
        <div className=" flex">
          <div className="">
            <CiMapPin className="h-full md:h-[2rem]" />
          </div>
          <div className=" flex items-center">
            <p className="">Canada</p>
          </div>
        </div>
      </div>
    );
  }
  function SoftwareEngineer({ classString }: { classString?: string }) {
    return (
      <div className={` flex-1 ${classString}`}>
        <p>{roles[0]}</p>
      </div>
    );
  }
  function FullStackDeveloper({ classString }: { classString?: string }) {
    return (
      <div className={` flex-1 ${classString}`}>
        <p>{roles[1]}</p>
      </div>
    );
  }
  function DataScientist({ classString }: { classString?: string }) {
    return (
      <div className={` flex-1 ${classString}`}>
        <p>{roles[2]}</p>
      </div>
    );
  }
  function NiceToSeeYou({ classString }: { classString?: string }) {
    return (
      <div className={` flex-1 ${classString}`}>
        <p>{hello}</p>
      </div>
    );
  }
}

export default AboutEducation;
