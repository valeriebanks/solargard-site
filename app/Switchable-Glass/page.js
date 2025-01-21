import Image from "next/image";
import HeroImg from "/public/images/switchable-imgs/hero-switchable-glass-min.jpg";
import TextLogo from "/public/images/switchable-imgs/Solargard-logo.svg";
import SwitchableFAQs from "../components/FAQs/switchable-faqs";
import OurServiceCarousel from "../components/shared-compontents/our-services-carousel";
import ContactUs from "../components/shared-compontents/Contact-Us";
export default function SwitchableGlassPage() {
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
            className="h-[75vh] bg-bottom"
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
          <h1 className="text-secondary font-medium xxl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg">
            Switchable also known as smart glass or privacy glass, is an
            advanced glazing solution that allows you to control the
            transparency of your windows at the touch of a button. Whether you
            want an open and bright space or enhanced privacy, switchable glass
            provides the flexibility you need with cutting-edge technology and
            sleek aesthetics.
          </h1>
        </div>
      </div>
      <div className="bg-grey antialiased">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:py-12 mx-auto">
          <div className="grid lg:grid-cols-2 lg:gap-24">
            <div>
              <h4 className="font-semibold text-secondary lg:text-4xl">
                The Ultimate in Modern Privacy and Style
              </h4>
              <h5 className="font-bold text-secondary lg:text-xl lg:mt-6">
                What is Switchable Glass?
              </h5>
              <p className="font-medium lg:text-base text-textLightGray mt-1">
                Switchable glass uses state-of-the-art technology to transition
                between transparent and opaque states. Switchable glass uses
                liquid crystal technology. When powered on, the glass becomes
                transparent, and when powered off, it becomes frosted. This
                simple yet effective mechanism gives you complete control over
                your space&apos;s privacy and ambiance.
              </p>
            </div>
            <div className="bg-white h-[50vh]"></div>
          </div>
        </div>
      </div>
      <div className="bg-grey">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:w-11/12 mx-auto relative">
          <div className="w-full bg-grey">
            <Image
              src={TextLogo}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-x-24 gap-y-6 absolute lg:top-48">
            <div>
              <h5 className="font-semibold text-center text-lg text-secondary border-2 border-slate-800 w-52 py-1 px-2 rounded-2xl">
                Instant Privacy
              </h5>
              <p className="border-b border-gray-200 text-base text-textLightGray pb-3 mt-2">
                Switch from clear to frosted glass in seconds for on-demand
                privacy without the need for blinds or curtains.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-center text-lg text-secondary border-2 border-slate-800 w-52 py-1 px-3 rounded-2xl">
                Energy Efficiency
              </h5>
              <p className="border-b border-gray-200 text-base text-textLightGray pb-3 mt-2">
                Reduce heat and glare by controlling light transmission,
                contributing to energy savings and increased comfort.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-center text-lg text-secondary border-2 border-slate-800 w-56 py-1 px-3 rounded-2xl">
                Stylish and Modern
              </h5>
              <p className="border-b border-gray-200 text-base text-textLightGray pb-3 mt-2">
                Enhance the aesthetic appeal of your space with a sleek,
                contemporary solution that eliminates the need for bulky
                coverings.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-center text-lg text-secondary border-2 border-slate-800 w-52 py-1 px-3 rounded-2xl">
                Hygienic Solution
              </h5>
              <p className="border-b border-gray-200 text-base text-textLightGray pb-3 mt-2">
                Ideal for healthcare and cleanroom environments, as it minimises
                surfaces that collect dust and germs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:w-11/12 mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 antialiased">
            <div>
              <h4 className="font-semibold lg:text-3xl">
                Why Choose Us for Switchable Glass?
              </h4>
              <p className="font-medium text-secondary text-base mt-2">
                At Solar Gard, we are dedicated to providing premium switchable
                glass solutions that are tailored to your specific needs. Our
                expert team will guide you through the process, from
                consultation and design to professional installation and
                support.
              </p>
              <p className="font-medium text-textGray text-base mt-4">
                Discover how switchable glass can revolutionise your space with
                style, functionality, and privacy. Contact us today for a
                consultation or to request a quote. Let us help you bring your
                vision to life!
              </p>
            </div>
            <div className="antialiased">
              <p className="font-medium text-secondary text-base mt-10">
                <b className="text-secondary">Quality Materials:</b> We use only
                the best smart glass technology for durability and performance.
              </p>
              <p className="font-medium text-secondary text-base mt-4">
                <b className="text-secondary">Custom Designs:</b> Solutions
                tailored to fit your unique space and style.
              </p>
              <p className="font-medium text-secondary text-base mt-4">
                <b className="text-secondary">Experienced Installers: </b>
                Professional installation ensures seamless integration and
                optimal functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey">
        <SwitchableFAQs />
      </div>
      <div>
        <OurServiceCarousel />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}
