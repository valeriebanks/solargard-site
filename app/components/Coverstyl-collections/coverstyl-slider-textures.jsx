"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import TextureModal from "./Modals/TextureModal";

const slides = [
  {
    category: "Wood",
    title: "Wood Collection",
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
    description: "The stone imitation adhesive is perfect for a natural look.",
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
    description: "The textile imitation adhesive is perfect for a cozy look.",
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
    description:
      "The concrete imitation adhesive is perfect for an urban look.",
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
    description: "The colour imitation adhesive is perfect for a pop look.",
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
    description: "The glitter imitation adhesive is perfect for a shiny look.",
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

const textureData = [
  {
    id: "Orangey Wenge",
    description:
      "The wood imitation adhesive allows you to bring a touch of nature into your space. Strong and easy to install, it is the perfect product to change the design of a room in the blink of an eye.",
    title: "Orangey Wenge",
    TypeofProduct: "PVC",
    width: "122cm",
    height: "50m",
    adhesive: "Acrylic PSA",
    warrenty: "10 yesars",
    installation: "Interior",
    images: [
      {
        src: "/images/coverstyl/modal-imgs/Orangey-Wenge/modal-orangey-wenge_01.jpg",
        alt: "Solar Gard CoverSttyl'",
      },
      {
        src: "/images/coverstyl/modal-imgs/Orangey-Wenge/modal-orangey-wenge_02.jpg",
        alt: "Solar Gard CoverSttyl'",
      },
    ],
  },
  {
    id: "Beige Oak",
    title: "Beige Oak",
    description:
      "The wood imitation adhesive allows you to bring a touch of nature into your space. Strong and easy to install, it is the perfect product to change the design of a room in the blink of an eye.",
    TypeofProduct: "PVC",
    width: "122cm",
    height: "50m",
    adhesive: "Acrylic PSA",
    warrenty: "10 yesars",
    installation: "Interior",
    images: [
      {
        src: "/images/coverstyl/wood-textures/Orangey-Wenge.jpg",
        alt: "",
      },
      {
        src: "/images/coverstyl/wood-textures/Orangey-Wenge-Detail1.jpg",
        alt: "",
      },
    ],
  },
  {
    id: "Grey Line Oak",
    title: "Grey Line Oak",
    description:
      "The wood imitation adhesive allows you to bring a touch of nature into your space. Strong and easy to install, it is the perfect product to change the design of a room in the blink of an eye.",
    TypeofProduct: "PVC",
    width: "122cm",
    height: "50m",
    installation: "Interior",
    images: [
      {
        src: "/images/coverstyl/wood-textures/Orangey-Wenge.jpg",
        alt: "",
      },
      {
        src: "/images/coverstyl/wood-textures/Orangey-Wenge-Detail1.jpg",
        alt: "",
      },
    ],
  },
  {
    id: "Orangey Pine",
    title: "Orangey Pine",
    description:
      "The wood imitation adhesive allows you to bring a touch of nature into your space. Strong and easy to install, it is the perfect product to change the design of a room in the blink of an eye.",
    TypeofProduct: "PVC",
    witdh: "122cm",
    height: "50m",
    installation: "Interior",
    images: [
      {
        src: "/images/coverstyl/wood-textures/",
        alt: "",
      },
      {
        src: "/images/coverstyl/wood-textures/",
        alt: "",
      },
    ],
  },
  {
    id: "Aged Birch",
    title: "Aged Birch",
    description:
      "The wood imitation adhesive allows you to bring a touch of nature into your space. Strong and easy to install, it is the perfect product to change the design of a room in the blink of an eye.",
    TypeofProduct: "PVC",
    width: "122cm",
    height: "50m",
    installation: "Interior",
    images: [
      {
        src: "/images/coverstyl/wood-textures/",
        alt: "",
      },
      {
        src: "/images/coverstyl/wood-textures/",
        alt: "",
      },
    ],
  },
  {
    id: "Silver Blue",
    title: "Silver Blue",
    description:
      "Whether it's with a rust or aluminum effect, materials and textures are present in our Steel range. Add a silver or gold touch to your interior. Are you leaning towards an industrial look? The sheet metal or carbon fiber effect will be ideal.",
    TypeofProduct: "PVC",
    width: "122cm",
    height: "50m",
    installation: "Interior",
    images: [
      {
        src: "/images/coverstyl/Steel-textures/",
        alt: "",
      },
      {
        src: "/images/coverstyl/Steel-textures/",
        alt: "",
      },
    ],
  },
  {
    id: "Corten",
    title: "Corten",
    description:
      "Whether it's with a rust or aluminum effect, materials and textures are present in our Steel range. Add a silver or gold touch to your interior. Are you leaning towards an industrial look? The sheet metal or carbon fiber effect will be ideal.",
    TypeofProduct: "PVC",
    width: "122cm",
    height: "50m",
    installation: "Interior",
    images: [
      {
        src: "/images/coverstyl/Steel-textures/",
        alt: "",
      },
      {
        src: "/images/coverstyl/Steel-textures/",
        alt: "",
      },
    ],
  },
  {
    id: "Mat Aluminium",
    title: "Mat Aluminium",
    description:
      "Whether it's with a rust or aluminum effect, materials and textures are present in our Steel range. Add a silver or gold touch to your interior. Are you leaning towards an industrial look? The sheet metal or carbon fiber effect will be ideal.",
    TypeofProduct: "PVC",
    width: "122cm",
    height: "50m",
    installation: "Interior",
    images: [
      {
        src: "/images/coverstyl/Steel-textures/",
        alt: "",
      },
      {
        src: "/images/coverstyl/Steel-textures/",
        alt: "",
      },
    ],
  },
  {
    id: "Gold Black",
    title: "Gold Black",
    description:
      "Whether it's with a rust or aluminum effect, materials and textures are present in our Steel range. Add a silver or gold touch to your interior. Are you leaning towards an industrial look? The sheet metal or carbon fiber effect will be ideal.",
    TypeofProduct: "PVC",
    width: "122cm",
    height: "50m",
    installation: "Interior",
    images: [
      {
        src: "/images/coverstyl/Steel-textures/",
        alt: "",
      },
      {
        src: "/images/coverstyl/Steel-textures/",
        alt: "",
      },
    ],
  },
  {
    id: "Chromed Metal",
    title: "Chromed Metal",
    description:
      "Whether it's with a rust or aluminum effect, materials and textures are present in our Steel range. Add a silver or gold touch to your interior. Are you leaning towards an industrial look? The sheet metal or carbon fiber effect will be ideal.",
    TypeofProduct: "PVC",
    width: "122cm",
    height: "50m",
    installation: "Interior",
    images: [
      {
        src: "/images/coverstyl/Steel-textures/",
        alt: "",
      },
      {
        src: "/images/coverstyl/Steel-textures/",
        alt: "",
      },
    ],
  },
];

export default function CoverStylSliderTextures() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTexture, setSelectedTexture] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const images = Array.from(containerRef.current.children);
    gsap.fromTo(
      images,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out" }
    );
  }, [currentIndex]);

  const goToSlide = (index) => {
    if (index === currentIndex) return;

    const images = Array.from(containerRef.current.children);
    gsap.to(images, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(index);
      },
    });
  };

  const openModal = (texture) => {
    console.log("Opening modal with texture:", texture); // Debugging line
    if (texture) {
      // Find the specific texture details from the textureData array
      const textureDetails = textureData.find(
        (item) => item.title === texture.title
      );
      if (textureDetails) {
        setSelectedTexture(textureDetails); // Set the selected texture details
        setIsModalOpen(true);
      } else {
        console.error("Texture details not found for:", texture.title);
      }
    } else {
      console.error("Texture is undefined or null"); // Debugging line
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTexture(null);
  };

  return (
    <>
      <div className="w-full bg-grey">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:py-0 mx-auto antialiased">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl text-secondary font-bold">
              {slides[currentIndex].title}
            </h2>
            <div className="flex flex-wrap justify-end gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.category}
                  onClick={() => goToSlide(index)}
                  className={`px-6 py-2 rounded-lg font-medium text-sm transition-all 
              ${
                currentIndex === index
                  ? "bg-gray-400 border-2 border-white text-white font-medium"
                  : "text-black border-2 border-gray-300 hover:bg-gray-200"
              }`}
                >
                  {slide.category}
                </button>
              ))}
            </div>
          </div>
          <div className="relative w-full mx-auto">
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
                    onClick={() => openModal(slides[currentIndex].images[0])}
                  />
                  <p className="mt-2 text-sm font-medium">
                    {slides[currentIndex].images[0].title}
                  </p>
                </div>
              </div>

              {/* Right Side (2x2 Grid) */}
              <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
                {slides[currentIndex].images.slice(1).map((texture) => (
                  <div
                    key={texture.title} // Use a unique key
                    onClick={() => openModal(texture)}
                    className="w-full h-full cursor-pointer"
                  >
                    <Image
                      src={texture.src}
                      alt={texture.title}
                      width={200}
                      height={200}
                      className="w-full h-[300px] object-cover shadow-md rounded-tr-xl"
                    />
                    <p className="mt-2 text-sm font-medium">{texture.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Render Modal if a texture is selected */}
        {isModalOpen && selectedTexture && (
          <TextureModal
            texture={selectedTexture}
            isOpen={isModalOpen}
            closeModal={closeModal} // Pass closeModal as a function
          />
        )}
      </div>
    </>
  );
}
