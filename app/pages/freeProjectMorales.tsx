import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import VideoPackHorizontal from "../_components/videoPackHorizontal";
import Link from "next/link";

export default function FreeProjectMorales() {
  return (
    <div className="w-full my-20 p-5">
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[2px] rounded-3xl max-w-[1400px] mx-auto flex flex-col items-center pb-10 md:pb-30">
        <div className="flex items-center justify-center p-4">
          <div>
            <h2 className="text-white font-extrabold font-montserrat text-7xl md:text-[140px] leading-none">
              FREE
            </h2>
            <div className="flex items-center">
              <FaCircle className="text-white md:text-3xl" />
              <FaCircle className="text-white md:text-3xl mx-2" />
              <FaCircle className="text-white md:text-3xl mr-2" />
              <p className="text-white font-thin text-3xl md:text-5xl ">
                project
              </p>
            </div>
          </div>
          <div className="flex items-center mx-5">
            <div className="flex items-center">
              <Image
                src="/images/after_effects_icon.png"
                alt="After Effects Icon"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="border-white border flex flex-col justify-center items-center rounded m-3">
          <VideoPackHorizontal
            src="/videos/free_project.mp4"
            width="md:w-200"
            height="md:h-100"
            padding="p-4"
          />
          <Link
            href="https://drive.google.com/drive/folders/18lSbc0dWmomqVLdjk_ezDtVSCKPoezsJ"
            target="_blank"
            className="text-center cursor-pointer bg-amber-300 font-[300] rounded-2xl mb-[-1rem] p-3 md:text-5xl md:px-10 md:mb-[-1.5rem] md:w-120 transition-all duration-300 ease-in-out hover:bg-amber-400 hover:shadow-lg hover:scale-105 active:scale-95 active:shadow-inner"
          >
            Download now
          </Link>
        </div>
      </div>
    </div>
  );
}
