/* eslint-disable @typescript-eslint/no-explicit-any */

import { Suspense } from "react";
import { Title } from "./title/title";
import { Picture, PictureSkeleton } from "@/ui/picture/picture";
import { Content, ContentSkeleton } from "./content/content";
import { Other } from "./other/other";

export function Post({ post }: { post: any }) {
  const image = post._links?.["wp:featuredmedia"]?.[0]?.href;

  return (
    <>
      <Title title={post.title.rendered} date={post.date} />

      <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 py-10">
        <div className="md:col-span-3 space-y-10">
          <div className="md:hidden">
            <Suspense fallback={<PictureSkeleton />}>
              <Picture href={image} alt={post.title.rendered} loading="eager" />
            </Suspense>
          </div>

          <Suspense fallback={<ContentSkeleton />}>
            <Content content={post.content.rendered} />
          </Suspense>
        </div>

        <div className="md:col-span-2 md:-translate-y-24 space-y-10">
          <div className="hidden md:block">
            <Suspense fallback={<PictureSkeleton />}>
              <Picture href={image} alt={post.title.rendered} loading="eager" />
            </Suspense>
          </div>

          <Suspense>
            <Other id={post.id} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
