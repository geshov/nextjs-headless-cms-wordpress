"use client";

import css from "./loading.module.css";
import { useLoading } from "@/providers/loading";

export function Loading() {
  const [loading] = useLoading() as [boolean];

  if (loading)
    return (
      <div
        className={`bg-secondary fixed top-0 w-full h-1 z-50 ${css.loading}`}
        style={{ left: "-100%" }}></div>
    );

  return null;
}
