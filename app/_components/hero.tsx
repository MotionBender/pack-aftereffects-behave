"use client";

import { ReactTyped } from "react-typed";
import { ButtonComprar } from "./button-comprar";

export function Hero() {
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="hero-background max-w-[1400px] mx-auto md:grid md:grid-cols-2 h-150 rounded-4xl flex items-center justify-center flex-col p-8 text-center md:text-start">
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
              Turn your ideas into amazing animations with 100% editable
              templates that are ready to use and perfect for any project.
            </p>

            <ButtonComprar href="#projectFeaturesPromoPack">
              Buy Now
            </ButtonComprar>
          </div>
        </div>
      </div>
    </div>
  );
}
