import { usePathname } from "next/navigation";

const useFindCurrentPage = (lang: string) => {
  const pathSplit = usePathname().split("/");
  const path =
    lang === "en"
      ? pathSplit[1] // en
      : pathSplit.length === 2 // not en
      ? "" // root
      : pathSplit[2]; // not root
  return path;
};

export default useFindCurrentPage;
