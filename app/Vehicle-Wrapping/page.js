import Image from "next/image";

import VehicleWrappingFAQS from "../components/FAQs/vehicle-wrapping-faqs";
import VehicleWrappingFilms from "../components/film-collections/vehicle-wrap-film-collection";

import VehicleHeroImg from "/public/images/vehicle-wrap-imgs/vehicle-hero-img.jpg";
import HeroVehicleImg from "/public/images/vehicle-wrap-imgs/Hero-vehicle-wrap.png";
import PersonalWrapsImg from "/public/images/vehicle-wrap-imgs/personalcar.jpg";
import VanWrapsImg from "/public/images/vehicle-wrap-imgs/commerical.jpg";

import TrimImg from "/public/images/vehicle-wrap-imgs/trim.jpg";
import RoofImg from "/public/images/vehicle-wrap-imgs/roof.jpg";
import BonnetImg from "/public/images/vehicle-wrap-imgs/bonnet.jpg";
import HighlightsImg from "/public/images/vehicle-wrap-imgs/highlights.jpg";
import WingMirrorImg from "/public/images/vehicle-wrap-imgs/wing-mirrors.jpg";
import DeChromingImg from "/public/images/vehicle-wrap-imgs/de-chroming.jpg";

export default function VehicleWrappingPage() {
  return (
    <div>
      <div className="bg-grey antialiased">
        <div className="xxl:w-9/12 xl:w-9/12 lg:w-9/12 sm:w-10/12 py-40 mx-auto">
          <div className="flex flex-row gap-8 antialiased">
            <div className="basis-2/5">
              <h2 className="lg:text-5xl font-bold text-secondary">
                Transform & Protect Your Ride
              </h2>
              <p className="lg:text-base font-medium text-textLightGray mt-2">
                Whether you want a full-colour change, custom graphics, or
                branded fleet wraps, we offer high-quality, durable vinyl wraps
                that not only elevate your vehicle’s appearance but also provide
                paint protection from scratches and UV damage.
              </p>
            </div>
            <div className="basis-3/5">
              <Image
                src={HeroVehicleImg}
                alt="Vehicle Wrapping"
                placeholder="blur"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-grey">
        <div className="xxl:w-10/12 xl:w-10/12 lg:w-10/12 sm:w-10/12 py-40 mx-auto">
          <div className="grid grid-cols-2 gap-8 antialiased">
            <div className="bg-white lg:py-6 lg:px-6 rounded-2xl">
              <div>
                <Image
                  src={PersonalWrapsImg}
                  alt="Personal Car Wraps"
                  placeholder="blur"
                  sizes="100vw"
                  className="rounded-md object-cover"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div>
                <h4 className="lg:text-3xl font-semibold mt-8 text-secondary">
                  Personal Vehicle
                </h4>
                <p className="text-textLightGray font-medium mt-4 pb-16">
                  Choose from a wide range of colours, textures, and finishes,
                  including matte, gloss, satin, carbon fiber, and metallic.
                </p>
              </div>
            </div>
            <div className="bg-white lg:py-6 lg:px-6 rounded-2xl">
              <div>
                <Image
                  src={VanWrapsImg}
                  alt="Van Wraps"
                  placeholder="blur"
                  className="rounded-md"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div>
                <h4 className="lg:text-3xl font-semibold mt-8 text-secondary">
                  Branding & Advertising
                </h4>
                <p className="text-textLightGray font-medium mt-4 pb-16">
                  Turn your vehicle into a moving billboard with custom business
                  branding and graphics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey w-full">
        <div className="xxl:w-10/12 xl:w-10/12 lg:w-10/12 sm:w-10/12 py-40 mx-auto">
          <div className="grid grid-cols-2 gap-6 antialiased">
            <div className="w-[620px] bg-black rounded-md p-6">
              <h5 className="lg:text-5xl text-white font-semibold">
                Enhance, Protect & Personalise Your Ride
              </h5>
              <p className="text-lg text-white mt-6">
                Choose from a wide range of colours, textures, and finishes,
                including matte, gloss, satin, carbon fiber, and metallic
              </p>
            </div>
            <div>
              <div className="relative">
                <Image
                  src={TrimImg}
                  alt="Van Wraps"
                  placeholder="blur"
                  className="rounded-md"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <div className="absolute bottom-0 ml-9 mb-9 px-6 py-2 flex justify-center rounded-2xl bg-white text-secondary text-xl font-bold antialiased">
                  Trims
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <Image
                  src={RoofImg}
                  alt="Van Wraps"
                  placeholder="blur"
                  className="rounded-md"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <div className="absolute bottom-0 ml-9 mb-9 px-6 py-2 flex justify-center rounded-2xl bg-white text-secondary text-xl font-bold antialiased">
                  Roof
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <Image
                  src={BonnetImg}
                  alt="Van Wraps"
                  placeholder="blur"
                  className="rounded-md"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <div className="absolute bottom-0 ml-9 mb-9 px-6 py-2 flex justify-center rounded-2xl bg-white text-secondary text-xl font-bold antialiased">
                  Bonnet
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div>
              <div className="relative">
                <Image
                  src={HighlightsImg}
                  alt="Van Wraps"
                  placeholder="blur"
                  className="rounded-md"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <div className="absolute bottom-0 ml-9 mb-9 px-6 py-2 flex justify-center rounded-2xl bg-white text-secondary text-xl font-bold antialiased">
                  Head Lights
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <Image
                  src={WingMirrorImg}
                  alt="Van Wraps"
                  placeholder="blur"
                  className="rounded-md"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <div className="absolute bottom-0 ml-9 mb-9 px-6 py-2 flex justify-center rounded-2xl bg-white text-secondary text-xl font-bold antialiased">
                  Wing Mirrors
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <Image
                  src={DeChromingImg}
                  alt="Van Wraps"
                  placeholder="blur"
                  className="rounded-md"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <div className="absolute bottom-0 ml-9 mb-9 px-6 py-2 flex justify-center rounded-2xl bg-white text-secondary text-xl font-bold antialiased">
                  De-Chroming
                </div>
              </div>
            </div>
          </div>
          <div>
            <VehicleWrappingFilms />
          </div>
          <div>
            <VehicleWrappingFAQS />
          </div>
        </div>
      </div>
    </div>
  );
}
