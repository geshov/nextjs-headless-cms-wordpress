/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useRef } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function Search({
  search,
  setPending,
}: {
  search: string;
  setPending: any;
}) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const input = useRef(null) as any;

  const submit = (e: any) => {
    e.preventDefault();
    startSearch();
  };

  const startSearch = () => {
    setPending(true);
    const trim = input.current.value.trim();
    const params = new URLSearchParams(searchParams);
    if (trim) params.set("search", trim);
    else params.delete("search");
    router.replace(`${pathName}?${params.toString()}`);
  };

  const clearSearch = () => {
    input.current.value = "";
    startSearch();
  };

  return (
    <form
      onSubmit={submit}
      className="max-w-160 grow flex flex-wrap sm:flex-nowrap items-center gap-2">
      <label className="input input-primary grow pe-1">
        <input
          ref={input}
          type="search"
          name="search"
          defaultValue={search}
          placeholder="Поиск"
          autoComplete="off"
          className="grow"
        />

        <button
          type="button"
          onClick={clearSearch}
          className="btn btn-sm btn-square btn-ghost">
          <svg
            className="size-6 fill-base-content"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
          </svg>
        </button>
      </label>

      <button type="submit" className="btn btn-primary grow sm:grow-0">
        Найти
      </button>
    </form>
  );
}
