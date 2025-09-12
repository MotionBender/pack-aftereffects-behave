import { Metadata } from "next";

import EditTheWay from "./pages/editTheWay";
import EssentialPack01 from "./pages/essentialPack01";
import { EverythingYouGet } from "./pages/everythingYouGet";
import FreeProjectMorales from "./pages/freeProjectMorales";
import { Garantia } from "./_components/garantia";
import MorePacks from "./pages/morePacks";
import { NavBar } from "./_components/navbar";
import PromoPack01 from "./pages/promoPack01";
import { Hero } from "./pages/hero";
import { Direitos } from "./pages/direitos";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <PromoPack01 />
      <EssentialPack01 />
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
