import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Link href="/">
        <Image
          src="/assets/logo-behave.jpg"
          alt="Logo Behave"
          width={60}
          height={20}
          priority
          className="rounded-full relative top-10 left-10 z-2 "
        />
      </Link>
      {/* <p className="w-full mx-2 text-2xl tracking-wider">Behave</p> */}
    </div>
  );
}
