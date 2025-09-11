import Image from "next/image";
import { ButtonComprarPacks } from "./button-comprar-packs";
import { PackProps } from "../types/packProps";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Pack({
  tituloPack,
  subTituloPack1,
  subTituloPack2,
  descricao1,
  srcImagem,
  arrayCaminhoVideos = [],
}: PackProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-white font-extrabold text-xl md:text-4xl mb-3 text-center">
        {tituloPack}
      </h1>
      <Image
        src={srcImagem}
        alt="Pack 01 image"
        width={320}
        height={566}
        className="rounded-lg mb-3"
      />
      <h1 className="text-white font-extrabold">{subTituloPack1}</h1>
      <h1 className="text-white font-extrabold">{subTituloPack2}</h1>
      <p className="text-white text-sm my-2">{descricao1}</p>
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-gray-400 w-full rounded mb-3 font-semibold cursor-pointer">
            See animations
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl w-full flex flex-col items-center justify-center bg-[#00081f] text-white">
          <DialogHeader>
            <DialogTitle className="text-center">
              Animations Preview
            </DialogTitle>
            <DialogDescription>
              Preview the {tituloPack} included in this pack.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center">
            <Carousel className="w-[80%] text-black">
              <CarouselContent>
                {arrayCaminhoVideos && arrayCaminhoVideos.length > 0 ? (
                  // Se o array tiver itens, renderiza o carrossel
                  arrayCaminhoVideos.map((videoSrc, index) => (
                    <CarouselItem
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <div className="flex items-center justify-center w-full h-full p-2">
                        <video
                          src={videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="max-h-96 w-auto mx-auto rounded"
                        />
                      </div>
                    </CarouselItem>
                  ))
                ) : (
                  // Se o array estiver vazio, renderiza a div "em breve"
                  <div className="flex items-center justify-center w-100 bg-gray-100 rounded">
                    <p className="text-gray-500 text-lg font-semibold text-center">
                      Coming soon...
                    </p>
                  </div>
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
      <ButtonComprarPacks>Buy Now</ButtonComprarPacks>
    </div>
  );
}
