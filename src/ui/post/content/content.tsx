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
