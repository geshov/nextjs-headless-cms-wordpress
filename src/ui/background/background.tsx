import { Blob } from "./blob/blob";

export function Background() {
  return (
    <>
      <div className="fixed bottom-6/12 right-1/4 w-2/3 sm:w-1/2 md:w-1/3">
        <div className="relative -right-1/2 text-cyan-950 light:text-cyan-100">
          <Blob />
        </div>
      </div>

      <div className="fixed bottom-4/12 left-1/4 w-2/3 sm:w-1/2 md:w-1/3">
        <div className="relative -left-1/2 text-violet-950 light:text-violet-200">
          <Blob />
        </div>
      </div>

      <div className="fixed top-6/12 right-1/2 w-2/3 sm:w-1/2 md:w-1/3">
        <div className="relative -right-2/3 text-blue-950 light:text-blue-200">
          <Blob />
        </div>
      </div>

      <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-3xl"></div>
    </>
  );
}
