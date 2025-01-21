"use client";

import { useState, useEffect, useRef } from "react";
import { TintingFilmData } from "@/app/Data-Sheets/Tinting-Film-Data";

import Link from "next/link";
import Image from "next/image";
import { Select, SelectItem } from "@nextui-org/select";
import { Pagination } from "@nextui-org/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const categories = [
  "All",
  "Nano Ceramic",
  "Nano Ceramic Premium",
  "HP Metallised Premium",
  "Solar Transparent",
  "HP Metallised",
  "Anti Carjacking",
  "Non Metallised Premium",
  "Non Metallised",
  "Coloured",
];

const TintingFilmDataComponent = () => {
  const swiperRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState("All");
  const [productsPerPage, setProductsPerPage] = useState(4); // Start with mobile default

  // Function to determine products per page based on screen width
  function getProductsPerPage(width) {
    if (width >= 1536) {
      // 2xl breakpoint
      return 4; // 1 row of 4
    } else if (width >= 1024) {
      // lg breakpoint
      return 3; // 1 row of 3
    } else if (width >= 768) {
      // md breakpoint
      return 2; // 1 row of 2
    } else {
      return 4; // sm and mobile: 1 row of 2
    }
  }

  // Initialize and handle resize in useEffect
  useEffect(() => {
    setProductsPerPage(getProductsPerPage(window.innerWidth));

    function handleResize() {
      const newProductsPerPage = getProductsPerPage(window.innerWidth);
      if (newProductsPerPage !== productsPerPage) {
        setProductsPerPage(newProductsPerPage);
        setCurrentPage(1);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [productsPerPage]);

  const filteredProducts =
    filterCategory === "All"
      ? TintingFilmData
      : TintingFilmData.filter(
          (product) => product.category === filterCategory
        );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Text truncation helper function
  function truncateText(text, wordLimit) {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "……"
      : text;
  }

  // console.log("Number of products:", currentProducts.length);

  return (
    <div className="mx-auto antialiased">
      <div className="lg:px-4 lg:py-16 md:px-4 md:py-12 sm:py-2">
        {/* Filter Buttons and Listbox for Mobile */}
        <div className="flex items-center justify-between gap-2 mb-8 lg:w-full mx-auto">
          <div className="lg:flex md:flex sm:hidden">
            <span>
              <FilterIcon />
            </span>
            <h6 className="text-sm font-medium text-secondary pl-2">
              Filter |
            </h6>
          </div>
          {/* Desktop Filter Buttons */}
          <div className="hidden lg:flex gap-2 items-center lg:w-11/12 mx-auto">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation
              spaceBetween={8}
              breakpoints={{
                // Desktop
                1524: {
                  slidesPerView: 6,
                  spaceBetween: 8,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 8,
                },
                // Tablet
                768: {
                  slidesPerView: 6,
                  spaceBetween: 6,
                },
                // Mobile fallback
                0: {
                  slidesPerView: 3,
                  spaceBetween: 3,
                },
              }}
            >
              {categories.map((category) => (
                <SwiperSlide key={category}>
                  <button
                    onClick={() => {
                      setFilterCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`py-1 px-1 text-sm font-medium text-secondary rounded-md ${
                      filterCategory === category
                        ? "bg-primary text-white"
                        : "bg-transparent text-gray-600"
                    } hover:bg-primary hover:text-white cursor-pointer w-full`}
                  >
                    {category}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center justify-end">
              <div className="mr-2 mt-1">
                <button onClick={() => swiperRef.current.slidePrev()}>
                  <PrevBtn />
                </button>
              </div>
              <div className="mr-4 mt-1">
                <button onClick={() => swiperRef.current.slideNext()}>
                  <NextBtn />
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Listbox for Category Selection */}
          <div className="w-full lg:hidden">
            <Select
              label="Filter Category"
              placeholder="Select Category"
              defaultSelectedKeys={["All"]}
              onSelectionChange={(keys) => {
                // Changed this
                const selected = Array.from(keys)[0];
                setFilterCategory(selected);
                setCurrentPage(1);
              }}
              classNames={{
                listbox: "text-secondary", // Makes dropdown list text darker
                trigger: "text-secondary", // Makes selected text darker
                value: "text-secondary", // Makes value text darker
              }}
            >
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-12 md:gap-6 sm:gap-4">
          {currentProducts.map((product) => (
            <Link
              key={product.id}
              href={`/Single-Solar-Film-Page/${encodeURIComponent(
                product.slug
              )}`}
            >
              <div key={product.id}>
                <div className="rounded-2xl lg:py-12 md:py-12 sm:py-6 bg-white">
                  <div className="relative lg:w-36 lg:h-36 md:w-28 md:h-28 sm:w-28 sm:h-28 mx-auto rounded-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full bg-center bg-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-secondary text-center lg:text-xl mt-2">
                    {product.name}
                  </h3>
                  <div className="text-center mt-8 antialiased">
                    <button className="outline outline-offset-2 outline-1 outline-slate-900 lg:text-sm md:text-sm sm:text-xs text-secondary font-semibold rounded-sm py-1 px-4 hover:bg-slate-900 hover:text-white">
                      View Specs
                    </button>
                  </div>
                </div>
                <div>
                  {/* 
                  <p className="text-sm lg:pt-2">
                    {truncateText(product.filmDescription, 25)}
                  </p>
                  */}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <Pagination
            color="secondary"
            total={totalPages}
            initialPage={1}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TintingFilmDataComponent;

function NextBtn() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3361 24.3579C15.5242 24.3579 18.5814 23.0922 20.8362 20.8375C23.0909 18.5827 24.3567 15.5255 24.3566 12.3374C24.3566 9.14927 23.0909 6.09206 20.8362 3.83732C18.5814 1.58258 15.5242 0.316765 12.3361 0.316867C9.14797 0.316868 6.09075 1.58258 3.83601 3.83732C1.58128 6.09206 0.315459 9.14933 0.315561 12.3374C0.315561 15.5255 1.58128 18.5827 3.83602 20.8375C6.09076 23.0922 9.14802 24.358 12.3361 24.3579ZM6.51349 12.2879C6.5125 12.1103 6.58292 11.9407 6.7089 11.8147C6.83389 11.6897 7.00351 11.6193 7.18206 11.6193L15.846 11.6193L12.9267 8.7C12.6857 8.43515 12.6956 8.02846 12.9485 7.77551C13.2015 7.52256 13.6072 7.51363 13.8721 7.75466L17.9679 11.8505C18.2287 12.1113 18.2278 12.5349 17.9669 12.7958L13.8373 16.9254C13.5754 17.1873 13.1528 17.1873 12.891 16.9274C12.6311 16.6655 12.6311 16.2429 12.8929 15.981L15.9136 12.9604L7.17851 12.9604L7.17752 12.9594C6.99996 12.9604 6.83033 12.89 6.70534 12.765C6.57937 12.639 6.50894 12.4694 6.50993 12.2918L6.51349 12.2879Z"
        fill="#4A4A4A"
      />
    </svg>
  );
}
function PrevBtn() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9998 0.979468C9.81172 0.979468 6.7545 2.24518 4.49977 4.49992C2.24503 6.75466 0.979211 9.81193 0.979313 13C0.979313 16.1881 2.24503 19.2453 4.49977 21.5001C6.7545 23.7548 9.81177 25.0206 12.9998 25.0205C16.188 25.0205 19.2452 23.7548 21.4999 21.5001C23.7547 19.2453 25.0205 16.1881 25.0204 13C25.0204 9.81188 23.7547 6.75466 21.4999 4.49992C19.2452 2.24518 16.1879 0.979366 12.9998 0.979468ZM18.8224 13.0495C18.8234 13.2271 18.753 13.3967 18.627 13.5227C18.502 13.6477 18.3324 13.7181 18.1539 13.7181L9.48993 13.7181L12.4092 16.6374C12.6503 16.9022 12.6403 17.3089 12.3874 17.5619C12.1344 17.8148 11.7287 17.8238 11.4639 17.5827L7.36808 13.4869C7.1072 13.2261 7.10818 12.8025 7.36907 12.5416L11.4987 8.41201C11.7605 8.15014 12.1831 8.15012 12.445 8.41002C12.7049 8.67189 12.7049 9.09448 12.443 9.35636L9.42238 12.377L18.1574 12.377L18.1584 12.378C18.336 12.377 18.5056 12.4474 18.6306 12.5724C18.7566 12.6984 18.827 12.868 18.826 13.0456L18.8224 13.0495Z"
        fill="#4A4A4A"
      />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6918 17.8874L7.84842 20.8488C7.68995 20.9454 7.51379 20.9964 7.33422 20.9998C7.1567 21.0032 6.97918 20.959 6.81867 20.8686C6.65543 20.7767 6.52416 20.6482 6.43506 20.4951C6.34596 20.3394 6.29699 20.1639 6.29699 19.9789V11.0791C6.29699 11.0226 6.29019 10.973 6.27658 10.9294C6.26298 10.8852 6.24053 10.841 6.20993 10.7982L0.268083 2.29961C0.108926 2.07176 0.019826 1.8167 0.00282214 1.5562C-0.0135016 1.2957 0.0409109 1.03112 0.1681 0.786941C0.295289 0.542765 0.480972 0.346199 0.706104 0.210168C0.931235 0.0734569 1.19105 0 1.46584 0H18.012C18.2868 0 18.5466 0.0734569 18.7717 0.210168C18.9969 0.346199 19.1825 0.542765 19.3097 0.786941C19.4369 1.0318 19.492 1.2957 19.475 1.5562C19.458 1.8167 19.3689 2.07176 19.2098 2.29961L13.2672 10.7968C13.2373 10.8396 13.2155 10.8839 13.2006 10.9301C13.187 10.9743 13.1802 11.024 13.1802 11.0804V17.0182C13.1802 17.1977 13.1353 17.3678 13.0516 17.5174C12.968 17.6657 12.8462 17.7929 12.6911 17.8874H12.6918Z"
        fill="#4A4949"
      />
    </svg>
  );
}
