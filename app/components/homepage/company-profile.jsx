import Image from "next/image";

import CompanyProfileImg from "/public/images/company-profile/company-profile.jpg";

export default function OurCompanyProfile() {
  return (
    <div className="bg-grey">
      <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 lg:py-24 md:py-24 sm:py-32 mx-auto">
        <Image
          className="rounded-lg"
          alt="Solar Gard Ireland"
          src={CompanyProfileImg}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div>
          <h1 className="text-secondary font-medium xxl:text-xl xl:text-xl lg:text-lg md:text-xl sm:text-base mt-3 mb-12 antialiased">
            Solar Gard Solutions, Ireland Providing Innovative Glass Film
            Solutions for Industrial, Commercial, and Domestic Applications,
            Solar Gard Solutions is a leading provider of glass window films and
            surfaces solutions, offering a wide range of products including
            <b> solar films</b>, <b>privacy films</b>, <b>anti-heat</b>,
            <b> anti-glare</b>, <b>UV films</b>, reflective films,
            <b> safety films</b>, <b>frosted films</b>, <b>vehicle tinting</b>,
            and <b>manifestations & graphics</b>. We also specialise in
            <b> vehicle wrapping</b> with custom graphics, and
            <b> CoverStyl&apos;</b>, a self-adhesive vinyl that offers solution
            to enhance walls, furniture, and other surfaces.
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-24 gap-y-4 mt-6 antialiased">
          <div>
            <h6 className="border-b-2 border-gray-400 pb-1 font-semibold lg:text-lg md:text-lg sm:text-lg">
              Expertise You Can Trust
            </h6>
            <p className="mt-2 font-medium text-textGray lg:text-base md:text-base sm:text-sm">
              With 40 years of experience, we have built a reputation for
              excellence in product quality and service.
            </p>
          </div>
          <div>
            <h6 className="border-b-2 border-gray-400 pb-1 font-semibold text-lg">
              Customised Solutions
            </h6>
            <p className="mt-2 font-medium text-textGray lg:text-base md:text-base sm:text-sm">
              We tailor our offerings to suit your unique requirements.
            </p>
          </div>
          <div>
            <h6 className="border-b-2 border-gray-400 pb-1 font-semibold lg:text-lg md:text-lg sm:text-lg">
              Customer-Centric Approach
            </h6>
            <p className="mt-2 font-medium text-textGray lg:text-base md:text-base sm:text-sm">
              Our satisfaction is our priority, and we’re here to guide you
              every step of the way.
            </p>
          </div>
          <div>
            <h6 className="border-b-2 border-gray-400 pb-1 font-semibold lg:text-lg md:text-lg sm:text-lg">
              Sustainability at Heart
            </h6>
            <p className="mt-2 font-medium text-textGray text-base">
              Our products and services focus on energy efficiency and
              eco-friendliness.
            </p>
          </div>
        </div>
        <div className="font-medium text-textGray lg:text-xl md:text-2xl sm:text-sm mt-8">
          Ready to transform your space? Contact Solar Gard Ireland today to
          discover how we can help bring your vision to life. Whether you’re
          looking to reduce energy costs, enhance privacy, or create a stunning
          design, we’re here to make it happen
        </div>
      </div>
    </div>
  );
}
