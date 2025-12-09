/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useLoading } from "@/providers/loading";

export function Sort({ orderby, order }: { orderby: string; order: string }) {
  const [, setLoading] = useLoading() as [boolean, any];

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const setSort = (field: string, value: string) => {
    setLoading(true);

    const params = new URLSearchParams(searchParams);
    params.set(field, value);

    router.replace(`${pathName}?${params.toString()}`);
  };

  useEffect(() => {
    setLoading(false);
  }, [orderby, order]);

  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-2 grow sm:grow-0">
      <select
        onChange={(e) => setSort("orderby", e.target.value)}
        defaultValue={orderby}
        className="select select-primary basis-0 min-w-fit grow"
        aria-label="Сортировка">
        <option value="date">По дате</option>
        <option value="title">По наименованию</option>
      </select>

      <select
        onChange={(e) => setSort("order", e.target.value)}
        defaultValue={order}
        className="select select-primary basis-0 min-w-fit grow"
        aria-label="Направление">
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
    </div>
  );
}
