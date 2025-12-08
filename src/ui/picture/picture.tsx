import Image from "next/image";
import { cacheLife } from "next/cache";
import { getImage } from "@/lib/rest";

export async function Picture({
  href,
  alt,
  loading = "lazy",
}: {
  href: string | undefined;
  alt: string;
  loading: "lazy" | "eager";
}) {
  // "use cache";
  // cacheLife("hours");

  const image = await getImage(href);
  if (!image) return <PictureSkeleton />;

  return (
    <Image
      src={image.source_url}
      width={image.media_details.width}
      height={image.media_details.height}
      loading={loading}
      sizes="(max-width: 640px) 95vw, (max-width: 768px) 46vw, 37vw"
      className="rounded-box"
      alt={alt}
    />
  );
}

export function PictureSkeleton() {
  return <div className="skeleton aspect-3/2"></div>;
}
