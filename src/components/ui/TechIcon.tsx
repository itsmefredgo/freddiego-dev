"use client";

import React from "react";
import Image from "next/image";
import { FollowerPointerCard } from "@/src/components/ui/following-pointer";

interface TechIconsProps {
  tech: string;
}

const TechIcons: React.FC<TechIconsProps> = ({ tech }) => {
  const getImagePath = (tech: string) => {
    try {
      return require(`@/public/assets/techicons/${tech}.svg`);
    } catch (error) {
      return null;
    }
  };

  const imagePath = getImagePath(tech);

  if (!imagePath) {
    return <>{tech}</>;
  }

  return (
    <FollowerPointerCard title={tech} isFixed={true} bgColour="#7eacf7">
      <div
        className=" bg-[#abb5d4] dark:bg-[#494f61] rounded-xl 
        p-1 h-[35px] w-[35px] relative duration-150 border border-[#60b2cf] dark:border-[#436277]"
      >
        <Image
          src={imagePath}
          alt={tech}
          className=" h-auto w-auto dark:brightness-150"
        />
      </div>
    </FollowerPointerCard>
  );
};

export default TechIcons;
