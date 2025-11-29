import { Blob } from "./blob/blob";
import { Button } from "./button/button";

export function Hero() {
  return (
    <div className="relative hero bg-base-200 min-h-screen overflow-hidden">
      <div className="absolute top-0 left-1/3 w-80">
        <div className="relative -left-1/2 text-cyan-950 light:text-cyan-200">
          <Blob />
        </div>
      </div>

      <div className="absolute right-1/3 w-80">
        <div className="relative -right-1/2 text-violet-950 light:text-violet-300">
          <Blob />
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 w-80">
        <div className="relative -left-3/4 text-blue-950 light:text-blue-300">
          <Blob />
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-3xl"></div>

      <div className="relative hero-content text-center">
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
