export function Title({ title }: { title: string }) {
  return (
    <div className="pt-24 pb-10 bg-base-200">
      <div className="container">
        <div className="prose">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
