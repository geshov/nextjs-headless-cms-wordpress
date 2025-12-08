/* eslint-disable @typescript-eslint/no-explicit-any */

import { cacheLife } from "next/cache";
import { Title } from "./title/title";
import { Controls } from "./controls/controls";
import { Count } from "./count/count";
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
  // "use cache";
  // cacheLife("hours");

  const posts = await getPosts(search, orderby, order);
  const total = posts.length;

  return (
    <div>
      <Title title="Список статей" />
      <Controls search={search} orderby={orderby} order={order} />
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
    </div>
  );
}
