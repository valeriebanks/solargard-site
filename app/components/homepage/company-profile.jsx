import Image from "next/image";

import CompanyProfileImg from "/public/images/company-profile/company-profile.jpg";

export default function OurCompanyProfile() {
  return (
    <div className="bg-grey">
      <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 lg:py-24 mx-auto">
        <Image
          src={CompanyProfileImg}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div>
          <h3 className="text-secondary font-semibold mt-3 lg:text-2xl">
            Our mission is to deliver high-quality, innovative solutions that
            meet the diverse needs of our customers. Whether it’s improving
            energy efficiency, ensuring privacy, or creating stunning designs,
            we are committed to enhancing your space and exceeding your
            expectations.
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-x-24 gap-y-4 mt-6 antialiased">
          <div>
            <h6 className="border-b-2 border-gray-400 pb-1 font-semibold text-xl">
              Expertise You Can Trust
            </h6>
            <p className="mt-2 font-medium text-textGray text-base">
              With 40 years of experience, we have built a reputation for
              excellence in product quality and service.
            </p>
          </div>
          <div>
            <h6 className="border-b-2 border-gray-400 pb-1 font-semibold text-xl">
              Customised Solutions
            </h6>
            <p className="mt-2 font-medium text-textGray text-base">
              We tailor our offerings to suit your unique requirements.
            </p>
          </div>
          <div>
            <h6 className="border-b-2 border-gray-400 pb-1 font-semibold text-xl">
              Customer-Centric Approach
            </h6>
            <p className="mt-2 font-medium text-textGray text-base">
              Our satisfaction is our priority, and we’re here to guide you
              every step of the way.
            </p>
          </div>
          <div>
            <h6 className="border-b-2 border-gray-400 pb-1 font-semibold text-xl">
              Sustainability at Heart
            </h6>
            <p className="mt-2 font-medium text-textGray text-base">
              Our products and services focus on energy efficiency and
              eco-friendliness.
            </p>
          </div>
        </div>
        <div className="mt-8 font-medium text-textLightGray text-2xl">
          Ready to transform your space? Contact Solar Gard Ireland today to
          discover how we can help bring your vision to life. Whether you’re
          looking to reduce energy costs, enhance privacy, or create a stunning
          design, we’re here to make it happen
        </div>
      </div>
    </div>
  );
}
