/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import { Suspense } from "react";
import { Picture, Skeleton } from "@/ui/picture/picture";
import { Other } from "./other/other";

export function Post({ post }: { post: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pb-10">
      <div className="md:col-span-3 space-y-8">
        <div className="font-semibold">
          {new Date(post.date).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>

        <div className="max-w-lg">
          <Suspense fallback={<Skeleton />}>
            <Picture post={post} />
          </Suspense>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}
          className="prose max-w-none"></div>
      </div>

      <div className="md:col-span-2 space-y-8 pt-6 md:pt-0 md:ps-6 border-t md:border-t-0 md:border-l border-base-content/15">
        <div className="prose">
          <h2>Другие статьи</h2>
        </div>

        <Other current={post.id} />
        <Link href="/" className="btn btn-primary">
          На главную
        </Link>
      </div>
    </div>
  );
}
