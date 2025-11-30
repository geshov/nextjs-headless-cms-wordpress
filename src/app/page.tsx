import { Hero } from "@/ui/hero/hero";
import { Controls } from "@/ui/controls/controls";
import { Posts } from "@/ui/posts/posts";
import { Footer } from "@/ui/footer/footer";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const search = (await searchParams).search || "";
  const orderby = (await searchParams).orderby || "date";
  const order = (await searchParams).order || "desc";

  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 overflow-hidden">
        <Controls search={search} orderby={orderby} order={order} />
        <Posts search={search} orderby={orderby} order={order} />
      </main>
      <Footer />
    </>
  );
}
