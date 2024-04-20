interface Props {
  children: React.ReactNode;
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "freddiego.dev",
  description: "Frederick's portfolio website",
};

export default function RootLayout({ children }: Props) {
  return <>{children}</>;
}
