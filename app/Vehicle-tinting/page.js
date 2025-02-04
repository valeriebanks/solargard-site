"use client";
import { useEffect } from "react";
import Image from "next/image";

import { Link } from "react-scroll";
import CarTintingFAQs from "../components/FAQs/car-tinting-faqs";
import OurServiceCarousel from "../components/shared-compontents/our-services-carousel";
import VehicleSevices from "../components/shared-compontents/vehicle-services";
import ContactUs from "../components/shared-compontents/Contact-Us";
import Footer from "../components/shared-compontents/Footer";

import HeroImg from "/public/images/car-tinting-imgs/Hero-car-tinting-img-min.jpg";
import CarTierOne from "/public/images/car-tinting-imgs/Car-imgs-pricing-A.png";
import CarTierTwo from "/public/images/car-tinting-imgs/Car-imgs-pricing-b.png";
import CarTierThree from "/public/images/car-tinting-imgs/Car-imgs-pricing-c.png";
import GlueDyed from "/public/images/car-tinting-imgs/Glue-Dyed-profile-img.jpg";
import HPMetallized from "/public/images/car-tinting-imgs/HP-Metallized-profile-img.jpg";
import NanoCeramic from "/public/images/car-tinting-imgs/Nano-Ceramic-profile-img.jpg";

import TintingFilmDataComponent from "../components/film-collections/tinting-films.collection";

const vehicletintingData = [
  {
    id: "01",
    title: "Professional Installation: Expertise You Can Trust",
    description:
      "Our skilled technicians have years of experience in installing vehicle tints, guaranteeing a flawless result every time",
    thumbnail: "/images/car-tinting-imgs/thumbnail_01.jpg",
  },
  {
    id: "02",
    title: "Long Lasting Performance: Quality That Endures",
    description:
      "With our high-quality tints, you can enjoy long-lasting performance and protection against harmful UV rays.",
    thumbnail: "/images/car-tinting-imgs/thumbnail_02.jpg",
  },
  {
    id: "03",
    title: "Enhance Your Vehicle’s Style: Aesthetics That Impress",
    description:
      "With our high-quality tints, you can enjoy long-lasting performance and protection against harmful UV rays.",
    thumbnail: "/images/car-tinting-imgs/thumbnail_03.jpg",
  },
];

const tintingPricingListData = [
  {
    id: "01",
    tierName: "Entry",
    filmType: "Glue Dyed",
    warranty: "2 years",
    image: CarTierOne,
    Hatchback: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 320,
      halfprice: 150,
    },
    SUV: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 340,
      halfprice: 170,
    },
    coupe: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 300,
      halfprice: 130,
    },
    MPV: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 330,
      halfprice: 170,
    },
  },
  {
    id: "02",
    tierName: "Standard",
    filmType: "Hp Metalised",
    warranty: "15 years",
    image: CarTierTwo,
    Hatchback: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 360,
      halfprice: 170,
    },
    SUV: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 380,
      halfprice: 190,
    },
    coupe: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 340,
      halfprice: 150,
    },
    MPV: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 340,
      halfprice: 150,
    },
  },
  {
    id: "03",
    tierName: "High",
    filmType: "Nano Ceramic",
    warranty: "Lifetime",
    image: CarTierThree,
    Hatchback: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 400,
      halfprice: 260,
    },
    SUV: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 490,
      halfprice: 270,
    },
    coupe: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 390,
      halfprice: 250,
    },
    MPV: {
      full: "Full Car",
      half: "Half Car",
      fullprice: 430,
      halfprice: 270,
    },
  },
];

const FilmSpecsData = [
  {
    id: "01",
    filmName: "Glue Dyed",
    profileImg: GlueDyed,
    filmProfile:
      "Provides an economical option for enhancing your car’s appearance and maintaining privacy. Ideal for drivers seeking basic UV protection and moderate glare reduction on a budget",
    HeatReduction: "Low",
    GlareReduction: "Moderate",
    UVProtection: "Up to 99%",
    Warranty: "2 years",
    Durability: "Prone to fading over time",
  },
  {
    id: "02",
    filmName: "HP Metallized",
    profileImg: HPMetallized,
    filmProfile:
      "Offers excellent heat rejection, glare reduction, and long-lasting durability. A perfect mid-tier choice for those who want enhanced comfort and a sleek.",
    HeatReduction: "High",
    GlareReduction: "Effective",
    UVProtection: "Up to 99%",
    Warranty: "15 years",
    Durability: "Long-lasting, minimal fading",
  },
  {
    id: "03",
    filmName: "Nano Ceramic",
    profileImg: NanoCeramic,
    filmProfile:
      "Delivers superior heat rejection, outstanding clarity, and unmatched durability. The premium choice for those who demand top-tier performance, maximum UV protection, and a lifetime of reliability.",
    HeatReduction: "Superior",
    GlareReduction: "Excellent",
    UVProtection: "Up to 99%",
    Warranty: "Lifetime",
    Durability: "Extremely durable, fade-resistant",
  },
];

export default function VehicleTinting() {
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
            src={HeroImg}
            alt="Solar Gard Solar Films"
            sizes="100vw"
            placeholder="blur"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            className="h-[70vh] object-top"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
            {/* <h2 className="text-white text-center xxl:text-8xl xl:text-8xl lg:text-7xl md:text-3xl sm:text-5xl font-bold">
              Vehicle Tinting
            </h2> */}
            {/* <h3 className="text-white text-center font-semibold xxl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-xl">
              Security - Shatter Resistance
            </h3> */}
          </div>
        </div>
      </div>
      <div className="bg-grey antialiased">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:py-12 mx-auto">
          <h1 className="text-secondary font-medium xxl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg">
            At Solar Gard Ireland, our expert vehicle tinting services combine
            style, comfort, and protection. Whether you&apos;re looking to
            reduce heat, protect your interior, or add a sleek look to your car,
            our high-quality tint films are designed to meet your needs. With a
            range of shades and styles, we offer customised solutions that
            enhance your driving experience.
          </h1>
        </div>
      </div>
      <div className="bg-grey w-full">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 sm:pt-32 mx-auto">
          <div>
            <div className="antialiased">
              <div className="lg:w-9/12 md:w-9/12 sm:w-11/12 mx-auto mb-6">
                <h3 className="text-center font-bold lg:text-4xl md:text-2xl sm:text-2xl">
                  Choose the Perfect Tinting Package for Your Vehicle
                </h3>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-12">
              {tintingPricingListData.map((tier) => (
                <div
                  key={tier.id}
                  className="bg-white rounded-lg p-8 antialiased"
                >
                  <div className="lg:w-7/12 mx-auto">
                    <Image
                      src={tier.image}
                      alt="Solar Gard Vehicle Tinting service"
                    />
                  </div>
                  <div>
                    <h2 className="lg:text-3xl md:text-2xl sm:text-4xl sm:mt-8 font-bold">
                      {tier.tierName}
                    </h2>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <h5 className="text-gray-600 font-semibold lg:text-2xl md:text-2xl sm:text-lg">
                        {tier.filmType}
                      </h5>
                    </div>
                    <div>
                      <button className="text-sm font-medium underline hover:no-underline hover:text-primary">
                        <Link
                          to="specsScrollTo"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                        >
                          View Specs
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center text-base font-medium text-secondary justify-between mt-1">
                    <div>Warranty</div>
                    <div className="font-semibold">{tier.warranty}</div>
                  </div>
                  <div className="mt-4 border-b-2 pb-4">
                    <h3 className="text-lg font-semibold mb-1">Hatchback</h3>
                    <div className="flex justify-between font-medium">
                      <div>{tier.Hatchback.full}</div>
                      <div>€{tier.Hatchback.fullprice}</div>
                    </div>
                    <div className="flex justify-between font-medium">
                      <div>{tier.Hatchback.half}</div>
                      <div>€{tier.Hatchback.halfprice}</div>
                    </div>
                  </div>
                  <div className="mt-4 border-b-2 pb-4">
                    <h3 className="text-lg font-semibold mb-1">MPV/Van</h3>
                    <div className="flex justify-between font-medium">
                      <div>{tier.MPV.full}</div>
                      <div>€{tier.MPV.fullprice}</div>
                    </div>
                    <div className="flex justify-between font-medium">
                      <div>{tier.MPV.half}</div>
                      <div>€{tier.MPV.halfprice}</div>
                    </div>
                  </div>
                  <div className="mt-4 border-b-2 pb-4">
                    <h3 className="text-lg font-semibold">Estate/SUV/Jeep</h3>
                    <div className="flex justify-between font-medium">
                      <div>{tier.SUV.full}</div>
                      <div>€{tier.SUV.fullprice}</div>
                    </div>
                    <div className="flex justify-between font-medium">
                      <div>{tier.SUV.half}</div>
                      <div>€{tier.SUV.halfprice}</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Coupe</h3>
                    <div className="flex justify-between font-medium">
                      <div>{tier.coupe.full}</div>
                      <div>€{tier.coupe.fullprice}</div>
                    </div>
                    <div className="flex justify-between font-medium">
                      <div>{tier.coupe.half}</div>
                      <div>€{tier.coupe.halfprice}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-8/12 md:w-7/12 sm:w-10/12 mx-auto mt-8">
              <h4 className="font-medium text-center text-secondary lg:text-2xl">
                Simply call us to book. Provide us with your vehicle&apos;s make
                and model, and let us know which package you&apos;re interested
                in.
              </h4>
              <div className="flex items-center  bg-black lg:w-72 md:w-64 sm:w-60 py-2 px-2 rounded-xl mx-auto mt-6 antialiased">
                <span className="rounded-full lg:w-11 lg:h-11 md:w-11 md:h-11 sm:w-9 sm:h-9 flex justify-center items-center bg-white">
                  <PhoneIcon />
                </span>
                <h6 className="text-white font-semibold lg:text-3xl md:text-2xl sm:text-xl pl-4 antialiased">
                  021 454 5606
                </h6>
              </div>
            </div>
          </div>
          <div>
            <VehicleSevices />
          </div>
          <div className="mt-48">
            <div className="lg:w-9/12" id="specsScrollTo">
              <h2 className="font-bold text-secondary lg:text-4xl md:text-4xl sm:text-2xl">
                Discover the Best Tinting Film for Your Vehicle
              </h2>
              <p className="font-medium text-textGray lg:text-xl md:text-lg sm:text-base mt-2">
                At Solar Gard Ireland, we offer a range of high-performance
                vehicle tinting films designed to suit various needs and
                preferences
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-12 mt-8 text-base antialiased">
              {FilmSpecsData.map((specsData) => (
                <div
                  className="bg-white rounded-lg lg:p-8 md:p-8 sm:p-4 sm:pb-12"
                  key={specsData.id}
                >
                  <div className="rounded-full h-64 w-64  bg-gray-300 mx-auto">
                    <Image
                      src={specsData.profileImg}
                      className="h-64 w-64 rounded-full"
                      alt="Solar Gard Vehicle Tinting Films"
                      style={{
                        width: "100%",
                        objectFit: "auto",
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-center mt-3 lg:text-3xl md:text-3xl sm:text-3xl">
                      {specsData.filmName}
                    </h2>
                  </div>
                  <div className="flex items-center justify-between text-secondary font-semibold mt-4">
                    <div>
                      <h6>Heat Reduction</h6>
                    </div>
                    <div>
                      <span className="font-medium lg:text-sm text-textGray">
                        {specsData.HeatReduction}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-secondary font-semibold mt-1">
                    <div>
                      <h6>Glare Reduction</h6>
                    </div>
                    <div>
                      <span className="font-medium lg:text-sm text-textGray">
                        {specsData.GlareReduction}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-secondary font-semibold mt-1">
                    <div>
                      <h6>Warranty</h6>
                    </div>
                    <div>
                      <span className="font-medium lg:text-sm text-textGray">
                        {specsData.Warranty}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-secondary font-semibold mt-1">
                    <div>
                      <h6>Durability</h6>
                    </div>
                    <div>
                      <span className="font-medium lg:text-sm md:text-sm sm:text-sm text-textGray">
                        {specsData.Durability}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-secondary mt-6">
                      {specsData.filmProfile}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-40">
            <div className="grid lg:grid-cols-3 gap-8 antialiase">
              {vehicletintingData.map((veheicleData) => (
                <div
                  className="bg-white p-4 lg:pb-24 md:pb-16 sm:pb-12 rounded-lg text-secondary"
                  key={veheicleData.id}
                >
                  <div className="flex relative w-full h-[390px]">
                    <Image
                      className="rounded-md"
                      src={veheicleData.thumbnail}
                      alt="Solar Gard Solar Vehicle Tinting Films"
                      sizes="100vw"
                      placeholder="blur"
                      blurDataURL="/path/to/placeholder.jpg" // Optional blur image
                      fill // Automatically fills the parent container
                      style={{
                        objectFit: "cover", // Ensures the image covers the container
                      }}
                    />
                  </div>
                  <h3 className="lg:text-2xl md:text-xl sm:text-2xl font-bold mt-8">
                    {veheicleData.title}
                  </h3>
                  <p className="mt-4 text-base">{veheicleData.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* <div>
            <TintingFilmDataComponent />
          </div> */}
          <div className="mt-40">
            <CarTintingFAQs />
          </div>
        </div>
      </div>
      <div className="w-full">
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

function PhoneIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0023 0C6.28121 0 0 5.83061 0 12.9978C0 16.739 1.73862 20.3015 4.77013 22.7722C5.01284 22.9683 5.3804 22.9455 5.59393 22.7224C5.8063 22.4971 5.78296 22.1559 5.54026 21.9577C2.76079 19.6928 1.16569 16.4271 1.16569 12.9978C1.16569 6.42959 6.92415 1.08315 14.0012 1.08315C21.077 1.08315 26.8366 6.42959 26.8366 12.9978C26.8366 19.5672 21.077 24.9125 14.0012 24.9125C12.2637 24.9125 11.1575 24.619 10.8063 24.0612C10.3594 23.3549 11.0572 22.0941 11.6091 21.1681L11.9253 21.298C12.245 21.4291 12.5823 21.4962 12.93 21.4962C13.916 21.4962 14.8098 20.9558 15.2089 20.1196L15.7211 19.0397C16.2765 17.8753 15.7048 16.5083 14.4504 15.9917L12.7071 15.2768C12.5228 15.202 12.3419 14.8294 12.3489 14.1676C12.3582 13.4019 12.6173 12.4303 13.0595 11.5009C14.0502 9.42018 15.3769 8.53633 15.8308 8.7183L17.5741 9.43209C18.8028 9.93359 20.3197 9.38335 20.8565 8.25254L21.3699 7.17264C21.6371 6.60831 21.6546 5.98009 21.4131 5.40385C21.1739 4.82869 20.7071 4.37377 20.098 4.12465L18.3571 3.40868C18.0035 3.26462 17.6208 3.19205 17.2159 3.19205C14.7106 3.19205 11.6044 6.03641 9.66511 10.1091C7.3734 14.9248 7.5986 19.5271 10.1785 20.5864L10.5356 20.7326C9.83197 21.9143 9.04201 23.4178 9.7958 24.6136C10.3851 25.5462 11.7596 26 13.9977 26C21.7188 26 28 20.1683 28 13.0022C28.0047 5.83061 21.7235 0 14.0023 0Z"
        fill="#282828"
      />
    </svg>
  );
}
