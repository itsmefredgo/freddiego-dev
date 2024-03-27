import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ChangeLanguage from "./locale-switcher";
import CustomLink from "./customLink";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          {Object.entries(navigation).map(([key, value]) => (
            <CustomLink href={`/` + key} lang={lang} key={key}>
              {value}
            </CustomLink>
          ))}
        </ul>
        <ChangeLanguage />
      </nav>
    </header>
  );
}
