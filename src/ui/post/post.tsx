/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import { Picture } from "@/ui/picture/picture";
import { Other } from "./other/other";

export function Post({ post }: { post: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 py-10">
      <div className="md:col-span-3 space-y-8">
        <div className="max-w-lg">
          <Picture post={post} />
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}
          className="prose max-w-none"></div>
      </div>

      <div className="md:col-span-2 space-y-8 pt-6 md:pt-0 md:ps-6 border-t md:border-t-0 md:border-l border-base-content/15">
        <div className="prose">
          <h2>Другие статьи</h2>
        </div>

        <Other post={post} />

        <Link href="/" className="btn btn-primary">
          На главную
        </Link>
      </div>
    </div>
  );
}
