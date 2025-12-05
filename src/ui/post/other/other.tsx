/* eslint-disable @typescript-eslint/no-explicit-any */

"use cache";

import Link from "next/link";
import { cacheLife } from "next/cache";
import { getOther } from "@/lib/rest";

export async function Other({ post }: { post: any }) {
  cacheLife("hours");

  const posts = await getOther(post);

  return (
    <div className="space-y-8 pt-8 border-t md:pt-0 md:border-t-0 md:ps-6 md:border-l border-base-content/15">
      <div className="prose">
        <h2>Другие статьи</h2>
      </div>

      {!!posts.length &&
        posts.map((post: any) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}/`}>
              <div className="space-y-1">
                <div className="text-xs">
                  {new Date(post.date).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>

                <div className="link link-secondary">{post.title.rendered}</div>
              </div>
            </Link>
          </div>
        ))}

      {!posts.length && <div>Другие статьи не найдены.</div>}

      <Link href="/posts/" className="btn btn-primary">
        Все статьи
      </Link>
    </div>
  );
}
