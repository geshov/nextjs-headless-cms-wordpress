import css from "./loading.module.css";

export default function Loading() {
  return (
    <div
      className={`bg-secondary fixed top-0 right-0 left-0 z-50 h-1 ${css.loading}`}
      style={{ transform: "translateX(-100%)" }}></div>
  );
}
