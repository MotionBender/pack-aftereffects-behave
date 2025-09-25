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
  descricao2,
  srcImagem,
  arrayCaminhoVideos = [],
  href,
}: PackProps) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-white font-extrabold text-4xl mb-3 text-center">
        {tituloPack}
      </h3>
      <Image
        src={srcImagem}
        alt="Pack 01 image"
        width={700}
        height={566}
        className="rounded-lg mb-3"
      />
      <div className="w-full my-4 px-2 md:p-0 md:my-0 md:h-[6vw] ">
        <h4 className="text-white font-extrabold">{subTituloPack1}</h4>
        <h4 className="text-white font-extrabold">{subTituloPack2}</h4>
        <p className="text-white text-sm my-2">{descricao1}</p>
        <p className="text-white text-sm my-2">{descricao2}</p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-gray-400 w-full rounded mb-3 font-semibold cursor-pointer active:scale-95 hover:scale-95 transition duration-300">
            See animations
          </button>
        </DialogTrigger>
        <DialogContent
          className="w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw] 
             flex flex-col items-center justify-center bg-[#00081f] text-white"
        >
          <DialogHeader>
            <DialogTitle className="text-center">
              Animations Preview
            </DialogTitle>
            <DialogDescription>
              Preview the {tituloPack} included in this pack.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center w-full">
            <Carousel className="w-full max-w-[90%] text-black">
              <CarouselContent>
                {arrayCaminhoVideos && arrayCaminhoVideos.length > 0 ? (
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
                          className="max-h-[80vh] w-auto mx-auto rounded"
                        />
                      </div>
                    </CarouselItem>
                  ))
                ) : (
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
      <ButtonComprarPacks href={href}>Buy Now</ButtonComprarPacks>
    </div>
  );
}
