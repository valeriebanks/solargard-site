"use client";
import { useEffect } from "react";

import SolarFilmsData from "../components/film-collections/solar-films";
import Image from "next/image";
import SolarFilmHeroImg from "/public/images/hero-imgs/Hero-solar-film-img-min.jpg";
import EnvironmentalImg from "/public/images/solar-films-imgs/Environmental-min.jpg";
import OurServiceCarousel from "../components/shared-compontents/our-services-carousel";
import SolarFilmsFAQs from "../components/FAQs/solar-film-faqs";
import ContactUs from "../components/shared-compontents/Contact-Us";
import Footer from "../components/shared-compontents/Footer";

const BenefitsCardData = [
  {
    id: "01",
    title: "Heat Reduction",
    number: "1",
    description:
      "Solar films significantly reduce heat gain, keeping your space cooler and more comfortable during hot weather.",
    benefit: "Lower cooling costs and increased comfort",
    imageUrl: "/images/solar-films-imgs/heat-reduction.jpg",
  },
  {
    id: "02",
    title: "Anti Glare",
    number: "2",
    description:
      "Minimise glare from the sun, improving visibility and reducing eye strain.",
    benefit: "Enhanced comfort and productivity in living and working spaces",
    imageUrl: "/images/solar-films-imgs/anti-glare.jpg",
  },
  {
    id: "03",
    title: "UV Protection",
    number: "3",
    description:
      "Block up to 99% of harmful UV rays, protecting your skin and preventing fading of furnishings",
    benefit: "Prolonged lifespan of interiors and improved occupant health",
    imageUrl: "/images/solar-films-imgs/UV-protection.jpg",
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
      <div>
        <div className="flex flex-col w-full">
          <div className="relative">
            <Image
              src={SolarFilmHeroImg}
              alt="Solar Gard Solar Films"
              sizes="100vw"
              placeholder="blur"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              className="h-[70vh]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
              <h2 className="text-white text-center xxl:text-8xl xl:text-8xl lg:text-7xl md:text-3xl sm:text-5xl font-bold">
                Solar Films
              </h2>
              <h3 className="text-white text-center font-semibold xxl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-xl">
                Anti Glare - Heat Reduction - UV Protection
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey antialiased">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:py-12 mx-auto">
          <h1 className="text-secondary font-medium xxl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg">
            Discover the power of Solar Gard Solutions, Ireland&apos;s premium
            solar films, designed to enhance comfort, reduce energy costs, and
            protect your interiors. Our advanced solar films provide a range of
            benefits, including heat reduction, anti glare control, and enhanced
            privacy, making them the ideal solution for residential, commercial,
            and industrial applications.
          </h1>
        </div>
      </div>
      <div className="flex w-full bg-grey">
        <SolarFilmsData />
      </div>
      <div className="bg-grey lg:py-32 lg:px-24 md:py-32 md:px-16 sm:py-24 sm:px-0 antialiased">
        {/* <h2 className="text-secondary text-center font-bold lg:text-4xl md:text-4xl sm:text-xl uppercase lg:mb-8 md:mb-6 sm:mb-4">
          Key Benefits of Solar Films
        </h2> */}
        <div>
          <div className="xxl:w-8/12 xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 mx-auto antialiased">
            <div className="grid lg:grid-cols-3 gap-12 largeScreens:gap-20 text-secondary">
              {BenefitsCardData.map((benefit) => (
                <div key={benefit.id}>
                  <div className="relative" key={benefit.id}>
                    <Image
                      className="rounded-2xl lg:h-64 md:h-64 sm:h-52"
                      alt="Solar Gard ireland Solar Films benefits"
                      src={benefit.imageUrl}
                      placehoolder="blur"
                      quality={100}
                      width={592}
                      height={444}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                    <div
                      className="absolute inset-0 flex items-end justify-start p-8 text-white text-3xl font-bold rounded-bl-lg"
                      key={benefit.id}
                    >
                      {benefit.title}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium lg:text-lg md:text-base sm:text-base lg:mt-2 md:mt-3 sm:mt-4">
                      {benefit.description}
                    </p>
                    <h6 className="mt-3 font-bold text-xl antialiased">
                      Benefits
                    </h6>
                    <p className="text-base font-medium">{benefit.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey w-full xxl:px-0 xxl:py-44 xl:py-36 lg:py-24 md:py-16 sm:py-12">
        <div className="xxl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto">
          <div className="flex text-secondary lg:flex-row md:flex-col sm:flex-col lg:gap-16">
            <div className="basis-2/5">
              <h3 className="xxl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-3xl font-bold lg:uppercase">
                Facts and Statistics about Solar Films
              </h3>
              <h4 className="xxl:text-xl xl:text-xl lg:text-xl md:text-2xl sm:text-lg font-medium text-textLightGray lg:mt-4 md:mt-2 sm:mt-2 sm:mb-8">
                Solar films significantly reduce heat gain, lowering the need
                for air conditioning and cutting down on energy bills
              </h4>
            </div>
            <div className="basis-3/5">
              {FactsStatsData.map((factstats) => (
                <div key={factstats.id}>
                  <div className="bg-white rounded-lg mb-4 lg:p-8 md:p-6 sm:p-5">
                    <div className="flex flex-row sm:flex-col lg:gap-4 md:gap-4 sm:gap-2">
                      <div className="lg:basis-1/5">
                        <div className="flex items-end">
                          <h2 className="lg:text-7xl md:text-5xl sm:text-6xl font-extrabold">
                            {factstats.number}
                          </h2>
                          <span className="font-semibold text-3xl pb-1">%</span>
                        </div>
                      </div>
                      <div className="lg:basis-4/5">
                        <h3 className="text-xl text-secondary font-semibold">
                          {factstats.title}
                        </h3>
                        <p className="mt-1 font-medium  text-textGray text-base">
                          {factstats.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
