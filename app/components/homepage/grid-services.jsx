import Image from "next/image";
import CarTinting from "/public/images/card-service-imgs/car-tint.jpg";
import CoverStylImg from "/public/images/card-service-imgs/coverstyl-card-img.jpg";
import ManifestationImg from "/public/images/card-service-imgs/manifestations-graphics-card-img.jpg";
export default function GridServicesNav() {
  return (
    <div className="bg-secondary pb-40">
      <div className="largeScreens:w-9/12 xl:w-10/12 lg:w-11/12 mx-auto">
        <div className="grid grid-cols-3 h-3/4 gap-4">
          <div className="">
            <Image
              src={CarTinting}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              className=""
            />
          </div>
          <div>
            <Image
              src={CoverStylImg}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              className=""
            />
          </div>
          <div>
            <Image
              src={ManifestationImg}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              className=""
            />
          </div>
        </div>
        <div className="grid grid-cols-3 h-3/4 gap-4 mt-4">
          <div>
            <Image
              src={ManifestationImg}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              className=""
            />
          </div>
          <div>
            <Image
              src={CoverStylImg}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              className=""
            />
          </div>
          <div>
            <Image
              src={CarTinting}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
