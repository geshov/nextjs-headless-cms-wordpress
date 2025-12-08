"use client";

import css from "./loading.module.css";
import { useLinkStatus } from "next/link";

export function Status() {
  const { pending } = useLinkStatus();
  return <Loading pending={pending} />;
}

export function Loading({ pending }: { pending: boolean }) {
  if (pending)
    return (
      <div
        className={`bg-secondary fixed top-0 right-0 left-0 z-50 h-1 ${css.loading}`}
        style={{ transform: "translateX(-100%)" }}></div>
    );

  return null;
}
