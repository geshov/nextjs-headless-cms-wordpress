/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { rest } from "@/lib/rest";

export async function Picture({ post }: { post: any }) {
  const href = post._links?.["wp:featuredmedia"]?.[0]?.href;

  if (!href) return <Skeleton />;

  const res = await fetch(href, {
    method: "GET",
    headers: { auth: rest.auth },
  });

  if (!res.ok) return <Skeleton />;

  const media = await res.json();

  return (
    <Image
      src={media.source_url}
      width={media.media_details.width}
      height={media.media_details.height}
      sizes="(max-width: 640px) 95vw, (max-width: 768px) 46vw, 37vw"
      className="rounded-box"
      alt={post.title.rendered}
    />
  );
}

export function Skeleton() {
  return <div className="skeleton aspect-3/2"></div>;
}
