// components/property/PropertyDetail.tsx
import Image from "next/image";

export default function PropertyDetail({ property }: any) {
  const {
    title,
    description,
    price,
    location,
    images = [],
    bedrooms,
    bathrooms,
  } = property;

  const mainImage =
    images && images.length > 0 ? images[0] : "/placeholder.png";

  return (
    <section className="max-w-3xl mx-auto">
      {/* Image */}
      <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
        <Image
          src={mainImage}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mt-4">{title}</h1>

      {/* Location */}
      <p className="text-gray-600 text-sm">{location}</p>

      {/* Price */}
      <p className="text-xl font-semibold mt-2">R{price}</p>

      {/* Property Info */}
      <div className="mt-4 space-y-2">
        {bedrooms !== undefined && (
          <p>🛏 Bedrooms: {bedrooms}</p>
        )}

        {bathrooms !== undefined && (
          <p>🛁 Bathrooms: {bathrooms}</p>
        )}
      </div>

      {/* Description */}
      <p className="mt-6 leading-relaxed">{description}</p>
    </section>
  );
}
