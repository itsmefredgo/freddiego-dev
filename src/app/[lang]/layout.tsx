import "@/styles/globals.css";
import { Locale, i18n } from "@/src/i18n.config";
import Header from "@/src/components/includes/header";
import Footer from "@/src/components/includes/footer";
import { TracingBeam } from "@/src/components/ui/TracingBeamBar";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <>
      <Header lang={params.lang} />
      <main className={`${mainDivWidth}`}>
        <TracingBeam>{children}</TracingBeam>
      </main>
      <Footer lang={params.lang}></Footer>
    </>
  );
}

const mainDivWidth = `pr-[min(5%,2rem)] sm:mr-0 sm:px-[min(calc((100%-36rem)/2),4rem)] 
md:px-[min(calc((100%-40rem)/2),8rem)] lg:px-[min(calc((100%-48rem)/2),10rem)]
xl:px-[calc((100%-60rem)/2)] p-2 pt-24 font-semibold pr-[2rem] pl-[2.5rem] pb-24 
bg-background text-text duration-300 glow5 `;
