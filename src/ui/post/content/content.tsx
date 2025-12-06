/* eslint-disable @typescript-eslint/no-explicit-any */

import { cacheLife } from "next/cache";
import { styleCode } from "@/lib/shiki";

export async function Content({ post }: { post: any }) {
  "use cache";
  cacheLife("hours");

  const html = await styleCode(post.content.rendered);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
      className="prose max-w-none"></div>
  );
}
