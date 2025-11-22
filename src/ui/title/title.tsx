export function Title({ title }: { title: string }) {
  return (
    <div className="prose pb-12">
      <h1>{title}</h1>
    </div>
  );
}
