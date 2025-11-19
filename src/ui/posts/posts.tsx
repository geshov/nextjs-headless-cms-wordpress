/* eslint-disable @typescript-eslint/no-explicit-any */

import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";
import { Post } from "./post/post";
import { Notfound } from "./notfound/notfound";
import { rest } from "@/lib/rest";

export async function Posts({
  search,
  orderby,
  order,
}: {
  search: string;
  orderby: string;
  order: string;
}) {
  "use cache";
  cacheLife("hours");

  const href = `${rest.base}posts?search=${search}&orderby=${orderby}&order=${order}`;

  const res = await fetch(href, {
    method: "GET",
    headers: { auth: rest.auth },
  });

  if (!res.ok) notFound();

  const total = res.headers.get("X-WP-Total");

  if (!Number(total)) return <Notfound />;

  const posts = await res.json();

  return (
    <div>
      {posts.map((post: any, index: number) => (
        <Post key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}
