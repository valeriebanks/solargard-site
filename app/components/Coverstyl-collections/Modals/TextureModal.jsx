"use client";
import { Fragment, useEffect, useState } from "react"; // Import Fragment, useEffect, and useState
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { gsap } from "gsap";
import Image from "next/image";

import { textureData } from "@/app/Data-Sheets/textureModalData";

export default function TextureModal({ isOpen, closeModal, texture }) {
  console.log("Texture object:", texture); // Add this line to check the texture object
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0); // Reset to the first image when modal opens
    }
  }, [isOpen]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % texture.images.length; // Loop back to the first image
      animateImageChange(prevIndex, nextIndex);
      return nextIndex;
    });
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => {
      const prevIndexCalc =
        (prevIndex - 1 + texture.images.length) % texture.images.length; // Loop back to the last image
      animateImageChange(prevIndex, prevIndexCalc);
      return prevIndexCalc;
    });
  };

  const animateImageChange = (prevIndex, nextIndex) => {
    const images = document.querySelectorAll(".modal-image");
    gsap.fromTo(
      images[prevIndex],
      { opacity: 1 },
      { opacity: 0, duration: 0.5 }
    );
    gsap.fromTo(
      images[nextIndex],
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
  };

  if (!texture) {
    console.error("Texture is not defined in the modal"); // Debugging line
    return null; // Early return if texture is not defined
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="lg:w-10/12 mx-auto bg-white rounded-3xl shadow-xl p-8">
            <Dialog.Panel className="relative">
              <div className="grid grid-cols-2 gap-16">
                <div>
                  {/* Slideshow Content */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-[500px] overflow-hidden">
                      {texture.images.map((img, index) => (
                        <img
                          key={index}
                          src={img.src}
                          alt={img.alt || texture.title}
                          className={`modal-image w-full h-full object-cover rounded-lg ${
                            index === currentImageIndex
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                          style={{
                            position:
                              index === currentImageIndex
                                ? "absolute"
                                : "absolute",
                            top: 0,
                            left: 0,
                          }}
                        />
                      ))}
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex justify-between w-full mt-4">
                      <button
                        onClick={handlePrevious}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                      >
                        Previous
                      </button>
                      <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Details */}
                  <div className="mt-4 antialiased">
                    <h2 className="text-2xl font-bold">{texture.title}</h2>
                    <p className="text-gray-600 text-sm mt-2">
                      {texture.description}
                    </p>
                    <div className="mt-6 space-y-2 text-sm">
                      <div className="flex space-x-5">
                        <div className="flex">
                          <span className="font-medium text-gray-500 pr-1">
                            Type of product:
                          </span>
                          <h5 className="font-semibold text-secondary">
                            {texture.TypeofProduct}
                          </h5>
                        </div>
                        <div className="flex">
                          <span className="font-medium text-gray-500 pr-1">
                            Width:
                          </span>
                          <h5 className="font-semibold text-secondary antialiased">
                            {texture.width}
                          </h5>
                        </div>
                        <div className="flex">
                          <span className="font-medium text-gray-500 pr-1">
                            Height:
                          </span>
                          <h5 className="font-semibold text-secondary">
                            {texture.height}
                          </h5>
                        </div>
                      </div>
                      <div className="flex space-x-5 items-center">
                        <div>
                          {texture.adhesive && (
                            <p>
                              <span className="font-semibold">Adhesive:</span>
                              {texture.adhesive}
                            </p>
                          )}
                        </div>
                        <div>
                          <span className="font-semibold">Installation:</span>
                          {texture.installation}
                        </div>

                        <div>
                          {texture && texture.warranty && (
                            <p>
                              <span className="font-semibold">Warranty:</span>
                              {texture.warranty}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
              >
                <XMarkIcon className="w-8 h-8" />
              </button>
              {/* Close Button */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
