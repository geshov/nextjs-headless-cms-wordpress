/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Prism from "prismjs";
import { useEffect } from "react";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";

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
