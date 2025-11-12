/* eslint-disable @typescript-eslint/no-explicit-any */

import { Suspense } from "react";
import { Picture, Skeleton } from "./picture/picture";

export function Post({ post, index }: { post: any; index: number }) {
  const date = new Date(post.date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 py-8 ${
        index && "border-t border-base-content/10"
      }`}>
      <div className="md:col-span-2">
        <Suspense fallback={<Skeleton />}>
          <Picture post={post} />
        </Suspense>
      </div>

      <div className="prose md:col-span-3">
        <h2>{post.title.rendered}</h2>

        <div className="text-sm font-semibold">{date}</div>

        <div
          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}></div>
      </div>
    </div>
  );
}
