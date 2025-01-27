"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const CardData = [
  {
    id: "01",
    title: "Solar Films",
    alt: "Solar Gard Solutions, Ireland, Solar Films",
    tags: "Anti-Glare, Privacy, Heat Reduction",
    imageUrl: "/images/card-service-imgs/Solar-film-card-img.jpg",
    pageUrl:
      "Solar Gard Solutions, Ireland  Solar window Films, Anti-Glare window Films, Heat Reduction window Films, Privacy window Films",
  },
  {
    id: "02",
    title: "Manifestations",
    alt: "Solar Gard Solutions, Ireland, Manifestations & Graphics",
    tags: "Branding, Decorative Designs, Privacy",
    imageUrl: "/images/card-service-imgs/Manif-card-img.jpg",
    pageUrl: "",
  },
  {
    id: "03",
    title: "Privacy Films",
    alt: "",
    tags: "Safety, Decorative Designs, Privacy",
    imageUrl: "/images/card-service-imgs/privacy-card-img.jpg",
    pageUrl: "",
  },
  {
    id: "04",
    title: "Safety Films",
    alt: "",
    tags: "Security glass films, Anti-graffiti films, Shatterproof",
    imageUrl: "/images/card-service-imgs/safety-film-card-img.jpg",
    pageUrl: "",
  },
  {
    id: "05",
    title: "Vehicle Tinting",
    alt: "",
    tags: "Professional-grade tinting, UV protection",
    imageUrl: "/images/card-service-imgs/car-tint-card-img.jpg",
    pageUrl: "",
  },
  {
    id: "06",
    title: "Vehicle Wrapping",
    alt: "",
    tags: "Vehicle customisation, Advertising Wraps",
    imageUrl: "/images/card-service-imgs/vehicle-wrap-card-img.jpg",
    pageUrl: "",
  },
  {
    id: "07",
    title: "Coverstyl'",
    alt: "",
    tags: "Kitchen Wraps, Decorative Vinyl Wraps",
    imageUrl: "/images/card-service-imgs/coverstyl-card-grid-img.jpg",
    pageUrl: "",
  },
  {
    id: "08",
    title: "Cloaking",
    alt: "",
    tags: "Data privacy film, Obscure digital screens",
    imageUrl: "/images/card-service-imgs/cloaking-card-img.jpg",
    pageUrl: "",
  },
  {
    id: "09",
    title: "Switchable Glass",
    alt: "",
    tags: "Data privacy film, Obscure digital screens",
    imageUrl: "/images/card-service-imgs/cloaking-card-img.jpg",
    pageUrl: "",
  },
];

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-6 lg:h-6"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 0V15.3946C20.0009 15.6513 19.9055 15.899 19.7326 16.0888C19.5598 16.2786 19.322 16.3968 19.0663 16.4199C18.8106 16.443 18.5556 16.3694 18.3515 16.2136C18.1474 16.0579 18.0091 15.8313 17.964 15.5786L17.948 15.3946L17.946 3.74365C17.9461 3.72391 17.9404 3.70458 17.9295 3.68809C17.9187 3.6716 17.9032 3.65869 17.885 3.65099C17.8668 3.64329 17.8467 3.64115 17.8274 3.64483C17.808 3.6485 17.7901 3.65784 17.776 3.67166L1.75186 19.6982C1.58217 19.8685 1.35805 19.9738 1.11862 19.9957C0.879195 20.0177 0.63967 19.9548 0.441855 19.8182L0.301854 19.6982C0.131531 19.5285 0.0262116 19.3044 0.00427937 19.065C-0.0176529 18.8256 0.0451949 18.5861 0.181853 18.3883L0.301854 18.2463L16.322 2.22379C16.3364 2.20993 16.3463 2.19206 16.3504 2.17251C16.3545 2.15296 16.3527 2.13262 16.3452 2.11411C16.3377 2.0956 16.3248 2.07977 16.3081 2.06866C16.2915 2.05756 16.272 2.05169 16.252 2.05181H4.60388C4.36386 2.05204 4.13136 1.96813 3.94682 1.81467C3.76228 1.6612 3.63739 1.44791 3.59388 1.21189L3.57788 1.02391C3.57788 0.519952 3.93988 0.101991 4.41788 0.0139987L4.60588 0H20Z"
        fill="black"
      />
    </svg>
  );
}

export default function ServiceCardGrid() {
  const containerRefs = useRef([]);
  const imageRefs = useRef([]);
  const circleRefs = useRef([]);

  useEffect(() => {
    containerRefs.current.forEach((container, index) => {
      const image = imageRefs.current[index];
      const circle = circleRefs.current[index];

      gsap.fromTo(
        image,
        { scale: 1 },
        {
          scale: 1.05,
          duration: 0.7,
          ease: "power1.inOut",
          paused: true,
          reversed: true,
          onReverseComplete: () => gsap.set(image, { clearProps: "all" }),
        }
      );

      gsap.fromTo(
        circle,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power1.inOut",
          paused: true,
          reversed: true,
          onReverseComplete: () => gsap.set(circle, { clearProps: "all" }),
        }
      );

      const handleMouseEnter = () => {
        gsap.to(image, { scale: 1.05, duration: 0.7, ease: "power1.inOut" });
        gsap.to(circle, {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power1.inOut",
        });
      };

      const handleMouseLeave = (event) => {
        if (!container.contains(event.relatedTarget)) {
          gsap.to(image, { scale: 1, duration: 0.7, ease: "power1.inOut" });
          gsap.to(circle, {
            opacity: 0,
            scale: 0,
            duration: 0.7,
            ease: "power1.inOut",
          });
        }
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div className="w-full bg-grey">
      <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-9/12 sm:w-11/12 xxl:py-32 xl:py-28 lg:py-36 mx-auto">
        <div>
          <h2 className="mb-4 text-4xl font-bold text-secondary">
            Our Services
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mx-auto gap-4 gap-y-8 text-secondary">
          {CardData.map((data, index) => (
            <div
              key={data.id}
              className="relative bg-cover bg-center flex flex-col overflow-hidden"
              ref={(el) => (containerRefs.current[index] = el)}
            >
              <div className="relative rounded-lg xxl:h-60 xl:h-60 lg:h-48 md:h-400 sm:h-44 overflow-hidden">
                <Image
                  className="rounded-lg"
                  src={data.imageUrl}
                  alt={data.alt}
                  quality={100}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{
                    objectFit: "cover",
                  }}
                  ref={(el) => (imageRefs.current[index] = el)}
                />
                <div
                  className="absolute top-2 right-2 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8 bg-white rounded-full flex items-center justify-center"
                  ref={(el) => (circleRefs.current[index] = el)}
                >
                  <ArrowIcon />
                </div>
              </div>
              <div className="antialiased">
                <div className="mt-2 lg:text-xl md:text-lg sm:text-base font-semibold">
                  {data.title}
                </div>
                <div className="lg:text-sm md:text-sm sm:text-xs text-gray-500 font-medium">
                  {data.tags}
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
