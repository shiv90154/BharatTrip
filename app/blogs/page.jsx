import BlogCard from "@/components/BlogCard";

export default function Blogs() {
  const blogs = [
    { title: "Best Places to Visit in India", slug: "best-places", image: "/blog1.jpg", excerpt: "Top 10 places..." },
    { title: "Goa Travel Guide", slug: "goa-guide", image: "/goa.jpg", excerpt: "The ultimate guide..." },
  ];

  return (
    <div className="pt-24 max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Travel Blogs</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((b) => (
          <BlogCard key={b.slug} data={b} />
        ))}
      </div>
    </div>
  );
}
