import { Tabs, Tab } from "@heroui/tabs";
import Image from "next/image";

import TintImg from "/public/images/Privacy-Films-imgs/tinted-privacy-lg-min.jpg";
import FrostedImg from "/public/images/Privacy-Films-imgs/frosted-window-min.jpg";

export default function TabsComparison() {
  let tabs = [
    {
      id: "photos",
      label: "Tinted Film",
      filmType: "Tinted Privacy Film",
      PrivacyHours: "Daytime only",
      Visibility: "Maintains outward visibility in daytime hours only",
      LightTransmission:
        "Reflective (outside) but maintains brightness indoors",
      effectiveness:
        "Provide daytime privacy by reflecting light, creating a mirror-like finish when viewed from the outside.",
      benefits:
        "Reduce heat and glare, block UV rays, and maintain outward visibility.",
      consideration:
        "Privacy is effective during daylight hours only and diminishes at night when interior lights are on.",
      image: TintImg,
    },
    {
      id: "music",
      label: "Frosted Film",
      filmType: "Frosted Films",
      PrivacyHours: "24/7",
      Visibility: "Fully obscures both sides",
      LightTransmission: "Allows light to pass through softly",
      effectiveness:
        "Provide 24/7 privacy by obscuring visibility from both sides, regardless of lighting conditions.",
      benefits:
        "Allows natural light to pass through while adding a sleek, modern aesthetic.",
      consideration:
        "They do not offer outward visibility, making them more suited for spaces prioritising privacy over views.",
      image: FrostedImg,
    },
  ];

  return (
    <div className="flex mx-auto flex-col pt-16">
      <h4 className="text-center font-semibold text-2xl mb-2">
        Choose What Type of Privacy Solution
      </h4>
      <Tabs
        aria-label="Dynamic tabs"
        variant="bordered"
        color="secondary"
        size="lg"
        items={tabs}
        className="text-center text-white text-6xl mx-auto"
        classNames={{
          tabList: "border-gray-400",
          tab: "text-gray-400", // Inactive tab text color
          tabActive: "text-white", // Active tab text color
        }}
      >
        {(item) => (
          <Tab key={item.id} title={item.label} aria-label="Tabs radius">
            <div className="w-10/12 mx-auto antialiased">
              <div className="relative">
                <div>
                  <Image
                    src={item.image}
                    className="relative w-full h-[650px] rounded-2xl"
                  />
                </div>
                <div className="bg-white w-2/5 h-[580px] absolute z-20 top-8 right-8 p-8 rounded-lg">
                  <h5 className="text-2xl font-bold">{item.filmType}</h5>
                  <div className="mt-3 border-b-2 border-gray-300 pb-4">
                    <h6 className="text-base font-semibold">Privacy Hours</h6>
                    <p className="text-sm font-medium text-textLightGray">
                      {item.PrivacyHours}
                    </p>
                  </div>
                  <div className="mt-3 border-b-2 border-gray-300 pb-4">
                    <h6 className="text-base font-semibold">Visibility</h6>
                    <p className="text-sm font-medium text-textLightGray">
                      {item.Visibility}
                    </p>
                  </div>
                  <div className="mt-3 border-b-2 border-gray-300 pb-4">
                    <h6 className="text-base font-semibold">
                      Light Transmission
                    </h6>
                    <p className="text-sm font-medium text-textLightGray">
                      {item.LightTransmission}
                    </p>
                  </div>
                  <div className="mt-3 border-b-2 border-gray-300 pb-4">
                    <h6 className="text-base font-semibold">Effectiveness</h6>
                    <p className="text-sm font-medium text-textLightGray">
                      {item.effectiveness}
                    </p>
                  </div>
                  <div className="mt-3 border-b-2 border-gray-300 pb-4">
                    <h6 className="text-base font-semibold">Benefits</h6>
                    <p className="text-sm font-medium text-textLightGray">
                      {item.benefits}
                    </p>
                  </div>
                  <div className="mt-3">
                    <h6 className="text-base font-semibold">Consideration</h6>
                    <p className="text-sm font-medium text-textLightGray">
                      {item.consideration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
