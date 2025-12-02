/* eslint-disable @typescript-eslint/no-explicit-any */

export function Title({ post }: { post: any }) {
  return (
    <div className="pt-20 pb-6 bg-base-200">
      <div className="max-w-7xl mx-auto p-4 space-y-8">
        <div className="prose">
          <h1>{post.title.rendered}</h1>
        </div>

        <div className="font-semibold">
          {new Date(post.date).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
}
