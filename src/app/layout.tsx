import type { Metadata } from "next";

import "./globals.css";

import { Manrope } from "next/font/google";
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  preload: true,
  display: "block",
});

export const metadata: Metadata = {
  title: "Фронтенд для Headless CMS",
  description: "Пример извлечения данных из Headless CMS посредством REST API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
