import { cacheLife } from "next/cache";
import { getPost } from "@/lib/rest";
import { Title } from "@/ui/title/title";
import { Post } from "@/ui/post/post";
import { Footer } from "@/ui/footer/footer";

import type { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  "use cache";
  cacheLife("hours");

  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: `${post.title.rendered} | Next.js`,
    description: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  "use cache";
  cacheLife("hours");

  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <>
      <main className="max-w-7xl mx-auto p-4">
        <Title title={post.title.rendered} />
        <Post post={post} />
      </main>
      <Footer />
    </>
  );
}
