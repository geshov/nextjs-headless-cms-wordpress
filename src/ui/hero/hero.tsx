import Link from "next/link";
import { Background } from "./background/background";
import { Loading } from "@/ui/loading/loading";

export function Hero() {
  return (
    <div className="relative hero bg-base-200 min-h-screen overflow-hidden">
      <Background />

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

          <Link href="/posts/" className="btn btn-primary">
            Статьи <Loading />
          </Link>
        </div>
      </div>
    </div>
  );
}
