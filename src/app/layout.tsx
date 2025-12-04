import "./globals.css";

import { Manrope } from "next/font/google";
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  preload: true,
  display: "block",
});

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Статьи из Headless CMS | Next.js",
  description:
    "Пример извлечения данных из Headless CMS (Wordpress) посредством REST API",
};

import { Suspense } from "react";
import { Loading } from "@/ui/loading/loading";
import { Navbar } from "@/ui/navbar/navbar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${manrope.className} antialiased`}>
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
