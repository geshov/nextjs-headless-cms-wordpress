import { Suspense } from "react";
import { Title } from "@/ui/posts/title/title";
import { Controls } from "@/ui/posts/controls/controls";
import { Posts, PostsSkeleton } from "@/ui/posts/posts";
import { Footer } from "@/ui/footer/footer";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const search = (await searchParams).search || "";
  const orderby = (await searchParams).orderby || "date";
  const order = (await searchParams).order || "desc";

  return (
    <main>
      <Title title="Список статей" />
      <Controls search={search} orderby={orderby} order={order} />

      <Suspense fallback={<PostsSkeleton />}>
        <Posts search={search} orderby={orderby} order={order} />
        <Footer />
      </Suspense>
    </main>
  );
}
