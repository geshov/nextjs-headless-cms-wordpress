/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import { cacheLife } from "next/cache";
import { getOther } from "@/lib/rest";

export async function Other({ post }: { post: any }) {
  "use cache";
  cacheLife("hours");

  const posts = await getOther(post);
  if (!posts.length) return <div>Другие статьи не найдены.</div>;

  return (
    <div className="space-y-8">
      {posts.map((post: any) => (
        <div key={post.id}>
          <Link href={`/posts/${post.slug}/`}>
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
    </div>
  );
}
