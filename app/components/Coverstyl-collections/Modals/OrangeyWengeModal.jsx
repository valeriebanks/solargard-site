"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function OrangeyWengeModal({ isOpen, closeModal }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <Dialog.Title className="text-xl font-semibold">
              Silver Blue
            </Dialog.Title>
            <div className="mt-4">
              <Image
                src="/images/coverstyl/Steel-textures/Silver-Blue.jpg"
                alt="Silver Blue"
                width={500}
                height={300}
                className="w-full object-cover rounded-lg"
              />
              <p className="mt-4 text-gray-600">
                A stunning silver-blue finish with a metallic sheen, perfect for
                modern interiors.
              </p>

              {/* Additional Images */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Image
                  src="/images/coverstyl/Steel-textures/Silver-Blue-Detail1.jpg"
                  alt="Detail 1"
                  width={200}
                  height={150}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/images/coverstyl/Steel-textures/Silver-Blue-Detail2.jpg"
                  alt="Detail 2"
                  width={200}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
