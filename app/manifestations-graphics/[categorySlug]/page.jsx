import { ManifestationsAllData } from "@/app/Data-Sheets/Manifestations-all-category-data";
import Image from "next/image";
import { Progress } from "@nextui-org/progress";

export default function CollectionPage({ params }) {
  const { categorySlug } = params;

  const category = ManifestationsAllData.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    return (
      <div className="p-10 text-red-500 text-xl">404 – Category not found</div>
    );
  }

  return (
    <div className="w-full bg-grey pt-24 pb-[50%]">
      <div className="xxl:w-10/12 lg:w-9/12 mx-auto">
        <div className="flex justify-between items-center mt-16">
          <h1 className="text-3xl font-bold mb-6">
            {category.CollectionCategory}
          </h1>
          <p className="text-gray-600">Total References: {category.NumRef}</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {category.Films.map((film) => (
            <div key={film.slug} className="bg-white p-4 rounded-md shadow-sm">
              <div className="w-44 h-44 rounded-full overflow-hidden mx-auto">
                <Image
                  src={film.image}
                  width={500}
                  height={500}
                  alt={film.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-base text-center font-semibold mt-4">
                {film.name}
              </h2>
              <div className="flex justify-center">
                <button className="mt-6 px-4 py-2 rounded-full border-2 border-zinc-300 text-secondary font-semibold text-xs">
                  View Specs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
