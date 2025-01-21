import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: 1,
    title: "Solar Films",
    image: "/images/card-service-imgs/solar-films-card-service-img-min.jpg",
    mobileImage: "/images/card-service-imgs/solar-film-card-service-mobile.jpg",
    buttonLabel: "View Solar Films",
    link: "/Solar-Films",
  },
  {
    id: 2,
    title: "Vehicle Tinting",
    image: "/images/card-service-imgs/car-tinting-b.jpg",
    mobileImage: "/images/card-service-imgs/Car-Tint-mobile-img.jpg",
    buttonLabel: "View Vehicle Tinting",
    link: "/Vehicle-tinting",
  },
  {
    id: 3,
    title: "CoverStyl'",
    image: "/images/card-service-imgs/coverstyl-card-img.jpg",
    mobileImage: "/images/card-service-imgs/coverstyl-mobile-img.jpg",
    buttonLabel: "View CoverStyl'",
    link: "/CoverStyl",
  },
  {
    id: 4,
    title: "Manifestations & Graphics",
    image: "/images/card-service-imgs/manifestations-graphics-card-img.jpg",
    mobileImage: "/images/card-service-imgs/manifestations-graphics-mobile.jpg",
    buttonLabel: "View Manifestations & Graphics",
    link: "/Manifestations-Graphics",
  },
  // {
  //   id: 5,
  //   title: "Vehicle Wrapping",
  //   image: "/images/card-service-imgs/vehicle-wrapping-card-img.jpg",
  //   mobileImage: "/images/card-service-imgs/vehicle-wrapping-mobile-img.jpg",
  //   buttonLabel: "View Vehicle Wrapping",
  //   link: "/",
  // },
  {
    id: 6,
    title: "Privacy Films",
    image: "/images/card-service-imgs/privacy-films-card-img.jpg",
    mobileImage: "/images/card-service-imgs/privacy-card-mobile-img.jpg",
    buttonLabel: "View Privacy Films",
    link: "/Privacy-Films",
  },
];

const Card = ({ children, isFirst }) => (
  <div
    className={`h-screen w-full flex items-center justify-center text-4xl text-white ${
      isFirst ? "fixed top-0 left-0" : "absolute top-0 left-0"
    } overflow-hidden rounded-[40px]`}
  >
    {children}
  </div>
);

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = gsap.utils.toArray(container.children);
    const cardHeight = window.innerHeight;

    // Set initial states
    gsap.set(cards.slice(1), {
      clipPath: "inset(100% 0% 0% 0% round 40px)",
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top-=0px top",
        end: () => `+=${cardHeight * (cards.length - 1)}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 1,
        markers: false,
        fastScrollEnd: true,
        preventOverlaps: true,
      },
    });

    // Animate subsequent cards
    cards.forEach((card, i) => {
      if (i > 0) {
        tl.fromTo(
          card,
          {
            clipPath: "inset(100% 0% 0% 0% round 40px)",
          },
          {
            clipPath: "inset(0% 0% 0% 0% round 40px)",
            duration: 1,
            ease: "none",
          },
          `card${i}`
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main>
      <div className="min-h-screen bg-grey antialiased">
        <div className="relative">
          <div className="pin-spacer">
            <div
              ref={containerRef}
              className="relative h-screen w-full overflow-hidden"
              style={{
                height: "100vh",
                willChange: "transform",
              }}
            >
              {cardData.map((card, index) => (
                <Card key={card.id} isFirst={index === 0}>
                  <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 lg:h-[90vh] md:h-[60vh] sm:h-[70vh] sm:w-11/12 relative">
                    <img
                      className="w-full h-full object-cover rounded-xl lg:flex md:flex sm:hidden"
                      src={card.image}
                      alt={`Card ${card.id}`}
                    />
                    <img
                      className="w-full h-full object-cover lg:hidden md:hidden sm:flex"
                      src={card.mobileImage}
                    />
                    <div className="absolute bottom-0 flex flex-col items-start lg:px-24 lg:py-[15%] md:px-16 md:py-[10%] sm:px-4 sm:py-[25%]">
                      <h2 className="xxl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl font-bold text-white">
                        {card.title}
                      </h2>
                      <div>
                        <Link href={card.link}>
                          <button className="bg-white flex items-center text-secondary lg:text-2xl md:text-xl sm:text-sm hover:bg-primary hover:text-white font-semibold lg:py-4 lg:px-12 md:py-2 md:px-6 sm:py-2 sm:px-6 mt-6 lg:rounded-2xl md:rounded-lg sm:rounded-lg">
                            {card.buttonLabel}
                            <span className="inline-flex items-center pl-4">
                              <NavIcon />
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function NavIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#0d1218" />
      <path
        d="M10.4184 19.1006L24.1507 19.1006C24.4828 19.1006 24.752 18.8314 24.752 18.4993C24.752 18.1673 24.4828 17.8981 24.1507 17.8981L10.4184 17.8981C10.0864 17.8981 9.8172 18.1673 9.8172 18.4993C9.8172 18.8314 10.0864 19.1006 10.4184 19.1006Z"
        fill="white"
      />
      <path
        d="M19.2272 24.2733L24.5749 18.9256C24.8097 18.6908 24.8097 18.3101 24.5749 18.0753C24.3401 17.8405 23.9594 17.8405 23.7246 18.0753L18.3769 23.423C18.1421 23.6578 18.1421 24.0385 18.3769 24.2733C18.6117 24.5081 18.9924 24.5081 19.2272 24.2733Z"
        fill="white"
      />
      <path
        d="M18.3756 13.5763L23.7233 18.924C23.9581 19.1588 24.3388 19.1588 24.5736 18.924C24.8084 18.6892 24.8084 18.3085 24.5736 18.0737L19.2259 12.726C18.9911 12.4912 18.6104 12.4912 18.3756 12.726C18.1408 12.9608 18.1408 13.3415 18.3756 13.5763Z"
        fill="white"
      />
    </svg>
  );
}
