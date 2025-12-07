import Link from "next/link";

export function Item({
  id,
  title,
  date,
}: {
  id: number;
  title: string;
  date: string;
}) {
  return (
    <div>
      <Link href={`/posts/${id}/`}>
        <div className="space-y-1">
          <div className="text-xs">
            {new Date(date).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          <div className="link link-secondary">{title}</div>
        </div>
      </Link>
    </div>
  );
}
