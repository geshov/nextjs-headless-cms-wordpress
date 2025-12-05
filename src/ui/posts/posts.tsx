/* eslint-disable @typescript-eslint/no-explicit-any */

"use cache";

import { cacheLife } from "next/cache";
import { Title } from "./title/title";
import { Controls } from "./controls/controls";
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
  cacheLife("hours");

  const posts = await getPosts(search, orderby, order);

  return (
    <div>
      <Title title="Список статей" />
      <Controls search={search} orderby={orderby} order={order} />

      {!!posts.length &&
        posts.map((post: any, index: number) => (
          <Item key={post.id} post={post} index={index} />
        ))}

      {!posts.length && <Notfound />}
    </div>
  );
}
