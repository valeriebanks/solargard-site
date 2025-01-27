"use client";
import { useEffect } from "react";

import HomeHero from "./components/heros/home-hero";
import HomeIntroText from "./components/Intro-texts/home-intro";
import OurServices from "./components/our-services-cards/card-services-animation";

import CompanyProfile from "./components/homepage/company-profile";
import GeneralFaqs from "./components/FAQs/general-faq";
import Testimonials from "./components/shared-compontents/testimonials";
import ContactUs from "./components/shared-compontents/Contact-Us";
import Footer from "./components/shared-compontents/Footer";
import ServiceCardGrid from "./components/homepage/service-cards";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <div>
        <HomeHero />
      </div>
      <div>
        <HomeIntroText />
      </div>
      <div>
        <ServiceCardGrid />
      </div>
      <div>
        <CompanyProfile />
      </div>
      <div>
        <GeneralFaqs />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
