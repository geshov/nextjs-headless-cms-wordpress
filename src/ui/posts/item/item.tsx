import Link from "next/link";
import { Suspense } from "react";
import { Picture, PictureSkeleton } from "@/ui/picture/picture";
import { LinkStatus } from "@/ui/linkstatus/linkstatus";

export function Item({
  id,
  image,
  title,
  date,
  excerpt,
  index,
}: {
  id: number;
  image: string | undefined;
  title: string;
  date: string;
  excerpt: string;
  index: number;
}) {
  return (
    <div className={`py-12 ${index % 2 === 0 ? "" : "bg-base-200"}`}>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <Suspense fallback={<PictureSkeleton />}>
            <Picture
              href={image}
              alt={title}
              loading={index ? "lazy" : "eager"}
            />
          </Suspense>
        </div>

        <div className="md:col-span-3 space-y-6">
          <div className="prose">
            <h2>{title}</h2>
          </div>

          <div className="text-sm font-semibold">
            {new Date(date).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>

          <Link href={`/posts/${id}/`} className="btn btn-primary no-underline">
            Подробнее <LinkStatus />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ItemSkeleton() {
  return (
    <div className={`py-12`}>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <PictureSkeleton />
        </div>

        <div className="md:col-span-3 space-y-6">
          <div className="space-y-4">
            <div className="skeleton h-6 w-11/12"></div>
            <div className="skeleton h-6 w-5/12"></div>
          </div>

          <div className="skeleton h-4 w-28"></div>

          <div className="space-y-4">
            <div className="skeleton h-4 w-10/12"></div>
            <div className="skeleton h-4 w-11/12"></div>
            <div className="skeleton h-4 w-9/12"></div>
          </div>

          <div className="skeleton h-10 w-28"></div>
        </div>
      </div>
    </div>
  );
}
