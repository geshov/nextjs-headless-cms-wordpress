import Image from "next/image";
import Link from "next/link";
import logo from "./logo.svg";

export function Logo() {
  return (
    <Link href="/" className="size-10">
      <Image
        src={logo.src}
        width={logo.width}
        height={logo.height}
        loading="eager"
        className="w-full"
        alt="Next.js"
      />
    </Link>
  );
}
