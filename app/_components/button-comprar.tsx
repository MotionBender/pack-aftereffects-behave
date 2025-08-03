import { ReactNode } from "react";
import Link from "next/link";

type ButtonComprarProps = {
  children: ReactNode;
  href: string;
};

export function ButtonComprar({ children, href }: ButtonComprarProps) {
  return (
    <Link
      href={href}
      className="px-20 py-2 inline-block cursor-pointer bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-lg font-semibold rounded-full border-none shadow-none transition duration-300 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 active:scale-95 active:shadow-inner"
    >
      {children}
    </Link>
  );
}
