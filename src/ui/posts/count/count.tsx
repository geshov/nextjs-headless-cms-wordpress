export function Count({ total, search }: { total: number; search: string }) {
  const label = search ? "Найдено статей:" : "Всего статей:";

  return (
    <div className="container pt-4">
      <div className="text-sm">
        {label} <span className="font-semibold">{total}</span>
      </div>
    </div>
  );
}
