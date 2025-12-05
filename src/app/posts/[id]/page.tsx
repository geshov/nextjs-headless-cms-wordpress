"use cache";

import { cacheLife } from "next/cache";
import { getPost } from "@/lib/rest";
import { Post } from "@/ui/post/post";
import { Footer } from "@/ui/footer/footer";

import type { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  cacheLife("hours");

  const { id } = await params;
  const post = await getPost(id);

  return {
    title: `${post.title.rendered} | Next.js`,
    description: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  cacheLife("hours");

  const { id } = await params;
  const post = await getPost(id);

  return (
    <main>
      <Post post={post} />
      <Footer />
    </main>
  );
}
