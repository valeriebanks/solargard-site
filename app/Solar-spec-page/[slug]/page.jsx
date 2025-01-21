"use client";
import { solarFilmsData } from "@/app/Data-Sheets/Solar-Films-Data";
import { Progress } from "@nextui-org/progress";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeroSolarFilmImg from "/public/images/solar-films-imgs/hero-solar-film-min.jpg";
import ContactUs from "@/app/components/shared-compontents/Contact-Us";
import Footer from "@/app/components/shared-compontents/Footer";

export default function SolarFilmPage({ params }) {
  // Decode the URL-encoded slug
  const decodedSlug = decodeURIComponent(params.slug);

  // Find the product that matches the decoded slug
  const product = solarFilmsData.find((item) => item.slug === decodedSlug);

  // For debugging
  // console.log("Decoded Slug:", decodedSlug);
  // console.log("Found Product:", product);
  // console.log(
  //   "Available Products:",
  //   solarFilmsData.map((p) => p.slug)
  // );

  // If no product is found, show 404

  const handleDownload = () => {
    // Open the Dropbox link in a new window
    window.open(product.PDFDownloadLink, "_blank");
  };

  return (
    <div className="antialiased">
      <div className="w-full h-[70vh] relative">
        <div>
          <Image
            src={HeroSolarFilmImg}
            alt="Solar Gard Solar films"
            quality={100}
            placeholder="blur"
            sizes="100vw"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white font-bold xxl:text-6xl lg:text-8xl sm:text-6xl text-center">
            {product.name}
          </p>
        </div>
      </div>
      <div className="bg-secondary w-full lg:py-36 lg:px-16 md:py-16 md:px-6 sm:py-16 sm:px-2">
        <div className="lg:w-8/12 sm:w-11/12 mx-auto">
          <p className="text-white text-center font-medium xxl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-base">
            {product.filmDescription}
          </p>
          <div className="text-center lg:mt-16 md:mt-8 sm:mt-6">
            <button
              onClick={handleDownload}
              className="outline outline-offset-2 outline-1 outline-white text-white font-semibold rounded-sm py-2 px-10 hover:bg-white hover:text-secondary"
            >
              Download Data Sheet
            </button>
          </div>
        </div>
      </div>
      <div className="bg-grey">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-9/12 md:w-9/12 sm:w-11/12 mx-auto py-24">
          <div className="grid lg:grid-cols-2 lg:gap-16 md:gap-8 sm:gap-6">
            <div>
              <div className="w-full">
                {/* Energy Rejection details */}
                <div className="flex w-full justify-between">
                  <div className="inline-flex items-center">
                    <span>
                      <SunRejection />
                    </span>
                    <h6 className="lg:text-lg text-secondary font-semibold pl-2">
                      Total Solar Energy Rejected
                    </h6>
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary">
                      {product.EnergyRejectedValue}%
                    </h5>
                  </div>
                </div>
                <div className="flex flex-col mt-3 w-full bg-zinc-300 rounded-lg max-w-md">
                  <Progress
                    size="lg"
                    aria-label="Loading..."
                    color="secondary"
                    className="h-2"
                    value={product.EnergyRejectedValue}
                  />
                </div>
                <div className="border-b-2 border-slate-400 mt-6"></div>
              </div>
            </div>
            <div>
              <div className="w-full">
                {/* light Transission details */}
                <div className="flex w-full justify-between">
                  <div className="inline-flex items-center">
                    <span>
                      <LightTransmission />
                    </span>
                    <h6 className="lg:text-lg text-secondary font-semibold pl-2">
                      Visible Light Transmission
                    </h6>
                  </div>
                  <div>
                    <h5 className="font-bold text-secondary">
                      {product.VisibleLightTransmission}
                    </h5>
                  </div>
                </div>
                <div className="flex flex-col mt-3 w-full bg-zinc-300 rounded-lg max-w-md">
                  <Progress
                    size="lg"
                    aria-label="Loading..."
                    color="secondary"
                    className="h-2"
                    value={product.VisibleLightTransValue}
                  />
                </div>
                <div className="border-b-2 border-slate-500 mt-6"></div>
              </div>
            </div>
          </div>
          {/* Warranty and Fir Rating details */}
          <div className="grid lg:grid-cols-2 lg:gap-16 md:gap-8 sm:gap-6">
            <div>
              <ul className="inline-flex items-center pt-6">
                <li>
                  <WarrantyIcon />
                </li>
                <li className="pl-6">
                  <h6 className="lg:text-xl font-bold text-secondary">
                    Warranty
                  </h6>
                  <p className="lg:text-base font-semibold text-secondary">
                    {product.warranty}
                  </p>
                </li>
              </ul>
              <div className="border-b-2 border-slate-500 mt-6"></div>
            </div>
            <div>
              <div>
                <ul className="inline-flex items-center lg:pt-6">
                  <li>
                    <FireRatingIcon />
                  </li>
                  <li className="pl-6">
                    <h6 className="lg:text-xl font-bold text-secondary">
                      Fire-Resistance Rating
                    </h6>
                    <p className="lg:text-base font-semibold text-secondary">
                      {product.fireRating}
                    </p>
                  </li>
                </ul>
                <div className="border-b-2 border-slate-500 mt-6"></div>
              </div>
            </div>
          </div>
          {/* Storage and Widths details */}
          <div className="grid lg:grid-cols-2 lg:gap-16 md:gap-8 sm:gap-6">
            <div>
              <ul className="inline-flex items-center pt-6">
                <li>
                  <BoxIcon />
                </li>
                <li className="pl-6">
                  <h6 className="lg:text-xl font-bold text-secondary">
                    Storage From -5°C To +40°C
                  </h6>
                  <p className="lg:text-base font-semibold text-secondary">
                    {product.storage}
                  </p>
                </li>
              </ul>
              <div className="border-b-2 border-slate-500 mt-6"></div>
            </div>
            <div>
              <ul className="inline-flex items-center lg:pt-6">
                <li>
                  <WidthIcon />
                </li>
                <li className="pl-6">
                  <h6 className="lg:text-xl font-bold text-secondary">
                    Widths Available
                  </h6>
                  <p className="lg:text-base font-semibold text-secondary">
                    {product.widths}
                  </p>
                </li>
              </ul>
              <div className="border-b-2 border-slate-500 mt-6"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Technical Datasheet And Installation Advice Section */}
      <div className="bg-grey pb-44">
        <div className="xxl:w-8/12 xl:w-8/12 lg:w-10/12 md:w-9/12 sm:w-11/12 mx-auto lg:py-24 antialiased">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-lg py-6 px-8">
              <h5 className="font-semibold text-secondary lg:text-xl md:text-lg sm:text-xl">
                Technical Datasheet
              </h5>
              <p className="font-normal text-secondary text-sm sm:text-xs pt-1">
                Data from a product applied to a clear 3 mm glass (* on double
                glazing 4-16-4)
              </p>
              <div className="flex justify-between my-4 pb-4 mt-8 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Ultraviolet Transmission</h6>
                </div>
                <div>
                  <span>{product.UltravioletTransmission}</span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Visible Light Transmission</h6>
                </div>
                <div>
                  <span>{product.VisibleLightTransmission}</span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Reflection Of External Visible Light</h6>
                </div>
                <div>
                  <span>{product.ReflectionExternalVisibleLight}</span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Reflection Of Internal Visible Light</h6>
                </div>
                <div>
                  <span>{product.ReflectionInternalVisibleLight}</span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Total Solar Energy Rejected</h6>
                </div>
                <div>
                  <span>{product.TotalSolarEnergyRejected}</span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Total Solar Energy Rejected 2*</h6>
                </div>
                <div>
                  <span>{product.TotalSolarEnergyRejected2}</span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Reduction In Solar Glare</h6>
                </div>
                <div>
                  <span>{product.ReductionInSolarGlare}</span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>G-Value</h6>
                </div>
                <div>
                  <span>{product.GValue}</span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Shading Coefficient</h6>
                </div>
                <div>
                  <span>{product.ShadingCoefficient}</span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Installation Type</h6>
                </div>
                <div>
                  <span>{product.InstallationType}</span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Film Composition</h6>
                </div>
                <div>
                  <span>{product.FilmComposition}</span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Thickness</h6>
                </div>
                <div>
                  <span>{product.Thickness}</span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Colour From The Outside</h6>
                </div>
                <div>
                  <span>{product.ColourFromTheOutside}</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg py-6 px-8">
              <h5 className="font-semibold text-secondary lg:text-xl md:text-lg sm:text-xl">
                Installation Advice
              </h5>
              <p className="font-normal text-secondary lg:text-sm md:text-sm sm:text-xs pt-1">
                Vertical position and standard glass surface**
              </p>
              <div className="flex justify-between my-4 pb-4 mt-8 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Clear Single Pane</h6>
                </div>
                <div>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src={product.ClearSinglePane}
                      alt="mark icon"
                    />
                  </span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Tinted Single Pane</h6>
                </div>
                <div>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src={product.TintedSinglePane}
                      alt="mark icon"
                    />
                  </span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Reflective Tinted Single Pane</h6>
                </div>
                <div>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src={product.ReflectiveTintedSinglePane}
                      alt="mark icon"
                    />
                  </span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Clear Double Pane</h6>
                </div>
                <div>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src={product.ClearDoublePane}
                      alt="mark icon"
                    />
                  </span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Tinted Double Pane</h6>
                </div>
                <div>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src={product.TintedDoublePane}
                      alt="mark icon"
                    />
                  </span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Reflective Tinted Double Pane</h6>
                </div>
                <div>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src={product.ReflectiveTintedDoublePane}
                      alt="mark icon"
                    />
                  </span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Gas-Filled Double Pane - Low E</h6>
                </div>
                <div>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src={product.GasFilledDoublePane}
                      alt="mark icon"
                    />
                  </span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Stadip Ext. Clear Double Pane</h6>
                </div>
                <div>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src={product.StadipExtClearDoublePane}
                      alt="mark icon"
                    />
                  </span>
                </div>
              </div>
              <div className="flex justify-between my-4 pb-4 font-medium text-secondary lg:text-sm md:text-sm sm:text-xs border-b-1 border-slate-400">
                <div>
                  <h6>Stadip Int. Clear Double Pane</h6>
                </div>
                <div>
                  <span>
                    <Image
                      width={20}
                      height={20}
                      src={product.StadipIntClearDoublePane}
                      alt="mark icon"
                    />
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <ul className="inline-flex items-center font-semibold text-secondary lg:text-sm md:text-sm sm:text-xs align-middle">
                  <li>
                    <span>
                      <TickMarlIcon />
                    </span>
                  </li>
                  <li>
                    <h6 className="pl-1">Yes</h6>
                  </li>
                </ul>
                <ul className="inline-flex items-center font-semibold text-secondary lg:text-sm md:text-sm sm:text-xs align-middle pl-4">
                  <li>
                    <span>
                      <NoIcon />
                    </span>
                  </li>
                  <li>
                    <h6 className="pl-2">Not Recommended</h6>
                  </li>
                </ul>
                <ul className="inline-flex items-center font-semibold text-secondary lg:text-sm md:text-sm sm:text-xs align-middle pl-4">
                  <li>
                    <span>
                      <CautionIcon />
                    </span>
                  </li>
                  <li>
                    <h6 className="pl-2">Caution</h6>
                  </li>
                </ul>
                <p className="text-xs font-normal text-secondary mt-8">
                  \*Recommendations provided on the basis of a glazed surface
                  covering up to 2.5m², contact us for definitive details or to
                  obtain a thermal chock analysis report.
                </p>
              </div>
            </div>
          </div>
        </div>
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

// Helper Components
const SpecItem = ({ title, value }) => (
  <div className="border-b pb-2">
    <p className="text-gray-600 text-sm">{title}</p>
    <p className="font-medium">{value}</p>
  </div>
);

const CompatibilityItem = ({ label }) => (
  <div className="flex items-center gap-2 bg-white p-3 rounded-lg">
    <Image
      src="/images/solar-films-imgs/tickmark.svg"
      alt="Compatible"
      width={20}
      height={20}
    />
    <span className="text-sm">{label}</span>
  </div>
);

function SunRejection() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0003 6.41699C9.81899 6.41699 6.41699 9.81899 6.41699 14.0003C6.41699 18.1817 9.81899 21.5837 14.0003 21.5837C18.1817 21.5837 21.5837 18.1817 21.5837 14.0003C21.5837 9.81899 18.1817 6.41699 14.0003 6.41699ZM14.5837 20.3872V7.61283C17.8492 7.90916 20.417 10.6584 20.417 13.9997C20.417 17.3411 17.8492 20.0915 14.5837 20.3872Z"
        fill="#505050"
      />
      <path
        d="M14.0003 4.66667C14.3229 4.66667 14.5837 4.40533 14.5837 4.08333V0.583333C14.5837 0.261333 14.3229 0 14.0003 0C13.6777 0 13.417 0.261333 13.417 0.583333V4.08333C13.417 4.40533 13.6777 4.66667 14.0003 4.66667Z"
        fill="#505050"
      />
      <path
        d="M14.0003 23.333C13.6777 23.333 13.417 23.5943 13.417 23.9163V27.4163C13.417 27.7383 13.6777 27.9997 14.0003 27.9997C14.3229 27.9997 14.5837 27.7383 14.5837 27.4163V23.9163C14.5837 23.5943 14.3229 23.333 14.0003 23.333Z"
        fill="#505050"
      />
      <path
        d="M8.53657 5.70399C8.64507 5.89124 8.84049 5.99566 9.04232 5.99566C9.14149 5.99566 9.24182 5.97057 9.33341 5.91749C9.61282 5.75649 9.70849 5.39949 9.54691 5.12066L7.79691 2.08966C7.63532 1.81024 7.27774 1.71516 7.00007 1.87616C6.72066 2.03716 6.62499 2.39416 6.78657 2.67299L8.53657 5.70399Z"
        fill="#505050"
      />
      <path
        d="M19.4639 22.2967C19.3029 22.0173 18.9447 21.9222 18.6671 22.0832C18.3876 22.2442 18.292 22.6012 18.4536 22.88L20.2036 25.911C20.3121 26.0983 20.5075 26.2027 20.7093 26.2027C20.8085 26.2027 20.9088 26.1776 21.0004 26.1245C21.2798 25.9635 21.3755 25.6065 21.2139 25.3277L19.4639 22.2967Z"
        fill="#505050"
      />
      <path
        d="M5.70386 8.53619L2.67286 6.78619C2.39345 6.62519 2.03703 6.72085 1.87603 6.99969C1.71503 7.27852 1.8107 7.63552 2.08953 7.79652L5.12053 9.54652C5.21211 9.5996 5.31245 9.62469 5.41161 9.62469C5.61345 9.62469 5.80945 9.52027 5.91736 9.33302C6.07836 9.0536 5.9827 8.69719 5.70386 8.53619Z"
        fill="#505050"
      />
      <path
        d="M25.9109 20.2032L22.8799 18.4532C22.6011 18.2922 22.2441 18.3878 22.0831 18.6667C21.9221 18.9455 22.0177 19.3025 22.2966 19.4635L25.3276 21.2135C25.4191 21.2666 25.5195 21.2917 25.6186 21.2917C25.8205 21.2917 26.0165 21.1873 26.1244 21C26.2854 20.7206 26.1897 20.3642 25.9109 20.2032Z"
        fill="#505050"
      />
      <path
        d="M4.66667 14.0003C4.66667 13.6783 4.40592 13.417 4.08333 13.417H0.583333C0.26075 13.417 0 13.6783 0 14.0003C0 14.3223 0.26075 14.5837 0.583333 14.5837H4.08333C4.40592 14.5837 4.66667 14.3223 4.66667 14.0003Z"
        fill="#505050"
      />
      <path
        d="M27.4163 13.417H23.9163C23.5938 13.417 23.333 13.6783 23.333 14.0003C23.333 14.3223 23.5938 14.5837 23.9163 14.5837H27.4163C27.7389 14.5837 27.9997 14.3223 27.9997 14.0003C27.9997 13.6783 27.7389 13.417 27.4163 13.417Z"
        fill="#505050"
      />
      <path
        d="M5.11994 18.4536L2.08894 20.2036C1.80952 20.3646 1.71386 20.7216 1.87544 21.0004C1.98394 21.1876 2.17936 21.2921 2.38119 21.2921C2.48036 21.2921 2.58069 21.267 2.67227 21.2139L5.70327 19.4639C5.98269 19.3029 6.07836 18.9459 5.91677 18.6671C5.75519 18.3876 5.39761 18.292 5.11994 18.4536Z"
        fill="#505050"
      />
      <path
        d="M22.5892 9.62481C22.6884 9.62481 22.7887 9.59973 22.8803 9.54665L25.9113 7.79665C26.1907 7.63565 26.2864 7.27865 26.1248 6.99981C25.9632 6.7204 25.6056 6.62531 25.3279 6.78631L22.2969 8.53631C22.0175 8.69731 21.9219 9.05431 22.0834 9.33315C22.1919 9.5204 22.3874 9.62481 22.5892 9.62481Z"
        fill="#505050"
      />
      <path
        d="M9.33302 22.0834C9.0536 21.9219 8.69719 22.0175 8.53619 22.2969L6.78619 25.3279C6.62519 25.6074 6.72085 25.9638 6.99969 26.1248C7.09127 26.1779 7.1916 26.2029 7.29077 26.2029C7.4926 26.2029 7.6886 26.0985 7.79652 25.9113L9.54652 22.8803C9.70752 22.6009 9.61185 22.2444 9.33302 22.0834Z"
        fill="#505050"
      />
      <path
        d="M18.6667 5.91749C18.7583 5.97057 18.8586 5.99566 18.9578 5.99566C19.1596 5.99566 19.3556 5.89124 19.4635 5.70399L21.2135 2.67299C21.3745 2.39357 21.2788 2.03716 21 1.87616C20.7212 1.71516 20.3642 1.81024 20.2032 2.08966L18.4532 5.12066C18.2922 5.40007 18.3878 5.75649 18.6667 5.91749Z"
        fill="#505050"
      />
    </svg>
  );
}

function LightTransmission() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.621 7.34439C20.6325 7.35329 20.6426 7.36346 20.6528 7.37364C24.3729 11.0936 24.3638 17.142 20.6325 20.8733C16.901 24.6046 10.8511 24.6134 7.13228 20.8949C7.11193 20.8746 7.09412 20.8542 7.07886 20.8326C3.46199 17.0951 3.49878 11.1216 7.19078 7.42963C10.893 3.7276 16.8856 3.69956 20.621 7.34439ZM20.2611 8.52457L8.28071 20.5045C11.6013 23.4321 16.6872 23.2998 19.872 20.1153C23.0568 16.9309 23.1889 11.8467 20.2611 8.52457ZM13.6427 0.357376C13.6427 0.160254 13.8029 0 14.0001 0C14.1972 0 14.3575 0.160241 14.3575 0.357376V2.75971C14.3575 2.95683 14.1972 3.11708 14.0001 3.11708C13.803 3.11708 13.6427 2.95684 13.6427 2.75971V0.357376ZM3.19222 4.20689C3.05232 4.067 3.05232 3.84063 3.19222 3.70073C3.33211 3.56084 3.55849 3.56084 3.6984 3.70073L6.37554 6.37777C6.51544 6.51767 6.51544 6.74404 6.37554 6.88393C6.23565 7.02383 6.00927 7.02383 5.86936 6.88393L3.19222 4.20689ZM23.794 3.70073C23.9339 3.56084 24.1602 3.56084 24.3001 3.70073C24.44 3.84062 24.44 4.06699 24.3001 4.20689L21.623 6.88393C21.4831 7.02383 21.2567 7.02383 21.1168 6.88393C20.9769 6.74404 20.9769 6.51767 21.1168 6.37777L23.794 3.70073ZM0.357389 14.3579C0.16026 14.3579 0 14.1976 0 14.0005C0 13.8034 0.160247 13.6431 0.357389 13.6431H2.75981C2.95694 13.6431 3.1172 13.8034 3.1172 14.0005C3.1172 14.1976 2.95696 14.3579 2.75981 14.3579H0.357389ZM13.6427 25.2403C13.6427 25.0432 13.8029 24.8829 14.0001 24.8829C14.1972 24.8829 14.3575 25.0432 14.3575 25.2403V27.6426C14.3575 27.8397 14.1972 28 14.0001 28C13.803 28 13.6427 27.8398 13.6427 27.6426V25.2403ZM21.3817 22.3967C21.2418 22.2568 21.2418 22.0304 21.3817 21.8905C21.5216 21.7506 21.748 21.7506 21.8879 21.8905L24.2992 24.3017C24.4391 24.4416 24.4391 24.668 24.2992 24.8079C24.1593 24.9478 23.9329 24.9478 23.793 24.8079L21.3817 22.3967ZM5.60379 21.8905C5.74369 21.7506 5.97007 21.7506 6.10997 21.8905C6.24987 22.0304 6.24987 22.2568 6.10997 22.3967L3.69866 24.8079C3.55876 24.9478 3.33238 24.9478 3.19248 24.8079C3.05258 24.668 3.05258 24.4416 3.19248 24.3017L5.60379 21.8905ZM25.2402 14.3578C25.0431 14.3578 24.8828 14.1976 24.8828 14.0005C24.8828 13.8033 25.043 13.6431 25.2402 13.6431H27.6426C27.8397 13.6431 28 13.8033 28 14.0005C28 14.1976 27.8398 14.3578 27.6426 14.3578H25.2402Z"
        fill="#505050"
      />
    </svg>
  );
}

function WarrantyIcon() {
  return (
    <svg
      width="32"
      height="40"
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9945 5.0338C9.8638 5.0338 4.87782 10.2184 4.87782 16.5952C4.87782 22.9701 9.8638 28.1547 15.9945 28.1547C22.1233 28.1547 27.1111 22.9701 27.1111 16.5952C27.1111 10.2203 22.1233 5.0338 15.9945 5.0338ZM15.9945 27.0319C10.4594 27.0319 5.95756 22.3506 5.95756 16.5952C5.95756 10.8398 10.4596 6.15655 15.9945 6.15655C21.5294 6.15655 26.0314 10.8379 26.0314 16.5952C26.0314 22.3508 21.5294 27.0319 15.9945 27.0319ZM31.0879 14.4977C30.7442 14.1834 30.5534 13.7399 30.5534 13.2516C30.5534 12.9915 30.6074 12.737 30.7118 12.5162C30.8935 12.127 30.9853 11.7173 30.9853 11.2981C30.9853 10.1044 30.2565 9.04166 29.1733 8.65248C28.5309 8.42234 28.0973 7.78804 28.0973 6.97414C28.1405 6.19952 27.8832 5.46043 27.3703 4.89542C26.8593 4.33409 26.1431 4.01038 25.4018 4.01038H25.1481C24.4643 4.01038 23.8544 3.55946 23.633 2.89151C23.1274 1.36846 21.3532 0.569506 19.9227 1.28986C19.2659 1.61355 18.4814 1.45451 18.01 0.89694C16.9789 -0.296801 15.0212 -0.302405 13.9812 0.900682C13.5223 1.44328 12.6766 1.5967 12.0756 1.29174C10.6361 0.565777 8.86735 1.36845 8.35991 2.89147C8.13678 3.56129 7.52859 4.01034 6.74587 4.01221C6.00631 3.97105 5.29015 4.23487 4.74678 4.76998C4.20695 5.2995 3.89744 6.04605 3.89744 6.81503V7.07698C3.89744 7.78799 3.46379 8.42227 2.82143 8.65243C1.73819 9.04161 1.00945 10.1063 1.00945 11.2981C1.00945 11.7172 1.10122 12.127 1.28296 12.518C1.38553 12.7369 1.4395 12.9895 1.4395 13.2534C1.4395 13.7417 1.25057 14.1852 0.903272 14.5033C0.329267 15.0402 0 15.8036 0 16.597C0 17.3903 0.329285 18.1537 0.908707 18.6944C1.25239 19.0088 1.4413 19.4503 1.4413 19.9387C1.4413 20.2006 1.38732 20.4551 1.28296 20.674C1.10122 21.0632 1.00945 21.473 1.00945 21.8921C1.00945 23.0859 1.73818 24.1486 2.82143 24.5378C3.46559 24.7679 3.89744 25.4022 3.89924 26.2161C3.85605 26.9907 4.11516 27.7298 4.62797 28.2948C5.04543 28.7551 5.60324 29.0433 6.19701 29.1368L2.51367 35.7751C2.41111 35.9585 2.41831 36.1886 2.52987 36.3645C2.64323 36.5423 2.83756 36.6396 3.0445 36.6115L6.67923 36.155L8.12233 39.6595C8.2033 39.8559 8.38324 39.9869 8.58657 40H8.61895C8.81149 40 8.98963 39.8933 9.08678 39.7193L13.4305 31.8945C13.6374 31.9881 13.8318 32.1097 13.9865 32.2931C14.5029 32.89 15.2352 33.2323 15.9982 33.2323C16.7612 33.2323 17.4953 32.8899 18.0135 32.2912C18.1647 32.1135 18.3572 31.9918 18.5695 31.8964L22.9114 39.7193C23.0086 39.8933 23.1867 40 23.3792 40H23.4116C23.615 39.9869 23.7949 39.8559 23.8759 39.6594L25.319 36.1549L28.9537 36.6115C29.1534 36.6395 29.3568 36.5404 29.4683 36.3645C29.5817 36.1867 29.5871 35.9585 29.4863 35.7751L25.8102 29.1516C26.3446 29.0674 26.8448 28.8204 27.2515 28.4219C27.7913 27.8924 28.1026 27.1458 28.1026 26.3769V26.1149C28.1026 25.4039 28.5363 24.7696 29.1786 24.5395C30.2619 24.1503 30.9906 23.0875 30.9906 21.8938C30.9906 21.4747 30.8988 21.0649 30.7171 20.6757C30.6145 20.4549 30.5587 20.2005 30.5587 19.9404C30.5587 19.4521 30.7477 19.0105 31.0913 18.6961C31.0949 18.6942 31.0949 18.6924 31.0967 18.6924C31.6707 18.1554 32 17.392 32 16.6005C32 15.8072 31.6707 15.0438 31.0931 14.5031L31.0879 14.4977ZM8.68732 38.1852L7.50873 35.3244C7.42236 35.1167 7.22622 34.9838 7.01211 34.9838C6.99052 34.9838 6.96892 34.9857 6.94733 34.9876L3.98375 35.3599L7.35758 29.2791C7.37018 29.2829 7.38457 29.2847 7.39897 29.2903C7.5969 29.3671 7.77324 29.4831 7.92437 29.629C7.95676 29.6589 7.98376 29.6945 8.01255 29.7263C8.1583 29.891 8.28425 30.0762 8.35803 30.2951C8.86367 31.8181 10.6342 32.6208 12.0755 31.893C12.1115 31.8743 12.1565 31.8799 12.1943 31.8649L8.68909 38.1818L8.68732 38.1852ZM25.0419 34.9876C24.808 34.9539 24.5759 35.0961 24.4805 35.3244L23.3019 38.1852L19.7841 31.8482C19.8273 31.865 19.8741 31.8763 19.9155 31.8968C21.3514 32.6209 23.1256 31.8183 23.6294 30.299C23.705 30.0763 23.8309 29.8892 23.9785 29.7246C24.0055 29.6928 24.0325 29.661 24.0613 29.6329C24.2142 29.4851 24.3923 29.3672 24.5903 29.2924C24.6029 29.2867 24.6172 29.2867 24.6298 29.2811L28.0037 35.3619L25.0401 34.9896L25.0419 34.9876ZM30.3716 17.8488C29.8011 18.3708 29.4737 19.1324 29.4737 19.9351C29.4737 20.3654 29.5672 20.7882 29.74 21.1625C29.8497 21.3964 29.9037 21.6415 29.9037 21.8903C29.9037 22.605 29.4683 23.2412 28.8205 23.4751C27.7408 23.8624 27.0175 24.9214 27.0175 26.1114V26.3734C27.0175 26.8355 26.8303 27.2827 26.5064 27.6026C26.1808 27.9226 25.7507 28.0891 25.3116 28.0554H25.1479C25.0399 28.0554 24.9392 28.0648 24.8312 28.076C23.8037 28.2051 22.9545 28.9142 22.6108 29.9302C22.3103 30.8395 21.2594 31.3279 20.3885 30.8863C20.2338 30.8078 20.0665 30.7516 19.8955 30.7067C19.8235 30.688 19.7498 30.6749 19.676 30.6637C19.55 30.6412 19.4277 30.6281 19.3053 30.6225C19.2711 30.6207 19.2405 30.6113 19.2064 30.6113C19.183 30.6113 19.174 30.6169 19.1524 30.6169C19.0174 30.6188 18.8933 30.6319 18.7763 30.6562C18.7601 30.6599 18.7295 30.6581 18.7133 30.6618C18.7097 30.6618 18.7061 30.6656 18.7007 30.6656C18.6935 30.6674 18.6827 30.6674 18.6755 30.6693C18.6629 30.673 18.6539 30.6824 18.6413 30.688C18.0818 30.8096 17.5815 31.0959 17.2 31.5412C16.5774 32.2597 15.4007 32.2578 14.7835 31.5431C14.384 31.0753 13.8622 30.7703 13.3062 30.6693C13.1695 30.6337 13.0075 30.6206 12.8384 30.6169C12.815 30.6169 12.8006 30.6094 12.7772 30.6094C12.7358 30.6094 12.698 30.6206 12.6566 30.6225C12.5433 30.6281 12.4317 30.6412 12.3166 30.6618C12.2392 30.6749 12.1618 30.688 12.0862 30.7086C11.9153 30.7535 11.7479 30.8096 11.5968 30.8863C10.7241 31.3279 9.67505 30.8396 9.37278 29.9283C9.0309 28.9161 8.18161 28.2051 7.15415 28.076H7.15235C7.15055 28.076 7.14875 28.0741 7.14515 28.0741C7.04619 28.0629 6.94542 28.0535 6.83745 28.0535H6.58554C6.14109 28.0535 5.71106 27.859 5.40335 27.5222C5.09746 27.1835 4.94091 26.7419 4.9679 26.2797V26.1114C4.9679 24.9213 4.24276 23.8623 3.1649 23.475C2.51531 23.2412 2.07986 22.605 2.07986 21.8902C2.07986 21.6414 2.13564 21.3963 2.24361 21.1643C2.41815 20.7938 2.50991 20.3691 2.50991 19.9369C2.50991 19.1323 2.18243 18.3708 1.61563 17.8525C1.26834 17.5288 1.07041 17.0704 1.07041 16.5951C1.07041 16.1199 1.27014 15.6615 1.61203 15.3415C2.18244 14.8195 2.50991 14.058 2.50991 13.2534C2.50991 12.8212 2.41815 12.3983 2.24361 12.0279C2.13385 11.7921 2.07806 11.547 2.07806 11.3C2.07806 10.5853 2.51351 9.94915 3.1631 9.71525C4.24275 9.32795 4.9661 8.26894 4.9661 7.07894V6.81699C4.9661 6.35484 5.15324 5.90767 5.47714 5.58771C5.80462 5.26776 6.23466 5.11059 6.67195 5.13491H6.83389C7.97831 5.13491 8.99674 4.38089 9.37101 3.2601C9.67331 2.35078 10.7152 1.85866 11.595 2.30398C12.6225 2.82225 14.0152 2.5547 14.78 1.64911C15.4026 0.930619 16.5793 0.932487 17.1965 1.64536C17.9846 2.57341 19.2946 2.84284 20.3832 2.30398C21.265 1.85679 22.3032 2.35075 22.6055 3.26009C22.9779 4.38275 23.9964 5.13491 25.1408 5.13491H25.3945C25.8389 5.13491 26.2708 5.3295 26.5767 5.6663C26.8826 6.00496 27.0373 6.44653 27.0121 6.90871C27.0103 6.91993 27.0103 7.06587 27.0103 7.0771C27.0103 8.26711 27.7337 9.32611 28.8133 9.71342C29.4611 9.9473 29.8966 10.5835 29.8966 11.2982C29.8966 11.5471 29.8408 11.7921 29.7328 12.026C29.5583 12.4002 29.4665 12.8231 29.4665 13.2516C29.4665 14.0561 29.794 14.8176 30.3626 15.336C30.7099 15.6596 30.9078 16.1181 30.9078 16.5933C30.9078 17.0667 30.7099 17.5251 30.3644 17.8488L30.3716 17.8488ZM22.5803 14.1872L18.3643 13.551L16.4786 9.57688C16.295 9.19332 15.6922 9.19332 15.5105 9.57688L13.6247 13.551L9.40878 14.1872C9.20545 14.2171 9.03631 14.3668 8.97333 14.5689C8.90855 14.7728 8.96254 14.9955 9.11009 15.1433L12.1618 18.2361L11.4421 22.6032C11.4079 22.8127 11.4907 23.0279 11.658 23.1514C11.7516 23.2225 11.8631 23.258 11.9747 23.258C12.0611 23.258 12.1474 23.2374 12.2248 23.1944L15.9963 21.1325L19.7678 23.1944C19.9514 23.2936 20.1709 23.2767 20.3364 23.1514C20.502 23.026 20.5847 22.8127 20.5506 22.6032L19.8308 18.2361L22.8808 15.1433C23.0283 14.9936 23.0805 14.7709 23.0175 14.5689C22.9545 14.3649 22.7854 14.2171 22.5821 14.1872L22.5803 14.1872ZM18.8717 17.6393C18.744 17.7684 18.6864 17.9536 18.717 18.137L19.3 21.6733L16.2446 20.0024C16.1655 19.9594 16.0809 19.9388 15.9945 19.9388C15.9081 19.9388 15.8218 19.9594 15.7444 20.0024L12.6891 21.6733L13.272 18.137C13.3026 17.9555 13.2433 17.7684 13.1173 17.6393L10.6467 15.1339L14.062 14.6194C14.2383 14.5932 14.3895 14.479 14.4686 14.3125L15.9963 11.0943L17.524 14.3125C17.6032 14.479 17.7543 14.5932 17.9306 14.6194L21.3459 15.1339L18.8753 17.6393H18.8717Z"
        fill="#5E5E5E"
      />
    </svg>
  );
}

function FireRatingIcon() {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.204 13.71C25.9866 12.4926 24.4442 11.6034 22.716 11.1839V5.148C22.716 4.974 22.614 4.812 22.44 4.734L11.532 0.0360022C11.424 -0.0120007 11.298 -0.0120007 11.178 0.0360022L0.294001 4.728C0.12 4.794 0 4.956 0 5.148V15C0 18.996 1.2 22.098 2.952 24.438C5.25 27.498 8.49 29.244 11.232 29.982C11.31 30.006 11.388 30.006 11.472 29.982C12.132 29.808 12.816 29.574 13.512 29.28C14.0729 29.0366 14.643 28.7557 15.2102 28.4295C16.714 29.4221 18.5173 30 20.454 30C23.094 30 25.476 28.932 27.204 27.204C28.932 25.476 30 23.094 30 20.454C30 17.82 28.932 15.432 27.204 13.71ZM18.978 11.0278C16.9342 11.3453 15.1039 12.3113 13.71 13.71C11.982 15.432 10.914 17.82 10.914 20.454C10.914 22.386 11.4865 24.1793 12.4705 25.6798C12.3467 25.7274 12.22 25.7726 12.072 25.836C11.838 25.932 11.598 26.028 11.358 26.112C10.47 25.8 9.606 25.374 8.808 24.858C7.98 24.318 7.224 23.682 6.57 22.962C5.604 21.894 4.908 20.7 4.452 19.416C3.954 18.036 3.732 16.548 3.732 15V7.308L11.358 4.026L18.978 7.308V11.0278ZM14.418 27.846C13.998 28.074 13.578 28.272 13.158 28.452C12.546 28.71 11.94 28.92 11.358 29.082C8.796 28.374 5.796 26.736 3.672 23.898C2.028 21.702 0.9 18.78 0.9 15V5.448L11.358 0.942001L21.816 5.448V11.01C21.7879 11.0063 21.7606 11.0029 21.7328 10.9993C21.6965 10.9944 21.6602 10.9897 21.6237 10.9853C21.6124 10.9839 21.6009 10.9827 21.5895 10.9814C21.2172 10.9373 20.8385 10.914 20.454 10.914C20.3996 10.914 20.3436 10.9149 20.2867 10.9161C20.1497 10.9185 20.0135 10.9237 19.878 10.9318V7.014C19.878 6.822 19.758 6.66 19.59 6.594L11.532 3.126C11.418 3.072 11.286 3.078 11.178 3.126L3.108 6.6C2.934 6.672 2.832 6.84 2.832 7.014V15C2.832 16.644 3.072 18.234 3.606 19.722C4.098 21.108 4.854 22.404 5.904 23.568C6.606 24.342 7.428 25.026 8.322 25.608C9.228 26.196 10.206 26.676 11.214 27.012C11.31 27.048 11.412 27.048 11.502 27.012C11.814 26.91 12.12 26.79 12.426 26.658C12.612 26.58 12.804 26.49 12.99 26.4C13.0169 26.4335 13.0448 26.4662 13.0721 26.4993C13.0877 26.5184 13.1034 26.5373 13.1192 26.5562C13.1515 26.5949 13.184 26.6334 13.2168 26.6717C13.2471 26.7069 13.2779 26.7417 13.3087 26.7765C13.3359 26.8073 13.3629 26.8382 13.3904 26.8685C13.4271 26.909 13.4646 26.9488 13.502 26.9886C13.5537 27.0437 13.6059 27.0978 13.6586 27.1514C13.6758 27.1688 13.6927 27.1867 13.71 27.204C13.7174 27.2114 13.7251 27.2186 13.7325 27.2261C13.7471 27.2405 13.7613 27.2557 13.776 27.27C13.9573 27.4513 14.1485 27.6226 14.3446 27.785C14.3686 27.8051 14.3926 27.8251 14.4168 27.845C14.4172 27.8453 14.4176 27.8457 14.418 27.846ZM26.568 26.568C25.002 28.134 22.842 29.1 20.454 29.1C18.072 29.1 15.906 28.134 14.346 26.568C12.78 25.002 11.814 22.842 11.814 20.454C11.814 18.072 12.78 15.906 14.346 14.346C15.906 12.78 18.072 11.814 20.454 11.814C22.842 11.814 25.002 12.78 26.568 14.346C28.134 15.906 29.1 18.072 29.1 20.454C29.1 22.842 28.134 25.002 26.568 26.568Z"
        fill="#5E5E5E"
      />
      <path
        d="M24.2041 18.1736C24.0061 18.0236 23.7241 18.0536 23.5681 18.2456L23.4481 18.4076C23.4121 18.1436 23.3641 17.8916 23.3101 17.6396C23.1721 17.0156 22.9621 16.4456 22.6861 15.9236C22.3621 15.3116 21.9301 14.7656 21.4141 14.2856C20.8861 13.7936 20.2621 13.3676 19.5961 13.0196C19.5241 12.9776 19.4461 12.9536 19.3561 12.9536C19.1101 12.9536 18.9061 13.1516 18.9061 13.4036C18.9061 14.7716 18.0481 16.0556 17.1601 17.3816C16.1221 18.9356 15.0361 20.5496 15.0361 22.5716C15.0361 24.0596 15.6421 25.4096 16.6141 26.3816C17.5921 27.3596 18.9421 27.9596 20.4241 27.9596C22.0141 27.9596 23.2921 27.3656 24.2101 26.4476C24.7561 25.9016 25.1701 25.2476 25.4521 24.5276C25.7281 23.8136 25.8721 23.0456 25.8721 22.2776C25.8721 20.8016 25.3501 19.3196 24.2401 18.2096C24.2281 18.1976 24.2161 18.1856 24.2041 18.1736ZM19.1401 26.5496C18.9541 26.3636 18.8101 26.1356 18.7141 25.8896C18.6121 25.6376 18.5641 25.3616 18.5641 25.0856C18.5641 24.7376 18.6421 24.3896 18.8161 24.0836L18.8341 24.1076C18.9181 24.2216 19.0501 24.2996 19.2061 24.2996C19.4521 24.2996 19.6561 24.0956 19.6561 23.8496C19.6561 23.2496 19.7761 22.7576 20.0101 22.3616C20.1481 22.1216 20.3341 21.9116 20.5501 21.7316C20.7241 22.2476 21.0481 22.7156 21.3781 23.1956C21.8101 23.8256 22.2661 24.4856 22.2661 25.2236C22.2661 25.7276 22.0561 26.1896 21.7261 26.5196C21.3961 26.8556 20.9341 27.0596 20.4241 27.0596C20.3887 27.0596 20.3538 27.0578 20.3186 27.0569C19.8269 27.0328 19.4259 26.841 19.1401 26.5496ZM24.6121 24.2036C24.3781 24.8036 24.0301 25.3556 23.5741 25.8116C23.3784 26.0058 23.1629 26.1823 22.9286 26.3378C23.081 25.9977 23.1661 25.6208 23.1661 25.2236C23.1661 24.2096 22.6321 23.4356 22.1161 22.6856C21.7141 22.1036 21.3301 21.5456 21.3301 20.9876C21.3301 20.7356 21.1261 20.5376 20.8801 20.5376C20.7901 20.5376 20.7121 20.5616 20.6401 20.6036C20.0401 20.9216 19.5601 21.3476 19.2361 21.9056C19.0621 22.2056 18.9301 22.5356 18.8521 22.9016C18.7381 22.8896 18.6241 22.9196 18.5281 22.9976C18.5161 23.0096 18.5041 23.0216 18.4921 23.0336C17.9281 23.5916 17.6641 24.3416 17.6641 25.0856C17.6641 25.4696 17.7361 25.8596 17.8741 26.2136C17.883 26.2362 17.893 26.2584 17.9024 26.2808C17.6704 26.1224 17.4538 25.9433 17.2561 25.7456C16.4401 24.9356 15.9361 23.8136 15.9361 22.5716C15.9361 20.8196 16.9381 19.3196 17.9041 17.8856C18.7261 16.6556 19.5241 15.4676 19.7461 14.1416C20.1301 14.3816 20.4841 14.6456 20.8021 14.9456C21.2461 15.3596 21.6181 15.8216 21.8941 16.3436C22.1281 16.7936 22.3141 17.2916 22.4341 17.8376C22.5541 18.3716 22.6201 18.9596 22.6201 19.6076C22.6201 19.8536 22.8181 20.0576 23.0701 20.0576C23.2201 20.0576 23.3581 19.9796 23.4361 19.8596L23.9401 19.2236C24.6421 20.0996 24.9721 21.1916 24.9721 22.2776C24.9721 22.9376 24.8521 23.5976 24.6121 24.2036Z"
        fill="#5E5E5E"
      />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg
      width="33"
      height="29"
      viewBox="0 0 33 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 0L0 5.13972V20.0336L16.5 29L33 20.0336V5.13972L16.5 0ZM16.5 11.555L10.1141 8.92885C12.9933 7.80336 18.7148 5.47736 23.9933 3.489L30.896 5.62743L16.5 11.555ZM21.4463 2.66365L7.45638 7.84088L2.10403 5.62743L16.5 1.163L21.4463 2.66365ZM1.07047 6.34023L6.75503 8.66624V14.3687L9.22819 15.5317V9.71669L15.9832 12.4929V27.4618L1.07047 19.3959V6.34023ZM17.0168 27.4618V12.4929L31.9295 6.34023V19.3959L17.0168 27.4618Z"
        fill="#5E5E5E"
      />
      <path
        d="M18.7891 13.4309V19.0208L23.309 16.8824V11.5176"
        fill="#5E5E5E"
      />
    </svg>
  );
}

function WidthIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 0H30.5C31.8807 0 33 1.11929 33 2.5V30.5C33 31.8807 31.8807 33 30.5 33H2.5C1.11929 33 0 31.8807 0 30.5V2.5C0 1.11929 1.11929 0 2.5 0ZM2.5 1C1.67157 1 1 1.67157 1 2.5V30.5C1 31.3284 1.67157 32 2.5 32H30.5C31.3284 32 32 31.3284 32 30.5V2.5C32 1.67157 31.3284 1 30.5 1H2.5ZM6 16H16V6H13.5C13.2239 6 13 5.77614 13 5.5C13 5.22386 13.2239 5 13.5 5H19.5C19.7761 5 20 5.22386 20 5.5C20 5.77614 19.7761 6 19.5 6H17V16H27V13.5C27 13.2239 27.2239 13 27.5 13C27.7761 13 28 13.2239 28 13.5V19.5C28 19.7761 27.7761 20 27.5 20C27.2239 20 27 19.7761 27 19.5V17H17V27H19.5C19.7761 27 20 27.2239 20 27.5C20 27.7761 19.7761 28 19.5 28H13.5C13.2239 28 13 27.7761 13 27.5C13 27.2239 13.2239 27 13.5 27H16V17H6V19.5C6 19.7761 5.77614 20 5.5 20C5.22386 20 5 19.7761 5 19.5V13.5C5 13.2239 5.22386 13 5.5 13C5.77614 13 6 13.2239 6 13.5V16Z"
        fill="#5E5E5E"
      />
    </svg>
  );
}

function TickMarlIcon() {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 0L6.26824 21L0 11.468L2.95943 11.7039L6.23063 16.6783L20 0Z"
        fill="#1F8D37"
      />
    </svg>
  );
}
function NoIcon() {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 0L10 8.1369L0 0L9.12178 8.85153L0 16.2739L1.45041 18L10 9.7037L18.5496 18L20 16.2739L10.8782 8.85153L20 0Z"
        fill="#C01C1C"
      />
    </svg>
  );
}
function CautionIcon() {
  return (
    <svg
      width="23"
      height="20"
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0525 1.17614C12.846 0.818548 12.5491 0.521601 12.1915 0.315146C11.8339 0.10869 11.4282 0 11.0153 0C10.6024 0 10.1968 0.10869 9.83918 0.315146C9.48158 0.521601 9.18464 0.818548 8.97818 1.17614L0.315067 16.181C0.108646 16.5386 -1.68972e-05 16.9443 1.97081e-09 17.3572C1.69011e-05 17.7701 0.108713 18.1757 0.315164 18.5333C0.521615 18.8908 0.818548 19.1878 1.17612 19.3942C1.5337 19.6007 1.93932 19.7094 2.35221 19.7094H19.6784C20.0913 19.7094 20.4969 19.6007 20.8545 19.3942C21.2121 19.1878 21.509 18.8908 21.7155 18.5333C21.9219 18.1757 22.0306 17.7701 22.0306 17.3572C22.0307 16.9443 21.922 16.5386 21.7156 16.181L13.0525 1.17614ZM20.4433 17.7988C20.3671 17.9342 20.2558 18.0465 20.1213 18.1242C19.9867 18.2019 19.8338 18.242 19.6784 18.2404H2.35221C2.19718 18.2404 2.04487 18.1996 1.9106 18.1221C1.77634 18.0445 1.66484 17.933 1.58733 17.7988C1.50981 17.6645 1.469 17.5122 1.469 17.3572C1.469 17.2021 1.50981 17.0498 1.58733 16.9156L10.2504 1.91066C10.328 1.77639 10.4394 1.66489 10.5737 1.58737C10.708 1.50985 10.8603 1.46904 11.0153 1.46904C11.1704 1.46904 11.3227 1.50985 11.4569 1.58737C11.5912 1.66489 11.7027 1.77639 11.7802 1.91066L20.4433 16.9156C20.5224 17.0493 20.5641 17.2018 20.5641 17.3572C20.5641 17.5125 20.5224 17.6651 20.4433 17.7988Z"
        fill="#F3D50E"
      />
      <path
        d="M11.0157 15.2212C10.8619 15.2212 10.7116 15.2668 10.5838 15.3522C10.4559 15.4376 10.3563 15.559 10.2975 15.7011C10.2386 15.8431 10.2232 15.9994 10.2532 16.1502C10.2832 16.301 10.3573 16.4396 10.466 16.5483C10.5747 16.657 10.7132 16.731 10.864 16.761C11.0148 16.791 11.1711 16.7756 11.3132 16.7168C11.4552 16.6579 11.5766 16.5583 11.662 16.4305C11.7475 16.3026 11.7931 16.1523 11.7931 15.9986C11.7931 15.8965 11.7729 15.7954 11.7339 15.7011C11.6948 15.6068 11.6375 15.5211 11.5654 15.4489C11.4932 15.3767 11.4075 15.3194 11.3132 15.2804C11.2188 15.2413 11.1177 15.2212 11.0157 15.2212Z"
        fill="#F3D50E"
      />
      <path
        d="M11.0157 5.69238C10.8581 5.69238 10.7022 5.72449 10.5574 5.78675C10.4126 5.84901 10.282 5.94011 10.1736 6.0545C10.0652 6.16889 9.98121 6.30417 9.9268 6.45208C9.87239 6.59999 9.84869 6.75744 9.85714 6.91482L10.2267 13.8001C10.2298 13.8587 10.2553 13.9138 10.2979 13.9541C10.3404 13.9944 10.3968 14.0169 10.4555 14.0169H11.576C11.6346 14.0169 11.691 13.9944 11.7336 13.9541C11.7761 13.9138 11.8016 13.8587 11.8047 13.8001L12.1743 6.91482C12.1827 6.75744 12.159 6.59999 12.1046 6.45208C12.0502 6.30417 11.9662 6.16889 11.8578 6.0545C11.7494 5.94011 11.6188 5.84901 11.4741 5.78675C11.3293 5.72449 11.1733 5.69238 11.0157 5.69238Z"
        fill="#F3D50E"
      />
    </svg>
  );
}
