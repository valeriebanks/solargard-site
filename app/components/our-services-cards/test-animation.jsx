import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ children, bgColor }) => (
  <div
    className="h-screen w-full flex items-center justify-center text-4xl text-white absolute top-0 left-0"
    style={{ backgroundColor: bgColor }}
  >
    {children}
  </div>
);

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = gsap.utils.toArray(container.children);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => "+=" + (cards.length - 1) * 100 + "%",
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        markers: true, // Remove this in production
      },
    });

    cards.forEach((card, i) => {
      if (i > 0) {
        tl.fromTo(
          card,
          { yPercent: 100, opacity: 1 },
          { yPercent: 0, opacity: 1 }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-center">
          Scroll down for cards
        </h1>
      </div>
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        <Card bgColor="#212332">
          <div className="w-9/12 relative py-12">
            <img
              className="bg-top rounded-lg bg-contain"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
            />
            <div className="absolute">
              <h2>Card 1</h2>
            </div>
          </div>
        </Card>
        <Card>
          <div className="w-9/12 relative py-12">
            <img
              className="bg-top rounded-lg bg-contain"
              src="/images/card-service-imgs/solar-films-card-service-img-min.jpg"
            />
            <div className="absolute">
              <h2>Card 1</h2>
            </div>
          </div>
        </Card>
        <Card bgColor="#45b7d1">
          <h2>Card 3</h2>
        </Card>
        <Card bgColor="#f7b731">
          <h2>Card 4</h2>
        </Card>
        <Card bgColor="#5f27cd">
          <h2>Card 5</h2>
        </Card>
        <Card bgColor="#16a085">
          <h2>Card 6</h2>
        </Card>
      </div>
    </div>
  );
}
