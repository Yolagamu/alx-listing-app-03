// components/property/PropertyCard.tsx
import Link from "next/link";
import Image from "next/image";

type Property = {
  id: string | number;
  title: string;
  location?: string;
  price?: number;
  images?: string[];
  // add fields as needed
};

export default function PropertyCard({ property }: { property: Property }) {
  const imgSrc = property.images && property.images.length ? property.images[0] : "/placeholder.png";

  return (
    <article className="rounded-lg shadow-sm overflow-hidden border">
      <Link href={`/properties/${property.id}`}>
        <a className="block">
          <div className="relative w-full h-48 bg-gray-100">
            {/* If using next/image, ensure domains are configured in next.config.js */}
            {/* Using Image with a fallback placeholder */}
            <Image
              src={imgSrc}
              alt={property.title || "Property image"}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">{property.title || "Untitled property"}</h3>
            <p className="text-sm text-gray-500">{property.location || "Unknown location"}</p>
            {typeof property.price !== "undefined" && (
              <p className="mt-2 font-medium">R{property.price}</p>
            )}
          </div>
        </a>
      </Link>
    </article>
  );
}
