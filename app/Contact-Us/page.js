import Image from "next/image";
import Footer from "../components/shared-compontents/Footer";

import HeroImg from "/public/images/hero-imgs/Blended_Hero-img-B-min.jpg";

export default function ContactUsPage() {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="relative">
          <Image
            src={HeroImg}
            alt="Solar Gard Vehicle Wrapping"
            sizes="100vw"
            placeholder="blur"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            className="h-[70vh] bg-bottom"
          />
          <div className="absolute lg:w-4/5 largeScreens:w-9/12 inset-0 flex items-end justify-start lg:p-24 md:p-12 sm:p-8 largeScreens:p-40 rounded-bl-lg">
            {/* <h1 className="text-white lg:text-5xl md:text-3xl sm:text-xl largeScreens:text-6xl font-bold">
              Experience the Ultimate in Comfort and Efficiency with Solar Films
            </h1> */}
          </div>
        </div>
      </div>
      <div className="bg-grey w-full lg:py-36 md:py-24 sm:py-16 antialiased">
        <div className="lg:w-9/12 sm:w-11/12 mx-auto">
          <h4 className="font-medium text-textLightGray lg:text-2xl sm:text-lg lg:w-[70%]">
            Get in touch with Solar Gard Solutions, Ireland for expert advice,
            quotes, or any questions about our services. We&apos;re committed to
            providing excellent customer support and finding the right solution
            for your needs.
          </h4>
        </div>
        <div className="lg:w-9/12 sm:w-11/12 mt-8 mx-auto antialiased">
          <div>
            <address className="not-italic text-secondary font-medium lg:text-lg sm:text-base">
              <b className="text-secondary text-xl">Solar Gard Solutions</b>,{" "}
              <br /> Unit 5, Karlbrook Enterprise Park,
              <br />
              Doughcloyne Industrial Estate, <br />
              Wilton, Cork, <br />
              Ireland. <br />
              <small>T12 H593</small>
            </address>
          </div>
          <div className="inline-flex items-center mt-4">
            <span>
              <PhoneIcon />
            </span>
            <b className="text-secondary font-bold text-xl pl-2">
              021 454 5606
            </b>
          </div>
          <div>
            <div className="inline-flex items-center">
              <span>
                <EmailIcon />
              </span>
              <b className="text-secondary font-semibold text-base pl-2">
                <a
                  href="mailto:info@solargardireland.com"
                  className="hover:text-primary"
                >
                  info@solargardireland.com
                </a>
              </b>
            </div>
          </div>
          <div className="mt-2">
            <div className="inline-flex items-center">
              <div className="group">
                <a
                  href="https://www.facebook.com/solargard.tinting/"
                  target="_blank"
                  className="group-hover:text-HoverColor transition-colors duration-300"
                >
                  <span>
                    <FBIcon />
                  </span>
                </a>
              </div>
              <div className="group pl-2">
                <a
                  href="https://www.instagram.com/solargard_ireland/"
                  target="_blank"
                  className="group-hover:text-HoverColor transition-colors duration-300"
                >
                  <span>
                    <InstagramIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h6 className="text-secondary font-bold text-base">
              Business Hours
            </h6>
            <p className="font-semibold text-secondary text-sm">
              Monday - Thursday: 09am - 17pm
            </p>
            <p className="font-semibold text-secondary text-sm">
              Friday: 09am - 16pm
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.002 0C5.3839 0 0 4.93359 0 10.9982C0 14.1638 1.49025 17.1782 4.08868 19.2688C4.29672 19.4347 4.61177 19.4154 4.7948 19.2266C4.97683 19.036 4.95683 18.7473 4.74879 18.5796C2.36639 16.6631 0.999167 13.8999 0.999167 10.9982C0.999167 5.44043 5.93499 0.916514 12.001 0.916514C18.066 0.916514 23.0028 5.44043 23.0028 10.9982C23.0028 16.5568 18.066 21.0798 12.001 21.0798C10.5118 21.0798 9.56359 20.8314 9.26254 20.3594C8.87948 19.7619 9.47758 18.6951 9.95066 17.9114L10.2217 18.0214C10.4957 18.1323 10.7848 18.1891 11.0828 18.1891C11.928 18.1891 12.6941 17.7318 13.0362 17.0242L13.4752 16.1105C13.9513 15.1252 13.4612 13.9686 12.3861 13.5314L10.8918 12.9265C10.7338 12.8633 10.5788 12.548 10.5848 11.988C10.5928 11.34 10.8148 10.5179 11.1939 9.73154C12.043 7.97092 13.1802 7.22305 13.5693 7.37702L15.0635 7.981C16.1167 8.40535 17.4169 7.93976 17.877 6.98292L18.3171 6.06915C18.5461 5.59165 18.5611 5.06007 18.3541 4.57249C18.149 4.08582 17.749 3.70088 17.2269 3.49008L15.7346 2.88427C15.4316 2.76237 15.1035 2.70097 14.7565 2.70097C12.6091 2.70097 9.94666 5.10773 8.28438 8.55382C6.32005 12.6286 6.51308 16.5229 8.72445 17.4193L9.0305 17.543C8.4274 18.5429 7.75029 19.815 8.3964 20.8269C8.90148 21.616 10.0797 22 11.998 22C18.6161 22 24 17.0655 24 11.0018C24.004 4.9336 18.6201 0 12.002 0Z"
        fill="black"
      />
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9625 7.72761L22.9117 0.228934C22.6344 0.0789427 22.3245 0 22.0097 0H1.98785C1.67307 0 1.36321 0.0789427 1.08594 0.228934L10.0351 7.72761C11.165 8.69662 12.8325 8.69662 13.9625 7.72761Z"
        fill="black"
      />
      <path
        d="M23.6776 0.951324L16.7188 6.78222L23.7278 14.1584C23.9065 13.8367 24.0002 13.4736 24.0002 13.1055V2.09189C24.0012 1.68927 23.8897 1.29473 23.6776 0.951324Z"
        fill="black"
      />
      <path
        d="M0.322674 0.951172C0.110516 1.29359 -0.000978732 1.68929 6.473e-06 2.09189V13.1055C6.473e-06 13.4735 0.0927648 13.8357 0.271367 14.1584L7.28047 6.78222L0.322674 0.951172Z"
        fill="black"
      />
      <path
        d="M14.594 8.56325C13.101 9.84409 10.8974 9.84409 9.40448 8.56325L8.07923 7.45312L0.988281 14.9142C1.28826 15.1007 1.63561 15.1993 1.98887 15.2003H22.0097C22.363 15.1993 22.7094 15.1007 23.0103 14.9142L15.9194 7.45312L14.594 8.56325Z"
        fill="black"
      />
    </svg>
  );
}

function FBIcon({ className }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.0013 2.66602C8.6373 2.66602 2.66797 8.63535 2.66797 15.9993C2.66797 22.6833 7.59197 28.2033 14.008 29.1673V19.5327H10.7093V16.0273H14.008V13.6953C14.008 9.83402 15.8893 8.13935 19.0986 8.13935C20.636 8.13935 21.448 8.25268 21.8333 8.30468V11.3633H19.644C18.2813 11.3633 17.8053 12.6553 17.8053 14.1113V16.0273H21.7986L21.2573 19.5327H17.8066V29.1953C24.3146 28.314 29.3346 22.7487 29.3346 15.9993C29.3346 8.63535 23.3653 2.66602 16.0013 2.66602Z"
        className="fill-current"
      />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66667 0C2.98533 0 0 2.98533 0 6.66667V17.3333C0 21.0147 2.98533 24 6.66667 24H17.3333C21.0147 24 24 21.0147 24 17.3333V6.66667C24 2.98533 21.0147 0 17.3333 0H6.66667ZM20 2.66667C20.736 2.66667 21.3333 3.264 21.3333 4C21.3333 4.736 20.736 5.33333 20 5.33333C19.264 5.33333 18.6667 4.736 18.6667 4C18.6667 3.264 19.264 2.66667 20 2.66667ZM12 5.33333C15.6813 5.33333 18.6667 8.31867 18.6667 12C18.6667 15.6813 15.6813 18.6667 12 18.6667C8.31867 18.6667 5.33333 15.6813 5.33333 12C5.33333 8.31867 8.31867 5.33333 12 5.33333ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z"
        className="fill-current"
      />
    </svg>
  );
}
