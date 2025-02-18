"use client";
import { useEffect } from "react";
import Image from "next/image";
import CoverstylFilmComponent from "../components/film-collections/coverastyl-films-collection";
import CoverStylFAQs from "../components/FAQs/coverstyl-faqs";
import OurServiceCarousel from "../components/shared-compontents/our-services-carousel";
import ContactUs from "../components/shared-compontents/Contact-Us";
import Footer from "../components/shared-compontents/Footer";

import CostEffective from "/public/images/coverstyl/Cost-Effective.jpg";
import VersatileDurable from "/public/images/coverstyl/Versatile-Durable.jpg";
import Finishes from "/public/images/coverstyl/Finishes.jpg";
import KitchenImg from "/public/images/coverstyl/Coverstyl-kitchen.jpg";

import Furniture from "/public/images/coverstyl/Furniture.jpg";
import WallCoverings from "/public/images/coverstyl/Wall-Coverings.jpg";
import commercial from "/public/images/coverstyl/Commercial-Spaces.jpg";
import CoverstylOffice from "/public/images/coverstyl/Coverstyl-office.jpg";

const WhyCoverstyl = [
  {
    id: "01",
    title: "Cost-Effective Renovation",
    description:
      "Forget the high costs of traditional refurbishments! With CoverStyl', you can completely revamp your space at a fraction of the cost. Whether it’s furniture, walls, or doors, you’ll get a premium finish without the hefty price tag.",
    image: CostEffective,
  },
  {
    id: "02",
    title: "Versatile & Durable",
    description:
      "CoverStyl' is highly resistant to heat, humidity, and UV light, making it perfect for high-traffic areas and environments exposed to sunlight. Its versatility allows it to be applied to flat or curved surfaces, offering endless design possibilities.",
    image: VersatileDurable,
  },
  {
    id: "03",
    title: "Wide Range of Finishes",
    description:
      "With over 500 textures and designs, there’s something to suit every taste. Choose from elegant wood grains, modern metallics, luxurious leather, or sophisticated stone effects to enhance your space’s aesthetics.",
    image: Finishes,
  },
];

const applications = [
  {
    id: "01",
    title: "Furniture Wrapping",
    description:
      "Breathe new life into old furniture by wrapping it with CoverStyl'. Whether you’re looking to refresh kitchen cabinets, office desks, or hotel furnishings, CoverStyl' gives you a high-end look without the need for replacements.",
    image: Furniture,
  },
  {
    id: "02",
    title: "Wall Coverings",
    description:
      "Transform blank walls into statement pieces. From luxurious wood textures to industrial-style metals, CoverStyl' can change the ambiance of a room in a matter of hours.",
    image: WallCoverings,
  },
  {
    id: "03",
    title: "Retail & Commercial Spaces",
    description:
      "CoverStyl' is perfect for updating retail stores, hotels, and office spaces. Create a consistent brand look with customised finishes that match your business's aesthetic and enhance the customer experience.",
    image: commercial,
  },
];

export default function CoverstylePage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div className="bg-grey">
      <div className="flex flex-col w-full">
        <div className="relative">
          <Image
            src={CoverstylOffice}
            alt="Solar Gard CoverStyl'"
            sizes="100vw"
            placeholder="blur"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            className="h-[80vh]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
            <h2 className="text-white text-center xxl:text-8xl xl:text-8xl lg:text-7xl md:text-3xl sm:text-5xl font-bold">
              CoverStyl&rsquo;
            </h2>
            <h3 className="text-white text-center font-semibold xxl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-xl">
              Cost-Effective Renovation Solution
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-grey">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:py-12 mx-auto">
          <div>
            <h1 className="text-secondary font-medium xxl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg">
              Looking to refresh your space without the hassle of a full
              renovation? Solar Gard Ireland offers CoverStyl&rsquo;, an
              innovative self-adhesive vinyl film that transforms walls,
              furniture, and surfaces quickly and affordably. With over 500
              stunning finishes to choose from—ranging from wood and marble to
              metallic and fabric textures—CoverStyl&rsquo; brings new life to
              your interiors while being eco-friendly and cost-effective.
              Whether you&apos;re renovating a commercial space or updating your
              home&apos;s decor, CoverStyl&rsquo; is the perfect solution for a
              sleek, modern look.
            </h1>
          </div>
        </div>
      </div>
      <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto">
        <CoverstylFilmComponent />
      </div>
      <section className="bg-grey antialiased">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:py-40 mx-auto">
          <div className="flex flex-col w-full">
            <div className="relative">
              <Image
                src={KitchenImg}
                alt="Solar Gard Privacy Films"
                sizes="100vw"
                placeholder="blur"
                className="rounded-3xl h-[80vh] bg-bottom"
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
                <h2 className="text-white text-center lg:text-8xl md:text-3xl sm:text-5xl largeScreens:text-6xl font-bold">
                  CoverStyl&rsquo;
                </h2>
                <h3 className="text-white text-center font-semibold lg:text-4xl md:text-3xl sm:text-2xl">
                  Cost-Effective Renovation Solution
                </h3>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-16 md:gap-8 sm:gap-6 antialiased mt-8">
            <div>
              <h3 className="font-bold text-secondary xxl:text-xl lg:text-lg md:text-xl sm:text-base">
                CoverStyl&rsquo; is not only a budget-friendly solution but also
                a smart investment for businesses and homeowners looking to
                transform their space efficiently and economically.
              </h3>
              <p className="font-medium text-textLightGray xxl:text-base text-base sm:text-sm mt-4">
                Why spend a fortune on replacing furniture, walls, or surfaces
                when you can achieve a brand-new look with CoverStyl&rsquo; at a
                fraction of the cost? Traditional renovations often involve high
                labor fees, material costs, and long downtime. With
                CoverStyl&rsquo;, you can update your space quickly and
                affordably without sacrificing quality.
              </p>
            </div>
            <div>
              <div className="border-b-1 border-slate-600 pb-4">
                <h3 className="text-secondary font-bold lg:text-lg">
                  Up to 50-70% savings compared to traditional refurbishment
                  costs
                </h3>
              </div>
              <div className="border-b-1 border-slate-600 pb-4 mt-3">
                <h3 className="text-secondary font-bold lg:text-lg">
                  No need to replace—simply wrap and refresh existing surfaces
                </h3>
              </div>
              <div className="border-b-1 border-slate-600 pb-4 mt-3">
                <h3 className="text-secondary font-bold lg:text-lg">
                  Reduce downtime with fast, hassle-free installation
                </h3>
              </div>
              <div className="border-b-1 border-slate-600 pb-4 mt-3">
                <h3 className="text-secondary font-bold lg:text-lg">
                  Avoid costly material disposal and reduce waste
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:py-0 mx-auto">
        {WhyCoverstyl.map((reason) => (
          <div
            className="bg-white lg:rounded-xl md:rounded-3xl sm:rounded-3xl antialiased"
            key={reason.id}
          >
            <div className="flex lg:flex-row md:flex-row sm:flex-col mb-8 lg:p-16 md:p-8 sm:p-6 lg:gap-24 md:gap-8 sm:gap-6">
              <div className="basis-3/5 lg:pt-[22%] md:pt-[10%]">
                <h2 className="font-bold text-secondary xxl:text-5xl lg:text-4xl md:text-2xl sm:text-2xl antialiased">
                  {reason.title}
                </h2>
                <p className="font-medium text-textLightGray xxl:text-xl lg:text-base md:text-sm sm:text-sm lg:mt-4 md:mt-3 sm:mt-2 antialiased">
                  {reason.description}
                </p>
              </div>
              <div className="basis-2/5">
                <Image
                  src={reason.image}
                  className="rounded-2xl"
                  alt="Solar Gard CoverStyl'"
                  sizes="100vw"
                  placeholder="blur"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <section>
        <CoverStylFAQs />
      </section>
      <section>
        <OurServiceCarousel />
      </section>
      <section>
        <ContactUs />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}
