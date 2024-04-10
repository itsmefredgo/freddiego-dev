import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/public/dictionary";
import { useState } from "react";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <section className=" ">
      <div className="">
        <h1 className="">{page.contact.title}</h1>
        <p className="">{page.contact.description}</p>
      </div>
    </section>
  );
}
