import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
const titles = [
  {
    title: "Heat Rejection",
    description:
      "Reduces indoor temperatures by blocking solar heat, making spaces more comfortable and lowering cooling costs.",
    image: "/images/solar-films-imgs/heat-reduction.jpg",
  },
  {
    title: "Glare Reduction",
    description:
      "Minimises glare from sunlight and screens, improving visibility and comfort in homes and offices.",
    image: "/images/solar-films-imgs/anti-glare.jpg",
  },
  {
    title: "UV Protection",
    description:
      "Blocks up to 99% of harmful UV rays, protecting interiors, furniture, and skin from damage.",
    image: "/images/solar-films-imgs/UV-protection.jpg",
  },
  {
    title: "Privacy Enhance",
    description:
      "Provides daytime privacy with reflective films while maintaining natural light.",
    image: "/images/solar-films-imgs/privacy.jpg",
  },
  {
    title: "Energy Efficiency",
    description:
      "Reduces reliance on air conditioning, leading to lower energy consumption and cost savings.",
    image: "/images/energy-efficiency.jpg",
  },
];

const AnimatedCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef(null);
  const backgroundRef = useRef(null);
  const titleRefs = useRef([]);
  const isFirstRender = useRef(true); // Prevent initial animation

  // Auto-change active title every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!titleRefs.current[activeIndex] || !backgroundRef.current) return;

    const activeTitle = titleRefs.current[activeIndex];

    if (isFirstRender.current) {
      // On first render, directly set position & height instead of animating
      backgroundRef.current.style.top = `${activeTitle.offsetTop}px`;
      backgroundRef.current.style.height = `${activeTitle.offsetHeight}px`;
      isFirstRender.current = false; // Disable first render flag
    } else {
      // Animate background movement after the first render
      gsap.to(backgroundRef.current, {
        duration: 1,
        y: activeTitle.offsetTop,
        height: activeTitle.offsetHeight,
        ease: "power2.inOut",
      });
    }

    // Fade in the image smoothly
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.inOut" }
    );
  }, [activeIndex]);

  const handleTitleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full bg-grey pt-28">
      <h2 className="w-1/2 pl-36 font-semibold text-4xl">
        Problems Solved by Solar Films
      </h2>
      <div className="w-10/12 mx-auto relative">
        <div className="flex bg-gray-100 rounded-3xl p-8 gap-24 antialiased">
          {/* LEFT SIDE - Titles & Descriptions */}
          <div className="w-1/2 relative">
            {/* <h2 className="text-2xl font-bold mb-6">
              Problems Solved by Solar Films
            </h2> */}
            <div className="relative">
              {/* Background that animates behind active title & description */}
              <div
                ref={backgroundRef}
                className="absolute left-0 w-full bg-white rounded-lg transition-all"
              />
              {titles.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (titleRefs.current[index] = el)}
                  className="relative z-10 p-4 mb-1 cursor-pointer rounded-lg transition-all"
                  onClick={() => handleTitleClick(index)}
                >
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="w-1/2 relative">
            <Image
              ref={imageRef}
              src={titles[activeIndex].image}
              alt={titles[activeIndex].title}
              width={800}
              height={800}
              className="w-full h-[500px] opacity-1 object-cover transition-opacity duration-300 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCarousel;
