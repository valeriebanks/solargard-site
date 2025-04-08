import Image from "next/image";
import { ManifestationsAllData } from "@/app/Data-Sheets/Manifestations-all-category-data";
import Link from "next/link";

const FilmCardData = [
  {
    Filmtype: "Decorative Abstract Films",
    category: "Abstract",
    RefNum: "12",
    image:
      "https://res.cloudinary.com/solar-gard/image/upload/v1741702299/Decorative-Abstract-Films_fwu27t.jpg",
  },
  {
    Filmtype: "Lines Films",
    RefNum: "11",
    category: "Lines",
    image:
      "https://res.cloudinary.com/solar-gard/image/upload/v1741702411/Lines-films_tqsw66.jpg",
  },

  {
    Filmtype: "Transparent Coloured Films",
    category: "Coloured",
    RefNum: "13",
    image:
      "https://res.cloudinary.com/solar-gard/image/upload/v1741702810/Transparent-coloured-films_pilvjr.jpg",
  },
  {
    Filmtype: "Opalescent Films",
    category: "Opalescent",
    RefNum: "7",
    image:
      "https://res.cloudinary.com/solar-gard/image/upload/v1741771834/MAT-Gray_z8ij6e.jpg",
  },
  {
    Filmtype: "Blackout Films",
    category: "Blackout",
    RefNum: "2",
    image:
      "https://res.cloudinary.com/solar-gard/image/upload/v1741773219/Black-Opaque_zd5sx9.jpg",
  },
  {
    Filmtype: "Geometric Films",
    category: "Geometric",
    RefNum: "4",
    image:
      "https://res.cloudinary.com/solar-gard/image/upload/v1741773339/Circuit_mszeai.jpg",
  },
  {
    Filmtype: "Dichroic Films",
    category: "Dichroic",
    RefNum: "2",
    image:
      "https://res.cloudinary.com/solar-gard/image/upload/v1741773429/AuroraSummer_fm6czm.jpg",
  },
  {
    Filmtype: "Custom Manifestations",
    category: "Custom Graphics",
    RefNum: "-",
    image:
      "https://res.cloudinary.com/solar-gard/image/upload/v1741773429/AuroraSummer_fm6czm.jpg",
  },
];
console.log("ManifestationsAllData loaded:", ManifestationsAllData.length);
export default function ManifestationsCollectionCardNav() {
  return (
    <div>
      <div className="w-full bg-grey">
        <div className="xxl:w-10/12 lg:w-9/12 mx-auto">
          <div>
            <div className="grid lg:grid-cols-4 gap-4 pt-28 antialiased">
              {ManifestationsAllData.map((item) => (
                <div
                  key={item.slug}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <div className="w-44 h-44 rounded-full overflow-hidden mx-auto">
                    <Image
                      src={item.CardFeaturedImage}
                      width={500}
                      height={500}
                      alt={item.CollectionCategory}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-base text-center font-semibold mt-4">
                    {item.CollectionCategory}
                  </h2>
                  <p className="text-sm text-center mt-6 text-gray-500">
                    References {item.NumRef}
                  </p>
                  <>
                    <Link href={`/manifestations-graphics/${item.slug}`}>
                      <div className="flex justify-center">
                        <button className="mt-6 px-4 py-2 rounded-full border-2 border-zinc-300 text-secondary font-semibold text-xs">
                          View Collection
                        </button>
                      </div>
                    </Link>
                  </>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
