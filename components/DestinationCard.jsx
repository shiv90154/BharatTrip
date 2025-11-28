import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ data }) {
  return (
    <div className="shadow rounded overflow-hidden bg-white">
      <div className="relative h-56 w-full">
        <Image
          src={data.image}
          alt={data.title || "Destination Image"}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold">{data.title}</h2>

        <Link
          href={`/destinations/${data.slug}`}
          className="text-blue-600 mt-3 block"
        >
          View More →
        </Link>
      </div>
    </div>
  );
}
