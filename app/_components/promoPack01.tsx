import { BannerPackDisponivel } from "./bannerPackDisponivel";
import { ButtonComprar } from "./button-comprar";
import ProjectFeaturesPromoPack from "./projectFeaturesPromoPack";
import VideoPackVertical from "./videoPackVertical";

export default function PromoPack01() {
  return (
    <div className="w-full flex flex-col items-center bg-cor-azul-site py-16 px-4">
      <BannerPackDisponivel
        titulo="PROMO PACK 01"
        descricao="6 Completely editable projetcs"
      />

      <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center bg-cor-azul-site">
        <div className="md:grid md:grid-cols-2 flex gap-4 p-3">
          <VideoPackVertical src="/videos/promo_pack_01/coffe.mp4" />

          <VideoPackVertical src="/videos/promo_pack_01/tenis_nike.mp4" />
        </div>

        <div className="md:grid md:grid-cols-2 flex gap-4 p-3 md:p-0">
          <VideoPackVertical src="/videos/promo_pack_01/spider.mp4" />
          <VideoPackVertical src="/videos/promo_pack_01/ghost.mp4" />
        </div>

        <div className="grid grid-cols-2 gap-4 p-3 items-center">
          <VideoPackVertical src="/videos/promo_pack_01/michael_jordan.mp4" />
          <VideoPackVertical src="/videos/promo_pack_01/rayssa.mp4" />
        </div>

        <ProjectFeaturesPromoPack />

        <ButtonComprar href="https://pay.hotmart.com/B101169313N">
          Buy now
        </ButtonComprar>
        <div className="text-center p-3">
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
