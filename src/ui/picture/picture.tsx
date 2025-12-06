/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { cacheLife } from "next/cache";
import { getImage } from "@/lib/rest";

export async function Picture({ post }: { post: any }) {
  "use cache";
  cacheLife("hours");

  const image = await getImage(post);
  if (!image) return <PictureSkeleton />;

  return (
    <Image
      src={image.source_url}
      width={image.media_details.width}
      height={image.media_details.height}
      sizes="(max-width: 640px) 95vw, (max-width: 768px) 46vw, 37vw"
      className="rounded-box"
      alt={post.title.rendered}
    />
  );
}

export function PictureSkeleton() {
  return <div className="skeleton aspect-3/2"></div>;
}
