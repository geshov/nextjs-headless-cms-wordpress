import { Suspense } from "react";
import Loading from "@/app/loading";

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

  const loading = search + orderby + order;

  return (
    <main className="max-w-7xl mx-auto p-4">
      <div className="prose pb-12">
        <h1>Статьи из Headless CMS</h1>
      </div>

      <Controls search={search} orderby={orderby} order={order} />

      <Suspense key={loading} fallback={<Loading />}>
        <Posts search={search} orderby={orderby} order={order} />
      </Suspense>
    </main>
  );
}
