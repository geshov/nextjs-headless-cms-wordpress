import { cacheLife } from "next/cache";
import { styleCode } from "@/lib/shiki";

export async function Content({ content }: { content: string }) {
  "use cache";
  cacheLife("hours");

  const html = await styleCode(content);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className="prose max-w-none"></div>
  );
}

export function ContentSkeleton() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="skeleton h-4 w-11/12"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-10/12"></div>
      <div className="skeleton h-4 w-10/12 mt-4"></div>
      <div className="skeleton h-4 w-11/12"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-9/12"></div>
      <div className="skeleton h-4 w-10/12 mt-4"></div>
      <div className="skeleton h-4 w-11/12"></div>
      <div className="skeleton h-4 w-11/12"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-10/12"></div>
    </div>
  );
}
