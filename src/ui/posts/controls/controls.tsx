import { Search } from "./search/search";
import { Sort } from "./sort/sort";

export function Controls({
  search,
  orderby,
  order,
}: {
  search: string;
  orderby: string;
  order: string;
}) {
  return (
    <div className="container flex flex-wrap sm:flex-nowrap justify-between items-center gap-6 pt-10 scroll-mt-16">
      <Search search={search} />
      <Sort orderby={orderby} order={order} />
    </div>
  );
}
