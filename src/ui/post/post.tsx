/* eslint-disable @typescript-eslint/no-explicit-any */

import { Title } from "./title/title";
import { Picture } from "@/ui/picture/picture";
import { Content } from "./content/content";
import { Other } from "./other/other";

export function Post({ post }: { post: any }) {
  return (
    <>
      <Title post={post} />

      <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 py-10">
        <div className="md:col-span-3 space-y-10">
          <div className="md:hidden">
            <Picture post={post} />
          </div>

          <Content post={post} />
        </div>

        <div className="md:col-span-2 md:-translate-y-28 space-y-10">
          <div className="hidden md:block">
            <Picture post={post} />
          </div>

          <Other post={post} />
        </div>
      </div>
    </>
  );
}
