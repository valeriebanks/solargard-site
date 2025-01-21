import Image from "next/image";
import CloakingFAQS from "../components/FAQs/cloaking-faqs";
import CasperHeroImg from "/public/images/casper-imgs/Casper-hero-img-min.jpg";
import EnvelopeImg from "/public/images/casper-imgs/EnvelopeB.png";
import ContactUs from "../components/shared-compontents/Contact-Us";
import OurServiceCarousel from "../components/shared-compontents/our-services-carousel";
import Footer from "../components/shared-compontents/Footer";

export default function CasperPage() {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="relative">
          <Image
            src={CasperHeroImg}
            alt="Solar Gard Vehicle Wrapping"
            sizes="100vw"
            placeholder="blur"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            className="h-[70vh] bg-bottom"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
            <h2 className="text-white text-center xxl:text-8xl xl:text-8xl lg:text-7xl md:text-3xl sm:text-5xl font-bold">
              Casper&#8482; Cloaking
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-grey antialiased">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-40 xl:py-32 lg:py-24 md:py-24 sm:py-12 mx-auto">
          <div>
            <h1 className="text-secondary font-medium xxl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg">
              In today&rsquo;s modern workplaces, data security and privacy are
              essential. Casper Cloaking Film is an innovative architectural
              film designed to obscure digital screens from outside view while
              keeping the glass clear and open. Perfect for meeting rooms,
              offices, and collaborative environments, it ensures sensitive
              information remains protected while promoting transparency and
              collaboration.
            </h1>
          </div>
        </div>
        <div className="bg-grey xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 xxl:py-56 xl:py-40 lg:py-36 md:py-24 sm:py-12 mx-auto">
          <video
            className="w-full aspect-video rounded-lg"
            src="https://caspercloaking.eu/Casper_Boomerang_Final.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <h3 className="text-secondary font-bold xxl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-base mt-4 antialiased">
            Casper&#8482; Cloaking Film selectively blocks LED and LCD light
            emitted from screens, making the display invisible from outside the
            glass. This allows passersby to see a clear, open space while
            completely obscuring any digital information.
          </h3>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 md:gap-8 sm:gap-4 lg:mt-16 md:mt-8 sm:mt-6">
            <div className="border-b-1 border-slate-400 pb-6">
              <h6 className="font-bold text-secondary lg:text-xl">
                Enhanced Data Privacy
              </h6>
              <p className="font-medium text-textLightGray lg:text-base md:text-base sm:text-sm">
                Casper Cloaking Film acts as a shield, blocking the visibility
                of digital screens from outside, ensuring confidential data
                remains secure while maintaining the open feel of glass
                partitions.
              </p>
            </div>
            <div className="border-b-1 border-slate-400 pb-6">
              <h6 className="font-bold text-secondary lg:text-xl">
                Modern Aesthetic
              </h6>
              <p className="font-medium text-textLightGray lg:text-base md:text-base sm:text-sm">
                The film seamlessly integrates with contemporary office designs,
                offering a clean, professional look without obstructing
                visibility through glass.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-16 md:gap-8 sm:gap-4 lg:mt-6 md:mt-8 sm:mt-6">
            <div className="border-b-1 border-slate-400 pb-6">
              <h6 className="font-bold text-secondary lg:text-xl">
                Promotes Collaboration
              </h6>
              <p className="font-medium text-textLightGray lg:text-base md:text-base sm:text-sm">
                Employees can work freely and collaborate effectively, knowing
                that their screen information is not visible to unintended
                audiences.
              </p>
            </div>
            <div className="border-b-1 border-slate-400 pb-6">
              <h6 className="font-bold text-secondary lg:text-xl">
                Eco-Friendly Solution
              </h6>
              <p className="font-medium text-textLightGray lg:text-base md:text-base sm:text-sm">
                Casper Cloaking Film is a sustainable privacy solution, reducing
                the need for heavy curtains or blinds while maintaining the
                energy efficiency of glass walls.
              </p>
            </div>
          </div>
          <div className="bg-secondary lg:h-[18vh] md:h-[15vh] sm:h-[12vh] xs:h-[18vh] mt-[25%] relative overflow-visible rounded-lg">
            <div className="flex flex-row h-full">
              <div className="basis-3/5 lg:p-8 md:p-6 sm:p-2 lg:pl-16 md:pl-12 sm:pl-4">
                <h5 className="text-white font-semibold lg:text-4xl md:text-2xl sm:text-base">
                  Call us Today for Free Samples
                </h5>
                <h6 className="text-white font-semibold lg:mt-2 lg:text-3xl md:text-2xl sm:text-lg">
                  021 454 5606
                </h6>
              </div>
              <div className="basis-2/5 relative">
                <div className="absolute lg:right-20 md:right-20 sm:right-5 top-0 transform translate-y-[-15%]">
                  <Image
                    src={EnvelopeImg}
                    alt="Solar Gard Free Samples"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CloakingFAQS />
      </div>
      <div>
        <OurServiceCarousel />
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
