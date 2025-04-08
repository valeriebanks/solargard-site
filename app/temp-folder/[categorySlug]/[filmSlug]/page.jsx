import { ManifestationsAllData } from "@/app/Data-Sheets/Manifestations-all-category-data";

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
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">{category.CollectionCategory}</h1>
      <p className="mb-10 text-gray-600">Total References: {category.NumRef}</p>
      <div className="grid grid-cols-3 gap-6">
        {category.Films.map((film) => (
          <div key={film.slug} className="border p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold">{film.name}</h2>
            {/* Add more film info here */}
          </div>
        ))}
      </div>
    </div>
  );
}
