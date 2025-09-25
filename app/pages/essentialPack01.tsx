import { MdOutlineColorLens } from "react-icons/md";
import { PiClockCountdown } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";
import { BannerPackDisponivel } from "../_components/bannerPackDisponivel";
import { ButtonComprar } from "../_components/button-comprar";
import ProjectFeatures from "../_components/projectFeatures";
import VideoPackHorizontal from "../_components/videoPackHorizontal";

export default function EssentialPack01() {
  return (
    <div className="w-full flex flex-col items-center bg-cor-azul-site px-4">
      <BannerPackDisponivel
        titulo="BACKGROUND PACK 01"
        descricao="50+ different backgrounds"
      />

      <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center bg-cor-azul-site">
        <div className="flex gap-4 m-3 md:grid md:grid-cols-2 md:m-0">
          <VideoPackHorizontal src="/videos/essential_pack_01/BG1.mp4" />
          <VideoPackHorizontal src="/videos/essential_pack_01/BG2.mp4" />
        </div>

        <div className="flex gap-4 m-3 md:grid md:grid-cols-2 md:m-0">
          <VideoPackHorizontal src="/videos/essential_pack_01/BG3.mp4" />
          <VideoPackHorizontal src="/videos/essential_pack_01/BG4.mp4" />
        </div>

        <div className="flex gap-4 m-3 md:grid md:grid-cols-2 md:m-0">
          <VideoPackHorizontal src="/videos/essential_pack_01/BG5.mp4" />
          <VideoPackHorizontal src="/videos/essential_pack_01/BG6.mp4" />
        </div>

        <div className="flex gap-4 m-3 md:grid md:grid-cols-2 md:m-0">
          <VideoPackHorizontal src="/videos/essential_pack_01/BG7.mp4" />
          <VideoPackHorizontal src="/videos/essential_pack_01/BG8.mp4" />
        </div>

        <h1 className="text-white font-extrabold text-3xl my-4 md:text-6xl">
          50+ BACKGROUNDS
        </h1>

        <div className="flex mb-5">
          <div className="flex flex-col items-center">
            <SlSizeFullscreen className="text-white text-5xl" />
            <p className="text-white">Edit Size</p>
          </div>

          <div className="flex flex-col items-center mx-10 md:mx-30">
            <MdOutlineColorLens className="text-white text-5xl" />
            <p className="text-white">Edit Colors</p>
          </div>

          <div className="flex flex-col items-center">
            <PiClockCountdown className="text-white text-5xl" />
            <p className="text-white">Edit Speed</p>
          </div>
        </div>

        <ProjectFeatures />

        <ButtonComprar href="https://pay.hotmart.com/I101255610S">
          Buy now
        </ButtonComprar>
        <div className="text-center p-3 mb-5">
          <p className="text-white mt-5">100% secure purchase.</p>
          <p className="text-white">One-time payment and lifetime access</p>
          <img
            src="/images/cartoes.svg"
            alt="Cartões aceitos"
            className="mt-6 w-100 h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
