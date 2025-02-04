import { Description } from "@headlessui/react";
import Image from "next/image";

const VehicleServices = [
  {
    id: "01",
    title: "Headlight Tinting",
    Description:
      "Give your vehicle a sleek, custom look while protecting your headlights from scratches and UV damage.",
    imageUrl: "/images/car-tinting-imgs/headlight-tinting.png",
    imageAlt: "Solar Gard Ireland Vehicle Tinting",
    PageUrl: "/",
    imageWidth: 170, // Add width
    imageHeight: 170, // Add height
  },
  {
    id: "02",
    title: "Calliper Painting",
    Description:
      "Give your vehicle a sleek, custom look while protecting your headlights from scratches and UV damage.",
    imageUrl: "/images/car-tinting-imgs/Calliper.png",
    imageAlt: "Solar Gard Ireland Calliper Painting",
    PageUrl: "/",
    imageWidth: 170, // Add width
    imageHeight: 170, // Add height
  },
  {
    id: "03",
    title: "Vehicle Wrapping",
    Description:
      "Give your vehicle a sleek, custom look while protecting your headlights from scratches and UV damage.",
    imageUrl: "/images/car-tinting-imgs/vehicle-wrapping.png",
    imageAlt: "Solar Gard Ireland, Vehicle Wrapping",
    PageUrl: "/",
    imageWidth: 170, // Add width
    imageHeight: 170, // Add height
  },
  {
    id: "04",
    title: "De-Chroming",
    Description:
      "Upgrade your vehicle’s look with sleek & stylish with De-Chroming!",
    imageUrl: "/images/car-tinting-imgs/De-chroming.png",
    imageAlt: "Solar Gard Ireland, Vehicle Wrapping",
    PageUrl: "/",
    imageWidth: 170, // Add width
    imageHeight: 170, // Add height
  },
];

export default function VehicleSevices() {
  return (
    <div className="bg-grey w-full">
      <div className="xxl:py-44 xl:py-44 lg:py-36 md:py-36 sm:py-24 mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 gap-y-4 cursor-pointer">
          {VehicleServices.map((service) => (
            <div
              className="bg-white border-2 border-white hover:border-gray-400 rounded-3xl p-4 px-6 antialiased"
              key={service.id}
            >
              <div className="flex gap-8 items-center justify-between">
                <div>
                  <h5 className="lg:text-3xl md:text-3xl sm:text-xl text-secondary font-semibold">
                    {service.title}
                  </h5>
                  <p className="lg:text-sm md:text-base sm:text-xs text-gray-500 mt-1 font-medium">
                    {service.Description}
                  </p>
                </div>
                <div className="lg:w-36 lg:h-36 md:w-44 md:h-44 sm:w-20 sm:h-20 flex items-center">
                  <div className="relative lg:w-36 lg:h-36 md:w-44 md:h-44 sm:w-20 sm:h-20">
                    <Image
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      width={service.imageWidth} // Use width
                      height={service.imageHeight} // Use height
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
