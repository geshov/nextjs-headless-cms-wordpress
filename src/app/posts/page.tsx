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

  return (
    <main>
      <Posts search={search} orderby={orderby} order={order} />
      <Footer />
    </main>
  );
}
