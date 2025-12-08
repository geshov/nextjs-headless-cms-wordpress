/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useState, useEffect } from "react";
import { Search } from "./search/search";
import { Sort } from "./sort/sort";
import { Loading } from "@/ui/loading/loading";

export function Controls({
  search,
  orderby,
  order,
}: {
  search: string;
  orderby: string;
  order: string;
}) {
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(false);
  }, [search, orderby, order]);

  return (
    <div className="container flex flex-wrap sm:flex-nowrap justify-between items-center gap-6 pt-10 scroll-mt-16">
      <Search search={search} setPending={setPending} />
      <Sort orderby={orderby} order={order} setPending={setPending} />
      <Loading pending={pending} />
    </div>
  );
}
