/* eslint-disable @typescript-eslint/no-explicit-any */

import { notFound } from "next/navigation";

export const rest = {
  base: "https://wp.geshov.ru/wp-json/wp/v2/",
  auth: "052fbb87-96e4-4c4e-98b8-d4b570eeea77",
};

export async function getPost(slug: string) {
  const href = `${rest.base}posts/${slug}/`;

  const res = await fetch(href, {
    method: "GET",
    headers: { auth: rest.auth },
  });

  if (!res.ok) notFound();

  return await res.json();
}

export async function getPosts(search: string, orderby: string, order: string) {
  const href = `${rest.base}posts?search=${search}&orderby=${orderby}&order=${order}`;

  const res = await fetch(href, {
    method: "GET",
    headers: { auth: rest.auth },
  });

  if (!res.ok) notFound();

  return await res.json();
}

export async function getImage(post: any) {
  const href = post._links?.["wp:featuredmedia"]?.[0]?.href;

  if (!href) return null;

  const res = await fetch(href, {
    method: "GET",
    headers: { auth: rest.auth },
  });

  if (!res.ok) return null;

  return await res.json();
}
