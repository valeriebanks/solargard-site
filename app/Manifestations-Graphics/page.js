"use client";
import { useEffect } from "react";
import Image from "next/image";

import ManifGraphicsData from "../components/film-collections/manifestion-graphics-collection";
import OurServiceCarousel from "../components/shared-compontents/our-services-carousel";
import GraphicsManifestationsFAQs from "../components/FAQs/manifestations-graphics-faq";
import ContactUs from "../components/shared-compontents/Contact-Us";
import Footer from "../components/shared-compontents/Footer";

import HeroImgTwo from "/public/images/manif-graphics-imgs/manif-graphics-hero-img-B.png";
import KeyPointOne from "/public/images/manif-graphics-imgs/manifKeyPoint_01.jpg";
import KeyPointTwo from "/public/images/manif-graphics-imgs/manifKeyPoint_02.jpg";
import KeyPointThree from "/public/images/manif-graphics-imgs/manifKeyPoint_03.jpg";
import WhyChooseUs from "/public/images/manif-graphics-imgs/why-choose-us.jpg";

const KeyPoints = [
  {
    id: "01",
    title: "Enhancing Safety",
    description:
      "Ensure compliance with safety regulations by adding manifestations to large glass partitions, making them more visible and preventing accidental collisions.",
    image: KeyPointOne,
  },
  {
    id: "02",
    title: "Decorative Designs",
    description:
      "Add style to your space with custom patterns, frosted films, or artistic designs that transform plain glass into a work of art.",
    image: KeyPointTwo,
  },
  {
    id: "03",
    title: "Branding & Advertising",
    description:
      "Display your company logo, tagline, or promotional messages in a sleek, professional manner on windows, doors, or partitions.",
    image: KeyPointThree,
  },
];

export default function ManifestationGraphicsPage() {
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
            src={HeroImgTwo}
            className="h-[70vh]"
            alt="Solar Gard Solar Films"
            sizes="100vw"
            placeholder="blur"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
            <h2 className="text-white text-center xxl:text-8xl xl:text-8xl lg:text-7xl md:text-3xl sm:text-5xl font-bold">
              Manifestations & Graphics
            </h2>
            {/* <h3 className="text-white text-center font-semibold xxl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-xl">
              Security - Shatter Resistance
            </h3> */}
          </div>
        </div>
      </div>
      <div className="bg-grey antialiased">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:py-12 mx-auto">
          <h1 className="text-secondary font-medium xxl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg">
            At Solar Gard Ireland, we specialise in creating custom glass
            manifestations and graphics that not only enhance the visual appeal
            of your space but also serve functional purposes like safety,
            branding, and privacy. Whether you need decorative glass patterns
            for an office, branding for your storefront, or safety markings for
            glass partitions, our expert team can design and install
            high-quality solutions tailored to your needs.
          </h1>
        </div>
      </div>
      <div>
        <ManifGraphicsData />
      </div>
      <div className="w-full bg-grey lg:py-40">
        <div className="xxl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-9/12 sm:w-11/12 mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 sm:pt-40 antialiased">
            {KeyPoints.map((point) => (
              <div className="bg-white rounded-md p-4 pb-16" key={point.id}>
                <div className="flex items-center">
                  <Image
                    className="rounded-sm bg-center bg-cover mx-auto"
                    alt={point.title}
                    quality={100}
                    layout="responsive"
                    src={point.image}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-secondary lg:text-2xl md:text-xl sm:text-xl mt-5">
                    {point.title}
                  </h5>
                  <p className="lg:text-sm font-medium text-textLightGray mt-2">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-grey lg:py-40 antialiased">
        <div className="xxl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-9/12 sm:w-11/12 mx-auto">
          <div className="flex lg:flex-row md:flex-cols sm:flex-col xxl:gap-24 lg:gap-16 sm:pt-24">
            <div className="basis-3/4">
              <Image
                src={WhyChooseUs}
                quality={100}
                alt="Solar Gard Ireland, Tints, Wraps, Prints"
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-bold text-secondary xxl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl lg:w-[75%] sm:mt-4">
                Choose Solar Gard Solutions, Ireland for Your Manifestations &
                Graphics
              </h3>
              <div className="basis-1/4">
                <div className="flex items-start space-x-3 mt-8">
                  <span className="text-gray-500 text-xl">
                    <CustomDesignsIcon />
                  </span>
                  <div>
                    <h5 className="xxl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-xl font-bold">
                      Custom Designs
                    </h5>
                    <p className="text-gray-600 font-medium text-base sm:text-sm lg:w-[80%]">
                      Enhance privacy in bedrooms, bathrooms, and living areas
                      without sacrificing natural light.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 mt-8">
                  <span className="text-gray-500 text-xl">
                    <MaterialsIcon />
                  </span>
                  <div>
                    <h5 className="xxl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-xl font-bold">
                      High-Quality Materials
                    </h5>
                    <p className="text-gray-600 font-medium text-base sm:text-sm lg:w-[80%]">
                      We use durable, high-quality materials that ensure your
                      graphics look great and last for years, even in
                      high-traffic areas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 mt-8">
                  <span className="text-gray-500 text-xl">
                    <ExpertIcon />
                  </span>
                  <div>
                    <h5 className="xxl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-xl font-bold">
                      Expert Installation
                    </h5>
                    <p className="text-gray-600 font-medium text-base sm:text-sm lg:w-[80%]">
                      With years of experience, our team provides professional
                      installation, ensuring your manifestations and graphics
                      are applied flawlessly and with precision.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-secondary font-bold lg:text-xl lg:mt-12 md:mt-6 sm:mt-4">
                    Ready to elevate your space with custom glass manifestations
                    and graphics? Contact us today to discuss your project, and
                    let’s bring your vision to life.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <OurServiceCarousel />
      </div>
      <section>
        <GraphicsManifestationsFAQs />
      </section>
      <div>
        <ContactUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

function CustomDesignsIcon() {
  return (
    <svg
      width="46"
      height="45"
      viewBox="0 0 46 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.9257 17.3298L41.5184 19.2658C41.2777 19.4027 40.9683 19.3216 40.8292 19.0849L38.8613 15.7316C38.7221 15.4948 38.8045 15.1905 39.0452 15.0536L40.1698 14.4143C37.6447 11.1944 34.1645 9.00224 30.3612 8.00632C26.5292 7.00217 22.3682 7.21017 18.5243 8.79836C18.6294 9.20025 18.624 9.61625 18.5183 10.0046C18.3589 10.5928 17.9688 11.1216 17.374 11.4594C16.7857 11.7808 16.1401 11.8425 15.556 11.688C15.16 11.584 14.7909 11.3807 14.4893 11.0899C11.1704 13.5694 8.90618 17.0102 7.87473 20.7765C6.84985 24.5175 7.03798 28.5799 8.60994 32.3397L9.73456 31.7011C9.97526 31.5642 10.2846 31.6452 10.4238 31.882L12.3923 35.2358C12.5303 35.4744 12.4473 35.7782 12.2066 35.9139L8.79748 37.8499C8.55679 37.9856 8.24801 37.904 8.11004 37.6672L6.14211 34.3151C6.00295 34.0783 6.08537 33.774 6.32606 33.6371L7.73019 32.8398C6.02325 28.8367 5.80764 24.5034 6.89882 20.5203C7.66629 17.7188 9.08117 15.0877 11.0778 12.8614L0.776411 18.7123C0.535719 18.8492 0.226343 18.7682 0.0871841 18.5314C-0.0519752 18.2946 0.0304452 17.9902 0.271137 17.8533L13.8813 10.1227C13.7338 9.67736 13.7266 9.20848 13.8448 8.77427C14.0043 8.18612 14.3943 7.65731 14.9868 7.32122C15.5727 6.99865 16.2207 6.93578 16.8072 7.09089C17.2486 7.20723 17.6595 7.44813 17.9778 7.79656L31.5862 0.0665558C31.8268 -0.0703469 32.1362 0.010737 32.2754 0.247526C32.4145 0.484314 32.3321 0.788673 32.0914 0.925576L21.793 6.77537C24.7488 6.18898 27.7697 6.30003 30.618 7.04624C34.6733 8.10797 38.3811 10.4588 41.052 13.9137L42.4537 13.117C42.6944 12.9801 43.0038 13.0611 43.1429 13.2979L45.1115 16.6518C45.2494 16.8903 45.1664 17.1941 44.9257 17.3298ZM25.0851 25.7461L25.0021 25.7925C24.6425 26.0105 24.3994 26.3524 24.2967 26.7291C24.1898 27.121 24.2346 27.5534 24.4562 27.9312C24.6772 28.3096 25.0355 28.564 25.4333 28.6686C25.8227 28.7703 26.2509 28.7315 26.6409 28.5194C27.0387 28.2932 27.2985 27.94 27.4042 27.5493C27.5069 27.1703 27.4681 26.7538 27.2668 26.3865L27.2191 26.3054C26.9975 25.9517 26.6511 25.712 26.2676 25.6115C25.8824 25.5099 25.459 25.5481 25.0851 25.7461ZM26.0293 39.5586L36.6932 33.5014L36.9536 26.0792L18.6778 13.785L24.9991 24.5557C25.5163 24.3894 26.061 24.3823 26.5645 24.5157C27.2465 24.6949 27.8599 25.1321 28.2463 25.7913C28.6232 26.4459 28.699 27.1792 28.5181 27.8419C28.3401 28.4965 27.9119 29.0882 27.277 29.4654L27.1749 29.5224C26.5286 29.8714 25.7982 29.9389 25.1364 29.7644C24.4765 29.5905 23.878 29.1733 23.4946 28.5535L23.4343 28.4553C23.0741 27.8149 23.0043 27.0916 23.1828 26.4365C23.3178 25.9412 23.5973 25.4799 24.0017 25.1221L17.681 14.352L19.3658 36.0696L26.0293 39.5586ZM37.1788 34.5343L26.6947 40.4893L27.7148 45L40.6393 37.659L37.1788 34.5343Z"
        fill="#434343"
      />
    </svg>
  );
}
function MaterialsIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 41.9994H39.2C40.74 41.9994 42 40.7394 42 39.1994V4.19941C42 2.65941 40.74 1.39941 39.2 1.39941H35.7V5.31941C35.28 5.03941 34.79 4.89941 34.3 4.89941H30.8V7.69941H28.7V9.09941H30.8V30.7994H34.3C35.07 30.7994 35.7 31.4294 35.7 32.1994C35.7 32.9694 35.07 33.5994 34.3 33.5994H1.4V9.09941H7V7.69941H0V34.9994H3.5V41.9994ZM20.72 40.5994H17.08L22.68 34.9994H26.32L20.72 40.5994ZM28.28 34.9994H31.92L26.32 40.5994H22.68L28.28 34.9994ZM15.12 40.5994H11.48L17.08 34.9994H20.72L15.12 40.5994ZM9.52 40.5994H5.88L11.48 34.9994H15.12L9.52 40.5994ZM4.9 39.6194V34.9994H9.52L4.9 39.6194ZM39.2 40.5994H33.88L36.68 37.7994H39.2C39.97 37.7994 40.6 38.4294 40.6 39.1994C40.6 39.9694 39.97 40.5994 39.2 40.5994ZM37.1 2.79941H39.2C39.97 2.79941 40.6 3.42941 40.6 4.19941V36.7494C40.18 36.4694 39.69 36.3994 39.2 36.3994H37.1V2.79941ZM34.3 29.3994H32.2V6.29941H34.3C35.07 6.29941 35.7 6.92941 35.7 7.69941V29.8194C35.28 29.5394 34.79 29.3994 34.3 29.3994ZM35.7 34.5794V36.7494L31.92 40.5994H28.28L33.88 34.9994H34.3C34.79 34.9994 35.28 34.8594 35.7 34.5794Z"
        fill="#434343"
      />
      <path
        d="M15.4039 16.7998H14.0039V18.1998H15.4039V16.7998Z"
        fill="#434343"
      />
      <path
        d="M15.4039 19.6006H14.0039V21.0006H15.4039V19.6006Z"
        fill="#434343"
      />
      <path
        d="M15.4039 22.3994H14.0039V23.7994H15.4039V22.3994Z"
        fill="#434343"
      />
      <path
        d="M15.4039 25.2002H14.0039V26.6002H15.4039V25.2002Z"
        fill="#434343"
      />
      <path d="M15.4039 27.999H14.0039V29.399H15.4039V27.999Z" fill="#434343" />
      <path
        d="M15.4039 30.7998H14.0039V32.1998H15.4039V30.7998Z"
        fill="#434343"
      />
      <path
        d="M18.2008 16.7998H16.8008V18.1998H18.2008V16.7998Z"
        fill="#434343"
      />
      <path
        d="M18.2008 19.6006H16.8008V21.0006H18.2008V19.6006Z"
        fill="#434343"
      />
      <path
        d="M18.2008 22.3994H16.8008V23.7994H18.2008V22.3994Z"
        fill="#434343"
      />
      <path
        d="M18.2008 25.2002H16.8008V26.6002H18.2008V25.2002Z"
        fill="#434343"
      />
      <path d="M18.2008 27.999H16.8008V29.399H18.2008V27.999Z" fill="#434343" />
      <path
        d="M18.2008 30.7998H16.8008V32.1998H18.2008V30.7998Z"
        fill="#434343"
      />
      <path
        d="M21.0016 16.7998H19.6016V18.1998H21.0016V16.7998Z"
        fill="#434343"
      />
      <path
        d="M21.0016 19.6006H19.6016V21.0006H21.0016V19.6006Z"
        fill="#434343"
      />
      <path
        d="M21.0016 22.3994H19.6016V23.7994H21.0016V22.3994Z"
        fill="#434343"
      />
      <path
        d="M21.0016 25.2002H19.6016V26.6002H21.0016V25.2002Z"
        fill="#434343"
      />
      <path d="M21.0016 27.999H19.6016V29.399H21.0016V27.999Z" fill="#434343" />
      <path
        d="M21.0016 30.7998H19.6016V32.1998H21.0016V30.7998Z"
        fill="#434343"
      />
      <path
        d="M23.7984 19.6006H22.3984V21.0006H23.7984V19.6006Z"
        fill="#434343"
      />
      <path
        d="M23.7984 22.3994H22.3984V23.7994H23.7984V22.3994Z"
        fill="#434343"
      />
      <path
        d="M23.7984 25.2002H22.3984V26.6002H23.7984V25.2002Z"
        fill="#434343"
      />
      <path d="M23.7984 27.999H22.3984V29.399H23.7984V27.999Z" fill="#434343" />
      <path
        d="M23.7984 30.7998H22.3984V32.1998H23.7984V30.7998Z"
        fill="#434343"
      />
      <path
        d="M26.5992 16.7998H25.1992V18.1998H26.5992V16.7998Z"
        fill="#434343"
      />
      <path
        d="M26.5992 19.6006H25.1992V21.0006H26.5992V19.6006Z"
        fill="#434343"
      />
      <path
        d="M26.5992 22.3994H25.1992V23.7994H26.5992V22.3994Z"
        fill="#434343"
      />
      <path
        d="M26.5992 25.2002H25.1992V26.6002H26.5992V25.2002Z"
        fill="#434343"
      />
      <path d="M26.5992 27.999H25.1992V29.399H26.5992V27.999Z" fill="#434343" />
      <path
        d="M26.5992 30.7998H25.1992V32.1998H26.5992V30.7998Z"
        fill="#434343"
      />
      <path
        d="M29.3961 16.7998H27.9961V18.1998H29.3961V16.7998Z"
        fill="#434343"
      />
      <path
        d="M29.3961 19.6006H27.9961V21.0006H29.3961V19.6006Z"
        fill="#434343"
      />
      <path
        d="M29.3961 22.3994H27.9961V23.7994H29.3961V22.3994Z"
        fill="#434343"
      />
      <path
        d="M29.3961 25.2002H27.9961V26.6002H29.3961V25.2002Z"
        fill="#434343"
      />
      <path d="M29.3961 27.999H27.9961V29.399H29.3961V27.999Z" fill="#434343" />
      <path
        d="M29.3961 30.7998H27.9961V32.1998H29.3961V30.7998Z"
        fill="#434343"
      />
      <path
        d="M4.20078 16.7998H2.80078V18.1998H4.20078V16.7998Z"
        fill="#434343"
      />
      <path
        d="M4.20078 19.6006H2.80078V21.0006H4.20078V19.6006Z"
        fill="#434343"
      />
      <path
        d="M4.20078 22.3994H2.80078V23.7994H4.20078V22.3994Z"
        fill="#434343"
      />
      <path
        d="M4.20078 25.2002H2.80078V26.6002H4.20078V25.2002Z"
        fill="#434343"
      />
      <path d="M4.20078 27.999H2.80078V29.399H4.20078V27.999Z" fill="#434343" />
      <path
        d="M4.20078 30.7998H2.80078V32.1998H4.20078V30.7998Z"
        fill="#434343"
      />
      <path
        d="M6.99766 16.7998H5.59766V18.1998H6.99766V16.7998Z"
        fill="#434343"
      />
      <path
        d="M6.99766 19.6006H5.59766V21.0006H6.99766V19.6006Z"
        fill="#434343"
      />
      <path
        d="M6.99766 22.3994H5.59766V23.7994H6.99766V22.3994Z"
        fill="#434343"
      />
      <path
        d="M6.99766 25.2002H5.59766V26.6002H6.99766V25.2002Z"
        fill="#434343"
      />
      <path d="M6.99766 27.999H5.59766V29.399H6.99766V27.999Z" fill="#434343" />
      <path
        d="M6.99766 30.7998H5.59766V32.1998H6.99766V30.7998Z"
        fill="#434343"
      />
      <path
        d="M9.79844 16.7998H8.39844V18.1998H9.79844V16.7998Z"
        fill="#434343"
      />
      <path
        d="M9.79844 19.6006H8.39844V21.0006H9.79844V19.6006Z"
        fill="#434343"
      />
      <path
        d="M9.79844 22.3994H8.39844V23.7994H9.79844V22.3994Z"
        fill="#434343"
      />
      <path
        d="M9.79844 25.2002H8.39844V26.6002H9.79844V25.2002Z"
        fill="#434343"
      />
      <path d="M9.79844 27.999H8.39844V29.399H9.79844V27.999Z" fill="#434343" />
      <path
        d="M9.79844 30.7998H8.39844V32.1998H9.79844V30.7998Z"
        fill="#434343"
      />
      <path
        d="M12.6031 16.7998H11.2031V18.1998H12.6031V16.7998Z"
        fill="#434343"
      />
      <path
        d="M12.6031 19.6006H11.2031V21.0006H12.6031V19.6006Z"
        fill="#434343"
      />
      <path
        d="M12.6031 22.3994H11.2031V23.7994H12.6031V22.3994Z"
        fill="#434343"
      />
      <path
        d="M12.6031 25.2002H11.2031V26.6002H12.6031V25.2002Z"
        fill="#434343"
      />
      <path d="M12.6031 27.999H11.2031V29.399H12.6031V27.999Z" fill="#434343" />
      <path
        d="M12.6031 30.7998H11.2031V32.1998H12.6031V30.7998Z"
        fill="#434343"
      />
      <path
        d="M14.7031 7.69922H11.2031V9.09922H14.7031V7.69922Z"
        fill="#434343"
      />
      <path
        d="M23.7984 16.7998H22.3984V18.1998H23.7984V16.7998Z"
        fill="#434343"
      />
      <path
        d="M15.4039 11.2002H14.0039V12.6002H15.4039V11.2002Z"
        fill="#434343"
      />
      <path d="M15.4039 14.001H14.0039V15.401H15.4039V14.001Z" fill="#434343" />
      <path
        d="M18.2008 11.2002H16.8008V12.6002H18.2008V11.2002Z"
        fill="#434343"
      />
      <path d="M18.2008 14.001H16.8008V15.401H18.2008V14.001Z" fill="#434343" />
      <path
        d="M26.5992 11.2002H25.1992V12.6002H26.5992V11.2002Z"
        fill="#434343"
      />
      <path d="M26.5992 14.001H25.1992V15.401H26.5992V14.001Z" fill="#434343" />
      <path
        d="M29.3961 11.2002H27.9961V12.6002H29.3961V11.2002Z"
        fill="#434343"
      />
      <path d="M29.3961 14.001H27.9961V15.401H29.3961V14.001Z" fill="#434343" />
      <path
        d="M4.20078 11.2002H2.80078V12.6002H4.20078V11.2002Z"
        fill="#434343"
      />
      <path d="M4.20078 14.001H2.80078V15.401H4.20078V14.001Z" fill="#434343" />
      <path
        d="M6.99766 11.2002H5.59766V12.6002H6.99766V11.2002Z"
        fill="#434343"
      />
      <path d="M6.99766 14.001H5.59766V15.401H6.99766V14.001Z" fill="#434343" />
      <path
        d="M9.79844 11.2002H8.39844V12.6002H9.79844V11.2002Z"
        fill="#434343"
      />
      <path d="M9.79844 14.001H8.39844V15.401H9.79844V14.001Z" fill="#434343" />
      <path
        d="M12.6031 11.2002H11.2031V12.6002H12.6031V11.2002Z"
        fill="#434343"
      />
      <path d="M12.6031 14.001H11.2031V15.401H12.6031V14.001Z" fill="#434343" />
      <path
        d="M8.40234 9.1V9.8H9.80234V9.1C9.80234 7.14 11.3423 5.6 13.3023 5.6V4.2C11.3423 4.2 9.80234 2.66 9.80234 0.7V0H8.40234V0.7C8.40234 2.66 6.86234 4.2 4.90234 4.2V5.6C6.86234 5.6 8.40234 7.14 8.40234 9.1ZM9.10234 3.22C9.52234 3.92 10.0823 4.48 10.7823 4.9C10.0823 5.32 9.52234 5.88 9.10234 6.58C8.68234 5.88 8.12234 5.32 7.42234 4.9C8.12234 4.48 8.68234 3.92 9.10234 3.22Z"
        fill="#434343"
      />
      <path
        d="M20.9977 13.2996V14.6996H22.3977V13.2996C22.3977 10.9896 24.2877 9.09961 26.5977 9.09961H27.2977V7.69961H26.5977C24.2877 7.69961 22.3977 5.80961 22.3977 3.49961V2.09961H20.9977V3.49961C20.9977 5.80961 19.1077 7.69961 16.7977 7.69961H16.0977V9.09961H16.7977C19.1077 9.09961 20.9977 10.9896 20.9977 13.2996ZM21.6977 6.22961C22.1877 7.13961 22.9577 7.90961 23.8677 8.39961C22.9577 8.88961 22.1877 9.65961 21.6977 10.5696C21.2077 9.65961 20.4377 8.88961 19.5277 8.39961C20.4377 7.90961 21.2077 7.13961 21.6977 6.22961Z"
        fill="#434343"
      />
    </svg>
  );
}
function ExpertIcon() {
  return (
    <svg
      width="36"
      height="47"
      viewBox="0 0 36 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5649 18.9213H11.3006L17.6146 11.6602L23.9336 18.9213H21.6238H13.5649Z"
        fill="#494848"
      />
      <path
        d="M13.2603 19.627L16.8594 42.7196L6.13136 19.627H13.2603Z"
        fill="#494848"
      />
      <path
        d="M18.385 11.4785L30.9922 11.5146L24.7023 18.7377L18.385 11.4785Z"
        fill="#494848"
      />
      <path
        d="M18.3288 42.7215L21.9275 19.627H29.0625L18.3288 42.7215Z"
        fill="#494848"
      />
      <path
        d="M13.9786 19.627H21.2148L17.5972 42.8449L13.9786 19.627Z"
        fill="#494848"
      />
      <path
        d="M4.21177 11.4775H16.8398L10.5258 18.7385L4.21177 11.4775Z"
        fill="#494848"
      />
      <path
        d="M25.4801 18.9225L31.6889 11.793L35.1914 18.9225H29.6119H25.4801Z"
        fill="#494848"
      />
      <path
        d="M5.58583 18.9226H0.000558853L3.52598 11.7559L9.75781 18.9226H5.58583Z"
        fill="#494848"
      />
      <path
        d="M29.8396 19.627H35.082L19.5868 41.6869L29.8396 19.627Z"
        fill="#494848"
      />
      <path
        d="M15.6094 41.6904L0.111034 19.627H5.35955L15.6094 41.6904Z"
        fill="#494848"
      />
      <path
        d="M15.3607 42.5664L17.3057 45.3351C17.3073 45.3371 17.3091 45.3384 17.3106 45.3404C17.3119 45.3422 17.3133 45.344 17.3148 45.3459C17.3183 45.3507 17.3216 45.3556 17.3257 45.3601C17.3365 45.3731 17.3483 45.385 17.3608 45.3962C17.3616 45.3969 17.3624 45.3979 17.3632 45.3986C17.378 45.4113 17.3938 45.4227 17.4104 45.4327C17.4153 45.4357 17.4204 45.4383 17.4255 45.4409C17.4292 45.4431 17.4329 45.4451 17.4368 45.4471C17.4447 45.4512 17.4529 45.4547 17.4612 45.4582C17.4675 45.4607 17.4736 45.463 17.48 45.4652C17.4884 45.4679 17.4965 45.4706 17.5049 45.4728C17.5091 45.4739 17.5134 45.4747 17.5177 45.4756H17.5178C17.524 45.4769 17.5299 45.4785 17.5359 45.4794C17.555 45.4826 17.5742 45.4848 17.5939 45.4848C17.594 45.4848 17.5941 45.4848 17.5941 45.4848C17.6137 45.4848 17.6328 45.4826 17.6518 45.4795C17.6581 45.4785 17.664 45.4769 17.6701 45.4756C17.6745 45.4746 17.6789 45.4737 17.6832 45.4728C17.6915 45.4705 17.6995 45.4679 17.7076 45.4652C17.7142 45.463 17.7207 45.4606 17.727 45.458C17.7351 45.4547 17.743 45.4513 17.7509 45.4472C17.7549 45.4452 17.7587 45.4431 17.7627 45.4409C17.7676 45.4382 17.7728 45.4357 17.7777 45.4326C17.7942 45.4226 17.8099 45.4114 17.8246 45.3988C17.8258 45.3977 17.8269 45.3965 17.8279 45.3955C17.8402 45.3846 17.8518 45.3729 17.8623 45.3602C17.8663 45.3556 17.8697 45.3507 17.8734 45.3458C17.8747 45.3441 17.876 45.3425 17.8772 45.3407C17.8789 45.3386 17.8809 45.3372 17.8824 45.3351L19.827 42.5664C25.8073 42.8088 28.3984 43.8955 28.3984 44.4036C28.3984 44.581 27.8625 45.1493 25.4151 45.6405C23.3301 46.0589 20.5526 46.2892 17.5941 46.2892C14.6376 46.2892 11.8613 46.0588 9.77693 45.6405C7.32997 45.1493 6.79423 44.5811 6.79423 44.4036C6.79423 43.8956 9.38369 42.8088 15.3607 42.5664Z"
        fill="#494848"
      />
      <path
        d="M17.5931 3.98471C17.3986 3.98471 17.241 3.82707 17.241 3.63249V0.35222C17.241 0.157747 17.3987 0 17.5931 0C17.7877 0 17.9453 0.157747 17.9453 0.35222V3.63249C17.9453 3.82707 17.7877 3.98471 17.5931 3.98471Z"
        fill="#494848"
      />
      <path
        d="M8.077 9.48318C8.0174 9.48318 7.95684 9.46793 7.90143 9.43604L5.05682 7.79606C4.88822 7.69888 4.83056 7.48347 4.92764 7.31498C5.0246 7.1466 5.23991 7.08862 5.40861 7.1858L8.25322 8.82577C8.42181 8.92295 8.47969 9.13837 8.38262 9.30674C8.31733 9.41993 8.19888 9.48318 8.077 9.48318Z"
        fill="#494848"
      />
      <path
        d="M30.1284 7.79604L27.2836 9.43601C27.2282 9.4679 27.1678 9.48315 27.1081 9.48315C26.9863 9.48315 26.8678 9.4199 26.8027 9.30672C26.7055 9.13834 26.7634 8.92293 26.932 8.82575L29.7766 7.18577C29.9449 7.0887 30.1604 7.14647 30.2575 7.31496C30.3547 7.48344 30.2968 7.69886 30.1284 7.79604Z"
        fill="#494848"
      />
      <path
        d="M12.5275 5.8518C12.4717 5.88401 12.4112 5.89926 12.3511 5.89926C12.2297 5.89926 12.1115 5.83634 12.0461 5.72358L11.0435 3.99255C10.946 3.82428 11.0036 3.60876 11.1717 3.51136C11.3401 3.41385 11.5555 3.4713 11.653 3.63958L12.6556 5.37061C12.7532 5.53877 12.6956 5.75429 12.5275 5.8518Z"
        fill="#494848"
      />
      <path
        d="M23.135 5.73309C23.0698 5.84628 22.9513 5.90974 22.8294 5.90974C22.7698 5.90974 22.7094 5.8946 22.6541 5.86271C22.4855 5.76585 22.4274 5.55054 22.5244 5.38184L23.5261 3.6405C23.623 3.4719 23.8384 3.41381 24.0069 3.51088C24.1755 3.60774 24.2336 3.82305 24.1367 3.99175L23.135 5.73309Z"
        fill="#494848"
      />
    </svg>
  );
}
