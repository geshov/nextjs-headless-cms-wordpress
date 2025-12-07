/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import { cacheLife } from "next/cache";
import { getOther } from "@/lib/rest";
import { Item } from "./item/item";

export async function Other({ id }: { id: number }) {
  "use cache";
  cacheLife("hours");

  const posts = await getOther(id);

  return (
    <div className="space-y-8 pt-8 border-t md:pt-0 md:border-t-0 md:ps-6 md:border-l border-base-content/15">
      <div className="prose">
        <h2>Другие статьи</h2>
      </div>

      {!!posts.length &&
        posts.map((post: any) => (
          <Item
            key={post.id}
            id={post.id}
            title={post.title.rendered}
            date={post.date}
          />
        ))}

      {!posts.length && <div>Другие статьи не найдены.</div>}

      <Link href="/posts/" className="btn btn-primary">
        Все статьи
      </Link>
    </div>
  );
}
