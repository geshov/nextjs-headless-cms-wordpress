import { Button } from "./button/button";

export function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl text-balance font-bold">
            Статьи из Headless CMS
          </h1>

          <div className="text-balance py-8">
            Поиск и сортировка выполняются средствами CMS (SQL), а приложение
            Next.js только отображает уже отфильтрованный и отсортированный
            результат.
          </div>

          <Button />
        </div>
      </div>
    </div>
  );
}
