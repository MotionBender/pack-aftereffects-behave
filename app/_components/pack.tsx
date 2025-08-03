import Image from "next/image";
import { ButtonComprarPacks } from "./button-comprar-packs";

type PackProps = {
  tituloPack: string;
  subTituloPack1: string;
  subTituloPack2: string;
  descricao1: string;
};

export default function Pack({
  tituloPack,
  subTituloPack1,
  subTituloPack2,
  descricao1,
}: PackProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-white font-extrabold text-4xl mb-3">{tituloPack}</h1>

      <Image
        src="/images/pack01.jpg"
        alt="Pack 01 image"
        width={320}
        height={320}
        className="rounded-lg mb-3"
      />
      <h1 className="text-white font-extrabold">{subTituloPack1}</h1>
      <h1 className="text-white font-extrabold">{subTituloPack2}</h1>
      <p className="text-white text-sm my-2">{descricao1}</p>
      <button className="bg-gray-400 w-full rounded mb-3 font-semibold cursor-pointer">
        See animations
      </button>
      <ButtonComprarPacks>Buy Now</ButtonComprarPacks>
    </div>
  );
}
