import Image from "next/image";

import VehicleHeroImg from "/public/images/vehicle-wrap-imgs/vehicle-hero-img.jpg";

export default function VehicleWrappingPage() {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="relative">
          <Image
            src={VehicleHeroImg}
            alt="Solar Gard Vehicle Wrapping"
            sizes="100vw"
            placeholder="blur"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            className="h-[70vh] bg-bottom"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
            <h2 className="text-white text-center xxl:text-8xl xl:text-8xl lg:text-7xl md:text-3xl sm:text-5xl font-bold">
              Vehicle Wrapping
            </h2>
            {/* <h3 className="text-white text-center font-semibold xxl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-xl">
              Security - Shatter Resistance
            </h3> */}
          </div>
        </div>
      </div>
      <div className="bg-grey py-24 pb-40 antialiased">
        <div className="xxl:w-6/12 xl:w-6/12 lg:w-6/12 sm:w-10/12 mx-auto">
          <h1 className="xxl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-center font-bold text-secondary">
            Sorry this page is under construction
          </h1>
          <p className="mt-3 text-base font-medium">
            Our vehicle wrapping services offer high-quality, custom designs to
            enhance your car&apos;s appearance and protect its original paint.
            From branding to unique personal styles, we&apos;ve got you covered.
          </p>
          <p className="font-semibold text-base mt-4">
            For more information, please contact our office at:
          </p>
          <p className="font-bold text-2xl mt-2">021 454 5606</p>
          <p className="font-medium text-lg mt-2">
            <a
              href="mailto:info@solargardireland.com"
              className="hover:text-primary"
            >
              info@solargardireland.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
