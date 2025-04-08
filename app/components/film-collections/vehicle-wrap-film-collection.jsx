"use client";
import { useState } from "react";
import Image from "next/image";
import { Pagination } from "@nextui-org/pagination";
import { WrappingFilmData } from "@/app/Data-Sheets/Wrapping-Film-Data";

export default function VehicleWrappingFilms() {
  const itemsPerPage = 14; // Desktop: 7 cols × 2 rows, Tablet: 4 cols × 2 rows, Mobile: 2 cols × 2 rows
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(WrappingFilmData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = WrappingFilmData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full bg-grey p-6">
      <div className="grid gap-4 lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 py-10">
        {displayedItems.map((film, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center"
          >
            <Image
              src={film.image}
              alt={film.name}
              width={100}
              height={100}
              className="rounded-md object-cover w-full h-auto"
            />
            <h4 className="text-center text-sm font-semibold text-secondary mt-4">
              {film.name}
            </h4>
            <p className="text-center text-sm font-medium text-textLightGray">
              {film.finish}
            </p>
          </div>
        ))}
      </div>
      {/* HeroUI Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination
          color="secondary"
          total={totalPages}
          current={currentPage}
          onChange={setCurrentPage}
          showEdges
          size="lg"
        />
      </div>
    </div>
  );
}
