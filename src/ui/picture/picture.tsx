/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { cacheLife } from "next/cache";
import { getImage } from "@/lib/rest";

export async function Picture({
  post,
  loading = "lazy",
}: {
  post: any;
  loading: "lazy" | "eager";
}) {
  "use cache";
  cacheLife("hours");

  const image = await getImage(post);
  if (!image) return <PictureSkeleton />;

  return (
    <Image
      src={image.source_url}
      width={image.media_details.width}
      height={image.media_details.height}
      loading={loading}
      sizes="(max-width: 640px) 95vw, (max-width: 768px) 46vw, 37vw"
      className="rounded-box"
      alt={post.title.rendered}
    />
  );
}

export function PictureSkeleton() {
  return <div className="skeleton aspect-3/2"></div>;
}
