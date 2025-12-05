import { Suspense } from "react";
import { Loading } from "@/ui/loading/loading";
import { Posts } from "@/ui/posts/posts";
import { Footer } from "@/ui/footer/footer";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const search = (await searchParams).search || "";
  const orderby = (await searchParams).orderby || "date";
  const order = (await searchParams).order || "desc";

  const params = search + orderby + order;

  return (
    <main>
      <Suspense fallback={<Loading />} key={params}>
        <Posts search={search} orderby={orderby} order={order} />
        <Footer />
      </Suspense>
    </main>
  );
}
