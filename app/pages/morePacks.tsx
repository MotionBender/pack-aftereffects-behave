import Pack from "../_components/pack";

export default function MorePacks() {
  const motionGraphicVideos = [
    "/videos/previews/motion-graphic/full-preview.mp4",
    // "/videos/previews/motion-graphic/main-1.mp4",
    // "/videos/previews/motion-graphic/main-2.mp4",
    // "/videos/previews/motion-graphic/main-3.mp4",
    // "/videos/previews/motion-graphic/main-4.mp4",
    // "/videos/previews/motion-graphic/main-5.mp4",
  ];

  const typographyVideos = [
    "/videos/previews/typography-pack/main-1.mp4",
    "/videos/previews/typography-pack/main-2.mp4",
    "/videos/previews/typography-pack/main-3.mp4",
    "/videos/previews/typography-pack/main-4.mp4",
    "/videos/previews/typography-pack/main-5.mp4",
  ];

  const transitionVideos = [
    "/videos/previews/transition-pack/full-preview.mp4",
    // "/videos/previews/transition-pack/main-1.mp4",
    // "/videos/previews/transition-pack/main-2.mp4",
    // "/videos/previews/transition-pack/main-3.mp4",
    // "/videos/previews/transition-pack/main-4.mp4",
    // "/videos/previews/transition-pack/main-5.mp4",
  ];

  const assetsVideos = [
    "/videos/previews/elements-pack/main-1.mp4",
    "/videos/previews/elements-pack/main-2.mp4",
    "/videos/previews/elements-pack/main-3.mp4",
    "/videos/previews/elements-pack/main-4.mp4",
    "/videos/previews/elements-pack/main-5.mp4",
  ];

  return (
    <div className="w-full flex flex-col items-center bg-cor-azul-site px-4">
      <h2 className="text-white font-extrabold text-4xl my-6 md:text-6xl">
        MORE PACKS
      </h2>

      <div className="max-w-[700px] mx-auto flex flex-col items-center justify-center my-5 gap-10">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-2">
          <Pack
            tituloPack="Assets Pack"
            subTituloPack1="Assets Pack 01"
            descricao1="50+ Elements (Fire, Electric, Liquid, Neon...)"
            descricao2="100% customizable structure (colors, texts, images, videos)"
            srcImagem="/images/more_packs/assets-pack.png"
            arrayCaminhoVideos={assetsVideos}
            href="https://pay.hotmart.com/U101505027Q"
          />
          <Pack
            tituloPack="Motion Graphics"
            subTituloPack1="Motion Design Pack 01"
            descricao1="6 After Effects projects (.aep)"
            descricao2="100% customizable structure (colors, texts, images, videos)"
            srcImagem="/images/more_packs/motion-graphics-pack.png"
            arrayCaminhoVideos={motionGraphicVideos}
            href="https://pay.hotmart.com/J101504754G"
          />
        </div>
        <div className="flex flex-col gap-10 md:grid md:grid-cols-2">
          <Pack
            tituloPack="Transition Pack"
            subTituloPack1="Transition Templates Pack 01"
            descricao1="1 After Effects project file (.aep)"
            descricao2="50+ fully editable animated transition templates"
            srcImagem="/images/more_packs/transition-pack.png"
            arrayCaminhoVideos={transitionVideos}
            href="https://pay.hotmart.com/S101585148G"
          />
          <Pack
            tituloPack="Typography Pack"
            subTituloPack1="Typografy Pack "
            descricao1="Main After Effects project file (.AEP)"
            descricao2="50+ Editable Animated Text Templates"
            srcImagem="/images/more_packs/typography-pack.png"
            arrayCaminhoVideos={typographyVideos}
            href="https://pay.hotmart.com/Q101305699L"
          />
        </div>
      </div>
    </div>
  );
}
