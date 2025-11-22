"use cache";

import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";
import { rest } from "@/lib/rest";
import { Title } from "@/ui/title/title";
import { Post } from "@/ui/post/post";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  cacheLife("hours");

  const { slug } = await params;

  const href = `${rest.base}posts/${slug}/`;

  const res = await fetch(href, {
    method: "GET",
    headers: { auth: rest.auth },
  });

  if (!res.ok) notFound();

  const post = await res.json();

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
  cacheLife("hours");

  const { slug } = await params;

  const href = `${rest.base}posts/${slug}/`;

  const res = await fetch(href, {
    method: "GET",
    headers: { auth: rest.auth },
  });

  if (!res.ok) notFound();

  const post = await res.json();

  return (
    <>
      <Title title={post.title.rendered} />
      <Post post={post} />
    </>
  );
}
