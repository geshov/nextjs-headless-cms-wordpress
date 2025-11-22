import { Theme } from "./theme/theme";

export function Title({ title }: { title: string }) {
  return (
    <div className="flex justify-between items-start gap-6 pb-12">
      <div className="prose">
        <h1>{title}</h1>
      </div>

      <Theme />
    </div>
  );
}
