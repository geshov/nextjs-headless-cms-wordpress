/* eslint-disable @typescript-eslint/no-explicit-any */

import { cacheLife } from "next/cache";
import { Item } from "./item/item";
import { Notfound } from "./notfound/notfound";
import { getPosts } from "@/lib/rest";

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
  if (!posts.length) return <Notfound />;

  return (
    <div>
      {posts.map((post: any) => (
        <Item key={post.id} post={post} />
      ))}
    </div>
  );
}
