import Image from "next/image";

import BlendedHeroImg from "@/public/images/hero-imgs/Blended_Hero-img-min.jpg";
import HeroMdImg from "@/public/images/hero-imgs/Hero-homepge_md.jpg";
import HeroMobileImg from "@/public/images/hero-imgs/hero-mobile.jpg";

export default function HomeHero() {
  return (
    <section className="relative w-full h-screen">
      {/* Desktop Image */}
      <div className="hidden lg:block absolute inset-0">
        <Image
          src={BlendedHeroImg}
          alt="Solar Gard"
          placeholder="blur"
          quality={100}
          fill
          className="object-cover"
        />
      </div>

      {/* Tablet Image */}
      <div className="hidden md:block lg:hidden absolute inset-0">
        <Image
          src={HeroMdImg}
          alt="Solar Gard Solar Films"
          placeholder="blur"
          quality={100}
          fill
          className="object-cover"
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src={HeroMobileImg}
          alt="Solar Gard Solar Films"
          placeholder="blur"
          quality={100}
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Solar Gard Solutions Ireland
        </h1>
        <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4">
          Tints - Prints - Wraps
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-6 max-w-2xl">
          Transform Spaces & Vehicles with Solar Gard Ireland. Experts in Glass
          Films, Surface Enhancements & Custom Wraps.
        </p>
      </div>
    </section>
  );
}
