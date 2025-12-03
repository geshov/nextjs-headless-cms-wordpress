/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Prism from "prismjs";
import { useEffect } from "react";

import "prismjs/components/prism-bash";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";

export function Content({ post }: { post: any }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: post.content.rendered,
      }}
      className="prose max-w-none dark:prism-dark light:prism-light"
      suppressHydrationWarning></div>
  );
}
