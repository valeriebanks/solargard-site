"use client";
import { useEffect } from "react";

import HomeHero from "./components/heros/home-hero";
import HomeIntroText from "./components/Intro-texts/home-intro";

import CompanyProfile from "./components/homepage/company-services";
import GeneralFaqs from "./components/FAQs/general-faq";
import Testimonials from "./components/shared-compontents/testimonials";
import ContactUs from "./components/shared-compontents/Contact-Us";
import Footer from "./components/shared-compontents/Footer";
import ServiceCardGrid from "./components/homepage/service-cards";
import CompanyServices from "./components/homepage/company-services";
import OurCompanyProfile from "./components/homepage/company-profile";
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
        <OurCompanyProfile />
      </div>
      <div>
        <CompanyServices />
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
