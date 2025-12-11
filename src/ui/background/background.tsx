import { Blob } from "./blob/blob";

export function Background() {
  return (
    <>
      <div className="fixed -top-1/6 right-1/4 w-1/3">
        <div className="relative -right-1/2 text-cyan-950 light:text-cyan-100">
          <Blob />
        </div>
      </div>

      <div className="fixed left-1/4 w-1/3">
        <div className="relative -left-1/2 text-violet-950 light:text-violet-200">
          <Blob />
        </div>
      </div>

      <div className="fixed -bottom-1/6 right-1/2 w-1/3">
        <div className="relative -right-2/3 text-blue-950 light:text-blue-200">
          <Blob />
        </div>
      </div>

      <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-3xl"></div>
    </>
  );
}
