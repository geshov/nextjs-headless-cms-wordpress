/* eslint-disable @typescript-eslint/no-explicit-any */

"use cache";

import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";
import { Controls } from "./controls/controls";
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
  cacheLife("hours");

  const href = `${rest.base}posts?search=${search}&orderby=${orderby}&order=${order}`;

  const res = await fetch(href, {
    method: "GET",
    headers: { auth: rest.auth },
  });

  if (!res.ok) notFound();

  const total = res.headers.get("X-WP-Total");
  // const pages = res.headers.get("X-WP-TotalPages");

  const posts = await res.json();

  return (
    <div>
      <Controls search={search} orderby={orderby} order={order} />

      {!!Number(total) &&
        posts.map((post: any, index: number) => (
          <Post key={post.id} post={post} index={index} />
        ))}

      {!Number(total) && <Notfound />}
    </div>
  );
}
