import "@/public/styles/globals.css";
import type { Metadata } from "next";
import { Locale, i18n } from "@/src/i18n.config";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "freddiego",
  description: "Frederick's portfolio website",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} className=" scroll-smooth">
      <body className={`${inter.className} relative`}>{children}</body>
    </html>
  );
}
