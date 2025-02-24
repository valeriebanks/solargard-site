"use client";
import { useEffect } from "react";

import SolarFilmsData from "../components/film-collections/solar-films";
import Image from "next/image";
// import SolarFilmHeroImg from "/public/images/hero-imgs/Hero-solar-film-img-min.jpg";
import EnvironmentalImg from "/public/images/solar-films-imgs/Environmental-min.jpg";
import OurServiceCarousel from "../components/shared-compontents/our-services-carousel";
import SolarFilmsFAQs from "../components/FAQs/solar-film-faqs";
import ContactUs from "../components/shared-compontents/Contact-Us";
import Footer from "../components/shared-compontents/Footer";
import AnimatedCarousel from "./solar-films-benefits-animation";

const BenefitsCardData = [
  {
    id: "01",
    title: "Heat Reduction",
    description:
      "Significantly reduce heat gain, keeping spaces cooler and more comfortable during hot weather.",
    benefit: "Lower cooling costs and increased comfort",
    imageUrl: "/images/solar-films-imgs/heat-rejection-wide.jpg",
  },
  {
    id: "02",
    title: "Anti Glare",
    description:
      "Minimise glare from the sun, improving visibility and reducing eye strain.",
    benefit: "Enhanced comfort and productivity in living and working spaces",
    imageUrl: "/images/solar-films-imgs/anti-glare-wide.jpg",
  },
  {
    id: "03",
    title: "UV Protection",
    description:
      "Block up to 99% of harmful UV rays, protecting your skin and preventing fading of furnishings",
    benefit: "Prolonged lifespan of interiors and improved occupant health",
    imageUrl: "/images/solar-films-imgs/UV-wide.jpg",
  },
  {
    id: "04",
    title: "Privacy Enhancement",
    description:
      "Provides daytime privacy with reflective films while maintaining natural light.",
    imageUrl: "/images/solar-films-imgs/privacy-img-wide.jpg",
  },
];
const FactsStatsData = [
  {
    id: "01",
    number: "78",
    title: "Heat Reduction",
    description:
      "Solar films can reduce up to 78% of solar heat gain through windows, keeping interiors significantly cooler during hot weather.",
  },
  {
    id: "02",
    number: "99",
    title: "UV Protection",
    description:
      "Solar films block up to 99% of harmful UV rays, protecting your skin and reducing the fading of furnishings, carpets, and artwork.",
  },
  {
    id: "03",
    number: "30",
    title: "Energy Savings",
    description:
      "By reducing the need for air conditioning, solar films can lower cooling energy costs by up to 30%, making them a cost-effective solution for homes and businesses.",
  },
];
export default function SolarFilms() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <div className="pt-24 bg-grey">
        <div className="lg:w-10/12 mx-auto">
          <div className="grid grid-cols-2 gap-4 p-6">
            {BenefitsCardData.map((benefit, index) => (
              <div key={benefit.id} className="relative">
                <Image
                  src={benefit.imageUrl}
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
                <div className="absolute text-white font-semibold text-3xl bottom-0 p-6 text-center">
                  {benefit.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full bg-grey">
        <SolarFilmsData />
      </div>
      <div className="bg-grey w-full xxl:px-0 xxl:py-44 xl:py-36 lg:py-24 md:py-16 sm:py-12">
        <div className="xxl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto antialiased">
          <h3 className="text-center font-semibold lg:text-3xl lg:mb-4">
            FACTS AND STATISTICS ABOUT SOLAR FILMS
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {FactsStatsData.map((fact) => (
              <div className="bg-white rounded-lg p-8">
                <h4 className="lg:text-8xl lg:mt-16 text-secondary font-bold">
                  {fact.number}
                  <span className="text-4xl">%</span>
                </h4>
                <h5 className="mt-16 lg:text-2xl text-textGray font-semibold">
                  {fact.title}
                </h5>
                <p className="mt-2 lg:mb-16 text-textLightGray font-medium lg:text-sm">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="bg-grey w-full xxl:pb-60 sm:pb-28 section-spacing-top-btm antialiased">
          <div className="relative xxl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-10/12 sm:w-11/12 rounded-xl mx-auto lg:h-[60vh] md:h-[70vh] sm:h-[60vh] overflow-hidden">
            <Image
              src={EnvironmentalImg}
              fill
              alt="Solar Gard Solutions Ireland. Environmental impact of Solar films"
              sizes="100vw"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
              className="object-top"
            />
            <div className="absolute bottom-0 lg:pb-28 lg:pl-20  md:pl-8 sm:pl-4 sm:pb-14 text-white">
              <h4 className="lg:text-6xl md:text-5xl sm:text-4xl font-bold mb-2">
                Environmental Impact
              </h4>
              <p className="font-medium lg:text-3xl md:text-2xl sm:text-xl lg:w-[60%] md:w-[60%] sm:w-[90%]">
                By improving energy efficiency, Solar Films can contribute to a
                reduction in a building&apos;s carbon footprint by 10-15% over
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <OurServiceCarousel />
      </div>
      <div>
        <SolarFilmsFAQs />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
