"use client";

export function Button() {
  const scroll = () => {
    const posts = document.querySelector("#controls");
    if (posts) posts.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={scroll} className="btn btn-primary">
      Статьи
    </button>
  );
}
