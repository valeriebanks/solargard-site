import Image from "next/image";
import SolarFilmHero from "@/public/images/hero-imgs/Hero-solar-film-img-min.jpg";
import SolarFilmHeroMobile from "@/public/images/hero-imgs/Hero-solar-film-img-mobile.jpg";
export default function SolarFilmHeroImg() {
  return (
    <div>
      <div className="w-full h-auto flex relative">
        <div className="w-full lg:block md:block sm:hidden">
          <Image
            alt="Solar Gard Solar Films"
            src={SolarFilmHero}
            placehoolder="blur"
            quality={100}
            size="100vw"
            style={{
              objectFit: "cover",
              width: "100%",
            }}
          />
        </div>
        <div className="lg:hidden md:hidden sm:block sm:h-[auto] bg-no-repeat">
          <Image
            alt="Solar Gard Solar Films"
            src={SolarFilmHeroMobile}
            placehoolder="blur"
            quality={100}
            size="100vw"
          />
        </div>
        <div className="absolute bottom-0 flex items-center">
          <h1 className="text-white lg:font-bold md:font-bold sm:font-semibold lg:text-5xl md:text-3xl sm:text-xl lg:w-[60%] lg:pb-16 lg:pl-24 md:pb-16 md:pl-16 sm:px-8 sm:py-8 z-10 opacity-100">
            Experience the Ultimate in Comfort and Efficiency with Solar Films
          </h1>
        </div>
      </div>
    </div>
  );
}
