import { Logo } from "./logo/logo";
import { Theme } from "./theme/theme";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-md z-10">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-3">
        <Logo />
        <Theme />
      </div>
    </div>
  );
}
