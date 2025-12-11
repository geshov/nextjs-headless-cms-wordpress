export function Title({ title, date }: { title: string; date: string }) {
  return (
    <div className="pt-24 pb-10 bg-black/20 light:bg-white/30">
      <div className="container space-y-8">
        <div className="prose">
          <h1>{title}</h1>
        </div>

        <div className="font-semibold">
          {new Date(date).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
}
