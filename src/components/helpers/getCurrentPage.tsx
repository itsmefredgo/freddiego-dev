import { usePathname } from "next/navigation";

export function getCurrentPage(lang:string): string {
  const path =
    lang === "en"
      ? usePathname().split("/")[1] // en
      : usePathname().split("/").length === 2 // not en
      ? "" // root
      : usePathname().split("/")[2]; // not root
  return path;
}
