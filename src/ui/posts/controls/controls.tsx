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
    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-6">
      <Search search={search} />
      <Sort orderby={orderby} order={order} />
    </div>
  );
}
