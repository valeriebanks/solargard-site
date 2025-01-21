"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const reviews = [
  {
    id: "01",
    comment:
      "Very happy with Solar Gard after being recommended to go there by my local mechanic Liam Lynch. Had a good chat with them about my requirements and booked in for the next day. They showed me all my options and had the job done in under two hours including washing the vehicle.",
    name: "Denis Colman",
    serviceUrlImg: "",
  },
  {
    id: "02",
    comment:
      "From initial email contact with Dave, to installation by Rob, I'm very impressed with this company. Delighted with product used on glass panels in my doors. Top class!",
    name: "Anne McCarthy",
    serviceUrlImg: "",
  },
  {
    id: "03",
    comment:
      "Solar guard is a really good company for what they do. here price is really good from other places I had before got work done.I found there work outstanding on my car.... very fast, easy to deal with, I even recommend them to my work company.",
    name: "Yvonne Cronin",
    serviceUrlImg: "",
  },
  {
    id: "04",
    comment:
      "Fabulous service from Solar Gard. Efficient and friendly. Fitted new decorative stripes to our family caravan. It looks like new again. I struggled to find anyone willing to do this job and am delighted to have been recommended to go to Solar Gard. I will definitely be using them again and I will recommend them to anyone.",
    name: "Bertie Sheehan",
    serviceUrlImg: "",
  },
  {
    id: "05",
    comment:
      "Fantastic job and great service from the guys at SG tints, friendly and efficient. Car was done in less than 2 hours and cheaper than anywhere else in cork. They also applied a vinyl to my side skirts which I had ordered elsewhere.",
    name: "Evan O' Sullivan",
    serviceUrlImg: "",
  },
  {
    id: "06",
    comment:
      "My Initial contact was via email and Valarie was very prompt to reply, they were fully booked for several weeks however as my requirement was just a rear window she manged to squeeze me in. Justin came in early and completed in 45 mins or so. A very professional finish by a very professional and personable company. I even got cuppa while I waited, even though I had to make it myself.",
    name: "Ian Reidy",
    serviceUrlImg: "",
  },
];

export default function Testimonials() {
  const swiperRef = useRef();
  return (
    <div className="w-full bg-grey lg:py-24 md:py-36 sm:py-28">
      <div className="xxl:w-8/12 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto antialiased">
        <div>
          <h4 className="text-secondary font-bold lg:text-5xl md:text-4xl sm:text-3xl">
            Customers Testimonials
          </h4>
        </div>
        <div>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={90}
            slidesPerView={"auto"}
            grabCursor={true}
            speed={900}
            // autoplay={{
            //   delay: 8500,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1240: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="">
              <div className="my-swiper">
                {reviews.map((review) => (
                  <SwiperSlide key={review.id}>
                    <div className="lg:mt-8 md:mt-8 sm:mt-6">
                      <div>
                        <div className="">
                          <p className="text-secondary font-medium lg:text-base md:text-lg sm:text-sm pr-8">
                            {review.comment}
                          </p>
                        </div>
                        <div className="flex flex-row items-center mt-8">
                          <div className="flex items-center">
                            <GoogleIcon />
                          </div>
                          <div>
                            <p className="text-textLightGray font-medium text-lg pl-3">
                              {review.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </div>
          </Swiper>
          <div className="lg:mt-8">
            <div className="flex justify-end">
              <div className="mr-4">
                <button onClick={() => swiperRef.current.slidePrev()}>
                  <LeftArrowIcon />
                </button>
              </div>
              <div>
                <button onClick={() => swiperRef.current.slideNext()}>
                  <RightArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="28px"
      height="28px"
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
}

function LeftArrowIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#12191d" />
      <path
        d="M32 23H19.83L25.42 17.41L24 16L16 24L24 32L25.41 30.59L19.83 25H32V23Z"
        fill="#12191d"
      />
    </svg>
  );
}
function RightArrowIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#12191d" />
      <path
        d="M24 16L22.59 17.41L28.17 23H16V25H28.17L22.59 30.59L24 32L32 24L24 16Z"
        fill="#12191d"
      />
    </svg>
  );
}
