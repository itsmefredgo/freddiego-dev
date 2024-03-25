import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css"
import Header from "../components/includes/header";
import Footer from "../components/includes/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreddieGo",
  description: "Portfolio website of Frederick Go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
