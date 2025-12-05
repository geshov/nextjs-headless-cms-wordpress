import { Suspense } from "react";
import { Loading } from "@/ui/loading/loading";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
