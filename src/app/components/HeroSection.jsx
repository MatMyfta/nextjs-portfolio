"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="mb-12 md:mb-36">
      <div className="container mx-auto px-8 md:px-12 py-4 mt-48">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-700">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-700 to-rose-500">
                Ciao! Sono Mateo
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Web",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Software",
                  1000,
                  "Mobile",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              dev;
            </h1>
            <p className="text-[#8d979e] text-lg sm:text-lg lg:text-xl mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
              sint, dicta corrupti cupiditate.
            </p>
            <div className="mb-16">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-rose-400 to-red-600 hover:bg-slate-200 text-white">
                Contact me
              </button>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-zinc-600 to-zinc-700 text-white mt-3">
                Download CV
              </button>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#bfc7c9] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src=""
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
