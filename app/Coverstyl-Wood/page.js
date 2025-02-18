"use client";
import Image from "next/image";
import { WoodData } from "../Data-Sheets/Wood-Data";
import { Pagination } from "@nextui-org/pagination";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Download } from "lucide-react"; // Import Lucide icon

export default function WoodMaterials() {
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(WoodData[0]?.materials?.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMaterials = WoodData[0]?.materials?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Ref for GSAP animation
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        {
          opacity: 0,
          y: 20, // Move up slightly
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1, // Stagger animation for smooth effect
          ease: "power2.out",
        }
      );
    }
  }, [currentMaterials]); // Trigger animation on page change

  // Function to properly download the image
  const downloadTexture = async (imageUrl, fileName) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div key={currentPage}>
      <div className="bg-grey mt-[200px]">
        <div className="xxl:w-8/12 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto">
          <div
            ref={containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {currentMaterials?.map((material) => (
              <div key={material.code} className="flex flex-col">
                <div className="relative w-full h-[300px]">
                  <Image
                    src={material.image}
                    alt={material.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg rounded-tr-xl"
                  />
                </div>
                <div className="mt-2 gap-2">
                  <div className="flex justify-between items-center antialiased">
                    <div>
                      <h6 className="text-center text-secondary text-sm font-medium">
                        {material.name}
                      </h6>
                    </div>
                    <div className="flex">
                      <div>
                        <span className="text-xs text-textGray font-semibold pr-2">
                          {material.code}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          downloadTexture(
                            material.image,
                            `${material.name}.jpg`
                          )
                        }
                        className="text-gray-500 hover:text-black transition"
                      >
                        <DownloadIcon size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Pagination
              color="secondary"
              total={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              className="mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="19"
      height="26"
      viewBox="0 0 19 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4661 3.4788e-05C13.4642 3.4788e-05 13.4613 0.0010504 13.4584 0.0010504H1.79903C0.807603 0.0010504 0 0.856216 0 1.9023L0.000962796 24.0987C0.000962796 25.1448 0.80854 26 1.79999 26H17.201C18.1924 26 19 25.1448 19 24.0987V5.83974C19 5.7331 18.9596 5.63052 18.8893 5.55434L13.7397 0.120858C13.7031 0.082264 13.6608 0.0528112 13.6136 0.0314834C13.5674 0.0111709 13.5171 3.4788e-05 13.4661 3.4788e-05ZM1.79983 0.813548H13.083V4.34591C13.083 5.39199 13.8905 6.24817 14.882 6.24817H18.2298V24.0987C18.2298 24.7081 17.7784 25.1875 17.2008 25.1875H1.79983C1.22228 25.1875 0.77085 24.7081 0.77085 24.0987V1.90227C0.77085 1.29288 1.22228 0.813548 1.79983 0.813548ZM13.853 1.3894L17.687 5.43473H14.882C14.3045 5.43473 13.8531 4.95535 13.8531 4.34598L13.853 1.3894ZM9.49835 6.75189C9.39632 6.75189 9.2991 6.79455 9.2269 6.87174C9.1547 6.94791 9.11524 7.0515 9.11524 7.15917V16.3951L5.90888 12.6849C5.76546 12.5204 5.5229 12.5082 5.366 12.6585C5.28996 12.7306 5.24376 12.8322 5.23895 12.9409C5.2351 13.0485 5.27071 13.1542 5.34002 13.2344L9.21441 17.7173C9.22788 17.7315 9.24232 17.7457 9.25772 17.7579C9.25772 17.7589 9.25868 17.76 9.25965 17.761C9.33569 17.825 9.43195 17.8564 9.52918 17.8483C9.53303 17.8483 9.53688 17.8473 9.53977 17.8473C9.5465 17.8463 9.55228 17.8463 9.55902 17.8453H9.55998C9.57923 17.8422 9.59945 17.8371 9.6187 17.83C9.62255 17.829 9.6264 17.827 9.63025 17.826C9.64565 17.8199 9.66008 17.8138 9.67452 17.8057C9.68608 17.7996 9.69763 17.7925 9.70821 17.7854C9.72265 17.7752 9.73709 17.765 9.7496 17.7529C9.75923 17.7447 9.76789 17.7366 9.77559 17.7285C9.77944 17.7244 9.78233 17.7214 9.78618 17.7173L13.6596 13.2344C13.7289 13.1552 13.7655 13.0495 13.7607 12.9409C13.7558 12.8332 13.7106 12.7306 13.6336 12.6585C13.5585 12.5864 13.4594 12.5489 13.3583 12.5539C13.2563 12.559 13.16 12.6057 13.0907 12.686L9.88535 16.392V7.15888C9.88535 7.05123 9.84492 6.94662 9.77273 6.87044C9.70054 6.79426 9.6014 6.7506 9.49936 6.75161L9.49835 6.75189ZM5.74051 20.1744L5.74147 20.1734C5.52971 20.1744 5.35837 20.3552 5.35741 20.5786C5.35741 20.6863 5.39784 20.7899 5.46907 20.866C5.54126 20.9432 5.63944 20.9859 5.74148 20.9859H13.2562H13.2552C13.3582 20.9869 13.4564 20.9442 13.5295 20.8671C13.6017 20.7909 13.6422 20.6873 13.6422 20.5786C13.6422 20.471 13.6008 20.3674 13.5286 20.2922C13.4554 20.216 13.3582 20.1734 13.2552 20.1734L5.74051 20.1744Z"
        fill="#272727"
      />
    </svg>
  );
}
