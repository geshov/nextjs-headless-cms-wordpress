/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import { cacheLife } from "next/cache";
import { rest } from "@/lib/rest";

export async function Other({ current }: { current: number }) {
  "use cache";
  cacheLife("hours");

  const href = `${rest.base}posts?exclude=${current}`;

  const res = await fetch(href, {
    method: "GET",
    headers: { auth: rest.auth },
  });

  if (!res.ok) return <Notfound />;

  const total = res.headers.get("X-WP-Total");

  if (!Number(total)) return <Notfound />;

  const posts = await res.json();

  return (
    <div className="space-y-8">
      {posts.map((post: any) => (
        <div key={post.id}>
          <div className="text-xs">
            {new Date(post.date).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          <div>
            <Link href={`/posts/${post.slug}/`} className="link link-secondary">
              {post.title.rendered}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

function Notfound() {
  return <div>Другие статьи не найдены.</div>;
}
