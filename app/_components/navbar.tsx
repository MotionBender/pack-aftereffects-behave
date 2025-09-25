import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <div className="absolute left-5 top-5 z-10 w-full  md:static md:p-5">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white  ">
        <Link href="/">
          <Image
            src="/assets/logo-behave.jpg"
            alt="Logo Behave"
            width={60}
            height={20}
            priority
            className="rounded-full"
          />
        </Link>
        {/* <h1 className="w-full mx-2 text-2xl tracking-wider">Behave</h1> */}
      </div>
    </div>
  );
}
