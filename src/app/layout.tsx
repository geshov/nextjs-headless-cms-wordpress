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

import { Navbar } from "@/ui/navbar/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
