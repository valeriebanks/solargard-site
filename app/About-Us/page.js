import Image from "next/image";

import VelocityScroll from "./animate-velocity";
import BlendedHeroImg from "@/public/images/hero-imgs/Blended_Hero-img-B-min.jpg";
import HeroMdImg from "@/public/images/hero-imgs/Hero-homepge_md.jpg";
import HeroMobileImg from "@/public/images/hero-imgs/hero-mobile-B.jpg";

import AboutUsImg from "@/public/images/about-us-imgs/About-us.jpg";
import ServiceCardGrid from "../components/homepage/service-cards";
import ContactUs from "../components/shared-compontents/Contact-Us";
import Footer from "../components/shared-compontents/Footer";

export default function AboutUs() {
  return (
    <div>
      <div>
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
      </div>
      <div className="max-w-screen bg-grey flex flex-col items-center justify-center py-12">
        <VelocityScroll />
      </div>
      <div className="bg-grey antialiased">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 py-12 mx-auto">
          <h1 className="text-secondary font-medium xxl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg">
            At Solar Gard Ireland, we are passionate about transforming spaces
            with innovative and sustainable solutions. Specialising in advanced
            glass and surface treatments, we provide cutting-edge products
            designed to enhance functionality, comfort, and aesthetics. From
            solar films to privacy films, safety films, CoverStyl&apos;, vehicle
            tinting, wrapping, and manifestations & graphics, our wide range of
            services caters to residential, commercial, industrial, and
            automotive needs.
          </h1>
        </div>
      </div>
      <div className="bg-grey">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 py-12 mx-auto">
          <div className="relative">
            <Image
              src={AboutUsImg}
              alt="Solar Gard Solutions Ireland"
              style={{
                objectFit: "cover",
              }}
            />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
              <h1 className="text-white font-bold sm:text-5xl md:text-5xl lg:text-8xl xl:text-7xl xxl:text-8xl">
                Misson
              </h1>
            </div>
          </div>
          <div className="antialiased">
            <h5 className="text-xl lg:w-10/12 text-secondary font-semibold mt-8">
              Our mission is to deliver high-quality, innovative solutions that
              meet the diverse needs of our customers. Whether it&apos;s
              improving energy efficiency, ensuring privacy, or creating
              stunning designs, we are committed to enhancing your space and
              exceeding your expectations.
            </h5>
            <div className="grid lg:grid-rows-2 lg:grid-flow-col gap-x-16 gap-y-4 mt-6">
              <div>
                <h4 className="text-secondary font-semibold text-lg">
                  Expertise You Can Trust
                </h4>
                <p className="mt-1 font-medium text-base mb-4 min-h-14">
                  With 40 years of experience, we have built a reputation for
                  excellence in product quality and service.
                </p>
                <div className="border-b-2 border-gray-400 pb-1"></div>
              </div>
              <div>
                <h4 className="text-secondary font-semibold text-lg">
                  Customised Solutions
                </h4>
                <p className="mt-1 font-medium text-base mb-4 min-h-14">
                  We tailor our offerings to suit your unique requirements.
                </p>
                <div className="border-b-2 border-gray-400 pb-1"></div>
              </div>
              <div>
                <h4 className="text-secondary font-semibold text-lg">
                  Sustainability at Heart
                </h4>
                <p className="mt-1 font-medium text-base mb-4 min-h-14">
                  Our products and services focus on energy efficiency and
                  eco-friendliness.
                </p>
                <div className="border-b-2 border-gray-400 pb-1"></div>
              </div>
              <div>
                <div>
                  <h4 className="text-secondary font-semibold text-lg">
                    Customer-Centric Approach
                  </h4>
                  <p className="mt-1 font-medium text-base mb-4 min-h-14">
                    Your satisfaction is our priority, and we&apos;re here to
                    guide you every step of the way.
                  </p>
                  <div className="border-b-2 border-gray-400 pb-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 lg:py-48 mx-auto">
          <ServiceCardGrid />
        </div>
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
