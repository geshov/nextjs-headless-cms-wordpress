/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect } from "react";
import { Search } from "./search/search";
import { Sort } from "./sort/sort";
import { useSetLoading } from "@/providers/loading";

export function Controls({
  search,
  orderby,
  order,
}: {
  search: string;
  orderby: string;
  order: string;
}) {
  const setLoading = useSetLoading() as any;

  useEffect(() => {
    setLoading(false);
  }, [search, orderby, order]);

  return (
    <div className="container flex flex-wrap sm:flex-nowrap justify-between items-center gap-6 pt-10 scroll-mt-16">
      <Search search={search} />
      <Sort orderby={orderby} order={order} />
    </div>
  );
}
