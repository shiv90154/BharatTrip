import { dbConnect } from "./dbConnect.js";
import Blog from "../lib/models/Blog.js";

async function seedBlogs() {
  await dbConnect();

  await Blog.deleteMany();

  await Blog.insertMany([
    {
      title: "Top 10 Places to Visit in India",
      slug: "top-10-places-india",
      image: "/blog1.jpg",
      excerpt: "Here are the best places every traveler must visit...",
      content: "Full long blog content goes here...",
    },
    {
      title: "A Complete Guide to Goa Travel",
      slug: "goa-travel-guide",
      image: "/goa.jpg",
      excerpt: "Goa is famous for beaches and nightlife...",
      content: "Full long blog content goes here...",
    },
  ]);

  console.log("✔ Blogs Seeded Successfully");
  process.exit();
}

seedBlogs();
