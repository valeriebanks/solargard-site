"use client";
import { useEffect } from "react";
import Image from "next/image";

import PrivacyFilmsComponent from "../components/film-collections/privacy-films-collection";
import ContactUs from "../components/shared-compontents/Contact-Us";
import PrivacyFAQs from "../components/FAQs/privacy-faqs";
import Footer from "../components/shared-compontents/Footer";
import OurServiceCarousel from "../components/shared-compontents/our-services-carousel";

import PrivacyHeroImg from "/public/images/Privacy-Films-imgs/privacy-hero-img-min.jpg";
import FrostedImg from "/public/images/Privacy-Films-imgs/Frosted-qualities-img.jpg";
import SolarImg from "/public/images/Privacy-Films-imgs/solar-film-qualities-img.jpg";

const FilmQualitiesData = [
  {
    id: "01",
    filmType: "Solar Films",
    subtitle: "Understanding Privacy Qualities of Solar Films",
    effectiveness:
      "Provide daytime privacy by reflecting light, creating a mirror-like finish when viewed from the outside.",
    benefits:
      "Reduce heat and glare, block UV rays, and maintain outward visibility.",
    consideration:
      "Privacy is effective during daylight hours only and diminishes at night when interior lights are on.",
    image: SolarImg,
  },
  {
    id: "02",
    filmType: "Frosted Films",
    subtitle: "Understanding Privacy Qualities of Frosted Films",
    effectiveness:
      "Provide 24/7 privacy by obscuring visibility from both sides, regardless of lighting conditions.",
    benefits:
      "Allows natural light to pass through while adding a sleek, modern aesthetic.",
    consideration:
      "They do not offer outward visibility, making them more suited for spaces prioritizing privacy over views.",
    image: FrostedImg,
  },
];

const ComparisonData = [
  {
    id: "01",
    Type: "Solar Films",
    PrivacyHours: "Daytime only",
    Visibility: "Maintains outward visibility",
    LightTransmission: "Reflective but maintains brightness indoors",
    Aesthetic: "Modern, mirrored appearance",
    Benefits: "UV protection, heat & glare reduction",
  },
  {
    id: "02",
    Type: "Frosted Films",
    PrivacyHours: "24/7",
    Visibility: "Fully obscures both sides",
    LightTransmission: "Allows light to pass through softly",
    Aesthetic: "Elegant frosted or etched-glass look",
    Benefits: "Decorative and permanent privacy",
  },
];

import ResidentialIcon from "./icons/Residential-icon";
import CommercialIcon from "./icons/Commercial-icon";
import IndustrailIcon from "./icons/Industrial-icon";

const PrivacyUses = [
  {
    id: "01",
    title: "Residential",
    description:
      "Enhance privacy in bedrooms, bathrooms, and living areas without sacrificing natural light.",
    icon: ResidentialIcon,
  },
  {
    id: "02",
    title: "Commercial",
    description:
      "Create private workspaces, meeting rooms, and secure areas while maintaining a professional look.",
    icon: CommercialIcon,
  },
  {
    id: "03",
    title: "Industrial",
    description:
      "Protect sensitive information and secure private areas in industrial settings",
    icon: IndustrailIcon,
  },
];

export default function PrivacyFilmsPage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="relative">
          <Image
            src={PrivacyHeroImg}
            alt="Solar Gard Privacy Films"
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
              Privacy Films
            </h2>
            <h3 className="text-white text-center font-semibold xxl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-xl">
              Solar Films - Frosted Films
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-grey">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:py-12 mx-auto">
          <h1 className="text-secondary font-medium xxl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg">
            At Solar Gard Solutions, Ireland. our privacy films offer an elegant
            and effective solution for maintaining privacy while still allowing
            natural light to fill your space. Perfect for both residential and
            commercial settings, our privacy films are designed to enhance
            security, improve comfort, and add a stylish touch to any window or
            glass surface.
          </h1>
        </div>
      </div>
      <div className="bg-grey">
        <PrivacyFilmsComponent />
      </div>
      <div className="bg-grey lg:py-40 antialiased">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-flow-row gap-12">
            {FilmQualitiesData.map((qualities) => (
              <div className="bg-white rounded-lg p-4 pb-16" key={qualities.id}>
                <div>
                  <Image
                    src={qualities.image}
                    alt="Solar Gard Privacy Films"
                    className="rounded-md"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <div className="lg:pl-6 lg:pr-6">
                    <h3 className="lg:text-3xl md:text-2xl sm:text-3xl font-bold text-secondary mt-6">
                      {qualities.filmType}
                    </h3>
                    <h4 className="text-base text-textGray font-medium">
                      {qualities.subtitle}
                    </h4>
                    <div className="border-b-2 border-gray-300 pb-4">
                      <h5 className="lg:text-xl font-semibold text-secondary mt-4">
                        Effectiveness
                      </h5>
                      <p className="lg:text-base md:text-base sm:text-sm font-medium text-textLightGray pt-0.5">
                        {qualities.effectiveness}
                      </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4">
                      <h5 className="lg:text-xl font-semibold text-secondary mt-4">
                        Benefits
                      </h5>
                      <p className="lg:text-base md:text-base sm:text-sm font-medium text-textLightGray pt-0.5">
                        {qualities.benefits}
                      </p>
                    </div>
                    <div className="border-b-2 border-gray-300 pb-4">
                      <h5 className="lg:text-xl font-semibold text-secondary mt-4">
                        Consideration
                      </h5>
                      <p className="lg:text-base md:text-base sm:text-sm font-medium text-textLightGray pt-0.5">
                        {qualities.consideration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-grey">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-11/12 md:w-11/12 sm:w-11/12 mx-auto lg:py-40">
          <div className="flex lg:flex-row sm:flex-col gap-16">
            <div className="basis-4/12">
              <h3 className="lg:text-4xl md:text-3xl sm:text-3xl font-bold mt-[20%]">
                Solar Films Vs Frosted Films
              </h3>
              <h5 className="font-medium text-textGray text-base mt-[5%]">
                We’re dedicated to providing high-quality privacy solutions
                tailored to your needs. Whether you want a sleek, modern look
                with solar films or timeless elegance with frosted films, we’ve
                got you covered.
              </h5>
            </div>
            <div className="basis-8/12">
              <div className="grid lg:grid-cols-2 sm:flex-col gap-6">
                {ComparisonData.map((comparison) => (
                  <div
                    className="bg-white rounded-lg p-8 antialiased"
                    key={comparison.id}
                  >
                    <h3 className="lg:text-3xl md:text-4xl sm:text-3xl font-bold text-secondary">
                      {comparison.Type}
                    </h3>
                    <div className="border-b-1 border-gray-300 pb-3 mt-4">
                      <span className="text-sm text-secondary font-semibold">
                        Privacy Hours
                      </span>
                      <h4 className="text-textLightGray font-medium text-base">
                        {comparison.PrivacyHours}
                      </h4>
                    </div>
                    <div className="border-b-1 border-gray-300 pb-3 mt-4">
                      <span className="text-sm text-secondary font-semibold">
                        Visibility
                      </span>
                      <h4 className="text-textLightGray font-medium text-base">
                        {comparison.Visibility}
                      </h4>
                    </div>
                    <div className="border-b-1 border-gray-300 pb-3 mt-4">
                      <span className="text-sm text-secondary font-semibold">
                        Light Transmission
                      </span>
                      <h4 className="text-textLightGray font-medium text-base">
                        {comparison.LightTransmission}
                      </h4>
                    </div>
                    <div className="border-b-1 border-gray-300 pb-3 mt-4">
                      <span className="text-sm text-secondary font-semibold">
                        Aesthetics
                      </span>
                      <h4 className="text-textLightGray font-medium text-base">
                        {comparison.Aesthetic}
                      </h4>
                    </div>
                    <div className="border-b-1 border-gray-300 pb-3 mt-4">
                      <span className="text-sm text-secondary font-semibold">
                        Aesthetics
                      </span>
                      <h4 className="text-textLightGray font-medium text-base">
                        {comparison.Aesthetic}
                      </h4>
                    </div>
                    <div className="border-b-1 border-gray-300 pb-3 mt-4">
                      <span className="text-sm text-secondary font-semibold">
                        Benefits
                      </span>
                      <h4 className="text-textLightGray font-medium text-base">
                        {comparison.Benefits}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey py-40">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-11/12 md:w-11/12 sm:w-11/12 mx-auto">
          <div className="flex lg:flex-row md:flex-col sm:flex-col lg:gap-24 md:gap-14 sm:gap-8">
            <div className="basis-1/2">
              <h3 className="font-bold text-secondary lg:text-5xl md:text-4xl sm:text-4xl">
                Versatile Use for Any Space
              </h3>
              <h5 className="font-normal text-textLightGray lg:text-base md:text-base sm:text-base mt-6">
                At Solar Gard Ireland, we offer a range of privacy films
                designed to meet diverse needs for residential, commercial, and
                industrial applications. Our films combine functionality and
                aesthetics, providing tailored solutions that protect your
                privacy while enhancing your space.
              </h5>
              <h6 className="font-medium text-textLightGray lg:text-xl md:text-lg sm:text-base mt-6">
                Contact us today to learn more about our privacy film options
                and find the perfect solution for your home or business!
              </h6>
            </div>
            <div className="basis-1/2 antialiased">
              {PrivacyUses.map((use) => (
                <div
                  className="bg-white lg:p-8 md:p-6 sm:p-4 mb-6 rounded-lg"
                  key={use.id}
                >
                  <div className="flex items-center lg:gap-6 md:gap-4 sm:gap-4">
                    <div className="w-9">{use.icon && <use.icon />}</div>
                    <div className="pl-6">
                      <h5 className="font-semibold text-secondary lg:text-2xl md:text-xl sm:text-lg">
                        {use.title}
                      </h5>
                      <p className="font-medium text-textLightGray lg:text-sm md:text-sm sm:text-xs">
                        {use.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <PrivacyFAQs />
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
  );
}
