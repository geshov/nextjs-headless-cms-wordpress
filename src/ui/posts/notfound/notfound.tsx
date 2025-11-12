import Image from "next/image";
import notfound from "./notfound.svg";

export function Notfound() {
  return (
    <div className="flex flex-col justify-center items-center pt-6">
      <Image
        src={notfound.src}
        width={notfound.width}
        height={notfound.height}
        className="w-auto max-w-80"
        alt="Ничего не найдено"
      />

      <div className="text-3xl font-bold text-[#eb725f] text-center -translate-y-6">
        Ничего не найдено
      </div>
    </div>
  );
}
