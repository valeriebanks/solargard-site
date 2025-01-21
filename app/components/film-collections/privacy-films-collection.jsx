"use client";

import { useState, useEffect } from "react";
import { PrivacyFilmsData } from "@/app/Data-Sheets/Privacy-Films-Data";
import Link from "next/link";
import { Progress } from "@nextui-org/progress";
import Image from "next/image";
import { Select, SelectItem } from "@nextui-org/select";
import { Pagination } from "@nextui-org/pagination";

const categories = ["All", "Solar Films", "Frosted Films"];

const PrivacyFilmsComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState("All");
  const [productsPerPage, setProductsPerPage] = useState(4);

  // Debug logging for data
  useEffect(() => {
    console.log(
      "Current Products Data:",
      PrivacyFilmsData.map((p) => ({
        name: p.name,
        category: p.category,
        slug: p.slug,
      }))
    );
  }, []);

  function getProductsPerPage(width) {
    if (width >= 1536) return 4;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 4;
  }

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
      ? PrivacyFilmsData
      : PrivacyFilmsData.filter(
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

  const getSpecPageRoute = (product) => {
    console.log(
      "Routing product:",
      product.name,
      "Category:",
      product.category
    );

    if (product.category === "Frosted Films") {
      return `/manifestations-graphics-spec-page/${encodeURIComponent(
        product.slug
      )}`;
    }
    return `/Solar-spec-page/${encodeURIComponent(product.slug)}`;
  };

  return (
    <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto antialiased">
      <div className="lg:px-4 lg:py-16 md:px-4 md:py-12 sm:py-2">
        <div className="lg:w-7/12 lg:mb-14 md:mb-8 sm:mb-6">
          <h2 className="lg:text-5xl md:text-4xl sm:text-2xl lg:mb-4 md:mt-8 sm:mt-12 font-bold text-secondary">
            Discover Our Range of High-Performance Privacy Films
          </h2>
          <p className="font-medium text-textGray lg:text-xl sm:mt-2">
            Tailored Solutions to Enhance Comfort, Efficiency, and Protection
            for Every Space
          </p>
        </div>

        <div className="flex items-center flex-wrap gap-2 mb-8">
          <div className="lg:flex md:flex sm:hidden">
            <span>
              <FilterIcon />
            </span>
            <h6 className="text-sm font-medium text-secondary pl-2">
              Filter |
            </h6>
          </div>

          <div className="hidden lg:flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setFilterCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-2 py-1 text-sm font-medium text-secondary rounded-md ${
                  filterCategory === category
                    ? "bg-primary text-white"
                    : "bg-transparent text-gray-700"
                } hover:bg-primary hover:text-white cursor-pointer`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="w-full lg:hidden">
            <Select
              label="Filter Category"
              placeholder="Select Category"
              defaultSelectedKeys={["All"]}
              onSelectionChange={(keys) => {
                const selected = Array.from(keys)[0];
                setFilterCategory(selected);
                setCurrentPage(1);
              }}
              classNames={{
                listbox: "text-secondary",
                trigger: "text-secondary",
                value: "text-secondary",
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

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-6 md:gap-6 sm:gap-4">
          {currentProducts.map((product) => (
            <Link
              key={product.id}
              href={getSpecPageRoute(product)}
              onClick={(e) => {
                console.log(
                  "Clicked:",
                  product.name,
                  "Category:",
                  product.category
                );
              }}
            >
              <div className="rounded-2xl lg:py-12 md:py-12 sm:py-6 bg-white">
                <div className="mx-auto">
                  <Image
                    width={200}
                    height={200}
                    src={product.image}
                    alt={product.name}
                    className="lg:w-44 lg:h-44 md:w-28 md:h-28 sm:w-28 sm:h-28 mx-auto rounded-full bg-center bg-cover"
                  />
                </div>
                <h3 className="font-semibold text-secondary text-center lg:text-2xl mt-2">
                  {product.name}
                </h3>
                <div className="w-9/12 mx-auto mt-8 lg:block md:block sm:hidden">
                  <div className="inline-flex items-center">
                    <span>
                      <SunRejection />
                    </span>
                    <h6 className="lg:text-xs text-secondary font-medium pl-2">
                      Total Solar Energy Rejected
                    </h6>
                  </div>
                  <div className="flex flex-col w-full bg-slate-100 rounded-lg max-w-md">
                    <Progress
                      aria-label="Loading..."
                      size="lg"
                      className="h-2"
                      value={product.EnergyRejectedValue}
                    />
                  </div>
                </div>
                <div className="w-9/12 mx-auto mt-4 lg:block md:block sm:hidden">
                  <div className="inline-flex items-center">
                    <span>
                      <LightTransmission />
                    </span>
                    <h6 className="lg:text-xs text-secondary font-medium pl-2">
                      Visible Light Transmission
                    </h6>
                  </div>
                  <div className="flex flex-col w-full bg-slate-100 rounded-lg max-w-md">
                    <Progress
                      size="lg"
                      aria-label="Loading..."
                      className="h-2"
                      value={product.VisibleLightTransValue}
                    />
                  </div>
                </div>
                <div className="text-center mt-8 antialiased">
                  <button className="outline outline-offset-2 outline-1 outline-slate-900 lg:text-sm md:text-sm sm:text-xs text-secondary font-semibold rounded-sm py-1 px-4 hover:bg-slate-900 hover:text-white">
                    View Specs
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

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

export default PrivacyFilmsComponent;

// Your existing icon components remain unchanged
function SunRejection() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SVG path data */}
    </svg>
  );
}

function LightTransmission() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SVG path data */}
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
      {/* SVG path data */}
    </svg>
  );
}
