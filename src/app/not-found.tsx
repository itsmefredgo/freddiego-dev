"use client";

import { redirect, usePathname } from "next/navigation";
const notFoundPath = "/not-found";

export default function NotFound() {
  const pathname = usePathname();
  if (pathname === notFoundPath) {
    console.error("not-found page does not exist");
    redirect("/");
  }
  redirect(notFoundPath);
}
