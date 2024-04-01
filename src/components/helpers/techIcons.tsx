"use client";

import React from "react";
import Image from "next/image";

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

  return <Image src={imagePath} alt="" height={25} width={25} />;
};

export default TechIcons;
