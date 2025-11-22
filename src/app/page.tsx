import { Title } from "@/ui/title/title";
import { Controls } from "@/ui/controls/controls";
import { Posts } from "@/ui/posts/posts";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const search = (await searchParams).search || "";
  const orderby = (await searchParams).orderby || "date";
  const order = (await searchParams).order || "desc";

  return (
    <main className="max-w-7xl mx-auto p-4">
      <Title title="Статьи из Headless CMS" />
      <Controls search={search} orderby={orderby} order={order} />
      <Posts search={search} orderby={orderby} order={order} />
    </main>
  );
}
