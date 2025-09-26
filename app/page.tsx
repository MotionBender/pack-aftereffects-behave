import { Garantia } from "./_components/garantia";
import { NavBar } from "./_components/navbar";
import BackGroundPack from "./pages/backgroundPack";
import { Direitos } from "./pages/direitos";
import EditTheWay from "./pages/editTheWay";
import { EverythingYouGet } from "./pages/everythingYouGet";
import FreeProjectMorales from "./pages/freeProjectMorales";
import { Hero } from "./pages/hero";
import MorePacks from "./pages/morePacks";
import PromoPack01 from "./pages/promoPack01";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <PromoPack01 />
      <BackGroundPack />
      <MorePacks />
      <EditTheWay />
      <EverythingYouGet />
      <FreeProjectMorales />
      {/* <CompreAgora /> */}
      <Garantia />
      <Direitos />
    </div>
  );
}
