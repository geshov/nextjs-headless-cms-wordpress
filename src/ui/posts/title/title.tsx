export function Title({ title }: { title: string }) {
  return (
    <div className="pt-24 pb-10 bg-black/20 light:bg-white/30">
      <div className="container">
        <div className="prose">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
