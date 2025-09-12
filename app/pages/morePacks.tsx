import Pack from "../_components/pack";

export default function MorePacks() {
  const motionGraphicVideos = [
    "/videos/previews/motion-graphic/main-1.mp4",
    "/videos/previews/motion-graphic/main-2.mp4",
    "/videos/previews/motion-graphic/main-3.mp4",
    "/videos/previews/motion-graphic/main-4.mp4",
    "/videos/previews/motion-graphic/main-5.mp4",
  ];

  const typographyVideos = [
    "/videos/previews/typography-pack/main-1.mp4",
    "/videos/previews/typography-pack/main-2.mp4",
    "/videos/previews/typography-pack/main-3.mp4",
    "/videos/previews/typography-pack/main-4.mp4",
    "/videos/previews/typography-pack/main-5.mp4",
  ];

  const transitionVideos = [
    "/videos/previews/transition-pack/main-1.mp4",
    "/videos/previews/transition-pack/main-2.mp4",
    "/videos/previews/transition-pack/main-3.mp4",
    "/videos/previews/transition-pack/main-4.mp4",
    "/videos/previews/transition-pack/main-5.mp4",
  ];

  return (
    <div className="w-full flex flex-col items-center bg-cor-azul-site px-4">
      <h1 className="text-white font-extrabold text-4xl my-6 md:text-6xl">
        MORE PACKS
      </h1>

      <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center my-5 gap-10">
        <div className="flex gap-4 m-3 md:grid md:grid-cols-2 md:m-0">
          <Pack
            tituloPack="Assets Pack"
            subTituloPack1="Big Pack"
            subTituloPack2="Instagram"
            descricao1="640 Animations and Effects"
            srcImagem="/images/more_packs/assets-pack.png"
            href="https://pay.hotmart.com/U101505027Q"
          />
          <Pack
            tituloPack="Motion Graphics"
            subTituloPack1="Gaze"
            subTituloPack2="Graphic Pack"
            descricao1="450 Animations and Effects"
            srcImagem="/images/more_packs/motion-graphics-pack.png"
            arrayCaminhoVideos={motionGraphicVideos}
            href="https://pay.hotmart.com/J101504754G"
          />
        </div>
        <div className="flex gap-4 md:grid md:grid-cols-2 md:m-0">
          <Pack
            tituloPack="Transition Pack"
            subTituloPack1="Big Pack"
            subTituloPack2="Instagram"
            descricao1="640 Animations and Effects"
            srcImagem="/images/more_packs/transition-pack.png"
            arrayCaminhoVideos={transitionVideos}
            href="https://pay.hotmart.com/S101585148G"
          />
          <Pack
            tituloPack="Typography Pack"
            subTituloPack1="Gaze"
            subTituloPack2="Graphic Pack"
            descricao1="450 Animations and Effects"
            srcImagem="/images/more_packs/typography-pack.png"
            arrayCaminhoVideos={typographyVideos}
            href="https://pay.hotmart.com/Q101305699L"
          />
        </div>
      </div>
    </div>
  );
}
