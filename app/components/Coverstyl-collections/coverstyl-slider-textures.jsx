"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const slides = [
  {
    category: "Wood",
    title: "Wood Collection",
    Description:
      "The wood imitation adhesive allows you to bring a touch of nature into your space. Strong and easy to install, it is the perfect product to change the design of a room in the blink of an eye.",
    images: [
      {
        src: "/images/coverstyl/wood-textures/Orangey-Wenge.jpg",
        title: "Orangey Wenge",
      },
      {
        src: "/images/coverstyl/wood-textures/Beige-Oak.jpg",
        title: "Beige Oak",
      },
      {
        src: "/images/coverstyl/wood-textures/Grey-Line-Oak.jpg",
        title: "Grey Line Oak",
      },
      {
        src: "/images/coverstyl/wood-textures/Orangey-Pine.jpg",
        title: "Orangey Pine",
      },
      {
        src: "/images/coverstyl/wood-textures/Aged-Birch.jpg",
        title: "Aged Birch",
      },
    ],
  },
  {
    category: "Steel",
    title: "Steel Collection",
    images: [
      {
        src: "/images/coverstyl/Steel-textures/Silver-Blue.jpg",
        title: "Silver Blue",
      },
      { src: "/images/coverstyl/Steel-textures/Corten.jpg", title: "Corten" },
      {
        src: "/images/coverstyl/Steel-textures/Mat-Aluminium.jpg",
        title: "Mat Aluminium",
      },
      {
        src: "/images/coverstyl/Steel-textures/Gold-Black.jpg",
        title: "Gold Black",
      },
      {
        src: "/images/coverstyl/Steel-textures/Chromed-Metal.jpg",
        title: "Chromed Metal",
      },
    ],
  },
  {
    category: "Stone",
    title: "Stone Collection",
    images: [
      {
        src: "/images/coverstyl/Stone-textures/Statuary-White.jpg",
        title: "Statuary White",
      },
      {
        src: "/images/coverstyl/Stone-textures/Terrazzo-Beige.jpg",
        title: "Terrazzo Beige",
      },
      {
        src: "/images/coverstyl/Stone-textures/Onyx-Gold.jpg",
        title: "Onyx Gold",
      },
      {
        src: "/images/coverstyl/Stone-textures/Spotted-Grey.jpg",
        title: "Spotted Grey",
      },
      {
        src: "/images/coverstyl/Stone-textures/Etruscan-Grey.jpg",
        title: "Etruscan Grey",
      },
    ],
  },
  {
    category: "Textile",
    title: "Textile Collection",
    images: [
      {
        src: "/images/coverstyl/Textile-textures/Mika-Light.jpg",
        title: "Mika Light",
      },
      {
        src: "/images/coverstyl/Textile-textures/Gold-Metal-Weaving.jpg",
        title: "Gold Metal Weaving",
      },
      {
        src: "/images/coverstyl/Textile-textures/Beige-Linen.jpg",
        title: "Beige Linen",
      },
      {
        src: "/images/coverstyl/Textile-textures/Mini-Chevron-Grey.jpg",
        title: "Mini Chevron Grey",
      },
      {
        src: "/images/coverstyl/Textile-textures/Grigio.jpg",
        title: "Grigio",
      },
    ],
  },
  {
    category: "Concrete",
    title: "Concrete Collection",
    images: [
      {
        src: "/images/coverstyl/Concrete-textures/Cement-Grey.jpg",
        title: "Cement Grey",
      },
      {
        src: "/images/coverstyl/Concrete-textures/Raw-Dark.jpg",
        title: "Raw Dark",
      },
      {
        src: "/images/coverstyl/Concrete-textures/Snowflake-Stucco.jpg",
        title: "Snowflake Stucco",
      },
      {
        src: "/images/coverstyl/Concrete-textures/Cement-Dark.jpg",
        title: "Concrete 4",
      },
      {
        src: "/images/coverstyl/Concrete-textures/Red-Brick.jpg",
        title: "Red Brick",
      },
    ],
  },
  {
    category: "Colour",
    title: "Colour Collection",
    images: [
      {
        src: "/images/coverstyl/Colour-textures/Blues.jpg",
        title: "Blues",
      },
      {
        src: "/images/coverstyl/Colour-textures/Steel-Blue.jpg",
        title: "Steel Blue",
      },
      {
        src: "/images/coverstyl/Colour-textures/Sand-Beach.jpg",
        title: "Sand Beach",
      },
      {
        src: "/images/coverstyl/Colour-textures/Clean-Mint.jpg",
        title: "Clean Mint",
      },
      {
        src: "/images/coverstyl/Colour-textures/Royal-Blue.jpg",
        title: "Royal Blue",
      },
    ],
  },
  {
    category: "Glitter",
    title: "Glitter Collection",
    images: [
      {
        src: "/images/coverstyl/Glitter-textures/Green-Disco.jpg",
        title: "Green Disco",
      },
      {
        src: "/images/coverstyl/Glitter-textures/Midnight-Blue-Disco.jpg",
        title: "Glitter 2",
      },
      {
        src: "/images/coverstyl/Glitter-textures/Green-Mixed.jpg",
        title: "Glitter 3",
      },
      {
        src: "/images/coverstyl/Glitter-textures/Navy-Blue.jpg",
        title: "Glitter 4",
      },
      {
        src: "/images/coverstyl/Glitter-textures/Butter.jpg",
        title: "Glitter 5",
      },
    ],
  },
];

export default function CoverStylSliderTextures() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  const goToSlide = (index) => {
    if (index === currentIndex) return;

    const images = containerRef.current.children;

    gsap.to(images, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(index);

        gsap.fromTo(
          images,
          { y: -60, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out" }
        );
      },
    });
  };

  return (
    <div className="w-full bg-grey">
      <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:py-0 mx-auto antialiased">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-4xl text-secondary font-bold">
              {slides[currentIndex].title}
            </h2>
          </div>
          <div className="">
            {/* Navigation Buttons */}
            {slides.map((slide, index) => (
              <button
                key={slide.category}
                onClick={() => goToSlide(index)}
                className={`px-4 py-1 mr-3 rounded-md font-medium transition-all 
              ${
                currentIndex === index
                  ? "bg-gray-400 border-2 border-white text-white font-medium text-sm"
                  : "text-black border-2 border-gray-300 text-sm font-medium hover:bg-gray-200"
              }`}
              >
                {slide.category}
              </button>
            ))}
          </div>
        </div>
        <div className="relative w-full mx-auto">
          {/* Slide Content */}
          <div>
            {/* Image Grid Layout */}
            <div
              ref={containerRef}
              className="grid grid-cols-3 gap-4 items-stretch"
            >
              {/* Left Side (Large Image) */}
              <div className="col-span-1">
                <div className="h-[644px]">
                  <Image
                    src={slides[currentIndex].images[0].src}
                    alt={slides[currentIndex].images[0].title}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover shadow-md rounded-tr-xl"
                  />
                  <p className="mt-2 text-sm font-medium">
                    {slides[currentIndex].images[0].title}
                  </p>
                </div>
              </div>

              {/* Right Side (2x2 Grid) */}
              <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
                {slides[currentIndex].images.slice(1).map((img, index) => (
                  <div key={index} className="w-full h-full">
                    <Image
                      src={img.src}
                      alt={img.title}
                      width={200}
                      height={200}
                      className="w-full h-[300px] object-cover shadow-md rounded-tr-xl"
                    />
                    <p className="mt-2 text-sm font-medium">{img.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
