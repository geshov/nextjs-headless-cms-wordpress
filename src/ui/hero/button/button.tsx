"use client";

export function Button() {
  const scroll = () => {
    const list = document.querySelector("#controls");
    if (list) list.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={scroll} className="btn btn-primary">
      Статьи
    </button>
  );
}
