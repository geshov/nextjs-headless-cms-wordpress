/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import { Picture } from "@/ui/picture/picture";

export function Item({ post }: { post: any }) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 py-10 border-base-content/15 border-b last:border-b-0`}>
      <div className="md:col-span-2">
        <Picture post={post} />
      </div>

      <div className="md:col-span-3 space-y-6">
        <div className="prose">
          <h2>{post.title.rendered}</h2>
        </div>

        <div className="text-sm font-semibold">
          {new Date(post.date).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}></div>

        <Link
          href={`/posts/${post.slug}/`}
          className="btn btn-primary no-underline">
          Подробнее
        </Link>
      </div>
    </div>
  );
}
