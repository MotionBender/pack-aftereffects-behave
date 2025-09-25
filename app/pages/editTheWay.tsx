import { SlSizeFullscreen } from "react-icons/sl";
import VideoPackHorizontal from "../_components/videoPackHorizontal";
import { MdOutlineColorLens } from "react-icons/md";
import { PiClockCountdown } from "react-icons/pi";

export default function EditTheWay() {
  return (
    <div className="w-full flex flex-col items-center bg-cor-azul-site px-4 mt-5">
      <div className="flex flex-col">
        <h2 className="text-white font-extrabold text-6xl">EDIT</h2>
        <h2 className="text-white font-extrabold text-6xl">THE WAY</h2>
        <h2 className="text-[#fc4478] font-extrabold text-6xl mb-5">
          YOU WANT
        </h2>
      </div>

      <div>
        <VideoPackHorizontal
          src="/videos/vantagens/Editing.mp4"
          width="md:w-300"
          height="md:h-150"
        />
      </div>

      <div className="flex mt-10">
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
    </div>
  );
}
