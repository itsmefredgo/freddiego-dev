import "./global.css";
import type { Metadata } from "next";
import { Locale, i18n } from "@/src/i18n.config";
import Header from "@/src/components/includes/header";
import Footer from "@/src/components/includes/footer";
import { TracingBeam } from "@/src/components/ui/tracing-beam";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "freddiego",
  description: "Frederick's portfolio website",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${inter.className}`}>
        <Header lang={params.lang} />

        <main
          className=" p-2 min-h-screen pt-24 font-semibold px-[2rem]
          sm:px-[min(calc((100%-36rem)/2),4rem)]
          md:px-[min(calc((100%-40rem)/2),8rem)]
          lg:px-[min(calc((100%-48rem)/2),10rem)]
          xl:px-[calc((100%-60rem)/2)]
          bg-[#d8dddf] text-[#131313]
          dark:bg-[#1b2225] dark:text-white"
        >
          <TracingBeam>{children}</TracingBeam>
        </main>

        <Footer></Footer>
      </body>
    </html>
  );
}
