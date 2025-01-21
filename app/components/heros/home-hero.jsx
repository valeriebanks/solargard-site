import Image from "next/image";

import BlendedHeroImg from "@/public/images/hero-imgs/Blended_Hero-img-B-min.jpg";
import HeroMdImg from "@/public/images/hero-imgs/Hero-homepge_md.jpg";
import HeroMobileImg from "@/public/images/hero-imgs/hero-mobile-B.jpg";

export default function HomeHero() {
  return (
    <div className="relative lg:h-[70vh] sm:h-[70vh] w-full bg-grey">
      {/* Desktop Image */}
      <div className="hidden lg:block absolute inset-0">
        <Image
          src={BlendedHeroImg}
          alt="Solar Gard"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          priority
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* Tablet Image */}
      <div className="hidden md:block lg:hidden absolute inset-0">
        <Image
          src={HeroMdImg}
          alt="Solar Gard Solar Films"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src={HeroMobileImg}
          alt="Solar Gard Solar Films"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-white font-bold sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl xxl:text-8xl">
          Solar Gard Solutions
        </h1>
        <h2 className="text-white font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:mt-4">
          Tints - Prints - Wraps
        </h2>
      </div>
    </div>
  );
}
