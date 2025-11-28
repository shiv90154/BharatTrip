import Link from "next/link";

export default function BlogCard({ data }) {
  return (
    <div className="shadow rounded overflow-hidden bg-white">
      <img src={data.image} className="h-48 w-full object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-semibold">{data.title}</h3>
        <p className="text-gray-600 text-sm">{data.excerpt}</p>

        <Link href={`/blogs/${data.slug}`} className="text-blue-600 mt-3 block">
          Read More →
        </Link>
      </div>
    </div>
  );
}
