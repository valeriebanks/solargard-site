"use client";
import { useEffect } from "react";
import Image from "next/image";

import SafetyFilmsComponent from "../components/film-collections/safety-films-collection";
import ContactUs from "../components/shared-compontents/Contact-Us";
import OurServiceCarousel from "../components/shared-compontents/our-services-carousel";
import SafetyFAQs from "../components/FAQs/safety-flims-faqs";
import Footer from "../components/shared-compontents/Footer";

import SafetyHeroImg from "/public/images/safety-film-imgs/safety-hero-min.jpg";
import StoreFrontImg from "/public/images/safety-film-imgs/storefront-min.jpg";

const safetyBenefits = [
  {
    id: "01",
    title: "Break-In Prevention",
    description:
      "Reinforce windows to deter intruders and prevent easy access.",
  },
  {
    id: "02",
    title: "Glass Shatter Protection",
    description:
      "Hold broken glass fragments together, minimizing injury risks during accidents or impacts.",
  },
  {
    id: "03",
    title: "Scratch Resistance",
    description:
      "Safeguard your glass from daily wear and tear, keeping it clear and polished.",
  },
  {
    id: "04",
    title: "Graffiti Protection",
    description:
      "Easily remove unwanted marks, paint, or scratches without replacing the glass.",
  },
];

export default function SafetyFilmsPage() {
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
              src={SafetyHeroImg}
              alt="Solar Gard Safety Films"
              sizes="100vw"
              placeholder="blur"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              className="h-[65vh]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
              <h2 className="text-white text-center xxl:text-8xl xl:text-8xl lg:text-7xl md:text-3xl sm:text-5xl font-bold">
                Safety Films
              </h2>
              <h3 className="text-white text-center font-semibold xxl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-xl">
                Security - Shatter Resistance
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-grey">
          <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:py-12 mx-auto">
            <h1 className="text-secondary font-medium xxl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg">
              Ensure the safety and security of your home, office, or commercial
              space with Solar Gard Solutions, Ireland’s premium safety films.
              Our films are designed to strengthen glass and protect against
              breakage, providing an added layer of security and peace of mind.
              Ideal for residential, commercial, and industrial applications,
              our safety films offer robust protection without compromising
              aesthetics.
            </h1>
          </div>
        </div>
        <div>
          <SafetyFilmsComponent />
        </div>
        <div className="bg-grey">
          <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:py-12 mx-auto">
            <div className="flex flex-col w-full">
              <div className="relative">
                <Image
                  src={StoreFrontImg}
                  alt="Solar Gard Privacy Films"
                  sizes="100vw"
                  placeholder="blur"
                  className="rounded-lg h-[70vh] bg-bottom"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-white text-center xxl:text-8xl xl:text-8xl lg:text-7xl md:text-3xl sm:text-5xl font-bold">
                    Benefits of <br /> Safety Films
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold xxl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-base text-secondary xxl:mt-6 lg:mt-4 md:mt-2 sm:mt-3">
                Safety films are an innovative solution designed to strengthen
                glass surfaces, reduce the risk of breakage, and protect against
                accidental or intentional damage. Safety films act as a
                protective barrier that minimises hazards, ensuring safety and
                security.
              </h3>
              <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 md:gap-8 sm:gap-4 lg:mt-16 md:mt-8 sm:mt-6">
                  <div className="border-b-1 border-slate-400 pb-6">
                    <h6 className="font-bold text-secondary lg:text-xl">
                      Break-In Prevention
                    </h6>
                    <p className="font-medium text-textLightGray lg:text-base md:text-base sm:text-sm">
                      Reinforce windows to deter intruders and prevent easy
                      access.
                    </p>
                  </div>
                  <div className="border-b-1 border-slate-400 pb-6">
                    <h6 className="font-bold text-secondary lg:text-xl">
                      Glass Shatter Protection
                    </h6>
                    <p className="font-medium text-textLightGray lg:text-base md:text-base sm:text-sm">
                      Hold broken glass fragments together, minimising injury
                      risks during accidents or impacts.
                    </p>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 md:gap-8 sm:gap-4 mt-8">
                  <div className="border-b-1 border-slate-400 pb-6">
                    <h6 className="font-bold text-secondary lg:text-xl">
                      Scratch Resistance
                    </h6>
                    <p className="font-medium text-textLightGray lg:text-base md:text-base sm:text-sm">
                      Safeguard your glass from daily wear and tear, keeping it
                      clear and polished.
                    </p>
                  </div>
                  <div className="border-b-1 border-slate-400 pb-6">
                    <h6 className="font-bold text-secondary lg:text-xl">
                      Graffiti Protection
                    </h6>
                    <p className="font-medium text-textLightGray lg:text-base md:text-base sm:text-sm">
                      Easily remove unwanted marks, paint, or scratches without
                      replacing the glass.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SafetyFAQs />
        </div>
        <div>
          <OurServiceCarousel />
        </div>
        <div>
          <ContactUs />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
