"use client";

import { ReactTyped } from "react-typed";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import { VscChevronDown } from "react-icons/vsc";

export function Hero() {
  return (
    <div className="">
      <div className="hero-background flex flex-col items-center justify-center rounded-4xl text-center max-w-[1400px] p-8 mx-auto h-130 md:h-150 md:grid md:grid-cols-2 md:text-start">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1
            className="
            text-4xl md:text-5xl font-bold text-white"
          >
            Create
            <span className="gradient-text">
              <ReactTyped
                className="md:text-5xl text-4xl font-bold md:pl-4 pl-2"
                strings={[
                  "amazing animations",
                  "impactful content",
                  "high-quality videos",
                  "visual stories",
                  "memorable projects",
                  "professional videos",
                ]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </span>
          </h1>
          <h1
            className="
            text-4xl md:text-5xl font-bold text-white mb-4 "
          >
            in minutes with our exclusive After Effects pack
          </h1>

          <p className="text-lg md:text-xl mb-6 text-white ">
            Turn your ideas into amazing animations with 100% editable templates
            that are ready to use and perfect for any project.
          </p>

          <Link
            href="#promoPackId"
            className="px-15 md:px-30 py-2 flex items-center cursor-pointer bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-lg font-semibold rounded-full border-none shadow-none transition duration-300 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 active:scale-95 active:shadow-inner"
          >
            <VscChevronDown className="mr-2" /> See our templates
          </Link>
        </div>
      </div>
    </div>
  );
}
