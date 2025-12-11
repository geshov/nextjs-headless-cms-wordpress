/* eslint-disable @typescript-eslint/no-explicit-any */

import { cacheLife } from "next/cache";
import { getPosts } from "@/lib/rest";
import { Count, CountSkeleton } from "./count/count";
import { Item, ItemSkeleton } from "./item/item";
import { Notfound } from "./notfound/notfound";

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

  const posts = await getPosts(search, orderby, order);
  const total = posts.length;

  return (
    <>
      <Count total={total} search={search} />

      {!!total &&
        posts.map((post: any, index: number) => (
          <Item
            key={post.id}
            id={post.id}
            image={post._links?.["wp:featuredmedia"]?.[0]?.href}
            title={post.title.rendered}
            date={post.date}
            excerpt={post.excerpt.rendered}
            index={index}
          />
        ))}

      {!total && <Notfound />}
    </>
  );
}

export function PostsSkeleton() {
  return (
    <>
      <CountSkeleton />
      <ItemSkeleton index={0} />
      <ItemSkeleton index={1} />
    </>
  );
}
