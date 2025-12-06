/* eslint-disable @typescript-eslint/no-explicit-any */

import { styleCode } from "@/lib/shiki";

export async function Content({ post }: { post: any }) {
  const html = await styleCode(post.content.rendered);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
      className="prose max-w-none"></div>
  );
}
