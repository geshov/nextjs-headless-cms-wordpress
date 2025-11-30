import { Blob } from "./blob/blob";

export function Background() {
  return (
    <>
      <div className="absolute top-0 left-1/3 w-md">
        <div className="relative -left-1/2 text-cyan-950 light:text-cyan-200">
          <Blob />
        </div>
      </div>

      <div className="absolute right-1/3 w-md">
        <div className="relative -right-1/2 text-violet-950 light:text-violet-300">
          <Blob />
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 w-md">
        <div className="relative -left-2/3 text-blue-950 light:text-blue-300">
          <Blob />
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-3xl"></div>
    </>
  );
}
